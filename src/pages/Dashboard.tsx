import { CreditCard } from "../components/ui/CreditCard";
import { WeeklyActivityChart } from "../components/ui/WeeklyActivityChart";
import { BalanceHistoryChart } from "../components/ui/BalanceHistoryChart";
import { RecentTransactionList } from "../components/ui/RecentTransactionList";
import { QuickTransfer } from "../components/ui/QuickTransfer";
import { DonutChart } from "../components/ui/DonutChart";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 md:gap-[30px]">
      {/* Top Row: My Cards & Recent Transaction */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[30px]">
        {/* My Cards (2/3 width on desktop) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">
              My Cards
            </h2>
            <button className="text-[17px] font-semibold text-[#343C6A] hover:text-[#1814F3]">
              See All
            </button>
          </div>

          <div className="flex items-center gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 scrollbar-hide">
            <div className="min-w-[350px] md:min-w-0 flex-1">
              <CreditCard
                balance={5756}
                cardHolder="Eddy Cusuma"
                validThru="12/22"
                cardNumber="3778 **** **** 1234"
                variant="dark"
              />
            </div>
            <div className="min-w-[350px] md:min-w-0 flex-1">
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

        {/* Recent Transaction (1/3 width) */}
        <div className="flex flex-col gap-5">
          <div className="h-[26px]"></div>{" "}
          {/* Spacer to align with My Cards title */}
          <RecentTransactionList />
        </div>
      </div>

      {/* Middle Row: Weekly Activity & Expense Statistics */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[30px]">
        <div className="lg:col-span-2">
          <WeeklyActivityChart />
        </div>
        <div className="bg-white rounded-[25px] p-6 h-[322px] flex flex-col md:h-[250px]">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-4 text-left">
            Expense Statistics
          </h2>
          <div className="flex-1 flex items-center justify-center">
            <DonutChart />
          </div>
        </div>
      </div>

      {/* Bottom Row: Quick Transfer & Balance History */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 md:gap-[30px]">
        <div>
          <QuickTransfer />
        </div>
        <div>
          <BalanceHistoryChart />
        </div>
      </div>
    </div>
  );
}
