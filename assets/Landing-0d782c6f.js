import{_ as i,o as c,c as l,a as t,n,F as r}from"./index-66badbca.js";const m={name:"Landing",created(){},props:{mode:Number},data(){return{}},methods:{setMode(d){this.$emit("updateMode",d)}}};const _={class:"landing-header"},u=["src","v-bind:alt"];function v(d,e,a,g,f,s){return c(),l(r,null,[t("div",_,[t("h2",{class:n(a.mode===1?"active":""),onClick:e[0]||(e[0]=o=>s.setMode(1))},"Software Architect",2),t("h2",{class:n(a.mode===2?"active":""),onClick:e[1]||(e[1]=o=>s.setMode(2))},"Web Developer",2),t("h2",{class:n(a.mode===3?"active":""),onClick:e[2]||(e[2]=o=>s.setMode(3))},"Musician",2)]),t("img",{src:"/cv/images/computer2mod.png","v-bind:alt":a.mode,class:"img-fluid mx-auto d-block",id:"kieranDeskImg"},null,8,u)],64)}const p=i(m,[["render",v],["__scopeId","data-v-155542f4"]]);export{p as default};
