(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{10:function(e,t,c){"use strict";var s=c(0),r=c(8);function o(e){var t,c,r,o,l,i,b,n,a,h,O,j,d,f,w,u=e.$showAdminArea?"user's":"";return{c(){t=Object(s.s)("p"),c=Object(s.N)("Switch toggle to show or hide "),r=Object(s.N)(u),o=Object(s.N)(" kitty"),l=Object(s.M)(),i=Object(s.s)("div"),b=Object(s.s)("label"),n=Object(s.s)("input"),a=Object(s.M)(),h=Object(s.s)("span"),O=Object(s.N)("On"),j=Object(s.M)(),d=Object(s.s)("span"),f=Object(s.N)("Off"),this.h()},l(e){t=Object(s.i)(e,"P",{class:!0},!1);var w=Object(s.h)(t);c=Object(s.k)(w,"Switch toggle to show or hide "),r=Object(s.k)(w,u),o=Object(s.k)(w," kitty"),w.forEach(s.r),l=Object(s.j)(e),i=Object(s.i)(e,"DIV",{class:!0},!1);var v=Object(s.h)(i);b=Object(s.i)(v,"LABEL",{class:!0},!1);var m=Object(s.h)(b);n=Object(s.i)(m,"INPUT",{type:!0,checked:!0,class:!0},!1),Object(s.h)(n).forEach(s.r),a=Object(s.j)(m),h=Object(s.i)(m,"SPAN",{class:!0},!1);var k=Object(s.h)(h);O=Object(s.k)(k,"On"),k.forEach(s.r),j=Object(s.j)(m),d=Object(s.i)(m,"SPAN",{class:!0},!1);var g=Object(s.h)(d);f=Object(s.k)(g,"Off"),g.forEach(s.r),m.forEach(s.r),v.forEach(s.r),this.h()},h(){Object(s.e)(t,"class","svelte-198kwew"),Object(s.e)(n,"type","checkbox"),n.checked=e.$showKitty,Object(s.e)(n,"class","svelte-198kwew"),Object(s.e)(h,"class","switch-left svelte-198kwew"),Object(s.e)(d,"class","switch-right svelte-198kwew"),Object(s.e)(b,"class","rocker svelte-198kwew"),Object(s.e)(i,"class","mid svelte-198kwew"),w=Object(s.E)(n,"click",e.handleChange)},m(e,w){Object(s.C)(e,t,w),Object(s.c)(t,c),Object(s.c)(t,r),Object(s.c)(t,o),Object(s.C)(e,l,w),Object(s.C)(e,i,w),Object(s.c)(i,b),Object(s.c)(b,n),Object(s.c)(b,a),Object(s.c)(b,h),Object(s.c)(h,O),Object(s.c)(b,j),Object(s.c)(b,d),Object(s.c)(d,f)},p(e,t){e.$showAdminArea&&u!==(u=t.$showAdminArea?"user's":"")&&Object(s.L)(r,u),e.$showKitty&&(n.checked=t.$showKitty)},i:s.G,o:s.G,d(e){e&&(Object(s.r)(t),Object(s.r)(l),Object(s.r)(i)),w()}}}function l(e,t,c){let o,l;Object(s.l)(e,r.a,e=>{c("$showAdminArea",o=e)}),Object(s.l)(e,r.b,e=>{c("$showKitty",l=e)});return{handleChange:()=>{r.b.update(e=>!e)},$showAdminArea:o,$showKitty:l}}class i extends s.a{constructor(e){var t;super(),document.getElementById("svelte-198kwew-style")||((t=Object(s.s)("style")).id="svelte-198kwew-style",t.textContent='.svelte-198kwew,.svelte-198kwew:before,.svelte-198kwew:after{box-sizing:inherit;margin:0;padding:0}.mid.svelte-198kwew{display:flex;align-items:center;justify-content:center;padding-bottom:1em}.rocker.svelte-198kwew{display:inline-block;position:relative;font-size:2em;font-weight:bold;text-align:center;text-transform:uppercase;color:#888;width:7em;height:4em;overflow:hidden;border-bottom:0.5em solid #eee}.rocker.svelte-198kwew::before{content:"";position:absolute;top:1em;left:0;right:0;bottom:0;background-color:#999;border:0.5em solid #eee;border-bottom:0}.rocker.svelte-198kwew input.svelte-198kwew{opacity:0;width:0;height:0}.switch-left.svelte-198kwew,.switch-right.svelte-198kwew{cursor:pointer;position:absolute;display:flex;align-items:center;justify-content:center;height:2.5em;width:3em;transition:0.2s}.switch-left.svelte-198kwew{height:2.4em;width:2.75em;left:0.85em;bottom:0.4em;background-color:#ddd;transform:rotate(15deg) skewX(15deg)}.switch-right.svelte-198kwew{right:0.5em;bottom:0;background-color:#bd5757;color:#fff}.switch-left.svelte-198kwew::before,.switch-right.svelte-198kwew::before{content:"";position:absolute;width:0.4em;height:2.45em;bottom:-0.45em;background-color:#ccc;transform:skewY(-65deg)}.switch-left.svelte-198kwew::before{left:-0.4em}.switch-right.svelte-198kwew::before{right:-0.375em;background-color:transparent;transform:skewY(65deg)}input:checked+.switch-left.svelte-198kwew{background-color:#0084d0;color:#fff;bottom:0px;left:0.5em;height:2.5em;width:3em;transform:rotate(0deg) skewX(0deg)}input:checked+.switch-left.svelte-198kwew::before{background-color:transparent;width:3.0833em}input:checked+.switch-left+.switch-right.svelte-198kwew{background-color:#ddd;color:#888;bottom:0.4em;right:0.8em;height:2.4em;width:2.75em;transform:rotate(-15deg) skewX(-15deg)}input:checked+.switch-left+.switch-right.svelte-198kwew::before{background-color:#ccc}input:focus+.switch-left.svelte-198kwew{color:#333}input:checked:focus+.switch-left.svelte-198kwew{color:#fff}input:focus+.switch-left+.switch-right.svelte-198kwew{color:#fff}input:checked:focus+.switch-left+.switch-right.svelte-198kwew{color:#333}p.svelte-198kwew{text-align:center}',Object(s.c)(document.head,t)),Object(s.B)(this,e,l,o,s.J,[])}}t.a=i},13:function(e,t,c){"use strict";c.r(t);var s=c(0);function r(e){var t,c;return{c(){t=Object(s.s)("div"),c=Object(s.s)("div"),this.h()},l(e){t=Object(s.i)(e,"DIV",{class:!0},!1);var r=Object(s.h)(t);c=Object(s.i)(r,"DIV",{class:!0},!1),Object(s.h)(c).forEach(s.r),r.forEach(s.r),this.h()},h(){Object(s.e)(c,"class","svelte-1dvheto"),Object(s.e)(t,"class","lds-heart svelte-1dvheto")},m(e,r){Object(s.C)(e,t,r),Object(s.c)(t,c)},p:s.G,i:s.G,o:s.G,d(e){e&&Object(s.r)(t)}}}class o extends s.a{constructor(e){var t;super(),document.getElementById("svelte-1dvheto-style")||((t=Object(s.s)("style")).id="svelte-1dvheto-style",t.textContent='.lds-heart.svelte-1dvheto{display:inline-block;position:relative;width:64px;height:64px;transform:rotate(45deg);transform-origin:32px 32px}.lds-heart.svelte-1dvheto div.svelte-1dvheto{top:23px;left:19px;position:absolute;width:26px;height:26px;background:rgb(235, 15, 15);animation:svelte-1dvheto-lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1)}.lds-heart.svelte-1dvheto div.svelte-1dvheto:after,.lds-heart.svelte-1dvheto div.svelte-1dvheto:before{content:" ";position:absolute;display:block;width:26px;height:26px;background:rgb(235, 15, 15)}.lds-heart.svelte-1dvheto div.svelte-1dvheto:before{left:-17px;border-radius:50% 0 0 50%}.lds-heart.svelte-1dvheto div.svelte-1dvheto:after{top:-17px;border-radius:50% 50% 0 0}@keyframes svelte-1dvheto-lds-heart{0%{transform:scale(0.95)}5%{transform:scale(1.1)}39%{transform:scale(0.85)}45%{transform:scale(1)}60%{transform:scale(0.95)}100%{transform:scale(0.9)}}',Object(s.c)(document.head,t)),Object(s.B)(this,e,null,r,s.J,[])}}var l=o;function i(e){var t,c;return{c(){t=Object(s.s)("p"),c=Object(s.N)("Failed to load kitty image")},l(e){t=Object(s.i)(e,"P",{},!1);var r=Object(s.h)(t);c=Object(s.k)(r,"Failed to load kitty image"),r.forEach(s.r)},m(e,r){Object(s.C)(e,t,r),Object(s.c)(t,c)},p:s.G,i:s.G,o:s.G,d(e){e&&Object(s.r)(t)}}}function b(e){var t;return{c(){t=Object(s.s)("img"),this.h()},l(e){t=Object(s.i)(e,"IMG",{src:!0,alt:!0,class:!0},!1),Object(s.h)(t).forEach(s.r),this.h()},h(){Object(s.e)(t,"src",e.src),Object(s.e)(t,"alt","Kitty Gif"),Object(s.e)(t,"class","object-contain h-48 w-full")},m(e,c){Object(s.C)(e,t,c)},p:s.G,i:s.G,o:s.G,d(e){e&&Object(s.r)(t)}}}function n(e){var t,c,r,o,i,b=new l({});return{c(){t=Object(s.s)("div"),b.$$.fragment.c(),c=Object(s.M)(),r=Object(s.s)("p"),o=Object(s.N)("Loading your kitty"),this.h()},l(e){t=Object(s.i)(e,"DIV",{class:!0},!1);var l=Object(s.h)(t);b.$$.fragment.l(l),c=Object(s.j)(l),r=Object(s.i)(l,"P",{class:!0},!1);var i=Object(s.h)(r);o=Object(s.k)(i,"Loading your kitty"),i.forEach(s.r),l.forEach(s.r),this.h()},h(){Object(s.e)(r,"class","text-4xl"),Object(s.e)(t,"class","flex justify-center align-center")},m(e,l){Object(s.C)(e,t,l),Object(s.F)(b,t,null),Object(s.c)(t,c),Object(s.c)(t,r),Object(s.c)(r,o),i=!0},p:s.G,i(e){i||(Object(s.O)(b.$$.fragment,e),i=!0)},o(e){Object(s.P)(b.$$.fragment,e),i=!1},d(e){e&&Object(s.r)(t),Object(s.q)(b)}}}function a(e){var t,c;let r={ctx:e,current:null,token:null,pending:n,then:b,catch:i,value:"src",error:"null",blocks:[,,,]};return Object(s.A)(e.kittyUrl,r),{c(){t=Object(s.s)("figure"),r.block.c(),this.h()},l(e){t=Object(s.i)(e,"FIGURE",{class:!0},!1);var c=Object(s.h)(t);r.block.l(c),c.forEach(s.r),this.h()},h(){Object(s.e)(t,"class","flex justify-center")},m(e,o){Object(s.C)(e,t,o),r.block.m(t,r.anchor=null),r.mount=()=>t,r.anchor=null,c=!0},p(t,c){e=c,r.block.p(t,Object(s.d)(Object(s.d)({},e),r.resolved))},i(e){c||(Object(s.O)(r.block),c=!0)},o(e){for(let e=0;e<3;e+=1){const t=r.blocks[e];Object(s.P)(t)}c=!1},d(e){e&&Object(s.r)(t),r.block.d(),r.token=null,r=null}}}function h(e){return{kittyUrl:async function(){const e=await fetch("https://api.thecatapi.com/v1/images/search?limit=1&size=full",{headers:{"x-api-key":"4ba6ad98-b2e1-4e4d-976c-6888d3dcf759"}});return(await e.json())[0].url}()}}class O extends s.a{constructor(e){super(),Object(s.B)(this,e,h,a,s.J,[])}}var j=O,d=c(10),f=c(8),w=c(9);function u(e){var t,c=new j({});return{c(){c.$$.fragment.c()},l(e){c.$$.fragment.l(e)},m(e,r){Object(s.F)(c,e,r),t=!0},i(e){t||(Object(s.O)(c.$$.fragment,e),t=!0)},o(e){Object(s.P)(c.$$.fragment,e),t=!1},d(e){Object(s.q)(c,e)}}}function v(e){var t,c,r,o,l,i,b=new d.a({}),n=e.$showKitty&&u();return{c(){t=Object(s.s)("h2"),c=Object(s.N)("Member Area"),r=Object(s.M)(),o=Object(s.s)("div"),b.$$.fragment.c(),l=Object(s.M)(),n&&n.c(),this.h()},l(e){t=Object(s.i)(e,"H2",{class:!0},!1);var i=Object(s.h)(t);c=Object(s.k)(i,"Member Area"),i.forEach(s.r),r=Object(s.j)(e),o=Object(s.i)(e,"DIV",{},!1);var a=Object(s.h)(o);b.$$.fragment.l(a),l=Object(s.j)(a),n&&n.l(a),a.forEach(s.r),this.h()},h(){Object(s.e)(t,"class","text-3xl")},m(e,a){Object(s.C)(e,t,a),Object(s.c)(t,c),Object(s.C)(e,r,a),Object(s.C)(e,o,a),Object(s.F)(b,o,null),Object(s.c)(o,l),n&&n.m(o,null),i=!0},p(e,t){t.$showKitty?n?Object(s.O)(n,1):((n=u()).c(),Object(s.O)(n,1),n.m(o,null)):n&&(Object(s.z)(),Object(s.P)(n,1,1,()=>{n=null}),Object(s.g)())},i(e){i||(Object(s.O)(b.$$.fragment,e),Object(s.O)(n),i=!0)},o(e){Object(s.P)(b.$$.fragment,e),Object(s.P)(n),i=!1},d(e){e&&(Object(s.r)(t),Object(s.r)(r),Object(s.r)(o)),Object(s.q)(b),n&&n.d()}}}function m(e){var t,c=new w.a({props:{$$slots:{default:[v]},$$scope:{ctx:e}}});return{c(){c.$$.fragment.c()},l(e){c.$$.fragment.l(e)},m(e,r){Object(s.F)(c,e,r),t=!0},p(e,t){var s={};(e.$$scope||e.$showKitty)&&(s.$$scope={changed:e,ctx:t}),c.$set(s)},i(e){t||(Object(s.O)(c.$$.fragment,e),t=!0)},o(e){Object(s.P)(c.$$.fragment,e),t=!1},d(e){Object(s.q)(c,e)}}}function k(e,t,c){let r;Object(s.l)(e,f.b,e=>{c("$showKitty",r=e)});let{segment:o}=t;return e.$set=e=>{"segment"in e&&c("segment",o=e.segment)},{segment:o,$showKitty:r}}class g extends s.a{constructor(e){super(),Object(s.B)(this,e,k,m,s.J,["segment"])}}t.default=g},8:function(e,t,c){"use strict";c.d(t,"b",(function(){return r})),c.d(t,"a",(function(){return o}));var s=c(1);const r=Object(s.a)(!1),o=Object(s.a)(!1)},9:function(e,t,c){"use strict";var s=c(0),r=(c(2),c(4));function o(e){var t,c,o;const l=e.$$slots.default,i=Object(s.p)(l,e,null);return{c(){t=Object(s.s)("div"),i&&i.c(),this.h()},l(e){t=Object(s.i)(e,"DIV",{class:!0},!1);var c=Object(s.h)(t);i&&i.l(c),c.forEach(s.r),this.h()},h(){Object(s.e)(t,"class","relative")},m(e,c){Object(s.C)(e,t,c),i&&i.m(t,null),o=!0},p(e,t){i&&i.p&&e.$$scope&&i.p(Object(s.v)(l,t,e,null),Object(s.w)(l,t,null))},i(e){o||(Object(s.O)(i,e),c||Object(s.b)(()=>{(c=Object(s.o)(t,r.a,{})).start()}),o=!0)},o(e){Object(s.P)(i,e),o=!1},d(e){e&&Object(s.r)(t),i&&i.d(e)}}}function l(e,t,c){let{$$slots:s={},$$scope:r}=t;return e.$set=e=>{"$$scope"in e&&c("$$scope",r=e.$$scope)},{$$slots:s,$$scope:r}}class i extends s.a{constructor(e){super(),Object(s.B)(this,e,l,o,s.J,[])}}t.a=i}}]);