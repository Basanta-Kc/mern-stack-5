import NavBar from "../components/NavBar"
import { Outlet } from "react-router";
import CartProvider from "../providers/CartProvider";

export default function HomeLayout() {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Outlet />
      </CartProvider>
    </>
  );
}
