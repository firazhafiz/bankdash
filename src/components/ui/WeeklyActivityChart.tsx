import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { weeklyActivityData } from "../../data/dashboardData";

export function WeeklyActivityChart() {
  return (
    <div className="w-full h-[250px] md:h-[322px] bg-white rounded-[25px] p-6">
      <h2 className="text-[22px] font-semibold text-[#343C6A] mb-4 text-left">
        Weekly Activity
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={weeklyActivityData}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
          barGap={12}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E6EFF5"
          />
          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#718EBF", fontSize: 12 }}
            dy={10}
          />
          <Tooltip
            cursor={{ fill: "transparent" }}
            contentStyle={{
              borderRadius: "10px",
              border: "none",
              boxShadow: "0px 4px 14px rgba(0,0,0,0.05)",
            }}
          />
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ paddingBottom: "20px" }}
          />
          <Bar
            name="Diposit"
            dataKey="deposit"
            fill="#1814F3"
            barSize={15}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            name="Withdraw"
            dataKey="withdraw"
            fill="#16DBCC"
            barSize={15}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
