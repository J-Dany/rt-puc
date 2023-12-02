import{j as n,P as R,a as x}from"./utils-0ba5a50e.js";import{r as w}from"./index-76fb7be0.js";import"./index-d3ea75b5.js";import"./_commonjsHelpers-de833af9.js";const t=w.forwardRef(function(a,i){const{children:h,open:b,onEntered:s,onExited:d,onCloseRequested:y,onEntering:S,style:l,containerProps:C,container:T}=a;return n.jsx(R,{ref:i,open:b,container:T,onCloseRequested:y,onEntering:S,style:c=>l?l(c):x(c),onEntered:()=>{document.body.style.overflow="hidden",s&&s()},onExited:()=>{d&&d(),document.body.style.overflow=""},...C,children:h})});try{t.displayName="Modal",t.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:null,description:"",name:"open",required:!0,type:{name:"boolean"}},onEntered:{defaultValue:null,description:"",name:"onEntered",required:!1,type:{name:"(() => void)"}},onExited:{defaultValue:null,description:"",name:"onExited",required:!1,type:{name:"(() => void)"}},onCloseRequested:{defaultValue:null,description:"",name:"onCloseRequested",required:!1,type:{name:"(() => void)"}},onEntering:{defaultValue:null,description:"",name:"onEntering",required:!1,type:{name:"(() => void)"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"((status: STATUS_TYPE) => Partial<CSSProperties>)"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"ContainerProps"}},container:{defaultValue:null,description:"",name:"container",required:!1,type:{name:"HTMLElement"}}}}}catch{}const _={component:t,args:{open:!1}},o={parameters:{controls:{exclude:["onEntering","onEntered","onCloseRequested","onExited","container","containerProps","style"]}},render:e=>n.jsx(t,{open:e.open,children:n.jsx("p",{children:"Modal Content"})})},r={name:"Custom container style",argTypes:{children:{defaultValue:"Default",options:["Default","Unfolding children","Meep Meep children"],control:{type:"select"},mapping:{Default:n.jsx("p",{children:"Modal Content"}),"Meep Meep children":(e,a)=>n.jsx("div",{id:"testIdDiv",onAnimationEnd:i=>{i.currentTarget.id==="testIdDiv"&&a()},style:{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, .0)",animation:e!=="CLOSE_REQUESTED"?"fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards":"fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"},children:n.jsx("div",{style:{padding:"16px",backgroundColor:"white",transform:"translateX(-1500px)",animation:e!=="CLOSE_REQUESTED"?"roadRunnerIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards":"roadRunnerOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"},children:"Modal Content"})}),"Unfolding children":e=>n.jsx("div",{style:{padding:"16px",backgroundColor:"white",transform:e!=="CLOSE_REQUESTED"?"scale(0)":"scale(1)",animation:e!=="CLOSE_REQUESTED"?"zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards":"zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"},children:"Modal Content"})}},style:{defaultValue:"Red background",options:["Red background","Unfolding","Meep Meep"],control:{type:"select"},mapping:{Unfolding:e=>({position:"fixed",top:0,right:0,left:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 0.6)",transform:e!=="CLOSE_REQUESTED"?"scaleY(.01) scaleX(0)":"scale(1)",animation:e!=="CLOSE_REQUESTED"?"unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards":"unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"}),"Meep Meep":e=>({transform:e!=="CLOSE_REQUESTED"?"scale(1)":"",position:"fixed",top:0,right:0,left:0,bottom:0,width:"100vw",height:"100vh",animation:e!=="CLOSE_REQUESTED"?"unset":"quickScaleDown 0s .5s linear forwards"}),"Red background":e=>({position:"fixed",top:0,right:0,left:0,bottom:0,width:"100vw",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 200ms ease-in",zIndex:999,backgroundColor:"rgba(255, 0, 0, 0.6)",pointerEvents:e==="MOUNTED"?"none":e==="ENTERING"||e==="ENTERED"?"all":"none",opacity:e==="MOUNTED"?0:e==="ENTERING"||e==="ENTERED"?1:0})}}},parameters:{controls:{exclude:["onEntering","onEntered","onCloseRequested","onExited","container","containerProps"]}},render:e=>n.jsx(t,{open:e.open,style:e.style,children:e.children})};var u,p,E;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    controls: {
      exclude: ["onEntering", "onEntered", "onCloseRequested", "onExited", "container", "containerProps", "style"]
    }
  },
  render: args => {
    return <Modal open={args.open}>
        <p>Modal Content</p>
      </Modal>;
  }
}`,...(E=(p=o.parameters)==null?void 0:p.docs)==null?void 0:E.source}}};var f,m,g;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: "Custom container style",
  argTypes: {
    children: {
      defaultValue: "Default",
      options: ["Default", "Unfolding children", "Meep Meep children"],
      control: {
        type: "select"
      },
      mapping: {
        Default: <p>Modal Content</p>,
        "Meep Meep children": (status: STATUS_TYPE, onEnd: () => void): React.ReactNode => {
          return <div id="testIdDiv" onAnimationEnd={(event: React.AnimationEvent<HTMLDivElement>) => {
            if (event.currentTarget.id === "testIdDiv") {
              onEnd();
            }
          }} style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, .0)",
            animation: status !== "CLOSE_REQUESTED" ? "fadeIn .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards" : "fadeOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
          }}>
              <div style={{
              padding: "16px",
              backgroundColor: "white",
              transform: "translateX(-1500px)",
              animation: status !== "CLOSE_REQUESTED" ? "roadRunnerIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards" : "roadRunnerOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
            }}>
                Modal Content
              </div>
            </div>;
        },
        "Unfolding children": (status: STATUS_TYPE): React.ReactNode => {
          return <div style={{
            padding: "16px",
            backgroundColor: "white",
            transform: status !== "CLOSE_REQUESTED" ? "scale(0)" : "scale(1)",
            animation: status !== "CLOSE_REQUESTED" ? "zoomIn .5s .8s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards" : "zoomOut .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
          }}>
              Modal Content
            </div>;
        }
      }
    },
    style: {
      defaultValue: "Red background",
      options: ["Red background", "Unfolding", "Meep Meep"],
      control: {
        type: "select"
      },
      mapping: {
        Unfolding: (status: STATUS_TYPE): React.CSSProperties => ({
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          transform: status !== "CLOSE_REQUESTED" ? "scaleY(.01) scaleX(0)" : "scale(1)",
          animation: status !== "CLOSE_REQUESTED" ? "unfoldIn 1s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards" : "unfoldOut 1s .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards"
        }),
        "Meep Meep": (status: STATUS_TYPE): React.CSSProperties => ({
          transform: status !== "CLOSE_REQUESTED" ? "scale(1)" : "",
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          animation: status !== "CLOSE_REQUESTED" ? "unset" : "quickScaleDown 0s .5s linear forwards"
        }),
        "Red background": (status: STATUS_TYPE): React.CSSProperties => ({
          position: "fixed",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 200ms ease-in",
          zIndex: 999,
          backgroundColor: "rgba(255, 0, 0, 0.6)",
          pointerEvents: status === "MOUNTED" ? "none" : status === "ENTERING" || status === "ENTERED" ? "all" : "none",
          opacity: status === "MOUNTED" ? 0 : status === "ENTERING" || status === "ENTERED" ? 1 : 0
        })
      }
    }
  },
  parameters: {
    controls: {
      exclude: ["onEntering", "onEntered", "onCloseRequested", "onExited", "container", "containerProps"]
    }
  },
  render: args => {
    return <Modal open={args.open} style={args.style}>
        {args.children}
      </Modal>;
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const O=["Default","WithCustomStyle"];export{o as Default,r as WithCustomStyle,O as __namedExportsOrder,_ as default};
