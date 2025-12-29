import { cn } from "../../lib/utils";

interface AccountCardProps {
  type: string;
  balance: number;
  number: string;
  icon: any;
  bgConfig: { bg: string; iconBg: string; iconColor: string };
}

export function AccountCard({
  type,
  balance,
  number,
  icon: Icon,
  bgConfig,
}: AccountCardProps) {
  return (
    <div className="bg-white rounded-[25px] p-[25px] flex flex-col justify-between h-[280px]">
      <div className="flex items-center gap-4 text-[#718EBF] mb-6">
        <div
          className={cn(
            "h-[45px] w-[45px] rounded-[15px] flex items-center justify-center",
            bgConfig.iconBg
          )}
        >
          <Icon className="h-6 w-6" style={{ color: bgConfig.iconColor }} />
        </div>
        <div>
          <p className="text-[16px] font-normal">{type}</p>
          <p className="text-[13px] opacity-70">Last Verified</p>
        </div>
      </div>

      <div>
        <p className="text-[#718EBF] text-[12px] font-normal mb-1">Balance</p>
        <h3 className="text-[#232323] text-[20px] font-semibold">
          ${balance.toLocaleString()}
        </h3>
      </div>

      <div className="pt-6 mt-auto">
        <div className="flex items-center justify-between mb-2">
          <p className="text-[#718EBF] text-[12px] opacity-70">CARD NUMBER</p>
          <p className="text-[#232323] text-[16px] font-semibold">{number}</p>
        </div>
        <div className="border border-[#718EBF] rounded-[10px] w-full flex items-center justify-center py-3 cursor-pointer hover:bg-[#F5F7FA] transition-colors">
          <p className="text-[#343C6A] text-[15px] font-medium uppercase tracking-wide">
            Transfer
          </p>
        </div>
      </div>
    </div>
  );
}
