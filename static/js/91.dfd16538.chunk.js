"use strict";(self.webpackChunkamazon_clone=self.webpackChunkamazon_clone||[]).push([[91],{4091:(e,s,t)=>{t.r(s),t.d(s,{default:()=>A});var r=t(5043),n=t(3003),a=t(2489),l=t(4253),i=t(2157),c=t.n(i),o=t(8104),p=t(5475),m=t(1500),d=t(5770),x=t(579);const{Meta:u}=m.A,h=e=>{let{productList:s}=e;const[t,n]=(0,r.useState)(0),a=t+4,l=s&&s.slice(t,a),i=s?Math.ceil(s.length/4):1;return(0,x.jsxs)("div",{children:[(0,x.jsx)("div",{className:"row gap-2 justify-content-center",children:l&&l.map((e=>(0,x.jsxs)(m.A,{className:"col-md-6 col-sm-6 col-lg-4 mb-4",hoverable:!0,style:{maxWidth:"20rem",border:"1px solid black"},cover:(0,x.jsx)("img",{alt:"example",src:e.image&&e.image,style:{height:"14rem",objectFit:"fill",width:"80%",paddingTop:"1rem",margin:"auto"}}),children:[(0,x.jsx)(u,{title:e.title}),(0,x.jsx)(o.G,{initialValue:e.rating.rate,readonly:"true",size:20,className:"mt-2"}),(0,x.jsx)("p",{className:"mt-2 fs-5",children:"$".concat(e.price)}),(0,x.jsx)(p.N_,{to:"/product/".concat(e.id),className:"d-flex justify-content-center",children:(0,x.jsx)(d.Ay,{children:"view product"})})]},e.title)))}),s.length>4&&(0,x.jsx)(c(),{breakLabel:"...",nextLabel:">",onPageChange:e=>{const t=4*e.selected%s.length;n(t)},pageRangeDisplayed:5,pageCount:i,previousLabel:"<",renderOnZeroPageCount:null,containerClassName:"pagination",pageClassName:"page-num",previousLinkClassName:"page-num",nextLinkClassName:"page-num",activeLinkClassName:"active"})]})};var y=t(8677),j=t(9800),g=t(1645),f=t(4783),N=t(785),C=t(9154);const b=()=>{const[e,s]=(0,r.useState)(!1),[t,l]=(0,r.useState)(0),[i,c]=(0,r.useState)([]),[o,p]=(0,r.useState)(""),[m,u]=(0,r.useState)({btn1:!1,btn2:!1}),h=(0,n.d4)((e=>e.products.products)),b=(0,n.wA)(),A=e=>{l(e);let s=JSON.parse(JSON.stringify(h)).filter((s=>s.price<=e));c(s)};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(d.Ay,{type:"primary",onClick:()=>{s(!0),u({btn1:!1,btn2:!1}),p(""),l(0)},children:"Filter"}),(0,x.jsxs)(y.A,{title:"Filter",onClose:()=>{s(!1),c([]),p(""),l(0)},open:e,children:[(0,x.jsx)("h6",{children:"Price Range"}),(0,x.jsxs)(j.A,{children:[(0,x.jsx)(g.A,{span:12,children:(0,x.jsx)(f.A,{min:10,max:1e3,onChange:A,value:"number"===typeof t?t:0})}),(0,x.jsx)(g.A,{span:4,children:(0,x.jsx)(N.A,{min:10,max:20,style:{margin:"0 16px"},value:t,onChange:A})})]}),(0,x.jsx)("hr",{}),(0,x.jsx)("h5",{children:"Categories"}),(0,x.jsxs)("ul",{style:{listStyleType:"none"},onClick:e=>p(e.target.innerText),children:[(0,x.jsx)("li",{className:"my-1 fs-6",children:(0,x.jsx)(d.Ay,{type:"ELECTRONICS"===o?"primary":"text",style:{cursor:"pointer",textTransform:"uppercase"},children:"electronics"})}),(0,x.jsxs)("li",{className:"my-1 fs-6",children:[(0,x.jsx)(d.Ay,{type:"JEWELERY"===o?"primary":"text",style:{cursor:"pointer",textTransform:"uppercase"},children:"jewelery"})," "]}),(0,x.jsx)("li",{className:"my-1 fs-6",style:{cursor:"pointer",textTransform:"uppercase"},children:(0,x.jsx)(d.Ay,{type:"MEN'S CLOTHING"===o?"primary":"text",style:{cursor:"pointer",textTransform:"uppercase"},children:"men's clothing"})}),(0,x.jsx)("li",{className:"my-1 fs-6",style:{cursor:"pointer",textTransform:"uppercase"},children:(0,x.jsxs)(d.Ay,{type:"WOMEN'S CLOTHING"===o?"primary":"text",style:{cursor:"pointer",textTransform:"uppercase"},children:[" ","women's clothing"]})})]}),(0,x.jsx)("hr",{}),(0,x.jsx)("h5",{children:"Price"}),(0,x.jsx)(d.Ay,{onClick:()=>(()=>{u({btn1:!0,btn2:!1});let e=JSON.parse(JSON.stringify(h));e.sort(((e,s)=>parseFloat(e.price)-parseFloat(s.price))),c(e)})(),type:m.btn1?"primary":"default",children:"Low To High"}),(0,x.jsx)(d.Ay,{className:"ms-3",type:m.btn2?"primary":"default",onClick:()=>(()=>{u({btn1:!1,btn2:!0});let e=JSON.parse(JSON.stringify(h));e.sort(((e,s)=>parseFloat(s.price)-parseFloat(e.price))),c(e)})(),children:"High To Low"}),(0,x.jsx)("div",{className:"my-5 d-flex justify-content-center",children:(0,x.jsx)(d.Ay,{onClick:()=>(o&&b((0,C.L)(o.toLowerCase())),i.length>0&&b((0,a.RZ)(i)),void s(!1)),type:"primary",children:"OK"})})]})]})},A=()=>{const e=(0,n.wA)(),s=(0,n.d4)((e=>e.products.products)),t=(0,n.d4)((e=>e.items.item));return(0,r.useEffect)((()=>{let s=JSON.parse(localStorage.getItem("users"))||[];e((0,l.nu)(s))}),[e]),(0,r.useEffect)((()=>{t.length>0?e((0,a.RZ)(t)):e((0,a.j0)())}),[e,t]),(0,x.jsxs)("div",{children:[(0,x.jsxs)("div",{className:"d-flex justify-content-between m-3",children:[(0,x.jsx)("h2",{className:"ps-5",children:"Latest Product:"}),(0,x.jsx)("span",{className:"me-5",children:(0,x.jsx)(b,{})})]}),s&&(0,x.jsx)(h,{productList:s})]})}}}]);
//# sourceMappingURL=91.dfd16538.chunk.js.map