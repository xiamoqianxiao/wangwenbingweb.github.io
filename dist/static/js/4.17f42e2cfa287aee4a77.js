webpackJsonp([4,45],{CDVD:function(t,e,a){t.exports=a.p+"static/img/banner@2x.6fccb73.png"},LJYF:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,i=a("Xxa5"),s=a.n(i),c=a("exGp"),r=a.n(c),o=a("bOdI"),v=a.n(o),d=(a("k3b4"),a("+2ln")),l=(a("eqfM"),a("/QYm")),u=a("wFrA"),h={name:"invitedIntroduce",components:(n={},v()(n,l.a.name,l.a),v()(n,d.a.name,d.a),v()(n,"activityIntroduced",u.default),n),data:function(){return{selfInviteCode:this.$store.state.selfInviteCode||"",hidden:!1,shareUrl:"",maskShow:!1,totalInviteNumber:"",dayTotalIncomeReceived:"",totalIncomeReceived:"",token:this.$store.state.token||"",taskId:"",currPage:1,pageSize:10,searchBarFixed:!1}},created:function(){var t=this;this.shareUrl=this.$store.state.shareUrl;var e=new Image;e.src=this.shareUrl,e.onload=function(){var a=(.62*(document.body.clientHeight||document.documentElement.clientHeight)*2/100).toFixed(2),n=Number((e.width/e.height*a).toFixed(2));t.$refs.imgAdapter.style.width=n+"rem",t.$refs.imgAdapter.style.height=a+"rem"}},mounted:function(){window.addEventListener("scroll",this.scrollEvent),this.queryTaskInviteDetail()},methods:{scrollEvent:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.searchBarFixed=t>0},save:function(){Object(l.a)("长按图片保存")},cancel:function(){this.maskShow=!this.maskShow},back:function(){this.$router.go(-1)},friendListFn:function(){this.$router.push({path:"/friendList"})},invitationFn:function(){this.maskShow=!this.maskShow},shutdownFn:function(){this.hidden=!this.hidden},agreed:function(){this.hidden=!this.hidden},queryTaskInviteDetail:function(){var t=this;return r()(s.a.mark(function e(){var a,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("type","1"),a.append("currPage",t.currPage),a.append("pageSize",t.pageSize),a.append("mobileType","H"),e.next=7,t.$api.queryTaskInviteDetail(a);case 7:if(2e4==(n=e.sent).data.code){e.next=17;break}if(200!=n.data.code){e.next=15;break}t.totalInviteNumber=n.data.data.taskInvite.totalInviteNumber,t.totalIncomeReceived=n.data.data.taskInvite.totalIncomeReceived,t.dayTotalIncomeReceived=n.data.data.taskInvite.dayTotalIncomeReceived,e.next=17;break;case 15:return Object(l.a)(n.data.message),e.abrupt("return",!1);case 17:case"end":return e.stop()}},e,t)}))()}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"invitedIntroduce"},[n("div",{staticClass:"invited-content"},[n("div",{staticClass:"header",class:t.searchBarFixed?"active":""},[n("div",{staticClass:"box"},[n("div",{staticClass:"back",on:{click:function(e){return t.back()}}},[n("img",{attrs:{src:a("gQVu"),alt:""}})])]),t._v(" "),n("p",[t._v("邀好友赚赏金")]),t._v(" "),n("div",{staticClass:"share"})]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.searchBarFixed,expression:"searchBarFixed"}],staticClass:"replace"}),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"selfInviteCode"},[t._v("我的邀请码："+t._s(t.selfInviteCode))]),t._v(" "),n("div",{staticClass:"button",on:{click:function(e){return t.invitationFn()}}},[n("img",{attrs:{src:a("LoHD"),alt:""}})]),t._v(" "),n("div",{staticClass:"banner2"},[n("span",[t._v("我的邀请")]),t._v(" "),n("ul",[n("li",[n("div",{staticClass:"box"},[n("span",[t._v("已邀请好友")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.totalInviteNumber)+"\n              "),n("i",[t._v("个")])])])]),t._v(" "),t._m(2),t._v(" "),n("li",[n("div",{staticClass:"box"},[n("span",[t._v("已到账收益")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.totalIncomeReceived)+"\n              "),n("i",[t._v("鲸贝")])])])]),t._v(" "),t._m(3),t._v(" "),n("li",[n("div",{staticClass:"box"},[n("span",[t._v("今日总收益")]),t._v(" "),n("p",[t._v("\n              "+t._s(t.dayTotalIncomeReceived)+"\n              "),n("i",[t._v("鲸贝")])])])])]),t._v(" "),n("div",{staticClass:"footer",on:{click:function(e){return t.friendListFn()}}},[n("a",[t._v("邀请好友列表")]),t._v(" "),t._m(4)])]),t._v(" "),t._m(5),t._v(" "),t._m(6)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.maskShow,expression:"maskShow"}],staticClass:"mask",on:{touchmove:function(t){t.preventDefault()}}},[n("div",{staticClass:"publicShare"},[n("div",{ref:"imgAdapter",staticClass:"picture"},[n("img",{attrs:{src:t.shareUrl,alt:""}})]),t._v(" "),n("div",{staticClass:"controls"},[n("div",{staticClass:"save",on:{click:function(e){return t.save()}}},[t._v(t._s(t.$t("m.savePicture")))]),t._v(" "),n("div",{staticClass:"bg"}),t._v(" "),n("div",{staticClass:"cancel",on:{click:function(e){return t.cancel()}}},[t._v(t._s(t.$t("m.cancel")))])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("img",{attrs:{src:a("CDVD"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner1"},[e("img",{attrs:{src:a("TMkl"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"vertical"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("div",{staticClass:"vertical"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"more"},[e("img",{attrs:{src:a("lB0e"),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"rules"},[e("div",{staticClass:"rulesTitle"},[this._v("邀请规则:")]),this._v(" "),e("div",{staticClass:"rulesContent"},[e("p",[this._v("1、一重奖：好友完成新人1元提现，邀请人奖励1元；")]),this._v(" "),e("p",[this._v("2、二重奖：好友完成首次提现5元，邀请人再奖励3元；")]),this._v(" "),e("p",[this._v("3、三重奖：好友完成任务，邀请人得10%分润（注册、签到、打卡奖励除外）。")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rules"},[a("div",{staticClass:"rulesTitle"},[t._v("邀请说明:")]),t._v(" "),a("div",{staticClass:"rulesContent"},[a("p",[t._v("1、被邀请人必须是未注册过鲸贝APP的用户；")]),t._v(" "),a("p",[t._v("\n          2、每个新用户只能被邀请一次，同一终端设备注册或同一提现账号，\n          都视为同一用户；\n        ")]),t._v(" "),a("p",[t._v("\n          3、奖励方式以“鲸贝”形式发放，100鲸贝=1元，用户可自行提现（鲸\n          贝单位为整数，不含小数点，如计算出有小数点，仅取整数）；\n        ")]),t._v(" "),a("p",[t._v("\n          4、通过不正当手段（包括但不限于使用第三方软件进行恶意注册、网\n          络攻击等不当行为）获取的奖励，鲸贝有权不发放或收回奖励，必要时\n          可追究法律责任；\n        ")]),t._v(" "),a("p",[t._v("5、本活动最终解释权归鲸贝官方所有。")])])])}]};var m=a("VU/8")(h,p,!1,function(t){a("xyzb")},"data-v-1db60e2c",null);e.default=m.exports},LoHD:function(t,e,a){t.exports=a.p+"static/img/button@2x.079cffb.png"},TMkl:function(t,e,a){t.exports=a.p+"static/img/banner1@2x.5c9a4b8.png"},gQVu:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAABACAMAAABBTvXbAAACqVBMVEVHcEz///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8JhN25AAAA4nRSTlMABf4pFxnz9vr89PvjHOf9GBsaAvj3VZIkEWvcQdlW5GIBXA/E+dDiBHVTo9bR8h7vFhWTtLNeqMDBhT0Gy8rgfMcNMyXMplnaRL4U7D/fTd6iEFeN0rZLZCC17qyrbKropzrY7XcOPCc4h4OIbwjG6gvhUYla9X8JVEMqrZqdEpufkUwf62cwNQdK06B5TqF+R9sTsOWuAzbPjk/waR1fIWW4JnTxwoR4j0AoK4bVDIzICsOkc8VxLF2BUjQtet1JzpWXmbwygmqcRW07u5DUPtfmqZ6yY3KKLjcxi2axlDlY4dvy5AAAAxBJREFUSMeFllVbG0EUhjdJkRiQAEkgIZAUSAkJUoK7u2sp7loopVCgtLi7S93d3d3dXfaXtGVneXrBWeb6fd5zvpmds4NhlCsh2jTtMw1bZq1ifHf6Nr9iOSzoY0SMakC6mhLyCnr0XAenx8X//kWFHTvk7oDjOHNS4wRDvYyLlkb4wrJLhrFLfv7aBIU7zEIQjXHen01AbM5UEoQdveHPIiimeFgwA7hEWZa6BKUrfgduCMPGDfXFDtsSC2zvpqZKdx3kCnsscAROKLC+yg65zFraAdf6Hj8f1JeO6p4S6Gt6plZdR1BG1m2jgGtdYL012lTj/hd9JkDGbg+1MXIlC8PHgYzXC4NJ10th7NalKcPAK95oJ4zUwvBIIOM1P28mypjc1g70RSutsEYu49tzjYCrKK+czMiaTboFuM4cEeajjHU+tRKg+5PRp/KRSzu4LHwlcI55TmJ0QqwqD0+gYkDpQRXp8vaQFAEnVHxYZYVcp8s8gYoBnhUnSJfP8UaA6n0lDCNdF8qLE5aExjtGP71GW6+4PxIdsLTrS6LtGMqot/npA6AiNjTCQX3hcUnPDKELmTooJjHF3SdeEPZ13kmNLltBxEMJcI0wE16PjSUR1Ko6+I4yEhwqTYOWixeuORWcjbSSyrNoROmaNSvh2cgoPLCf5FpiDeDxaepGjoOxLVJH0Ld3n7sdOahah7TA0S5a9LFvDoTCM77EJmItwenHDW8AfTTR7j0OqG5M/EYwB7YrKz0K+XxtYZ/hGhcNqsv0taXw7dju3En6zil5ECbrkDsXIF9NyGWwLsbtckb94ZyQqyAns3dJ2UZg9Jp4iv2zN02vRv3F2DZw4bzyKT3UnyLbgg/6eBbZ5nQCzMlI5MI5BK7mKIdeJoXPwCWXQydvZag9eN94//kmuuynIU5rp+sk4jo1aRI4hzQjB3FRKT/hnzjfItNcn+DMNDAm4wpyFQs5WClzVA8MA3nI3/lC5/wwTaV8r/Ab3jrgb1oTRY7Ujx9+2vv+CfmybySZSGrzgYEtuxK6+yT/Pro/LXPZZKABABYAAAAASUVORK5CYII="},lB0e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAAyVBMVEVHcExoOqVpO6RoO6VnOaRoOqVoOqZpOaZmPKdoOqVoOqVoOqVpO6NnOqRpOqVpO6VqOadoOqVoO6RoOqZoOaVoOqVqOqRoOaVnOqVoO6VnOqZoOqVnPKZoOKdoOqVoO6RoOqVoOqRoOqZnOqVnO6dpOqVoOaRnO6VoOqVpOqVoOaZoO6VoOaFoO6VlPKhoOqVoOaVpO6NoOqVoOqVqOqRnO6VnOqVoOqRnO6RoOqJpO6RpOqVnO6ZoOaZoOqVpOaVoOqVnOqVoOqUwTB45AAAAQnRSTlMA+ziqiqKJUDf6+fhOo6iLOvyHU46nNTZPpTmkTSD95+imjIg0jVFS93egxBuCJsC2J4XGRkqDZXkWSdlFeMv0zrlfCCN3AAABPUlEQVQ4y5WV6VLCQBCEl4BICFcCElG5FA9EBW9BPNj3fygx2a0MNdNUdn92vurqnZ3MKNXf/Hyv1e65H43elHR+9fZc70jv/1JDgnVyDqk0S6QihHWbSMVUEry/NPN+9CEdce/4RqMkF4a+yqRuNZWOOP1kaFKTbgC9yzz3BHtbupZJlRDS59zbM9517H1GvAuQLgne5panmK5x74NcNbG5e5xuGvqYePvQu8RpL4TeHZ77BHvbJK+EDiFtvV8yqWW8bzl9mX7xl9xbwSQRkVoFBKtp8uWZSv3hfnieC3aJYS44uCMsuqAt3YqXro4ehbS1NwCN2uGNV6mCBxQaybZ0Lw+L2sil+V1+K5cf1mUUCEMmDgArjK/Y1GGcI+8kAGzEWThyXYa5y5r44Bke4AISVtsCLithaX6CdfIH7MOaYpoMKc0AAAAASUVORK5CYII="},qUus:function(t,e){},wFrA:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"activityIntroduced"},[a("p",[t._v(t._s(t.$t("m.activityIntroduced1")))]),t._v(" "),a("p",[t._v(t._s(t.$t("m.activityIntroduced2")))]),t._v(" "),a("p",[t._v(t._s(t.$t("m.activityIntroduced3")))])])},staticRenderFns:[]};var i=a("VU/8")({name:"activityIntroduced",data:function(){return{}},mounted:function(){}},n,!1,function(t){a("qUus")},"data-v-329645d2",null);e.default=i.exports},xyzb:function(t,e){}});