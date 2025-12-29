import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  subtitle: string
  iconBgInfo: {
    bg: string
    color: string
  }
}

export function ServiceCard({ icon: Icon, title, subtitle, iconBgInfo }: ServiceCardProps) {
  return (
    <div className="flex items-center rounded-[25px] bg-white p-6 gap-6 shadow-sm">
      <div 
        className="flex h-[70px] w-[70px] items-center justify-center rounded-full shrink-0"
        style={{ backgroundColor: iconBgInfo.bg, color: iconBgInfo.color }}
      >
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#232323] mb-1">{title}</h3>
        <p className="text-[#718EBF] text-base">{subtitle}</p>
      </div>
    </div>
  )
}
