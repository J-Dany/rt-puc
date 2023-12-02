import{j as t,P as D,m as S}from"./utils-0ba5a50e.js";import{r as m}from"./index-76fb7be0.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";const o=m.forwardRef(function(i,n){const{children:C,open:_,toggleOpen:l,onEntered:p,onExited:c,onCloseRequested:R,onEntering:h,style:u,containerProps:O,container:q,timeout:P=3e3}=i,s=m.useRef(null);return t.jsx(D,{ref:n,open:_,container:q,onEntering:h,onCloseRequested:R,style:d=>u?u(d):S(d),onEntered:()=>{s.current=setTimeout(()=>{l()},P),p&&p()},onExited:()=>{s.current&&clearTimeout(s.current),c&&c(),setTimeout(()=>{l()},0)},...O,children:C})});try{o.displayName="Notification",o.__docgenInfo={description:"",displayName:"Notification",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},toggleOpen:{defaultValue:null,description:"",name:"toggleOpen",required:!0,type:{name:"() => void"}},onEntered:{defaultValue:null,description:"",name:"onEntered",required:!1,type:{name:"(() => void)"}},onExited:{defaultValue:null,description:"",name:"onExited",required:!1,type:{name:"(() => void)"}},onCloseRequested:{defaultValue:null,description:"",name:"onCloseRequested",required:!1,type:{name:"(() => void)"}},onEntering:{defaultValue:null,description:"",name:"onEntering",required:!1,type:{name:"(() => void)"}},timeout:{defaultValue:null,description:"",name:"timeout",required:!1,type:{name:"number"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"((status: STATUS_TYPE) => Partial<CSSProperties>)"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"ContainerProps"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"HTMLElement"}}}}}catch{}const{useArgs:T}=__STORYBOOK_MODULE_PREVIEW_API__,j={component:o,args:{open:!1,timeout:3e3},argTypes:{timeout:{description:"Automatically close after this timeout (in milliseconds)"}}},r={parameters:{controls:{exclude:["onEntering","onEntered","onCloseRequested","onExited","container","containerProps","style","toggleOpen"]}},render:e=>{const[i,n]=T();return t.jsx(o,{timeout:e.timeout,open:e.open,toggleOpen:()=>n({open:!1}),children:t.jsx("p",{children:"Notification content"})})}},a={name:"Custom container style",parameters:{controls:{exclude:["onEntering","onEntered","onCloseRequested","onExited","container","containerProps","toggleOpen"]}},argTypes:{children:{options:["Default"],control:{type:"select"},mapping:{Default:t.jsx("p",{style:{margin:0},children:"Notification content"})}},style:{options:["Custom"],control:{type:"select"},mapping:{Custom:e=>({position:"fixed",top:"10px",right:"10px",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"white",padding:"16px",transition:"all 200ms ease-in",zIndex:999,boxShadow:"0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",pointerEvents:e==="MOUNTED"?"none":e==="ENTERING"||e==="ENTERED"?"all":"none",transform:e==="MOUNTED"?"translateX(calc(100% + 10px))":e==="ENTERING"||e==="ENTERED"?"translateX(0%)":"translateX(calc(100% + 10px))"})}}},render:e=>{const[i,n]=T();return t.jsx(o,{open:e.open,timeout:e.timeout,style:e.style,toggleOpen:()=>n({open:!1}),children:e.children})}};var g,f,E;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["onEntering", "onEntered", "onCloseRequested", "onExited", "container", "containerProps", "style", "toggleOpen"]
    }
  },
  render: args => {
    const [_, updateArgs] = useArgs();
    return <Notification timeout={args.timeout} open={args.open} toggleOpen={() => updateArgs({
      open: false
    })}>
        <p>Notification content</p>
      </Notification>;
  }
}`,...(E=(f=r.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var x,y,N;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Custom container style",
  parameters: {
    controls: {
      exclude: ["onEntering", "onEntered", "onCloseRequested", "onExited", "container", "containerProps", "toggleOpen"]
    }
  },
  argTypes: {
    children: {
      options: ["Default"],
      control: {
        type: "select"
      },
      mapping: {
        Default: <p style={{
          margin: 0
        }}>Notification content</p>
      }
    },
    style: {
      options: ["Custom"],
      control: {
        type: "select"
      },
      mapping: {
        Custom: (status: STATUS_TYPE): React.CSSProperties => ({
          position: "fixed",
          top: "10px",
          right: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: "16px",
          transition: "all 200ms ease-in",
          zIndex: 999,
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)",
          pointerEvents: status === "MOUNTED" ? "none" : status === "ENTERING" || status === "ENTERED" ? "all" : "none",
          transform: status === "MOUNTED" ? "translateX(calc(100% + 10px))" : status === "ENTERING" || status === "ENTERED" ? "translateX(0%)" : "translateX(calc(100% + 10px))"
        })
      }
    }
  },
  render: args => {
    const [_, updateArgs] = useArgs();
    return <Notification open={args.open} timeout={args.timeout} style={args.style} toggleOpen={() => updateArgs({
      open: false
    })}>
        {args.children}
      </Notification>;
  }
}`,...(N=(y=a.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};const v=["Default","WithCustomStyle"];export{r as Default,a as WithCustomStyle,v as __namedExportsOrder,j as default};
