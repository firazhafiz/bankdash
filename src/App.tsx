import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import CreditCards from './pages/CreditCards'
import Services from './pages/Services'
import Settings from './pages/Settings'

// Placeholder Pages
const Dashboard = () => <div className="text-xl font-semibold">Dashboard Content Placeholder</div>
const Transactions = () => <div className="text-xl font-semibold">Transactions Content Placeholder</div>
const Accounts = () => <div className="text-xl font-semibold">Accounts Content Placeholder</div>
const Investments = () => <div className="text-xl font-semibold">Investments Content Placeholder</div>
const Loans = () => <div className="text-xl font-semibold">Loans Content Placeholder</div>
const MyPrivileges = () => <div className="text-xl font-semibold">My Privileges Content Placeholder</div>


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="investments" element={<Investments />} />
          <Route path="credit-cards" element={<CreditCards />} />
          <Route path="loans" element={<Loans />} />
          <Route path="services" element={<Services />} />
          <Route path="my-privileges" element={<MyPrivileges />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
