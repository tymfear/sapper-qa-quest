(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{14:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(5);function a(e){var t,c,a,o,r,b,j=e.segment?"Member":"Admin";return{c(){t=Object(n.q)("nav"),c=Object(n.q)("a"),a=Object(n.L)("Show "),o=Object(n.L)(j),r=Object(n.L)(" Area"),this.h()},l(e){t=Object(n.i)(e,"NAV",{class:!0},!1);var s=Object(n.h)(t);c=Object(n.i)(s,"A",{href:!0,class:!0},!1);var b=Object(n.h)(c);a=Object(n.j)(b,"Show "),o=Object(n.j)(b,j),r=Object(n.j)(b," Area"),b.forEach(n.p),s.forEach(n.p),this.h()},h(){Object(n.e)(c,"href",b=Object(s.a)(e.segment?"/kitty":"/kitty/admin")),Object(n.e)(c,"class","svelte-mf9xs1"),Object(n.e)(t,"class","svelte-mf9xs1")},m(e,s){Object(n.z)(e,t,s),Object(n.c)(t,c),Object(n.c)(c,a),Object(n.c)(c,o),Object(n.c)(c,r)},p(e,t){e.segment&&j!==(j=t.segment?"Member":"Admin")&&Object(n.I)(o,j),e.segment&&b!==(b=Object(s.a)(t.segment?"/kitty":"/kitty/admin"))&&Object(n.e)(c,"href",b)},i:n.D,o:n.D,d(e){e&&Object(n.p)(t)}}}function o(e,t,c){let{segment:n}=t;return e.$set=e=>{"segment"in e&&c("segment",n=e.segment)},{segment:n}}var r=class extends n.a{constructor(e){var t;super(),document.getElementById("svelte-mf9xs1-style")||((t=Object(n.q)("style")).id="svelte-mf9xs1-style",t.textContent="nav.svelte-mf9xs1{text-align:right}a.svelte-mf9xs1{text-decoration:none;color:orange;border:solid orange 0.5px;padding:5px}a.svelte-mf9xs1:hover{box-shadow:0 0 10px rgba(255, 165, 0, 0.5)}",Object(n.c)(document.head,t)),Object(n.y)(this,e,o,a,n.G,["segment"])}},b=c(6),j=c(8),m=c(3),O=c(2);function i(e){var t,c,s,a=new b.a({props:{appName:"Show me a kitty"}}),o=new r({props:{segment:e.segment}});const j=e.$$slots.default,m=Object(n.n)(j,e,null);return{c(){a.$$.fragment.c(),t=Object(n.J)(),o.$$.fragment.c(),c=Object(n.J)(),m&&m.c()},l(e){a.$$.fragment.l(e),t=Object(n.j)(e,"\n"),o.$$.fragment.l(e),c=Object(n.j)(e,"\n\n"),m&&m.l(e)},m(e,r){Object(n.C)(a,e,r),Object(n.z)(e,t,r),Object(n.C)(o,e,r),Object(n.z)(e,c,r),m&&m.m(e,r),s=!0},p(e,t){var c={};e.segment&&(c.segment=t.segment),o.$set(c),m&&m.p&&e.$$scope&&m.p(Object(n.t)(j,t,e,null),Object(n.u)(j,t,null))},i(e){s||(Object(n.M)(a.$$.fragment,e),Object(n.M)(o.$$.fragment,e),Object(n.M)(m,e),s=!0)},o(e){Object(n.N)(a.$$.fragment,e),Object(n.N)(o.$$.fragment,e),Object(n.N)(m,e),s=!1},d(e){Object(n.o)(a,e),e&&Object(n.p)(t),Object(n.o)(o,e),e&&Object(n.p)(c),m&&m.d(e)}}}function l(e,t,c){let{segment:n}=t;Object(O.c)(()=>{j.b.update(()=>Math.random()<.5),m.a.update(e=>({...e,showAuthorInfo:!0,author:"Taras Voloshenko",profileLink:"https://www.linkedin.com/in/taras-voloshenko-12a42912",questName:"Show me a Kitty!"}))});let{$$slots:s={},$$scope:a}=t;return e.$set=e=>{"segment"in e&&c("segment",n=e.segment),"$$scope"in e&&c("$$scope",a=e.$$scope)},{segment:n,$$slots:s,$$scope:a}}t.default=class extends n.a{constructor(e){super(),Object(n.y)(this,e,l,i,n.G,["segment"])}}},8:function(e,t,c){"use strict";c.d(t,"b",function(){return s}),c.d(t,"a",function(){return a});var n=c(1);const s=Object(n.a)(!1),a=Object(n.a)(!1)}}]);