import { cn } from "../../lib/utils";

interface CreditCardProps {
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string;
  variant?: "dark" | "light";
}

export function CreditCard({
  balance,
  cardHolder,
  validThru,
  cardNumber,
  variant = "dark",
}: CreditCardProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={cn(
        "relative flex flex-col justify-between w-full h-[235px] rounded-[25px] p-6 text-white overflow-hidden transition-colors",
        isDark
          ? "bg-gradient-to-r from-[#5B5A6F] to-[#000000] text-white"
          : "bg-white text-[#343C6A] border border-[#E6EFF5]"
      )}
      style={
        isDark
          ? {
              background:
                "linear-gradient(107.38deg, #4C49ED 2.61%, #0A06F4 101.2%)",
            }
          : {}
      }
    >
      {/* Top Section */}
      <div className="flex justify-between items-start z-10">
        <div>
          <p
            className={cn(
              "text-xs mb-1",
              isDark ? "text-white/70" : "text-[#718EBF]"
            )}
          >
            Balance
          </p>
          <h3
            className={cn(
              "text-xl font-semibold",
              isDark ? "text-white" : "text-[#343C6A]"
            )}
          >
            ${balance.toLocaleString()}
          </h3>
        </div>
        <div>
          <img
            src="/assets/chip.svg"
            alt="Chip"
            className={cn(
              "w-9 h-9 opacity-80",
              !isDark && "brightness-0 opacity-20"
            )}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex gap-16 z-10">
        <div>
          <p
            className={cn(
              "text-[10px] uppercase mb-1",
              isDark ? "text-white/70" : "text-[#718EBF]"
            )}
          >
            Card Holder
          </p>
          <p className="text-[15px] font-semibold">{cardHolder}</p>
        </div>
        <div>
          <p
            className={cn(
              "text-[10px] uppercase mb-1",
              isDark ? "text-white/70" : "text-[#718EBF]"
            )}
          >
            Valid Thru
          </p>
          <p className="text-[15px] font-semibold">{validThru}</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div
        className={cn(
          "flex justify-between items-center pt-4 -mx-6 -mb-6 px-6 pb-6 z-10",
          isDark
            ? "bg-gradient-to-b from-white/15 to-white/0"
            : "border-t border-[#E6EFF5]"
        )}
      >
        <p className="text-[22px] font-semibold tracking-wider font-mono">
          {cardNumber}
        </p>
        <div className="flex items-center">
          {/* Mastercard circles */}
          <div
            className={cn(
              "w-8 h-8 rounded-full z-10 -mr-4",
              isDark ? "bg-white/50" : "bg-[#9199AF]/50"
            )}
          />
          <div
            className={cn(
              "w-8 h-8 rounded-full",
              isDark ? "bg-white/50" : "bg-[#9199AF]/50"
            )}
          />
        </div>
      </div>
    </div>
  );
}
