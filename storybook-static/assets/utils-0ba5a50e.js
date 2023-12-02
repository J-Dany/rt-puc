import{r as l}from"./index-76fb7be0.js";import{r as O}from"./index-d3ea75b5.js";var N={exports:{}},f={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v=l,x=Symbol.for("react.element"),D=Symbol.for("react.fragment"),S=Object.prototype.hasOwnProperty,w=v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,k={key:!0,ref:!0,__self:!0,__source:!0};function g(e,o,s){var t,r={},c=null,d=null;s!==void 0&&(c=""+s),o.key!==void 0&&(c=""+o.key),o.ref!==void 0&&(d=o.ref);for(t in o)S.call(o,t)&&!k.hasOwnProperty(t)&&(r[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps,o)r[t]===void 0&&(r[t]=o[t]);return{$$typeof:x,type:e,key:c,ref:d,props:r,_owner:w.current}}f.Fragment=D;f.jsx=g;f.jsxs=g;N.exports=f;var M=N.exports;const y=l.forwardRef(function(o,s){const{children:t,open:r,style:c,onEntered:d,onExited:h,onCloseRequested:E,onEntering:m,container:T=typeof window<"u"?window.document.body:void 0,...b}=o,C=l.useRef(null),[i,p]=l.useState(r?"MOUNTED":"NOT_MOUNT"),n=l.useMemo(()=>s&&typeof s!="function"?s:C,[s]),u=l.useCallback(()=>{r&&i==="ENTERING"?(p("ENTERED"),d&&d()):!r&&i==="CLOSE_REQUESTED"&&((()=>{var a;return(a=n==null?void 0:n.current)==null?void 0:a.scrollTop})(),p("NOT_MOUNT"),setTimeout(()=>{h&&h()},0))},[r,i,d,h]),R=l.useCallback(a=>{a.target===n.current&&u()},[u,n]),_=l.useCallback(a=>{a.target===n.current&&u()},[u,n]);return l.useEffect(()=>{i==="NOT_MOUNT"&&r?p("MOUNTED"):i==="MOUNTED"?((()=>{var a;return(a=n==null?void 0:n.current)==null?void 0:a.scrollTop})(),p("ENTERING"),m&&m()):!r&&i==="ENTERED"&&((()=>{var a;return(a=n==null?void 0:n.current)==null?void 0:a.scrollTop})(),p("CLOSE_REQUESTED"),E&&E())},[r,i,E,m]),!T||i==="NOT_MOUNT"?null:O.createPortal(M.jsx("div",{ref:n,style:c(i),onAnimationEnd:_,onTransitionEnd:R,...b,children:typeof t=="function"?t(i,u):t}),T)});try{y.displayName="PortalComponent",y.__docgenInfo={description:`\`PortalComponent\`: A React component for rendering children into a DOM node that exists outside the DOM hierarchy of the parent component.
This component is particularly useful for creating modals, dialogs, or any floating elements that should be rendered into a specific part of the DOM, 
independent of the parent component's hierarchy.

Props:
- \`children\`: React.ReactNode | ChildrenAsFunction - The content to be rendered inside the portal. It can be a React node or a function that returns a React node.
- \`style\`: (status: STATUS_TYPE) => React.CSSProperties - A function that receives the component's current status and returns CSS properties to apply to the portal.
- \`open\`: boolean - A flag indicating whether the portal content should be mounted and visible.
- \`container\`: HTMLElement (optional) - The DOM element in which the portal content will be rendered. Defaults to document.body.
- \`onEntered\`: () => void (optional) - Callback fired when the portal content has finished entering.
- \`onEntering\`: () => void (optional) - Callback fired when the portal content starts entering.
- \`onExited\`: () => void (optional) - Callback fired when the portal content has finished exiting.
- \`onCloseRequested\`: () => void (optional) - Callback fired when a close of the portal content is requested.

Component Lifecycle:
- The component uses the \`open\` prop to manage its lifecycle, transitioning through various statuses ('MOUNTED', 'ENTERING', etc; see STATUS_TYPES).
- It handles the mounting and unmounting of the portal content based on the \`open\` prop.
- Animation and transition events are used to trigger callbacks and update the component's status.

Usage:
<PortalComponent
  open={isOpen}
  onEntered={() => console.log('Entered')}
  style={(status) => ({ opacity: status === 'ENTERED' ? 1 : 0 })}
>
  <p>Portal Content</p>
</PortalComponent>

Note: This component uses \`forwardRef\` to optionally accept a ref from its parent, allowing for more flexible integration in various use cases.`,displayName:"PortalComponent",props:{children:{defaultValue:null,description:"The content to be rendered inside the portal. It can be a React node or a function that returns a React node.",name:"children",required:!0,type:{name:"ReactNode | ChildrenAsFunction"}},style:{defaultValue:null,description:`A function that receives the component's current status and returns CSS properties to apply to the portal.
@param status`,name:"style",required:!0,type:{name:"(status: STATUS_TYPE) => CSSProperties"}},open:{defaultValue:null,description:"A flag indicating whether the portal content should be mounted and visible.",name:"open",required:!0,type:{name:"boolean"}},container:{defaultValue:null,description:"The DOM element in which the portal content will be rendered. Defaults to document.body.",name:"container",required:!1,type:{name:"HTMLElement"}},onEntered:{defaultValue:null,description:"Callback fired when the portal content has finished entering.",name:"onEntered",required:!1,type:{name:"(() => void)"}},onEntering:{defaultValue:null,description:"Callback fired when the portal content starts entering.",name:"onEntering",required:!1,type:{name:"(() => void)"}},onExited:{defaultValue:null,description:"Callback fired when the portal content has finished exiting.",name:"onExited",required:!1,type:{name:"(() => void)"}},onCloseRequested:{defaultValue:null,description:"Callback fired when a close of the portal content is requested.",name:"onCloseRequested",required:!1,type:{name:"(() => void)"}}}}}catch{}function I(e){return{position:"fixed",top:0,right:0,left:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 200ms ease-in",zIndex:999,backgroundColor:"rgba(0, 0, 0, 0.6)",pointerEvents:e==="MOUNTED"?"none":e==="ENTERING"||e==="ENTERED"?"all":"none",opacity:e==="MOUNTED"?0:e==="ENTERING"||e==="ENTERED"?1:0}}function q(e){return{position:"fixed",top:"10px",right:"10px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"red",transition:"all 200ms ease-in",zIndex:999,pointerEvents:e==="MOUNTED"?"none":e==="ENTERING"||e==="ENTERED"?"all":"none",transform:e==="MOUNTED"?"translateX(calc(100% + 10px))":e==="ENTERING"||e==="ENTERED"?"translateX(0%)":"translateX(calc(100% + 10px))"}}export{y as P,I as a,M as j,q as m};
