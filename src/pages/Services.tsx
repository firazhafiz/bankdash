import { ServiceCard } from "../components/ui/ServiceCard";
import { Shield, ShoppingBag, PieChart, User, Landmark } from "lucide-react";

// Specific top cards from design
const topServices = [
  {
    icon: Shield,
    title: "Life Insurance",
    subtitle: "Unlimited protection",
    bg: "#E7EDFF",
    color: "#1814F3",
  },
  {
    icon: ShoppingBag,
    title: "Shopping",
    subtitle: "Buy. Think. Grow.",
    bg: "#FFF5D9",
    color: "#FFBB38",
  },
  {
    icon: Shield,
    title: "Safety",
    subtitle: "We are your allies",
    bg: "#DCFAF8",
    color: "#16DBCC",
  },
];

// Detailed list matching the image
const serviceList = [
  {
    icon: PieChart,
    title: "Business loans",
    subtitle: "It is a long established",
    bg: "#FFE0EB",
    color: "#FF82AC",
  },
  {
    icon: Landmark,
    title: "Checking accounts",
    subtitle: "It is a long established",
    bg: "#FFF5D9",
    color: "#FFBB38",
  },
  {
    icon: PieChart,
    title: "Savings accounts",
    subtitle: "It is a long established",
    bg: "#FFE0EB",
    color: "#FF82AC",
  },
  {
    icon: User,
    title: "Debit and credit cards",
    subtitle: "It is a long established",
    bg: "#E7EDFF",
    color: "#1814F3",
  },
  {
    icon: Shield,
    title: "Life Insurance",
    subtitle: "It is a long established",
    bg: "#DCFAF8",
    color: "#16DBCC",
  },
  {
    icon: PieChart,
    title: "Business loans",
    subtitle: "It is a long established",
    bg: "#FFE0EB",
    color: "#FF82AC",
  },
];

export default function Services() {
  return (
    <div className="flex flex-col gap-[30px]">
      {/* Services Grid */}
      <section>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-[30px] md:mx-0 md:px-0 md:pb-0 scrollbar-hide">
          {topServices.map((service, index) => (
            <div key={index} className="min-w-[280px] md:min-w-0">
              <ServiceCard
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                iconBgInfo={{ bg: service.bg, color: service.color }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Bank Services List */}
      <section>
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">
          Bank Services List
        </h2>
        <div className="flex flex-col gap-4">
          {serviceList.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] p-4 md:p-[20px] flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div
                  className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[20px]"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon
                    className="h-7 w-7"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-[#232323]">
                    {item.title}
                  </p>
                  <p className="text-sm text-[#718EBF]">{item.subtitle}</p>
                </div>
              </div>

              {/* Columns for Description - Hidden on Mobile, Visible on Desktop */}
              <div className="flex-1 hidden md:grid grid-cols-3 gap-4 text-[#232323] text-base font-medium ml-8">
                <div className="flex flex-col">
                  <span className="text-base text-[#232323]">Lorem Ipsum</span>
                  <span className="text-sm text-[#718EBF] font-normal">
                    Many publishing
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base text-[#232323]">Lorem Ipsum</span>
                  <span className="text-sm text-[#718EBF] font-normal">
                    Many publishing
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-base text-[#232323]">Lorem Ipsum</span>
                  <span className="text-sm text-[#718EBF] font-normal">
                    Many publishing
                  </span>
                </div>
              </div>

              <button className="hidden md:block w-auto px-6 py-3 rounded-[50px] border border-[#1814F3] text-[#1814F3] text-sm font-medium hover:bg-[#1814F3] hover:text-white transition-colors">
                View Details
              </button>

              {/* Mobile View Details - Text Only */}
              <button className="md:hidden text-sm font-medium text-[#1814F3]">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
