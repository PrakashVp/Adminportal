import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import CustomerMasters from './pages/CustomerMasters';
import DealerMasters from './pages/DealerMasters';
import ProductMasters from './pages/ProductMasters';
import MaterialMasters from './pages/MaterialMasters';
import SalesEngineers from './pages/SalesEngineers';
import Enquiries from './pages/Enquiries';
import RegionalHeads from './pages/RegionalHeads';
import OrderBooking from './pages/OrderBooking';
import ProductDelivery from './pages/ProductDelivery';
import Reports from './pages/Reports';
import Topnav from './components/insidecomp/Topnav';
import Account from './components/insidecomp/Account';

const App = () => {
  return (
  <BrowserRouter>
    <Sidebar>
      <Topnav />
      <Routes>
        <Route path="/"element={<CustomerMasters/>}/>
        <Route path="/CustomerMasters"element={<CustomerMasters/>}/>
        <Route path="/DealerMasters"element={<DealerMasters/>}/>
        <Route path="/MaterialMasters"element={<MaterialMasters/>}/>
        <Route path="/ProductMasters"element={<ProductMasters/>}/>
        <Route path="/RegionalHeads"element={<RegionalHeads/>}/>
        <Route path="/SalesEngineers"element={<SalesEngineers/>}/>
        <Route path="/Enquiries"element={<Enquiries/>}/>
        <Route path="/OrderBooking"element={<OrderBooking/>}/>
        <Route path="/ProductDelivery"element={<ProductDelivery/>}/>
        <Route path='/Reports'element={<Reports/>}/>
        <Route path='/account'element={<Account/>}/>



      </Routes>
    </Sidebar>
  </BrowserRouter>
  );
}

export default App;
