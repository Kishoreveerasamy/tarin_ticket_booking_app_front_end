import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import TrainBooking from "./pages/TrainBooking";
import OrderFood from "./pages/OrderFood";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyBookings from "./pages/MyBookings";
import Account from "./pages/Account";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-trains" element={<TrainBooking />} />
        <Route path="/order-food" element={<OrderFood />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}
