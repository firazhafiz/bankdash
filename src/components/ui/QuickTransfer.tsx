import { useState } from "react";
import { quickTransferUsers } from "../../data/dashboardData";
import { ChevronRight, Send } from "lucide-react";
import { Input } from "./input";
import { Button } from "./button";

export function QuickTransfer() {
  const [amount, setAmount] = useState("525.50");

  return (
    <div className="w-full h-[276px] bg-white rounded-[25px] p-6 flex flex-col justify-between">
      <h2 className="text-[22px] font-semibold text-[#343C6A] text-left">
        Quick Transfer
      </h2>

      <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-2 px-2">
        {quickTransferUsers.map((user, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group"
          >
            <img
              src={user.image}
              alt={user.name}
              className="w-[70px] h-[70px] rounded-full object-cover border-2 border-transparent group-hover:border-[#1814F3] transition-all"
            />
            <div className="text-center">
              <p className="text-[14px] font-bold text-[#232323] whitespace-nowrap">
                {user.name}
              </p>
              <p className="text-[13px] font-bold text-[#718EBF]">
                {user.role}
              </p>
            </div>
          </div>
        ))}
        <button className="w-12 h-12 rounded-full border border-[#E6EFF5] flex items-center justify-center shrink-0 hover:bg-[#F5F7FA] shadow-sm">
          <ChevronRight className="text-[#718EBF]" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        <p className="text-[#718EBF] text-[15px] whitespace-nowrap">
          Write Amount
        </p>
        <div className="flex-1 relative bg-[#EDF1F7] rounded-[50px] h-[50px] flex items-center pr-0 overflow-hidden">
          <Input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent border-none shadow-none h-full text-[#718EBF] font-medium pl-6 focus-visible:ring-0"
          />
          <Button className="h-full rounded-[50px] px-6 bg-[#1814F3] hover:bg-[#0A06F4] flex items-center gap-2 absolute right-0 top-0 bottom-0 shadow-lg shadow-indigo-500/30">
            Send <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
