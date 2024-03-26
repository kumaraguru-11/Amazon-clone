"use strict";(self.webpackChunkamazon_clone=self.webpackChunkamazon_clone||[]).push([[650],{8369:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(8168),a=t(5043);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"}}]},name:"down",theme:"outlined"};var c=t(2172),s=function(e,n){return a.createElement(c.A,(0,o.A)({},e,{ref:n,icon:r}))};const i=a.forwardRef(s)},5150:(e,n,t)=>{t.d(n,{A:()=>o});const o=(0,t(5043).createContext)({})},227:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(5043),a=t(8139),r=t.n(a),c=t(5296),s=t(5150),i=t(6055),l=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t};function u(e){return"number"===typeof e?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}const f=["xs","sm","md","lg","xl","xxl"];const d=o.forwardRef(((e,n)=>{const{getPrefixCls:t,direction:a}=o.useContext(c.QO),{gutter:d,wrap:m}=o.useContext(s.A),{prefixCls:p,span:y,order:g,offset:v,push:h,pull:b,className:x,children:O,flex:w,style:C}=e,A=l(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),E=t("col",p),[S,M,j]=(0,i.xV)(E),I={};let N={};f.forEach((n=>{let t={};const o=e[n];"number"===typeof o?t.span=o:"object"===typeof o&&(t=o||{}),delete A[n],N=Object.assign(Object.assign({},N),{["".concat(E,"-").concat(n,"-").concat(t.span)]:void 0!==t.span,["".concat(E,"-").concat(n,"-order-").concat(t.order)]:t.order||0===t.order,["".concat(E,"-").concat(n,"-offset-").concat(t.offset)]:t.offset||0===t.offset,["".concat(E,"-").concat(n,"-push-").concat(t.push)]:t.push||0===t.push,["".concat(E,"-").concat(n,"-pull-").concat(t.pull)]:t.pull||0===t.pull,["".concat(E,"-rtl")]:"rtl"===a}),t.flex&&(N["".concat(E,"-").concat(n,"-flex")]=!0,I["--".concat(E,"-").concat(n,"-flex")]=u(t.flex))}));const R=r()(E,{["".concat(E,"-").concat(y)]:void 0!==y,["".concat(E,"-order-").concat(g)]:g,["".concat(E,"-offset-").concat(v)]:v,["".concat(E,"-push-").concat(h)]:h,["".concat(E,"-pull-").concat(b)]:b},x,N,M,j),k={};if(d&&d[0]>0){const e=d[0]/2;k.paddingLeft=e,k.paddingRight=e}return w&&(k.flex=u(w),!1!==m||k.minWidth||(k.minWidth=0)),S(o.createElement("div",Object.assign({},A,{style:Object.assign(Object.assign(Object.assign({},k),C),I),className:R,ref:n}),O))}))},8821:(e,n,t)=>{t.d(n,{A:()=>d});var o=t(5043),a=t(8139),r=t.n(a),c=t(4320),s=t(5296),i=t(5150),l=t(6055),u=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)n.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(t[o[a]]=e[o[a]])}return t};function f(e,n){const[t,a]=o.useState("string"===typeof e?e:"");return o.useEffect((()=>{(()=>{if("string"===typeof e&&a(e),"object"===typeof e)for(let t=0;t<c.ye.length;t++){const o=c.ye[t];if(!n[o])continue;const r=e[o];if(void 0!==r)return void a(r)}})()}),[JSON.stringify(e),n]),t}const d=o.forwardRef(((e,n)=>{const{prefixCls:t,justify:a,align:d,className:m,style:p,children:y,gutter:g=0,wrap:v}=e,h=u(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:b,direction:x}=o.useContext(s.QO),[O,w]=o.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[C,A]=o.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),E=f(d,C),S=f(a,C),M=o.useRef(g),j=(0,c.Ay)();o.useEffect((()=>{const e=j.subscribe((e=>{A(e);const n=M.current||0;(!Array.isArray(n)&&"object"===typeof n||Array.isArray(n)&&("object"===typeof n[0]||"object"===typeof n[1]))&&w(e)}));return()=>j.unsubscribe(e)}),[]);const I=b("row",t),[N,R,k]=(0,l.L3)(I),P=(()=>{const e=[void 0,void 0];return(Array.isArray(g)?g:[g,void 0]).forEach(((n,t)=>{if("object"===typeof n)for(let o=0;o<c.ye.length;o++){const a=c.ye[o];if(O[a]&&void 0!==n[a]){e[t]=n[a];break}}else e[t]=n})),e})(),D=r()(I,{["".concat(I,"-no-wrap")]:!1===v,["".concat(I,"-").concat(S)]:S,["".concat(I,"-").concat(E)]:E,["".concat(I,"-rtl")]:"rtl"===x},m,R,k),L={},K=null!=P[0]&&P[0]>0?P[0]/-2:void 0;K&&(L.marginLeft=K,L.marginRight=K);const[T,z]=P;L.rowGap=z;const W=o.useMemo((()=>({gutter:[T,z],wrap:v})),[T,z,v]);return N(o.createElement(i.A.Provider,{value:W},o.createElement("div",Object.assign({},h,{className:D,style:Object.assign(Object.assign({},L),p),ref:n}),y)))}))},6055:(e,n,t)=>{t.d(n,{L3:()=>i,xV:()=>l});var o=t(9310),a=t(1383),r=t(8365);const c=e=>{const{componentCls:n}=e;return{[n]:{position:"relative",maxWidth:"100%",minHeight:1}}},s=(e,n)=>((e,n)=>{const{prefixCls:t,componentCls:o,gridColumns:a}=e,r={};for(let c=a;c>=0;c--)0===c?(r["".concat(o).concat(n,"-").concat(c)]={display:"none"},r["".concat(o,"-push-").concat(c)]={insetInlineStart:"auto"},r["".concat(o,"-pull-").concat(c)]={insetInlineEnd:"auto"},r["".concat(o).concat(n,"-push-").concat(c)]={insetInlineStart:"auto"},r["".concat(o).concat(n,"-pull-").concat(c)]={insetInlineEnd:"auto"},r["".concat(o).concat(n,"-offset-").concat(c)]={marginInlineStart:0},r["".concat(o).concat(n,"-order-").concat(c)]={order:0}):(r["".concat(o).concat(n,"-").concat(c)]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:"0 0 ".concat(c/a*100,"%"),maxWidth:"".concat(c/a*100,"%")}],r["".concat(o).concat(n,"-push-").concat(c)]={insetInlineStart:"".concat(c/a*100,"%")},r["".concat(o).concat(n,"-pull-").concat(c)]={insetInlineEnd:"".concat(c/a*100,"%")},r["".concat(o).concat(n,"-offset-").concat(c)]={marginInlineStart:"".concat(c/a*100,"%")},r["".concat(o).concat(n,"-order-").concat(c)]={order:c});return r["".concat(o).concat(n,"-flex")]={flex:"var(--".concat(t).concat(n,"-flex)")},r})(e,n),i=(0,a.OF)("Grid",(e=>{const{componentCls:n}=e;return{[n]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),l=(0,a.OF)("Grid",(e=>{const n=(0,r.h1)(e,{gridColumns:24}),t={"-sm":n.screenSMMin,"-md":n.screenMDMin,"-lg":n.screenLGMin,"-xl":n.screenXLMin,"-xxl":n.screenXXLMin};return[c(n),s(n,""),s(n,"-xs"),Object.keys(t).map((e=>((e,n,t)=>({["@media (min-width: ".concat((0,o.zA)(n),")")]:Object.assign({},s(e,t))}))(n,t[e],e))).reduce(((e,n)=>Object.assign(Object.assign({},e),n)),{})]}),(()=>({})))},4760:(e,n,t)=>{t.d(n,{YU:()=>i,_j:()=>p,nP:()=>s,ox:()=>r,vR:()=>c});var o=t(9310),a=t(955);const r=new o.Mo("antSlideUpIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1}}),c=new o.Mo("antSlideUpOut",{"0%":{transform:"scaleY(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"0% 0%",opacity:0}}),s=new o.Mo("antSlideDownIn",{"0%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0},"100%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1}}),i=new o.Mo("antSlideDownOut",{"0%":{transform:"scaleY(1)",transformOrigin:"100% 100%",opacity:1},"100%":{transform:"scaleY(0.8)",transformOrigin:"100% 100%",opacity:0}}),l=new o.Mo("antSlideLeftIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1}}),u=new o.Mo("antSlideLeftOut",{"0%":{transform:"scaleX(1)",transformOrigin:"0% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"0% 0%",opacity:0}}),f=new o.Mo("antSlideRightIn",{"0%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0},"100%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1}}),d=new o.Mo("antSlideRightOut",{"0%":{transform:"scaleX(1)",transformOrigin:"100% 0%",opacity:1},"100%":{transform:"scaleX(0.8)",transformOrigin:"100% 0%",opacity:0}}),m={"slide-up":{inKeyframes:r,outKeyframes:c},"slide-down":{inKeyframes:s,outKeyframes:i},"slide-left":{inKeyframes:l,outKeyframes:u},"slide-right":{inKeyframes:f,outKeyframes:d}},p=(e,n)=>{const{antCls:t}=e,o="".concat(t,"-").concat(n),{inKeyframes:r,outKeyframes:c}=m[n];return[(0,a.b)(o,r,c,e.motionDurationMid),{["\n      ".concat(o,"-enter,\n      ").concat(o,"-appear\n    ")]:{transform:"scale(0)",transformOrigin:"0% 0%",opacity:0,animationTimingFunction:e.motionEaseOutQuint,"&-prepare":{transform:"scale(1)"}},["".concat(o,"-leave")]:{animationTimingFunction:e.motionEaseInQuint}}]}},9944:(e,n,t)=>{t.d(n,{A:()=>L});var o=t(8168),a=t(9379),r=t(5544),c=t(45),s=t(5043),i=t(8139),l=t.n(i),u=t(9635),f=t(2664),d=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],m=void 0;function p(e,n){var t=e.prefixCls,r=e.invalidate,i=e.item,f=e.renderItem,p=e.responsive,y=e.responsiveDisabled,g=e.registerSize,v=e.itemKey,h=e.className,b=e.style,x=e.children,O=e.display,w=e.order,C=e.component,A=void 0===C?"div":C,E=(0,c.A)(e,d),S=p&&!O;function M(e){g(v,e)}s.useEffect((function(){return function(){M(null)}}),[]);var j,I=f&&i!==m?f(i):x;r||(j={opacity:S?0:1,height:S?0:m,overflowY:S?"hidden":m,order:p?w:m,pointerEvents:S?"none":m,position:S?"absolute":m});var N={};S&&(N["aria-hidden"]=!0);var R=s.createElement(A,(0,o.A)({className:l()(!r&&t,h),style:(0,a.A)((0,a.A)({},j),b)},N,E,{ref:n}),I);return p&&(R=s.createElement(u.A,{onResize:function(e){M(e.offsetWidth)},disabled:y},R)),R}var y=s.forwardRef(p);y.displayName="Item";const g=y;var v=t(2375),h=t(7950),b=t(5818);function x(){var e=s.useRef(null);return function(n){e.current||(e.current=[],function(e){if("undefined"===typeof MessageChannel)(0,b.A)(e);else{var n=new MessageChannel;n.port1.onmessage=function(){return e()},n.port2.postMessage(void 0)}}((function(){(0,h.unstable_batchedUpdates)((function(){e.current.forEach((function(e){e()})),e.current=null}))}))),e.current.push(n)}}function O(e,n){var t=s.useState(n),o=(0,r.A)(t,2),a=o[0],c=o[1];return[a,(0,v.A)((function(n){e((function(){c(n)}))}))]}var w=s.createContext(null),C=["component"],A=["className"],E=["className"],S=function(e,n){var t=s.useContext(w);if(!t){var a=e.component,r=void 0===a?"div":a,i=(0,c.A)(e,C);return s.createElement(r,(0,o.A)({},i,{ref:n}))}var u=t.className,f=(0,c.A)(t,A),d=e.className,m=(0,c.A)(e,E);return s.createElement(w.Provider,{value:null},s.createElement(g,(0,o.A)({ref:n,className:l()(u,d)},f,m)))},M=s.forwardRef(S);M.displayName="RawItem";const j=M;var I=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],N="responsive",R="invalidate";function k(e){return"+ ".concat(e.length," ...")}function P(e,n){var t=e.prefixCls,i=void 0===t?"rc-overflow":t,d=e.data,m=void 0===d?[]:d,p=e.renderItem,y=e.renderRawItem,v=e.itemKey,h=e.itemWidth,b=void 0===h?10:h,C=e.ssr,A=e.style,E=e.className,S=e.maxCount,M=e.renderRest,j=e.renderRawRest,P=e.suffix,D=e.component,L=void 0===D?"div":D,K=e.itemComponent,T=e.onVisibleChange,z=(0,c.A)(e,I),W="full"===C,X=x(),F=O(X,null),Y=(0,r.A)(F,2),V=Y[0],G=Y[1],U=V||0,_=O(X,new Map),Q=(0,r.A)(_,2),B=Q[0],q=Q[1],H=O(X,0),J=(0,r.A)(H,2),$=J[0],Z=J[1],ee=O(X,0),ne=(0,r.A)(ee,2),te=ne[0],oe=ne[1],ae=O(X,0),re=(0,r.A)(ae,2),ce=re[0],se=re[1],ie=(0,s.useState)(null),le=(0,r.A)(ie,2),ue=le[0],fe=le[1],de=(0,s.useState)(null),me=(0,r.A)(de,2),pe=me[0],ye=me[1],ge=s.useMemo((function(){return null===pe&&W?Number.MAX_SAFE_INTEGER:pe||0}),[pe,V]),ve=(0,s.useState)(!1),he=(0,r.A)(ve,2),be=he[0],xe=he[1],Oe="".concat(i,"-item"),we=Math.max($,te),Ce=S===N,Ae=m.length&&Ce,Ee=S===R,Se=Ae||"number"===typeof S&&m.length>S,Me=(0,s.useMemo)((function(){var e=m;return Ae?e=null===V&&W?m:m.slice(0,Math.min(m.length,U/b)):"number"===typeof S&&(e=m.slice(0,S)),e}),[m,b,V,S,Ae]),je=(0,s.useMemo)((function(){return Ae?m.slice(ge+1):m.slice(Me.length)}),[m,Me,Ae,ge]),Ie=(0,s.useCallback)((function(e,n){var t;return"function"===typeof v?v(e):null!==(t=v&&(null===e||void 0===e?void 0:e[v]))&&void 0!==t?t:n}),[v]),Ne=(0,s.useCallback)(p||function(e){return e},[p]);function Re(e,n,t){(pe!==e||void 0!==n&&n!==ue)&&(ye(e),t||(xe(e<m.length-1),null===T||void 0===T||T(e)),void 0!==n&&fe(n))}function ke(e,n){q((function(t){var o=new Map(t);return null===n?o.delete(e):o.set(e,n),o}))}function Pe(e){return B.get(Ie(Me[e],e))}(0,f.A)((function(){if(U&&"number"===typeof we&&Me){var e=ce,n=Me.length,t=n-1;if(!n)return void Re(0,null);for(var o=0;o<n;o+=1){var a=Pe(o);if(W&&(a=a||0),void 0===a){Re(o-1,void 0,!0);break}if(e+=a,0===t&&e<=U||o===t-1&&e+Pe(t)<=U){Re(t,null);break}if(e+we>U){Re(o-1,e-a-ce+te);break}}P&&Pe(0)+ce>U&&fe(null)}}),[U,B,te,ce,Ie,Me]);var De=be&&!!je.length,Le={};null!==ue&&Ae&&(Le={position:"absolute",left:ue,top:0});var Ke,Te={prefixCls:Oe,responsive:Ae,component:K,invalidate:Ee},ze=y?function(e,n){var t=Ie(e,n);return s.createElement(w.Provider,{key:t,value:(0,a.A)((0,a.A)({},Te),{},{order:n,item:e,itemKey:t,registerSize:ke,display:n<=ge})},y(e,n))}:function(e,n){var t=Ie(e,n);return s.createElement(g,(0,o.A)({},Te,{order:n,key:t,item:e,renderItem:Ne,itemKey:t,registerSize:ke,display:n<=ge}))},We={order:De?ge:Number.MAX_SAFE_INTEGER,className:"".concat(Oe,"-rest"),registerSize:function(e,n){oe(n),Z(te)},display:De};if(j)j&&(Ke=s.createElement(w.Provider,{value:(0,a.A)((0,a.A)({},Te),We)},j(je)));else{var Xe=M||k;Ke=s.createElement(g,(0,o.A)({},Te,We),"function"===typeof Xe?Xe(je):Xe)}var Fe=s.createElement(L,(0,o.A)({className:l()(!Ee&&i,E),style:A,ref:n},z),Me.map(ze),Se?Ke:null,P&&s.createElement(g,(0,o.A)({},Te,{responsive:Ce,responsiveDisabled:!Ae,order:ge,className:"".concat(Oe,"-suffix"),registerSize:function(e,n){se(n)},display:!0,style:Le}),P));return Ce&&(Fe=s.createElement(u.A,{onResize:function(e,n){G(n.clientWidth)},disabled:!Ae},Fe)),Fe}var D=s.forwardRef(P);D.displayName="Overflow",D.Item=j,D.RESPONSIVE=N,D.INVALIDATE=R;const L=D},8060:(e,n,t)=>{t.d(n,{A:()=>i});var o=t(9379),a="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/),r="aria-",c="data-";function s(e,n){return 0===e.indexOf(n)}function i(e){var n,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n=!1===t?{aria:!0,data:!0,attr:!0}:!0===t?{aria:!0}:(0,o.A)({},t);var i={};return Object.keys(e).forEach((function(t){(n.aria&&("role"===t||s(t,r))||n.data&&s(t,c)||n.attr&&a.includes(t))&&(i[t]=e[t])})),i}}}]);
//# sourceMappingURL=650.38e1d691.chunk.js.map