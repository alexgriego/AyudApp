import{d as m,B as p,r as _,a as i,e,w as b,v as g,t as a,b as h,f as w,g as D,h as x,s as B,o as c,R as y,u as E,_ as k,A as N}from"./index-BVfVY_0g.js";import{_ as R}from"./FormComponent.vue_vue_type_script_setup_true_lang-KMFsQ3yd.js";const C={class:"card"},V={class:"card-body"},A={class:"card-title mt-2 mb-2"},S={class:"row"},$=e("div",{class:"col col-lg-6"},[e("h5",null,"Datos del beneficiario")],-1),M={class:"col"},F={class:"flex flex-row"},I={class:"form-group"},q={class:"custom-control custom-switch custom-switch-off-danger custom-switch-on-success",stye:{margin:"0 0 250px 0"}},H={class:"custom-control-label",for:"customSwitch3"},T={class:"card-text"},U={class:"row"},j={class:"col"},z={key:0,class:"col"},G=m({__name:"DetailComponent",setup(f){const n=async()=>{await D("¿Está seguro?","Tenga en cuenta que este proceso no se puede deshacer",()=>{o.eliminarBeneficiario(r),B("Registro eliminado","El registro ha sido eliminado correctamente"),l.push({name:"beneficiarios"})})},o=p(),l=x(),t=_(!1),r=Number(l.currentRoute.value.params.identificacion),s=_({});return(async()=>{await o.obtenerBeneficiario(r).then(d=>{s.value=d[0]})})(),(d,u)=>(c(),i("div",C,[e("div",V,[e("div",A,[e("div",S,[$,e("div",M,[e("div",F,[e("div",I,[e("div",q,[b(e("input",{type:"checkbox",class:"custom-control-input",id:"customSwitch3","onUpdate:modelValue":u[0]||(u[0]=v=>t.value=v)},null,512),[[g,t.value]]),e("label",H,a(t.value?"Deshabilitar edición":"Habilitar edición"),1)])]),e("div",{class:"form-group"},[e("button",{class:"btn btn-danger",onClick:n},"Eliminar")])])])])]),e("div",T,[e("div",U,[e("div",j,[e("p",null,"Identificación: "+a(s.value.identificacion),1),e("p",null,"Nombre: "+a(s.value.nombre),1),e("p",null,"Apellido: "+a(s.value.apellido),1),e("p",null,"Edad: "+a(s.value.edad),1),e("p",null,"Fecha de nacimiento: "+a(s.value.fecha_nacimiento),1),e("p",null,"Estado civil: "+a(s.value.estado_civil),1),e("p",null,"Fecha de creación: "+a(s.value.created_at),1)]),t.value?(c(),i("div",z,[h(R,{data:s.value},null,8,["data"])])):w("",!0)])])])]))}}),J={class:"col col-auto"},P=m({__name:"BeneficiariosDetailView",setup(f){return y(),(n,o)=>(c(),i("div",J,[h(k,{icon:E(N),header:"Datos de beneficiario",title:"Datos de beneficiario",buttons:null,component:G},null,8,["icon"])]))}});export{P as default};