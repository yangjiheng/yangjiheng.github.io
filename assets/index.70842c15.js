import{c as a,a as l,F as m,b as c,r as p,o as d,d as h,e as _,w as f,f as v,g as y,h as g,i as k,j as $,A as b}from"./vendor.b2bb18f8.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};w();var u=(r,n)=>{const o=r.__vccOpts||r;for(const[i,e]of n)o[i]=e;return o};const H={},C=c("div",{id:"nav"},null,-1);function P(r,n){const o=p("router-view");return d(),a(m,null,[C,l(o)],64)}var A=u(H,[["render",P]]),S=h({state:{},mutations:{},actions:{},modules:{}});const x=_({name:"Home",data(){return{}},setup(){return{}},components:{},methods:{}}),B={class:"wrapper"},O=c("p",null,"Research Advances",-1),R={id:"nav"},M=v("Advances in Media Security, Data Hiding and Forensics");function N(r,n,o,i,e,t){const s=p("router-link");return d(),a("div",B,[O,c("div",R,[l(s,{to:"/media_security"},{default:f(()=>[M]),_:1})])])}var D=u(x,[["render",N]]);const F=_({name:"MediaSecurity",data(){return{}},setup(){return{}},components:{},methods:{}}),L={class:"wrapper"},T=y('<p>Advances in Media Security, Data Hiding and Forensics</p><ul><li><p id="paper_title"> On The Security of Block Permutation and Co-XOR in Reversible Data Hiding </p><p id="authors">Lingfeng Qu, Hongjie He, Fan Chen</p><p id="university">Southwest Jiaotong University, Chengdu, China</p><p id="mag">TCSVT 2022, Issue 4</p><p id="desc"> Reversible Data Hiding in Encrypted Images (RDH-EI) targets to convert meaningful image content(lena, airplane, etc.) into incomprehensible and noise-like content for safer storage and distribution. The noisy image can be processed to retrieve original image content. This work analyzed BPCX (Block Permutation and Co-XOR) algorithm in security perspective. </p><p id="desc"> BPCX is done in 3 steps: 1) Block CO-XOR operation with key1, 2) Block Permutation with key2, 3), Pixel Permutation within a block with key3. </p><p id="desc"> Per security conclusion, KPA method can estimate with 30% success for image block permutation, 40% success for block permutation sequence. Also smaller block size, the higher security. BPCX cannot resist KPA method. RDH solution might be more promising. </p></li></ul>',2),X=[T];function V(r,n,o,i,e,t){return d(),a("div",L,X)}var E=u(F,[["render",V]]);const I=[{path:"/",name:"Home",component:D,meta:{keepalive:!0}},{path:"/media_security",name:"MediaSecurity",component:E,meta:{keepalive:!0}}],K=g({history:k(),routes:I});$(A).use(b).use(S).use(K).mount("#app");
