import{_ as f,r as l,o as h,a as g,b as c,c as d,F as u,h as y,d as a,e as r,w as v,t as b,u as m,p as k,i as I,n as $,ab as S}from"./_plugin-vue_export-helper-594ccfd1.js";import{a as B}from"./vue-router-a4eca712.js";import{u as N}from"./homepage-18187800.js";const P=o=>(k("data-v-fa1b7a2b"),o=o(),I(),o),T={class:"pic"},Y=["src"],C={class:"text d-flex flex-column justify-content-end py-3"},E={class:"title"},z={class:"fs-6 fw-light small",style:{"white-space":"pre-wrap"}},L={class:"my-0 my-sm-5"},V=P(()=>a("i",{class:"fa-solid fa-chevron-up fa-2xl"},null,-1)),D=[V],F={__name:"inspirationPage",setup(o){const n="https://vue3-course-api.hexschool.io/v2",s="woodbox",e=l(),_=l(0),w=()=>{B.get(`${n}/api/${s}/products?category=靈感`).then(i=>{e.value=i.data.products,console.log(e.value)})};h(()=>{w()}),window.addEventListener("scroll",function(i){_.value=window.scrollY});const x=()=>{document.documentElement.scrollTop=document.body.scrollTop=0};return(i,O)=>{const p=g("router-link");return c(),d(u,null,[(c(!0),d(u,null,y(m(e),t=>(c(),d("div",{class:"col-12 d-sm-flex total",key:t.id,"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1500"},[a("div",T,[r(p,{to:`/inside/${t.id}`},{default:v(()=>[a("img",{src:t.imageUrl,class:"w-100"},null,8,Y)]),_:2},1032,["to"])]),a("div",C,[a("div",E,[r(p,{to:`/inside/${t.id}`,class:"text-decoration-none"},{default:v(()=>[a("span",z,b(t.unit),1),a("h3",L,b(t.title),1)]),_:2},1032,["to"])])])]))),128)),a("div",{class:"col-12 d-flex flex-row-reverse pe-5 pb-3"},[a("a",{onClick:x,role:"button"},D)])],64)}}},j=f(F,[["__scopeId","data-v-fa1b7a2b"]]);const A=S('<div class="container header" data-v-a7cbdcbd><div class="row" data-v-a7cbdcbd><div class="col-12 d-flex position-relative pt-5" data-v-a7cbdcbd><div class="title mx-auto text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="2000" data-v-a7cbdcbd><h1 class="mb-0" data-v-a7cbdcbd>INSPIRATION</h1><p class="fs-3" data-v-a7cbdcbd>靈感</p></div></div><div class="col-12 d-flex py-5" data-v-a7cbdcbd><div class="mx-auto text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="300" data-aos-duration="2000" data-v-a7cbdcbd><h2 class="fs-3" data-v-a7cbdcbd>一切隨心，用心去感悟空間</h2><h3 class="fs-6 fw-light lh-lg pt-3" data-v-a7cbdcbd> 將設計與空間融合，<br data-v-a7cbdcbd> 用大眾化且簡單的方式融入我們所居住的空間中，<br data-v-a7cbdcbd> 設計源於生活，生活因設計而改變，成就空間和諧，<br data-v-a7cbdcbd> 讓設計物有所值，讓細節締造完美。 </h3></div></div></div></div>',1),H={class:"container-fluid"},M={__name:"inspiration",setup(o){const{check:n}=N(),s=l("gray");return window.addEventListener("scroll",function(e){window.scrollY>2800?s.value="lightBlue":window.scrollY>1900?s.value="darkBlue":window.scrollY>1e3?s.value="brown":window.scrollY<500&&(s.value="gray")}),h(()=>{n(3)}),(e,_)=>(c(),d("div",{class:$(m(s)),id:"top"},[A,a("div",H,[r(j)])],2))}},G=f(M,[["__scopeId","data-v-a7cbdcbd"]]);export{G as default};
