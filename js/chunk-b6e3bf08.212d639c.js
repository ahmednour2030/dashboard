(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6e3bf08"],{"11de":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("2b0e"),i=r("b42e"),a=r("c637"),o=r("a723"),s=r("cf75"),c=Object(s["d"])({id:Object(s["c"])(o["t"]),inline:Object(s["c"])(o["g"],!1),novalidate:Object(s["c"])(o["g"],!1),validated:Object(s["c"])(o["g"],!1)},a["w"]),l=n["default"].extend({name:a["w"],functional:!0,props:c,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t("form",Object(i["a"])(n,{class:{"form-inline":r.inline,"was-validated":r.validated},attrs:{id:r.id,novalidate:r.novalidate}}),a)}})},4797:function(t,e,r){"use strict";r.d(e,"a",(function(){return x}));var n=r("2b0e"),i=r("c637"),a=r("a723"),o=r("2326"),s=r("906c"),c=r("6b77"),l=r("d82f"),u=r("cf75"),d=r("dde7"),h=r("06d9"),p=r("ad47"),f=r("d520"),b=r("40fc"),m=r("1f1e"),g=r("90ef"),v=r("bc9a");function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function O(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){j(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function j(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var y=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],k=Object(u["d"])(Object(l["m"])(O(O(O(O(O(O({},g["b"]),d["b"]),p["b"]),f["b"]),b["b"]),{},{list:Object(u["c"])(a["t"]),max:Object(u["c"])(a["o"]),min:Object(u["c"])(a["o"]),noWheel:Object(u["c"])(a["g"],!1),step:Object(u["c"])(a["o"]),type:Object(u["c"])(a["t"],"text",(function(t){return Object(o["a"])(y,t)}))})),i["A"]),x=n["default"].extend({name:i["A"],mixins:[v["a"],g["a"],d["a"],p["a"],f["a"],b["a"],h["a"],m["a"]],props:k,computed:{localType:function(){var t=this.type;return Object(o["a"])(y,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,r=this.form,n=this.disabled,i=this.placeholder,a=this.required,o=this.min,s=this.max,c=this.step;return{id:this.safeId(),name:e,form:r,type:t,disabled:n,placeholder:i,required:a,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:o,max:s,step:c,list:"password"!==t?this.list:null,"aria-required":a?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return O(O({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(c["c"])(t,e,"focus",this.onWheelFocus),Object(c["c"])(t,e,"blur",this.onWheelBlur),t||Object(c["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(c["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(c["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(c["f"])(t,{propagation:!1}),Object(s["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},"5ae4":function(t,e,r){"use strict";r("ded4")},"5cce":function(t,e,r){"use strict";r.d(e,"a",(function(){return l}));var n=r("2b0e"),i=r("b42e"),a=r("c637"),o=r("a723"),s=r("cf75"),c=Object(s["d"])({columns:Object(s["c"])(o["g"],!1),deck:Object(s["c"])(o["g"],!1),tag:Object(s["c"])(o["t"],"div")},a["k"]),l=n["default"].extend({name:a["k"],functional:!0,props:c,render:function(t,e){var r=e.props,n=e.data,a=e.children;return t(r.tag,Object(i["a"])(n,{class:r.deck?"card-deck":r.columns?"card-columns":"card-group"}),a)}})},bc91:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{"header-tag":"header",title:""}},[r("validation-observer",{ref:"simpleRules"},[r("b-form",{ref:"form",staticClass:"repeater-form",style:{height:t.trHeight}},[r("b-row",[r("b-col",{attrs:{cols:"7"}},[r("b-form-group",{attrs:{label:"سؤال الاستبيان","label-for":"title"}},[r("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("b-form-input",{attrs:{id:"title",state:!(n.length>0)&&null,placeholder:"اسم الاستبيان"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1)],1),r("b-col",{attrs:{md:"3"}},[r("b-form-group",{attrs:{label:"اخر التصنيف","label-for":"category"}},[r("validation-provider",{attrs:{name:"category",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[r("b-form-select",{attrs:{id:"category",placeholder:"اختار التصنيف","value-field":"id","text-field":"name",options:t.categories,state:!(n.length>0)&&null},model:{value:t.CategoryId,callback:function(e){t.CategoryId=e},expression:"CategoryId"}}),r("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1)],1),r("b-col",{attrs:{cols:"2"}},[r("b-button",{staticClass:"mt-2",attrs:{variant:"primary"},on:{click:function(e){return t.add()}}},[r("feather-icon",{staticClass:"mr-25",attrs:{icon:"PlusIcon"}}),t._v(" إضافة حقل اجابة ")],1)],1),t._l(t.inputs,(function(e,n){return r("b-col",{key:n,ref:"row",refInFor:!0,attrs:{cols:"12"}},[r("hr",{staticClass:"w-100"}),r("b-row",[r("b-col",{attrs:{cols:"md-8"}},[r("b-form-group",{attrs:{label:"إجابة الاستبيان","label-for":"answer"}},[r("validation-provider",{attrs:{name:"answer"+n,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.errors;return[r("b-form-input",{attrs:{id:"answer",name:"answer"+n,state:!(a.length>0)&&null,placeholder:"إجابة الاستبيان"},model:{value:e.answer,callback:function(r){t.$set(e,"answer",r)},expression:"input.answer"}}),r("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)],1),r("b-col",{attrs:{cols:"md-2"}},[r("b-form-group",{attrs:{label:"درجة الاستبيان","label-for":"points"}},[r("validation-provider",{attrs:{name:"points"+n,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var a=i.errors;return[r("b-form-input",{attrs:{id:"points",type:"number",name:"points"+n,state:!(a.length>0)&&null,placeholder:"درجة الاستبيان"},model:{value:e.points,callback:function(r){t.$set(e,"points",r)},expression:"input.points"}}),r("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)],1),r("b-col",{attrs:{cols:"2"}},[r("b-button",{directives:[{name:"show",rawName:"v-show",value:n||!n&&t.inputs.length>1,expression:"k || ( !k && inputs.length > 1)"}],staticClass:"mt-2 btn-sm",attrs:{id:"k",variant:"outline-danger"},on:{click:function(e){return e.stopPropagation(),t.remove(n)}}},[r("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),t._v(" حذف ")],1)],1)],1)],1)})),r("hr",{staticClass:"w-100"})],2)],1),r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-button",{attrs:{variant:"primary",type:"submit"},on:{click:function(e){return e.preventDefault(),t.validationForm(e)}}},[r("feather-icon",{staticClass:"mr-25",attrs:{icon:"EditIcon"}}),t._v(" حفظ تعديلات الاستبيان ")],1)],1)],1)],1)],1)],1)],1)},i=[],a=(r("159b"),r("a434"),r("7bb1")),o=r("8f03"),s=r("205f"),c=r("5cce"),l=r("1947"),u=r("4797"),d=r("8226"),h=r("8361"),p=r("11de"),f=r("a15b"),b=r("b28b"),m=r("223c"),g=r("bf9a"),v={ar:{names:{title:"سؤال الاستبيان",answer:"إجابة الاستبيان",points:"درجة الاستبيان"}}};Object(a["d"])("ar",v.ar);var w={name:"EditQuestionnaire",components:{ValidationProvider:a["b"],ValidationObserver:a["a"],BCard:s["a"],BCardGroup:c["a"],BButton:l["a"],BFormInput:u["a"],BFormGroup:d["a"],BFormSelect:h["a"],BForm:p["a"],BRow:f["a"],BCol:b["a"]},mixins:[g["a"]],data:function(){return{show:!1,CategoryId:null,categories:[],inputs:[],title:"",options:[],required:o["c"],numeric:o["b"]}},mounted:function(){this.initTrHeight()},created:function(){window.addEventListener("resize",this.initTrHeight),this.fetchCategories(),this.fetchData()},destroyed:function(){window.removeEventListener("resize",this.initTrHeight)},methods:{fetchCategories:function(){var t=this;this.$store.dispatch("categories/fetch").then((function(e){t.categories=e.data.data}))},fetchData:function(){var t=this;null!==this.id&&this.$store.dispatch("questionnaire/show",this.$route.params.id).then((function(e){t.obj=e.data.data,t.title=t.obj.title,t.CategoryId=t.obj.category_id,t.obj.options.forEach((function(e){t.inputs.push({answer:e.title,points:e.points}),t.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))}))}))},add:function(){var t=this;this.inputs.push({answer:"",points:""}),this.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))},remove:function(t){this.inputs.splice(t,1),this.trTrimHeight(this.$refs.row[0].offsetHeight)},initTrHeight:function(){var t=this;this.trSetHeight(null),this.$nextTick((function(){t.trSetHeight(t.$refs.form.scrollHeight)}))},validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(e){if(e){var r=new FormData;r.append("questionnaire_id",t.$route.params.id),r.append("category_id",t.CategoryId),r.append("title",t.title),t.inputs.forEach((function(t,e){r.append("options[".concat(e,"][option]"),t.answer),r.append("options[".concat(e,"][point]"),t.points)})),t.$store.dispatch("questionnaire/edit",r).then((function(){t.$toast({component:m["a"],props:{title:"تم تحديث الاستبيان بنجاح",icon:"CheckCircleIcon",variant:"success"}}),t.$router.push("/questionnaires")}))}}))}}},O=w,j=(r("5ae4"),r("2877")),y=Object(j["a"])(O,n,i,!1,null,"edc328fe",null);e["default"]=y.exports},bf9a:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));r("a9e3");var n={data:function(){return{trHeight:null}},methods:{trAddHeight:function(t){var e=Number(this.trHeight.substring(0,this.trHeight.length-2));this.trHeight="".concat(e+Number(t),"px")},trTrimHeight:function(t){var e=Number(this.trHeight.substring(0,this.trHeight.length-2));this.trHeight="".concat(e-Number(t),"px")},trSetHeight:function(t){this.trHeight=null===t?"auto":"".concat(Number(t),"px")}}}},ded4:function(t,e,r){}}]);
//# sourceMappingURL=chunk-b6e3bf08.212d639c.js.map