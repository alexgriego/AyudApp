import{d as g,r as q,B as V,i as C,j as U,a as x,e as o,k as s,u,w as a,l as c,m as y,n as r,p as I,q as w,h as D,o as M}from"./index-DjIril7E.js";const z={class:"form-group"},S={class:"input-group input-group mb-3"},B=["required"],E=["required"],P={class:"row"},F={class:"col"},N={class:"form-group"},T=["required"],R={class:"col"},j={class:"form-group"},k=["required"],A={class:"col"},G={class:"form-group"},Y=["required"],L={class:"row"},O={class:"col"},H={class:"form-group"},J={class:"col"},K={class:"form-group"},Q=["required"],W={class:"col"},X={class:"form-group"},Z=["required"],$={class:"row"},h={class:"col"},oo={class:"form-group"},eo=["required"],io={class:"col"},to={class:"form-group"},so=["required"],ao={class:"col"},lo={class:"form-group"},no=["required"],ro={class:"row"},uo={class:"col"},po={class:"form-group"},co={class:"col"},vo={class:"form-group"},mo={class:"col"},fo={class:"form-group"},bo={class:"row"},_o={class:"col"},go={class:"form-group"},qo={class:"col"},Vo={class:"form-group"},Uo=g({__name:"FormComponent",props:{data:{}},setup(f){const b=D(),i=q({}),v=V(),p=f;let l=Number(b.currentRoute.value.params.identificacion);C(()=>{p.data?i.value=p.data:(i.value.tipo_id="CC",i.value.estado_civil="Soltero(a)",i.value.genero="Masculino",i.value.departamento="La Guajira")}),U(()=>{if(l){let d=new Date,e=new Date(i.value.fecha_nacimiento),t=d.getFullYear()-e.getFullYear(),m=d.getMonth()-e.getMonth();(m<0||m===0&&d.getDate()<e.getDate())&&t--,i.value.edad=t}});const n=d=>{d.target.value.includes("es_desplazado")&&(i.value.es_desplazado=!0,i.value.es_victima=!1,i.value.es_discapacitado=!1),d.target.value.includes("es_victima")&&(i.value.es_desplazado=!1,i.value.es_victima=!0,i.value.es_discapacitado=!1),d.target.value.includes("es_discapacitado")&&(i.value.es_desplazado=!1,i.value.es_victima=!1,i.value.es_discapacitado=!0),i.value={...i.value,[d.target.name]:d.target.value}},_=d=>{d.preventDefault(),l?v.actualizarBeneficiario(l,i.value):v.crearBeneficiario(i.value)};return(d,e)=>(M(),x("form",{onSubmit:w(_,["prevent"])},[o("div",z,[e[16]||(e[16]=o("label",{for:"identificacion"},[s("Identificacón "),o("i",{class:"bi bi-person-vcard"})],-1)),o("div",S,[o("div",{class:"input-group-prepend",id:"identificacion",required:!u(l)},[a(o("select",{class:"custom-select","onUpdate:modelValue":e[0]||(e[0]=t=>i.value.tipo_id=t)},e[15]||(e[15]=[y('<option title="Cédulda de ciudadanía">CC</option><option title="Cédula de extrangería">CE</option><option title="Tarjeta de identidad">TI</option><option title="Registro civil">RC</option><option title="Pasaporte">PA</option><option title="Permiso especial de permanencia">PEP</option>',6)]),512),[[c,i.value.tipo_id]])],8,B),a(o("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>i.value.identificacion=t),required:!u(l)},null,8,E),[[r,i.value.identificacion]])])]),o("div",P,[o("div",F,[o("div",N,[e[17]||(e[17]=o("label",{for:"nombre"},[s("Nombre "),o("i",{class:"bi bi-person-badge"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"nombre",name:"nombre",onInput:n,"onUpdate:modelValue":e[2]||(e[2]=t=>i.value.nombre=t),required:!u(l)},null,40,T),[[r,i.value.nombre]])])]),o("div",R,[o("div",j,[e[18]||(e[18]=o("label",{for:"apellido"},[s("Apellido "),o("i",{class:"bi bi-person-badge"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"apellido",name:"apellido",onInput:n,"onUpdate:modelValue":e[3]||(e[3]=t=>i.value.apellido=t),required:!u(l)},null,40,k),[[r,i.value.apellido]])])]),o("div",A,[o("div",G,[e[19]||(e[19]=o("label",{for:"fecha_nacimiento"},[s("Fecha de nacimiento "),o("i",{class:"bi bi-person"})],-1)),a(o("input",{type:"date",class:"form-control form-control-border",id:"fecha_nacimiento",name:"fecha_nacimiento",onInput:n,"onUpdate:modelValue":e[4]||(e[4]=t=>i.value.fecha_nacimiento=t),required:!u(l)},null,40,Y),[[r,i.value.fecha_nacimiento]])])])]),o("div",L,[o("div",O,[o("div",H,[e[20]||(e[20]=o("label",{for:" correo"},[s("Correo "),o("i",{class:"bi bi-envelope"})],-1)),a(o("input",{type:"email",class:"form-control form-control-border",id:"correo",name:"correo",onInput:n,"onUpdate:modelValue":e[5]||(e[5]=t=>i.value.correo=t)},null,544),[[r,i.value.correo]])])]),o("div",J,[o("div",K,[e[21]||(e[21]=o("label",{for:"telefono"},[s("Telefono "),o("i",{class:"bi bi-telephone"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"telefono",name:"telefono",onInput:n,"onUpdate:modelValue":e[6]||(e[6]=t=>i.value.telefono=t),required:!u(l)},null,40,Q),[[r,i.value.telefono]])])]),o("div",W,[o("div",X,[e[22]||(e[22]=o("label",{for:"direccion"},[s("Dirección "),o("i",{class:"bi bi-house"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"direccion",name:"direccion",onInput:n,"onUpdate:modelValue":e[7]||(e[7]=t=>i.value.direccion=t),required:!u(l)},null,40,Z),[[r,i.value.direccion]])])])]),o("div",$,[o("div",h,[o("div",oo,[e[23]||(e[23]=o("label",{for:"ciudad"},[s("Ciudad "),o("i",{class:"bi bi-geo-alt"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"ciudad",name:"ciudad",onInput:n,"onUpdate:modelValue":e[8]||(e[8]=t=>i.value.ciudad=t),required:!u(l)},null,40,eo),[[r,i.value.ciudad]])])]),o("div",io,[o("div",to,[e[24]||(e[24]=o("label",{for:"departamento"},[s("Departamento/Estado "),o("i",{class:"bi bi-geo-alt"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"departamento",name:"departamento",onInput:n,"onUpdate:modelValue":e[9]||(e[9]=t=>i.value.departamento=t),required:!u(l)},null,40,so),[[r,i.value.departamento]])])]),o("div",ao,[o("div",lo,[e[25]||(e[25]=o("label",{for:"pais"},[s("Pais "),o("i",{class:"bi bi-geo-alt"})],-1)),a(o("input",{type:"text",class:"form-control form-control-border",id:"pais",name:"pais",onInput:n,"onUpdate:modelValue":e[10]||(e[10]=t=>i.value.pais=t),required:!u(l)},null,40,no),[[r,i.value.pais]])])])]),o("div",ro,[o("div",uo,[o("div",po,[e[26]||(e[26]=o("label",{for:"edad"},[s("Edad (en años) "),o("i",{class:"bi bi-person"})],-1)),a(o("input",{type:"number",class:"form-control form-control-border",id:"edad",name:"edad",onInput:n,"onUpdate:modelValue":e[11]||(e[11]=t=>i.value.edad=t),disabled:""},null,544),[[r,i.value.edad]])])]),o("div",co,[o("div",vo,[e[28]||(e[28]=o("label",{for:"genero"},[s("Genero "),o("i",{class:"bi bi-person"})],-1)),a(o("select",{class:"custom-select","onUpdate:modelValue":e[12]||(e[12]=t=>i.value.genero=t)},e[27]||(e[27]=[o("option",{value:"Masculino"},"Masculino",-1),o("option",{value:"Femenino"},"Femenino",-1)]),512),[[c,i.value.genero]])])]),o("div",mo,[o("div",fo,[e[30]||(e[30]=o("label",{for:"estado_civil"},[s("Estado civil "),o("i",{class:"bi bi-person"})],-1)),a(o("select",{class:"custom-select","onUpdate:modelValue":e[13]||(e[13]=t=>i.value.estado_civil=t)},e[29]||(e[29]=[o("option",{value:"Soltero(a)"},"Soltero(a)",-1),o("option",{value:"Casado(a)"},"Casado(a)",-1),o("option",{value:"Divorciado(a)"},"Divorciado(a)",-1),o("option",{value:"Viudo(a)"},"Viudo(a)",-1)]),512),[[c,i.value.estado_civil]])])])]),o("div",bo,[o("div",_o,[o("div",go,[e[32]||(e[32]=o("label",{for:"con_especial"},[s("Codición especial"),o("i",{class:"bi bi-person"})],-1)),o("select",{class:"custom-select",onChange:n},e[31]||(e[31]=[o("option",{value:"es_desplazado"},"Desplazado(a)",-1),o("option",{value:"es_victima"},"Víctima",-1),o("option",{value:"es_discapacitado"},"Discapacitado(a)",-1)]),32)])]),o("div",qo,[o("div",Vo,[e[33]||(e[33]=o("label",{for:"observaciones"},[s("Observaciones "),o("i",{class:"bi bi-person"})],-1)),a(o("textarea",{class:"form-control form-control-border",id:"observaciones",name:"observaciones",onInput:n,"onUpdate:modelValue":e[14]||(e[14]=t=>i.value.observaciones=t)},null,544),[[r,i.value.observaciones]])])])]),o("button",{type:"submit",class:I(p.data?"btn btn-warning":"btn btn-primary")},e[34]||(e[34]=[s(" Procesar "),o("i",{class:"bi bi-save"},null,-1)]),2)],32))}});export{Uo as _};
