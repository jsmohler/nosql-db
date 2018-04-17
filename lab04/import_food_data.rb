require 'time'

import 'org.apache.hadoop.hbase.client.HTable'
import 'org.apache.hadoop.hbase.client.Put'
import 'javax.xml.stream.XMLStreamConstants'

def jbytes(*args)
  args.map { |arg| arg.to_s.to_java_bytes }
end

factory = javax.xml.stream.XMLInputFactory.newInstance
reader = factory.createXMLStreamReader(java.lang.System.in)

document = nil
buffer = nil
count = 0

table = HTable.new(@hbase.configuration, 'foods')
table.setAutoFlush(false)

while reader.has_next
  type = reader.next

  if type == XMLStreamConstants::START_ELEMENT

    case reader.local_name
    when 'Food_Display_Table' then document = {}
    when /Food_Code|Display_Name|Portion_Default|Portion_Amount|Portion_Display_Name|Factor|Increment|Multiplier|Grains|Whole_Grains|Vegetables|Orange_Vegetables|Drkgreen_Vegetables|Starchy_vegetables|Other_Vegetables|Fruits|Milk|Meats|Soy|Drybeans_Peas|Oils|Solid_Fats|Added_Sugars|Alcohol|Calories|Saturated_Fats/ then buffer = []
    end

  elsif type == XMLStreamConstants::CHARACTERS

    buffer << reader.text unless buffer.nil?

  elsif type == XMLStreamConstants::END_ELEMENT

    case reader.local_name
    when /Food_Code|Display_Name|Portion_Default|Portion_Amount|Portion_Display_Name|Factor|Increment|Multiplier|Grains|Whole_Grains|Vegetables|Orange_Vegetables|Drkgreen_Vegetables|Starchy_vegetables|Other_Vegetables|Fruits|Milk|Meats|Soy|Drybeans_Peas|Oils|Solid_Fats|Added_Sugars|Alcohol|Calories|Saturated_Fats/
      document[reader.local_name] = buffer.join
    when 'Food_Display_Row'
      key = document['food_code'].to_i

      p = Put.new(key)
      p.add(*jbytes("facts", "name", document['display_name']))
      p.add(*jbytes("facts", "portion default", document['portion_default']))
      p.add(*jbytes("facts", "portion amount", document['portion_amount']))
      p.add(*jbytes("facts", "portion display name", document['portion_display_name']))
      p.add(*jbytes("facts", "factor", document['factor']))
      p.add(*jbytes("facts", "increment", document['increment']))
      p.add(*jbytes("facts", "multiplier", document['multiplier']))
      p.add(*jbytes("facts", "grains", document['grains']))
      p.add(*jbytes("facts", "whole grains", document['whole_grains']))
      p.add(*jbytes("facts", "vegetables", document['vegetables']))
      p.add(*jbytes("facts", "orange vegetables", document['orange_vegetables']))
      p.add(*jbytes("facts", "dark green vegetables", document['drkgreen_vegetables']))
      p.add(*jbytes("facts", "starchy vegetables", document['starchy_vegetables']))
      p.add(*jbytes("facts", "other vegetables", document['other_vegetables']))
      p.add(*jbytes("facts", "fruits", document['fruits']))
      p.add(*jbytes("facts", "milk", document['milk']))
      p.add(*jbytes("facts", "meats", document['meats']))
      p.add(*jbytes("facts", "soy", document['soy']))
      p.add(*jbytes("facts", "drybeans peas", document['Drybeans_Peas']))
      p.add(*jbytes("facts", "oils", document['Oils']))
      p.add(*jbytes("facts", "solid fats", document['Solid_Fats']))
      p.add(*jbytes("facts", "added sugars", document['Added_Sugars']))
      p.add(*jbytes("facts", "alcohol", document['Alcohol']))
      p.add(*jbytes("facts", "calories", document['Calories']))
      p.add(*jbytes("facts", "saturated fats", document['Saturated_Fats']))
      table.put(p)

      count += 1
      table.flushCommits() if count % 10 == 0
      if count % 500 == 0
        puts "#{count} records inserted (#{document['food_code']})"
      end
    end
  end
end

table.flushCommits()
exit
