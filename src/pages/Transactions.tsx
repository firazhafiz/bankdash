import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "../lib/utils";

const allTransactions = [
  {
    id: "#12548796",
    description: "Spotify Subscription",
    date: "28 Jan, 12.30 AM",
    type: "Shopping",
    card: "1234 ****",
    amount: -2500,
    status: "Pending",
  },
  {
    id: "#12548796",
    description: "Freepik Sales",
    date: "25 Jan, 10.40 PM",
    type: "Transfer",
    card: "1234 ****",
    amount: 750,
    status: "Completed",
  },
  {
    id: "#12548796",
    description: "Mobile Service",
    date: "20 Jan, 10.40 PM",
    type: "Service",
    card: "1234 ****",
    amount: -150,
    status: "Completed",
  },
  {
    id: "#12548796",
    description: "Wilson",
    date: "15 Jan, 03.29 PM",
    type: "Transfer",
    card: "1234 ****",
    amount: -1050,
    status: "Pending",
  },
  {
    id: "#12548796",
    description: "Emilly",
    date: "14 Jan, 10.40 PM",
    type: "Transfer",
    card: "1234 ****",
    amount: 840,
    status: "Completed",
  },
];

export default function Transactions() {
  return (
    <div className="bg-white rounded-[25px] p-6 lg:p-[30px] min-h-[600px] flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="bg-transparent border-b border-[#E6EFF5] w-full md:w-auto overflow-x-auto flex-nowrap scrollbar-hide gap-10">
            <TabsTrigger value="all" className="pb-3 px-2 text-[16px]">
              All Transactions
            </TabsTrigger>
            <TabsTrigger value="income" className="pb-3 px-2 text-[16px]">
              Income
            </TabsTrigger>
            <TabsTrigger value="expense" className="pb-3 px-2 text-[16px]">
              Expense
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Table Header (Desktop Only) */}
      <div className="hidden md:grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] gap-4 px-4 py-3 border-b border-[#E6EFF5] text-[#718EBF] font-medium text-[16px]">
        <div>Description</div>
        <div>Transaction ID</div>
        <div>Type</div>
        <div>Card</div>
        <div>Date</div>
        <div className="text-right">Amount</div>
      </div>

      {/* Transactions List */}
      <div className="flex flex-col gap-4">
        {allTransactions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:grid md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] items-start md:items-center gap-4 px-0 md:px-4 py-3 border-b border-[#E6EFF5] last:border-none"
          >
            {/* Mobile View: Description + Date */}
            <div className="flex items-center gap-4 md:contents">
              <div className="flex md:hidden h-[50px] w-[50px] items-center justify-center rounded-full bg-[#f5f7fa]">
                {item.amount > 0 ? (
                  <ArrowDown className="text-[#41D4A8]" />
                ) : (
                  <ArrowUp className="text-[#FF4B4A]" />
                )}
              </div>
              <div className="flex-1 md:contents">
                <div className="flex flex-col md:block">
                  <p className="text-[#232323] font-medium text-[16px] md:font-normal">
                    {item.description}
                  </p>
                  <p className="text-[#718EBF] text-[13px] md:hidden">
                    {item.date}
                  </p>
                </div>
              </div>
            </div>

            <div className="hidden md:block text-[#232323] text-[16px]">
              {item.id}
            </div>
            <div className="hidden md:block text-[#232323] text-[16px]">
              {item.type}
            </div>
            <div className="hidden md:block text-[#232323] text-[16px]">
              {item.card}
            </div>
            <div className="hidden md:block text-[#232323] text-[16px]">
              {item.date}
            </div>

            {/* Status Badge (Desktop) vs Amount (Right Aligned) */}
            <div className="w-full md:w-auto flex justify-between md:block text-right">
              <span
                className={cn(
                  "rounded-[50px] px-4 py-2 border text-[15px] font-medium md:hidden",
                  item.status === "Completed"
                    ? "border-[#16DBCC] text-[#16DBCC]"
                    : "border-[#718EBF] text-[#718EBF]"
                )}
              >
                {item.status}
              </span>
              <p
                className={cn(
                  "font-medium text-[16px]",
                  item.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"
                )}
              >
                {item.amount > 0 ? "+" : ""}$
                {Math.abs(item.amount).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
