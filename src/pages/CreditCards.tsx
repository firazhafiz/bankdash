import { CreditCard } from "../components/ui/CreditCard";
import { DonutChart } from "../components/ui/DonutChart";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Shield,
  Lock,
  Smartphone,
  CreditCard as CreditCardIcon,
} from "lucide-react";

// Mock Data
const cardList = [
  {
    type: "Secondary",
    bank: "DBL Bank",
    number: "**** **** 5600",
    name: "William",
    iconBg: "#E7EDFF",
    iconColor: "#1814F3",
    icon: "credit-card",
  },
  {
    type: "Secondary",
    bank: "BRC Bank",
    number: "**** **** 4300",
    name: "Michel",
    iconBg: "#FFF5D9",
    iconColor: "#FFBB38",
    icon: "credit-card",
  },
  {
    type: "Secondary",
    bank: "ABM Bank",
    number: "**** **** 7560",
    name: "Edward",
    iconBg: "#FFE0EB",
    iconColor: "#FF82AC",
    icon: "credit-card",
  },
];

const cardSettings = [
  {
    icon: Shield,
    label: "Block Card",
    desc: "Instantly block your card",
    bg: "#FFF5D9",
    color: "#FFBB38",
  },
  {
    icon: Lock,
    label: "Change Pin Code",
    desc: "Withdraw without any card",
    bg: "#E7EDFF",
    color: "#1814F3",
  },
  {
    icon: Smartphone,
    label: "Add to Google Pay",
    desc: "Withdraw without any card",
    bg: "#FFE0EB",
    color: "#FF82AC",
  },
  {
    icon: Smartphone,
    label: "Add to Apple Pay",
    desc: "Withdraw without any card",
    bg: "#DCFAF8",
    color: "#16DBCC",
  },
  {
    icon: Smartphone,
    label: "Add to Apple Store",
    desc: "Withdraw without any card",
    bg: "#DCFAF8",
    color: "#16DBCC",
  },
];

export default function CreditCards() {
  return (
    <div className="flex flex-col gap-6 md:gap-[30px]">
      {/* My Cards Section */}
      <section>
        <div className="flex items-center justify-between mb-5 px-1">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-[30px]">
          <div className="min-w-[350px]  md:min-w-0">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="dark"
            />
          </div>
          <div className="min-w-[350px] md:min-w-0">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="dark"
            />
          </div>
          <div className="min-w-[350px] md:min-w-0">
            <CreditCard
              balance={5756}
              cardHolder="Eddy Cusuma"
              validThru="12/22"
              cardNumber="3778 **** **** 1234"
              variant="light"
            />
          </div>
        </div>
      </section>

      {/* Middle Section: Statistics & Card List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[30px]">
        {/* Card Expense Statistics */}
        <div>
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
            Card Expense Statistics
          </h2>
          <div className="bg-white rounded-[25px] p-6 lg:p-[30px] flex flex-col">
            <div className="flex-1 flex items-center justify-center">
              <DonutChart />
              {/* <p>Chart Placeholder (Build Debug)</p> */}
            </div>
          </div>
        </div>

        {/* Card List */}
        {/* Card List */}
        <div className="lg:col-span-2 flex flex-col">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">
            Card List
          </h2>
          <div className="flex flex-col gap-5">
            {cardList.map((card, index) => (
              <div
                key={index}
                className="grid grid-cols-2 md:grid-cols-5 items-center gap-4 bg-white px-6 py-4 rounded-[20px]"
              >
                {/* Kolom 1: Icon & Card Type */}
                <div className="flex items-center gap-4 min-w-[180px]">
                  <div
                    className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: card.iconBg }}
                  >
                    <CreditCardIcon
                      className="h-6 w-6"
                      style={{ color: card.iconColor }}
                    />
                  </div>
                  <div>
                    <p className="text-base text-[#343C6A] font-medium">
                      Card Type
                    </p>
                    <p className="text-[15px] text-[#718EBF]">{card.type}</p>
                  </div>
                </div>

                {/* Kolom 2: Bank */}
                <div className="hidden md:block">
                  <p className="text-base text-[#343C6A] font-medium">Bank</p>
                  <p className="text-[15px] text-[#718EBF]">{card.bank}</p>
                </div>

                {/* Kolom 3: Card Number */}
                <div className="hidden md:block">
                  <p className="text-base text-[#343C6A] font-medium">
                    Card Number
                  </p>
                  <p className="text-[15px] text-[#718EBF]">{card.number}</p>
                </div>

                {/* Kolom 4: Namain Card */}
                <div className="hidden md:block">
                  <p className="text-base text-[#343C6A] font-medium">
                    Namain Card
                  </p>
                  <p className="text-[15px] text-[#718EBF]">{card.name}</p>
                </div>

                {/* Kolom 5: Action Button */}
                <div className="hidden md:flex justify-end">
                  <button className="text-[15px] font-medium text-[#1814F3] hover:underline transition-all">
                    View Details
                  </button>
                </div>

                {/* Mobile View Details Button (visible only on small screens) */}
                <div className="md:hidden flex justify-end">
                  <button className="text-[13px] font-medium text-[#1814F3]">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section: Add New Card & Card Setting */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-[30px]">
        {/* Add New Card */}
        <div className="lg:col-span-2 bg-white rounded-[25px] p-6 lg:p-[30px]">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
            Add New Card
          </h2>
          <p className="mb-6 text-[#718EBF] text-sm leading-relaxed max-w-[600px]">
            Credit Card generally means a plastic card issued by Scheduled
            Commercial Banks assigned to a Cardholder, with a credit limit, that
            can be used to purchase goods and services on credit or obtain cash
            advances.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-x-[30px] gap-y-5">
            <div className="space-y-3">
              <label className="text-base font-medium text-[#232323]">
                Card Type
              </label>
              <Input placeholder="Classic" type="text" />
            </div>
            <div className="space-y-3">
              <label className="text-base font-medium text-[#232323]">
                Name On Card
              </label>
              <Input placeholder="My Cards" type="text" />
            </div>
            <div className="space-y-3">
              <label className="text-base font-medium text-[#232323]">
                Card Number
              </label>
              <Input placeholder="**** **** **** ****" type="text" />
            </div>
            <div className="space-y-3">
              <label className="text-base font-medium text-[#232323]">
                Expiration Date
              </label>
              <Input placeholder="25 January 2025" type="text" />
              {/* Ideally Use Select or DatePicker, but Figma shows text/dropdown look */}
            </div>
            <div className="md:col-span-2 mt-4">
              <Button type="submit" className="w-40 h-auto text-lg">
                Add Card
              </Button>
            </div>
          </form>
        </div>

        {/* Card Setting */}
        <div className="bg-white rounded-[25px] p-6 lg:p-[30px]">
          <h2 className="text-[22px] font-semibold text-[#343C6A] mb-6">
            Card Setting
          </h2>
          <div className="flex flex-col gap-6">
            {cardSettings.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 cursor-pointer"
              >
                <div
                  className="flex h-[50px] w-[50px] items-center justify-center rounded-[15px]"
                  style={{ backgroundColor: item.bg }}
                >
                  <item.icon
                    className="h-6 w-6"
                    style={{ color: item.color }}
                  />
                </div>
                <div>
                  <p className="text-base text-[#232323] font-medium">
                    {item.label}
                  </p>
                  <p className="text-sm text-[#718EBF]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
