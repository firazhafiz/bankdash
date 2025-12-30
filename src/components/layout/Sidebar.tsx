import { Link, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  ReceiptText,
  Users,
  PieChart,
  CreditCard,
  HandCoins,
  Wrench,
  Lightbulb,
  Settings,
} from "lucide-react";
import { cn } from "../../lib/utils";

const menuItems = [
  { icon: LayoutGrid, label: "Dashboard", path: "/" },
  { icon: ReceiptText, label: "Transactions", path: "/transactions" },
  { icon: Users, label: "Accounts", path: "/accounts" },
  { icon: PieChart, label: "Investments", path: "/investments" },
  { icon: CreditCard, label: "Credit Cards", path: "/credit-cards" },
  { icon: HandCoins, label: "Loans", path: "/loans" },
  { icon: Wrench, label: "Services", path: "/services" },
  { icon: Lightbulb, label: "My Privileges", path: "/my-privileges" },
  { icon: Settings, label: "Setting", path: "/setting" },
];

export function Sidebar({
  className,
  onClose,
}: {
  className?: string;
  onClose?: () => void;
}) {
  const location = useLocation();

  return (
    <aside
      className={cn(
        "flex min-h-screen w-[250px] flex-col  bg-white py-8",
        className
      )}
    >
      <div className="flex items-center px-9 w-full mb-10">
        <img src="/assets/logo.svg" alt="Logo" className="h-9 w-auto mr-2" />
      </div>

      <nav className="flex flex-col">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={cn(
                "relative  flex items-center gap-4 px-9 py-4 transition-colors font-medium",
                isActive
                  ? "text-[#1814F3]"
                  : "text-[#B1B1B1] hover:text-[#1814F3]"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-[6px] rounded-r-[10px] bg-[#1814F3]" />
              )}
              <item.icon
                className={cn(
                  "h-6 w-6",
                  isActive ? "text-[#1814F3]" : "text-[#B1B1B1]"
                )}
              />
              <span className="text-lg">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
