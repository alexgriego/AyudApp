import{d as p,r as d,i as g,a as u,e as t,k as e,w as _,v as w,t as n,b as m,f as N,h as k,g as x,o as c,R as h,u as y,_ as C,E as D}from"./index-BKthAEvq.js";import{P as E}from"./PatrocinadorStore-B4ClzQGp.js";import{_ as P}from"./FormComponent.vue_vue_type_script_setup_true_lang-Capoe3EF.js";const R={class:"row"},T={class:"col col-auto"},V={class:"form-group"},I={class:"custom-control custom-switch custom-switch-off-danger custom-switch-on-success",stye:{margin:"0 0 250px 0"}},B={class:"custom-control-label",for:"customSwitch3"},S={key:0,class:"col"},$=p({__name:"UpdateComponent",setup(b){const a=E(),i=k();let r=Number(i.currentRoute.value.params.NIT);const s=d({}),l=d(!1);g(async()=>{r&&(s.value=(await a.obtenerPatrocinador(r))[0])});const v=async()=>{await x("¿Está seguro de borrar este registro?","Esta acción no se puede deshacer",()=>{a.eliminarPatrocinador(r),i.push({name:"patrocinadores"})})};return(U,o)=>(c(),u("div",R,[t("div",T,[t("h5",null,[o[2]||(o[2]=e("Datos del patrocinador ")),t("button",{type:"button",class:"btn btn-danger",onClick:v},o[1]||(o[1]=[e("Borrar "),t("i",{class:"bi bi-trash"},null,-1)]))]),t("div",V,[t("div",I,[_(t("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch3","onUpdate:modelValue":o[0]||(o[0]=f=>l.value=f)},null,512),[[w,l.value]]),t("label",B,n(l.value?"Deshabilitar edición":"Habilitar edición"),1)])]),t("p",null,[o[3]||(o[3]=t("strong",null,"NIT: ",-1)),e(n(s.value.NIT),1)]),t("p",null,[o[4]||(o[4]=t("strong",null,"Razón social: ",-1)),e(n(s.value.nombre),1)]),t("p",null,[o[5]||(o[5]=t("strong",null,"Dirección: ",-1)),e(n(s.value.direccion),1)]),t("p",null,[o[6]||(o[6]=t("strong",null,"Ciudad: ",-1)),e(n(s.value.ciudad),1)]),t("p",null,[o[7]||(o[7]=t("strong",null,"Teléfono: ",-1)),e(n(s.value.telefono),1)]),t("p",null,[o[8]||(o[8]=t("strong",null,"Correo: ",-1)),e(n(s.value.correo),1)])]),l.value?(c(),u("div",S,[m(P,{data:s.value},null,8,["data"])])):N("",!0)]))}}),M={class:"col col-lg-auto"},j=p({__name:"UpdateView",setup(b){const a=[{text:"Cancelar",icon:"bi bi-x",link:"/patrocinadores",class:"btn btn-sm btn-danger",type:"link"}];return h(),(i,r)=>(c(),u("div",M,[m(C,{title:"Actualizar Patrocinador",icon:y(D),component:$,buttons:a,header:"Patrocinadores"},null,8,["icon"])]))}});export{j as default};
