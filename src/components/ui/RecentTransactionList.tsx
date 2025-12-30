import { recentTransactions } from "../../data/dashboardData";
import { CreditCard, DollarSign, Wallet } from "lucide-react";
import { cn } from "../../lib/utils";

const iconMap: Record<string, any> = {
  "credit-card": CreditCard,
  paypal: Wallet, // Using Wallet as proxy for Paypal icon
  "dollar-sign": DollarSign,
};

export function RecentTransactionList() {
  return (
    <div className="w-full bg-white rounded-[25px] p-6 h-[250px] overflow-y-auto custom-scrollbar">
      {/* Title removed to allow external control */}
      <div className="flex flex-col gap-4">
        {recentTransactions.map((item) => {
          const Icon = iconMap[item.icon] || DollarSign;
          return (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                >
                  <Icon className="h-6 w-6" style={{ color: item.iconColor }} />
                </div>
                <div>
                  <p className="text-base font-medium text-[#232323]">
                    {item.type}
                  </p>
                  <p className="text-sm text-[#718EBF]">{item.date}</p>
                </div>
              </div>
              <p
                className={cn(
                  "text-base font-medium",
                  item.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"
                )}
              >
                {item.amount > 0 ? "+" : ""}$
                {Math.abs(item.amount).toLocaleString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
