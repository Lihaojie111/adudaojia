/*
 Highcharts JS v3.0.6 (2013-10-04)

 (c) 2009-2013 Torstein Hønsi

 License: www.highcharts.com/license
*/
(function(){function r(a,b){var c;a||(a={});for(c in b)a[c]=b[c];return a}function x(){var a,b=arguments.length,c={},d=function(a,b){var c,h;typeof a!=="object"&&(a={});for(h in b)b.hasOwnProperty(h)&&(c=b[h],a[h]=c&&typeof c==="object"&&Object.prototype.toString.call(c)!=="[object Array]"&&typeof c.nodeType!=="number"?d(a[h]||{},c):b[h]);return a};for(a=0;a<b;a++)c=d(c,arguments[a]);return c}function C(a,b){return parseInt(a,b||10)}function ea(a){return typeof a==="string"}function T(a){return typeof a===
"object"}function Ia(a){return Object.prototype.toString.call(a)==="[object Array]"}function sa(a){return typeof a==="number"}function na(a){return R.log(a)/R.LN10}function fa(a){return R.pow(10,a)}function ga(a,b){for(var c=a.length;c--;)if(a[c]===b){a.splice(c,1);break}}function u(a){return a!==w&&a!==null}function v(a,b,c){var d,e;if(ea(b))u(c)?a.setAttribute(b,c):a&&a.getAttribute&&(e=a.getAttribute(b));else if(u(b)&&T(b))for(d in b)a.setAttribute(d,b[d]);return e}function ja(a){return Ia(a)?
a:[a]}function o(){var a=arguments,b,c,d=a.length;for(b=0;b<d;b++)if(c=a[b],typeof c!=="undefined"&&c!==null)return c}function K(a,b){if(ta&&b&&b.opacity!==w)b.filter="alpha(opacity="+b.opacity*100+")";r(a.style,b)}function U(a,b,c,d,e){a=y.createElement(a);b&&r(a,b);e&&K(a,{padding:0,border:S,margin:0});c&&K(a,c);d&&d.appendChild(a);return a}function ha(a,b){var c=function(){};c.prototype=new a;r(c.prototype,b);return c}function Aa(a,b,c,d){var e=M.lang,a=+a||0,f=b===-1?(a.toString().split(".")[1]||
"").length:isNaN(b=N(b))?2:b,b=c===void 0?e.decimalPoint:c,d=d===void 0?e.thousandsSep:d,e=a<0?"-":"",c=String(C(a=N(a).toFixed(f))),g=c.length>3?c.length%3:0;return e+(g?c.substr(0,g)+d:"")+c.substr(g).replace(/(\d{3})(?=\d)/g,"$1"+d)+(f?b+N(a-c).toFixed(f).slice(2):"")}function Ba(a,b){return Array((b||2)+1-String(a).length).join(0)+a}function mb(a,b,c){var d=a[b];a[b]=function(){var a=Array.prototype.slice.call(arguments);a.unshift(d);return c.apply(this,a)}}function Ca(a,b){for(var c="{",d=!1,
e,f,g,h,i,j=[];(c=a.indexOf(c))!==-1;){e=a.slice(0,c);if(d){f=e.split(":");g=f.shift().split(".");i=g.length;e=b;for(h=0;h<i;h++)e=e[g[h]];if(f.length)f=f.join(":"),g=/\.([0-9])/,h=M.lang,i=void 0,/f$/.test(f)?(i=(i=f.match(g))?i[1]:-1,e=Aa(e,i,h.decimalPoint,f.indexOf(",")>-1?h.thousandsSep:"")):e=Xa(f,e)}j.push(e);a=a.slice(c+1);c=(d=!d)?"}":"{"}j.push(a);return j.join("")}function nb(a){return R.pow(10,P(R.log(a)/R.LN10))}function ob(a,b,c,d){var e,c=o(c,1);e=a/c;b||(b=[1,2,2.5,5,10],d&&d.allowDecimals===
!1&&(c===1?b=[1,2,5,10]:c<=0.1&&(b=[1/c])));for(d=0;d<b.length;d++)if(a=b[d],e<=(b[d]+(b[d+1]||b[d]))/2)break;a*=c;return a}function Cb(a,b){var c=b||[[Db,[1,2,5,10,20,25,50,100,200,500]],[pb,[1,2,5,10,15,30]],[Ya,[1,2,5,10,15,30]],[Qa,[1,2,3,4,6,8,12]],[ua,[1,2]],[Za,[1,2]],[Ra,[1,2,3,4,6]],[Da,null]],d=c[c.length-1],e=D[d[0]],f=d[1],g;for(g=0;g<c.length;g++)if(d=c[g],e=D[d[0]],f=d[1],c[g+1]&&a<=(e*f[f.length-1]+D[c[g+1][0]])/2)break;e===D[Da]&&a<5*e&&(f=[1,2,5]);c=ob(a/e,f,d[0]===Da?nb(a/e):1);
return{unitRange:e,count:c,unitName:d[0]}}function Eb(a,b,c,d){var e=[],f={},g=M.global.useUTC,h,i=new Date(b),j=a.unitRange,k=a.count;if(u(b)){j>=D[pb]&&(i.setMilliseconds(0),i.setSeconds(j>=D[Ya]?0:k*P(i.getSeconds()/k)));if(j>=D[Ya])i[Fb](j>=D[Qa]?0:k*P(i[qb]()/k));if(j>=D[Qa])i[Gb](j>=D[ua]?0:k*P(i[rb]()/k));if(j>=D[ua])i[sb](j>=D[Ra]?1:k*P(i[Sa]()/k));j>=D[Ra]&&(i[Hb](j>=D[Da]?0:k*P(i[$a]()/k)),h=i[ab]());j>=D[Da]&&(h-=h%k,i[Ib](h));if(j===D[Za])i[sb](i[Sa]()-i[tb]()+o(d,1));b=1;h=i[ab]();for(var d=
i.getTime(),l=i[$a](),m=i[Sa](),p=g?0:(864E5+i.getTimezoneOffset()*6E4)%864E5;d<c;)e.push(d),j===D[Da]?d=bb(h+b*k,0):j===D[Ra]?d=bb(h,l+b*k):!g&&(j===D[ua]||j===D[Za])?d=bb(h,l,m+b*k*(j===D[ua]?1:7)):d+=j*k,b++;e.push(d);n(ub(e,function(a){return j<=D[Qa]&&a%D[ua]===p}),function(a){f[a]=ua})}e.info=r(a,{higherRanks:f,totalRange:j*k});return e}function Jb(){this.symbol=this.color=0}function Kb(a,b){var c=a.length,d,e;for(e=0;e<c;e++)a[e].ss_i=e;a.sort(function(a,c){d=b(a,c);return d===0?a.ss_i-c.ss_i:
d});for(e=0;e<c;e++)delete a[e].ss_i}function Ja(a){for(var b=a.length,c=a[0];b--;)a[b]<c&&(c=a[b]);return c}function va(a){for(var b=a.length,c=a[0];b--;)a[b]>c&&(c=a[b]);return c}function Ka(a,b){for(var c in a)a[c]&&a[c]!==b&&a[c].destroy&&a[c].destroy(),delete a[c]}function Ta(a){cb||(cb=U(Ea));a&&cb.appendChild(a);cb.innerHTML=""}function ka(a,b){var c="Highcharts error #"+a+": www.highcharts.com/errors/"+a;if(b)throw c;else O.console&&console.log(c)}function ia(a){return parseFloat(a.toPrecision(14))}
function La(a,b){Fa=o(a,b.animation)}function Lb(){var a=M.global.useUTC,b=a?"getUTC":"get",c=a?"setUTC":"set";bb=a?Date.UTC:function(a,b,c,g,h,i){return(new Date(a,b,o(c,1),o(g,0),o(h,0),o(i,0))).getTime()};qb=b+"Minutes";rb=b+"Hours";tb=b+"Day";Sa=b+"Date";$a=b+"Month";ab=b+"FullYear";Fb=c+"Minutes";Gb=c+"Hours";sb=c+"Date";Hb=c+"Month";Ib=c+"FullYear"}function wa(){}function Ma(a,b,c,d){this.axis=a;this.pos=b;this.type=c||"";this.isNew=!0;!c&&!d&&this.addLabel()}function vb(a,b){this.axis=a;if(b)this.options=
b,this.id=b.id}function Mb(a,b,c,d,e,f){var g=a.chart.inverted;this.axis=a;this.isNegative=c;this.options=b;this.x=d;this.total=null;this.points={};this.stack=e;this.percent=f==="percent";this.alignOptions={align:b.align||(g?c?"left":"right":"center"),verticalAlign:b.verticalAlign||(g?"middle":c?"bottom":"top"),y:o(b.y,g?4:c?14:-6),x:o(b.x,g?c?-6:6:0)};this.textAlign=b.textAlign||(g?c?"right":"left":"center")}function db(){this.init.apply(this,arguments)}function wb(){this.init.apply(this,arguments)}
function xb(a,b){this.init(a,b)}function eb(a,b){this.init(a,b)}function yb(){this.init.apply(this,arguments)}var w,y=document,O=window,R=Math,t=R.round,P=R.floor,xa=R.ceil,s=R.max,I=R.min,N=R.abs,V=R.cos,ca=R.sin,ya=R.PI,Ua=ya*2/360,oa=navigator.userAgent,Nb=O.opera,ta=/msie/i.test(oa)&&!Nb,fb=y.documentMode===8,gb=/AppleWebKit/.test(oa),hb=/Firefox/.test(oa),Ob=/(Mobile|Android|Windows Phone)/.test(oa),za="http://www.w3.org/2000/svg",Z=!!y.createElementNS&&!!y.createElementNS(za,"svg").createSVGRect,
Ub=hb&&parseInt(oa.split("Firefox/")[1],10)<4,$=!Z&&!ta&&!!y.createElement("canvas").getContext,Va,ib=y.documentElement.ontouchstart!==w,Pb={},zb=0,cb,M,Xa,Fa,Ab,D,pa=function(){},Ga=[],Ea="div",S="none",Qb="rgba(192,192,192,"+(Z?1.0E-4:0.002)+")",Db="millisecond",pb="second",Ya="minute",Qa="hour",ua="day",Za="week",Ra="month",Da="year",Rb="stroke-width",bb,qb,rb,tb,Sa,$a,ab,Fb,Gb,sb,Hb,Ib,W={};O.Highcharts=O.Highcharts?ka(16,!0):{};Xa=function(a,b,c){if(!u(b)||isNaN(b))return"Invalid date";var a=
o(a,"%Y-%m-%d %H:%M:%S"),d=new Date(b),e,f=d[rb](),g=d[tb](),h=d[Sa](),i=d[$a](),j=d[ab](),k=M.lang,l=k.weekdays,d=r({a:l[g].substr(0,3),A:l[g],d:Ba(h),e:h,b:k.shortMonths[i],B:k.months[i],m:Ba(i+1),y:j.toString().substr(2,2),Y:j,H:Ba(f),I:Ba(f%12||12),l:f%12||12,M:Ba(d[qb]()),p:f<12?"AM":"PM",P:f<12?"am":"pm",S:Ba(d.getSeconds()),L:Ba(t(b%1E3),3)},Highcharts.dateFormats);for(e in d)for(;a.indexOf("%"+e)!==-1;)a=a.replace("%"+e,typeof d[e]==="function"?d[e](b):d[e]);return c?a.substr(0,1).toUpperCase()+
a.substr(1):a};Jb.prototype={wrapColor:function(a){if(this.color>=a)this.colo