webpackJsonp([42],{qk65:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=t("Dd8w"),o=t.n(s),l=(t("Au9i"),t("NYxO")),u={data:function(){return{ctr:"中国 (China)",code:"",countries:"",quhao:[{label:"中国大陆",quhaos:"86"},{label:"香港(中国)",quhaos:"852"},{label:"台湾(中国)",quhaos:"886"},{label:"新加坡",quhaos:"65"},{label:"马来西亚",quhaos:"60"},{label:"柬埔寨",quhaos:"855"},{label:"泰国",quhaos:"66"},{label:"印度",quhaos:"91"},{label:"印度尼西亚",quhaos:"62"},{label:"日本",quhaos:"81"},{label:"韩国",quhaos:"82"},{label:"老挝",quhaos:"856"},{label:"缅甸",quhaos:"95"},{label:"越南",quhaos:"84"}]}},methods:o()({},Object(l.b)(["SAVE_AREACODE","SAVE_COUNTRIES"]),{getQuhaos:function(e){this.ctr=e.replace(/[0-9]/gi,""),this.code=e.replace(/[^0-9]+/g,"");var a=this.ctr.split("(");this.countries=a[0],this.SAVE_AREACODE(this.code),this.SAVE_COUNTRIES(this.countries),this.$router.go(-1)}}),created:function(){},mounted:function(){}},n={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"quhao"}},[t("ul",{attrs:{id:"search",name:"phone"}},[e.$t("m.number_belongs.number").length>0?e._l(e.$t("m.number_belongs.number"),function(a,s){return t("li",{key:s,class:a.quhaos,on:{click:function(t){return t.stopPropagation(),e.getQuhaos(a.quhaos+a.label)}}},[t("span",[e._v(e._s(a.label))]),e._v(" "),t("span",[e._v("+"+e._s(a.quhaos))])])}):[t("li",[e._v(e._s(e.$t("m.load_empty")))])]],2)])},staticRenderFns:[]};var r=t("VU/8")(u,n,!1,function(e){t("yvWD")},"data-v-411f0eb0",null);a.default=r.exports},yvWD:function(e,a){}});