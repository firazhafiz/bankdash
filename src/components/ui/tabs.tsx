import * as React from "react"
import { cn } from "../../lib/utils"

interface TabsProps {
  defaultValue: string
  className?: string
  children: React.ReactNode
}

interface TabsListProps {
  className?: string
  children: React.ReactNode
}

interface TabsTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

interface TabsContentProps {
  value: string
  children: React.ReactNode
   className?: string
}

const TabsContext = React.createContext<{
  activeTab: string
  setActiveTab: (value: string) => void
} | null>(null)

export function Tabs({ defaultValue, className, children }: TabsProps) {
  const [activeTab, setActiveTab] = React.useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("w-full", className)}>{children}</div>
    </TabsContext.Provider>
  )
}

export function TabsList({ className, children }: TabsListProps) {
  return (
    <div className={cn("flex items-center border-b border-[#E6EFF5]", className)}>
      {children}
    </div>
  )
}

export function TabsTrigger({ value, className, children }: TabsTriggerProps) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsTrigger must be used within Tabs")

  const isActive = context.activeTab === value

  return (
    <button
      className={cn(
        "relative px-4 py-3 text-[16px] font-medium transition-colors",
        isActive ? "text-[#1814F3]" : "text-[#718EBF] hover:text-[#1814F3]",
        className
      )}
      onClick={() => context.setActiveTab(value)}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 h-[3px] w-full bg-[#1814F3] rounded-t-[10px]" />
      )}
    </button>
  )
}

export function TabsContent({ value, className, children }: TabsContentProps) {
  const context = React.useContext(TabsContext)
  if (!context) throw new Error("TabsContent must be used within Tabs")

  if (context.activeTab !== value) return null

  return (
    <div className={cn("mt-6", className)}>
      {children}
    </div>
  )
}
