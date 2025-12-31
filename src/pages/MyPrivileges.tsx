import { privilegesData } from "../data/dashboardData";
import { ShoppingCart, Plane, Shield, Headphones } from "lucide-react";

const iconMap: Record<string, any> = {
  "shopping-cart": ShoppingCart,
  plane: Plane,
  shield: Shield,
  headphones: Headphones,
};

export default function MyPrivileges() {
  return (
    <div className="flex flex-col gap-6 md:gap-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-[30px]">
        <div className="bg-white rounded-[25px] p-8 flex flex-col justify-center gap-6">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">
            My Privilege
          </h2>
          <div className="flex items-center gap-6">
            <div className="w-[120px] h-[120px] rounded-full border-[8px] border-[#DCFAF8] flex items-center justify-center">
              <span className="text-[24px] font-bold text-[#16DBCC]">Gold</span>
            </div>
            <div>
              <p className="text-[#343C6A] text-[18px] font-medium mb-1">
                Your Points
              </p>
              <h3 className="text-[#1814F3] text-[30px] font-bold mb-4">
                8,750
              </h3>
              <button className="bg-[#1814F3] text-white px-8 py-3 rounded-[50px] font-medium hover:bg-[#0A06F4] transition-colors">
                Redeem Points
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-[25px] p-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
            How to Earn Points
          </h2>
          <ul className="list-disc pl-5 space-y-4 text-[#718EBF] text-[16px]">
            <li>Use your credit card for daily purchases.</li>
            <li>Pay your loans on time.</li>
            <li>Refer a friend to join BankDash.</li>
            <li>Invest in recommended stocks.</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-[25px] p-6 lg:p-[30px]">
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
          Available Rewards
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {privilegesData.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={index}
                className="border border-[#E6EFF5] rounded-[20px] p-6 flex flex-col items-start gap-4 hover:shadow-lg transition-shadow bg-white"
              >
                <div
                  className="h-[60px] w-[60px] rounded-[15px] flex items-center justify-center"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon className="h-7 w-7" style={{ color: item.color }} />
                </div>
                <div>
                  <h3 className="text-[18px] font-semibold text-[#232323] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#718EBF] text-[14px]">{item.desc}</p>
                </div>
                <button className="mt-auto text-[#1814F3] font-medium text-[15px]">
                  Claim Reward
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
