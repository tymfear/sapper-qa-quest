(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{7:function(e,t,a){"use strict";var c=a(0);function n(e){var t;return document.title=t="QA Quest "+(e.appName?`- ${e.appName}`:""),{c:c.A,l:c.A,m:c.A,p(e,a){e.appName&&t!==(t="QA Quest "+(a.appName?`- ${a.appName}`:""))&&(document.title=t)},i:c.A,o:c.A,d:c.A}}function s(e,t,a){let{appName:c}=t;return e.$set=e=>{"appName"in e&&a("appName",c=e.appName)},{appName:c}}t.a=class extends c.a{constructor(e){super(),Object(c.v)(this,e,s,n,c.D,["appName"])}}},9:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(3),s=a(7),o=a(2),r=a(4);function b(e){var t,a,n,o,b,i,l,j,O,d=new s.a({});return{c(){d.$$.fragment.c(),t=Object(c.G)(),a=Object(c.n)("div"),n=Object(c.n)("h1"),o=Object(c.I)("Choose your quest"),b=Object(c.G)(),i=Object(c.n)("div"),l=Object(c.n)("a"),j=Object(c.I)("Show me a Kitty!"),this.h()},l(e){d.$$.fragment.l(e),t=Object(c.i)(e,"\n\n"),a=Object(c.h)(e,"DIV",{id:!0,class:!0},!1);var s=Object(c.g)(a);n=Object(c.h)(s,"H1",{},!1);var r=Object(c.g)(n);o=Object(c.i)(r,"Choose your quest"),r.forEach(c.m),b=Object(c.i)(s,"\n\n  "),i=Object(c.h)(s,"DIV",{id:!0,class:!0},!1);var O=Object(c.g)(i);l=Object(c.h)(O,"A",{href:!0,class:!0},!1);var u=Object(c.g)(l);j=Object(c.i)(u,"Show me a Kitty!"),u.forEach(c.m),O.forEach(c.m),s.forEach(c.m),this.h()},h(){Object(c.d)(l,"href",Object(r.a)("/kitty")),Object(c.d)(l,"class","svelte-1fx3a60"),Object(c.d)(i,"id","navigator-links"),Object(c.d)(i,"class","svelte-1fx3a60"),Object(c.d)(a,"id","quest-navigator"),Object(c.d)(a,"class","svelte-1fx3a60")},m(e,s){Object(c.z)(d,e,s),Object(c.w)(e,t,s),Object(c.w)(e,a,s),Object(c.b)(a,n),Object(c.b)(n,o),Object(c.b)(a,b),Object(c.b)(a,i),Object(c.b)(i,l),Object(c.b)(l,j),O=!0},p:c.A,i(e){O||(Object(c.J)(d.$$.fragment,e),O=!0)},o(e){Object(c.K)(d.$$.fragment,e),O=!1},d(e){Object(c.l)(d,e),e&&(Object(c.m)(t),Object(c.m)(a))}}}function i(e){return Object(o.c)(()=>{n.a.update(e=>({...e,questName:"Choose your quest"}))}),{}}t.default=class extends c.a{constructor(e){var t;super(),document.getElementById("svelte-1fx3a60-style")||((t=Object(c.n)("style")).id="svelte-1fx3a60-style",t.textContent="#quest-navigator.svelte-1fx3a60{display:flex;align-items:center;flex-direction:column}#navigator-links.svelte-1fx3a60{width:100%}#navigator-links.svelte-1fx3a60 a.svelte-1fx3a60{background-color:orange;display:block;text-align:center;text-decoration:none;color:white;padding:1rem;font-size:1rem}#navigator-links.svelte-1fx3a60 a.svelte-1fx3a60:hover{color:orange;background-color:white;border:orange 1px solid}",Object(c.b)(document.head,t)),Object(c.v)(this,e,i,b,c.D,[])}}}}]);