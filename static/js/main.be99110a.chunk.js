(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){e.exports=a(313)},181:function(e,t,a){},298:function(e,t,a){},299:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),s=a.n(c),l=a(7),i=a(8),o=a(10),u=a(9),m=a(11),d=a(25),h=a(26),p=a(24),f=a(16),E=a.n(f),b=a(82),g=a(49),v=a(126),_=a(54),y=a(55),k=a(41),O=a(85),j=a(86),S=a(127),C=a(128),N=a(42);function w(){var e=Object(d.a)(["\n\tcolor: #fff;\n\tpadding: 8px 12px;\n\ttext-decoration: none;\n\twidth: 100%;\n"]);return w=function(){return e},e}function I(){var e=Object(d.a)(["\n\tfont-size: 1rem;\n\tmargin-top: 3px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n"]);return I=function(){return e},e}function x(){var e=Object(d.a)(["\n\tpadding: 0;\n"]);return x=function(){return e},e}function P(){var e=Object(d.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return P=function(){return e},e}function A(){var e=Object(d.a)(["\n\tbackground: #0cadad;\n\tcolor: #fff;\n\tfont-size: 1rem;\n\theight: 100vh;\n\tletter-spacing: 3px;\n\tline-height: 16px;\n\twidth: 160px;\n"]);return A=function(){return e},e}var R=p.default.div(A()),T=p.default.div(P()),U=Object(p.default)(b.Nav)(x()),D={hoverBgColor:"#0c8383",selectionBgColor:"#086464"},H=p.default.div(I()),F=Object(p.default)(h.b)(w()),q=function(e){return r.a.createElement(g.Icon,{size:36,icon:e.icon})},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={user:null,isChecked:!1,selectedPath:""},a.onNavItemSelect=function(){a.setState({selectedPath:window.location.pathname})},a.signOut=function(){return E.a.auth().signOut(),r.a.createElement(N.a,{to:"/"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({selectedPath:window.location.pathname}),E.a.auth().onAuthStateChanged(function(t){return e.setState({user:t,isChecked:!0})})}},{key:"render",value:function(){var e=function(e,t){return r.a.createElement(F,{to:"/sign-in"},r.a.createElement(T,null,r.a.createElement(q,{icon:e})),r.a.createElement(H,null,t))};return r.a.createElement(R,null,r.a.createElement(b.SideNav,{defaultSelectedPath:window.location.pathname,theme:D,onItemSelection:this.onItemSelection},r.a.createElement(U,{id:"/home",style:{background:"#0cadad"}},r.a.createElement(F,{to:"/"},r.a.createElement("div",{style:{margin:"30px 0 10px",textAlign:"center"}},r.a.createElement("h1",{style:{fontSize:"4rem",fontFamily:"Courgette"}},"React"),r.a.createElement("h5",{style:{fontSize:"0.7rem",fontFamily:"Roboto",letterSpacing:"0.6rem",marginTop:"10px"}},"SUPERMARKET")))),r.a.createElement(U,{id:"/home"},r.a.createElement(F,{to:"/home"},r.a.createElement(T,null,r.a.createElement(q,{icon:v.home})),r.a.createElement(H,null,"Home"))),r.a.createElement(U,{id:"/user-panel"},this.state.user?r.a.createElement(F,{to:"/user-panel"},r.a.createElement(T,null,r.a.createElement(q,{icon:_.user})),r.a.createElement(H,null,"User Panel")):e(_.user,"user panel")),r.a.createElement(U,{id:"/market"},this.state.user?r.a.createElement(F,{to:"/market"},r.a.createElement(T,null,r.a.createElement(q,{icon:y.shop})),r.a.createElement(H,null,"Market")):e(y.shop,"market")),r.a.createElement(U,{id:"/basket"},this.state.user?r.a.createElement(F,{to:"/basket"},r.a.createElement(T,null,r.a.createElement(q,{icon:k.shoppingCart})),r.a.createElement(H,null,"Basket")):e(k.shoppingCart,"basket")),r.a.createElement(U,{id:"/summary-order"},this.state.user?r.a.createElement(F,{to:"/summary-order"},r.a.createElement(T,null,r.a.createElement(q,{icon:O.clipboard})),r.a.createElement(H,null,"Summary the order")):e(O.clipboard,"summary the order")),r.a.createElement(U,{id:"/support"},this.state.user?r.a.createElement(F,{to:"/support"},r.a.createElement(T,null,r.a.createElement(q,{icon:j.bubbles3})),r.a.createElement(H,null,"Support")):e(j.bubbles3,"support")),this.state.user?r.a.createElement(F,{to:"/",onClick:this.signOut},r.a.createElement(T,null,r.a.createElement(q,{icon:C.userTimes})),r.a.createElement(H,null,"Sign out")):r.a.createElement(U,{id:"/sign-in"},r.a.createElement(F,{to:"/sign-in"},r.a.createElement(T,null,r.a.createElement(q,{icon:S.userPlus})),r.a.createElement(H,null,"Sign in")))))}}]),t}(r.a.Component),z=a(131);a(181);function L(){var e=Object(d.a)(["\n    color: #0cadad;\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return L=function(){return e},e}var W=function(e){return r.a.createElement(g.Icon,{size:100,icon:e.icon})},B=p.default.div(L()),J=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Home__container"},r.a.createElement("div",{className:"Home__container__header"},r.a.createElement("h1",null,"React"),r.a.createElement("p",null,"Supermarket")),r.a.createElement("div",{className:"Home__container__info"},r.a.createElement("div",{className:"Home__container__info__panel"},r.a.createElement(B,null,r.a.createElement(W,{icon:_.user})),r.a.createElement("p",null,"Sign up")),r.a.createElement("div",{className:"Home__container__info__panel"},r.a.createElement(B,null,r.a.createElement(W,{icon:y.shop})),r.a.createElement("p",null,"Find your market")),r.a.createElement("div",{className:"Home__container__info__panel"},r.a.createElement(B,null,r.a.createElement(W,{icon:k.shoppingCart})),r.a.createElement("p",null,"Do shopping")),r.a.createElement("div",{className:"Home__container__info__panel"},r.a.createElement(B,null,r.a.createElement(W,{icon:z.u1F6A9})),r.a.createElement("p",null,"Wait for delivery!"))))}}]),t}(r.a.Component),$=a(43),K=(a(96),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={user:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.a.auth().onAuthStateChanged(function(t){t&&e.setState({authUser:t,authUserId:t.uid,authUserEmail:t.email,authUserRegistered:t.metadata.creationTime,authIsChecked:!0}),E.a.database().ref("users").once("value").then(function(t){var a=t.val()||{},n=Object.keys(a).map(function(e){return Object($.a)({id:e},a[e])}).filter(function(t){return t.id===e.state.authUserId})[0];n&&e.setState({user:n,userFirstName:n.name.split(" ")[0]})})});this.setState({ref:t})}},{key:"componentWillUnmount",value:function(){this.state.ref&&this.state.ref()}},{key:"render",value:function(){return r.a.createElement("h1",{className:"user__container__header"},"Hello ",this.state.user?this.state.userFirstName:null,"!")}}]),t}(r.a.Component)),V=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={avatar:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("user.json").then(function(e){return e.json()}).then(function(t){return e.setState({avatar:t.avatar})})}},{key:"render",value:function(){return r.a.createElement("img",{className:"user__avatar",src:this.state.avatar,alt:"avatar"})}}]),t}(r.a.Component),Y=a(39),Q=a.n(Y),X=a(132),Z=a.n(X),G=a(137),ee=a.n(G),te=a(135),ae=a.n(te),ne=a(136),re=a.n(ne),ce=a(134),se=a.n(ce),le=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={open:!1,redirect:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(N.a,{to:"/"})},a.signOut=function(){E.a.auth().signOut().then(a.setRedirect)},a.deleteAccount=function(){E.a.auth().currentUser.delete().then(a.signOut).then(a.handleClose).catch(function(e){return alert(e)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"delete__button"},r.a.createElement("span",{onClick:this.handleClickOpen},"Delete account")),r.a.createElement(Z.a,{open:this.state.open,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(se.a,{id:"alert-dialog-title"},"Are you sure?"),r.a.createElement(ae.a,null,r.a.createElement(re.a,{id:"alert-dialog-description"},"This action is irreversible. Do you really want to delete your account?")),r.a.createElement(ee.a,null,r.a.createElement(Q.a,{onClick:this.handleClose,color:"secondary"},"NO"),this.renderRedirect(),r.a.createElement(Q.a,{onClick:this.deleteAccount,color:"secondary"},"YES"))))}}]),t}(r.a.Component),ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={authUser:null,authUserRegistered:"",authUserEmail:"",authIsChecked:!1,showInput:!1},a.editUserData=function(){var e=a.state.showInput;a.setState({showInput:!e});var t=document.querySelectorAll(".change__data__container"),n=document.querySelector(".edit__button");a.state.showInput?(t.forEach(function(e){return e.classList.add("unvisible")}),n.innerHTML="Edit"):(t.forEach(function(e){return e.classList.remove("unvisible")}),n.innerHTML="Save")},a.editAddress1=function(e){a.state.user&&a.setState({user:Object($.a)({},a.state.user,{street:e.target.value})},function(){E.a.database().ref("users/".concat(a.state.authUserId)).update({street:a.state.user.street})})},a.editAddress2=function(e){a.state.user&&a.setState({user:Object($.a)({},a.state.user,{city:e.target.value})},function(){E.a.database().ref("users/".concat(a.state.authUserId)).update({city:a.state.user.city})})},a.editPhoneNum=function(e){a.state.user&&a.setState({user:Object($.a)({},a.state.user,{phone:e.target.value})},function(){E.a.database().ref("users/".concat(a.state.authUserId)).update({phone:a.state.user.phone})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=E.a.auth().onAuthStateChanged(function(t){t&&e.setState({authUser:t,authUserId:t.uid,authUserEmail:t.email,authUserRegistered:t.metadata.creationTime,authIsChecked:!0}),E.a.database().ref("users").once("value").then(function(t){var a=t.val()||{},n=Object.keys(a).map(function(e){return Object($.a)({id:e},a[e])}).filter(function(t){return t.id===e.state.authUserId})[0];e.setState({user:n})})});this.setState({ref:t})}},{key:"componentWillUnmount",value:function(){this.state.ref&&this.state.ref()}},{key:"render",value:function(){var e=this.state.showInput;return r.a.createElement("div",{className:"user__container__left__top__userdata"},r.a.createElement("span",{style:{fontSize:"1.2rem"}},"Registered: ",this.state.authUserRegistered),r.a.createElement("h2",null,r.a.createElement("span",{role:"img","aria-label":"phone"},"\ud83d\udcde "),"Contact ",r.a.createElement("span",{className:"edit__button",onClick:this.editUserData},"Edit")),r.a.createElement("div",{className:"user__container__left__top__userdata__contact"},r.a.createElement("div",null,r.a.createElement("h4",null,"e-mail: "),r.a.createElement("h4",null,"address: "),r.a.createElement("br",null),r.a.createElement("h4",null,"phone: ")),r.a.createElement("div",null,r.a.createElement("h4",null,this.state.authUserEmail),e?r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:this.state.user?this.state.user.street:"",onChange:this.editAddress1}),r.a.createElement("input",{type:"text",value:this.state.user?this.state.user.city:"",onChange:this.editAddress2}),r.a.createElement("input",{type:"text",value:this.state.user?this.state.user.phone:"",onChange:this.editPhoneNum}),r.a.createElement("div",{className:"edit__buttons__container"},r.a.createElement("div",{className:"save__button"},r.a.createElement("span",{onClick:this.editUserData},"Save")),r.a.createElement(le,null))):r.a.createElement("div",null,r.a.createElement("h4",null,this.state.user?this.state.user.street:null),r.a.createElement("h4",null,this.state.user?this.state.user.city:null),r.a.createElement("h4",null,this.state.user?this.state.user.phone:null)))))}}]),t}(r.a.Component),oe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={contactInfo:{address:{street:"3681 Veltri Drive",zipcode:"99501",city:"Anchorage",state:"Alaska"},phone:"907-297-2483"},openingHours:{open:7,close:21}},a.isMarketOpened=function(){var e=(new Date).getHours(),t=document.querySelector(".isMarketOpened");e<a.state.openingHours.open||e>=a.state.openingHours.close?(t.innerHTML="(Closed)",t.style.color="red"):(t.innerHTML="(Opened)",t.style.color="green")},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("markets.json").then(function(e){return e.json()}).then(function(t){return e.setState({markets:t})}),this.isMarketOpened()}},{key:"render",value:function(){return r.a.createElement("div",{className:"user__container__left__bottom"},r.a.createElement("h1",{className:"user__container__header"},"Your market"),r.a.createElement("div",{className:"user__container__left__market"},r.a.createElement("img",{src:"/img/react_market.jpg",alt:"market_photo"}),r.a.createElement("div",{className:"user__container__left__market__marketdata"},r.a.createElement("h3",null,"Supermarket React"),r.a.createElement("h4",null,this.state.contactInfo.address.street),r.a.createElement("h4",null,this.state.contactInfo.address.zipcode,"\xa0",this.state.contactInfo.address.city,",\xa0",this.state.contactInfo.address.state,r.a.createElement("br",null),r.a.createElement("br",null),"Contact: ",this.state.contactInfo.phone,r.a.createElement("br",null),r.a.createElement("br",null),"Opening hours:",r.a.createElement("br",null),r.a.createElement("span",null,this.state.openingHours.open,":00 - ",this.state.openingHours.close,":00 "),r.a.createElement("span",{className:"isMarketOpened"})))))}}]),t}(r.a.Component),ue=a(50),me=a(138),de=a.n(me),he=a(141),pe=a.n(he),fe=a(139),Ee=a.n(fe),be=a(27),ge=a.n(be),ve=a(140),_e=a.n(ve),ye=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={markets:[],expanded:null},a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("markets.json").then(function(e){return e.json()}).then(function(t){return e.setState({markets:t})})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.expanded;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.root},r.a.createElement("h1",{className:"user__container__header"},"Find your market:"),r.a.createElement("div",{className:"markets__list__container"},this.state.markets.map(function(n){return r.a.createElement(de.a,{key:n.id,expanded:a==="panel".concat(n.id),onChange:e.handleChange("panel".concat(n.id))},r.a.createElement(Ee.a,{expandIcon:r.a.createElement(_e.a,null)},r.a.createElement(ge.a,{className:t.heading},n.contactInfo.address.city),r.a.createElement(ge.a,{className:t.secondaryHeading},n.contactInfo.address.state)),r.a.createElement(pe.a,null,n.contactInfo.address.street,r.a.createElement("br",null),n.contactInfo.address.zipcode," ",n.contactInfo.address.city," ",n.contactInfo.address.state))}))))}}]),t}(r.a.Component),ke=Object(ue.withStyles)(function(e){return{root:{margin:"auto",width:"70%"},heading:{fontSize:e.typography.pxToRem(22),flexBasis:"50%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(22),color:e.palette.text.secondary}}})(ye),Oe=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"user__container"},r.a.createElement("div",{className:"user__container__left"},r.a.createElement(K,null),r.a.createElement("div",{className:"user__container__left__top"},r.a.createElement(V,null),r.a.createElement(ie,null)),r.a.createElement(oe,null)),r.a.createElement("div",{className:"user__container__right"},r.a.createElement(ke,null)))}}]),t}(r.a.Component),je=a(142),Se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",department:""},a.onInputChange=function(e){a.setState({text:e.target.value},function(){return a.props.onFilterChange(a.state)})},a.onSelectChange=function(e){a.setState({department:e.target.value},function(){return a.props.onFilterChange(a.state)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("input",{placeholder:"Find product",type:"text",value:this.state.value,onChange:this.onInputChange}),r.a.createElement("select",{onChange:this.onSelectChange},r.a.createElement("option",{value:""},"All departments"),this.props.departments.sort().map(function(e){return r.a.createElement("option",{key:e,value:e},e.replace(/_/," "))})))}}]),t}(r.a.Component);a(298);function Ce(){var e=Object(d.a)(["\n\tdisplay: flex;\n\tjustify-content: center;\n"]);return Ce=function(){return e},e}var Ne=function(e){return r.a.createElement(g.Icon,{size:30,icon:e.icon})},we=p.default.div(Ce()),Ie=function(e){var t=e.products,a=e.setItemToLS;return r.a.createElement("div",{className:"market__product__container"},t.map(function(e){return r.a.createElement("div",{className:"market__product",key:e.id},r.a.createElement("img",{src:e.image,alt:e.image}),r.a.createElement("div",{className:"market__product__info"},r.a.createElement(we,{onClick:function(){return a(e)}},r.a.createElement(Ne,{icon:k.shoppingCart})),r.a.createElement("p",null,e.title),r.a.createElement("p",null,"Price: ",e.price," $")))}))},xe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],departments:[],filter:{text:"",department:""}},a.setItemToLocalStorage=function(e){if(null!==localStorage.getItem("basketProducts")){var t=JSON.parse(localStorage.getItem("basketProducts"));t.some(function(t){return t.id===e.id})?alert("You can change quantity in Basket bookmark."):(t.push(e),alert("Product added to your basket!"),localStorage.setItem("basketProducts",JSON.stringify(t)))}else{var a=[e];alert("Product added to your basket!"),localStorage.setItem("basketProducts",JSON.stringify(a))}},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("products.json").then(function(e){return e.json()}).then(function(t){var a=t.reduce(function(e,t){return t.department.split(" ").forEach(function(t){return e.add(t)}),e},new Set);e.setState({products:t,departments:Object(je.a)(a)})})}},{key:"getData",value:function(){var e=this;return this.state.products.filter(function(t){var a=t.title.toLowerCase(),n=e.state.filter.text.toLowerCase(),r=t.department,c=e.state.filter.department;return a.includes(n)&&r.includes(c)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"market__container"},r.a.createElement("div",{className:"market__container__filter"},r.a.createElement("h1",null,"Products"),r.a.createElement(Se,{departments:this.state.departments,onFilterChange:function(t){return e.setState({filter:t})}})),r.a.createElement(Ie,{setItemToLS:this.setItemToLocalStorage,products:this.getData()}))}}]),t}(r.a.Component),Pe=(a(299),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={redirect:!1},a.getProductsFromLS=function(){return JSON.parse(localStorage.getItem("basketProducts"))},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(N.a,{to:"/summary-order"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({basketProducts:JSON.parse(localStorage.getItem("basketProducts"))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"basket__container"},r.a.createElement("h1",null,"Basket"),r.a.createElement("div",{className:"basket__container__header"},r.a.createElement("div",{className:"basket__container__header1"},r.a.createElement("span",null,"Product")),r.a.createElement("div",{className:"basket__container__header2"},r.a.createElement("span",null,"Qty")),r.a.createElement("div",{className:"basket__container__header3"},r.a.createElement("span",null,"Price"))),r.a.createElement("div",{className:"basket__container__table"},r.a.createElement("table",null,r.a.createElement("tbody",null,this.state.basketProducts?this.state.basketProducts.map(function(t){return r.a.createElement("tr",{key:t.title},r.a.createElement("td",{className:"td1"},r.a.createElement("span",{className:"basket__delete__product",onClick:function(){var a=e.state.basketProducts.filter(function(e){return e.id!==t.id});localStorage.setItem("basketProducts",JSON.stringify(a)),e.setState({basketProducts:a})}},"\u2718"),t.title),r.a.createElement("td",{className:"table__center__content td2"},r.a.createElement("span",{className:"basket__product__quantity__button",id:"".concat(t.id,"--"),onClick:function(){document.getElementById("".concat(t.id,"qty")).innerHTML>1&&(t.qty--,e.setState({}))}},"-"),r.a.createElement("span",{className:"basket__product__quantity",id:"".concat(t.id,"qty")},t.qty),r.a.createElement("span",{className:"basket__product__quantity__button",id:"".concat(t.id,"++"),onClick:function(){t.qty++,e.setState({})}},"+")),r.a.createElement("td",{className:"table__center__content td3"},"$ ",(t.price*t.qty).toFixed(2)))}):null))),r.a.createElement("div",{className:"basket__container__summary"},r.a.createElement("p",null,r.a.createElement("span",null,"Total:"),this.state.basketProducts?" $"+this.state.basketProducts.map(function(e){return e.price*e.qty}).reduce(function(e,t){return e+t},0).toFixed(2):" $ 0.00")),r.a.createElement("div",{className:"basket__container__button"},this.renderRedirect(),r.a.createElement("span",{onClick:this.setRedirect},"Summary the order")))}}]),t}(r.a.Component)),Ae=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("h1",null,"Summary")}}]),t}(r.a.Component),Re=a(33),Te=a(65),Ue=a.n(Te),De=a(64),He=a.n(De),Fe=a(34),qe=a.n(Fe),Me=a(36),ze=a.n(Me),Le=a(35),We=a.n(Le),Be=a(66),Je=a.n(Be),$e=a(48),Ke=a.n($e),Ve=a(12),Ye=a.n(Ve),Qe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",name:"",street:"",city:"",phone:""},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(N.a,{to:"/user-panel"})},a.handleChange=function(e){a.setState(Object(Re.a)({},e.currentTarget.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,r=t.name,c=t.street,s=t.city,l=t.phone;E.a.auth().createUserWithEmailAndPassword(a.state.email,a.state.password).then(function(e){E.a.database().ref("users/".concat(e.user.uid)).set({email:n,name:r,street:c,city:s,phone:l,uid:e.user.uid}),alert("Registered")}).then(a.setRedirect).catch(function(e){alert(e.message)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("main",{className:e.main},r.a.createElement(He.a,null),r.a.createElement(Ke.a,{className:e.paper},r.a.createElement(Ue.a,{className:e.avatar},r.a.createElement(Je.a,null)),r.a.createElement(ge.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"text"},"Name"),r.a.createElement(ze.a,{id:"name",name:"name",value:this.state.name,onChange:this.handleChange})),r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"text"},"Address"),r.a.createElement(ze.a,{id:"street",name:"street",value:this.state.address,onChange:this.handleChange})),r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"text"},"City"),r.a.createElement(ze.a,{id:"city",name:"city",value:this.state.city,onChange:this.handleChange})),r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"text"},"Phone number"),r.a.createElement(ze.a,{id:"phone",name:"phone",value:this.state.phone,onChange:this.handleChange})),r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"email"},"Email"),r.a.createElement(ze.a,{id:"email__sign-up",name:"email",value:this.state.email,onChange:this.handleChange})),r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"password"},"Password"),r.a.createElement(ze.a,{name:"password",type:"password",id:"password__sign-up",autoComplete:"current-password",value:this.state.password,onChange:this.handleChange})),this.renderRedirect(),r.a.createElement(Q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:e.submit},"Register"),r.a.createElement(ge.a,{className:e.typography,onClick:function(){return window.location.reload()}},"I have account already."))))}}]),t}(r.a.Component),Xe=Ye()(function(e){var t;return{main:(t={},Object(Re.a)(t,e.breakpoints.up(400+3*e.spacing.unit*2),{width:500}),Object(Re.a)(t,"margin","14vh auto"),t),paper:{marginTop:e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.secondary.main},submit:{marginTop:3*e.spacing.unit},typography:{marginTop:2*e.spacing.unit,textAlign:"center",color:"rgb(130, 181, 201)",cursor:"pointer",fontSize:"1.3rem"}}})(Qe),Ze=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).state={email:"",password:"",redirect:!1,userHasAccount:!0},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(N.a,{to:"/user-panel"})},a.handleChange=function(e){a.setState(Object(Re.a)({},e.currentTarget.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),E.a.auth().signInWithEmailAndPassword(a.state.email,a.state.password).then(a.setRedirect).catch(function(e){alert(e.message)})},a.resetPassword=function(){var e=E.a.auth(),t=a.state.email;a.state.email?e.sendPasswordResetEmail(t).then(function(){return alert("Link to password reset sent. Check your e-mail.")}).catch(function(e){return alert(e)}):alert("Wrong email address.")},a.showRegisterPanel=function(){a.setState({userHasAccount:!1})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return this.state.userHasAccount?r.a.createElement("main",{className:e.main},r.a.createElement(He.a,null),r.a.createElement(Ke.a,{className:e.paper},r.a.createElement(Ue.a,{className:e.avatar},r.a.createElement(Je.a,null)),r.a.createElement(ge.a,{component:"h1",variant:"h5"},"Sign in"),r.a.createElement("form",{className:e.form,onSubmit:this.handleSubmit},r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"email"},"Email"),r.a.createElement(ze.a,{id:"email",name:"email",onChange:this.handleChange})),r.a.createElement(qe.a,{margin:"normal",required:!0,fullWidth:!0},r.a.createElement(We.a,{htmlFor:"password"},"Password"),r.a.createElement(ze.a,{name:"password",type:"password",id:"password",onChange:this.handleChange})),this.renderRedirect(),r.a.createElement(Q.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in"),r.a.createElement(ge.a,{className:e.typography,onClick:this.resetPassword},"I don't remember my password."),r.a.createElement(ge.a,{className:e.typography,onClick:this.showRegisterPanel},"I don't have account yet.")))):r.a.createElement(Xe,null)}}]),t}(n.Component),Ge=Ye()(function(e){var t;return{main:(t={},Object(Re.a)(t,e.breakpoints.up(400+3*e.spacing.unit*2),{width:400}),Object(Re.a)(t,"margin","27vh auto"),t),paper:{marginTop:e.spacing.unit,display:"flex",flexDirection:"column",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px ").concat(3*e.spacing.unit,"px")},avatar:{margin:e.spacing.unit,backgroundColor:e.palette.primary.main},submit:{marginTop:3*e.spacing.unit,color:"white"},typography:{marginTop:2*e.spacing.unit,textAlign:"center",color:"rgb(130, 181, 201)",cursor:"pointer",fontSize:"1.3rem"}}})(Ze);function et(){var e=Object(d.a)(['\n\tbackground: url("/img/background.jpg");\n\tbackground-size: cover;\n\theight: 100vh;\n\twidth: 100%;\n']);return et=function(){return e},e}var tt=p.default.div(et()),at=function(){return r.a.createElement(tt,null,r.a.createElement(N.b,{exact:!0,path:"/",component:J}),r.a.createElement(N.b,{path:"/home",component:J}),r.a.createElement(N.b,{path:"/user-panel",component:Oe}),r.a.createElement(N.b,{path:"/market",component:xe}),r.a.createElement(N.b,{path:"/basket",component:Pe}),r.a.createElement(N.b,{path:"/summary-order",component:Ae}),r.a.createElement(N.b,{path:"/sign-in",component:Ge}))};function nt(){var e=Object(d.a)(["\n\tdisplay: flex;\n\theight: 100vh;\n\twidth: 100%;\n"]);return nt=function(){return e},e}var rt=p.default.div(nt());E.a.initializeApp({apiKey:"AIzaSyDTeDP3tD-qLJcdZrMbek-VSp87XapKPHA",authDomain:"supermarket-react.firebaseapp.com",databaseURL:"https://supermarket-react.firebaseio.com",projectId:"supermarket-react",storageBucket:"supermarket-react.appspot.com",messagingSenderId:"635046131505"});var ct=function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(rt,null,r.a.createElement(M,null),r.a.createElement(at,null)))}}]),t}(r.a.Component),st=(a(312),Object(ue.createMuiTheme)({palette:{primary:{main:"#66c7c7"},secondary:{main:"#086464"}},typography:{useNextVariants:!0}}));s.a.render(r.a.createElement(h.a,null,r.a.createElement(ue.MuiThemeProvider,{theme:st},r.a.createElement(ct,null))),document.getElementById("root"))},96:function(e,t,a){}},[[144,1,2]]]);
//# sourceMappingURL=main.be99110a.chunk.js.map