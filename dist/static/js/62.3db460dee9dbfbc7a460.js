webpackJsonp([62],{"0/Wm":function(t,e){},"RtA+":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={name:"AssembleWindow",components:{CountDown:s("kPQs").default},props:{assemble:{type:Object,default:function(){}}},data:function(){return{}},mounted:function(){},methods:{closeAttr:function(){this.$emit("changeFun",{action:"changeassemble",value:!1})},toAssemble:function(){this.$emit("changeFun",{action:"changeassemble",value:!1}),this.$emit("changeFun",{action:"toAssemble",value:!0,data:this.assemble.details})}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.assemble.showAssemble?s("div",{staticClass:"assemble-window"},[s("div",{staticClass:"content"},[s("div",{staticClass:"title"},[t._v("\n      参加"),s("span",{staticClass:"nick"},[t._v(t._s(t.assemble.details.userExtVO.nickname))]),t._v("的拼单\n    ")]),t._v(" "),s("div",{staticClass:"cutdown",staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[t._v("\n      仅剩"),s("span",{staticStyle:{color:"red",display:"flex","justify-content":"center","align-items":"center"}},[t._v(t._s(t.assemble.details.lackAssembleNum))]),t._v("个名额，\n      "),s("i",[s("CountDown",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"},attrs:{"is-day":!1,"tip-text":"","day-text":"","hour-text":":","minute-text":":","second-text":"",datatime:Date.parse(t.assemble.details.stopTime)/1e3}})],1),t._v("后结束\n    ")]),t._v(" "),s("div",{staticClass:"close iconfont icon-guanbi",on:{click:t.closeAttr}})]),t._v(" "),s("ul",{staticClass:"image-ul"},[s("li",{staticClass:"assemer-li",style:"background: url("+t.assemble.details.userExtVO.headImgUrl+") 0% 0% / 100% 100%;"}),t._v(" "),s("li",{staticClass:"member-li"})]),t._v(" "),s("div",{staticClass:"assemble-button"},[s("button",{on:{click:t.toAssemble}},[t._v("参与拼单")])])]):t._e(),t._v(" "),s("div",{staticClass:"mask",staticStyle:{"z-index":"998"},attrs:{hidden:!1===t.assemble.showAssemble},on:{touchmove:function(t){t.preventDefault()},click:t.closeAttr}})])},staticRenderFns:[]};var i=s("C7Lr")(a,n,!1,function(t){s("0/Wm")},null,null);e.default=i.exports}});
//# sourceMappingURL=62.3db460dee9dbfbc7a460.js.map