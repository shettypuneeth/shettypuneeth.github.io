!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="/",n(n.s=102)}([function(t,r,n){(function(r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r&&r)||Function("return this")()}).call(this,n(64))},function(t,r,n){var e=n(0),o=n(26),i=n(2),u=n(27),c=n(31),a=n(48),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||u;t.exports=function(t){return i(f,t)||(c&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,r){var n={}.hasOwnProperty;t.exports=function(t,r){return n.call(t,r)}},function(t,r){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,r,n){var e=n(5),o=n(39),i=n(8),u=n(14),c=Object.defineProperty;r.f=e?c:function(t,r,n){if(i(t),r=u(r,!0),i(n),o)try{return c(t,r,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},function(t,r,n){var e=n(3);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,r){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,r,n){var e=n(5),o=n(4),i=n(11);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},function(t,r,n){var e=n(6);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},function(t,r,n){var e=n(38),o=n(24);t.exports=function(t){return e(o(t))}},function(t,r,n){var e=n(0),o=n(22).f,i=n(7),u=n(12),c=n(25),a=n(43),f=n(68);t.exports=function(t,r){var n,s,l,p,v,y=t.target,h=t.global,g=t.stat;if(n=h?e:g?e[y]||c(y,{}):(e[y]||{}).prototype)for(s in r){if(p=r[s],l=t.noTargetGet?(v=o(n,s))&&v.value:n[s],!f(h?s:y+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(n,s,p,t)}}},function(t,r){t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},function(t,r,n){var e=n(0),o=n(7),i=n(2),u=n(25),c=n(41),a=n(15),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,r,n,c){var a=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof r||i(n,"name")||o(n,"name",r),s(n).source=l.join("string"==typeof r?r:"")),t!==e?(a?!p&&t[r]&&(f=!0):delete t[r],f?t[r]=n:o(t,r,n)):f?t[r]=n:u(r,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},function(t,r){t.exports={}},function(t,r,n){var e=n(6);t.exports=function(t,r){if(!e(t))return t;var n,o;if(r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!e(o=n.call(t)))return o;if(!r&&"function"==typeof(n=t.toString)&&!e(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,r,n){var e,o,i,u=n(65),c=n(0),a=n(6),f=n(7),s=n(2),l=n(16),p=n(18),v=c.WeakMap;if(u){var y=new v,h=y.get,g=y.has,d=y.set;e=function(t,r){return d.call(y,t,r),r},o=function(t){return h.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var b=l("state");p[b]=!0,e=function(t,r){return f(t,b,r),r},o=function(t){return s(t,b)?t[b]:{}},i=function(t){return s(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!a(r)||(n=o(r)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,r,n){var e=n(26),o=n(27),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,r){t.exports=!1},function(t,r){t.exports={}},function(t,r,n){var e=n(44),o=n(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,r){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][r]||o[t]&&o[t][r]}},function(t,r,n){var e=n(29),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,r,n){var e=n(24);t.exports=function(t){return Object(e(t))}},function(t,r,n){var e=n(5),o=n(37),i=n(11),u=n(9),c=n(14),a=n(2),f=n(39),s=Object.getOwnPropertyDescriptor;r.f=e?s:function(t,r){if(t=u(t),r=c(r,!0),f)try{return s(t,r)}catch(t){}if(a(t,r))return i(!o.f.call(t,r),t[r])}},function(t,r){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,r){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,r,n){var e=n(0),o=n(7);t.exports=function(t,r){try{o(e,t,r)}catch(n){e[t]=r}return r}},function(t,r,n){var e=n(17),o=n(42);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,r){var n=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+e).toString(36)}},function(t,r,n){var e=n(45),o=n(30).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},function(t,r){var n=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:n)(t)}},function(t,r){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,r,n){var e=n(3);t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},function(t,r,n){var e=n(23);t.exports=Array.isArray||function(t){return"Array"==e(t)}},function(t,r,n){var e,o=n(8),i=n(69),u=n(30),c=n(18),a=n(70),f=n(40),s=n(16),l=s("IE_PROTO"),p=function(){},v=function(t){return"<script>"+t+"<\/script>"},y=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,r;y=e?function(t){t.write(v("")),t.close();var r=t.parentWindow.Object;return t=null,r}(e):((r=f("iframe")).style.display="none",a.appendChild(r),r.src=String("javascript:"),(t=r.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F);for(var n=u.length;n--;)delete y.prototype[u[n]];return y()};c[l]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=y(),void 0===r?n:i(n,r)}},function(t,r,n){var e=n(4).f,o=n(2),i=n(1)("toStringTag");t.exports=function(t,r,n){t&&!o(t=n?t:t.prototype,i)&&e(t,i,{configurable:!0,value:r})}},function(t,r,n){var e={};e[n(1)("toStringTag")]="z",t.exports="[object z]"===String(e)},function(t,r,n){var e,o,i;o=[t],void 0===(i="function"==typeof(e=function(t){"use strict";var r=Object.assign||function(t){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t};function n(t){if(Array.isArray(t)){for(var r=0,n=Array(t.length);r<t.length;r++)n[r]=t[r];return n}return Array.from(t)}var e={order:2,precision:2,period:null};function o(t,r){var n=[],e=[];t.forEach((function(t,o){null!==t[1]&&(e.push(t),n.push(r[o]))}));var o=e.reduce((function(t,r){return t+r[1]}),0)/e.length,i=e.reduce((function(t,r){var n=r[1]-o;return t+n*n}),0);return 1-e.reduce((function(t,r,e){var o=n[e],i=r[1]-o[1];return t+i*i}),0)/i}function i(t,r){var n=Math.pow(10,r);return Math.round(t*n)/n}var u={linear:function(t,r){for(var n=[0,0,0,0,0],e=0,u=0;u<t.length;u++)null!==t[u][1]&&(e++,n[0]+=t[u][0],n[1]+=t[u][1],n[2]+=t[u][0]*t[u][0],n[3]+=t[u][0]*t[u][1],n[4]+=t[u][1]*t[u][1]);var c=e*n[2]-n[0]*n[0],a=e*n[3]-n[0]*n[1],f=0===c?0:i(a/c,r.precision),s=i(n[1]/e-f*n[0]/e,r.precision),l=function(t){return[i(t,r.precision),i(f*t+s,r.precision)]},p=t.map((function(t){return l(t[0])}));return{points:p,predict:l,equation:[f,s],r2:i(o(t,p),r.precision),string:0===s?"y = "+f+"x":"y = "+f+"x + "+s}},exponential:function(t,r){for(var n=[0,0,0,0,0,0],e=0;e<t.length;e++)null!==t[e][1]&&(n[0]+=t[e][0],n[1]+=t[e][1],n[2]+=t[e][0]*t[e][0]*t[e][1],n[3]+=t[e][1]*Math.log(t[e][1]),n[4]+=t[e][0]*t[e][1]*Math.log(t[e][1]),n[5]+=t[e][0]*t[e][1]);var u=n[1]*n[2]-n[5]*n[5],c=Math.exp((n[2]*n[3]-n[5]*n[4])/u),a=(n[1]*n[4]-n[5]*n[3])/u,f=i(c,r.precision),s=i(a,r.precision),l=function(t){return[i(t,r.precision),i(f*Math.exp(s*t),r.precision)]},p=t.map((function(t){return l(t[0])}));return{points:p,predict:l,equation:[f,s],string:"y = "+f+"e^("+s+"x)",r2:i(o(t,p),r.precision)}},logarithmic:function(t,r){for(var n=[0,0,0,0],e=t.length,u=0;u<e;u++)null!==t[u][1]&&(n[0]+=Math.log(t[u][0]),n[1]+=t[u][1]*Math.log(t[u][0]),n[2]+=t[u][1],n[3]+=Math.pow(Math.log(t[u][0]),2));var c=i((e*n[1]-n[2]*n[0])/(e*n[3]-n[0]*n[0]),r.precision),a=i((n[2]-c*n[0])/e,r.precision),f=function(t){return[i(t,r.precision),i(i(a+c*Math.log(t),r.precision),r.precision)]},s=t.map((function(t){return f(t[0])}));return{points:s,predict:f,equation:[a,c],string:"y = "+a+" + "+c+" ln(x)",r2:i(o(t,s),r.precision)}},power:function(t,r){for(var n=[0,0,0,0,0],e=t.length,u=0;u<e;u++)null!==t[u][1]&&(n[0]+=Math.log(t[u][0]),n[1]+=Math.log(t[u][1])*Math.log(t[u][0]),n[2]+=Math.log(t[u][1]),n[3]+=Math.pow(Math.log(t[u][0]),2));var c=(e*n[1]-n[0]*n[2])/(e*n[3]-Math.pow(n[0],2)),a=(n[2]-c*n[0])/e,f=i(Math.exp(a),r.precision),s=i(c,r.precision),l=function(t){return[i(t,r.precision),i(i(f*Math.pow(t,s),r.precision),r.precision)]},p=t.map((function(t){return l(t[0])}));return{points:p,predict:l,equation:[f,s],string:"y = "+f+"x^"+s,r2:i(o(t,p),r.precision)}},polynomial:function(t,r){for(var e=[],u=[],c=0,a=0,f=t.length,s=r.order+1,l=0;l<s;l++){for(var p=0;p<f;p++)null!==t[p][1]&&(c+=Math.pow(t[p][0],l)*t[p][1]);e.push(c),c=0;for(var v=[],y=0;y<s;y++){for(var h=0;h<f;h++)null!==t[h][1]&&(a+=Math.pow(t[h][0],l+y));v.push(a),a=0}u.push(v)}u.push(e);for(var g=function(t,r){for(var n=t,e=t.length-1,o=[r],i=0;i<e;i++){for(var u=i,c=i+1;c<e;c++)Math.abs(n[i][c])>Math.abs(n[i][u])&&(u=c);for(var a=i;a<e+1;a++){var f=n[a][i];n[a][i]=n[a][u],n[a][u]=f}for(var s=i+1;s<e;s++)for(var l=e;l>=i;l--)n[l][s]-=n[l][i]*n[i][s]/n[i][i]}for(var p=e-1;p>=0;p--){for(var v=0,y=p+1;y<e;y++)v+=n[y][p]*o[y];o[p]=(n[e][p]-v)/n[p][p]}return o}(u,s).map((function(t){return i(t,r.precision)})),d=function(t){return[i(t,r.precision),i(g.reduce((function(r,n,e){return r+n*Math.pow(t,e)}),0),r.precision)]},b=t.map((function(t){return d(t[0])})),m="y = ",x=g.length-1;x>=0;x--)m+=x>1?g[x]+"x^"+x+" + ":1===x?g[x]+"x + ":g[x];return{string:m,points:b,predict:d,equation:[].concat(n(g)).reverse(),r2:i(o(t,b),r.precision)}}};t.exports=Object.keys(u).reduce((function(t,n){return r({_round:i},t,(a=function(t,o){return u[n](t,r({},e,o))},(c=n)in(o={})?Object.defineProperty(o,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):o[c]=a,o));var o,c,a}),{})})?e.apply(r,o):e)||(t.exports=i)},function(t,r,n){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);r.f=i?function(t){var r=o(this,t);return!!r&&r.enumerable}:e},function(t,r,n){var e=n(3),o=n(23),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,r,n){var e=n(5),o=n(3),i=n(40);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,r,n){var e=n(0),o=n(6),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},function(t,r,n){var e=n(42),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},function(t,r,n){var e=n(0),o=n(25),i=e["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,r,n){var e=n(2),o=n(66),i=n(22),u=n(4);t.exports=function(t,r){for(var n=o(r),c=u.f,a=i.f,f=0;f<n.length;f++){var s=n[f];e(t,s)||c(t,s,a(r,s))}}},function(t,r,n){var e=n(0);t.exports=e},function(t,r,n){var e=n(2),o=n(9),i=n(67).indexOf,u=n(18);t.exports=function(t,r){var n,c=o(t),a=0,f=[];for(n in c)!e(u,n)&&e(c,n)&&f.push(n);for(;r.length>a;)e(c,n=r[a++])&&(~i(f,n)||f.push(n));return f}},function(t,r,n){var e=n(29),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},function(t,r){r.f=Object.getOwnPropertySymbols},function(t,r,n){var e=n(31);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,r,n){var e=n(45),o=n(30);t.exports=Object.keys||function(t){return e(t,o)}},function(t,r,n){var e=n(1);r.f=e},function(t,r,n){var e=n(44),o=n(2),i=n(50),u=n(4).f;t.exports=function(t){var r=e.Symbol||(e.Symbol={});o(r,t)||u(r,t,{value:i.f(t)})}},function(t,r,n){var e=n(53),o=n(38),i=n(21),u=n(20),c=n(73),a=[].push,f=function(t){var r=1==t,n=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(v,y,h,g){for(var d,b,m=i(v),x=o(m),S=e(y,h,3),w=u(x.length),O=0,j=g||c,A=r?j(v,w):n?j(v,0):void 0;w>O;O++)if((p||O in x)&&(b=S(d=x[O],O,m),t))if(r)A[O]=b;else if(b)switch(t){case 3:return!0;case 5:return d;case 6:return O;case 2:a.call(A,d)}else if(s)return!1;return l?-1:f||s?s:A}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,r,n){var e=n(72);t.exports=function(t,r,n){if(e(t),void 0===r)return t;switch(n){case 0:return function(){return t.call(r)};case 1:return function(n){return t.call(r,n)};case 2:return function(n,e){return t.call(r,n,e)};case 3:return function(n,e,o){return t.call(r,n,e,o)}}return function(){return t.apply(r,arguments)}}},function(t,r,n){"use strict";var e=n(14),o=n(4),i=n(11);t.exports=function(t,r,n){var u=e(r);u in t?o.f(t,u,i(0,n)):t[u]=n}},function(t,r,n){var e=n(35),o=n(23),i=n(1)("toStringTag"),u="Arguments"==o(function(){return arguments}());t.exports=e?o:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=Object(t),i))?n:u?o(r):"Object"==(e=o(r))&&"function"==typeof r.callee?"Arguments":e}},function(t,r,n){"use strict";var e=n(9),o=n(82),i=n(13),u=n(15),c=n(57),a=u.set,f=u.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,r){a(this,{type:"Array Iterator",target:e(t),index:0,kind:r})}),(function(){var t=f(this),r=t.target,n=t.kind,e=t.index++;return!r||e>=r.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:e,done:!1}:"values"==n?{value:r[e],done:!1}:{value:[e,r[e]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,r,n){"use strict";var e=n(10),o=n(83),i=n(59),u=n(85),c=n(34),a=n(7),f=n(12),s=n(1),l=n(17),p=n(13),v=n(58),y=v.IteratorPrototype,h=v.BUGGY_SAFARI_ITERATORS,g=s("iterator"),d=function(){return this};t.exports=function(t,r,n,s,v,b,m){o(n,r,s);var x,S,w,O=function(t){if(t===v&&E)return E;if(!h&&t in M)return M[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},j=r+" Iterator",A=!1,M=t.prototype,P=M[g]||M["@@iterator"]||v&&M[v],E=!h&&P||O(v),T="Array"==r&&M.entries||P;if(T&&(x=i(T.call(new t)),y!==Object.prototype&&x.next&&(l||i(x)===y||(u?u(x,y):"function"!=typeof x[g]&&a(x,g,d)),c(x,j,!0,!0),l&&(p[j]=d))),"values"==v&&P&&"values"!==P.name&&(A=!0,E=function(){return P.call(this)}),l&&!m||M[g]===E||a(M,g,E),p[r]=E,v)if(S={values:O("values"),keys:b?E:O("keys"),entries:O("entries")},m)for(w in S)(h||A||!(w in M))&&f(M,w,S[w]);else e({target:r,proto:!0,forced:h||A},S);return S}},function(t,r,n){"use strict";var e,o,i,u=n(59),c=n(7),a=n(2),f=n(1),s=n(17),l=f("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=u(u(i)))!==Object.prototype&&(e=o):p=!0),null==e&&(e={}),s||a(e,l)||c(e,l,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:p}},function(t,r,n){var e=n(2),o=n(21),i=n(16),u=n(84),c=i("IE_PROTO"),a=Object.prototype;t.exports=u?Object.getPrototypeOf:function(t){return t=o(t),e(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,r,n){var e=n(5),o=n(3),i=n(2),u=Object.defineProperty,c={},a=function(t){throw t};t.exports=function(t,r){if(i(c,t))return c[t];r||(r={});var n=[][t],f=!!i(r,"ACCESSORS")&&r.ACCESSORS,s=i(r,0)?r[0]:a,l=i(r,1)?r[1]:void 0;return c[t]=!!n&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?u(t,1,{enumerable:!0,get:a}):t[1]=1,n.call(t,s,l)}))}},function(t,r){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,r,n){"use strict";var e=n(52).forEach,o=n(100),i=n(60),u=o("forEach"),c=i("forEach");t.exports=u&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,r,n){"use strict";var e=n(10),o=n(0),i=n(19),u=n(17),c=n(5),a=n(31),f=n(48),s=n(3),l=n(2),p=n(32),v=n(6),y=n(8),h=n(21),g=n(9),d=n(14),b=n(11),m=n(33),x=n(49),S=n(28),w=n(71),O=n(47),j=n(22),A=n(4),M=n(37),P=n(7),E=n(12),T=n(26),_=n(16),L=n(18),I=n(27),k=n(1),C=n(50),R=n(51),F=n(34),N=n(15),D=n(52).forEach,G=_("hidden"),q=k("toPrimitive"),Y=N.set,V=N.getterFor("Symbol"),W=Object.prototype,X=o.Symbol,B=i("JSON","stringify"),z=j.f,H=A.f,U=w.f,$=M.f,J=T("symbols"),K=T("op-symbols"),Q=T("string-to-symbol-registry"),Z=T("symbol-to-string-registry"),tt=T("wks"),rt=o.QObject,nt=!rt||!rt.prototype||!rt.prototype.findChild,et=c&&s((function(){return 7!=m(H({},"a",{get:function(){return H(this,"a",{value:7}).a}})).a}))?function(t,r,n){var e=z(W,r);e&&delete W[r],H(t,r,n),e&&t!==W&&H(W,r,e)}:H,ot=function(t,r){var n=J[t]=m(X.prototype);return Y(n,{type:"Symbol",tag:t,description:r}),c||(n.description=r),n},it=f?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof X},ut=function(t,r,n){t===W&&ut(K,r,n),y(t);var e=d(r,!0);return y(n),l(J,e)?(n.enumerable?(l(t,G)&&t[G][e]&&(t[G][e]=!1),n=m(n,{enumerable:b(0,!1)})):(l(t,G)||H(t,G,b(1,{})),t[G][e]=!0),et(t,e,n)):H(t,e,n)},ct=function(t,r){y(t);var n=g(r),e=x(n).concat(lt(n));return D(e,(function(r){c&&!at.call(n,r)||ut(t,r,n[r])})),t},at=function(t){var r=d(t,!0),n=$.call(this,r);return!(this===W&&l(J,r)&&!l(K,r))&&(!(n||!l(this,r)||!l(J,r)||l(this,G)&&this[G][r])||n)},ft=function(t,r){var n=g(t),e=d(r,!0);if(n!==W||!l(J,e)||l(K,e)){var o=z(n,e);return!o||!l(J,e)||l(n,G)&&n[G][e]||(o.enumerable=!0),o}},st=function(t){var r=U(g(t)),n=[];return D(r,(function(t){l(J,t)||l(L,t)||n.push(t)})),n},lt=function(t){var r=t===W,n=U(r?K:g(t)),e=[];return D(n,(function(t){!l(J,t)||r&&!l(W,t)||e.push(J[t])})),e};(a||(E((X=function(){if(this instanceof X)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,r=I(t),n=function(t){this===W&&n.call(K,t),l(this,G)&&l(this[G],r)&&(this[G][r]=!1),et(this,r,b(1,t))};return c&&nt&&et(W,r,{configurable:!0,set:n}),ot(r,t)}).prototype,"toString",(function(){return V(this).tag})),E(X,"withoutSetter",(function(t){return ot(I(t),t)})),M.f=at,A.f=ut,j.f=ft,S.f=w.f=st,O.f=lt,C.f=function(t){return ot(k(t),t)},c&&(H(X.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),u||E(W,"propertyIsEnumerable",at,{unsafe:!0}))),e({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:X}),D(x(tt),(function(t){R(t)})),e({target:"Symbol",stat:!0,forced:!a},{for:function(t){var r=String(t);if(l(Q,r))return Q[r];var n=X(r);return Q[r]=n,Z[n]=r,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),e({target:"Object",stat:!0,forced:!a,sham:!c},{create:function(t,r){return void 0===r?m(t):ct(m(t),r)},defineProperty:ut,defineProperties:ct,getOwnPropertyDescriptor:ft}),e({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:st,getOwnPropertySymbols:lt}),e({target:"Object",stat:!0,forced:s((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(h(t))}}),B)&&e({target:"JSON",stat:!0,forced:!a||s((function(){var t=X();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))},{stringify:function(t,r,n){for(var e,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(e=r,(v(r)||void 0!==t)&&!it(t))return p(r)||(r=function(t,r){if("function"==typeof e&&(r=e.call(this,t,r)),!it(r))return r}),o[1]=r,B.apply(null,o)}});X.prototype[q]||P(X.prototype,q,X.prototype.valueOf),F(X,"Symbol"),L[G]=!0},function(t,r){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,r,n){var e=n(0),o=n(41),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,r,n){var e=n(19),o=n(28),i=n(47),u=n(8);t.exports=e("Reflect","ownKeys")||function(t){var r=o.f(u(t)),n=i.f;return n?r.concat(n(t)):r}},function(t,r,n){var e=n(9),o=n(20),i=n(46),u=function(t){return function(r,n,u){var c,a=e(r),f=o(a.length),s=i(u,f);if(t&&n!=n){for(;f>s;)if((c=a[s++])!=c)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===n)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},function(t,r,n){var e=n(3),o=/#|\.prototype\./,i=function(t,r){var n=c[u(t)];return n==f||n!=a&&("function"==typeof r?e(r):!!r)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,r,n){var e=n(5),o=n(4),i=n(8),u=n(49);t.exports=e?Object.defineProperties:function(t,r){i(t);for(var n,e=u(r),c=e.length,a=0;c>a;)o.f(t,n=e[a++],r[n]);return t}},function(t,r,n){var e=n(19);t.exports=e("document","documentElement")},function(t,r,n){var e=n(9),o=n(28).f,i={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return u.slice()}}(t):o(e(t))}},function(t,r){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,r,n){var e=n(6),o=n(32),i=n(1)("species");t.exports=function(t,r){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?e(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===r?0:r)}},function(t,r,n){"use strict";var e=n(10),o=n(5),i=n(0),u=n(2),c=n(6),a=n(4).f,f=n(43),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),r=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[r]=!0),r};f(p,s);var v=p.prototype=s.prototype;v.constructor=p;var y=v.toString,h="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;a(v,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,r=y.call(t);if(u(l,t))return"";var n=h?r.slice(7,-1):r.replace(g,"$1");return""===n?void 0:n}}),e({global:!0,forced:!0},{Symbol:p})}},function(t,r,n){n(51)("iterator")},function(t,r,n){var e=n(10),o=n(77);e({target:"Array",stat:!0,forced:!n(81)((function(t){Array.from(t)}))},{from:o})},function(t,r,n){"use strict";var e=n(53),o=n(21),i=n(78),u=n(79),c=n(20),a=n(54),f=n(80);t.exports=function(t){var r,n,s,l,p,v,y=o(t),h="function"==typeof this?this:Array,g=arguments.length,d=g>1?arguments[1]:void 0,b=void 0!==d,m=f(y),x=0;if(b&&(d=e(d,g>2?arguments[2]:void 0,2)),null==m||h==Array&&u(m))for(n=new h(r=c(y.length));r>x;x++)v=b?d(y[x],x):y[x],a(n,x,v);else for(p=(l=m.call(y)).next,n=new h;!(s=p.call(l)).done;x++)v=b?i(l,d,[s.value,x],!0):s.value,a(n,x,v);return n.length=x,n}},function(t,r,n){var e=n(8);t.exports=function(t,r,n,o){try{return o?r(e(n)[0],n[1]):r(n)}catch(r){var i=t.return;throw void 0!==i&&e(i.call(t)),r}}},function(t,r,n){var e=n(1),o=n(13),i=e("iterator"),u=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||u[i]===t)}},function(t,r,n){var e=n(55),o=n(13),i=n(1)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[e(t)]}},function(t,r,n){var e=n(1)("iterator"),o=!1;try{var i=0,u={next:function(){return{done:!!i++}},return:function(){o=!0}};u[e]=function(){return this},Array.from(u,(function(){throw 2}))}catch(t){}t.exports=function(t,r){if(!r&&!o)return!1;var n=!1;try{var i={};i[e]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,r,n){var e=n(1),o=n(33),i=n(4),u=e("unscopables"),c=Array.prototype;null==c[u]&&i.f(c,u,{configurable:!0,value:o(null)}),t.exports=function(t){c[u][t]=!0}},function(t,r,n){"use strict";var e=n(58).IteratorPrototype,o=n(33),i=n(11),u=n(34),c=n(13),a=function(){return this};t.exports=function(t,r,n){var f=r+" Iterator";return t.prototype=o(e,{next:i(1,n)}),u(t,f,!1,!0),c[f]=a,t}},function(t,r,n){var e=n(3);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,r,n){var e=n(8),o=n(86);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),r=n instanceof Array}catch(t){}return function(n,i){return e(n),o(i),r?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,r,n){var e=n(6);t.exports=function(t){if(!e(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,r,n){"use strict";var e=n(10),o=n(6),i=n(32),u=n(46),c=n(20),a=n(9),f=n(54),s=n(1),l=n(88),p=n(60),v=l("slice"),y=p("slice",{ACCESSORS:!0,0:0,1:2}),h=s("species"),g=[].slice,d=Math.max;e({target:"Array",proto:!0,forced:!v||!y},{slice:function(t,r){var n,e,s,l=a(this),p=c(l.length),v=u(t,p),y=u(void 0===r?p:r,p);if(i(l)&&("function"!=typeof(n=l.constructor)||n!==Array&&!i(n.prototype)?o(n)&&null===(n=n[h])&&(n=void 0):n=void 0,n===Array||void 0===n))return g.call(l,v,y);for(e=new(void 0===n?Array:n)(d(y-v,0)),s=0;v<y;v++,s++)v in l&&f(e,s,l[v]);return e.length=s,e}})},function(t,r,n){var e=n(3),o=n(1),i=n(89),u=o("species");t.exports=function(t){return i>=51||!e((function(){var r=[];return(r.constructor={})[u]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},function(t,r,n){var e,o,i=n(0),u=n(90),c=i.process,a=c&&c.versions,f=a&&a.v8;f?o=(e=f.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},function(t,r,n){var e=n(19);t.exports=e("navigator","userAgent")||""},function(t,r,n){var e=n(5),o=n(4).f,i=Function.prototype,u=i.toString,c=/^\s*function ([^ (]*)/;e&&!("name"in i)&&o(i,"name",{configurable:!0,get:function(){try{return u.call(this).match(c)[1]}catch(t){return""}}})},function(t,r,n){var e=n(35),o=n(12),i=n(93);e||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,r,n){"use strict";var e=n(35),o=n(55);t.exports=e?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,r,n){"use strict";var e=n(12),o=n(8),i=n(3),u=n(95),c=RegExp.prototype,a=c.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&e(RegExp.prototype,"toString",(function(){var t=o(this),r=String(t.source),n=t.flags;return"/"+r+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?u.call(t):n)}),{unsafe:!0})},function(t,r,n){"use strict";var e=n(8);t.exports=function(){var t=e(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},function(t,r,n){"use strict";var e=n(97).charAt,o=n(15),i=n(57),u=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){u(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,r=c(this),n=r.string,o=r.index;return o>=n.length?{value:void 0,done:!0}:(t=e(n,o),r.index+=t.length,{value:t,done:!1})}))},function(t,r,n){var e=n(29),o=n(24),i=function(t){return function(r,n){var i,u,c=String(o(r)),a=e(n),f=c.length;return a<0||a>=f?t?"":void 0:(i=c.charCodeAt(a))<55296||i>56319||a+1===f||(u=c.charCodeAt(a+1))<56320||u>57343?t?c.charAt(a):i:t?c.slice(a,a+2):u-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,r,n){var e=n(0),o=n(61),i=n(56),u=n(7),c=n(1),a=c("iterator"),f=c("toStringTag"),s=i.values;for(var l in o){var p=e[l],v=p&&p.prototype;if(v){if(v[a]!==s)try{u(v,a,s)}catch(t){v[a]=s}if(v[f]||u(v,f,l),o[l])for(var y in i)if(v[y]!==i[y])try{u(v,y,i[y])}catch(t){v[y]=i[y]}}}},function(t,r,n){"use strict";var e=n(10),o=n(62);e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,r,n){"use strict";var e=n(3);t.exports=function(t,r){var n=[][t];return!!n&&e((function(){n.call(null,r||function(){throw 1},1)}))}},function(t,r,n){var e=n(0),o=n(61),i=n(62),u=n(7);for(var c in o){var a=e[c],f=a&&a.prototype;if(f&&f.forEach!==i)try{u(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,r,n){"use strict";n.r(r);n(63),n(74),n(75),n(76),n(56),n(87),n(91),n(92),n(94),n(96),n(98);var e=[],o=function(){return e.pop()},i=function(t,r,n){var e=t.getBoundingClientRect();return{x:r-e.left*(t.width/e.width),y:n-e.top*(t.height/e.height)}},u=(n(99),n(101),function(t,r){var n=c(t);n&&n.forEach((function(t){return t.addEventListener("click",r)}))}),c=function(t){return document.querySelectorAll(t)},a=n(36),f=n.n(a);function s(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],e=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(e=(u=c.next()).done)&&(n.push(u.value),!r||n.length!==r);e=!0);}catch(t){o=!0,i=t}finally{try{e||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return l(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,r){(null==r||r>t.length)&&(r=t.length);for(var n=0,e=new Array(r);n<r;n++)e[n]=t[n];return e}var p,v,y=document.getElementById("art-board"),h=y.getContext("2d"),g={light:{background:"#e8e8e8",canvas:"#ffffff"}},d=700,b=500,m="linear",x="polynomial",S="light",w="linear",O=[],j=c(".active")[0],A=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,r=g[t];r&&(y.style.background=r.canvas)},M=function(t,r){h.beginPath(),h.moveTo(t.x,t.y),h.lineTo(r.x,r.y),h.stroke()},P=function(){T(),e=[]},E=function(t){if(t.currentTarget){var r=t.currentTarget;j&&j.classList.remove("active"),j=r,r.classList.add("active"),w=r.getAttribute("data-curvetype")}},T=function(){h.clearRect(0,0,y.width,y.height)},_=function(t){switch(T(),function(t,r){var n=e[e.length-1];n&&t.putImageData(n,0,0),r&&o()}(h,!0),w){case m:var r=function(t){var r,n,e=f.a.linear(t),o=e.equation[0],i=e.equation[1],u=t[0][0],c=t[t.length-1][0];return o?(r=o*u+i,n=o*c+i):(r=t[0][1],n=t[t.length-1][1]),{startX:u,startY:r,endX:c,endY:n}}(t),n=r.startX,i=r.startY,u=r.endX,c=r.endY;M({x:n,y:y.height-i},{x:u,y:y.height-c});break;case x:!function(t){for(var r=f.a.polynomial(t,{order:3}).points,n=r[0],e=1;e<r.length;e++){var o=s(r[e],2),i=o[0],u=o[1];M({x:n[0],y:y.height-n[1]},{x:i,y:y.height-u}),n=r[e]}}(t)}!function(t){e.push(t.getImageData(0,0,t.canvas.width,t.canvas.height))}(h)},L=function(t){v=i(y,t.clientX,t.clientY),O.push([v.x,y.height-v.y]),p=!0},I=function(){p=!1,_(O),O=[]},k=function(t){if(p){var r=i(y,t.clientX,t.clientY);M(v,r),v=r,O.push([v.x,y.height-v.y])}};A(),window.innerWidth<700?(y.width=window.innerWidth-20,y.height=window.innerHeight-170):(y.width=d,y.height=b),u("#reset-canvas",P),u("[data-curvetype]",E),y.onmousedown=L,y.onmousemove=k,y.onmouseup=I,y.ontouchstart=function(t){var r=t.touches[0];L(r)},y.ontouchend=I,y.ontouchmove=function(t){var r=t.touches[0];k(r)}}]);