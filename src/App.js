import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Purchase from './pages/Purchase/Purchase';
import Navbar from './pages/shared/Navbar';
import Tools from './pages/Tools/Tools';
import 'react-toastify/dist/ReactToastify.css';
import MyOrders from './pages/Dashboard/MyOrders';
import AddReview from './pages/Dashboard/AddReview';
import MyProfile from './pages/Dashboard/MyProfile';
import MakeAdmin from './pages/Dashboard/MakeAdmin';
import RequireAdmin from './pages/Login/RequireAdmin';
import ManageOrder from './pages/Dashboard/ManageOrder';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProducts from './pages/Dashboard/ManageProducts';
import Payment from './pages/Purchase/Payment';

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/tools' element={<Tools></Tools>}></Route>
          <Route path='/purchase/:id' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
          <Route path='/dashboard' element={
            <RequireAuth><Dashboard></Dashboard></RequireAuth>}>
            <Route index element={<MyProfile />}></Route>
            <Route path="orders" element={<MyOrders />}></Route>
            <Route path="review" element={<AddReview />}></Route>            
            <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin /></RequireAdmin>}></Route>            
            <Route path="manageOrder" element={<RequireAdmin><ManageOrder /></RequireAdmin>}></Route>            
            <Route path="addProduct" element={<RequireAdmin><AddProduct /></RequireAdmin>}></Route>            
            <Route path="manageProducts" element={<RequireAdmin><ManageProducts /></RequireAdmin>}></Route>            
            <Route path="payment/:id" element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>            
          </Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
      </Navbar>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
