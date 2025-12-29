import { Search, Settings, Bell, Menu } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TopHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function TopHeader({ title, onMenuClick }: TopHeaderProps) {
  return (
    <header className="flex flex-col gap-4 px-6py-5 md:flex-row md:items-center md:justify-between bg-white  p-5 md:px-[30px] md:py-5 border-b border-[#E6EFF5]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="h-6 w-6 text-[#343C6A]" />
          </Button>
          <h1 className="text-[20px] md:text-[28px] font-semibold text-[#343C6A]">
            {title}
          </h1>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <img
            src="/images/firaz-linkedin.jpg"
            alt="Profile"
            className="h-[35px] w-[35px] rounded-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5 md:gap-[30px]">
        <div className="relative hidden md:block w-full max-w-[235px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718EBF]">
            <Search className="h-5 w-5" />
          </div>
          <Input
            className="pl-12 text-base rounded-[40px] bg-[#F5F7FA] border-none text-[#8BA3CB] placeholder:text-[#8BA3CB]"
            placeholder="Search for something"
          />
        </div>

        <div className="hidden md:flex items-center gap-[30px]">
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-[#F5F7FA] h-[50px] w-[50px] hover:bg-[#e6eff5]"
          >
            <Settings className="h-6 w-6 text-[#718EBF]" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full bg-[#F5F7FA] h-[50px] w-[50px] hover:bg-[#e6eff5] text-[#FE5C73]"
          >
            <Bell className="h-6 w-6" />
          </Button>
          <img
            src="/images/firaz-linkedin.jpg"
            alt="Profile"
            className="h-[60px] w-[60px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="relative md:hidden w-full">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718EBF]">
          <Search className="h-5 w-5" />
        </div>
        <Input
          className="pl-12 rounded-[40px] bg-[#F5F7FA] border-none text-[#8BA3CB] placeholder:text-[#8BA3CB]"
          placeholder="Search for something"
        />
      </div>
    </header>
  );
}
