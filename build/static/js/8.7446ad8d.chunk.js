(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[8],{48:function(e,t,c){"use strict";var s=c(13),a=c(38),n=(c(50),c(0)),r=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(n.jsxs)("div",{className:"skeleton",children:[Object(n.jsxs)("div",{className:"pulse skeleton__header",children:[Object(n.jsx)("div",{className:"pulse skeleton__circle"}),Object(n.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"}),Object(n.jsx)("div",{className:"pulse skeleton__block"})]})]})};t.a=function(e,t,c){switch(e){case"waiting":return Object(n.jsx)(r,{});case"loading":return Object(n.jsx)(s.a,{});case"confirmed":return Object(n.jsx)(t,{data:c});case"error":return Object(n.jsx)(a.a,{});default:throw new Error("Unexpected process state")}}},50:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var s=c(36),a=c(2),n=c(1),r=c(39),i=c(62),l=c(48),o=c(0);t.default=function(e){var t=e.Component,c=e.dataType,j=Object(a.useParams)().id,u=Object(n.useState)(null),b=Object(s.a)(u,2),d=b[0],m=b[1],O=Object(r.a)(),h=O.getComic,f=O.clearError,p=O.getCharacter,x=O.process,_=O.setProcess;Object(n.useEffect)((function(){k()}),[j]);var k=function(){switch(f(),c){case"comic":h(j).then(v).then((function(){return _("confirmed")}));break;case"character":p(j).then(v).then((function(){return _("confirmed")}))}},v=function(e){m(e)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{}),Object(l.a)(x,t,d)]})}}}]);
//# sourceMappingURL=8.7446ad8d.chunk.js.map