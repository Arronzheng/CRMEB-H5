webpackJsonp([48],{k97D:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("4YfN"),s=o.n(a),c=o("fUgm"),n=o("cV3P"),i=o("Ty/O"),r=o("NxGh"),l={name:"BargainRcord",components:{Recommend:n.a,Loading:r.a},data:function(){return{page:1,limit:20,collectProductList:[],loadTitle:"",loading:!1,loadend:!1}},watch:{$route:function(t){console.log(t),"BargainRcord"===t.name&&this.mountedStart()}},mounted:function(){var t=this;this.get_user_collect_product(),this.$scroll(this.$refs.container,function(){!t.loading&&t.get_user_collect_product()})},computed:s()({},Object(c.b)(["userNo"])),methods:{get_user_collect_product:function(){var t=this;t.loading||t.loadend||(t.loading=!0,Object(i.e)({userNo:t.userNo}).then(function(e){t.loading=!1,t.collectProductList.push.apply(t.collectProductList,e.data.bargainUserViewDTOs),t.loadend=e.data.list.length<t.limit,t.page=t.page+1}))}}},d={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"container"},[t.collectProductList.length>0?o("div",{staticClass:"collectionGoods"},t._l(t.collectProductList,function(e,a){return o("router-link",{key:a,staticClass:"item acea-row row-between-wrapper",attrs:{to:{path:"/detail/"+e.courseViewDTO.id}}},[o("div",{staticClass:"pictrue"},[o("img",{attrs:{src:e.courseViewDTO.courseLogo}})]),t._v(" "),o("div",{staticClass:"text acea-row row-column-between"},[o("div",{staticClass:"infor line1"},[t._v(t._s(e.courseViewDTO.courseName))]),t._v(" "),o("div",{staticClass:"acea-row row-between-wrapper"},[o("div",{staticClass:"money font-color-red"},[o("span",{staticStyle:{color:"#999999"}},[t._v("砍价时间：")]),t._v(t._s(e.addTime))]),t._v(" "),o("div",{staticClass:"money",staticStyle:{color:"#999999"}},[t._v("\n            砍价结果：\n            "),1===e.status?o("span",{staticClass:"money font-color-red"},[t._v("进行中")]):2===e.status?o("span",{staticClass:"money font-color-red"},[t._v("失败")]):o("span",{staticClass:"money font-color-red"},[t._v("成功")])])])])])}),1):t._e(),t._v(" "),o("Loading",{attrs:{loaded:t.loadend,loading:t.loading}}),t._v(" "),t.collectProductList.length<1&&t.page>1?o("div",{staticClass:"noCommodity",staticStyle:{"background-color":"#fff"}},[t._m(0),t._v(" "),o("Recommend")],1):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"noPictrue"},[e("img",{staticClass:"image",attrs:{src:o("m3Wq")}})])}]},u=o("C7Lr")(l,d,!1,null,null,null);e.default=u.exports}});
//# sourceMappingURL=48.26252f8c913d51a7bc6a.js.map