import React from "react";

const Home = React.lazy(() => import("../Pages/Home"));
const PageNotFound = React.lazy(() => import("../Pages/PageNotFound"));
const Cart = React.lazy(() => import("../cart/Cart"));
const ConformOrder = React.lazy(() => import("../cart/ConformOrder"));
const Payement = React.lazy(() => import("../cart/Payement"));
const Shipping = React.lazy(() => import("../cart/Shipping"));
const ProductDetail = React.lazy(() => import("../Pages/ProductDetail"));
const LogIn=React.lazy(()=>import('../user/LogIn'));
const Register=React.lazy(()=>import('../user/Register'));

export const PUBLIC_ROUTES = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/cart",
    component: Cart,
  },
  {
    path: "/shipping",
    component: Shipping,
  },
  {
    path: "/conformOrder",
    component: ConformOrder,
  },
  {
    path: "/payment",
    component: Payement,
  },
  { path: "/product/:Id", component: ProductDetail },
  {path:'/login',component:LogIn},
  {path:'/register',component:Register},
  { path: "*", component: PageNotFound },

];
