import { loansData } from "../data/dashboardData";
import { User, Briefcase, Building2, Wrench } from "lucide-react";

const iconMap: Record<string, any> = {
  user: User,
  briefcase: Briefcase,
  building: Building2,
  tool: Wrench,
};

export default function Loans() {
  return (
    <div className="flex flex-col gap-6 md:gap-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[30px]">
        {loansData.map((item, index) => {
          const Icon = iconMap[item.icon];
          return (
            <div
              key={index}
              className="bg-white rounded-[25px] p-6 flex flex-col items-center text-center"
            >
              <div className="h-[70px] w-[70px] rounded-[20px] bg-[#E7EDFF] flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-[#1814F3]" />
              </div>
              <h3 className="text-[18px] font-semibold text-[#232323] mb-1">
                {item.type}
              </h3>
              <p className="text-[14px] text-[#718EBF] mb-4">
                Loan Amount: ${item.amount.toLocaleString()}
              </p>

              <div className="flex items-center justify-between w-full border-t border-[#E6EFF5] pt-4 mb-4">
                <div className="text-left">
                  <p className="text-[12px] text-[#718EBF]">Left to repay</p>
                  <p className="text-[16px] font-semibold text-[#232323]">
                    ${item.left.toLocaleString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] text-[#718EBF]">Duration</p>
                  <p className="text-[16px] font-semibold text-[#232323]">
                    {item.duration}
                  </p>
                </div>
              </div>

              <button className="w-full py-3 rounded-[50px] border border-[#1814F3] text-[#1814F3] text-[15px] font-medium hover:bg-[#1814F3] hover:text-white transition-colors">
                Repay
              </button>
            </div>
          );
        })}
      </div>

      <div className="bg-white rounded-[25px] p-6 lg:p-[30px]">
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
          Active Loans Overview
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead className="border-b border-[#E6EFF5]">
              <tr className="text-[#718EBF] text-[16px] font-medium text-left">
                <th className="pb-4 font-medium">Loan Money</th>
                <th className="pb-4 font-medium">Left to Repay</th>
                <th className="pb-4 font-medium">Duration</th>
                <th className="pb-4 font-medium">Interest Rate</th>
                <th className="pb-4 font-medium">Installment</th>
                <th className="pb-4 font-medium">Repay</th>
              </tr>
            </thead>
            <tbody>
              {loansData.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-[#E6EFF5] last:border-none"
                >
                  <td className="py-4 text-[#232323] text-[16px]">
                    ${item.amount.toLocaleString()}
                  </td>
                  <td className="py-4 text-[#232323] text-[16px]">
                    ${item.left.toLocaleString()}
                  </td>
                  <td className="py-4 text-[#232323] text-[16px]">
                    {item.duration}
                  </td>
                  <td className="py-4 text-[#232323] text-[16px]">
                    {item.rate}
                  </td>
                  <td className="py-4 text-[#232323] text-[16px]">
                    ${item.installment.toLocaleString()} / month
                  </td>
                  <td className="py-4">
                    <button className="px-6 py-2 rounded-[50px] border border-[#232323] text-[#232323] text-[14px] font-medium hover:bg-[#232323] hover:text-white transition-colors">
                      Repay
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
