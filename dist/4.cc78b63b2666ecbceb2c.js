(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{212:function(e,t,a){"use strict";a.r(t);var o=a(0),l=a.n(o),n=a(2),r=a.n(n),s=a(4),c=a(5),m=a(14),u=a(10);t.default=Object(s.g)((function(e){const[t,a]=Object(o.useState)(),[n,s]=Object(o.useState)(),p=Object(o.useContext)(m.a),b=Object(o.useContext)(u.a);return l.a.createElement(c.a,{title:"Create New Post"},l.a.createElement("form",{onSubmit:async function(a){a.preventDefault();try{const a=await r.a.post("/create-post",{title:t,body:n,token:b.user.token});p({type:"flashMessage",value:"Congrats, you created brand new post"}),e.history.push("/post/"+a.data)}catch(e){console.log("There was a problem!!")}}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"post-title",className:"text-muted mb-1"},l.a.createElement("small",null,"Title")),l.a.createElement("input",{onChange:e=>a(e.target.value),autoFocus:!0,name:"title",id:"post-title",className:"form-control form-control-lg form-control-title",type:"text",placeholder:"",autoComplete:"off"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block"},l.a.createElement("small",null,"Body Content")),l.a.createElement("textarea",{onChange:e=>s(e.target.value),name:"body",id:"post-body",className:"body-content tall-textarea form-control",type:"text"})),l.a.createElement("button",{className:"btn btn-primary"},"Save New Post")))}))}}]);