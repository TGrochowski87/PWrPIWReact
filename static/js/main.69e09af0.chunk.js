(this.webpackJsonppiw=this.webpackJsonppiw||[]).push([[0],{47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(18),s=a.n(r),i=a(9),l=a(8),o=a(19),j=a(55),u=a(52),d=a(30),b=a(29),h=a(54),O=a(56),x=a(2),f=function(e){var t=e.usedTags,a=e.addTag,r=n.a.forwardRef((function(e,t){var a=e.children,c=e.onClick;return Object(x.jsxs)("a",{href:"",ref:t,onClick:function(e){e.preventDefault(),c(e)},children:[a,"\u25bc"]})})),s=n.a.forwardRef((function(e,t){var r=e.children,s=e.style,i=e.className,o=e["aria-labelledby"],j=Object(c.useState)(""),u=Object(l.a)(j,2),h=u[0],O=u[1];return Object(x.jsxs)("div",{ref:t,style:s,className:i,"aria-labelledby":o,children:[Object(x.jsx)(b.a,{autoFocus:!0,className:"mx-3 my-2 w-auto",placeholder:"Pick from list or add new",onChange:function(e){return O(e.target.value)},value:h}),Object(x.jsx)(d.a,{variant:"secondary",onClick:function(){a(h)},children:"Add"}),Object(x.jsx)("ul",{className:"list-unstyled",children:n.a.Children.toArray(r).filter((function(e){return e.props.children.toLowerCase().includes(h)}))})]})}));return Object(x.jsxs)(h.a,{children:[Object(x.jsx)(h.a.Toggle,{as:r,id:"dropdown-custom-components",children:"Add tags"}),Object(x.jsx)(h.a.Menu,{as:s,children:t.map((function(e){return Object(x.jsx)(h.a.Item,{onClick:function(){a(e)},children:e},Object(O.a)())}))})]})},p=function(e){var t=e.addRecord,a=Object(c.useState)(""),n=Object(l.a)(a,2),r=n[0],s=n[1],b=Object(c.useState)(""),h=Object(l.a)(b,2),p=h[0],m=h[1],g=Object(c.useState)(""),v=Object(l.a)(g,2),S=v[0],y=v[1],w=Object(c.useState)([]),C=Object(l.a)(w,2),I=C[0],L=C[1],T=Object(c.useState)(["react","c++","c#"]),N=Object(l.a)(T,2),k=N[0],P=N[1],A=function(e){if(e.preventDefault(),""!==r&&""!==p&&""!==S){var a,c=[],n=Object(o.a)(I);try{for(n.s();!(a=n.n()).done;){var l=a.value;k.includes(l)||c.push(l)}}catch(j){n.e(j)}finally{n.f()}P([].concat(c,Object(i.a)(k))),t({title:r,name:p,description:S,tags:I}),s(""),m(""),y(""),L([])}else alert("Please fill the entire form before posting!")};return Object(x.jsx)("div",{className:"new-entry",children:Object(x.jsxs)(j.a,{onSubmit:function(e){A(e)},children:[Object(x.jsxs)(j.a.Group,{children:[Object(x.jsx)(j.a.Label,{children:"Title"}),Object(x.jsx)(j.a.Control,{type:"text",placeholder:"Title",maxLength:"30",value:r,onChange:function(e){s(e.target.value)}})]}),Object(x.jsxs)(j.a.Group,{children:[Object(x.jsx)(j.a.Label,{children:"Full name"}),Object(x.jsx)(j.a.Control,{type:"text",placeholder:"Full name",maxLength:"30",value:p,onChange:function(e){m(e.target.value)}})]}),Object(x.jsxs)(j.a.Group,{children:[Object(x.jsx)(j.a.Label,{children:"Description"}),Object(x.jsx)(j.a.Control,{as:"textarea",rows:6,maxLength:"300",value:S,onChange:function(e){y(e.target.value)}})]}),Object(x.jsxs)(j.a.Group,{children:[Object(x.jsxs)(j.a.Label,{children:["Tags",Object(x.jsx)("p",{children:"Max. 6"})]}),Object(x.jsx)("div",{className:"tag-space",children:I.map((function(e){return Object(x.jsx)(u.a,{pill:!0,variant:"primary",children:e},Object(O.a)())}))})]}),Object(x.jsx)(f,{usedTags:k,addTag:function(e){if(6!==I.length){if(null!==e&&""!==e){if(I.includes(e))return void alert("Tag already added!");L([e].concat(Object(i.a)(I)))}}else alert("Max amount reached!")}}),Object(x.jsx)("br",{}),Object(x.jsx)(d.a,{variant:"primary",type:"submit",children:"Submit"})]})})},m=a(25),g=a(26),v=function(e){var t=e.data;return Object(x.jsxs)("div",{className:"record",children:[Object(x.jsx)("div",{className:"icon-back",children:Object(x.jsx)(m.a,{icon:g.b,className:"icon"})}),Object(x.jsxs)("div",{className:"record-data",children:[Object(x.jsx)("h3",{children:"".concat(t.title," - ").concat(t.name)}),Object(x.jsx)("p",{children:t.description}),Object(x.jsx)("h6",{children:t.tags.map((function(e){return"#".concat(e," ")}))})]}),Object(x.jsx)(m.a,{icon:g.a,className:"icon"})]})},S=function(e){var t=e.recordList,a=e.tagSearchInput,n=e.titleSearchInput,r=e.setShownAmount,s=Object(c.useState)(Object(i.a)(t)),j=Object(l.a)(s,2),u=j[0],d=j[1];return Object(c.useEffect)((function(){d(t.filter((function(e){if(""===n&&""===a)return e;if(""!==n&&e.title.toLowerCase().includes(n.toLowerCase()))return e;if(""!==a){var t,c=Object(o.a)(e.tags);try{for(c.s();!(t=c.n()).done;){if(t.value.includes(a))return e}}catch(r){c.e(r)}finally{c.f()}}})))}),[a,n,t]),Object(c.useEffect)((function(){r(u.length)}),[u]),Object(x.jsx)("div",{className:"record-list",children:u.map((function(e){return Object(x.jsx)(v,{data:e},Object(O.a)())}))})},y=a(53),w=a(34),C=function(e){var t=e.tagSearchInput,a=e.setTagSearchInput,c=e.titleSearchInput,n=e.setTitleSearchInput,r=e.shownAmount;return Object(x.jsxs)("div",{className:"search-space",children:[Object(x.jsx)("div",{className:"input-space",children:Object(x.jsxs)(j.a,{children:[Object(x.jsxs)(j.a.Group,{as:y.a,controlId:"formPlaintextPassword",children:[Object(x.jsx)(j.a.Label,{column:!0,sm:"4",children:"Search by tags:"}),Object(x.jsx)(w.a,{sm:"7",children:Object(x.jsx)(j.a.Control,{type:"text",placeholder:"Search",value:t,onChange:function(e){n(""),a(e.target.value)}})})]}),Object(x.jsxs)(j.a.Group,{as:y.a,controlId:"formPlaintextPassword",children:[Object(x.jsx)(j.a.Label,{column:!0,sm:"4",children:"Search by title:"}),Object(x.jsx)(w.a,{sm:"7",children:Object(x.jsx)(j.a.Control,{type:"text",placeholder:"Search",value:c,onChange:function(e){a(""),n(e.target.value)}})})]})]})}),Object(x.jsxs)(d.a,{variant:"secondary",children:["Found ",Object(x.jsx)(u.a,{variant:"light",children:r}),Object(x.jsx)("span",{className:"sr-only",children:"unread messages"})]})]})};a(47);var I=function(){var e=Object(c.useState)([{title:"SO2",name:"Tomasz",description:"Please someone help me with SO, I have no idea what im doing...",tags:["help","SO"]},{title:"VHDL",name:"Mark Dark",description:"I'm looking for someone to make VHDL project with",tags:["vhdl","digital","circuits"]},{title:"PIW",name:"Tomasz",description:"How you all guys doin'?",tags:["react","sampletag","hello"]}]),t=Object(l.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),s=Object(l.a)(r,2),o=s[0],j=s[1],u=Object(c.useState)(""),d=Object(l.a)(u,2),b=d[0],h=d[1],O=Object(c.useState)(0),f=Object(l.a)(O,2),m=f[0],g=f[1];return Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(C,{tagSearchInput:o,setTagSearchInput:j,titleSearchInput:b,setTitleSearchInput:h,shownAmount:m}),Object(x.jsx)(p,{addRecord:function(e){n([e].concat(Object(i.a)(a)))}}),Object(x.jsx)(S,{recordList:a,tagSearchInput:o,titleSearchInput:b,setShownAmount:g})]})},L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,57)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(I,{})}),document.getElementById("root")),L()}},[[48,1,2]]]);
//# sourceMappingURL=main.69e09af0.chunk.js.map