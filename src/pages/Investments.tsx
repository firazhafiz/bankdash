import {
  investmentStats,
  yearlyInvestmentData,
  monthlyRevenueData,
} from "../data/dashboardData";
import { DollarSign, PieChart, TrendingUp, Apple, Play } from "lucide-react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const iconMap: Record<string, any> = {
  "dollar-sign": DollarSign,
  "pie-chart": PieChart,
  "trending-up": TrendingUp,
};

const myInvestments = [
  {
    name: "Apple Store",
    desc: "E-commerce, Marketplace",
    value: 54000,
    return: "+16%",
    icon: Apple,
    bg: "#FFE0EB",
    color: "#FF82AC",
  },
  {
    name: "Samsung Mobile",
    desc: "E-commerce, Marketplace",
    value: 25300,
    return: "-4%",
    icon: Play,
    bg: "#E7EDFF",
    color: "#396AFF",
  },
  {
    name: "Tesla Motors",
    desc: "Electric Vehicles",
    value: 8200,
    return: "+25%",
    icon: TrendingUp,
    bg: "#FFF5D9",
    color: "#FFBB38",
  },
];

export default function Investments() {
  return (
    <div className="flex flex-col gap-6 md:gap-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-[30px]">
        {investmentStats.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={index}
              className="bg-white rounded-[25px] p-6 flex items-center gap-6"
            >
              <div
                className="h-[70px] w-[70px] rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: item.bg }}
              >
                <Icon className="h-8 w-8" style={{ color: item.color }} />
              </div>
              <div>
                <p className="text-[#718EBF] text-[16px] mb-1">{item.title}</p>
                <p className="text-[#232323] text-[20px] font-semibold">
                  {typeof item.amount === "number"
                    ? `$${item.amount.toLocaleString()}`
                    : item.amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-[30px]">
        <div className="bg-white rounded-[25px] p-6 h-[350px]">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
            Yearly Total Investment
          </h2>
          <ResponsiveContainer width="100%" height="85%">
            <LineChart data={yearlyInvestmentData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E6EFF5"
              />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF" }}
              />
              <Tooltip contentStyle={{ borderRadius: "15px" }} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#FCAA0B"
                strokeWidth={4}
                dot={{ r: 6, fill: "#FCAA0B", strokeWidth: 2, stroke: "white" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-[25px] p-6 h-[350px]">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
            Monthly Revenue
          </h2>
          <ResponsiveContainer width="100%" height="85%">
            <AreaChart data={monthlyRevenueData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#E6EFF5"
              />
              <XAxis
                dataKey="year"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF" }}
                dy={10}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#718EBF" }}
              />
              <Tooltip contentStyle={{ borderRadius: "15px" }} />
              <Area
                type="monotone"
                dataKey="value"
                stroke="#396AFF"
                fill="#396AFF"
                fillOpacity={0.1}
                strokeWidth={3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white rounded-[25px] p-6 lg:p-[30px]">
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
          My Investment
        </h2>
        <div className="flex flex-col gap-4">
          {myInvestments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 md:px-0 rounded-[20px] md:rounded-none bg-[#F9FAFB] md:bg-transparent md:border-b md:border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-4">
                <div
                  className="h-[60px] w-[60px] rounded-[20px] flex items-center justify-center"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon
                    className="h-7 w-7"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <p className="text-[16px] font-semibold text-[#232323]">
                    {item.name}
                  </p>
                  <p className="text-[14px] text-[#718EBF]">{item.desc}</p>
                </div>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center md:items-end gap-2 text-right">
                <div>
                  <p className="text-[16px] font-semibold text-[#232323]">
                    ${item.value.toLocaleString()}
                  </p>
                  <p className="text-[14px] text-[#718EBF]">Investment Value</p>
                </div>
                <div>
                  <p
                    className={
                      item.return.startsWith("+")
                        ? "text-[#16DBCC] font-semibold"
                        : "text-[#FE5C73] font-semibold"
                    }
                  >
                    {item.return}
                  </p>
                  <p className="text-[14px] text-[#718EBF]">Return Value</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
