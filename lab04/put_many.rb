import 'org.apache.hadoop.hbase.client.HTable'
import 'org.apache.hadoop.hbase.client.Put'

def put_many(table_name, row, column_values)
    HTable table = new HTable(@hbase.configuration, table_name)

    p = Put.new(*jbytes(row))
    column_values.each do |key, value|
    value_array = key.split(':')
    p.add(*jbytes(value_array[0], value_array[1], value))

    table.put(p)
end
