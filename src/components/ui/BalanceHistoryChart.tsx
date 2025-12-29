import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { balanceHistoryData } from "../../data/dashboardData";

export function BalanceHistoryChart() {
  return (
    <div className="w-full h-[276px] bg-white rounded-[25px] p-6">
      <h2 className="text-[22px] font-semibold text-[#343C6A] mb-4 text-left">
        Balance History
      </h2>
      <ResponsiveContainer width="100%" height="85%">
        <AreaChart
          data={balanceHistoryData}
          margin={{
            top: 10,
            right: 0,
            left: -20,
            bottom: 0,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E6EFF5"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF", fontSize: 12 }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF", fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.05)",
            }}
          />
          <Area
            type="monotone"
            dataKey="balance"
            stroke="#1814F3"
            strokeWidth={3}
            fill="#1814F3"
            fillOpacity={0.1}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
