import { Search, Settings, Bell, Menu } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface TopHeaderProps {
  title: string;
  onMenuClick: () => void;
}

export function TopHeader({ title, onMenuClick }: TopHeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-5 md:px-[30px] md:py-5 border-b border-[#E6EFF5] relative">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6 text-[#343C6A]" />
        </Button>
        {/* Desktop Title */}
        <h1 className="hidden lg:block text-[28px] font-semibold text-[#343C6A]">
          {title}
        </h1>
      </div>

      {/* Mobile Title (Centered) */}
      <div className="lg:hidden absolute left-1/2 -translate-x-1/2">
        <h1 className="text-[20px] font-semibold text-[#343C6A]">{title}</h1>
      </div>

      {/* Desktop Search & Icons */}
      <div className="hidden lg:flex items-center gap-[30px]">
        <div className="relative w-full max-w-[235px]">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#718EBF]">
            <Search className="h-5 w-5" />
          </div>
          <Input
            className="pl-12 text-base rounded-[40px] bg-[#F5F7FA] border-none text-[#8BA3CB] placeholder:text-[#8BA3CB]"
            placeholder="Search for something"
          />
        </div>

        <div className="flex items-center gap-[30px]">
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
            <img
              src="/assets/notif.svg"
              alt="Notification"
              className="w-6 h-6"
            />
          </Button>
          <img
            src="/images/profile.jpg"
            alt="Profile"
            className="h-[60px] w-[60px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Mobile Profile (Right) */}
      <div className="lg:hidden flex items-center">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="h-[35px] w-[35px] rounded-full object-cover"
        />
      </div>
    </header>
  );
}
