import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import { cn } from "../../lib/utils";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  // Extract title from path
  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case "/":
        return "Overview";
      case "/transactions":
        return "Transactions";
      case "/accounts":
        return "Accounts";
      case "/investments":
        return "Investments";
      case "/credit-cards":
        return "Credit Cards";
      case "/loans":
        return "Loans";
      case "/services":
        return "Services";
      case "/my-privileges":
        return "My Privileges";
      case "/setting":
        return "Setting";
      default:
        return "Overview";
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F7FA]">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar
        className={cn(
          "fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 lg:translate-x-0 border-r border-[#E6EFF5]",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-[250px]">
        <TopHeader
          title={getPageTitle(location.pathname)}
          onMenuClick={() => setSidebarOpen(true)}
        />

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-6 py-4">
          <div className="relative w-full bg-white rounded-[40px] shadow-sm">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 text-[#718EBF]">
              <Search className="h-5 w-5" />
            </div>
            <Input
              className="pl-12 h-[50px] rounded-[40px] border-none bg-white text-[#8BA3CB] placeholder:text-[#8BA3CB] focus-visible:ring-0"
              placeholder="Search for something"
            />
          </div>
        </div>
        <main className="flex-1 overflow-y-auto p-6 lg:p-[30px]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
