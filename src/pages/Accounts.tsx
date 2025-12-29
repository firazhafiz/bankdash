import { AccountCard } from "../components/ui/AccountCard";
import { accountsData } from "../data/dashboardData";
import {
  CreditCard as CreditCardIcon,
  DollarSign,
  PiggyBank,
  Receipt,
} from "lucide-react";
import { RecentTransactionList } from "../components/ui/RecentTransactionList";
import { CreditCard } from "../components/ui/CreditCard";

const iconMap: Record<string, any> = {
  "dollar-sign": DollarSign,
  income: Receipt,
  expense: Receipt, // Using Receipt as proxy
  saving: PiggyBank,
};

export default function Accounts() {
  return (
    <div className="flex flex-col gap-6 md:gap-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-[30px]">
        {accountsData.map((item, index) => {
          const Icon = iconMap[item.icon] || CreditCardIcon;
          return (
            <AccountCard
              key={index}
              type={item.type}
              balance={item.balance}
              number={item.number}
              icon={Icon}
              bgConfig={item.bgConfig}
            />
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[30px]">
        {/* Recent Transactions (2/3 width) */}
        <div className="lg:col-span-2">
          <RecentTransactionList />
        </div>

        {/* Credit Card (1/3 width) */}
        <div className="flex flex-col gap-5">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">My Card</h2>
          <CreditCard
            balance={5756}
            cardHolder="Eddy Cusuma"
            validThru="12/22"
            cardNumber="3778 **** **** 1234"
            variant="light"
          />
        </div>
      </div>
    </div>
  );
}
