(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,t,i){e.exports=i(14)},,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(0),n=i.n(c),a=i(3),r=i.n(a),d=(i(10),i(1)),s=(i(11),i(12),{find:function(e,t){var i=null,c=!0,n=!1,a=void 0;try{for(var r,d=e[Symbol.iterator]();!(c=(r=d.next()).done);c=!0){var s=r.value;if(t(s)){i=s;break}}}catch(l){n=!0,a=l}finally{try{c||null==d.return||d.return()}finally{if(n)throw a}}return i},findAll:function(e,t){var i=[],c=!0,n=!1,a=void 0;try{for(var r,d=e[Symbol.iterator]();!(c=(r=d.next()).done);c=!0){var s=r.value;t(s)&&i.push(s)}}catch(l){n=!0,a=l}finally{try{c||null==d.return||d.return()}finally{if(n)throw a}}return i},cloneDeep:function(e){return JSON.parse(JSON.stringify(e))}}),l={tooEasy:[{id:0,isSelected:!1,isMatched:!1,picture:"pineapple"},{id:1,isSelected:!1,isMatched:!1,picture:"pineapple"}],easy:[{id:0,isSelected:!1,isMatched:!1,picture:"chesterfield"},{id:1,isSelected:!1,isMatched:!1,picture:"pineapple"},{id:2,isSelected:!1,isMatched:!1,picture:"pineapple"},{id:3,isSelected:!1,isMatched:!1,picture:"picnic"},{id:4,isSelected:!1,isMatched:!1,picture:"chesterfield"},{id:5,isSelected:!1,isMatched:!1,picture:"curves"},{id:6,isSelected:!1,isMatched:!1,picture:"curves"},{id:7,isSelected:!1,isMatched:!1,picture:"picnic"}],medium:[{id:0,isSelected:!1,isMatched:!1,picture:"picnic"},{id:1,isSelected:!1,isMatched:!1,picture:"hearts"},{id:2,isSelected:!1,isMatched:!1,picture:"pineapple"},{id:3,isSelected:!1,isMatched:!1,picture:"chesterfield"},{id:4,isSelected:!1,isMatched:!1,picture:"picnic"},{id:5,isSelected:!1,isMatched:!1,picture:"curves"},{id:6,isSelected:!1,isMatched:!1,picture:"drops"},{id:7,isSelected:!1,isMatched:!1,picture:"chesterfield"},{id:8,isSelected:!1,isMatched:!1,picture:"hearts"},{id:9,isSelected:!1,isMatched:!1,picture:"curves"},{id:10,isSelected:!1,isMatched:!1,picture:"drops"},{id:11,isSelected:!1,isMatched:!1,picture:"pineapple"}],impossible:[{id:0,isSelected:!1,isMatched:!1,picture:"pineapple"},{id:1,isSelected:!1,isMatched:!1,picture:"square"}]},u=(i(13),function(e){var t=e.id,i=e.picture,c=e.isSelected,a=e.isMatched,r=e.onCardSelected,d=e.showPreview;return n.a.createElement("div",{className:function(){var e="card";return e+=c||d||a?" card--selected card--".concat(i):" card--not-selected",a&&(e+=" card--matched"),e}(),onClick:r.bind(void 0,t)},n.a.createElement("div",{className:"card__inner"},n.a.createElement("div",{className:"card__front"}),n.a.createElement("div",{className:"card__back"})))});var o=function(e){var t=e.gameStarted,i=e.onGameWon,a=e.gameWon,r=e.level,o=Object(c.useState)(!0),p=Object(d.a)(o,2),f=p[0],m=p[1],h=Object(c.useState)(!1),S=Object(d.a)(h,2),b=S[0],v=S[1],E=Object(c.useState)(0),M=Object(d.a)(E,2),y=M[0],O=M[1],j=Object(c.useState)(0),w=Object(d.a)(j,2),g=w[0],k=w[1],C=Object(c.useState)(l[r]),N=Object(d.a)(C,2),W=N[0],_=N[1];Object(c.useEffect)(function(){f&&t&&setTimeout(function(){m(!1)},2200)},[t]),Object(c.useEffect)(function(){2===y&&setTimeout(G,650)},[W]),Object(c.useEffect)(function(){g===W.length/2&&i()},[g]),Object(c.useEffect)(function(){if(!a&&t){var e=l[r];e.forEach(function(e){e.isSelected=!1,e.isMatched=!1}),e.sort(function(){return Math.random()-.5}),_(e),O(0),k(0),v(!0),m(!0)}},[a]),Object(c.useEffect)(function(){b&&(v(!1),setTimeout(function(){return m(!1)},2200))},[b]);var A=function(e){if(!f&&2!==y){var t=s.cloneDeep(W),i=s.find(t,function(t){return t.id===e});i.isMatched||(i.isSelected=!i.isSelected,_(t),O(y+(i.isSelected?1:-1)))}},G=function(){var e=s.cloneDeep(W),t=s.findAll(e,function(e){return e.isSelected}),i=t[0].picture===t[1].picture;t.forEach(function(e){e.isMatched=i,e.isSelected=!1}),i&&k(g+1),O(0),_(e)};return t?n.a.createElement("div",{className:"game-board"},W.map(function(e){return n.a.createElement(u,{picture:e.picture,id:e.id,key:e.id,isSelected:e.isSelected,isMatched:e.isMatched,onCardSelected:A,showPreview:f})})):null};var p=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),i=t[0],a=t[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),l=s[0],u=s[1],p=Object(c.useState)("medium"),f=Object(d.a)(p,2),m=f[0],h=f[1],S=function(){u(!1)},b=function(e){h(e),u(!1)},v=function(e){return e===m};return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Memory Game"),n.a.createElement(o,{gameStarted:i,level:m,onGameWon:function(){u(!0)},gameWon:l}),i?null:n.a.createElement("button",{onClick:function(){return a(!0)}},"Start Game"),l?n.a.createElement(c.Fragment,null,n.a.createElement("h2",null,"You won!"),n.a.createElement("button",{onClick:S},"Play Again?"),n.a.createElement("h3",null,"Change level?"),n.a.createElement("div",{className:"button-wrap"},n.a.createElement("button",{disabled:v("tooEasy"),onClick:function(){return b("tooEasy")}},"Too Easy"),n.a.createElement("button",{disabled:v("easy"),onClick:function(){return b("easy")}},"Easy"),n.a.createElement("button",{disabled:v("medium"),onClick:function(){return b("medium")}},"Medium"),n.a.createElement("button",{disabled:v("impossible"),onClick:function(){return b("impossible")}},"Impossible?!"))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[4,1,2]]]);
//# sourceMappingURL=main.07fd4230.chunk.js.map