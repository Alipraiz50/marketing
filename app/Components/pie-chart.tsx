'use client'

import { PieChart as RePieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
  { name: 'Transaction Processing', value: 60 },
  { name: 'Loan Origination', value: 40 },
]

const COLORS = ['#FF6B00', '#FFB800']

export function PieChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RePieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius="40%"
          outerRadius="60%"
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          verticalAlign="middle"
          align="right"
          iconType="circle"
          iconSize={10}
        />
      </RePieChart>
    </ResponsiveContainer>
  )
}

