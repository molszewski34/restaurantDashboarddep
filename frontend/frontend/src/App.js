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
import Labor from './screens/manager_activities/labor/editLabor';
import Dishes from './screens/manager_activities/dishes';
import CategoriesList from './screens/manager_activities/dishes/categoriesList';
import NewCategory from './screens/manager_activities/dishes/newCategory';
import EditCategory from './screens/manager_activities/dishes/editCategory';
import NewDish from './screens/manager_activities/dishes/newDish';
import NewRoom from './screens/manager_activities/tables/addRoom';
import EditRoom from './screens/manager_activities/tables/editRoom';
import AddTable from './screens/manager_activities/tables/addTable';
import TablesList from './screens/manager_activities/tables/tablesList';
import LaborsList from './screens/manager_activities/labor/laborsList';
import NewLabor from './screens/manager_activities/labor/newLabor';
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
              <Route path="/labor" element={<Labor />} />
              {/* <Route path="/menu" element={<Dishes />} /> */}
              <Route path="/menu" element={<CategoriesList />} />
              <Route path="/newCategory" element={<NewCategory />} />
              <Route path="/editCategory" element={<EditCategory />} />
              <Route path="/newDish" element={<NewDish />} />
              <Route path="/newRoom" element={<NewRoom />} />
              {/* <Route path="/editRoom" element={<EditRoom />} /> */}
              <Route path="/addTable" element={<AddTable />} />
              <Route path="/tablesList" element={<TablesList />} />
              <Route path="/laborsList" element={<LaborsList />} />
              <Route path="/newLabor" element={<NewLabor />} />
              <Route path="/tablesList/:roomId" element={<EditRoom />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
