"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5782],{27733:function(e,t,n){n.d(t,{B:function(){return a}});var r=n(2265),o=n(56989),u=n(42210),l=n(67256);function a(e){let t=e+"CollectionProvider",[n,a]=(0,o.b)(t),[c,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),d=e+"CollectionSlot",s=r.forwardRef((e,t)=>{let{scope:n,children:o}=e,a=i(d,n),c=(0,u.e)(t,a.collectionRef);return r.createElement(l.g7,{ref:c},o)}),f=e+"CollectionItemSlot",p="data-radix-collection-item",m=r.forwardRef((e,t)=>{let{scope:n,children:o,...a}=e,c=r.useRef(null),d=(0,u.e)(t,c),s=i(f,n);return r.useEffect(()=>(s.itemMap.set(c,{ref:c,...a}),()=>void s.itemMap.delete(c))),r.createElement(l.g7,{[p]:"",ref:d},o)});return[{Provider:e=>{let{scope:t,children:n}=e,o=r.useRef(null),u=r.useRef(new Map).current;return r.createElement(c,{scope:t,itemMap:u,collectionRef:o},n)},Slot:s,ItemSlot:m},function(t){let n=i(e+"CollectionConsumer",t),o=r.useCallback(()=>{let e=n.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`)),r=Array.from(n.itemMap.values()),o=r.sort((e,n)=>t.indexOf(e.ref.current)-t.indexOf(n.ref.current));return o},[n.collectionRef,n.itemMap]);return o},a]}},65400:function(e,t,n){n.d(t,{gm:function(){return u}});var r=n(2265);let o=(0,r.createContext)(void 0);function u(e){let t=(0,r.useContext)(o);return e||t||"ltr"}},5782:function(e,t,n){let r;n.d(t,{VY:function(){return ej},ZA:function(){return eq},ck:function(){return eJ},__:function(){return e$},Uv:function(){return eY},Ee:function(){return eQ},fC:function(){return eX},Z0:function(){return e0},Tr:function(){return e1},tu:function(){return e2},xz:function(){return eH}});var o=n(13428),u=n(2265),l=n(85744),a=n(42210),c=n(56989),i=n(73763),d=n(9381),s=n(27733),f=n(65400),p=n(74278),m=n(31244),v=n(16459);let g="focusScope.autoFocusOnMount",E="focusScope.autoFocusOnUnmount",h={bubbles:!1,cancelable:!0},w=(0,u.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:l,onUnmountAutoFocus:c,...i}=e,[s,f]=(0,u.useState)(null),p=(0,v.W)(l),m=(0,v.W)(c),w=(0,u.useRef)(null),y=(0,a.e)(t,e=>f(e)),R=(0,u.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,u.useEffect)(()=>{if(r){function e(e){if(R.paused||!s)return;let t=e.target;s.contains(t)?w.current=t:_(w.current,{select:!0})}function t(e){if(R.paused||!s)return;let t=e.relatedTarget;null===t||s.contains(t)||_(w.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){let t=document.activeElement;if(t===document.body)for(let t of e)t.removedNodes.length>0&&_(s)});return s&&n.observe(s,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,s,R.paused]),(0,u.useEffect)(()=>{if(s){C.add(R);let e=document.activeElement,t=s.contains(e);if(!t){let t=new CustomEvent(g,h);s.addEventListener(g,p),s.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(_(r,{select:t}),document.activeElement!==n)return}(M(s).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&_(s))}return()=>{s.removeEventListener(g,p),setTimeout(()=>{let t=new CustomEvent(E,h);s.addEventListener(E,m),s.dispatchEvent(t),t.defaultPrevented||_(null!=e?e:document.body,{select:!0}),s.removeEventListener(E,m),C.remove(R)},0)}}},[s,p,m,R]);let D=(0,u.useCallback)(e=>{if(!n&&!r||R.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,u]=function(e){let t=M(e),n=b(t,e),r=b(t.reverse(),e);return[n,r]}(t),l=r&&u;l?e.shiftKey||o!==u?e.shiftKey&&o===r&&(e.preventDefault(),n&&_(u,{select:!0})):(e.preventDefault(),n&&_(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,R.paused]);return(0,u.createElement)(d.WV.div,(0,o.Z)({tabIndex:-1},i,{ref:y,onKeyDown:D}))});function M(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function b(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function _(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let C=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=y(r,e)).unshift(e)},remove(e){var t;null===(t=(r=y(r,e))[0])||void 0===t||t.resume()}});function y(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var R=n(20966),D=n(13412),I=n(52730),T=n(85606),k=n(44356),P=n(67256),x=n(85859),F=n(17552);let O=["Enter"," "],S=["ArrowUp","PageDown","End"],Z=["ArrowDown","PageUp","Home",...S],L={ltr:[...O,"ArrowRight"],rtl:[...O,"ArrowLeft"]},A={ltr:["ArrowLeft"],rtl:["ArrowRight"]},K="Menu",[V,W,G]=(0,s.B)(K),[U,N]=(0,c.b)(K,[G,D.D7,k.Pc]),B=(0,D.D7)(),z=(0,k.Pc)(),[X,H]=U(K),[Y,j]=U(K),q=(0,u.forwardRef)((e,t)=>{let{__scopeMenu:n,...r}=e,l=B(n);return(0,u.createElement)(D.ee,(0,o.Z)({},l,r,{ref:t}))}),$="MenuPortal",[J,Q]=U($,{forceMount:void 0}),ee="MenuContent",[et,en]=U(ee),er=(0,u.forwardRef)((e,t)=>{let n=Q(ee,e.__scopeMenu),{forceMount:r=n.forceMount,...l}=e,a=H(ee,e.__scopeMenu),c=j(ee,e.__scopeMenu);return(0,u.createElement)(V.Provider,{scope:e.__scopeMenu},(0,u.createElement)(T.z,{present:r||a.open},(0,u.createElement)(V.Slot,{scope:e.__scopeMenu},c.modal?(0,u.createElement)(eo,(0,o.Z)({},l,{ref:t})):(0,u.createElement)(eu,(0,o.Z)({},l,{ref:t})))))}),eo=(0,u.forwardRef)((e,t)=>{let n=H(ee,e.__scopeMenu),r=(0,u.useRef)(null),c=(0,a.e)(t,r);return(0,u.useEffect)(()=>{let e=r.current;if(e)return(0,x.Ry)(e)},[]),(0,u.createElement)(el,(0,o.Z)({},e,{ref:c,trapFocus:n.open,disableOutsidePointerEvents:n.open,disableOutsideScroll:!0,onFocusOutside:(0,l.M)(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1}),onDismiss:()=>n.onOpenChange(!1)}))}),eu=(0,u.forwardRef)((e,t)=>{let n=H(ee,e.__scopeMenu);return(0,u.createElement)(el,(0,o.Z)({},e,{ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,disableOutsideScroll:!1,onDismiss:()=>n.onOpenChange(!1)}))}),el=(0,u.forwardRef)((e,t)=>{let{__scopeMenu:n,loop:r=!1,trapFocus:c,onOpenAutoFocus:i,onCloseAutoFocus:d,disableOutsidePointerEvents:s,onEntryFocus:f,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:E,onInteractOutside:h,onDismiss:M,disableOutsideScroll:b,..._}=e,C=H(ee,n),y=j(ee,n),R=B(n),I=z(n),T=W(n),[x,O]=(0,u.useState)(null),L=(0,u.useRef)(null),A=(0,a.e)(t,L,C.onContentChange),K=(0,u.useRef)(0),V=(0,u.useRef)(""),G=(0,u.useRef)(0),U=(0,u.useRef)(null),N=(0,u.useRef)("right"),X=(0,u.useRef)(0),Y=b?F.Z:u.Fragment,q=b?{as:P.g7,allowPinchZoom:!0}:void 0,$=e=>{var t,n;let r=V.current+e,o=T().filter(e=>!e.disabled),u=document.activeElement,l=null===(t=o.find(e=>e.ref.current===u))||void 0===t?void 0:t.textValue,a=o.map(e=>e.textValue),c=function(e,t,n){var r;let o=t.length>1&&Array.from(t).every(e=>e===t[0]),u=o?t[0]:t,l=n?e.indexOf(n):-1,a=(r=Math.max(l,0),e.map((t,n)=>e[(r+n)%e.length])),c=1===u.length;c&&(a=a.filter(e=>e!==n));let i=a.find(e=>e.toLowerCase().startsWith(u.toLowerCase()));return i!==n?i:void 0}(a,r,l),i=null===(n=o.find(e=>e.textValue===c))||void 0===n?void 0:n.ref.current;!function e(t){V.current=t,window.clearTimeout(K.current),""!==t&&(K.current=window.setTimeout(()=>e(""),1e3))}(r),i&&setTimeout(()=>i.focus())};(0,u.useEffect)(()=>()=>window.clearTimeout(K.current),[]),(0,m.EW)();let J=(0,u.useCallback)(e=>{var t,n;let r=N.current===(null===(t=U.current)||void 0===t?void 0:t.side);return r&&function(e,t){if(!t)return!1;let n={x:e.clientX,y:e.clientY};return function(e,t){let{x:n,y:r}=e,o=!1;for(let e=0,u=t.length-1;e<t.length;u=e++){let l=t[e].x,a=t[e].y,c=t[u].x,i=t[u].y,d=a>r!=i>r&&n<(c-l)*(r-a)/(i-a)+l;d&&(o=!o)}return o}(n,t)}(e,null===(n=U.current)||void 0===n?void 0:n.area)},[]);return(0,u.createElement)(et,{scope:n,searchRef:V,onItemEnter:(0,u.useCallback)(e=>{J(e)&&e.preventDefault()},[J]),onItemLeave:(0,u.useCallback)(e=>{var t;J(e)||(null===(t=L.current)||void 0===t||t.focus(),O(null))},[J]),onTriggerLeave:(0,u.useCallback)(e=>{J(e)&&e.preventDefault()},[J]),pointerGraceTimerRef:G,onPointerGraceIntentChange:(0,u.useCallback)(e=>{U.current=e},[])},(0,u.createElement)(Y,q,(0,u.createElement)(w,{asChild:!0,trapped:c,onMountAutoFocus:(0,l.M)(i,e=>{var t;e.preventDefault(),null===(t=L.current)||void 0===t||t.focus()}),onUnmountAutoFocus:d},(0,u.createElement)(p.XB,{asChild:!0,disableOutsidePointerEvents:s,onEscapeKeyDown:v,onPointerDownOutside:g,onFocusOutside:E,onInteractOutside:h,onDismiss:M},(0,u.createElement)(k.fC,(0,o.Z)({asChild:!0},I,{dir:y.dir,orientation:"vertical",loop:r,currentTabStopId:x,onCurrentTabStopIdChange:O,onEntryFocus:(0,l.M)(f,e=>{y.isUsingKeyboardRef.current||e.preventDefault()})}),(0,u.createElement)(D.VY,(0,o.Z)({role:"menu","aria-orientation":"vertical","data-state":eR(C.open),"data-radix-menu-content":"",dir:y.dir},R,_,{ref:A,style:{outline:"none",..._.style},onKeyDown:(0,l.M)(_.onKeyDown,e=>{let t=e.target,n=t.closest("[data-radix-menu-content]")===e.currentTarget,r=e.ctrlKey||e.altKey||e.metaKey,o=1===e.key.length;n&&("Tab"===e.key&&e.preventDefault(),!r&&o&&$(e.key));let u=L.current;if(e.target!==u||!Z.includes(e.key))return;e.preventDefault();let l=T().filter(e=>!e.disabled),a=l.map(e=>e.ref.current);S.includes(e.key)&&a.reverse(),function(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}(a)}),onBlur:(0,l.M)(e.onBlur,e=>{e.currentTarget.contains(e.target)||(window.clearTimeout(K.current),V.current="")}),onPointerMove:(0,l.M)(e.onPointerMove,eT(e=>{let t=e.target,n=X.current!==e.clientX;if(e.currentTarget.contains(t)&&n){let t=e.clientX>X.current?"right":"left";N.current=t,X.current=e.clientX}}))})))))))}),ea=(0,u.forwardRef)((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,u.createElement)(d.WV.div,(0,o.Z)({role:"group"},r,{ref:t}))}),ec=(0,u.forwardRef)((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,u.createElement)(d.WV.div,(0,o.Z)({},r,{ref:t}))}),ei="MenuItem",ed="menu.itemSelect",es=(0,u.forwardRef)((e,t)=>{let{disabled:n=!1,onSelect:r,...c}=e,i=(0,u.useRef)(null),s=j(ei,e.__scopeMenu),f=en(ei,e.__scopeMenu),p=(0,a.e)(t,i),m=(0,u.useRef)(!1);return(0,u.createElement)(ef,(0,o.Z)({},c,{ref:p,disabled:n,onClick:(0,l.M)(e.onClick,()=>{let e=i.current;if(!n&&e){let t=new CustomEvent(ed,{bubbles:!0,cancelable:!0});e.addEventListener(ed,e=>null==r?void 0:r(e),{once:!0}),(0,d.jH)(e,t),t.defaultPrevented?m.current=!1:s.onClose()}}),onPointerDown:t=>{var n;null===(n=e.onPointerDown)||void 0===n||n.call(e,t),m.current=!0},onPointerUp:(0,l.M)(e.onPointerUp,e=>{var t;m.current||null===(t=e.currentTarget)||void 0===t||t.click()}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{let t=""!==f.searchRef.current;!n&&(!t||" "!==e.key)&&O.includes(e.key)&&(e.currentTarget.click(),e.preventDefault())})}))}),ef=(0,u.forwardRef)((e,t)=>{let{__scopeMenu:n,disabled:r=!1,textValue:c,...i}=e,s=en(ei,n),f=z(n),p=(0,u.useRef)(null),m=(0,a.e)(t,p),[v,g]=(0,u.useState)(!1),[E,h]=(0,u.useState)("");return(0,u.useEffect)(()=>{let e=p.current;if(e){var t;h((null!==(t=e.textContent)&&void 0!==t?t:"").trim())}},[i.children]),(0,u.createElement)(V.ItemSlot,{scope:n,disabled:r,textValue:null!=c?c:E},(0,u.createElement)(k.ck,(0,o.Z)({asChild:!0},f,{focusable:!r}),(0,u.createElement)(d.WV.div,(0,o.Z)({role:"menuitem","data-highlighted":v?"":void 0,"aria-disabled":r||void 0,"data-disabled":r?"":void 0},i,{ref:m,onPointerMove:(0,l.M)(e.onPointerMove,eT(e=>{if(r)s.onItemLeave(e);else if(s.onItemEnter(e),!e.defaultPrevented){let t=e.currentTarget;t.focus()}})),onPointerLeave:(0,l.M)(e.onPointerLeave,eT(e=>s.onItemLeave(e))),onFocus:(0,l.M)(e.onFocus,()=>g(!0)),onBlur:(0,l.M)(e.onBlur,()=>g(!1))}))))}),[ep,em]=((e,t)=>{let{checked:n=!1,onCheckedChange:r,...a}=e;return(0,u.createElement)(eE,{scope:e.__scopeMenu,checked:n},(0,u.createElement)(es,(0,o.Z)({role:"menuitemcheckbox","aria-checked":eD(n)?"mixed":n},a,{ref:t,"data-state":eI(n),onSelect:(0,l.M)(a.onSelect,()=>null==r?void 0:r(!!eD(n)||!n),{checkForDefaultPrevented:!1})})))},U("MenuRadioGroup",{value:void 0,onValueChange:()=>{}})),ev=(0,u.forwardRef)((e,t)=>{let{value:n,onValueChange:r,...l}=e,a=(0,v.W)(r);return(0,u.createElement)(ep,{scope:e.__scopeMenu,value:n,onValueChange:a},(0,u.createElement)(ea,(0,o.Z)({},l,{ref:t})))}),eg=((e,t)=>{let{value:n,...r}=e,a=em("MenuRadioItem",e.__scopeMenu),c=n===a.value;return(0,u.createElement)(eE,{scope:e.__scopeMenu,checked:c},(0,u.createElement)(es,(0,o.Z)({role:"menuitemradio","aria-checked":c},r,{ref:t,"data-state":eI(c),onSelect:(0,l.M)(r.onSelect,()=>{var e;return null===(e=a.onValueChange)||void 0===e?void 0:e.call(a,n)},{checkForDefaultPrevented:!1})})))},"MenuItemIndicator"),[eE,eh]=U(eg,{checked:!1}),ew=((e,t)=>{let{__scopeMenu:n,forceMount:r,...l}=e,a=eh(eg,n);return(0,u.createElement)(T.z,{present:r||eD(a.checked)||!0===a.checked},(0,u.createElement)(d.WV.span,(0,o.Z)({},l,{ref:t,"data-state":eI(a.checked)})))},(0,u.forwardRef)((e,t)=>{let{__scopeMenu:n,...r}=e;return(0,u.createElement)(d.WV.div,(0,o.Z)({role:"separator","aria-orientation":"horizontal"},r,{ref:t}))})),eM=((e,t)=>{let{__scopeMenu:n,...r}=e,l=B(n);return(0,u.createElement)(D.Eh,(0,o.Z)({},l,r,{ref:t}))},"MenuSub"),[eb,e_]=U(eM),eC="MenuSubTrigger",ey=((e,t)=>{let n=H(eC,e.__scopeMenu),r=j(eC,e.__scopeMenu),c=e_(eC,e.__scopeMenu),i=en(eC,e.__scopeMenu),d=(0,u.useRef)(null),{pointerGraceTimerRef:s,onPointerGraceIntentChange:f}=i,p={__scopeMenu:e.__scopeMenu},m=(0,u.useCallback)(()=>{d.current&&window.clearTimeout(d.current),d.current=null},[]);return(0,u.useEffect)(()=>m,[m]),(0,u.useEffect)(()=>{let e=s.current;return()=>{window.clearTimeout(e),f(null)}},[s,f]),(0,u.createElement)(q,(0,o.Z)({asChild:!0},p),(0,u.createElement)(ef,(0,o.Z)({id:c.triggerId,"aria-haspopup":"menu","aria-expanded":n.open,"aria-controls":c.contentId,"data-state":eR(n.open)},e,{ref:(0,a.F)(t,c.onTriggerChange),onClick:t=>{var r;null===(r=e.onClick)||void 0===r||r.call(e,t),e.disabled||t.defaultPrevented||(t.currentTarget.focus(),n.open||n.onOpenChange(!0))},onPointerMove:(0,l.M)(e.onPointerMove,eT(t=>{i.onItemEnter(t),t.defaultPrevented||e.disabled||n.open||d.current||(i.onPointerGraceIntentChange(null),d.current=window.setTimeout(()=>{n.onOpenChange(!0),m()},100))})),onPointerLeave:(0,l.M)(e.onPointerLeave,eT(e=>{var t,r;m();let o=null===(t=n.content)||void 0===t?void 0:t.getBoundingClientRect();if(o){let t=null===(r=n.content)||void 0===r?void 0:r.dataset.side,u="right"===t,l=o[u?"left":"right"],a=o[u?"right":"left"];i.onPointerGraceIntentChange({area:[{x:e.clientX+(u?-5:5),y:e.clientY},{x:l,y:o.top},{x:a,y:o.top},{x:a,y:o.bottom},{x:l,y:o.bottom}],side:t}),window.clearTimeout(s.current),s.current=window.setTimeout(()=>i.onPointerGraceIntentChange(null),300)}else{if(i.onTriggerLeave(e),e.defaultPrevented)return;i.onPointerGraceIntentChange(null)}})),onKeyDown:(0,l.M)(e.onKeyDown,t=>{let o=""!==i.searchRef.current;if(!e.disabled&&(!o||" "!==t.key)&&L[r.dir].includes(t.key)){var u;n.onOpenChange(!0),null===(u=n.content)||void 0===u||u.focus(),t.preventDefault()}})})))},(0,u.forwardRef)((e,t)=>{let n=Q(ee,e.__scopeMenu),{forceMount:r=n.forceMount,...c}=e,i=H(ee,e.__scopeMenu),d=j(ee,e.__scopeMenu),s=e_("MenuSubContent",e.__scopeMenu),f=(0,u.useRef)(null),p=(0,a.e)(t,f);return(0,u.createElement)(V.Provider,{scope:e.__scopeMenu},(0,u.createElement)(T.z,{present:r||i.open},(0,u.createElement)(V.Slot,{scope:e.__scopeMenu},(0,u.createElement)(el,(0,o.Z)({id:s.contentId,"aria-labelledby":s.triggerId},c,{ref:p,align:"start",side:"rtl"===d.dir?"left":"right",disableOutsidePointerEvents:!1,disableOutsideScroll:!1,trapFocus:!1,onOpenAutoFocus:e=>{var t;d.isUsingKeyboardRef.current&&(null===(t=f.current)||void 0===t||t.focus()),e.preventDefault()},onCloseAutoFocus:e=>e.preventDefault(),onFocusOutside:(0,l.M)(e.onFocusOutside,e=>{e.target!==s.trigger&&i.onOpenChange(!1)}),onEscapeKeyDown:(0,l.M)(e.onEscapeKeyDown,e=>{d.onClose(),e.preventDefault()}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{let t=e.currentTarget.contains(e.target),n=A[d.dir].includes(e.key);if(t&&n){var r;i.onOpenChange(!1),null===(r=s.trigger)||void 0===r||r.focus(),e.preventDefault()}})})))))}));function eR(e){return e?"open":"closed"}function eD(e){return"indeterminate"===e}function eI(e){return eD(e)?"indeterminate":e?"checked":"unchecked"}function eT(e){return t=>"mouse"===t.pointerType?e(t):void 0}let ek=e=>{let{__scopeMenu:t,open:n=!1,children:r,dir:o,onOpenChange:l,modal:a=!0}=e,c=B(t),[i,d]=(0,u.useState)(null),s=(0,u.useRef)(!1),p=(0,v.W)(l),m=(0,f.gm)(o);return(0,u.useEffect)(()=>{let e=()=>{s.current=!0,document.addEventListener("pointerdown",t,{capture:!0,once:!0}),document.addEventListener("pointermove",t,{capture:!0,once:!0})},t=()=>s.current=!1;return document.addEventListener("keydown",e,{capture:!0}),()=>{document.removeEventListener("keydown",e,{capture:!0}),document.removeEventListener("pointerdown",t,{capture:!0}),document.removeEventListener("pointermove",t,{capture:!0})}},[]),(0,u.createElement)(D.fC,c,(0,u.createElement)(X,{scope:t,open:n,onOpenChange:p,content:i,onContentChange:d},(0,u.createElement)(Y,{scope:t,onClose:(0,u.useCallback)(()=>p(!1),[p]),isUsingKeyboardRef:s,dir:m,modal:a},r)))},eP=e=>{let{__scopeMenu:t,forceMount:n,children:r,container:o}=e,l=H($,t);return(0,u.createElement)(J,{scope:t,forceMount:n},(0,u.createElement)(T.z,{present:n||l.open},(0,u.createElement)(I.h,{asChild:!0,container:o},r)))},ex=e=>{let{__scopeMenu:t,children:n,open:r=!1,onOpenChange:o}=e,l=H(eM,t),a=B(t),[c,i]=(0,u.useState)(null),[d,s]=(0,u.useState)(null),f=(0,v.W)(o);return(0,u.useEffect)(()=>(!1===l.open&&f(!1),()=>f(!1)),[l.open,f]),(0,u.createElement)(D.fC,a,(0,u.createElement)(X,{scope:t,open:r,onOpenChange:f,content:d,onContentChange:s},(0,u.createElement)(eb,{scope:t,contentId:(0,R.M)(),triggerId:(0,R.M)(),trigger:c,onTriggerChange:i},n)))},eF="DropdownMenu",[eO,eS]=(0,c.b)(eF,[N]),eZ=N(),[eL,eA]=eO(eF),eK=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,disabled:r=!1,...c}=e,i=eA("DropdownMenuTrigger",n),s=eZ(n);return(0,u.createElement)(q,(0,o.Z)({asChild:!0},s),(0,u.createElement)(d.WV.button,(0,o.Z)({type:"button",id:i.triggerId,"aria-haspopup":"menu","aria-expanded":i.open,"aria-controls":i.open?i.contentId:void 0,"data-state":i.open?"open":"closed","data-disabled":r?"":void 0,disabled:r},c,{ref:(0,a.F)(t,i.triggerRef),onPointerDown:(0,l.M)(e.onPointerDown,e=>{r||0!==e.button||!1!==e.ctrlKey||(i.onOpenToggle(),i.open||e.preventDefault())}),onKeyDown:(0,l.M)(e.onKeyDown,e=>{!r&&(["Enter"," "].includes(e.key)&&i.onOpenToggle(),"ArrowDown"===e.key&&i.onOpenChange(!0),["Enter"," ","ArrowDown"].includes(e.key)&&e.preventDefault())})})))}),eV=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,a=eA("DropdownMenuContent",n),c=eZ(n),i=(0,u.useRef)(!1);return(0,u.createElement)(er,(0,o.Z)({id:a.contentId,"aria-labelledby":a.triggerId},c,r,{ref:t,onCloseAutoFocus:(0,l.M)(e.onCloseAutoFocus,e=>{var t;i.current||null===(t=a.triggerRef.current)||void 0===t||t.focus(),i.current=!1,e.preventDefault()}),onInteractOutside:(0,l.M)(e.onInteractOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey,r=2===t.button||n;(!a.modal||r)&&(i.current=!0)}),style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eW=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,l=eZ(n);return(0,u.createElement)(ea,(0,o.Z)({},l,r,{ref:t}))}),eG=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,l=eZ(n);return(0,u.createElement)(ec,(0,o.Z)({},l,r,{ref:t}))}),eU=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,l=eZ(n);return(0,u.createElement)(es,(0,o.Z)({},l,r,{ref:t}))}),eN=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,l=eZ(n);return(0,u.createElement)(ev,(0,o.Z)({},l,r,{ref:t}))}),eB=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,l=eZ(n);return(0,u.createElement)(ew,(0,o.Z)({},l,r,{ref:t}))}),ez=(0,u.forwardRef)((e,t)=>{let{__scopeDropdownMenu:n,...r}=e,l=eZ(n);return(0,u.createElement)(ey,(0,o.Z)({},l,r,{ref:t,style:{...e.style,"--radix-dropdown-menu-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-dropdown-menu-content-available-width":"var(--radix-popper-available-width)","--radix-dropdown-menu-content-available-height":"var(--radix-popper-available-height)","--radix-dropdown-menu-trigger-width":"var(--radix-popper-anchor-width)","--radix-dropdown-menu-trigger-height":"var(--radix-popper-anchor-height)"}}))}),eX=e=>{let{__scopeDropdownMenu:t,children:n,dir:r,open:l,defaultOpen:a,onOpenChange:c,modal:d=!0}=e,s=eZ(t),f=(0,u.useRef)(null),[p=!1,m]=(0,i.T)({prop:l,defaultProp:a,onChange:c});return(0,u.createElement)(eL,{scope:t,triggerId:(0,R.M)(),triggerRef:f,contentId:(0,R.M)(),open:p,onOpenChange:m,onOpenToggle:(0,u.useCallback)(()=>m(e=>!e),[m]),modal:d},(0,u.createElement)(ek,(0,o.Z)({},s,{open:p,onOpenChange:m,dir:r,modal:d}),n))},eH=eK,eY=e=>{let{__scopeDropdownMenu:t,...n}=e,r=eZ(t);return(0,u.createElement)(eP,(0,o.Z)({},r,n))},ej=eV,eq=eW,e$=eG,eJ=eU,eQ=eN,e0=eB,e1=e=>{let{__scopeDropdownMenu:t,children:n,open:r,onOpenChange:l,defaultOpen:a}=e,c=eZ(t),[d=!1,s]=(0,i.T)({prop:r,defaultProp:a,onChange:l});return(0,u.createElement)(ex,(0,o.Z)({},c,{open:d,onOpenChange:s}),n)},e2=ez},44356:function(e,t,n){n.d(t,{Pc:function(){return b},ck:function(){return P},fC:function(){return k}});var r=n(13428),o=n(2265),u=n(85744),l=n(27733),a=n(42210),c=n(56989),i=n(20966),d=n(9381),s=n(16459),f=n(73763),p=n(65400);let m="rovingFocusGroup.onEntryFocus",v={bubbles:!1,cancelable:!0},g="RovingFocusGroup",[E,h,w]=(0,l.B)(g),[M,b]=(0,c.b)(g,[w]),[_,C]=M(g),y=(0,o.forwardRef)((e,t)=>(0,o.createElement)(E.Provider,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(E.Slot,{scope:e.__scopeRovingFocusGroup},(0,o.createElement)(R,(0,r.Z)({},e,{ref:t}))))),R=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,orientation:l,loop:c=!1,dir:i,currentTabStopId:g,defaultCurrentTabStopId:E,onCurrentTabStopIdChange:w,onEntryFocus:M,...b}=e,C=(0,o.useRef)(null),y=(0,a.e)(t,C),R=(0,p.gm)(i),[D=null,I]=(0,f.T)({prop:g,defaultProp:E,onChange:w}),[k,P]=(0,o.useState)(!1),x=(0,s.W)(M),F=h(n),O=(0,o.useRef)(!1),[S,Z]=(0,o.useState)(0);return(0,o.useEffect)(()=>{let e=C.current;if(e)return e.addEventListener(m,x),()=>e.removeEventListener(m,x)},[x]),(0,o.createElement)(_,{scope:n,orientation:l,dir:R,loop:c,currentTabStopId:D,onItemFocus:(0,o.useCallback)(e=>I(e),[I]),onItemShiftTab:(0,o.useCallback)(()=>P(!0),[]),onFocusableItemAdd:(0,o.useCallback)(()=>Z(e=>e+1),[]),onFocusableItemRemove:(0,o.useCallback)(()=>Z(e=>e-1),[])},(0,o.createElement)(d.WV.div,(0,r.Z)({tabIndex:k||0===S?-1:0,"data-orientation":l},b,{ref:y,style:{outline:"none",...e.style},onMouseDown:(0,u.M)(e.onMouseDown,()=>{O.current=!0}),onFocus:(0,u.M)(e.onFocus,e=>{let t=!O.current;if(e.target===e.currentTarget&&t&&!k){let t=new CustomEvent(m,v);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=F().filter(e=>e.focusable),t=e.find(e=>e.active),n=e.find(e=>e.id===D),r=[t,n,...e].filter(Boolean),o=r.map(e=>e.ref.current);T(o)}}O.current=!1}),onBlur:(0,u.M)(e.onBlur,()=>P(!1))})))}),D=(0,o.forwardRef)((e,t)=>{let{__scopeRovingFocusGroup:n,focusable:l=!0,active:a=!1,tabStopId:c,...s}=e,f=(0,i.M)(),p=c||f,m=C("RovingFocusGroupItem",n),v=m.currentTabStopId===p,g=h(n),{onFocusableItemAdd:w,onFocusableItemRemove:M}=m;return(0,o.useEffect)(()=>{if(l)return w(),()=>M()},[l,w,M]),(0,o.createElement)(E.ItemSlot,{scope:n,id:p,focusable:l,active:a},(0,o.createElement)(d.WV.span,(0,r.Z)({tabIndex:v?0:-1,"data-orientation":m.orientation},s,{ref:t,onMouseDown:(0,u.M)(e.onMouseDown,e=>{l?m.onItemFocus(p):e.preventDefault()}),onFocus:(0,u.M)(e.onFocus,()=>m.onItemFocus(p)),onKeyDown:(0,u.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){m.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,n){var r;let o=(r=e.key,"rtl"!==n?r:"ArrowLeft"===r?"ArrowRight":"ArrowRight"===r?"ArrowLeft":r);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return I[o]}(e,m.orientation,m.dir);if(void 0!==t){e.preventDefault();let o=g().filter(e=>e.focusable),u=o.map(e=>e.ref.current);if("last"===t)u.reverse();else if("prev"===t||"next"===t){var n,r;"prev"===t&&u.reverse();let o=u.indexOf(e.currentTarget);u=m.loop?(n=u,r=o+1,n.map((e,t)=>n[(r+t)%n.length])):u.slice(o+1)}setTimeout(()=>T(u))}})})))}),I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function T(e){let t=document.activeElement;for(let n of e)if(n===t||(n.focus(),document.activeElement!==t))return}let k=y,P=D}}]);