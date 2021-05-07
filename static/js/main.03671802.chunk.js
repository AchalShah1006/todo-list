(this["webpackJsonpredux-todo"]=this["webpackJsonpredux-todo"]||[]).push([[0],{82:function(e,t,n){},92:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n(9),a=n.n(i),c=(n(82),n(127)),r=n(131),d=n(41),s=n(138),l=n(132),u=n(21),j=n(67),b=n(48),h=Object(b.b)({name:"todos",initialState:{todoList:[]},reducers:{saveTodo:function(e,t){e.todoList.push(t.payload)},removeTodo:function(e,t){return{todoList:Object(j.a)(e.todoList.filter((function(e){return e.id!==t.payload})))}},editTodo:function(e,t){var n=e.todoList.findIndex((function(e){return e.id===t.payload.id}));e.todoList.map((function(e,o){return t.payload.id===e.id&&o===n&&(e.input=t.payload.input),e}))},setCheck:function(e,t){e.todoList.map((function(e){return t.payload===e.id&&(e.done=!e.done),e}))}}}),O=h.actions,p=O.saveTodo,x=O.removeTodo,v=O.editTodo,m=O.setCheck,f=function(e){return e.todos.todoList},g=h.reducer,w=n(6),k=Object(c.a)({inputContainer:{display:"flex",alignItems:"center",justifyContent:"center",padding:"0.5rem"}});var y=function(){var e=k(),t=Object(o.useState)(""),n=Object(d.a)(t,2),i=n[0],a=n[1],c=Object(u.b)();return Object(w.jsxs)("div",{className:e.inputContainer,children:[Object(w.jsx)(s.a,{required:!0,color:"secondary",id:"outlined-required",label:"Add Todo",value:i,variant:"outlined",className:"input",onChange:function(e){return a(e.target.value)}}),Object(w.jsx)(l.a,{"aria-label":"add",onClick:function(){""!==i&&(c(p({input:i,done:!1,id:Date.now()})),a(""))},children:Object(w.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",children:Object(w.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"})})})]})},C=n(133),T=n(134),N=n(139),L=n(62),I=n.n(L),B=n(64),E=n.n(B),A=n(63),S=n.n(A),D=Object(c.a)((function(e){return{checked:{textDecoration:"line-through"},listTodo:{textDecoration:"none"},listItem:{borderBottom:"1px solid skyblue",padding:"10px",backgroundColor:"#E8EAF6"}}}));var R=function(e){var t=e.input,n=e.checked,i=e.id,a=D(),c=Object(u.b)(),r=Object(o.useState)(!0),j=Object(d.a)(r,2),b=j[0],h=j[1],O=Object(o.useState)(t),p=Object(d.a)(O,2),f=p[0],g=p[1];return Object(o.useEffect)((function(){g(t)}),[t]),Object(w.jsxs)(C.a,{className:a.listItem,children:[Object(w.jsx)(T.a,{children:Object(w.jsx)(N.a,{edge:"start",checked:n,tabIndex:-1,disableRipple:!0,onClick:function(){c(m(i))}})}),Object(w.jsx)(s.a,{id:"standard-read-only-input",label:b?"Read Only":"Editing",value:f,InputProps:{readOnly:b},color:"secondary",variant:"outlined",className:n?a.checked:a.listTodo,onChange:function(e){return g(e.target.value)}}),Object(w.jsx)(l.a,{"aria-label":"edit",onClick:function(){if(b)return h(!1);h(!0),c(v({id:i,input:f}))},children:b?Object(w.jsx)(I.a,{}):Object(w.jsx)(S.a,{})}),Object(w.jsx)(l.a,{"aria-label":"delete",onClick:function(){c(x(i))},children:Object(w.jsx)(E.a,{})})]})},W=n(135),q=n(136),z=n(137),G=Object(c.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"center"}}}));function H(){var e=G();return Object(w.jsx)("div",{className:e.root,children:Object(w.jsx)(W.a,{color:"secondary",position:"static",children:Object(w.jsx)(q.a,{children:Object(w.jsx)(z.a,{variant:"h6",className:e.title,children:"Todo App"})})})})}var J=Object(c.a)({root:{paddingBottom:"1rem"},container:{margin:"0.7rem"},list:{width:"100%",maxWidth:360,margin:"1rem auto"}});var V=function(){var e=J(),t=Object(u.c)(f);return Object(w.jsxs)("div",{className:e.root,children:[Object(w.jsx)(H,{}),Object(w.jsx)(y,{}),Object(w.jsx)("div",{className:e.container,children:Object(w.jsx)(r.a,{className:e.list,children:t.map((function(e,t){return Object(w.jsx)(R,{input:e.input,checked:e.done,id:e.id},t)}))})})]})},F=n(65),M=n.n(F),P=n(12),$=n(47),K=n(38),Q=Object(P.c)({todos:g}),U={key:"root",storage:M.a},X=Object($.a)(U,Q),Y=Object(b.a)({reducer:X,devTools:!1,middleware:[K.a]});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Z=n(66),_=Object($.b)(Y);a.a.render(Object(w.jsx)(u.a,{store:Y,children:Object(w.jsx)(Z.a,{loading:null,persistor:_,children:Object(w.jsx)(V,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[92,1,2]]]);
//# sourceMappingURL=main.03671802.chunk.js.map