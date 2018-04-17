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
    when 'Food_Display_Row' then document = {}
    when /food_code|display_name|portion_amount|portion_display_name/ then buffer = []
    end

  elsif type == XMLStreamConstants::CHARACTERS

    buffer << reader.text unless buffer.nil?

  elsif type == XMLStreamConstants::END_ELEMENT

    case reader.local_name
    when /food_code|display_name|portion_amount|portion_display_name/
      document[reader.local_name] = buffer.join
    when 'Food_Display_Row'
      key = document['food_code'].to_i

      p = Put.new(key)
      p.add(*jbytes("facts", "name", document['display_name']))
      p.add(*jbytes("facts", "portion amount", document['portion_amount']))
      p.add(*jbytes("facts", "portion type", document['portion_display_name']))
      table.put(p)

      count += 1
      table.flushCommits() if count % 10 == 0
      if count % 500 == 0
        puts "#{count} records inserted (#{document['display_name']})"
      end
    end
  end
end

table.flushCommits()
exit
