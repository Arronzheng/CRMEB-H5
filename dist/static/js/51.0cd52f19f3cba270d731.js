webpackJsonp([51],{"5J8k":function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s("fUgm"),n=s("/wkM"),c=s("vMJZ"),a={name:"CouponWindow",props:{couponList:{type:Array,default:function(){return[]}}},computed:Object(e.b)(["isLogin"]),data:function(){return{value:!0}},mounted:function(){},methods:{checked:function(){var t=this,i=this.isLogin;if(!i)return Object(n.a)();var s=this.couponList.reduce(function(t,i){return t.push(i.id),t},[]);Object(c.c)(s).then(function(){t.$emit("success"),t.$dialog.toast({mes:"领取成功"})}).catch(function(){t.$dialog.toast({mes:"已领取"})}),i&&(this.value=!1,this.$emit("checked"))},close:function(){this.value=!1,this.$emit("close")}}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"coupon-window",class:t.value?"on":""},[t._m(0),t._v(" "),s("div",{staticClass:"lid"},[s("div",{staticClass:"bnt font-color-red",on:{click:t.checked}},[t._v("立即领取")]),t._v(" "),s("div",{staticClass:"iconfont icon-guanbi3",on:{click:t.close}})])]),t._v(" "),s("div",{staticClass:"mask",attrs:{hidden:!t.value},on:{touchmove:function(t){t.preventDefault()}}})])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"couponWinList"},[i("div",{staticClass:"item acea-row row-between-wrapper"},[i("div",{staticClass:"money font-color-red"},[this._v("\n            ￥"),i("span",{staticClass:"num"},[this._v("199")])]),this._v(" "),i("div",{staticClass:"text"},[i("div",{staticClass:"name"},[this._v("\n              购物买200减10\n            ")]),this._v(" "),i("div",[this._v("\n              2020-03-30-2020-03-31\n            ")])])]),this._v(" "),i("div",{staticStyle:{height:"1.2rem"}})])}]},u=s("C7Lr")(a,o,!1,null,null,null);i.default=u.exports}});
//# sourceMappingURL=51.0cd52f19f3cba270d731.js.map