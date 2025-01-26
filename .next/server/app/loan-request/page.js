(()=>{var e={};e.id=701,e.ids=[701],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},710:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>u,routeModule:()=>c,tree:()=>d});var a=t(260),n=t(8203),s=t(5155),o=t.n(s),l=t(7292),i={};for(let e in l)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>l[e]);t.d(r,i);let d=["",{children:["loan-request",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,9638)),"D:\\USMAN\\sir shahzad\\Saylani-it-2025\\src\\app\\loan-request\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,1354)),"D:\\USMAN\\sir shahzad\\Saylani-it-2025\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(t.t.bind(t,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(t.t.bind(t,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["D:\\USMAN\\sir shahzad\\Saylani-it-2025\\src\\app\\loan-request\\page.tsx"],p={require:t,loadChunk:()=>Promise.resolve()},c=new a.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/loan-request/page",pathname:"/loan-request",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},98:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,3219,23)),Promise.resolve().then(t.t.bind(t,4863,23)),Promise.resolve().then(t.t.bind(t,5155,23)),Promise.resolve().then(t.t.bind(t,802,23)),Promise.resolve().then(t.t.bind(t,9350,23)),Promise.resolve().then(t.t.bind(t,8530,23)),Promise.resolve().then(t.t.bind(t,8921,23))},8250:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,6959,23)),Promise.resolve().then(t.t.bind(t,3875,23)),Promise.resolve().then(t.t.bind(t,8903,23)),Promise.resolve().then(t.t.bind(t,7174,23)),Promise.resolve().then(t.t.bind(t,4178,23)),Promise.resolve().then(t.t.bind(t,7190,23)),Promise.resolve().then(t.t.bind(t,1365,23))},7222:()=>{},2494:()=>{},7205:(e,r,t)=>{Promise.resolve().then(t.bind(t,7606))},7477:(e,r,t)=>{Promise.resolve().then(t.bind(t,2426))},2426:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});var a=t(5512),n=t(8009);let s=()=>{let[e,r]=(0,n.useState)({name:"",email:"",phone:"",cnic:"",address:"",loanAmount:"",loanCategory:"",guarantors:[{name:"",email:"",cnic:"",location:""},{name:"",email:"",cnic:"",location:""}]}),t=e=>{let{name:t,value:a}=e.target;r(e=>({...e,[t]:a}))},s=(t,a)=>{let{name:n,value:s}=a.target,o=[...e.guarantors];o[t][n]=s,r(e=>({...e,guarantors:o}))};return(0,a.jsx)("section",{className:"py-12",children:(0,a.jsxs)("div",{className:"container mx-auto text-center",children:[(0,a.jsx)("h2",{className:"text-2xl font-semibold mb-6",children:"Loan Request Form"}),(0,a.jsxs)("form",{onSubmit:r=>{r.preventDefault(),console.log("Loan Request Submitted:",e)},className:"space-y-4",children:[(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",name:"name",value:e.name,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Full Name",required:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"email",name:"email",value:e.email,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Email",required:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",name:"phone",value:e.phone,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Phone Number",required:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",name:"cnic",value:e.cnic,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"CNIC",required:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",name:"address",value:e.address,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Address",required:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"number",name:"loanAmount",value:e.loanAmount,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Loan Amount",required:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("input",{type:"text",name:"loanCategory",value:e.loanCategory,onChange:t,className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Loan Category",required:!0})}),e.guarantors.map((e,r)=>(0,a.jsxs)("div",{className:"border-t pt-4",children:[(0,a.jsxs)("h3",{className:"text-lg font-semibold",children:["Guarantor ",r+1]}),(0,a.jsx)("input",{type:"text",name:"name",value:e.name,onChange:e=>s(r,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor Name",required:!0}),(0,a.jsx)("input",{type:"email",name:"email",value:e.email,onChange:e=>s(r,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor Email",required:!0}),(0,a.jsx)("input",{type:"text",name:"cnic",value:e.cnic,onChange:e=>s(r,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor CNIC",required:!0}),(0,a.jsx)("input",{type:"text",name:"location",value:e.location,onChange:e=>s(r,e),className:"p-2 border border-gray-300 rounded-lg w-full",placeholder:"Guarantor Location",required:!0})]},r)),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"submit",className:"bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300",children:"Submit Request"})})]})]})})}},1354:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d,metadata:()=>i});var a=t(2740),n=t(2376),s=t.n(n),o=t(8726),l=t.n(o);t(1135);let i={title:"Create Next App",description:"Generated by create next app"};function d({children:e}){return(0,a.jsx)("html",{lang:"en",children:(0,a.jsx)("body",{className:`${s().variable} ${l().variable} antialiased`,children:e})})}},9638:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>s});var a=t(2740),n=t(7606);let s=()=>(0,a.jsx)("div",{children:(0,a.jsx)(n.default,{})})},7606:(e,r,t)=>{"use strict";t.d(r,{default:()=>a});let a=(0,t(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"D:\\\\USMAN\\\\sir shahzad\\\\Saylani-it-2025\\\\src\\\\components\\\\loan-request-form.jsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"D:\\USMAN\\sir shahzad\\Saylani-it-2025\\src\\components\\loan-request-form.jsx","default")},440:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>n});var a=t(8077);let n=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,a.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var r=require("../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[638,779,77],()=>t(710));module.exports=a})();