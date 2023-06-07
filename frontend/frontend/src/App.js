import React from 'react';
import { Routes, Route, HashRouter as Router } from 'react-router-dom';

import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Dashboard from './screens/dashboard';
import DishMenu from './screens/DishMenu';

import Orders from './screens/orders/index';
import Admin from './screens/admin';
import TablesMap from './screens/tablesMap';
import Staff from './screens/staff';
import Login from './screens/login';
import Services from './screens/services';
import StartingPanel from './screens/startingPanel';
import Invite from './screens/invite';
import TablesPanel from './screens/tablesPanel';
import OrdersPanel from './screens/ordersPanel';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <div>
          <main>
            <Routes>
              <Route element={<StartingPanel />} path="/" />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dishmenu" element={<DishMenu />} />
              <Route path="/tables_map" element={<TablesMap />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="orders/order/:id" element={<OrdersPanel />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/invite" element={<Invite />} />
              <Route path="/start" element={<StartingPanel />} />
              <Route path="/admin-panel" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/services" element={<Services />} />
              <Route path="/tablesPanel" element={<TablesPanel />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
