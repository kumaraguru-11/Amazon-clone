"use strict";(self.webpackChunkamazon_clone=self.webpackChunkamazon_clone||[]).push([[263],{263:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});var c=s(5043),a=s(3003),r=s(9361),i=s(4253),l=s(9581),n=s(3492),d=s(5770),o=s(9472),m=s(3216),h=s(5475),u=s(652),x=s(579);const p=()=>{const e=(0,a.d4)((e=>e.singleProduct.multipleProduct)),t=(0,a.d4)((e=>e.user.user))||null,s=(0,a.d4)((e=>e.user.cartQty)),[p,g]=c.useState([]),j=(0,a.wA)(),y=(0,m.Zp)();(0,c.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("cart"))||[];e.length>0&&e.map((e=>j((0,r.X8)(e.productId)))),j((0,i.iH)(e)),g(e)}),[j,g]);const N=(e,t)=>{let s=JSON.parse(localStorage.getItem("cart"))||[],c=s.findIndex((t=>t.productId===e));-1!==c&&("increment"===t?s[c]={...s[c],quantity:s[c].quantity+1}:"decrement"===t&&s[c].quantity>0&&(s[c]={...s[c],quantity:s[c].quantity-1}),localStorage.setItem("cart",JSON.stringify(s)),j((0,i.iH)(s)))};return(0,x.jsx)("div",{style:{height:"91vh"},children:e.length>0&&p?(0,x.jsxs)("div",{style:{display:"flex"},className:"cartPage",children:[(0,x.jsxs)("div",{className:"cartPage-list",children:[(0,x.jsx)("h2",{children:"Your Cart: ".concat(p&&p.length," Items")}),(0,x.jsx)(l.A,{itemLayout:"horizontal",size:"large",bordered:!0,dataSource:e,className:"cartList",renderItem:e=>{var t;return(0,x.jsx)("div",{className:"row gx-3 align-items-center",children:(0,x.jsxs)(l.A.Item,{className:"cartList-item",children:[(0,x.jsx)("div",{className:"col-2 col-md-1",children:(0,x.jsx)(n.A,{src:e.image,height:70,preview:!1,className:"cartPage-cartlist-img"})}),(0,x.jsx)("div",{className:"col-4 col-md-3 cartItem-hover",children:(0,x.jsx)(h.N_,{to:"/product/".concat(e.id),style:{textDecoration:"none",color:"black"},children:(0,x.jsx)("h5",{className:"text-truncate",children:e.title})})}),(0,x.jsx)("div",{className:"col-2 col-md-2",children:(0,x.jsx)("h5",{children:"$ ".concat(e.price)})}),(0,x.jsxs)("div",{className:"col-3 col-md-2",children:[(0,x.jsx)(d.Ay,{className:"bg-danger text-light",onClick:()=>N(e.id,"decrement"),children:"-"}),(0,x.jsx)("span",{className:"mx-3",children:(null===(t=s.find((t=>t.productId===e.id)))||void 0===t?void 0:t.quantity)||1}),(0,x.jsx)(d.Ay,{type:"primary",onClick:()=>N(e.id,"increment"),children:"+"})]}),(0,x.jsx)("span",{className:"col-auto col-md-1",children:(0,x.jsx)(u.kgr,{className:"text-danger fs-4",style:{cursor:"pointer"},onClick:()=>(e=>{const t=(JSON.parse(localStorage.getItem("cart"))||[]).filter((t=>t.productId!==e));localStorage.setItem("cart",JSON.stringify(t)),j((0,r.Ai)(e))})(e.id)})})]})})}})]}),(0,x.jsx)("div",{className:"cartPage-orderSummary",children:(0,x.jsxs)("div",{className:"orderSummary-card",children:[(0,x.jsx)("h4",{children:"Order Summary"}),(0,x.jsx)("hr",{}),(0,x.jsxs)("p",{className:"d-flex justify-content-between",children:["Units:",(0,x.jsxs)("span",{className:"fw-bolder",children:[s.reduce(((e,t)=>e+t.quantity),0),"(Units)"]})]}),(0,x.jsxs)("p",{className:"d-flex justify-content-between",children:["Est.Total:",(0,x.jsxs)("span",{className:"fw-bolder",children:["$",s.reduce(((t,s)=>{const c=e.find((e=>e.id===s.productId)),a=c?c.price*s.quantity:0;return parseInt(t+a)}),0)]})]}),(0,x.jsx)("hr",{}),(0,x.jsx)(d.Ay,{className:"fw-bolder w-100",type:"primary",onClick:()=>{(()=>{let e=t.some((e=>!0===e.isAuthentication));y(e?"/shipping":"/login")})()},children:"Check out"})]})})]}):(0,x.jsx)("div",{style:{display:"grid",placeItems:"center",height:"100%"},children:(0,x.jsx)(o.A,{image:"https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg",imageStyle:{height:60},description:(0,x.jsx)("span",{children:"No Cart"}),children:(0,x.jsx)(d.Ay,{type:"primary",onClick:()=>y("/"),children:"Add Cart"})})})})}}}]);
//# sourceMappingURL=263.13853b25.chunk.js.map