webpackJsonp([1],{NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},a,!1,function(e){s("n3Op")},null,null).exports,i=s("/ocq"),u={name:"Users",props:{user:{type:Object,required:!0}},computed:{userLink:function(){return"/user-detail/"+this.user.id}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user"},[s("div",{staticClass:"user-img"},[s("img",{attrs:{src:e.user.avatar,alt:"User Name"}})]),e._v(" "),s("div",{staticClass:"user-details"},[s("router-link",{attrs:{to:e.userLink}},[s("p",[e._v(e._s(e.user.first_name)+" "+e._s(e.user.last_name))])])],1)])},staticRenderFns:[]},l={name:"HomePage",data:function(){return{userList:[],loading:!0}},created:function(){var e=this;this.axios.get("https://reqres.in/api/users?page=1&per_page=20").then(function(t){e.userList=t.data.data,e.loading=!1})},components:{Users:s("VU/8")(u,o,!1,null,null,null).exports}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"homepage"},[s("div",{staticClass:"users text-center"},[s("h1",{staticClass:"m-set"},[e._v("User List")]),e._v(" "),e.loading?s("p",{staticClass:"m-set"},[e._v("Loading...")]):e._e(),e._v(" "),e.loading?e._e():s("div",{staticClass:"user-list"},e._l(e.userList,function(e,t){return s("users",{key:t,attrs:{user:e}})}))])])},staticRenderFns:[]};var d=s("VU/8")(l,c,!1,function(e){s("YXxU")},"data-v-46c34a75",null).exports,p={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"homepage"},[e.loading?s("p",{staticClass:"text-center m-set"},[e._v("Loading...")]):e._e(),e._v(" "),e.resError?e._e():s("div",{staticClass:"user-list"},[e.loading?e._e():s("div",{staticClass:"user"},[s("div",{staticClass:"user-img"},[s("img",{attrs:{src:e.userDetails.avatar,alt:"User Name"}})]),e._v(" "),s("div",{staticClass:"user-details"},[s("p",[e._v(e._s(e.userDetails.first_name)+" "+e._s(e.userDetails.last_name))])])]),e._v(" "),s("router-link",{attrs:{to:"/"}},[e._v("Geri")])],1),e._v(" "),e.resError?s("div",{staticClass:"error-message"},[s("h1",[e._v("User not found")]),e._v(" "),s("router-link",{attrs:{to:"/"}},[e._v("Geri")])],1):e._e()])},staticRenderFns:[]};var v=s("VU/8")({name:"UserDetail",data:function(){return{userDetails:[],usersId:this.$route.params.id,resError:!1,loading:!0}},created:function(){var e=this;this.axios.get("https://reqres.in/api/users/"+this.usersId).then(function(t){e.userDetails=t.data.data,e.loading=!1}).catch(function(t){e.resError=!0,e.loading=!1})}},p,!1,function(e){s("quMj")},"data-v-be589fe2",null).exports;r.a.use(i.a);var _=new i.a({mode:"history",routes:[{path:"/",name:"HomePage",component:d},{path:"/user-detail/:id",name:"UserDetail",component:v}]}),m=s("mtWM"),f=s.n(m),g=s("Rf8U"),h=s.n(g);r.a.use(h.a,f.a),r.a.config.productionTip=!1,new r.a({el:"#app",router:_,components:{App:n},template:"<App/>"})},YXxU:function(e,t){},n3Op:function(e,t){},quMj:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.67571b34c301d6647db6.js.map