webpackJsonp([38],{qlN8:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("vMJZ"),n={name:"CommissionDetails",components:{Loading:e("NxGh").a},props:{},data:function(){return{info:[],commission:0,where:{page:1,limit:3},types:3,loaded:!1,loading:!1}},mounted:function(){var i=this;this.getCommission(),this.getIndex(),this.$scroll(this.$refs.container,function(){!1===i.loading&&i.getIndex()})},methods:{getIndex:function(){var i=this;1!=i.loading&&1!=i.loaded&&(i.loading=!0,Object(s.s)({pageCurrent:i.where.page,pageSize:i.where.limit}).then(function(t){i.loading=!1,i.loaded=t.data.length<i.where.limit,i.loadTitle=i.loaded?"人家是有底线的":"上拉加载更多",i.where.page=i.where.page+1,i.info.push.apply(i.info,t.data)},function(t){i.$dialog.message(t.msg)}))},getCommission:function(){var i=this,t=this;Object(s.G)().then(function(i){t.commission=i.data.commissionCount},function(t){i.$dialog.message(t.msg)})}}},a={render:function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("div",{ref:"container",staticClass:"commission-details"},[e("div",{staticClass:"promoterHeader bg-color-red"},[e("div",{staticClass:"headerCon acea-row row-between-wrapper"},[e("div",[e("div",{staticClass:"name"},[i._v("佣金明细")]),i._v(" "),e("div",{staticClass:"money"},[i._v("\n          ￥"),e("span",{staticClass:"num"},[i._v(i._s(i.commission))])])]),i._v(" "),e("div",{staticClass:"iconfont icon-jinbi1"})])]),i._v(" "),e("div",{ref:"content",staticClass:"sign-record"},[e("div",{staticClass:"list"},i._l(i.info,function(t,s){return e("div",{key:s,staticClass:"item"},[e("div",{staticClass:"data"},[i._v(i._s(t.time))]),i._v(" "),i._l(t.list,function(t,s){return e("div",{key:s,staticClass:"listn"},[e("div",{staticClass:"itemn acea-row row-between-wrapper"},[e("div",[e("div",{staticClass:"name line1"},[i._v(i._s(t.title))]),i._v(" "),e("div",[i._v(i._s(t.add_time))])]),i._v(" "),1==t.pm?e("div",{staticClass:"num"},[i._v("+"+i._s(t.number))]):i._e(),i._v(" "),0==t.pm?e("div",{staticClass:"num font-color-red"},[i._v("\n              -"+i._s(t.number)+"\n            ")]):i._e()])])})],2)}),0)]),i._v(" "),e("Loading",{attrs:{loaded:i.loaded,loading:i.loading}})],1)},staticRenderFns:[]},o=e("C7Lr")(n,a,!1,null,null,null);t.default=o.exports}});
//# sourceMappingURL=38.9b79dee9ce9f481f666b.js.map