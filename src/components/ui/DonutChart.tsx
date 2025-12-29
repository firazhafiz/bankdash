import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { name: 'DBL Bank', value: 30, color: '#1814F3' },
  { name: 'BRC Bank', value: 30, color: '#FF82AC' },
  { name: 'ABM Bank', value: 20, color: '#16DBCC' },
  { name: 'MCP Bank', value: 20, color: '#FFBB38' },
]

export function DonutChart() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="relative h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
              // cornerRadius={10} 
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text (Optional based on design, design shows concentric rings maybe, simplified to simple donut for now) */}
      </div>

      <div className="mt-4 px-4 flex flex-wrap justify-center gap-6">
        {data.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2">
            <div 
              className="h-3 w-3 rounded-full" 
              style={{ backgroundColor: entry.color }} 
            />
            <span className="text-sm text-[#718EBF] font-medium">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
