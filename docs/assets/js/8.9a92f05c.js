(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{692:function(t,e,a){},782:function(t,e,a){"use strict";a(692)},793:function(t,e,a){"use strict";a.r(e);a(32),a(12),a(26),a(33);var n={name:"DemoApi",props:{type:{type:String,default:"attr"},title:{type:String,default:"属性"},tableBody:Array,tableHead:String},computed:{tableHeader:function(){return this.tableHead.split("|").map((function(t){return t.replace(/^\s*|\s*$/g,"")}))},tableData:function(){return this.tableBody.map((function(t){var e={};return t.split("|").map((function(t,a){return e[a]=t.replace(/^\s*|\s*$/g,"")})),e}))}}},r=(a(782),a(44)),l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"api-wrap"},[a("h3",[t._v(t._s(t.title))]),t._v(" "),a("el-table",t._g(t._b({staticStyle:{width:"100%"},attrs:{data:t.tableData}},"el-table",t.$attrs,!1),t.$listeners),[t._l(t.tableHeader,(function(t,e){return[a("el-table-column",{attrs:{prop:e+"",label:t}})]}))],2)],1)}),[],!1,null,null,null);e.default=l.exports}}]);