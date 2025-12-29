import { ServiceCard } from "../components/ui/ServiceCard"
import { Shield, LifeBuoy, Monitor, User, BarChartBig, Scan } from "lucide-react"

const bankServices = [
  { icon: BarChartBig, title: "Business Loans", subtitle: "It is a long established", bg: "#FFE0EB", color: "#FF82AC" },
  { icon: Scan, title: "Checking Accounts", subtitle: "It is a long established", bg: "#FFF5D9", color: "#FFBB38" },
  { icon: Shield, title: "Savings Accounts", subtitle: "It is a long established", bg: "#FFE0EB", color: "#FF82AC" },
  { icon: LifeBuoy, title: "Debit and Credit Cards", subtitle: "It is a long established", bg: "#E7EDFF", color: "#1814F3" },
  { icon: Monitor, title: "Life Insurance", subtitle: "It is a long established", bg: "#DCFAF8", color: "#16DBCC" },
  { icon: User, title: "Business Loans", subtitle: "It is a long established", bg: "#FFF5D9", color: "#FFBB38" },
]

const serviceList = [
  { icon: Monitor, title: "Life Insurance", desc: "Unlimited protection", bg: "#DCFAF8", color: "#16DBCC" },
  { icon: Scan, title: "Shopping", desc: "Buy. Think. Grow.", bg: "#FFE0EB", color: "#FF82AC" },
  { icon: Shield, title: "Safety", desc: "We are your allies", bg: "#FFF5D9", color: "#FFBB38" },
]

export default function Services() {
  return (
    <div className="flex flex-col gap-[30px]">
      {/* Services Grid */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
           {bankServices.map((service, index) => (
             <ServiceCard 
               key={index}
               icon={service.icon}
               title={service.title}
               subtitle={service.subtitle}
               iconBgInfo={{ bg: service.bg, color: service.color }}
             />
           ))}
        </div>
      </section>

      {/* Bank Services List */}
      <section>
        <h2 className="text-[22px] font-semibold text-[#343C6A] mb-5">Bank Services List</h2>
        <div className="bg-white rounded-[25px] p-[30px]">
            <div className="flex flex-col gap-8">
               {serviceList.map((item, index) => (
                 <div key={index} className="flex justify-between items-center flex-wrap md:flex-nowrap gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[20px]" style={{ backgroundColor: item.bg }}>
                          <item.icon className="h-7 w-7" style={{ color: item.color }} />
                        </div>
                        <div>
                           <p className="text-xl font-medium text-[#232323]">{item.title}</p>
                           <p className="text-base text-[#718EBF]">{item.desc}</p>
                        </div>
                    </div>
                    {/* Placeholder for details - styled as text list per design */}
                    <div className="flex-1 hidden md:flex justify-around text-[#232323] text-base font-medium">
                        <span>Lorem Ipsum</span>
                        <span>Many publishing</span>
                        <span>Many publishing</span>
                        <span>Many publishing</span>
                    </div>
                    <button className="px-6 py-3 rounded-[50px] border border-[#1814F3] text-[#1814F3] font-medium hover:bg-[#1814F3] hover:text-white transition-colors">
                      View Details
                    </button>
                 </div>
               ))}
            </div>
        </div>
      </section>
    </div>
  )
}
