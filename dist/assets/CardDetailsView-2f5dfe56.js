import{M as n}from"./ModelCard-b06c8612.js";import{a}from"./axios-82afda87.js";import{_ as l,k as c,o as d,c as i,i as p}from"./index-4e547976.js";const _={components:{ModelCard:n},data(){return{cardDetails:{},sellerInfo:null}},async created(){const s=this.$route.params.id;try{const e=await a.get(`http://pzi042023.studenti.sum.ba/backend/api/resources/${s}`);this.cardDetails=e.data;const t=await a.get(`http://pzi042023.studenti.sum.ba/backend/api/resources/sellers/${this.cardDetails.user_id}`);this.sellerInfo=t.data}catch(e){console.error("Error fetching card details:",e)}}},u={class:"card-details"};function f(s,e,t,m,o,h){const r=c("ModelCard");return d(),i("div",u,[p(r,{model:o.cardDetails,showAdditionalInfo:!0,sellerInfo:o.sellerInfo},null,8,["model","sellerInfo"])])}const D=l(_,[["render",f],["__scopeId","data-v-6b8fbe90"]]);export{D as default};
