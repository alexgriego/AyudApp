import{d as v,r as l,I as D,i as g,a as r,e as t,w as x,v as k,t as c,k as _,b as p,f as y,F as C,h as V,o as d,R as E,u as m,_ as N,E as R}from"./index-DjIril7E.js";import{_ as S}from"./FormComponent.vue_vue_type_script_setup_true_lang-BF47zVO1.js";import"./PatrocinadorStore-7DiMuhmn.js";const $={class:"row"},B={class:"col"},I={class:"flex flex-row"},A={class:"form-group"},F={class:"custom-control custom-switch custom-switch-off-danger custom-switch-on-success",stye:{margin:"0 0 250px 0"}},M={class:"custom-control-label",for:"customSwitch3"},H={class:"row"},L={class:"col"},P={class:"card"},T={class:"card-body"},U={class:"card-text"},j={key:0,class:"col"},q=v({__name:"DetailComponent",setup(h){const s=l(!1),a=V(),n=D();let f=a.currentRoute.value.params.id;const e=l({}),u=l(""),b=async()=>{console.log(e.value.id),await n.eliminarDinero(e.value.id),a.push({name:"economia"})};return g(async()=>{var i;e.value=(await n.obtenerDinero(f))[0],u.value=((i=e.value.patrocinador)==null?void 0:i.toString())??null}),(i,o)=>(d(),r(C,null,[t("div",$,[o[1]||(o[1]=t("div",{class:"col"},[t("h5",null,"Detalles de donación")],-1)),t("div",B,[t("div",I,[t("div",A,[t("div",F,[x(t("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch3","onUpdate:modelValue":o[0]||(o[0]=w=>s.value=w)},null,512),[[k,s.value]]),t("label",M,c(s.value?"Deshabilitar edición":"Habilitar edición"),1)])]),t("div",{class:"form-group"},[t("button",{class:"btn btn-danger",onClick:b},"Eliminar")])])])]),t("div",H,[t("div",L,[t("div",P,[t("div",T,[t("div",U,[t("p",null,[o[2]||(o[2]=t("strong",null,"Patrocinador: ",-1)),_(c(u.value),1)]),t("p",null,[o[3]||(o[3]=t("strong",null,"Cantidad: ",-1)),_("$ "+c(e.value.cantidad),1)])])])])]),s.value?(d(),r("div",j,[p(S,{data:e.value},null,8,["data"])])):y("",!0)])],64))}}),z={class:"col col-auto"},O=v({__name:"DetailView",setup(h){let s=[{text:"Atrás",icon:"bi bi-arrow-left",link:"/inventario/dineros",class:"btn btn-sm btn-secondary",type:"link"}];return E(),(a,n)=>(d(),r("div",z,[p(N,{title:"Detalle de Dividendo",buttons:m(s),icon:m(R),header:"Detalle de Dividendo",component:q},null,8,["buttons","icon"])]))}});export{O as default};
