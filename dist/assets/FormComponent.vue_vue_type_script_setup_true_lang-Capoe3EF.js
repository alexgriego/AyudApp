import{d as v,r as b,i as f,a as _,e as o,k as s,w as l,n as i,q as I,h as q,o as N}from"./index-BKthAEvq.js";import{P as T}from"./PatrocinadorStore-B4ClzQGp.js";const x={class:"row"},g={class:"col"},y={class:"form-group"},V=["required"],w={class:"col"},U={class:"form-group"},P=["required"],C={class:"row"},k={class:"col"},B={class:"form-group"},M=["required"],R={class:"col"},S={class:"form-group"},z=["required"],D={class:"col"},h={class:"form-group"},E=["required"],F={class:"col"},j={class:"form-group"},A=["required"],K=v({__name:"FormComponent",props:{data:{}},setup(m){let a=q().currentRoute.value.params.NIT;const d=T(),u=m,t=b({});f(()=>{u.data&&(t.value=u.data)});const n=c=>{const e=c.target;t.value={...t.value,[e.name]:e.value}},p=async()=>{a?await d.actualizarPatrocinador(Number(a),t.value):await d.crearPatrocinador(t.value)};return(c,e)=>(N(),_("form",{onSubmit:I(p,["prevent"])},[o("div",x,[o("div",g,[o("div",y,[e[6]||(e[6]=o("label",{for:"NIT"},[s("Identificacón "),o("i",{class:"bi bi-123"})],-1)),l(o("input",{type:"text",class:"form-control form-control-border",id:"NIT",name:"NIT",onInput:n,"onUpdate:modelValue":e[0]||(e[0]=r=>t.value.NIT=r),required:!t.value.NIT},null,40,V),[[i,t.value.NIT]])])]),o("div",w,[o("div",U,[e[7]||(e[7]=o("label",{for:"nombre"},[s("Razón social "),o("i",{class:"bi bi-card-text"})],-1)),l(o("input",{type:"text",class:"form-control form-control-border",id:"nombre",name:"nombre",onInput:n,"onUpdate:modelValue":e[1]||(e[1]=r=>t.value.nombre=r),required:!t.value.nombre},null,40,P),[[i,t.value.nombre]])])])]),o("div",C,[o("div",k,[o("div",B,[e[8]||(e[8]=o("label",{for:"direccion"},[s("Direccion "),o("i",{class:"bi bi-geo"})],-1)),l(o("input",{type:"text",class:"form-control form-control-border",id:"direccion",name:"direccion",onInput:n,"onUpdate:modelValue":e[2]||(e[2]=r=>t.value.direccion=r),required:!t.value.NIT},null,40,M),[[i,t.value.direccion]])])]),o("div",R,[o("div",S,[e[9]||(e[9]=o("label",{for:"ciudad"},[s("Ciudad "),o("i",{class:"bi bi-map"})],-1)),l(o("input",{type:"text",class:"form-control form-control-border",id:"ciudad",name:"ciudad",onInput:n,"onUpdate:modelValue":e[3]||(e[3]=r=>t.value.ciudad=r),required:!t.value.ciudad},null,40,z),[[i,t.value.ciudad]])])]),o("div",D,[o("div",h,[e[10]||(e[10]=o("label",{for:"telefono"},[s("Teléfono "),o("i",{class:"bi bi-phone"})],-1)),l(o("input",{type:"text",class:"form-control form-control-border",id:"telefono",name:"telefono",onInput:n,"onUpdate:modelValue":e[4]||(e[4]=r=>t.value.telefono=r),required:!t.value.telefono},null,40,E),[[i,t.value.telefono]])])]),o("div",F,[o("div",j,[e[11]||(e[11]=o("label",{for:"correo"},[s("Correo electrónico "),o("i",{class:"bi bi-envelope-at"})],-1)),l(o("input",{type:"text",class:"form-control form-control-border",id:"correo",name:"correo",onInput:n,"onUpdate:modelValue":e[5]||(e[5]=r=>t.value.correo=r),required:!t.value.correo},null,40,A),[[i,t.value.correo]])])])]),e[12]||(e[12]=o("button",{type:"submit",class:"btn btn-success"},[s("Procesar "),o("i",{class:"bi bi-save"})],-1))],32))}});export{K as _};