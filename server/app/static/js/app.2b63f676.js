(function(e){function t(t){for(var a,r,c=t[0],o=t[1],l=t[2],u=0,h=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&h.push(n[r][0]),n[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(h.length)h.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var e,t=0;t<i.length;t++){for(var s=i[t],a=!0,c=1;c<s.length;c++){var o=s[c];0!==n[o]&&(a=!1)}a&&(i.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},i=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=o;i.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"03c9":function(e,t,s){e.exports=s.p+"../static/img/sweater.1cb62d44.png"},"32fc":function(e,t,s){e.exports=s.p+"../static/img/shirt.fbe061bf.png"},"4f3d":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=s("289d"),i=(s("5abe"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e.dashboardSelected?e._e():s("Home",{on:{"open-dashboard":function(t){return e.openDashboard(t)}}}),e.dashboardSelected?s("Dashboard",{attrs:{product:e.product},on:{"close-dashboard":e.closeDashboard}}):e._e()],1)}),r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"home"}},[a("b-navbar",{staticClass:"is-primary",attrs:{spaced:"",shadow:""}},[a("template",{slot:"brand"},[a("b-navbar-item",[a("h1",{staticClass:"title has-text-white"},[e._v(" Urban Closet "),a("br"),a("h2",{staticClass:"subtitle has-text-light"},[e._v("Review Dashboard")])])])],1),a("template",{slot:"end"},[a("div",{staticClass:"search"},[a("b-input",{attrs:{placeholder:"Search...",type:"search",rounded:"",icon:"magnify",size:"is-large"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)])],2),a("div",{staticClass:"container is-fullhd"},[a("div",{staticClass:"field"},[e.isTagActive?a("b-tag",{attrs:{type:"is-danger",size:"is-medium",closable:"","aria-close-label":"Close tag"},on:{close:function(t){e.isTagActive=!1}}},[e._v(" This is an MVP for Urban Closet. The only working product is the sweater. ")]):e._e()],1),a("div",{staticClass:"columns is-multiline"},e._l(e.filteredProducts,(function(t){return a("div",{key:t.name,staticClass:"column is-one-third"},[a("div",{staticClass:"card",on:{click:function(s){return e.openDashboard(t.name)}}},[a("figure",{staticClass:"image is-1by1"},[a("img",{attrs:{src:s("bb6e")("./"+t.file)}})])])])})),0)])],1)},o=[],l=(s("4de4"),s("b0c0"),s("ac1f"),s("841c"),s("2ca0"),{name:"Home",props:{},data:function(){return{isTagActive:!0,search:"",products:[{name:"sweater",file:"sweater.png"},{name:"pants",file:"pants.png"},{name:"handbag",file:"handbag.png"},{name:"shoe",file:"shoes.png"},{name:"shirt",file:"shirt.png"},{name:"dress",file:"dress.png"}]}},methods:{openDashboard:function(e){this.$emit("open-dashboard",e)}},computed:{filteredProducts:function(){var e=this;return this.search?this.products.filter((function(t){return t.name.startsWith(e.search)})):this.products}}}),d=l,u=(s("8241"),s("2877")),h=Object(u["a"])(d,c,o,!1,null,"3cebd910",null),p=h.exports,f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"dashboard"}},[s("b-navbar",{staticClass:"is-primary",attrs:{spaced:"",shadow:""}},[s("template",{slot:"brand"},[s("b-navbar-item",{on:{click:e.closeDashboard}},[s("h1",{staticClass:"title has-text-white"},[e._v(" Urban Closet "),s("br"),s("h2",{staticClass:"subtitle has-text-light"},[e._v("Review Dashboard")])])])],1),s("template",{slot:"end"},[s("b-navbar-item",{staticClass:"is-size-5",attrs:{href:"#"},on:{click:e.closeDashboard}},[e._v(" Home ")])],1)],2),e.axiosDone?s("div",{staticClass:"container is-fullhd"},[s("h1",{staticClass:"title",attrs:{id:"product"}},[e._v(" "+e._s(e.product.charAt(0).toUpperCase()+e.product.slice(1))+" ")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-two-thirds"},[s("div",{staticClass:"card",attrs:{id:"summary"}},[s("h1",{staticClass:"title is-size-3 has-text-centered"},[e._v(" Sentiment Summary ")]),e.db[e.weekSelected].sentiment?s("h2",{staticClass:"is-size-1 has-text-centered has-text-success"},[e._v(" "+e._s(e.db[e.weekSelected].percentage+" Positive")+" ")]):e._e(),e.db[e.weekSelected].sentiment?e._e():s("h2",{staticClass:"is-size-1 has-text-centered has-text-danger"},[e._v(" "+e._s(e.db[e.weekSelected].percentage+" Negative")+" ")])]),s("div",{staticClass:"card",attrs:{id:"common"}},[s("h1",{staticClass:"title is-size-3 has-text-centered"},[e._v(" Common Themes ")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"card column"},[s("h2",{staticClass:"title is-size-4 has-text-centered has-text-success"},[e._v(" Positive Keywords ")]),s("ol",e._l(e.db[e.weekSelected].posWords,(function(t){return s("li",{key:t,staticClass:"is-size-4"},[e._v(" "+e._s(t)+" ")])})),0)]),s("div",{staticClass:"card column"},[s("h2",{staticClass:"title is-size-4 has-text-centered has-text-danger"},[e._v(" Negative Keywords ")]),s("ol",e._l(e.db[e.weekSelected].negWords,(function(t){return s("li",{key:t,staticClass:"is-size-4"},[e._v(" "+e._s(t)+" ")])})),0)])])]),s("div",{staticClass:"card",attrs:{id:"sales"}},[s("h1",{staticClass:"title is-size-3 has-text-centered"},[e._v(" Sales ")]),s("div",{staticClass:"columns"},[s("div",{staticClass:"card column"},[s("h2",{staticClass:"title is-size-4 has-text-centered"},[e._v(" Sales This Week ")]),s("h1",{staticClass:"title is-size-2 has-text-centered has-text-primary"},[e._v(" "+e._s(e.db[e.weekSelected].sales)+" ")])]),s("div",{staticClass:"card column"},[s("h2",{staticClass:"title is-size-4 has-text-centered"},[e._v(" Project Sales Next Week ")]),s("h1",{staticClass:"title is-size-2 has-text-centered has-text-primary"},[e._v(" "+e._s(e.db[e.weekSelected].projectSales)+" ")])])])]),s("div",{staticClass:"card",attrs:{id:"graph"}},[s("b-tabs",{staticClass:"block",attrs:{size:"is-large",position:"is-centered"}},[s("b-tab-item",{attrs:{label:"Sales Chart"}},[s("Saleschart",{attrs:{db:e.db}})],1),s("b-tab-item",{attrs:{label:"Sentiment Chart"}},[s("Sentimentchart",{attrs:{db:e.db}})],1)],1)],1),s("div",{staticClass:"card",attrs:{id:"input"}},[s("h1",{staticClass:"title is-size-3 has-text-centered"},[e._v(" Analyze a Comment ")]),s("b-field",{attrs:{label:""}},[s("b-input",{attrs:{type:"textarea"},on:{change:e.clearResult},model:{value:e.analyzeInput,callback:function(t){e.analyzeInput=t},expression:"analyzeInput"}})],1),s("b-field",[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-primary is-medium",on:{click:function(t){return e.getResult()}}},[e._v(" Send Comment ")])]),e.analyzeResult&&"Positive"==e.analyzeResult.sentiment?s("h2",{staticClass:"title is-size-4 has-text-right has-text-success result"},[e._v(" "+e._s((100*e.analyzeResult.prob).toFixed(2)+"% Positive")+" ")]):e._e(),e.analyzeResult&&"Negative"==e.analyzeResult.sentiment?s("h2",{staticClass:"title is-size-4 has-text-right has-text-danger result"},[e._v(" "+e._s((100*e.analyzeResult.prob).toFixed(2)+"% Negative")+" ")]):e._e()])],1)]),s("div",{staticClass:"column is-one-third"},[s("div",{staticClass:"card",attrs:{id:"week"}},[s("b-field",{attrs:{label:"Select a week:"}},[s("b-select",{attrs:{rounded:"",expanded:"",size:"is-large",icon:"calendar-question"},model:{value:e.weekSelected,callback:function(t){e.weekSelected=t},expression:"weekSelected"}},e._l(e.weeks(),(function(t){return s("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0)],1)],1),s("div",{staticClass:"card",attrs:{id:"comments"}},e._l(e.db[e.weekSelected].comments,(function(t){return s("div",{key:t.id,staticClass:"card"},[s("h3",{staticClass:"title is-size-5 is-marginless"},[e._v(" Comment #"+e._s(t.id)+" ")]),s("h4",{staticClass:"subtitle is-marginless"},[e._v(" "+e._s(t.date)+" ")]),t.sentiment?s("h5",{staticClass:"subtitle is-size-6 has-text-success"},[e._v(" "+e._s(t.percentage+" Positive")+" ")]):e._e(),t.sentiment?e._e():s("h5",{staticClass:"subtitle is-size-6 has-text-danger"},[e._v(" "+e._s(t.percentage+" Negative")+" ")]),s("p",[e._v(e._s(t.comment))])])})),0)])])]):e._e()],1)},b=[],m=(s("b64b"),s("bc3a")),v=s.n(m),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sales"},[s("apexcharts",{attrs:{type:"line",options:e.chartOptions,series:e.series}})],1)},C=[],_=(s("4160"),s("159b"),s("1321")),y=s.n(_),x={name:"Saleschart",props:{db:parent.db},components:{apexcharts:y.a},data:function(){return{chartOptions:{chart:{id:"sales-line"},xaxis:{categories:this.getCategories()}},series:[{name:"Sales",data:this.getSeries()}]}},methods:{getCategories:function(){var e=[],t=this.db,s=Object.keys(t).sort((function(e,s){return t[e].week-t[s].week}));return s.forEach((function(s){e.push(t[s].shortform)})),e},getSeries:function(){var e=[],t=this.db,s=Object.keys(t).sort((function(e,s){return t[e].week-t[s].week}));return s.forEach((function(s){e.push(t[s].sales)})),e}}},k=x,w=Object(u["a"])(k,g,C,!1,null,null,null),S=w.exports,z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"sales"},[s("apexcharts",{attrs:{type:"line",options:e.chartOptions,series:e.series}})],1)},O=[],j={name:"Saleschart",props:{db:parent.db},components:{apexcharts:y.a},data:function(){return{chartOptions:{chart:{id:"sentiment-line"},xaxis:{categories:this.getCategories()}},series:[{name:"Sentiment",data:this.getSeries()}]}},methods:{getCategories:function(){var e=[],t=this.db,s=Object.keys(t).sort((function(e,s){return t[e].week-t[s].week}));return s.forEach((function(s){e.push(t[s].shortform)})),e},getSeries:function(){var e=[],t=this.db,s=Object.keys(t).sort((function(e,s){return t[e].week-t[s].week}));return s.forEach((function(s){var a=parseInt(t[s].percentage)/100;t[s].sentiment?e.push(a):e.push(-a)})),e}}},D=j,R=Object(u["a"])(D,z,O,!1,null,null,null),P=R.exports,T={name:"Dashboard",components:{Saleschart:S,Sentimentchart:P},props:{product:parent.product},data:function(){return{db:{},axiosDone:!1,weekSelected:"January 6th 2020",analyzeInput:null,analyzeResult:null}},mounted:function(){this.loadData(!1)},methods:{closeDashboard:function(){this.$emit("close-dashboard")},weeks:function(){var e=this.db;return Object.keys(e).sort((function(t,s){return e[t].week-e[s].week}))},loadData:function(e){var t=this;v.a.get("https://urban-closet.herokuapp.com/api/".concat(this.product)).then((function(s){t.db=s.data,t.axiosDone=!0,e&&t.$buefy.toast.open("Connected Successfully")})).catch((function(){t.errored()}))},errored:function(){var e=this;this.$buefy.dialog.confirm({title:"Error",message:"Seems like we had trouble connecting to the comment database!",type:"is-danger",hasIcon:!0,icon:"times-circle",iconPack:"fa",ariaRole:"alertdialog",ariaModal:!0,confirmText:"Retry",onConfirm:function(){e.$buefy.toast.open("Retrying Connection"),setTimeout((function(){return e.loadData(!0)}),500)},cancelText:"Return Home",onCancel:function(){return e.closeDashboard()}})},clearResult:function(){this.analyzeResult=null},getResult:function(){var e=this;v.a.post("https://urban-closet.herokuapp.com/api/classify",{text:this.analyzeInput},{headers:{"Content-Type":"application/json"}}).then((function(t){return e.analyzeResult=t.data})).catch((function(){e.analyzeResult="Error"}))}}},E=T,$=(s("734f"),Object(u["a"])(E,f,b,!1,null,"5299178a",null)),N=$.exports,I={name:"App",components:{Home:p,Dashboard:N},data:function(){return{dashboardSelected:!1,product:null}},methods:{openDashboard:function(e){this.dashboardSelected=!0,this.product=e},closeDashboard:function(){this.dashboardSelected=!1}}},M=I,A=(s("5c0b"),Object(u["a"])(M,i,r,!1,null,null,null)),U=A.exports;a["a"].config.productionTip=!1,a["a"].use(n["a"]),new a["a"]({render:function(e){return e(U)}}).$mount("#app")},"5c0b":function(e,t,s){"use strict";var a=s("9c0c"),n=s.n(a);n.a},"734f":function(e,t,s){"use strict";var a=s("4f3d"),n=s.n(a);n.a},8241:function(e,t,s){"use strict";var a=s("8542"),n=s.n(a);n.a},8542:function(e,t,s){},"9c0c":function(e,t,s){},a7c3:function(e,t,s){e.exports=s.p+"../static/img/shoes.ec4cb065.png"},ad21:function(e,t,s){e.exports=s.p+"../static/img/dress.e240f314.png"},bb6e:function(e,t,s){var a={"./dress.png":"ad21","./handbag.png":"f3cd","./pants.png":"d796","./shirt.png":"32fc","./shoes.png":"a7c3","./sweater.png":"03c9"};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id="bb6e"},d796:function(e,t,s){e.exports=s.p+"../static/img/pants.77bd6611.png"},f3cd:function(e,t,s){e.exports=s.p+"../static/img/handbag.6fb7ea2b.png"}});
//# sourceMappingURL=app.2b63f676.js.map