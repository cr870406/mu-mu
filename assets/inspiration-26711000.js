import{_ as w,i as l,e as g,r as k,o,c as n,u as _,f as I,F as f,g as $,a,b as u,w as h,t as m,p as N,h as S,n as Y,Y as B}from"./_plugin-vue_export-helper-588b1552.js";import{a as C}from"./vue-router-293c88b6.js";import{u as P}from"./homepage-37ed9f2e.js";const x=e=>(N("data-v-ebba3178"),e=e(),S(),e),T={key:0,class:"load"},E=x(()=>a("i",{class:"fa-regular fa-image fa-2x fa-fade m-auto",style:{color:"#fff","--fa-animation-duration":"2s","--fa-fade-opacity":"0.1"}},null,-1)),V=[E],z={class:"pic"},L=["src"],D={class:"text d-flex flex-column justify-content-end py-3"},F={class:"title"},j={class:"fs-6 fw-light small",style:{"white-space":"pre-wrap"}},A={class:"my-0 my-sm-5"},H=x(()=>a("i",{class:"fa-solid fa-chevron-up fa-2xl"},null,-1)),M=[H],O={__name:"inspirationPage",setup(e){const c="https://vue3-course-api.hexschool.io/v2",s="woodbox",i=l(),p=l(0),d=l(!1),y=()=>{d.value=!0,C.get(`${c}/api/${s}/products?category=靈感`).then(r=>{i.value=r.data.products,d.value=!1})};g(()=>{y()}),window.addEventListener("scroll",function(r){p.value=window.scrollY});const b=()=>{document.documentElement.scrollTop=document.body.scrollTop=0};return(r,J)=>{const v=k("router-link");return o(),n(f,null,[_(d)?(o(),n("div",T,V)):I("",!0),(o(!0),n(f,null,$(_(i),t=>(o(),n("div",{class:"col-12 d-sm-flex total",key:t.id,"data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1500"},[a("div",z,[u(v,{to:`/inside/${t.id}`},{default:h(()=>[a("img",{src:t.imageUrl,class:"w-100"},null,8,L)]),_:2},1032,["to"])]),a("div",D,[a("div",F,[u(v,{to:`/inside/${t.id}`,class:"text-decoration-none"},{default:h(()=>[a("span",j,m(t.unit),1),a("h3",A,m(t.title),1)]),_:2},1032,["to"])])])]))),128)),a("div",{class:"col-12 d-flex flex-row-reverse pe-5 pb-3"},[a("a",{onClick:b,role:"button"},M)])],64)}}},R=w(O,[["__scopeId","data-v-ebba3178"]]);const U=B('<div class="container header" data-v-4898aaa3><div class="row" data-v-4898aaa3><div class="col-12 d-flex position-relative pt-5" data-v-4898aaa3><div class="title mx-auto text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-duration="1000" data-v-4898aaa3><h1 class="mb-0" data-v-4898aaa3>INSPIRATION</h1><p class="fs-3" data-v-4898aaa3>靈感</p></div></div><div class="col-12 d-flex py-5" data-v-4898aaa3><div class="mx-auto text-center" data-aos="fade-zoom-in" data-aos-easing="ease-in" data-aos-delay="600" data-aos-duration="1000" data-v-4898aaa3><h2 class="fs-3" data-v-4898aaa3>一切隨心，用心去感悟空間</h2><h3 class="fs-6 fw-light lh-lg pt-3" data-v-4898aaa3> 將設計與空間融合，<br data-v-4898aaa3> 用大眾化且簡單的方式融入我們所居住的空間中，<br data-v-4898aaa3> 設計源於生活，生活因設計而改變，成就空間和諧，<br data-v-4898aaa3> 讓設計物有所值，讓細節締造完美。 </h3></div></div></div></div>',1),q={class:"container-fluid"},G={__name:"inspiration",setup(e){const{check:c}=P(),s=l("gray");return window.addEventListener("scroll",function(i){window.scrollY>2800?s.value="lightBlue":window.scrollY>1900?s.value="darkBlue":window.scrollY>1e3?s.value="brown":window.scrollY<500&&(s.value="gray")}),g(()=>{c(3)}),(i,p)=>(o(),n("div",{class:Y(_(s)),id:"top"},[U,a("div",q,[u(R)])],2))}},X=w(G,[["__scopeId","data-v-4898aaa3"]]);export{X as default};
