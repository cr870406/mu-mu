import{d as y,u as r,s as f,b as c}from"./homepage-ce892470.js";import{r as n}from"./_plugin-vue_export-helper-4f0f36be.js";const u="https://vue3-course-api.hexschool.io/v2",i="woodbox",x=y("checkout",()=>{const{getCart:s}=r(),{cartData:e,totlaPrice:a}=f(r()),l=n({name:"",email:"",tel:"",address:"",pay:"信用卡",text:""}),d=n();return{plus:(t,o)=>{switch(o){case"plus":t.qty++;break;case"minus":t.qty==1?t.qty==1:t.qty--;break}const p={product_id:t.id,qty:t.qty};c.put(`${u}/api/${i}/cart/${t.id}`,{data:p}).then(h=>{console.log(h),s(),sessionStorage.setItem("cartList",JSON.stringify(e.value)),sessionStorage.setItem("totlaPrice",JSON.stringify(a.value))})},cartData:e,totlaPrice:a,delCart:t=>{c.delete(`${u}/api/${i}/cart/${t.id}`).then(o=>{s()})},userData:l,orderNum:d}});export{x as u};
