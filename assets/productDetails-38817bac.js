import{v as C}from"./runtime-dom.esm-bundler-d8961509.js";import{u as v}from"./productSeries-5ae04d14.js";import{s as $,e as T}from"./homepage-8f13503f.js";import{_ as D,a6 as N,o as S,a as B,b as n,c as r,d as s,e as I,w as M,t as c,u as t,F as _,h,a5 as P,M as V,f as R,p as U,i as F}from"./_plugin-vue_export-helper-4f0f36be.js";const u=d=>(U("data-v-0e0fc9b0"),d=d(),F(),d),L={class:"back"},E={class:"container pt-5"},Q={class:"row"},Y={class:"col-12"},j={"aria-label":"breadcrumb"},q={class:"breadcrumb"},z={class:"breadcrumb-item"},A={class:"breadcrumb-item"},G={class:"breadcrumb-item active text-black-50","aria-current":"page"},H={class:"col-6 pe-5"},J={class:"pic"},K=["src"],O={class:"row pt-3"},W=["onClick"],X=["src"],Z={class:"col-6 ps-5"},ss={class:"mb-4 fs-4"},ts={style:{"white-space":"pre-wrap"},class:"fs-5 lh-base fw-light"},es={style:{"white-space":"pre-wrap"},class:"fs-6 mt-4 fw-light"},os={class:"input-group my-4"},as={class:"rounded-circle minus"},ls=u(()=>s("i",{class:"fa fa-minus"},null,-1)),cs=[ls],is={class:"rounded-circle plus"},ns=u(()=>s("i",{class:"fa fa-plus"},null,-1)),rs=[ns],ds=u(()=>s("div",{class:"col-12 pt-5"},[s("h4",{class:"mb-0 likeTitle"},"You may also like")],-1)),us={class:"text-center p-5"},_s={class:"like",role:"button"},ps=["onClick"],bs=["src"],ms={class:"fs-6 pt-2 mb-1"},vs={class:"mb-4 fs-6"},hs=u(()=>s("div",{class:"toast align-items-center position-fixed top-0 start-50 translate-middle-x mt-5",role:"alert","aria-live":"assertive","aria-atomic":"true",id:"toast"},[s("div",{class:"d-flex"},[s("div",{class:"toast-body fw-light"},"已加入購物車"),s("button",{type:"button",class:"btn-close me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close"})])],-1)),fs={__name:"productDetails",setup(d){const{details:p,addCart:f,buy:k}=v(),{productQuantity:l,alosLike:y,productPage:a,mainPic:b}=$(v());N(()=>{p(T().params.id)}),S(()=>{console.log(a.value)});const g=i=>{b.value=i},m=i=>{switch(i){case"plus":l.value++;break;case"minus":if(l.value<=1)return l.value=1;l.value--;break}};return(i,o)=>{const w=B("router-link");return n(),r(_,null,[s("div",L,[s("div",E,[s("div",Q,[s("div",Y,[s("nav",j,[s("ol",q,[s("li",z,[I(w,{to:"/product",class:"text-decoration-none text-black"},{default:M(()=>[R("產品系列")]),_:1})]),s("li",A,[s("a",{href:"#",class:"text-decoration-none text-black",onClick:o[0]||(o[0]=e=>i.$router.go(-1))},c(t(a).category),1)]),s("li",G,c(t(a).title),1)])])]),s("div",H,[s("div",J,[s("img",{src:t(b),class:"w-100"},null,8,K)]),s("div",O,[(n(!0),r(_,null,h(t(a).imagesUrl,e=>(n(),r("div",{class:"col-4 pb-3",key:e},[s("div",{class:"pic",role:"button",onClick:x=>g(e)},[s("img",{src:e,class:"w-100"},null,8,X)],8,W)]))),128))])]),s("div",Z,[s("h3",null,c(t(a).title),1),s("h3",ss,"NT$"+c(t(a).price),1),s("h3",ts,c(t(a).content),1),s("p",es,c(t(a).description),1),s("div",os,[s("span",as,[s("button",{type:"button",class:"btn",onClick:o[1]||(o[1]=e=>m("minus"))},cs)]),P(s("input",{class:"text",type:"number",min:"1","onUpdate:modelValue":o[2]||(o[2]=e=>V(l)?l.value=e:null)},null,512),[[C,t(l)]]),s("span",is,[s("button",{type:"button",class:"btn",onClick:o[3]||(o[3]=e=>m("plus"))},rs)])]),s("button",{type:"button",class:"put buy me-1",onClick:o[4]||(o[4]=e=>t(k)(t(a),t(l)))}," 直接購買 "),s("button",{type:"button",class:"put cart ms-1",onClick:o[5]||(o[5]=e=>t(f)(t(a),t(l)))}," 加入購物車 ")]),ds,(n(!0),r(_,null,h(t(y),e=>(n(),r("div",{class:"col-3",key:e.id},[s("div",us,[s("div",_s,[s("a",{onClick:x=>t(p)(e.id)},[s("img",{src:e.imageUrl,class:"w-100"},null,8,bs)],8,ps)]),s("h3",ms,c(e.title),1),s("h3",vs,"NT$"+c(e.price),1)])]))),128))])])]),hs],64)}}},xs=D(fs,[["__scopeId","data-v-0e0fc9b0"]]);export{xs as default};