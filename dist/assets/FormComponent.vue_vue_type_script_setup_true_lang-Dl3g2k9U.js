import{d as x,I as S,r as i,j as T,a as c,e,w as f,l as h,F as P,x as D,t as g,m as u,f as V,p as B,h as F,o as d}from"./index-BVfVY_0g.js";import{P as M}from"./PatrocinadorStore-AxBANK_o.js";const q={class:"row"},E={class:"col col-auto"},R={class:"form-group"},U=e("label",{for:"patrocinador"},[u("Patrocinador "),e("i",{class:"bi bi-person"})],-1),j={class:"list-group list-group-flush"},z=["onClick"],L={key:0,class:"alert alert-secondary alert-dismissible fade show",role:"alert"},$=e("i",{class:"bi bi-x"},null,-1),A=[$],G={class:"col"},H={class:"form-group"},J=e("label",{for:"cantidad"},[u("Monto "),e("i",{class:"bi currency-dollar"})],-1),K=["required"],O=e("button",{type:"submit",class:"btn btn-success"},[u(" Procesar "),e("i",{class:"bi bi-save"})],-1),X=x({__name:"FormComponent",props:{data:{}},setup(y){const I=M(),m=S(),l=i(0),v=i([]),s=i({}),a=i({}),C=F(),r=y;T(async()=>{r.data&&(a.value=r.data,console.log(r.data)),l.value&&(v.value=await I.obtenerPatrocinador(l.value))});const _=t=>{a.value={...a.value,[t.target.name]:t.target.value}},N=t=>{s.value=t},k=()=>{s.value={}},w=t=>{var p,b;t.preventDefault();let n=C.currentRoute.value.params.id,o="";s.value.NIT&&(o=s.value.NIT.toString()),a.value={...a.value,patrocinador:o},n?(console.log((p=r.data)==null?void 0:p.id),m.actualizarDinero((b=r.data)==null?void 0:b.id,a.value)):m.guardarDineros(a.value)};return(t,n)=>(d(),c("form",{onSubmit:B(w,["prevent"])},[e("div",q,[e("div",E,[e("div",R,[U,f(e("input",{type:"text",class:"form-control form-control-border",id:"patrocinador",name:"patrocinador",onInput:_,"onUpdate:modelValue":n[0]||(n[0]=o=>l.value=o),placeholder:"Buscar patrocinador"},null,544),[[h,l.value]]),e("div",j,[(d(!0),c(P,null,D(v.value,o=>(d(),c("a",{key:o.NIT,class:"list-group-item list-group-item-action",onClick:p=>N(o)},g(o.nombre),9,z))),128))]),s.value.NIT?(d(),c("div",L,[e("strong",null,g(s.value.nombre),1),u(" seleccionado. "),e("button",{type:"button",class:"btn btn-close btn-danger","data-bs-dismiss":"alert","aria-label":"Close",onClick:k},A)])):V("",!0)])]),e("div",G,[e("div",H,[J,f(e("input",{type:"number",class:"form-control form-control-border",id:"cantidad",name:"cantidad",onInput:_,"onUpdate:modelValue":n[1]||(n[1]=o=>a.value.cantidad=o),placeholder:"Ingrese el monto",required:!a.value.cantidad},null,40,K),[[h,a.value.cantidad]])])])]),O],32))}});export{X as _};