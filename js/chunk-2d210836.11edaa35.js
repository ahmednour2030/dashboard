(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210836"],{b7e0:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-card",{ref:"cardAction",attrs:{title:"انشاء المصانع"}},[a("form-wizard",{staticClass:"mb-3",attrs:{color:"#F8CF01",title:null,subtitle:null,shape:"square","finish-button-text":"ارسال","next-button-text":"التالي","back-button-text":"السابق"},on:{"on-complete":e.formSubmitted}},[a("tab-content",{attrs:{title:"تفاصيل الشركة","before-change":e.validationForm}},[a("validation-observer",{ref:"accountRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[a("h5",{staticClass:"mb-0"},[e._v(" بيانات صاحب الشركة ")]),a("small",{staticClass:"text-muted"},[e._v(" من فضلك قم بادخال بيانات الشركة. ")])]),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"الاسم","label-for":"name"}},[a("validation-provider",{attrs:{name:"الاسم",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"name",state:!(r.length>0)&&null,placeholder:"اكتب الاسم"},model:{value:e.company.name,callback:function(t){e.$set(e.company,"name",t)},expression:"company.name"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"البريد الالكتروني","label-for":"email"}},[a("validation-provider",{attrs:{name:"email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"email",type:"email",state:!(r.length>0)&&null,placeholder:"البريد الالكتروني"},model:{value:e.company.email,callback:function(t){e.$set(e.company,"email",t)},expression:"company.email"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"الهاتف","label-for":"phone"}},[a("validation-provider",{attrs:{name:"phone",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"phone",state:!(r.length>0)&&null,placeholder:"رقم الهاتف"},model:{value:e.company.phone,callback:function(t){e.$set(e.company,"phone",t)},expression:"company.phone"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"كلمة المرور","label-for":"password"}},[a("validation-provider",{attrs:{name:"Password",vid:"Password",rules:e.companyId?"":"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"password",type:"password",state:!(r.length>0)&&null,placeholder:"كلمة المرور"},model:{value:e.company.password,callback:function(t){e.$set(e.company,"password",t)},expression:"company.password"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"تاكيد كلمة المرور","label-for":"c-password"}},[a("validation-provider",{attrs:{name:"Password Confirm",rules:e.companyId?"":"required|confirmed:Password"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"c-password",type:"password",state:!(r.length>0)&&null,placeholder:"تاكيد كلمة المرور"},model:{value:e.passwordCon,callback:function(t){e.passwordCon=t},expression:"passwordCon"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1)],1)],1)],1),a("tab-content",{attrs:{title:"بيانات الشركة","before-change":e.validationFormInfo}},[a("validation-observer",{ref:"infoRules",attrs:{tag:"form"}},[a("b-row",[a("b-col",{staticClass:"mb-2",attrs:{cols:"12"}},[a("h5",{staticClass:"mb-0"},[e._v(" بيانات الشركة ")]),a("small",{staticClass:"text-muted"},[e._v("استكمال البيانات وكتابة بيانات الشركة.")])]),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"الموقع االالكتروني","label-for":"website"}},[a("validation-provider",{attrs:{name:"website",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"website",placeholder:"الموقع الالكتروني",state:!(r.length>0)&&null},model:{value:e.company.website,callback:function(t){e.$set(e.company,"website",t)},expression:"company.website"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"اسم التصنيف","label-for":"category"}},[a("validation-provider",{attrs:{name:"category",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-select",{attrs:{id:"category",placeholder:"اختار التصنيف","value-field":"id","text-field":"name",options:e.categoryOption,state:!(r.length>0)&&null},model:{value:e.company.category_id,callback:function(t){e.$set(e.company,"category_id",t)},expression:"company.category_id"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"اسم المنطقة","label-for":"country"}},[a("validation-provider",{attrs:{name:"country",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-select",{attrs:{id:"country",placeholder:"اختار المنطقة","value-field":"id","text-field":"name",options:e.countryOptions,state:!(r.length>0)&&null},on:{change:e.changeGov},model:{value:e.company.country_id,callback:function(t){e.$set(e.company,"country_id",t)},expression:"company.country_id"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"3"}},[a("b-form-group",{attrs:{label:"اسم المدينة","label-for":"city"}},[a("validation-provider",{attrs:{name:"city",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-select",{attrs:{id:"city",placeholder:"اختار المدينة","value-field":"id","text-field":"name",options:e.cityOptions,disabled:0===e.cityOptions.length,state:!(r.length>0)&&null},model:{value:e.company.city_id,callback:function(t){e.$set(e.company,"city_id",t)},expression:"company.city_id"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"رقم الهاتف المباشر","label-for":"landline_number"}},[a("validation-provider",{attrs:{name:"landline_number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"landline_number",state:!(r.length>0)&&null,placeholder:"رقم الهاتف المباشر"},model:{value:e.company.landline_number,callback:function(t){e.$set(e.company,"landline_number",t)},expression:"company.landline_number"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"اسم الموظف المباشر","label-for":"direct_employee_name"}},[a("validation-provider",{attrs:{name:"direct_employee_name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"direct_employee_name",placeholder:"اسم الموظف المباشر",state:!(r.length>0)&&null},model:{value:e.company.direct_employee_name,callback:function(t){e.$set(e.company,"direct_employee_name",t)},expression:"company.direct_employee_name"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"رقم هاتف الموظف المباشر","label-for":"direct_employee_phone"}},[a("validation-provider",{attrs:{name:"direct_employee_phone",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"direct_employee_phone",placeholder:"رقم هاتف الموظف المباشر",state:!(r.length>0)&&null},model:{value:e.company.direct_employee_number,callback:function(t){e.$set(e.company,"direct_employee_number",t)},expression:"company.direct_employee_number"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"سجل الشركة","label-for":"commercial_register"}},[a("validation-provider",{attrs:{name:"commercial_register",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"commercial_register",state:!(r.length>0)&&null,placeholder:"سجل الشركة"},model:{value:e.company.commercial_register,callback:function(t){e.$set(e.company,"commercial_register",t)},expression:"company.commercial_register"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"صورة سجل الشركة","label-for":"commercial_register_image"}},[a("validation-provider",{attrs:{name:"commercial_register_image",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-file",{attrs:{id:"commercial_register_image",type:"image",state:!(r.length>0)&&null,placeholder:"صورة سجل الشركة"},on:{change:e.filecompany},model:{value:e.company.commercial_register_image,callback:function(t){e.$set(e.company,"commercial_register_image",t)},expression:"company.commercial_register_image"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"صورة خطاب الشركة","label-for":"letter_image"}},[a("validation-provider",{attrs:{name:"letter_image",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-file",{attrs:{id:"letter_image",state:!(r.length>0)&&null,placeholder:"صورة خطاب الشركة"},on:{change:e.fileLetter},model:{value:e.company.letter_image,callback:function(t){e.$set(e.company,"letter_image",t)},expression:"company.letter_image"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{attrs:{label:"العنوان","label-for":"address"}},[a("validation-provider",{attrs:{name:"address",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors;return[a("b-form-input",{attrs:{id:"address",state:!(r.length>0)&&null,placeholder:"العنوان"},model:{value:e.company.address,callback:function(t){e.$set(e.company,"address",t)},expression:"company.address"}}),a("small",{staticClass:"text-danger"},[e._v(e._s(r[0]))])]}}])})],1)],1)],1)],1)],1)],1)],1)],1)},o=[],n=(a("159b"),a("b64b"),a("d3b7"),a("b0c0"),a("2ee4")),l=a("7bb1"),s=a("223c"),i=(a("da93"),a("205f")),c=a("c43f"),d=a("a15b"),m=a("b28b"),u=a("8226"),p=a("4797"),f=a("8361"),b=a("8f03"),y={ar:{names:{email:"البريد الاليكتروني",phone:"رقم الهاتف",Password:"كلمة السر","Password Confirm":"تاكيد كلمة المرور",website:"الموقع الالكتروني",country:"المنطقة",landline_number:"الرقم المباشر",direct_employee_name:"اسم الموظف المباشر",direct_employee_phone:"رقم هاتف الموظف المباشر",commercial_register:"سجل الشركة",commercial_register_image:"صورة سجل الشركة",letter_image:"صورة الخطاب",address:"العنوان",city:"المدينة",category:"التصنيف"}}};Object(l["d"])("ar",y.ar);var _={name:"Createcompany",components:{ValidationProvider:l["b"],ValidationObserver:l["a"],FormWizard:n["FormWizard"],BCard:i["a"],BFormFile:c["a"],TabContent:n["TabContent"],BRow:d["a"],BCol:m["a"],BFormGroup:u["a"],BFormInput:p["a"],BFormSelect:f["a"],ToastificationContent:s["a"]},data:function(){return{company_file:null,letter_file:null,countryOptions:[],cityOptions:[],categoryOption:[],passwordCon:"",company:{name:"",email:"",phone:"",country:"",city:"",category_id:"",password:"",lat:"0.745",lng:"0.54",website:"",landline_number:"",direct_employee_name:"",direct_employee_number:"",commercial_register:"",commercial_register_image:null,letter_image:null,address:""},required:b["c"],email:b["a"],locale:"ar"}},computed:{companyId:function(){return this.$route.params.id?this.$route.params.id:null}},created:function(){var e=this;this.$store.dispatch("common/FETCH_GOV").then((function(t){e.countryOptions=t.data.data.governorates})),this.$store.dispatch("categories/fetch").then((function(t){e.categoryOption=t.data.data})),this.companyId&&this.getcompany()},methods:{filecompany:function(e){this.company_file=e.target.files[0]},fileLetter:function(e){this.letter_file=e.target.files[0]},changeGov:function(e){var t=this;this.$store.dispatch("common/FETCH_CITY",e).then((function(e){t.cityOptions=e.data.data.cities}))},formSubmitted:function(){var e=this,t=new FormData;Object.keys(this.company).forEach((function(a){return t.append(a,e.company[a])})),this.companyId?(t.append("user_id",this.company.user.id),this.$store.dispatch("company/update",t).then((function(){e.$toast({component:s["a"],props:{title:"تم تعديل الشركة بنجاح",icon:"EditIcon",variant:"success"}})}))):this.$store.dispatch("company/store",t).then((function(){e.$toast({component:s["a"],props:{title:"تم إضافة الشركة بنجاح",icon:"EditIcon",variant:"success"}})}))},validationForm:function(){var e=this;return new Promise((function(t,a){e.$refs.accountRules.validate().then((function(e){e?t(!0):a()}))}))},validationFormInfo:function(){var e=this;return new Promise((function(t,a){e.$refs.infoRules.validate().then((function(e){e?t(!0):a()}))}))},getcompany:function(){var e=this;this.$store.dispatch("company/fetchByID",this.companyId).then((function(t){e.company=t.data.data;var a=t.data.data.company;for(var r in a)e.company[r]=a[r];e.company.name=t.data.data.user.name,e.company.email=t.data.data.user.email,e.company.phone=t.data.data.user.phone,e.company.country_id=t.data.data.user.governorate.id,e.company.city_id=t.data.data.user.city.id,e.$store.dispatch("common/FETCH_CITY",t.data.data.user.governorate.id).then((function(t){e.cityOptions=t.data.data.cities}))}))}}},v=_,g=a("2877"),h=Object(g["a"])(v,r,o,!1,null,"8f88197a",null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d210836.11edaa35.js.map