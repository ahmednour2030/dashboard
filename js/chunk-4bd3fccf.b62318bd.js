(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4bd3fccf"],{"2ba6":function(t,e,a){},"7cf5":function(t,e,a){"use strict";a("2ba6")},d5d7:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card-group",{attrs:{deck:""}},[a("b-card",{attrs:{"header-tag":"header",title:""}},[a("validation-observer",{ref:"simpleRules"},[a("b-form",{ref:"form",staticClass:"repeater-form",style:{height:t.trHeight}},[a("b-row",[a("b-col",{attrs:{cols:"6"}},[a("b-form-group",{attrs:{label:"السؤال","label-for":"title"}},[a("validation-provider",{attrs:{name:"title",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-input",{attrs:{id:"title",state:!(n.length>0)&&null,placeholder:"الرجاء كتابة السؤال"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1)],1),a("b-col",{attrs:{md:"4"}},[a("b-form-group",{attrs:{label:"اخر الاختبار","label-for":"name"}},[a("validation-provider",{attrs:{name:"name",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.errors;return[a("b-form-select",{attrs:{id:"exam",placeholder:"اختار الاختبار","value-field":"id","text-field":"name",options:t.exams,state:!(n.length>0)&&null},model:{value:t.examId,callback:function(e){t.examId=e},expression:"examId"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(n[0]))])]}}])})],1)],1),a("b-col",{attrs:{cols:"2"}},[a("b-button",{staticClass:"mt-2",attrs:{variant:"primary"},on:{click:function(e){return t.add()}}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"PlusIcon"}}),t._v(" إضافة حقل اجابة ")],1)],1),t._l(t.inputs,(function(e,n){return a("b-col",{key:n,ref:"row",refInFor:!0,attrs:{cols:"12"}},[a("hr",{staticClass:"w-100"}),a("b-row",[a("b-col",{attrs:{cols:"md-8"}},[a("b-form-group",{attrs:{label:"إجابة السؤال","label-for":"answer"}},[a("validation-provider",{attrs:{name:"answer"+n,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.errors;return[a("b-form-input",{attrs:{id:"answer",name:"answer"+n,state:!(r.length>0)&&null,placeholder:"إجابة السؤال"},model:{value:e.answer,callback:function(a){t.$set(e,"answer",a)},expression:"input.answer"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)],1),a("b-col",{attrs:{cols:"md-2"}},[a("b-form-group",{attrs:{label:"درجة الاجابة","label-for":"points"}},[a("validation-provider",{attrs:{name:"points"+n,rules:"required"},scopedSlots:t._u([{key:"default",fn:function(i){var r=i.errors;return[a("b-form-input",{attrs:{id:"points",type:"number",name:"points"+n,state:!(r.length>0)&&null,placeholder:"درجة الاجابة"},model:{value:e.points,callback:function(a){t.$set(e,"points",a)},expression:"input.points"}}),a("small",{staticClass:"text-danger"},[t._v(t._s(r[0]))])]}}],null,!0)})],1)],1),a("b-col",{attrs:{cols:"2"}},[a("b-button",{directives:[{name:"show",rawName:"v-show",value:n||!n&&t.inputs.length>1,expression:"k || ( !k && inputs.length > 1)"}],staticClass:"mt-2 btn-sm",attrs:{id:"k",variant:"outline-danger"},on:{click:function(e){return e.stopPropagation(),t.remove(n)}}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"XIcon"}}),t._v(" حذف ")],1)],1)],1)],1)})),a("hr",{staticClass:"w-100"})],2)],1),a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-button",{attrs:{variant:"primary",type:"submit"},on:{click:function(e){return e.preventDefault(),t.validationForm(e)}}},[a("feather-icon",{staticClass:"mr-25",attrs:{icon:"EditIcon"}}),t._v(" تعديل سؤال للنموج ")],1)],1)],1)],1)],1)],1)],1)},i=[],r=(a("159b"),a("a434"),a("7bb1")),s=a("8f03"),o=a("205f"),l=a("5cce"),c=a("1947"),u=a("4797"),d=a("8226"),p=a("8361"),f=a("11de"),m=a("a15b"),h=a("b28b"),b=a("223c"),v=a("bf9a"),g={ar:{names:{title:"السؤال",answer:"إجابة السؤال",points:"درجة السؤال",name:"اسم الاختبار"}}};Object(r["d"])("ar",g.ar);var w={name:"EditQuestion",components:{ValidationProvider:r["b"],ValidationObserver:r["a"],BCard:o["a"],BCardGroup:l["a"],BButton:c["a"],BFormInput:u["a"],BFormGroup:d["a"],BFormSelect:p["a"],BForm:f["a"],BRow:m["a"],BCol:h["a"]},mixins:[v["a"]],data:function(){return{exams:[],question:[],examId:null,inputs:[],title:"",options:[],required:s["c"],numeric:s["b"]}},mounted:function(){this.initTrHeight()},created:function(){this.fetchExams(),this.getQuestion(),window.addEventListener("resize",this.initTrHeight)},destroyed:function(){window.removeEventListener("resize",this.initTrHeight)},methods:{fetchExams:function(){var t=this;this.$store.dispatch("exam/fetchName").then((function(e){t.exams=e.data.data}))},getQuestion:function(){var t=this;this.$store.dispatch("question/show",this.$route.params.id).then((function(e){t.obj=e.data.data,t.title=t.obj.title,t.examId=t.obj.exam_id,t.obj.options.forEach((function(e){t.inputs.push({answer:e.title,points:e.points}),t.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))}))}))},add:function(){var t=this;this.inputs.push({title:"",points:""}),this.$nextTick((function(){t.trAddHeight(t.$refs.row[0].offsetHeight)}))},remove:function(t){this.inputs.splice(t,1),this.trTrimHeight(this.$refs.row[0].offsetHeight)},initTrHeight:function(){var t=this;this.trSetHeight(null),this.$nextTick((function(){t.trSetHeight(t.$refs.form.scrollHeight)}))},validationForm:function(){var t=this;this.$refs.simpleRules.validate().then((function(e){if(e){var a=new FormData;a.append("question_id",t.$route.params.id),a.append("exam_id",t.examId),a.append("title",t.title),t.inputs.forEach((function(t,e){a.append("options[".concat(e,"][option]"),t.answer),a.append("options[".concat(e,"][point]"),t.points)})),t.$store.dispatch("question/edit",a).then((function(){t.$toast({component:b["a"],props:{title:"تم تعديل السؤال للنموذج بنجاح",icon:"CheckCircleIcon",variant:"success"}}),t.$router.push("/questions/".concat(t.examId))}))}}))}}},x=w,k=(a("7cf5"),a("2877")),_=Object(k["a"])(x,n,i,!1,null,"6ae67d54",null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-4bd3fccf.b62318bd.js.map