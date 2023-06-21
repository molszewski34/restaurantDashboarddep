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
import Labor from './screens/manager_activities/labor';
import CategoriesList from './screens/manager_activities/dishes/categoriesList';
import EditRoom from './screens/manager_activities/tables/editRoom';
import TablesList from './screens/manager_activities/tables/tablesList';
import NewCategory from './screens/manager_activities/dishes/newCategory';
import NewRoom from './screens/manager_activities/tables/addRoom';

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
              <Route path="/labor" element={<Labor />} />
              <Route path="/menu" element={<CategoriesList />} />
              <Route path="/tablesList" element={<TablesList />} />
              <Route path="/add-category" element={<NewCategory />} />
              <Route path="/tablesList/:roomId" element={<EditRoom />} />
              <Route path="/add-room" element={<NewRoom />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
