(this["webpackJsonpapp-shop"]=this["webpackJsonpapp-shop"]||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),i=n.n(a),r=n(10),s=n.n(r),o=(n(96),n(12)),l=n(40),j=n(159),d=n(161),u=n(172),b=n(156),h=n(23),p=n(79),m=n.n(p),O=n(162),x=n(11),g=n(16),f=i.a.createContext();function v(){var e=Object(a.useContext)(f),t=e.currentUser,n=e.setCurrentUser;return{isLoggedIn:!!t.token,token:t.token,saveToken:function(e){localStorage.setItem("token",e),n({token:e})},removeToken:function(e){localStorage.removeItem("token",e),n("")}}}var S=Object(b.a)((function(e){return{root:{flexGrow:1,marginBottom:50},menuButton:{marginRight:e.spacing(2)},title:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(h.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(h.b)(e.palette.common.white,.25)},marginLeft:"auto",marginRight:10,width:"100%"},e.breakpoints.up("sm"),{marginLeft:"auto",width:"auto"}),menu:{display:"flex",alignItems:"center",listStyle:"none",padding:0,"& li":{margin:"0 10px","& a":{color:"#fff",textDecoration:"none"}}},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));function N(){var e=S(),t=Object(a.useState)(),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(x.f)(),l=v(),b=l.isLoggedIn;l.saveToken;return Object(c.jsx)("div",{className:e.root,children:Object(c.jsx)(j.a,{position:"static",children:Object(c.jsxs)(d.a,{children:[Object(c.jsxs)("ul",{className:e.menu,children:[Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)(g.b,{to:"/shop",children:"Shop"})})]}),Object(c.jsxs)("div",{className:e.search,children:[Object(c.jsx)("div",{className:e.searchIcon,children:Object(c.jsx)(m.a,{})}),Object(c.jsx)("form",{onSubmit:function(e){var t=document.getElementById("searchInput");s.push("/search/"+i+"/1"),t.value="",e.preventDefault()},children:Object(c.jsx)(u.a,{onChange:function(e){r(e.target.value)},placeholder:"Search\u2026",id:"searchInput",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})})]}),b?Object(c.jsx)(O.a,{variant:"contained",component:g.b,to:"profile",children:"Profile"}):Object(c.jsx)(O.a,{variant:"contained",component:g.b,to:"signin",children:"Sign In"})]})})})}var y=n(53),k=n(19),w=n.n(k),I=n(169),C=n(163),B=n(164),_=n(168),L=n(166),F=n(165),R=n(167),T=Object(b.a)({root:{maxWidth:345,height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",border:"1px solid #c7c7c7"},topsec:{height:"100%"}});function E(e){var t=T();return Object(c.jsxs)(C.a,{className:t.root,children:[Object(c.jsxs)(B.a,{className:t.topsec,children:[Object(c.jsx)(F.a,{component:"img",alt:"Contemplative Reptile",height:"300",image:e.img,title:e.title}),Object(c.jsxs)(L.a,{children:[Object(c.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.title}),Object(c.jsxs)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:["Price: $",e.price]})]})]}),Object(c.jsx)(_.a,{children:Object(c.jsx)(O.a,{size:"small",variant:"outlined",color:"primary",component:g.b,to:"/item/".concat(e.id),children:"Learn More"})})]})}var P=n(173),D=n(171),W=Object(b.a)((function(e){return{item:{height:"100%"},root:{margin:40,display:"flex",justifyContent:"center","& > *":{marginTop:e.spacing(2)}}}}));function M(){var e=Object(x.g)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1],u=W(),b=e.page||1,h=e.item;b=parseInt(b);var p=Math.ceil(j/8);return Object(a.useEffect)((function(){w.a.get("https://us-central1-js04-b4877.cloudfunctions.net/api/products?_page=".concat(b,"&_limit=").concat(8,"&q=").concat(h)).then((function(e){r(e.data),d(e.headers["x-total-count"])})).catch((function(e){console.log(e)}))}),[b,h]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h1",{children:["Search results for: ",h]}),Object(c.jsx)(I.a,{container:!0,spacing:3,children:i.map((function(e,t){return Object(c.jsx)(I.a,{item:!0,xs:12,sm:4,md:3,children:Object(c.jsx)(E,{className:u.item,id:e.id,title:e.title,img:e.image,price:e.price},e.id)},e.id)}))}),Object(c.jsx)("div",{className:u.root,children:Object(c.jsx)(P.a,{page:b,count:p,renderItem:function(e){return Object(c.jsx)(D.a,Object(y.a)({component:g.b,to:"/search/".concat(h,"/").concat(1===e.page?"":"".concat(e.page))},e))}})})]})}var U=Object(b.a)((function(e){return{item:{height:"100%"},root:{margin:40,display:"flex",justifyContent:"center","& > *":{marginTop:e.spacing(2)}}}}));function z(){var e=Object(x.g)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1],u=U(),b=e.page||1;b=parseInt(b);var h=Math.ceil(j/8);return Object(a.useEffect)((function(){w.a.get("https://us-central1-js04-b4877.cloudfunctions.net/api/products?_page=".concat(b,"&_limit=").concat(8)).then((function(e){r(e.data),d(e.headers["x-total-count"])})).catch((function(e){console.log(e)}))}),[b]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(I.a,{container:!0,spacing:3,children:i.map((function(e,t){return Object(c.jsx)(I.a,{item:!0,xs:12,sm:4,md:3,children:Object(c.jsx)(E,{className:u.item,id:e.id,title:e.title,img:e.image,price:e.price},e.id)},e.id)}))}),Object(c.jsx)("div",{className:u.root,children:Object(c.jsx)(P.a,{page:b,count:h,renderItem:function(e){return Object(c.jsx)(D.a,Object(y.a)({component:g.b,to:"/shop".concat(1===e.page?"":"/".concat(e.page))},e))}})})]})}var A=Object(b.a)((function(e){return{item:{height:"100%"}}}));function G(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],i=t[1],r=A();return Object(a.useEffect)((function(){w.a.get("https://us-central1-js04-b4877.cloudfunctions.net/api/products?_sort=id&_order=desc&_limit=10").then((function(e){i(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(c.jsx)(I.a,{container:!0,spacing:3,children:n.map((function(e,t){return Object(c.jsx)(I.a,{item:!0,xs:12,sm:4,md:3,children:Object(c.jsx)(E,{className:r.item,id:e.id,title:e.title,img:e.image,price:e.price},e.id)},e.id)}))})}var J=n(81),$=Object(b.a)((function(e){return{root:{flexGrow:1,margin:"15px 0"},paper:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},media:{maxWidth:"100%",width:"100%"}}}));function q(){var e=Object(x.g)(),t=Object(a.useState)([]),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)([]),l=Object(o.a)(s,2),j=l[0],d=l[1],u=$(),b=e.itemId||1,h="";return Object(a.useEffect)((function(){w.a.get("https://us-central1-js04-b4877.cloudfunctions.net/api/products/".concat(b)).then((function(e){r(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){w.a.get("https://us-central1-js04-b4877.cloudfunctions.net/api/products/".concat(b,"/reviews")).then((function(e){d(e.data)})).catch((function(e){console.log(e)}))}),[]),j.length>1&&(h="Reviews:"),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:u.root,children:Object(c.jsxs)(I.a,{container:!0,spacing:3,children:[Object(c.jsx)(I.a,{item:!0,xs:12,sm:5,children:Object(c.jsx)(J.a,{elevation:3,className:u.paper,children:Object(c.jsx)("img",{className:u.media,src:i.image,title:i.title,alt:i.title})})}),Object(c.jsx)(I.a,{item:!0,xs:12,sm:7,children:Object(c.jsxs)(J.a,{elevation:3,className:u.paper,children:[Object(c.jsx)(R.a,{variant:"h6",component:"h1",gutterBottom:!0,children:i.title}),Object(c.jsxs)(R.a,{variant:"overline",display:"block",gutterBottom:!0,children:["Seller: ",i.seller]}),Object(c.jsxs)(R.a,{variant:"button",display:"block",gutterBottom:!0,children:["Price: $",i.price]}),Object(c.jsx)(R.a,{variant:"body1",gutterBottom:!0,children:i.description})]})})]})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(R.a,{variant:"h6",component:"h3",gutterBottom:!0,children:h}),j.map((function(e,t){return Object(c.jsx)(C.a,{className:u.root,children:Object(c.jsx)(L.a,{children:Object(c.jsx)(R.a,{className:u.title,color:"textSecondary",gutterBottom:!0,children:e.body})})},e.id)}))]})]})}var H=n(170),Y=Object(b.a)((function(e){return{root:{"& .MuiTextField-root":{marginBottom:15,width:"100%"}},wrap:{maxWidth:350,margin:"15px auto",display:"flex",flexDirection:"column"},submit:{height:56,border:0,borderRadius:4,backgroundColor:"#3f51b5",fontSize:"0.875rem",color:"#fff",cursor:"pointer"}}}));function K(){var e=Y(),t=Object(a.useState)(""),n=Object(o.a)(t,2),i=n[0],r=n[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),j=l[0],d=l[1],u=Object(x.f)(),b=v().saveToken;return Object(c.jsx)("form",{className:e.root,autoComplete:"off",onSubmit:function(e){e.preventDefault(),w.a.post("https://us-central1-js04-b4877.cloudfunctions.net/api/login",{username:i,password:j}).then((function(e){var t=e.data.access_token;b(t),u.push("/")})).catch((function(){alert("Wrong username or password")}))},children:Object(c.jsxs)("div",{className:e.wrap,children:[Object(c.jsx)(H.a,{id:"userName",label:"Username",variant:"outlined",onChange:function(e){return r(e.target.value)}}),Object(c.jsx)(H.a,{id:"password",label:"Password",type:"password",variant:"outlined",onChange:function(e){return d(e.target.value)}}),Object(c.jsx)("input",{type:"submit",value:"Sign In",className:e.submit})]})})}var Q=Object(b.a)({root:{maxWidth:500,margin:"50px auto"},media:{height:400},list:{display:"flex",alignItems:"center","& h4":{marginRight:5}},logout:{marginLeft:"auto"}});function V(){var e=Q(),t=v(),n=t.token,i=t.removeToken,r=Object(a.useState)(),s=Object(o.a)(r,2),l=s[0],j=s[1],d=Object(x.f)(),u={headers:{Authorization:"Bearer ".concat(n)}};function b(){i(),d.push("/")}return Object(a.useEffect)((function(){w.a.get("https://us-central1-js04-b4877.cloudfunctions.net/api/profile",u).then((function(e){j(e.data.data)})).catch((function(){alert("You are not Signed in")}))}),[n]),Object(c.jsx)(c.Fragment,{children:l?Object(c.jsxs)(C.a,{className:e.root,children:[Object(c.jsxs)(B.a,{children:[Object(c.jsx)(F.a,{className:e.media,image:l.profile_picture,title:l.first_name}),Object(c.jsxs)(L.a,{children:[Object(c.jsxs)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:[l.username,"'s profile"]}),Object(c.jsxs)("div",{className:e.list,children:[Object(c.jsx)("h4",{children:"First name: "})," ",Object(c.jsx)("p",{children:l.first_name})]}),Object(c.jsxs)("div",{className:e.list,children:[Object(c.jsx)("h4",{children:"Last name: "})," ",Object(c.jsx)("p",{children:l.last_name})]}),Object(c.jsxs)("div",{className:e.list,children:[Object(c.jsx)("h4",{children:"Age: "})," ",Object(c.jsx)("p",{children:l.age})]})]})]}),Object(c.jsx)(_.a,{children:Object(c.jsx)(O.a,{size:"small",className:e.logout,color:"secondary",onClick:b,children:"Sign Out"})})]}):Object(c.jsx)(C.a,{className:e.root,children:Object(c.jsx)("h2",{children:"Loading..."})})})}function X(){return Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/signin",children:Object(c.jsx)(K,{})}),Object(c.jsx)(x.a,{path:"/profile",children:Object(c.jsx)(V,{})}),Object(c.jsx)(x.a,{path:"/item/:itemId?",children:Object(c.jsx)(q,{})}),Object(c.jsx)(x.a,{path:"/shop/:page?",children:Object(c.jsx)(z,{})}),Object(c.jsx)(x.a,{path:"/search/:item?/:page?",children:Object(c.jsx)(M,{})}),Object(c.jsx)(x.a,{path:"/",children:Object(c.jsx)(G,{})})]})}function Z(){return Object(c.jsx)("div",{className:"footer",children:"\xa9 2021"})}n(124);var ee=Object(b.a)((function(e){return{container:{maxWidth:1230,width:"100%",margin:"0 auto",padding:"0 15px",overflow:"hidden"}}})),te=localStorage.getItem("token");var ne=function(){var e=ee(),t=Object(a.useState)({token:te}),n=Object(o.a)(t,2),i=n[0],r=n[1];return Object(c.jsx)(g.a,{children:Object(c.jsxs)(f.Provider,{value:{currentUser:i,setCurrentUser:r},children:[Object(c.jsx)(N,{}),Object(c.jsx)("div",{className:e.container,children:Object(c.jsx)(X,{})}),Object(c.jsx)(Z,{})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,174)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(ne,{})}),document.getElementById("root")),ce()},96:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.8deb5c59.chunk.js.map