export const weeklyActivityData = [
  { day: "Sat", deposit: 200, withdraw: 450 },
  { day: "Sun", deposit: 100, withdraw: 320 },
  { day: "Mon", deposit: 250, withdraw: 320 },
  { day: "Tue", deposit: 350, withdraw: 450 },
  { day: "Wed", deposit: 250, withdraw: 150 },
  { day: "Thu", deposit: 220, withdraw: 380 },
  { day: "Fri", deposit: 320, withdraw: 390 },
];

export const balanceHistoryData = [
  { month: "Jul", balance: 100 },
  { month: "Aug", balance: 320 },
  { month: "Sep", balance: 250 },
  { month: "Oct", balance: 500 },
  { month: "Nov", balance: 230 },
  { month: "Dec", balance: 600 },
  { month: "Jan", balance: 200 },
  { month: "Feb", balance: 550 },
  { month: "Mar", balance: 240 },
];

export const recentTransactions = [
  {
    id: 1,
    type: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
    icon: "credit-card",
    color: "#FFF5D9",
    iconColor: "#FFBB38",
  },
  {
    id: 2,
    type: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
    icon: "paypal",
    color: "#E7EDFF",
    iconColor: "#396AFF",
  },
  {
    id: 3,
    type: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
    icon: "dollar-sign",
    color: "#DCFAF8",
    iconColor: "#16DBCC",
  },
];

export const quickTransferUsers = [
  { name: "Livia Bator", role: "CEO", image: "/images/firaz-linkedin.jpg" }, // Using existing image for mock
  {
    name: "Randy Press",
    role: "Director",
    image: "/images/firaz-linkedin.jpg",
  },
  { name: "Workman", role: "Designer", image: "/images/firaz-linkedin.jpg" },
  { name: "Kevin", role: "CEO", image: "/images/firaz-linkedin.jpg" },
  { name: "Maria", role: "Manager", image: "/images/firaz-linkedin.jpg" },
];

export const accountsData = [
  {
    type: "My Balance",
    balance: 12750,
    number: "**** **** 1234",
    icon: "dollar-sign",
    bgConfig: { bg: "#FFF5D9", iconBg: "#FFF5D9", iconColor: "#FFBB38" },
  },
  {
    type: "Income",
    balance: 5600,
    number: "**** **** 5678",
    icon: "income",
    bgConfig: { bg: "#E7EDFF", iconBg: "#E7EDFF", iconColor: "#396AFF" },
  },
  {
    type: "Expense",
    balance: 3460,
    number: "**** **** 9012",
    icon: "expense",
    bgConfig: { bg: "#FFE0EB", iconBg: "#FFE0EB", iconColor: "#FF82AC" },
  },
  {
    type: "Total Saving",
    balance: 7920,
    number: "**** **** 3456",
    icon: "saving",
    bgConfig: { bg: "#DCFAF8", iconBg: "#DCFAF8", iconColor: "#16DBCC" },
  },
];

export const investmentStats = [
  {
    title: "Total Invested Amount",
    amount: 150000,
    icon: "dollar-sign",
    color: "#16DBCC",
    bg: "#DCFAF8",
  },
  {
    title: "Number of Investments",
    amount: 1250,
    icon: "pie-chart",
    color: "#FF82AC",
    bg: "#FFE0EB",
  },
  {
    title: "Rate of Return",
    amount: "+5.80%",
    icon: "trending-up",
    color: "#396AFF",
    bg: "#E7EDFF",
  },
];

export const yearlyInvestmentData = [
  { year: "2016", value: 10000 },
  { year: "2017", value: 25000 },
  { year: "2018", value: 18000 },
  { year: "2019", value: 30000 },
  { year: "2020", value: 22000 },
  { year: "2021", value: 45000 },
];

export const monthlyRevenueData = [
  { year: "2016", value: 10000 },
  { year: "2017", value: 25000 },
  { year: "2018", value: 18000 },
  { year: "2019", value: 30000 },
  { year: "2020", value: 22000 },
  { year: "2021", value: 45000 },
];

export const loansData = [
  {
    type: "Personal Loans",
    amount: 50000,
    left: 25000,
    duration: "12 Months",
    rate: "12%",
    installment: 2000,
    icon: "user",
  },
  {
    type: "Corporate Loans",
    amount: 100000,
    left: 40500,
    duration: "24 Months",
    rate: "5%",
    installment: 4000,
    icon: "briefcase",
  },
  {
    type: "Business Loans",
    amount: 500000,
    left: 250000,
    duration: "36 Months",
    rate: "15%",
    installment: 8500,
    icon: "building",
  },
  {
    type: "Custom Loans",
    amount: 45000,
    left: 20000,
    duration: "12 Months",
    rate: "8%",
    installment: 1500,
    icon: "tool",
  },
];

export const privilegesData = [
  {
    title: "Cashback 5%",
    desc: "For all supermarket purchase",
    icon: "shopping-cart",
    bg: "#DCFAF8",
    color: "#16DBCC",
  },
  {
    title: "Airport Lounge",
    desc: "Unlimited access worldwide",
    icon: "plane",
    bg: "#FFF5D9",
    color: "#FFBB38",
  },
  {
    title: "Travel Insurance",
    desc: "Coverage up to $50k",
    icon: "shield",
    bg: "#E7EDFF",
    color: "#396AFF",
  },
  {
    title: "Personal Assistant",
    desc: "24/7 Concierge Service",
    icon: "headphones",
    bg: "#FFE0EB",
    color: "#FF82AC",
  },
];
