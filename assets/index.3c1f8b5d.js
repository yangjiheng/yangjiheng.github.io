import{c,a as _,F as m,b as n,r as l,o as u,d as f,e as p,w as v,f as h,g as y,h as g,i as $,A as H}from"./vendor.dff04b8a.js";const S=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};S();var d=(s,o)=>{const r=s.__vccOpts||s;for(const[i,e]of o)r[i]=e;return r};const x={},A=n("div",{id:"nav"},null,-1);function k(s,o){const r=l("router-view");return u(),c(m,null,[A,_(r)],64)}var w=d(x,[["render",k]]),C=f({state:{},mutations:{},actions:{},modules:{}});const M=p({name:"Home",data(){return{}},setup(){return{}},components:{},methods:{}}),O={class:"wrapper"},b=n("p",null,"Research Advances",-1),F={id:"nav"},L=h("Advances in Media Security, Data Hiding and Forensics");function N(s,o,r,i,e,t){const a=l("router-link");return u(),c("div",O,[b,n("div",F,[_(a,{to:"/media_security"},{default:v(()=>[L]),_:1})])])}var B=d(M,[["render",N]]);const R=p({name:"MediaSecurity",data(){return{}},setup(){return{}},components:{},methods:{}}),T={class:"wrapper"},V=n("p",null,"Advances in Media Security, Data Hiding and Forensics",-1),D=n("ul",null,[n("li",null,[n("p",{id:"paper_title"}," On The Security of Block Permutation and Co-XOR in Reversible Data Hiding "),n("p",{id:"authors"},"Lingfeng Qu, Hongjie He, Fan Chen"),n("p",{id:"university"},"Southwest Jiaotong University, Chengdu, China"),n("p",{id:"mag"},"TCSVT 2022, Issue 4")])],-1),P=[V,D];function E(s,o,r,i,e,t){return u(),c("div",T,P)}var I=d(R,[["render",E]]);const j=[{path:"/",name:"Home",component:B,meta:{keepalive:!0}},{path:"/media_security",name:"MediaSecurity",component:I,meta:{keepalive:!0}}],q=y({history:g(),routes:j});$(w).use(H).use(C).use(q).mount("#app");
