webpackJsonp([20,50],{ZxZ0:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("DMPO"),a=(s("Qwh1"),s("ubaR")),n=s("Llv5"),r={name:"GoodsPromotion",components:{swiper:i.swiper,swiperSlide:i.swiperSlide,PromotionGood:a.default},props:{},data:function(){return{imgUrls:[],goodsList:[],RecommendSwiper:{pagination:{el:".swiper-pagination",clickable:!0},autoplay:{disableOnInteraction:!1,delay:2e3},loop:!0,speed:1e3,observer:!0,observeParents:!0}}},mounted:function(){this.getIndexGroomList()},methods:{getIndexGroomList:function(){var t=this;Object(n.e)(4).then(function(e){t.imgUrls=e.data.banner,t.goodsList=e.data.list}).catch(function(t){this.$dialog.toast({mes:t.msg})})}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quality-recommend"},[s("div",{staticClass:"slider-banner swiper"},[s("swiper",{staticClass:"swiper-wrapper",attrs:{options:t.RecommendSwiper}},t._l(t.imgUrls,function(t,e){return s("swiperSlide",{key:e,staticClass:"swiper-slide"},[s("img",{staticClass:"slide-image",attrs:{src:t.img}})])}),1),t._v(" "),s("div",{staticClass:"swiper-pagination"})],1),t._v(" "),t._m(0),t._v(" "),s("Promotion-good",{attrs:{benefit:t.goodsList}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title acea-row row-center-wrapper"},[e("div",{staticClass:"line"}),this._v(" "),e("div",{staticClass:"name"},[e("span",{staticClass:"iconfont icon-cuxiaoguanli"}),this._v("促销单品\n    ")]),this._v(" "),e("div",{staticClass:"line"})])}]},l=s("C7Lr")(r,o,!1,null,null,null);e.default=l.exports},ubaR:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"PromotionGood",props:{benefit:{type:Array,default:function(){return[]}}},data:function(){return{}}},a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.benefit.length>0?s("div",{staticClass:"promotionGood"},t._l(t.benefit,function(e,i){return s("router-link",{key:i,staticClass:"item acea-row row-between-wrapper",attrs:{to:{path:"/detail/"+e.id}}},[s("div",{staticClass:"pictrue"},[s("img",{staticClass:"image",attrs:{src:e.image}})]),t._v(" "),s("div",{staticClass:"text"},[s("div",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),t._v(" "),s("div",{staticClass:"sp-money acea-row"},[s("div",{staticClass:"moneyCon"},[t._v("\n          促销价: ￥"),s("span",{staticClass:"num"},[t._v(t._s(e.price))])])]),t._v(" "),s("div",{staticClass:"acea-row row-between-wrapper"},[s("div",{staticClass:"money"},[t._v("日常价：￥"+t._s(e.ot_price))]),t._v(" "),s("div",[t._v("仅剩："+t._s(e.stock)+t._s(e.unit_name))])])])])}),1):t._e()},staticRenderFns:[]},n=s("C7Lr")(i,a,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=20.bb4e59069dc58c758ae6.js.map