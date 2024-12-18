import NavBar from "../components/NavBar";
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

// webscoekt
// grpahql
// cart (context) => zustand
// perfomance infomrance, virtualization , lazyloading
// event loopp
// react 19 (useState, useReducer, userMemo, useCallback, useContext, useRef)
