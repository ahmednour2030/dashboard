(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e9353"],{"8d0a":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-card",{ref:"cardAction",attrs:{title:"كافة الاستبيانات"}},[[n("b-col",{attrs:{cols:"12"}},[n("b-table",{attrs:{id:"my-table","per-page":t.perPage,"current-page":t.currentPage,"head-variant":"",hover:"",responsive:"",items:t.getCoupons,fields:t.fields,bordered:""},scopedSlots:t._u([{key:"head()",fn:function(e){return[n("span",{staticClass:"text-primary",staticStyle:{"font-size":"18px"}},[t._v(t._s(e.label))])]}},{key:"table-busy",fn:function(){return[n("div",{staticClass:"text-center text-dark my-2"},[n("b-spinner",{staticClass:"align-middle"}),n("strong",[t._v(" Loading... ")])],1)]},proxy:!0},{key:"cell(id)",fn:function(e){return[t._v(" "+t._s(e.item.id)+" ")]}},{key:"cell(title)",fn:function(e){return[t._v(" "+t._s(e.item.title)+" ")]}},{key:"cell(category)",fn:function(e){return[t._v(" "+t._s(e.item.category?e.item.category.name:"")+" ")]}},{key:"cell(actions)",fn:function(e){return[n("b-button",{staticClass:"mr-1",attrs:{size:"sm",variant:"primary"},on:{click:function(n){return t.editPage(e.item.id)}}},[t._v(" تعديل ")]),n("b-button",{attrs:{size:"sm",variant:"danger"},on:{click:function(n){return t.confirmDelete(e.item.id)}}},[t._v(" حذف ")])]}}])})],1),n("div",{staticClass:"mt-3"},[n("b-pagination",{attrs:{"total-rows":t.rows,align:"left","per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1),n("edit-coupon",{attrs:{obj:t.Obj}})]],2)],1)},i=[],r=n("6c3b"),s=n("205f"),o=n("b28b"),c=n("29a1"),l=n("1947"),u=n("26d2"),d=n("c074"),f=n("ecee");f["c"].add(d["a"],d["c"],d["b"]);var b={name:"AddQuestionnaire",components:{EditCoupon:r["a"],BCard:s["a"],BCol:o["a"],BTable:c["a"],BButton:l["a"],BPagination:u["a"]},data:function(){return{Obj:{},perPage:10,currentPage:1,add:!0,busy:!0,file:null,fields:[{key:"id",label:"م"},{key:"title",label:"نص السؤال"},{key:"category",label:"التصنيف"},{key:"actions",label:"العمليات"}],items:[]}},computed:{rows:function(){return this.items.length},getCoupons:function(){return this.$store.state.questionnaire.questionnaires}},created:function(){var t=this;this.$store.dispatch("questionnaire/fetch").then((function(e){t.items=e.data.data}))},methods:{edit:function(t){this.Obj=t,this.$bvModal.show("EditCat")},editPage:function(t){this.$router.push("/edit-questionnaires/".concat(t))},confirmDelete:function(t){var e=this;this.$swal({title:"حذف الاستبيان",text:"هل تريد حذف سؤال الاستبيان",icon:"warning",showCancelButton:!0,confirmButtonText:"تاكيد الحذف !",cancelButtonText:"الغاء",customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-outline-danger ml-1"},buttonsStyling:!1}).then((function(n){n.value&&(e.$swal({icon:"success",title:"عملية الحذف",text:"تم حذف سؤال الاستبيان بنجاح",customClass:{confirmButton:"btn btn-success"}}),e.$store.dispatch("questionnaire/delete",t).then((function(){})))}))}}},m=b,p=n("2877"),g=Object(p["a"])(m,a,i,!1,null,"7a6f8615",null);e["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0e9353.fd45da33.js.map