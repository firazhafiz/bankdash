import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import CreditCards from "./pages/CreditCards";
import Services from "./pages/Services";
import Settings from "./pages/Settings";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import Loans from "./pages/Loans";
import MyPrivileges from "./pages/MyPrivileges";

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
  );
}

export default App;
