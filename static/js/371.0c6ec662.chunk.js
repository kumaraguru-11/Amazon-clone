"use strict";(self.webpackChunkamazon_clone=self.webpackChunkamazon_clone||[]).push([[371],{2036:(e,n,o)=>{o.d(n,{A:()=>u});var t=o(45),a=o(9379),l=o(2284),r=o(5043),c=["show"];function u(e,n){return r.useMemo((function(){var o={};n&&(o.show="object"===(0,l.A)(n)&&n.formatter?n.formatter:!!n);var r=o=(0,a.A)((0,a.A)({},o),e),u=r.show,s=(0,t.A)(r,c);return(0,a.A)((0,a.A)({},s),{},{show:!!u,showFormatter:"function"===typeof u?u:void 0,strategy:s.strategy||function(e){return e.length}})}),[e,n])}},6371:(e,n,o)=>{o.d(n,{a:()=>d,A:()=>A});var t=o(9379),a=o(8168),l=o(4467),r=o(2284),c=o(8139),u=o.n(c),s=o(5043),i=o(1119);const d=function(e){var n,o,c=e.inputElement,d=e.children,f=e.prefixCls,v=e.prefix,p=e.suffix,m=e.addonBefore,g=e.addonAfter,x=e.className,h=e.style,A=e.disabled,w=e.readOnly,y=e.focused,C=e.triggerFocus,E=e.allowClear,N=e.value,b=e.handleReset,S=e.hidden,F=e.classes,k=e.classNames,R=e.dataAttrs,W=e.styles,z=e.components,B=null!==d&&void 0!==d?d:c,D=(null===z||void 0===z?void 0:z.affixWrapper)||"span",L=(null===z||void 0===z?void 0:z.groupWrapper)||"span",O=(null===z||void 0===z?void 0:z.wrapper)||"span",j=(null===z||void 0===z?void 0:z.groupAddon)||"span",I=(0,s.useRef)(null),K=(0,i.OL)(e),P=(0,s.cloneElement)(B,{value:N,className:u()(B.props.className,!K&&(null===k||void 0===k?void 0:k.variant))||null});if(K){var T,M=null;if(E){var V,_=!A&&!w&&N,H="".concat(f,"-clear-icon"),q="object"===(0,r.A)(E)&&null!==E&&void 0!==E&&E.clearIcon?E.clearIcon:"\u2716";M=s.createElement("span",{onClick:b,onMouseDown:function(e){return e.preventDefault()},className:u()(H,(V={},(0,l.A)(V,"".concat(H,"-hidden"),!_),(0,l.A)(V,"".concat(H,"-has-suffix"),!!p),V)),role:"button",tabIndex:-1},q)}var G="".concat(f,"-affix-wrapper"),J=u()(G,(T={},(0,l.A)(T,"".concat(f,"-disabled"),A),(0,l.A)(T,"".concat(G,"-disabled"),A),(0,l.A)(T,"".concat(G,"-focused"),y),(0,l.A)(T,"".concat(G,"-readonly"),w),(0,l.A)(T,"".concat(G,"-input-with-clear-btn"),p&&E&&N),T),null===F||void 0===F?void 0:F.affixWrapper,null===k||void 0===k?void 0:k.affixWrapper,null===k||void 0===k?void 0:k.variant),Q=(p||E)&&s.createElement("span",{className:u()("".concat(f,"-suffix"),null===k||void 0===k?void 0:k.suffix),style:null===W||void 0===W?void 0:W.suffix},M,p);P=s.createElement(D,(0,a.A)({className:J,style:null===W||void 0===W?void 0:W.affixWrapper,onClick:function(e){var n;null!==(n=I.current)&&void 0!==n&&n.contains(e.target)&&(null===C||void 0===C||C())}},null===R||void 0===R?void 0:R.affixWrapper,{ref:I}),v&&s.createElement("span",{className:u()("".concat(f,"-prefix"),null===k||void 0===k?void 0:k.prefix),style:null===W||void 0===W?void 0:W.prefix},v),P,Q)}if((0,i.bk)(e)){var U="".concat(f,"-group"),X="".concat(U,"-addon"),Y="".concat(U,"-wrapper"),Z=u()("".concat(f,"-wrapper"),U,null===F||void 0===F?void 0:F.wrapper,null===k||void 0===k?void 0:k.wrapper),$=u()(Y,(0,l.A)({},"".concat(Y,"-disabled"),A),null===F||void 0===F?void 0:F.group,null===k||void 0===k?void 0:k.groupWrapper);P=s.createElement(L,{className:$},s.createElement(O,{className:Z},m&&s.createElement(j,{className:X},m),P,g&&s.createElement(j,{className:X},g)))}return s.cloneElement(P,{className:u()(null===(n=P.props)||void 0===n?void 0:n.className,x)||null,style:(0,t.A)((0,t.A)({},null===(o=P.props)||void 0===o?void 0:o.style),h),hidden:S})};var f=o(436),v=o(5544),p=o(45),m=o(8678),g=o(8574),x=o(2036),h=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"];const A=(0,s.forwardRef)((function(e,n){var o=e.autoComplete,r=e.onChange,c=e.onFocus,A=e.onBlur,w=e.onPressEnter,y=e.onKeyDown,C=e.prefixCls,E=void 0===C?"rc-input":C,N=e.disabled,b=e.htmlSize,S=e.className,F=e.maxLength,k=e.suffix,R=e.showCount,W=e.count,z=e.type,B=void 0===z?"text":z,D=e.classes,L=e.classNames,O=e.styles,j=e.onCompositionStart,I=e.onCompositionEnd,K=(0,p.A)(e,h),P=(0,s.useState)(!1),T=(0,v.A)(P,2),M=T[0],V=T[1],_=(0,s.useRef)(!1),H=(0,s.useRef)(null),q=function(e){H.current&&(0,i.F4)(H.current,e)},G=(0,m.A)(e.defaultValue,{value:e.value}),J=(0,v.A)(G,2),Q=J[0],U=J[1],X=void 0===Q||null===Q?"":String(Q),Y=(0,s.useState)(null),Z=(0,v.A)(Y,2),$=Z[0],ee=Z[1],ne=(0,x.A)(W,R),oe=ne.max||F,te=ne.strategy(X),ae=!!oe&&te>oe;(0,s.useImperativeHandle)(n,(function(){return{focus:q,blur:function(){var e;null===(e=H.current)||void 0===e||e.blur()},setSelectionRange:function(e,n,o){var t;null===(t=H.current)||void 0===t||t.setSelectionRange(e,n,o)},select:function(){var e;null===(e=H.current)||void 0===e||e.select()},input:H.current}})),(0,s.useEffect)((function(){V((function(e){return(!e||!N)&&e}))}),[N]);var le=function(e,n,o){var t,a,l=n;if(!_.current&&ne.exceedFormatter&&ne.max&&ne.strategy(n)>ne.max)n!==(l=ne.exceedFormatter(n,{max:ne.max}))&&ee([(null===(t=H.current)||void 0===t?void 0:t.selectionStart)||0,(null===(a=H.current)||void 0===a?void 0:a.selectionEnd)||0]);else if("compositionEnd"===o.source)return;U(l),H.current&&(0,i.gS)(H.current,e,r,l)};(0,s.useEffect)((function(){var e;$&&(null===(e=H.current)||void 0===e||e.setSelectionRange.apply(e,(0,f.A)($)))}),[$]);var re=function(e){le(e,e.target.value,{source:"change"})},ce=function(e){_.current=!1,le(e,e.currentTarget.value,{source:"compositionEnd"}),null===I||void 0===I||I(e)},ue=function(e){w&&"Enter"===e.key&&w(e),null===y||void 0===y||y(e)},se=function(e){V(!0),null===c||void 0===c||c(e)},ie=function(e){V(!1),null===A||void 0===A||A(e)},de=ae&&"".concat(E,"-out-of-range");return s.createElement(d,(0,a.A)({},K,{prefixCls:E,className:u()(S,de),handleReset:function(e){U(""),q(),H.current&&(0,i.gS)(H.current,e,r)},value:X,focused:M,triggerFocus:q,suffix:function(){var e=Number(oe)>0;if(k||ne.show){var n=ne.showFormatter?ne.showFormatter({value:X,count:te,maxLength:oe}):"".concat(te).concat(e?" / ".concat(oe):"");return s.createElement(s.Fragment,null,ne.show&&s.createElement("span",{className:u()("".concat(E,"-show-count-suffix"),(0,l.A)({},"".concat(E,"-show-count-has-suffix"),!!k),null===L||void 0===L?void 0:L.count),style:(0,t.A)({},null===O||void 0===O?void 0:O.count)},n),k)}return null}(),disabled:N,classes:D,classNames:L,styles:O}),function(){var n=(0,g.A)(e,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]);return s.createElement("input",(0,a.A)({autoComplete:o},n,{onChange:re,onFocus:se,onBlur:ie,onKeyDown:ue,className:u()(E,(0,l.A)({},"".concat(E,"-disabled"),N),null===L||void 0===L?void 0:L.input),style:null===O||void 0===O?void 0:O.input,ref:H,size:b,type:B,onCompositionStart:function(e){_.current=!0,null===j||void 0===j||j(e)},onCompositionEnd:ce}))}())}))},1119:(e,n,o)=>{function t(e){return!(!e.addonBefore&&!e.addonAfter)}function a(e){return!!(e.prefix||e.suffix||e.allowClear)}function l(e,n,o,t){if(o){var a=n;if("click"===n.type){var l=e.cloneNode(!0);return a=Object.create(n,{target:{value:l},currentTarget:{value:l}}),l.value="",void o(a)}if("file"!==e.type&&void 0!==t){var r=e.cloneNode(!0);return a=Object.create(n,{target:{value:r},currentTarget:{value:r}}),r.value=t,void o(a)}o(a)}}function r(e,n){if(e){e.focus(n);var o=(n||{}).cursor;if(o){var t=e.value.length;switch(o){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(t,t);break;default:e.setSelectionRange(0,t)}}}}o.d(n,{F4:()=>r,OL:()=>a,bk:()=>t,gS:()=>l})}}]);
//# sourceMappingURL=371.0c6ec662.chunk.js.map