(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-33d1901d"],{"06d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e"),r=i["default"].extend({computed:{selectionStart:{cache:!1,get:function(){return this.$refs.input.selectionStart},set:function(t){this.$refs.input.selectionStart=t}},selectionEnd:{cache:!1,get:function(){return this.$refs.input.selectionEnd},set:function(t){this.$refs.input.selectionEnd=t}},selectionDirection:{cache:!1,get:function(){return this.$refs.input.selectionDirection},set:function(t){this.$refs.input.selectionDirection=t}}},methods:{select:function(){var t;(t=this.$refs.input).select.apply(t,arguments)},setSelectionRange:function(){var t;(t=this.$refs.input).setSelectionRange.apply(t,arguments)},setRangeText:function(){var t;(t=this.$refs.input).setRangeText.apply(t,arguments)}}})},"11de":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("2b0e"),r=n("b42e"),a=n("c637"),o=n("a723"),s=n("cf75"),c=Object(s["d"])({id:Object(s["c"])(o["t"]),inline:Object(s["c"])(o["g"],!1),novalidate:Object(s["c"])(o["g"],!1),validated:Object(s["c"])(o["g"],!1)},a["w"]),u=i["default"].extend({name:a["w"],functional:!0,props:c,render:function(t,e){var n=e.props,i=e.data,a=e.children;return t("form",Object(r["a"])(i,{class:{"form-inline":n.inline,"was-validated":n.validated},attrs:{id:n.id,novalidate:n.novalidate}}),a)}})},"1f1e":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("2b0e"),r=i["default"].extend({computed:{validity:{cache:!1,get:function(){return this.$refs.input.validity}},validationMessage:{cache:!1,get:function(){return this.$refs.input.validationMessage}},willValidate:{cache:!1,get:function(){return this.$refs.input.willValidate}}},methods:{setCustomValidity:function(){var t;return(t=this.$refs.input).setCustomValidity.apply(t,arguments)},checkValidity:function(){var t;return(t=this.$refs.input).checkValidity.apply(t,arguments)},reportValidity:function(){var t;return(t=this.$refs.input).reportValidity.apply(t,arguments)}}})},"2ba6":function(t,e,n){},"40fc":function(t,e,n){"use strict";n.d(e,"b",(function(){return w})),n.d(e,"a",(function(){return x}));var i=n("2b0e"),r=n("0056"),a=n("a723"),o=n("906c"),s=n("6b77"),c=n("a8c8"),u=n("58f2"),l=n("3a58"),d=n("d82f"),f=n("cf75"),h=n("fa73");function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var v=Object(u["a"])("value",{type:a["o"],defaultValue:"",event:r["M"]}),g=v.mixin,O=v.props,j=v.prop,y=v.event,w=Object(f["d"])(Object(d["m"])(b(b({},O),{},{ariaInvalid:Object(f["c"])(a["j"],!1),autocomplete:Object(f["c"])(a["t"]),debounce:Object(f["c"])(a["o"],0),formatter:Object(f["c"])(a["k"]),lazy:Object(f["c"])(a["g"],!1),lazyFormatter:Object(f["c"])(a["g"],!1),number:Object(f["c"])(a["g"],!1),placeholder:Object(f["c"])(a["t"]),plaintext:Object(f["c"])(a["g"],!1),readonly:Object(f["c"])(a["g"],!1),trim:Object(f["c"])(a["g"],!1)})),"formTextControls"),x=i["default"].extend({mixins:[g],props:w,data:function(){var t=this[j];return{localValue:Object(h["g"])(t),vModelValue:this.modifyValue(t)}},computed:{computedClass:function(){var t=this.plaintext,e=this.type,n="range"===e,i="color"===e;return[{"custom-range":n,"form-control-plaintext":t&&!n&&!i,"form-control":i||!t&&!n},this.sizeFormClass,this.stateClass]},computedDebounce:function(){return Object(c["c"])(Object(l["b"])(this.debounce,0),0)},hasFormatter:function(){return Object(f["b"])(this.formatter)}},watch:m({},j,(function(t){var e=Object(h["g"])(t),n=this.modifyValue(t);e===this.localValue&&n===this.vModelValue||(this.clearDebounce(),this.localValue=e,this.vModelValue=n)})),created:function(){this.$_inputDebounceTimer=null},mounted:function(){this.$on(r["P"],this.clearDebounce)},beforeDestroy:function(){this.clearDebounce()},methods:{clearDebounce:function(){clearTimeout(this.$_inputDebounceTimer),this.$_inputDebounceTimer=null},formatValue:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t=Object(h["g"])(t),!this.hasFormatter||this.lazyFormatter&&!n||(t=this.formatter(t,e)),t},modifyValue:function(t){return t=Object(h["g"])(t),this.trim&&(t=t.trim()),this.number&&(t=Object(l["a"])(t,t)),t},updateValue:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.lazy;if(!i||n){this.clearDebounce();var r=function(){if(t=e.modifyValue(t),t!==e.vModelValue)e.vModelValue=t,e.$emit(y,t);else if(e.hasFormatter){var n=e.$refs.input;n&&t!==n.value&&(n.value=t)}},a=this.computedDebounce;a>0&&!i&&!n?this.$_inputDebounceTimer=setTimeout(r,a):r()}},onInput:function(t){if(!t.target.composing){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(s["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n),this.$emit(r["s"],n))}},onChange:function(t){var e=t.target.value,n=this.formatValue(e,t);!1===n||t.defaultPrevented?Object(s["f"])(t,{propagation:!1}):(this.localValue=n,this.updateValue(n,!0),this.$emit(r["c"],n))},onBlur:function(t){var e=t.target.value,n=this.formatValue(e,t,!0);!1!==n&&(this.localValue=Object(h["g"])(this.modifyValue(n)),this.updateValue(n,!0)),this.$emit(r["a"],t)},focus:function(){this.disabled||Object(o["d"])(this.$el)},blur:function(){this.disabled||Object(o["c"])(this.$el)}}})},4797:function(t,e,n){"use strict";n.d(e,"a",(function(){return $}));var i=n("2b0e"),r=n("c637"),a=n("a723"),o=n("2326"),s=n("906c"),c=n("6b77"),u=n("d82f"),l=n("cf75"),d=n("dde7"),f=n("06d9"),h=n("ad47"),p=n("d520"),b=n("40fc"),m=n("1f1e"),v=n("90ef"),g=n("bc9a");function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function j(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var w=["text","password","email","number","url","tel","search","range","color","date","time","datetime","datetime-local","month","week"],x=Object(l["d"])(Object(u["m"])(j(j(j(j(j(j({},v["b"]),d["b"]),h["b"]),p["b"]),b["b"]),{},{list:Object(l["c"])(a["t"]),max:Object(l["c"])(a["o"]),min:Object(l["c"])(a["o"]),noWheel:Object(l["c"])(a["g"],!1),step:Object(l["c"])(a["o"]),type:Object(l["c"])(a["t"],"text",(function(t){return Object(o["a"])(w,t)}))})),r["A"]),$=i["default"].extend({name:r["A"],mixins:[g["a"],v["a"],d["a"],h["a"],p["a"],b["a"],f["a"],m["a"]],props:x,computed:{localType:function(){var t=this.type;return Object(o["a"])(w,t)?t:"text"},computedAttrs:function(){var t=this.localType,e=this.name,n=this.form,i=this.disabled,r=this.placeholder,a=this.required,o=this.min,s=this.max,c=this.step;return{id:this.safeId(),name:e,form:n,type:t,disabled:i,placeholder:r,required:a,autocomplete:this.autocomplete||null,readonly:this.readonly||this.plaintext,min:o,max:s,step:c,list:"password"!==t?this.list:null,"aria-required":a?"true":null,"aria-invalid":this.computedAriaInvalid}},computedListeners:function(){return j(j({},this.bvListeners),{},{input:this.onInput,change:this.onChange,blur:this.onBlur})}},watch:{noWheel:function(t){this.setWheelStopper(t)}},mounted:function(){this.setWheelStopper(this.noWheel)},deactivated:function(){this.setWheelStopper(!1)},activated:function(){this.setWheelStopper(this.noWheel)},beforeDestroy:function(){this.setWheelStopper(!1)},methods:{setWheelStopper:function(t){var e=this.$el;Object(c["c"])(t,e,"focus",this.onWheelFocus),Object(c["c"])(t,e,"blur",this.onWheelBlur),t||Object(c["a"])(document,"wheel",this.stopWheel)},onWheelFocus:function(){Object(c["b"])(document,"wheel",this.stopWheel)},onWheelBlur:function(){Object(c["a"])(document,"wheel",this.stopWheel)},stopWheel:function(t){Object(c["f"])(t,{propagation:!1}),Object(s["c"])(this.$el)}},render:function(t){return t("input",{class:this.computedClass,attrs:this.computedAttrs,domProps:{value:this.localValue},on:this.computedListeners,ref:"input"})}})},"5cce":function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var i=n("2b0e"),r=n("b42e"),a=n("c637"),o=n("a723"),s=n("cf75"),c=Object(s["d"])({columns:Object(s["c"])(o["g"],!1),deck:Object(s["c"])(o["g"],!1),tag:Object(s["c"])(o["t"],"div")},a["k"]),u=i["default"].extend({name:a["k"],functional:!0,props:c,render:function(t,e){var n=e.props,i=e.data,a=e.children;return t(n.tag,Object(r["a"])(i,{class:n.deck?"card-deck":n.columns?"card-columns":"card-group"}),a)}})},"7cf5":function(t,e,n){"use strict";n("2ba6")},bf9a:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a9e3");var i={data:function(){return{trHeight:null}},methods:{trAddHeight:function(t){var e=Number(this.trHeight.substring(0,this.trHeight.length-2));this.trHeight="".concat(e+Number(t),"px")},trTrimHeight:function(t){var e=Number(this.trHeight.substring(0,this.trHeight.length-2));this.trHeight="".concat(e-Number(t),"px")},trSetHeight:function(t){this.trHeight=null===t?"auto":"".concat(Number(t),"px")}}}},d5d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card-group",{attrs:{deck:""}},[n("b-card",{attrs:{"header-tag":"header",title:""}},[n("validation-observer",{ref:"simpleRules"},[n("b-form",{ref:"form",staticClass:"repeater-form",style:{height:t.trHeight}},[n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("b-form-group",{attrs:{label:"السؤال","label-for":"title"}},[n("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("b-form-input",{attrs:{id:"title",state:!(i.length>0)&&null,placeholder:"الرجاء كتابة السؤال"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),n("small",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}])})],1)],1),n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"اخر الاختبار","label-for":"name"}},[n("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.errors;return[n("b-form-select",{attrs:{id:"exam",placeholder:"اختار الاختبار","value-field":"id","text-field":"name",options:t.exams,state:!(i.length>0)&&null},model:{value:t.examId,callback:function(e){t.examId=e},expression:"examId"}}),n("small",{staticClass:"text-danger"},[t._v(t._s(i[0]))])]}}])})],1)],1),n("b-col",{attrs:{cols:"2"}},[n("b-button",{staticClass:"mt-2",attrs:{variant:"primary"},on:{click:function(e){return t.add()}}},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"PlusIcon"}}),t._v(" إضافة حقل اجابة ")],1)],1),t._l(t.inputs,(function(e,i){return n("b-col",{key:i,ref:"row",refInFor:!0,attrs:{cols:"12"}},[n("hr",{staticClass:"w-100"}),n("b-row",[n("b-col",{attrs:{cols:"md-8"}},[n("b-form-group",{attrs:{label:"إجابة السؤال","label-for":"answer"}},[n("validation-provider",{attrs:{name:"answer"+i,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.errors;return[n("b-form-input",{attrs:{id:"answer",name:"answer"+i,state:!(a.length>0)&&null,placeholder:"إجابة السؤال"},model:{value:e.answer,callback:function(n){t.$set(e,"answer",n)},expression:"input.answer"}}),n("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)],1),n("b-col",{attrs:{cols:"md-2"}},[n("b-form-group",{attrs:{label:"درجة الاجابة","label-for":"points"}},[n("validation-provider",{attrs:{name:"points"+i,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(r){var a=r.errors;return[n("b-form-input",{attrs:{id:"points",type:"number",name:"points"+i,state:!(a.length>0)&&null,placeholder:"درجة الاجابة"},model:{value:e.points,callback:function(n){t.$set(e,"points",n)},expression:"input.points"}}),n("small",{staticClass:"text-danger"},[t._v(t._s(a[0]))])]}}],null,!0)})],1)],1),n("b-col",{attrs:{cols:"2"}},[n("b-button",{directives:[{name:"show",rawName:"v-show",value:i||!i&&t.inputs.length>1,expression:"k || ( !k && inputs.length > 1)"}],staticClass:"mt-2 btn-sm",attrs:{id:"k",variant:"outline-danger"},on:{click:function(e){return e.stopPropagation(),t.remove(i)}}},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),t._v(" حذف ")],1)],1)],1)],1)})),n("hr",{staticClass:"w-100"})],2)],1),n("b-row",[n("b-col",{attrs:{cols:"12"}},[n("b-button",{attrs:{variant:"primary",type:"submit"},on:{click:function(e){return e.preventDefault(),t.validationForm(e)}}},[n("feather-icon",{staticClass:"mr-25",attrs:{icon:"EditIcon"}}),t._v(" تعديل سؤال للنموج ")],1)],1)],1)],1)],1)],1)],1)},r=[],a=(n("159b"),n("a434"),n("7bb1")),o=n("8f03"),s=n("205f"),c=n("5cce"),u=n("1947"),l=n("4797"),d=n("8226"),f=n("8361"),h=n("11de"),p=n("a15b"),b=n("b28b"),m=n("223c"),v=n("bf9a"),g={ar:{names:{title:"السؤال",answer:"إجابة السؤال",points:"درجة السؤال",name:"اسم الاختبار"}}};Object(a["d"])("ar",g.ar);var O={name:"EditQuestion",components:{ValidationProvider:a["b"],ValidationObserver:a["a"],BCard:s["a"],BCardGroup:c["a"],BButton:u["a"],BFormInput:l["a"],BFormGroup:d["a"],BFormSelect:f["a"],BForm:h["a"],BRow:p["a"],BCol:b["a"]},mixins:[v["a"]],data:function(){return{exams:[],question:[],examId:null,inputs:[],title:"",options:[],required:o["c"],numeric:o["b"]}},mounted:function(){this.initTrHeight()},created:function(){this.fetchExams(),this.getQuestion(),window.addEventListener("resize",this.initTrHeight)},destroyed:function(){window.removeEventListener("resize",this.initTrHeight)},methods:{fetchExams:function(){var t=this;this.$store.dispatch("exam/fetchName").then((function(e){t.exams=e.data.data}))},getQuestion:function(){var t=this;this.$store.dispatch("question/show",this.$route.params.id).then((function(e){t.obj=e.data.data,t.title=t.obj.title,t.examId=t.obj.exam_id,t.obj.options.forEach((function(e){t.inputs.push({answer:e.title,points:e.points}),t.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))}))}))},add:function(){var t=this;this.inputs.push({title:"",points:""}),this.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))},remove:function(t){this.inputs.splice(t,1),this.trTrimHeight(this.$refs.row[0].offsetHeight)},initTrHeight:function(){var t=this;this.trSetHeight(null),this.$nextTick((function(){t.trSetHeight(t.$refs.form.scrollHeight)}))},validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(e){if(e){var n=new FormData;n.append("question_id",t.$route.params.id),n.append("exam_id",t.examId),n.append("title",t.title),t.inputs.forEach((function(t,e){n.append("options[".concat(e,"][option]"),t.answer),n.append("options[".concat(e,"][point]"),t.points)})),t.$store.dispatch("question/edit",n).then((function(){t.$toast({component:m["a"],props:{title:"تم تعديل السؤال للنموذج بنجاح",icon:"CheckCircleIcon",variant:"success"}}),t.$router.push("/questions/".concat(t.examId))}))}}))}}},j=O,y=(n("7cf5"),n("2877")),w=Object(y["a"])(j,i,r,!1,null,"6ae67d54",null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-33d1901d.af21a2e5.js.map