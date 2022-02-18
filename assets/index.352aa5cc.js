import{r as m,j as h,a as e,B as g,l as p,R as f,b as y}from"./vendor.e5b38519.js";const v=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerpolicy&&(s.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?s.credentials="include":t.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}};v();const N="_chat_header_1t1r0_1",b="_chat_body_1t1r0_13",x="_message_container_1t1r0_27",S="_message_you_1t1r0_49",M="_message_content_1t1r0_67",L="_message_meta_1t1r0_111",j="_message_other_1t1r0_135",w="_chat_footer_1t1r0_217",D="_you_1t1r0_275",E="_other_1t1r0_281";var r={chat_header:N,chat_body:b,message_container:x,message_you:S,message_content:M,message_meta:L,message_other:j,chat_footer:w,you:D,other:E};function k({socket:n,username:a,room:c}){const[i,t]=m.exports.useState(""),[s,l]=m.exports.useState([]),d=async()=>{if(i!==""){const o={room:c,author:a,message:i,time:new Date(Date.now()).getHours()+":"+new Date(Date.now()).getMinutes()};await n.emit("send_message",o),l(_=>[..._,o])}};return m.exports.useEffect(()=>{n.on("receive_message",o=>{console.log(o),l(_=>[..._,o])})},[n]),h("div",{children:[e("div",{className:r.chat_header,children:e("p",{children:"Chat App"})}),e("div",{className:r.chat_body,children:e(g,{className:r.message_container,children:s.map(o=>e("div",{children:a===o.author?e("div",{className:r.message_you,children:h("div",{children:[e("div",{className:r.message_content,children:e("p",{children:o.message})}),e("div",{className:r.message_meta,children:e("p",{children:o.time})})]})}):e("div",{className:r.message_other,children:h("div",{children:[e("div",{className:r.message_content,children:e("p",{children:o.message})}),e("div",{className:r.message_meta,children:e("p",{children:o.time})})]})})}))})}),h("div",{className:r.chat_footer,children:[e("input",{type:"text",placeholder:"Hey...",onChange:o=>{t(o.target.value)},onKeyPress:o=>{o.key=="Enter"&&d()}}),e("button",{onClick:d,children:"\u25BA"})]})]})}const u=p.connect("https://chat-app-back-end.herokuapp.com");function A(){const[n,a]=m.exports.useState(""),[c,i]=m.exports.useState(""),[t,s]=m.exports.useState(!1);return e("div",{children:t===!1?h("div",{className:"login",children:[e("p",{children:"Escolha um User e uma Sala!"}),e("input",{type:"text",placeholder:"User...",onChange:d=>{a(d.target.value)}}),e("input",{type:"text",placeholder:"Sala...",onChange:d=>{i(d.target.value)}}),e("button",{onClick:()=>{n!==""&&c!==""&&(u.emit("join_room",c),s(!0))},children:"Entar"})]}):e("div",{children:e(k,{socket:u,username:n,room:c})})})}f.render(e(y.StrictMode,{children:e(A,{})}),document.getElementById("root"));
