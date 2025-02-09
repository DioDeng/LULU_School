import{r as G,j as fn,k as qn,o as wi,l as pn,m as ae,p as Yn,q as Xn,s as Kn,v as hn,c as V,g as j,h as At,a as O,b as q,w as me,u as Q,x as be,_ as xi,f as mn,F as ge,i as je,y as Vi,z as Zn,t as ie,A as Wi,d as oi,n as Si}from"./index-1ZVR9vBs.js";function Fi(i){return i!==null&&typeof i=="object"&&"constructor"in i&&i.constructor===Object}function _i(i,e){i===void 0&&(i={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof i[t]>"u"?i[t]=e[t]:Fi(e[t])&&Fi(i[t])&&Object.keys(e[t]).length>0&&_i(i[t],e[t])})}const gn={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function ve(){const i=typeof document<"u"?document:{};return _i(i,gn),i}const Qn={document:gn,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(i){return typeof setTimeout>"u"?(i(),null):setTimeout(i,0)},cancelAnimationFrame(i){typeof setTimeout>"u"||clearTimeout(i)}};function ne(){const i=typeof window<"u"?window:{};return _i(i,Qn),i}function Jn(i){return i===void 0&&(i=""),i.trim().split(" ").filter(e=>!!e.trim())}function es(i){const e=i;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function li(i,e){return e===void 0&&(e=0),setTimeout(i,e)}function Ce(){return Date.now()}function ts(i){const e=ne();let t;return e.getComputedStyle&&(t=e.getComputedStyle(i,null)),!t&&i.currentStyle&&(t=i.currentStyle),t||(t=i.style),t}function is(i,e){e===void 0&&(e="x");const t=ne();let n,r,s;const a=ts(i);return t.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(o=>o.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(r==="none"?"":r)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?r=s.m41:n.length===16?r=parseFloat(n[12]):r=parseFloat(n[4])),e==="y"&&(t.WebKitCSSMatrix?r=s.m42:n.length===16?r=parseFloat(n[13]):r=parseFloat(n[5])),r||0}function gt(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"}function ns(i){return typeof window<"u"&&typeof window.HTMLElement<"u"?i instanceof HTMLElement:i&&(i.nodeType===1||i.nodeType===11)}function te(){const i=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const n=t<0||arguments.length<=t?void 0:arguments[t];if(n!=null&&!ns(n)){const r=Object.keys(Object(n)).filter(s=>e.indexOf(s)<0);for(let s=0,a=r.length;s<a;s+=1){const o=r[s],l=Object.getOwnPropertyDescriptor(n,o);l!==void 0&&l.enumerable&&(gt(i[o])&&gt(n[o])?n[o].__swiper__?i[o]=n[o]:te(i[o],n[o]):!gt(i[o])&&gt(n[o])?(i[o]={},n[o].__swiper__?i[o]=n[o]:te(i[o],n[o])):i[o]=n[o])}}}return i}function vt(i,e,t){i.style.setProperty(e,t)}function vn(i){let{swiper:e,targetPosition:t,side:n}=i;const r=ne(),s=-e.translate;let a=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(e.cssModeFrameID);const c=t>s?"next":"prev",d=(p,h)=>c==="next"&&p>=h||c==="prev"&&p<=h,u=()=>{o=new Date().getTime(),a===null&&(a=o);const p=Math.max(Math.min((o-a)/l,1),0),h=.5-Math.cos(p*Math.PI)/2;let v=s+h*(t-s);if(d(v,t)&&(v=t),e.wrapperEl.scrollTo({[n]:v}),d(v,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:v})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function fe(i,e){return e===void 0&&(e=""),[...i.children].filter(t=>t.matches(e))}function wt(i){try{console.warn(i);return}catch{}}function xt(i,e){e===void 0&&(e=[]);const t=document.createElement(i);return t.classList.add(...Array.isArray(e)?e:Jn(e)),t}function ss(i,e){const t=[];for(;i.previousElementSibling;){const n=i.previousElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function rs(i,e){const t=[];for(;i.nextElementSibling;){const n=i.nextElementSibling;e?n.matches(e)&&t.push(n):t.push(n),i=n}return t}function xe(i,e){return ne().getComputedStyle(i,null).getPropertyValue(e)}function St(i){let e=i,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function yn(i,e){const t=[];let n=i.parentElement;for(;n;)e?n.matches(e)&&t.push(n):t.push(n),n=n.parentElement;return t}function Ft(i,e){function t(n){n.target===i&&(e.call(i,n),i.removeEventListener("transitionend",t))}e&&i.addEventListener("transitionend",t)}function di(i,e,t){const n=ne();return i[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(i,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function pe(i){return(Array.isArray(i)?i:[i]).filter(e=>!!e)}let Ut;function as(){const i=ne(),e=ve();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in i||i.DocumentTouch&&e instanceof i.DocumentTouch)}}function bn(){return Ut||(Ut=as()),Ut}let qt;function os(i){let{userAgent:e}=i===void 0?{}:i;const t=bn(),n=ne(),r=n.navigator.platform,s=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,l=n.screen.height,c=s.match(/(Android);?[\s\/]+([\d.]+)?/);let d=s.match(/(iPad).*OS\s([\d_]+)/);const u=s.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h=r==="Win32";let v=r==="MacIntel";const x=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&v&&t.touch&&x.indexOf(`${o}x${l}`)>=0&&(d=s.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),v=!1),c&&!h&&(a.os="android",a.android=!0),(d||p||u)&&(a.os="ios",a.ios=!0),a}function wn(i){return i===void 0&&(i={}),qt||(qt=os(i)),qt}let Yt;function ls(){const i=ne(),e=wn();let t=!1;function n(){const o=i.navigator.userAgent.toLowerCase();return o.indexOf("safari")>=0&&o.indexOf("chrome")<0&&o.indexOf("android")<0}if(n()){const o=String(i.navigator.userAgent);if(o.includes("Version/")){const[l,c]=o.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));t=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(i.navigator.userAgent),s=n(),a=s||r&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:r}}function ds(){return Yt||(Yt=ls()),Yt}function cs(i){let{swiper:e,on:t,emit:n}=i;const r=ne();let s=null,a=null;const o=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(u=>{a=r.requestAnimationFrame(()=>{const{width:p,height:h}=e;let v=p,x=h;u.forEach(E=>{let{contentBoxSize:f,contentRect:g,target:m}=E;m&&m!==e.el||(v=g?g.width:(f[0]||f).inlineSize,x=g?g.height:(f[0]||f).blockSize)}),(v!==p||x!==h)&&o()})}),s.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},d=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",o),r.addEventListener("orientationchange",d)}),t("destroy",()=>{c(),r.removeEventListener("resize",o),r.removeEventListener("orientationchange",d)})}function us(i){let{swiper:e,extendParams:t,on:n,emit:r}=i;const s=[],a=ne(),o=function(d,u){u===void 0&&(u={});const p=a.MutationObserver||a.WebkitMutationObserver,h=new p(v=>{if(e.__preventObserver__)return;if(v.length===1){r("observerUpdate",v[0]);return}const x=function(){r("observerUpdate",v[0])};a.requestAnimationFrame?a.requestAnimationFrame(x):a.setTimeout(x,0)});h.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),s.push(h)},l=()=>{if(e.params.observer){if(e.params.observeParents){const d=yn(e.hostEl);for(let u=0;u<d.length;u+=1)o(d[u])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},c=()=>{s.forEach(d=>{d.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var fs={on(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;const r=t?"unshift":"push";return i.split(" ").forEach(s=>{n.eventsListeners[s]||(n.eventsListeners[s]=[]),n.eventsListeners[s][r](e)}),n},once(i,e,t){const n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;function r(){n.off(i,r),r.__emitterProxy&&delete r.__emitterProxy;for(var s=arguments.length,a=new Array(s),o=0;o<s;o++)a[o]=arguments[o];e.apply(n,a)}return r.__emitterProxy=e,n.on(i,r,t)},onAny(i,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof i!="function")return t;const n=e?"unshift":"push";return t.eventsAnyListeners.indexOf(i)<0&&t.eventsAnyListeners[n](i),t},offAny(i){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(i);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(i,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||i.split(" ").forEach(n=>{typeof e>"u"?t.eventsListeners[n]=[]:t.eventsListeners[n]&&t.eventsListeners[n].forEach((r,s)=>{(r===e||r.__emitterProxy&&r.__emitterProxy===e)&&t.eventsListeners[n].splice(s,1)})}),t},emit(){const i=this;if(!i.eventsListeners||i.destroyed||!i.eventsListeners)return i;let e,t,n;for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),n=i):(e=s[0].events,t=s[0].data,n=s[0].context||i),t.unshift(n),(Array.isArray(e)?e:e.split(" ")).forEach(l=>{i.eventsAnyListeners&&i.eventsAnyListeners.length&&i.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...t])}),i.eventsListeners&&i.eventsListeners[l]&&i.eventsListeners[l].forEach(c=>{c.apply(n,t)})}),i}};function ps(){const i=this;let e,t;const n=i.el;typeof i.params.width<"u"&&i.params.width!==null?e=i.params.width:e=n.clientWidth,typeof i.params.height<"u"&&i.params.height!==null?t=i.params.height:t=n.clientHeight,!(e===0&&i.isHorizontal()||t===0&&i.isVertical())&&(e=e-parseInt(xe(n,"padding-left")||0,10)-parseInt(xe(n,"padding-right")||0,10),t=t-parseInt(xe(n,"padding-top")||0,10)-parseInt(xe(n,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(i,{width:e,height:t,size:i.isHorizontal()?e:t}))}function hs(){const i=this;function e(y,C){return parseFloat(y.getPropertyValue(i.getDirectionLabel(C))||0)}const t=i.params,{wrapperEl:n,slidesEl:r,size:s,rtlTranslate:a,wrongRTL:o}=i,l=i.virtual&&t.virtual.enabled,c=l?i.virtual.slides.length:i.slides.length,d=fe(r,`.${i.params.slideClass}, swiper-slide`),u=l?i.virtual.slides.length:d.length;let p=[];const h=[],v=[];let x=t.slidesOffsetBefore;typeof x=="function"&&(x=t.slidesOffsetBefore.call(i));let E=t.slidesOffsetAfter;typeof E=="function"&&(E=t.slidesOffsetAfter.call(i));const f=i.snapGrid.length,g=i.slidesGrid.length;let m=t.spaceBetween,w=-x,T=0,P=0;if(typeof s>"u")return;typeof m=="string"&&m.indexOf("%")>=0?m=parseFloat(m.replace("%",""))/100*s:typeof m=="string"&&(m=parseFloat(m)),i.virtualSize=-m,d.forEach(y=>{a?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(vt(n,"--swiper-centered-offset-before",""),vt(n,"--swiper-centered-offset-after",""));const I=t.grid&&t.grid.rows>1&&i.grid;I?i.grid.initSlides(d):i.grid&&i.grid.unsetSlides();let _;const b=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<u;y+=1){_=0;let C;if(d[y]&&(C=d[y]),I&&i.grid.updateSlide(y,C,d),!(d[y]&&xe(C,"display")==="none")){if(t.slidesPerView==="auto"){b&&(d[y].style[i.getDirectionLabel("width")]="");const M=getComputedStyle(C),$=C.style.transform,R=C.style.webkitTransform;if($&&(C.style.transform="none"),R&&(C.style.webkitTransform="none"),t.roundLengths)_=i.isHorizontal()?di(C,"width"):di(C,"height");else{const B=e(M,"width"),ue=e(M,"padding-left"),Wt=e(M,"padding-right"),A=e(M,"margin-left"),re=e(M,"margin-right"),Z=M.getPropertyValue("box-sizing");if(Z&&Z==="border-box")_=B+A+re;else{const{clientWidth:Te,offsetWidth:mt}=C;_=B+ue+Wt+A+re+(mt-Te)}}$&&(C.style.transform=$),R&&(C.style.webkitTransform=R),t.roundLengths&&(_=Math.floor(_))}else _=(s-(t.slidesPerView-1)*m)/t.slidesPerView,t.roundLengths&&(_=Math.floor(_)),d[y]&&(d[y].style[i.getDirectionLabel("width")]=`${_}px`);d[y]&&(d[y].swiperSlideSize=_),v.push(_),t.centeredSlides?(w=w+_/2+T/2+m,T===0&&y!==0&&(w=w-s/2-m),y===0&&(w=w-s/2-m),Math.abs(w)<1/1e3&&(w=0),t.roundLengths&&(w=Math.floor(w)),P%t.slidesPerGroup===0&&p.push(w),h.push(w)):(t.roundLengths&&(w=Math.floor(w)),(P-Math.min(i.params.slidesPerGroupSkip,P))%i.params.slidesPerGroup===0&&p.push(w),h.push(w),w=w+_+m),i.virtualSize+=_+m,T=_,P+=1}}if(i.virtualSize=Math.max(i.virtualSize,s)+E,a&&o&&(t.effect==="slide"||t.effect==="coverflow")&&(n.style.width=`${i.virtualSize+m}px`),t.setWrapperSize&&(n.style[i.getDirectionLabel("width")]=`${i.virtualSize+m}px`),I&&i.grid.updateWrapperSize(_,p),!t.centeredSlides){const y=[];for(let C=0;C<p.length;C+=1){let M=p[C];t.roundLengths&&(M=Math.floor(M)),p[C]<=i.virtualSize-s&&y.push(M)}p=y,Math.floor(i.virtualSize-s)-Math.floor(p[p.length-1])>1&&p.push(i.virtualSize-s)}if(l&&t.loop){const y=v[0]+m;if(t.slidesPerGroup>1){const C=Math.ceil((i.virtual.slidesBefore+i.virtual.slidesAfter)/t.slidesPerGroup),M=y*t.slidesPerGroup;for(let $=0;$<C;$+=1)p.push(p[p.length-1]+M)}for(let C=0;C<i.virtual.slidesBefore+i.virtual.slidesAfter;C+=1)t.slidesPerGroup===1&&p.push(p[p.length-1]+y),h.push(h[h.length-1]+y),i.virtualSize+=y}if(p.length===0&&(p=[0]),m!==0){const y=i.isHorizontal()&&a?"marginLeft":i.getDirectionLabel("marginRight");d.filter((C,M)=>!t.cssMode||t.loop?!0:M!==d.length-1).forEach(C=>{C.style[y]=`${m}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let y=0;v.forEach(M=>{y+=M+(m||0)}),y-=m;const C=y-s;p=p.map(M=>M<=0?-x:M>C?C+E:M)}if(t.centerInsufficientSlides){let y=0;v.forEach(M=>{y+=M+(m||0)}),y-=m;const C=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(y+C<s){const M=(s-y-C)/2;p.forEach(($,R)=>{p[R]=$-M}),h.forEach(($,R)=>{h[R]=$+M})}}if(Object.assign(i,{slides:d,snapGrid:p,slidesGrid:h,slidesSizesGrid:v}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){vt(n,"--swiper-centered-offset-before",`${-p[0]}px`),vt(n,"--swiper-centered-offset-after",`${i.size/2-v[v.length-1]/2}px`);const y=-i.snapGrid[0],C=-i.slidesGrid[0];i.snapGrid=i.snapGrid.map(M=>M+y),i.slidesGrid=i.slidesGrid.map(M=>M+C)}if(u!==c&&i.emit("slidesLengthChange"),p.length!==f&&(i.params.watchOverflow&&i.checkOverflow(),i.emit("snapGridLengthChange")),h.length!==g&&i.emit("slidesGridLengthChange"),t.watchSlidesProgress&&i.updateSlidesOffset(),i.emit("slidesUpdated"),!l&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const y=`${t.containerModifierClass}backface-hidden`,C=i.el.classList.contains(y);u<=t.maxBackfaceHiddenSlides?C||i.el.classList.add(y):C&&i.el.classList.remove(y)}}function ms(i){const e=this,t=[],n=e.virtual&&e.params.virtual.enabled;let r=0,s;typeof i=="number"?e.setTransition(i):i===!0&&e.setTransition(e.params.speed);const a=o=>n?e.slides[e.getSlideIndexByData(o)]:e.slides[o];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(o=>{t.push(o)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const o=e.activeIndex+s;if(o>e.slides.length&&!n)break;t.push(a(o))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const o=t[s].offsetHeight;r=o>r?o:r}(r||r===0)&&(e.wrapperEl.style.height=`${r}px`)}function gs(){const i=this,e=i.slides,t=i.isElement?i.isHorizontal()?i.wrapperEl.offsetLeft:i.wrapperEl.offsetTop:0;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=(i.isHorizontal()?e[n].offsetLeft:e[n].offsetTop)-t-i.cssOverflowAdjustment()}const Ui=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function vs(i){i===void 0&&(i=this&&this.translate||0);const e=this,t=e.params,{slides:n,rtlTranslate:r,snapGrid:s}=e;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-i;r&&(a=i),e.visibleSlidesIndexes=[],e.visibleSlides=[];let o=t.spaceBetween;typeof o=="string"&&o.indexOf("%")>=0?o=parseFloat(o.replace("%",""))/100*e.size:typeof o=="string"&&(o=parseFloat(o));for(let l=0;l<n.length;l+=1){const c=n[l];let d=c.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(d-=n[0].swiperSlideOffset);const u=(a+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),p=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-d)/(c.swiperSlideSize+o),h=-(a-d),v=h+e.slidesSizesGrid[l],x=h>=0&&h<=e.size-e.slidesSizesGrid[l],E=h>=0&&h<e.size-1||v>1&&v<=e.size||h<=0&&v>=e.size;E&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),Ui(c,E,t.slideVisibleClass),Ui(c,x,t.slideFullyVisibleClass),c.progress=r?-u:u,c.originalProgress=r?-p:p}}function ys(i){const e=this;if(typeof i>"u"){const d=e.rtlTranslate?-1:1;i=e&&e.translate&&e.translate*d||0}const t=e.params,n=e.maxTranslate()-e.minTranslate();let{progress:r,isBeginning:s,isEnd:a,progressLoop:o}=e;const l=s,c=a;if(n===0)r=0,s=!0,a=!0;else{r=(i-e.minTranslate())/n;const d=Math.abs(i-e.minTranslate())<1,u=Math.abs(i-e.maxTranslate())<1;s=d||r<=0,a=u||r>=1,d&&(r=0),u&&(r=1)}if(t.loop){const d=e.getSlideIndexByData(0),u=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[d],h=e.slidesGrid[u],v=e.slidesGrid[e.slidesGrid.length-1],x=Math.abs(i);x>=p?o=(x-p)/v:o=(x+v-h)/v,o>1&&(o-=1)}Object.assign(e,{progress:r,progressLoop:o,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(i),s&&!l&&e.emit("reachBeginning toEdge"),a&&!c&&e.emit("reachEnd toEdge"),(l&&!s||c&&!a)&&e.emit("fromEdge"),e.emit("progress",r)}const Xt=(i,e,t)=>{e&&!i.classList.contains(t)?i.classList.add(t):!e&&i.classList.contains(t)&&i.classList.remove(t)};function bs(){const i=this,{slides:e,params:t,slidesEl:n,activeIndex:r}=i,s=i.virtual&&t.virtual.enabled,a=i.grid&&t.grid&&t.grid.rows>1,o=u=>fe(n,`.${t.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(s)if(t.loop){let u=r-i.virtual.slidesBefore;u<0&&(u=i.virtual.slides.length+u),u>=i.virtual.slides.length&&(u-=i.virtual.slides.length),l=o(`[data-swiper-slide-index="${u}"]`)}else l=o(`[data-swiper-slide-index="${r}"]`);else a?(l=e.filter(u=>u.column===r)[0],d=e.filter(u=>u.column===r+1)[0],c=e.filter(u=>u.column===r-1)[0]):l=e[r];l&&(a||(d=rs(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d&&(d=e[0]),c=ss(l,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(u=>{Xt(u,u===l,t.slideActiveClass),Xt(u,u===d,t.slideNextClass),Xt(u,u===c,t.slidePrevClass)}),i.emitSlidesClasses()}const yt=(i,e)=>{if(!i||i.destroyed||!i.params)return;const t=()=>i.isElement?"swiper-slide":`.${i.params.slideClass}`,n=e.closest(t());if(n){let r=n.querySelector(`.${i.params.lazyPreloaderClass}`);!r&&i.isElement&&(n.shadowRoot?r=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(r=n.shadowRoot.querySelector(`.${i.params.lazyPreloaderClass}`),r&&r.remove())})),r&&r.remove()}},Kt=(i,e)=>{if(!i.slides[e])return;const t=i.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ci=i=>{if(!i||i.destroyed||!i.params)return;let e=i.params.lazyPreloadPrevNext;const t=i.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const n=i.params.slidesPerView==="auto"?i.slidesPerViewDynamic():Math.ceil(i.params.slidesPerView),r=i.activeIndex;if(i.params.grid&&i.params.grid.rows>1){const a=r,o=[a-e];o.push(...Array.from({length:e}).map((l,c)=>a+n+c)),i.slides.forEach((l,c)=>{o.includes(l.column)&&Kt(i,c)});return}const s=r+n-1;if(i.params.rewind||i.params.loop)for(let a=r-e;a<=s+e;a+=1){const o=(a%t+t)%t;(o<r||o>s)&&Kt(i,o)}else for(let a=Math.max(r-e,0);a<=Math.min(s+e,t-1);a+=1)a!==r&&(a>s||a<r)&&Kt(i,a)};function ws(i){const{slidesGrid:e,params:t}=i,n=i.rtlTranslate?i.translate:-i.translate;let r;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?n>=e[s]&&n<e[s+1]-(e[s+1]-e[s])/2?r=s:n>=e[s]&&n<e[s+1]&&(r=s+1):n>=e[s]&&(r=s);return t.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function xs(i){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:n,params:r,activeIndex:s,realIndex:a,snapIndex:o}=e;let l=i,c;const d=h=>{let v=h-e.virtual.slidesBefore;return v<0&&(v=e.virtual.slides.length+v),v>=e.virtual.slides.length&&(v-=e.virtual.slides.length),v};if(typeof l>"u"&&(l=ws(e)),n.indexOf(t)>=0)c=n.indexOf(t);else{const h=Math.min(r.slidesPerGroupSkip,l);c=h+Math.floor((l-h)/r.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===s&&!e.params.loop){c!==o&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=d(l);return}const u=e.grid&&r.grid&&r.grid.rows>1;let p;if(e.virtual&&r.virtual.enabled&&r.loop)p=d(l);else if(u){const h=e.slides.filter(x=>x.column===l)[0];let v=parseInt(h.getAttribute("data-swiper-slide-index"),10);Number.isNaN(v)&&(v=Math.max(e.slides.indexOf(h),0)),p=Math.floor(v/r.grid.rows)}else if(e.slides[l]){const h=e.slides[l].getAttribute("data-swiper-slide-index");h?p=parseInt(h,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:o,snapIndex:c,previousRealIndex:a,realIndex:p,previousIndex:s,activeIndex:l}),e.initialized&&ci(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function Ss(i,e){const t=this,n=t.params;let r=i.closest(`.${n.slideClass}, swiper-slide`);!r&&t.isElement&&e&&e.length>1&&e.includes(i)&&[...e.slice(e.indexOf(i)+1,e.length)].forEach(o=>{!r&&o.matches&&o.matches(`.${n.slideClass}, swiper-slide`)&&(r=o)});let s=!1,a;if(r){for(let o=0;o<t.slides.length;o+=1)if(t.slides[o]===r){s=!0,a=o;break}}if(r&&s)t.clickedSlide=r,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var _s={updateSize:ps,updateSlides:hs,updateAutoHeight:ms,updateSlidesOffset:gs,updateSlidesProgress:vs,updateProgress:ys,updateSlidesClasses:bs,updateActiveIndex:xs,updateClickedSlide:Ss};function Ts(i){i===void 0&&(i=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:n,translate:r,wrapperEl:s}=e;if(t.virtualTranslate)return n?-r:r;if(t.cssMode)return r;let a=is(s,i);return a+=e.cssOverflowAdjustment(),n&&(a=-a),a||0}function Es(i,e){const t=this,{rtlTranslate:n,params:r,wrapperEl:s,progress:a}=t;let o=0,l=0;const c=0;t.isHorizontal()?o=n?-i:i:l=i,r.roundLengths&&(o=Math.floor(o),l=Math.floor(l)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?o:l,r.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-o:-l:r.virtualTranslate||(t.isHorizontal()?o-=t.cssOverflowAdjustment():l-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${o}px, ${l}px, ${c}px)`);let d;const u=t.maxTranslate()-t.minTranslate();u===0?d=0:d=(i-t.minTranslate())/u,d!==a&&t.updateProgress(i),t.emit("setTranslate",t.translate,e)}function $s(){return-this.snapGrid[0]}function Cs(){return-this.snapGrid[this.snapGrid.length-1]}function Ms(i,e,t,n,r){i===void 0&&(i=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),n===void 0&&(n=!0);const s=this,{params:a,wrapperEl:o}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const l=s.minTranslate(),c=s.maxTranslate();let d;if(n&&i>l?d=l:n&&i<c?d=c:d=i,s.updateProgress(d),a.cssMode){const u=s.isHorizontal();if(e===0)o[u?"scrollLeft":"scrollTop"]=-d;else{if(!s.support.smoothScroll)return vn({swiper:s,targetPosition:-d,side:u?"left":"top"}),!0;o.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(d),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(d),t&&(s.emit("beforeTransitionStart",e,r),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(p){!s||s.destroyed||p.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Os={getTranslate:Ts,setTranslate:Es,minTranslate:$s,maxTranslate:Cs,translateTo:Ms};function Ps(i,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${i}ms`,t.wrapperEl.style.transitionDelay=i===0?"0ms":""),t.emit("setTransition",i,e)}function xn(i){let{swiper:e,runCallbacks:t,direction:n,step:r}=i;const{activeIndex:s,previousIndex:a}=e;let o=n;if(o||(s>a?o="next":s<a?o="prev":o="reset"),e.emit(`transition${r}`),t&&s!==a){if(o==="reset"){e.emit(`slideResetTransition${r}`);return}e.emit(`slideChangeTransition${r}`),o==="next"?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`)}}function Rs(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;n.cssMode||(n.autoHeight&&t.updateAutoHeight(),xn({swiper:t,runCallbacks:i,direction:e,step:"Start"}))}function As(i,e){i===void 0&&(i=!0);const t=this,{params:n}=t;t.animating=!1,!n.cssMode&&(t.setTransition(0),xn({swiper:t,runCallbacks:i,direction:e,step:"End"}))}var Is={setTransition:Ps,transitionStart:Rs,transitionEnd:As};function Ls(i,e,t,n,r){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const s=this;let a=i;a<0&&(a=0);const{params:o,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:h,enabled:v}=s;if(!v&&!n&&!r||s.destroyed||s.animating&&o.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const x=Math.min(s.params.slidesPerGroupSkip,a);let E=x+Math.floor((a-x)/s.params.slidesPerGroup);E>=l.length&&(E=l.length-1);const f=-l[E];if(o.normalizeSlideIndex)for(let m=0;m<c.length;m+=1){const w=-Math.floor(f*100),T=Math.floor(c[m]*100),P=Math.floor(c[m+1]*100);typeof c[m+1]<"u"?w>=T&&w<P-(P-T)/2?a=m:w>=T&&w<P&&(a=m+1):w>=T&&(a=m)}if(s.initialized&&a!==u&&(!s.allowSlideNext&&(p?f>s.translate&&f>s.minTranslate():f<s.translate&&f<s.minTranslate())||!s.allowSlidePrev&&f>s.translate&&f>s.maxTranslate()&&(u||0)!==a))return!1;a!==(d||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(f);let g;if(a>u?g="next":a<u?g="prev":g="reset",p&&-f===s.translate||!p&&f===s.translate)return s.updateActiveIndex(a),o.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),o.effect!=="slide"&&s.setTranslate(f),g!=="reset"&&(s.transitionStart(t,g),s.transitionEnd(t,g)),!1;if(o.cssMode){const m=s.isHorizontal(),w=p?f:-f;if(e===0){const T=s.virtual&&s.params.virtual.enabled;T&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),T&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{h[m?"scrollLeft":"scrollTop"]=w})):h[m?"scrollLeft":"scrollTop"]=w,T&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return vn({swiper:s,targetPosition:w,side:m?"left":"top"}),!0;h.scrollTo({[m?"left":"top"]:w,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(f),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,n),s.transitionStart(t,g),e===0?s.transitionEnd(t,g):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,g))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function ks(i,e,t,n){i===void 0&&(i=0),t===void 0&&(t=!0),typeof i=="string"&&(i=parseInt(i,10));const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);const s=r.grid&&r.params.grid&&r.params.grid.rows>1;let a=i;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)a=a+r.virtual.slidesBefore;else{let o;if(s){const p=a*r.params.grid.rows;o=r.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===p)[0].column}else o=r.getSlideIndexByData(a);const l=s?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c}=r.params;let d=r.params.slidesPerView;d==="auto"?d=r.slidesPerViewDynamic():(d=Math.ceil(parseFloat(r.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-o<d;if(c&&(u=u||o<Math.ceil(d/2)),n&&c&&r.params.slidesPerView!=="auto"&&!s&&(u=!1),u){const p=c?o<r.activeIndex?"prev":"next":o-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?o+1:o-l+1,slideRealIndex:p==="next"?r.realIndex:void 0})}if(s){const p=a*r.params.grid.rows;a=r.slides.filter(h=>h.getAttribute("data-swiper-slide-index")*1===p)[0].column}else a=r.getSlideIndexByData(a)}return requestAnimationFrame(()=>{r.slideTo(a,e,t,n)}),r}function zs(i,e,t){e===void 0&&(e=!0);const n=this,{enabled:r,params:s,animating:a}=n;if(!r||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);let o=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(o=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<s.slidesPerGroupSkip?1:o,c=n.virtual&&s.virtual.enabled;if(s.loop){if(a&&!c&&s.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,i,e,t)}),!0}return s.rewind&&n.isEnd?n.slideTo(0,i,e,t):n.slideTo(n.activeIndex+l,i,e,t)}function Bs(i,e,t){e===void 0&&(e=!0);const n=this,{params:r,snapGrid:s,slidesGrid:a,rtlTranslate:o,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof i>"u"&&(i=n.params.speed);const d=n.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=o?n.translate:-n.translate;function p(f){return f<0?-Math.floor(Math.abs(f)):Math.floor(f)}const h=p(u),v=s.map(f=>p(f));let x=s[v.indexOf(h)-1];if(typeof x>"u"&&r.cssMode){let f;s.forEach((g,m)=>{h>=g&&(f=m)}),typeof f<"u"&&(x=s[f>0?f-1:f])}let E=0;if(typeof x<"u"&&(E=a.indexOf(x),E<0&&(E=n.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(E=E-n.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),r.rewind&&n.isBeginning){const f=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(f,i,e,t)}else if(r.loop&&n.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(E,i,e,t)}),!0;return n.slideTo(E,i,e,t)}function js(i,e,t){e===void 0&&(e=!0);const n=this;if(!n.destroyed)return typeof i>"u"&&(i=n.params.speed),n.slideTo(n.activeIndex,i,e,t)}function Ds(i,e,t,n){e===void 0&&(e=!0),n===void 0&&(n=.5);const r=this;if(r.destroyed)return;typeof i>"u"&&(i=r.params.speed);let s=r.activeIndex;const a=Math.min(r.params.slidesPerGroupSkip,s),o=a+Math.floor((s-a)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[o]){const c=r.snapGrid[o],d=r.snapGrid[o+1];l-c>(d-c)*n&&(s+=r.params.slidesPerGroup)}else{const c=r.snapGrid[o-1],d=r.snapGrid[o];l-c<=(d-c)*n&&(s-=r.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,r.slidesGrid.length-1),r.slideTo(s,i,e,t)}function Ns(){const i=this;if(i.destroyed)return;const{params:e,slidesEl:t}=i,n=e.slidesPerView==="auto"?i.slidesPerViewDynamic():e.slidesPerView;let r=i.clickedIndex,s;const a=i.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(i.animating)return;s=parseInt(i.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?r<i.loopedSlides-n/2||r>i.slides.length-i.loopedSlides+n/2?(i.loopFix(),r=i.getSlideIndex(fe(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),li(()=>{i.slideTo(r)})):i.slideTo(r):r>i.slides.length-n?(i.loopFix(),r=i.getSlideIndex(fe(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),li(()=>{i.slideTo(r)})):i.slideTo(r)}else i.slideTo(r)}var Hs={slideTo:Ls,slideToLoop:ks,slideNext:zs,slidePrev:Bs,slideReset:js,slideToClosest:Ds,slideToClickedSlide:Ns};function Gs(i){const e=this,{params:t,slidesEl:n}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const r=()=>{fe(n,`.${t.slideClass}, swiper-slide`).forEach((u,p)=>{u.setAttribute("data-swiper-slide-index",p)})},s=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(s?t.grid.rows:1),o=e.slides.length%a!==0,l=s&&e.slides.length%t.grid.rows!==0,c=d=>{for(let u=0;u<d;u+=1){const p=e.isElement?xt("swiper-slide",[t.slideBlankClass]):xt("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(p)}};if(o){if(t.loopAddBlankSlides){const d=a-e.slides.length%a;c(d),e.recalcSlides(),e.updateSlides()}else wt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(l){if(t.loopAddBlankSlides){const d=t.grid.rows-e.slides.length%t.grid.rows;c(d),e.recalcSlides(),e.updateSlides()}else wt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();e.loopFix({slideRealIndex:i,direction:t.centeredSlides?void 0:"next"})}function Vs(i){let{slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:s,byController:a,byMousewheel:o}=i===void 0?{}:i;const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:h}=l,{centeredSlides:v}=h;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&h.virtual.enabled){t&&(!h.centeredSlides&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h.centeredSlides&&l.snapIndex<h.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let x=h.slidesPerView;x==="auto"?x=l.slidesPerViewDynamic():(x=Math.ceil(parseFloat(h.slidesPerView,10)),v&&x%2===0&&(x=x+1));const E=h.slidesPerGroupAuto?x:h.slidesPerGroup;let f=E;f%E!==0&&(f+=E-f%E),f+=h.loopAdditionalSlides,l.loopedSlides=f;const g=l.grid&&h.grid&&h.grid.rows>1;c.length<x+f?wt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):g&&h.grid.fill==="row"&&wt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const m=[],w=[];let T=l.activeIndex;typeof s>"u"?s=l.getSlideIndex(c.filter($=>$.classList.contains(h.slideActiveClass))[0]):T=s;const P=n==="next"||!n,I=n==="prev"||!n;let _=0,b=0;const y=g?Math.ceil(c.length/h.grid.rows):c.length,M=(g?c[s].column:s)+(v&&typeof r>"u"?-x/2+.5:0);if(M<f){_=Math.max(f-M,E);for(let $=0;$<f-M;$+=1){const R=$-Math.floor($/y)*y;if(g){const B=y-R-1;for(let ue=c.length-1;ue>=0;ue-=1)c[ue].column===B&&m.push(ue)}else m.push(y-R-1)}}else if(M+x>y-f){b=Math.max(M-(y-f*2),E);for(let $=0;$<b;$+=1){const R=$-Math.floor($/y)*y;g?c.forEach((B,ue)=>{B.column===R&&w.push(ue)}):w.push(R)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),I&&m.forEach($=>{c[$].swiperLoopMoveDOM=!0,p.prepend(c[$]),c[$].swiperLoopMoveDOM=!1}),P&&w.forEach($=>{c[$].swiperLoopMoveDOM=!0,p.append(c[$]),c[$].swiperLoopMoveDOM=!1}),l.recalcSlides(),h.slidesPerView==="auto"?l.updateSlides():g&&(m.length>0&&I||w.length>0&&P)&&l.slides.forEach(($,R)=>{l.grid.updateSlide(R,$,l.slides)}),h.watchSlidesProgress&&l.updateSlidesOffset(),t){if(m.length>0&&I){if(typeof e>"u"){const $=l.slidesGrid[T],B=l.slidesGrid[T+_]-$;o?l.setTranslate(l.translate-B):(l.slideTo(T+Math.ceil(_),0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else if(r){const $=g?m.length/h.grid.rows:m.length;l.slideTo(l.activeIndex+$,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(w.length>0&&P)if(typeof e>"u"){const $=l.slidesGrid[T],B=l.slidesGrid[T-b]-$;o?l.setTranslate(l.translate-B):(l.slideTo(T-b,0,!1,!0),r&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else{const $=g?w.length/h.grid.rows:w.length;l.slideTo(l.activeIndex-$,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!a){const $={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:s,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(R=>{!R.destroyed&&R.params.loop&&R.loopFix({...$,slideTo:R.params.slidesPerView===h.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...$,slideTo:l.controller.control.params.slidesPerView===h.slidesPerView?t:!1})}l.emit("loopFix")}function Ws(){const i=this,{params:e,slidesEl:t}=i;if(!e.loop||i.virtual&&i.params.virtual.enabled)return;i.recalcSlides();const n=[];i.slides.forEach(r=>{const s=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;n[s]=r}),i.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),n.forEach(r=>{t.append(r)}),i.recalcSlides(),i.slideTo(i.realIndex,0)}var Fs={loopCreate:Gs,loopFix:Vs,loopDestroy:Ws};function Us(i){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=i?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function qs(){const i=this;i.params.watchOverflow&&i.isLocked||i.params.cssMode||(i.isElement&&(i.__preventObserver__=!0),i[i.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",i.isElement&&requestAnimationFrame(()=>{i.__preventObserver__=!1}))}var Ys={setGrabCursor:Us,unsetGrabCursor:qs};function Xs(i,e){e===void 0&&(e=this);function t(n){if(!n||n===ve()||n===ne())return null;n.assignedSlot&&(n=n.assignedSlot);const r=n.closest(i);return!r&&!n.getRootNode?null:r||t(n.getRootNode().host)}return t(e)}function qi(i,e,t){const n=ne(),{params:r}=i,s=r.edgeSwipeDetection,a=r.edgeSwipeThreshold;return s&&(t<=a||t>=n.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Ks(i){const e=this,t=ve();let n=i;n.originalEvent&&(n=n.originalEvent);const r=e.touchEventsData;if(n.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==n.pointerId)return;r.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(r.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){qi(e,n,n.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:o}=e;if(!o||!s.simulateTouch&&n.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let l=n.target;if(s.touchEventsTarget==="wrapper"&&!e.wrapperEl.contains(l)||"which"in n&&n.which===3||"button"in n&&n.button>0||r.isTouched&&r.isMoved)return;const c=!!s.noSwipingClass&&s.noSwipingClass!=="",d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const u=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(s.noSwiping&&(p?Xs(u,l):l.closest(u))){e.allowClick=!0;return}if(s.swipeHandler&&!l.closest(s.swipeHandler))return;a.currentX=n.pageX,a.currentY=n.pageY;const h=a.currentX,v=a.currentY;if(!qi(e,n,h))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=v,r.touchStartTime=Ce(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(r.allowThresholdMove=!1);let x=!0;l.matches(r.focusableElements)&&(x=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==l&&t.activeElement.blur();const E=x&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||E)&&!l.isContentEditable&&n.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",n)}function Zs(i){const e=ve(),t=this,n=t.touchEventsData,{params:r,touches:s,rtlTranslate:a,enabled:o}=t;if(!o||!r.simulateTouch&&i.pointerType==="mouse")return;let l=i;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].filter(T=>T.identifier===n.touchId)[0],!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&t.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){s.startX=d,s.startY=u;return}if(!t.allowTouchMove){l.target.matches(n.focusableElements)||(t.allowClick=!1),n.isTouched&&(Object.assign(s,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=Ce());return}if(r.touchReleaseOnEdges&&!r.loop){if(t.isVertical()){if(u<s.startY&&t.translate<=t.maxTranslate()||u>s.startY&&t.translate>=t.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else if(d<s.startX&&t.translate<=t.maxTranslate()||d>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&l.target===e.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,t.allowClick=!1;return}n.allowTouchCallbacks&&t.emit("touchMove",l),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=d,s.currentY=u;const p=s.currentX-s.startX,h=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(p**2+h**2)<t.params.threshold)return;if(typeof n.isScrolling>"u"){let T;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?n.isScrolling=!1:p*p+h*h>=25&&(T=Math.atan2(Math.abs(h),Math.abs(p))*180/Math.PI,n.isScrolling=t.isHorizontal()?T>r.touchAngle:90-T>r.touchAngle)}if(n.isScrolling&&t.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;t.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let v=t.isHorizontal()?p:h,x=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;r.oneWayMovement&&(v=Math.abs(v)*(a?1:-1),x=Math.abs(x)*(a?1:-1)),s.diff=v,v*=r.touchRatio,a&&(v=-v,x=-x);const E=t.touchesDirection;t.swipeDirection=v>0?"prev":"next",t.touchesDirection=x>0?"prev":"next";const f=t.params.loop&&!r.cssMode,g=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!n.isMoved){if(f&&g&&t.loopFix({direction:t.swipeDirection}),n.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,r.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",l)}if(new Date().getTime(),n.isMoved&&n.allowThresholdMove&&E!==t.touchesDirection&&f&&g&&Math.abs(v)>=1){Object.assign(s,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}t.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=v+n.startTranslate;let m=!0,w=r.resistanceRatio;if(r.touchReleaseOnEdges&&(w=0),v>0?(f&&g&&n.allowThresholdMove&&n.currentTranslate>(r.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>t.minTranslate()&&(m=!1,r.resistance&&(n.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+n.startTranslate+v)**w))):v<0&&(f&&g&&n.allowThresholdMove&&n.currentTranslate<(r.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]:t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(r.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),n.currentTranslate<t.maxTranslate()&&(m=!1,r.resistance&&(n.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-n.startTranslate-v)**w))),m&&(l.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(n.currentTranslate=n.startTranslate),r.threshold>0)if(Math.abs(v)>r.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,n.currentTranslate=n.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{n.currentTranslate=n.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&t.freeMode||r.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(n.currentTranslate),t.setTranslate(n.currentTranslate))}function Qs(i){const e=this,t=e.touchEventsData;let n=i;n.originalEvent&&(n=n.originalEvent);let r;if(n.type==="touchend"||n.type==="touchcancel"){if(r=[...n.changedTouches].filter(T=>T.identifier===t.touchId)[0],!r||r.identifier!==t.touchId)return}else{if(t.touchId!==null||n.pointerId!==t.pointerId)return;r=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:o,rtlTranslate:l,slidesGrid:c,enabled:d}=e;if(!d||!a.simulateTouch&&n.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",n),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const u=Ce(),p=u-t.touchStartTime;if(e.allowClick){const T=n.path||n.composedPath&&n.composedPath();e.updateClickedSlide(T&&T[0]||n.target,T),e.emit("tap click",n),p<300&&u-t.lastClickTime<300&&e.emit("doubleTap doubleClick",n)}if(t.lastClickTime=Ce(),li(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||o.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let h;if(a.followFinger?h=l?e.translate:-e.translate:h=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:h});return}const v=h>=-e.maxTranslate()&&!e.params.loop;let x=0,E=e.slidesSizesGrid[0];for(let T=0;T<c.length;T+=T<a.slidesPerGroupSkip?1:a.slidesPerGroup){const P=T<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof c[T+P]<"u"?(v||h>=c[T]&&h<c[T+P])&&(x=T,E=c[T+P]-c[T]):(v||h>=c[T])&&(x=T,E=c[c.length-1]-c[c.length-2])}let f=null,g=null;a.rewind&&(e.isBeginning?g=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(f=0));const m=(h-c[x])/E,w=x<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(p>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?f:x+w):e.slideTo(x)),e.swipeDirection==="prev"&&(m>1-a.longSwipesRatio?e.slideTo(x+w):g!==null&&m<0&&Math.abs(m)>a.longSwipesRatio?e.slideTo(g):e.slideTo(x))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(n.target===e.navigation.nextEl||n.target===e.navigation.prevEl)?n.target===e.navigation.nextEl?e.slideTo(x+w):e.slideTo(x):(e.swipeDirection==="next"&&e.slideTo(f!==null?f:x+w),e.swipeDirection==="prev"&&e.slideTo(g!==null?g:x))}}function Yi(){const i=this,{params:e,el:t}=i;if(t&&t.offsetWidth===0)return;e.breakpoints&&i.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:r,snapGrid:s}=i,a=i.virtual&&i.params.virtual.enabled;i.allowSlideNext=!0,i.allowSlidePrev=!0,i.updateSize(),i.updateSlides(),i.updateSlidesClasses();const o=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&i.isEnd&&!i.isBeginning&&!i.params.centeredSlides&&!o?i.slideTo(i.slides.length-1,0,!1,!0):i.params.loop&&!a?i.slideToLoop(i.realIndex,0,!1,!0):i.slideTo(i.activeIndex,0,!1,!0),i.autoplay&&i.autoplay.running&&i.autoplay.paused&&(clearTimeout(i.autoplay.resizeTimeout),i.autoplay.resizeTimeout=setTimeout(()=>{i.autoplay&&i.autoplay.running&&i.autoplay.paused&&i.autoplay.resume()},500)),i.allowSlidePrev=r,i.allowSlideNext=n,i.params.watchOverflow&&s!==i.snapGrid&&i.checkOverflow()}function Js(i){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&i.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(i.stopPropagation(),i.stopImmediatePropagation())))}function er(){const i=this,{wrapperEl:e,rtlTranslate:t,enabled:n}=i;if(!n)return;i.previousTranslate=i.translate,i.isHorizontal()?i.translate=-e.scrollLeft:i.translate=-e.scrollTop,i.translate===0&&(i.translate=0),i.updateActiveIndex(),i.updateSlidesClasses();let r;const s=i.maxTranslate()-i.minTranslate();s===0?r=0:r=(i.translate-i.minTranslate())/s,r!==i.progress&&i.updateProgress(t?-i.translate:i.translate),i.emit("setTranslate",i.translate,!1)}function tr(i){const e=this;yt(e,i.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function ir(){const i=this;i.documentTouchHandlerProceeded||(i.documentTouchHandlerProceeded=!0,i.params.touchReleaseOnEdges&&(i.el.style.touchAction="auto"))}const Sn=(i,e)=>{const t=ve(),{params:n,el:r,wrapperEl:s,device:a}=i,o=!!n.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!r||typeof r=="string"||(t[l]("touchstart",i.onDocumentTouchStart,{passive:!1,capture:o}),r[l]("touchstart",i.onTouchStart,{passive:!1}),r[l]("pointerdown",i.onTouchStart,{passive:!1}),t[l]("touchmove",i.onTouchMove,{passive:!1,capture:o}),t[l]("pointermove",i.onTouchMove,{passive:!1,capture:o}),t[l]("touchend",i.onTouchEnd,{passive:!0}),t[l]("pointerup",i.onTouchEnd,{passive:!0}),t[l]("pointercancel",i.onTouchEnd,{passive:!0}),t[l]("touchcancel",i.onTouchEnd,{passive:!0}),t[l]("pointerout",i.onTouchEnd,{passive:!0}),t[l]("pointerleave",i.onTouchEnd,{passive:!0}),t[l]("contextmenu",i.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&r[l]("click",i.onClick,!0),n.cssMode&&s[l]("scroll",i.onScroll),n.updateOnWindowResize?i[c](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Yi,!0):i[c]("observerUpdate",Yi,!0),r[l]("load",i.onLoad,{capture:!0}))};function nr(){const i=this,{params:e}=i;i.onTouchStart=Ks.bind(i),i.onTouchMove=Zs.bind(i),i.onTouchEnd=Qs.bind(i),i.onDocumentTouchStart=ir.bind(i),e.cssMode&&(i.onScroll=er.bind(i)),i.onClick=Js.bind(i),i.onLoad=tr.bind(i),Sn(i,"on")}function sr(){Sn(this,"off")}var rr={attachEvents:nr,detachEvents:sr};const Xi=(i,e)=>i.grid&&e.grid&&e.grid.rows>1;function ar(){const i=this,{realIndex:e,initialized:t,params:n,el:r}=i,s=n.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=i.getBreakpoint(s,i.params.breakpointsBase,i.el);if(!a||i.currentBreakpoint===a)return;const l=(a in s?s[a]:void 0)||i.originalParams,c=Xi(i,n),d=Xi(i,l),u=i.params.grabCursor,p=l.grabCursor,h=n.enabled;c&&!d?(r.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),i.emitContainerClasses()):!c&&d&&(r.classList.add(`${n.containerModifierClass}grid`),(l.grid.fill&&l.grid.fill==="column"||!l.grid.fill&&n.grid.fill==="column")&&r.classList.add(`${n.containerModifierClass}grid-column`),i.emitContainerClasses()),u&&!p?i.unsetGrabCursor():!u&&p&&i.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(m=>{if(typeof l[m]>"u")return;const w=n[m]&&n[m].enabled,T=l[m]&&l[m].enabled;w&&!T&&i[m].disable(),!w&&T&&i[m].enable()});const v=l.direction&&l.direction!==n.direction,x=n.loop&&(l.slidesPerView!==n.slidesPerView||v),E=n.loop;v&&t&&i.changeDirection(),te(i.params,l);const f=i.params.enabled,g=i.params.loop;Object.assign(i,{allowTouchMove:i.params.allowTouchMove,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev}),h&&!f?i.disable():!h&&f&&i.enable(),i.currentBreakpoint=a,i.emit("_beforeBreakpoint",l),t&&(x?(i.loopDestroy(),i.loopCreate(e),i.updateSlides()):!E&&g?(i.loopCreate(e),i.updateSlides()):E&&!g&&i.loopDestroy()),i.emit("breakpoint",l)}function or(i,e,t){if(e===void 0&&(e="window"),!i||e==="container"&&!t)return;let n=!1;const r=ne(),s=e==="window"?r.innerHeight:t.clientHeight,a=Object.keys(i).map(o=>{if(typeof o=="string"&&o.indexOf("@")===0){const l=parseFloat(o.substr(1));return{value:s*l,point:o}}return{value:o,point:o}});a.sort((o,l)=>parseInt(o.value,10)-parseInt(l.value,10));for(let o=0;o<a.length;o+=1){const{point:l,value:c}=a[o];e==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=t.clientWidth&&(n=l)}return n||"max"}var lr={setBreakpoint:ar,getBreakpoint:or};function dr(i,e){const t=[];return i.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(r=>{n[r]&&t.push(e+r)}):typeof n=="string"&&t.push(e+n)}),t}function cr(){const i=this,{classNames:e,params:t,rtl:n,el:r,device:s}=i,a=dr(["initialized",t.direction,{"free-mode":i.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:n},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),r.classList.add(...e),i.emitContainerClasses()}function ur(){const i=this,{el:e,classNames:t}=i;!e||typeof e=="string"||(e.classList.remove(...t),i.emitContainerClasses())}var fr={addClasses:cr,removeClasses:ur};function pr(){const i=this,{isLocked:e,params:t}=i,{slidesOffsetBefore:n}=t;if(n){const r=i.slides.length-1,s=i.slidesGrid[r]+i.slidesSizesGrid[r]+n*2;i.isLocked=i.size>s}else i.isLocked=i.snapGrid.length===1;t.allowSlideNext===!0&&(i.allowSlideNext=!i.isLocked),t.allowSlidePrev===!0&&(i.allowSlidePrev=!i.isLocked),e&&e!==i.isLocked&&(i.isEnd=!1),e!==i.isLocked&&i.emit(i.isLocked?"lock":"unlock")}var hr={checkOverflow:pr},ui={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function mr(i,e){return function(n){n===void 0&&(n={});const r=Object.keys(n)[0],s=n[r];if(typeof s!="object"||s===null){te(e,n);return}if(i[r]===!0&&(i[r]={enabled:!0}),r==="navigation"&&i[r]&&i[r].enabled&&!i[r].prevEl&&!i[r].nextEl&&(i[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&i[r]&&i[r].enabled&&!i[r].el&&(i[r].auto=!0),!(r in i&&"enabled"in s)){te(e,n);return}typeof i[r]=="object"&&!("enabled"in i[r])&&(i[r].enabled=!0),i[r]||(i[r]={enabled:!1}),te(e,n)}}const Zt={eventsEmitter:fs,update:_s,translate:Os,transition:Is,slide:Hs,loop:Fs,grabCursor:Ys,events:rr,breakpoints:lr,checkOverflow:hr,classes:fr},Qt={};let Ti=class he{constructor(){let e,t;for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];r.length===1&&r[0].constructor&&Object.prototype.toString.call(r[0]).slice(8,-1)==="Object"?t=r[0]:[e,t]=r,t||(t={}),t=te({},t),e&&!t.el&&(t.el=e);const a=ve();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const d=[];return a.querySelectorAll(t.el).forEach(u=>{const p=te({},t,{el:u});d.push(new he(p))}),d}const o=this;o.__swiper__=!0,o.support=bn(),o.device=wn({userAgent:t.userAgent}),o.browser=ds(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],t.modules&&Array.isArray(t.modules)&&o.modules.push(...t.modules);const l={};o.modules.forEach(d=>{d({params:t,swiper:o,extendParams:mr(t,l),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const c=te({},ui,l);return o.params=te({},c,Qt,t),o.originalParams=te({},o.params),o.passedParams=te({},t),o.params&&o.params.on&&Object.keys(o.params.on).forEach(d=>{o.on(d,o.params.on[d])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:n}=this,r=fe(t,`.${n.slideClass}, swiper-slide`),s=St(r[0]);return St(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:n}=e;e.slides=fe(t,`.${n.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const n=this;e=Math.min(Math.max(e,0),1);const r=n.minTranslate(),a=(n.maxTranslate()-r)*e+r;n.translateTo(a,typeof t>"u"?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(n=>{const r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit("_slideClass",n,r)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const n=this,{params:r,slides:s,slidesGrid:a,slidesSizesGrid:o,size:l,activeIndex:c}=n;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let u=s[c]?Math.ceil(s[c].swiperSlideSize):0,p;for(let h=c+1;h<s.length;h+=1)s[h]&&!p&&(u+=Math.ceil(s[h].swiperSlideSize),d+=1,u>l&&(p=!0));for(let h=c-1;h>=0;h-=1)s[h]&&!p&&(u+=s[h].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(e==="current")for(let u=c+1;u<s.length;u+=1)(t?a[u]+o[u]-a[c]<l:a[u]-a[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)a[c]-a[u]<l&&(d+=1);return d}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&yt(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){const a=e.rtlTranslate?e.translate*-1:e.translate,o=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(o),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){const a=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const n=this,r=n.params.direction;return e||(e=r==="horizontal"?"vertical":"horizontal"),e===r||e!=="horizontal"&&e!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),n.emit("changeDirection"),t&&n.update()),n}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const r=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):fe(n,r())[0];return!a&&t.params.createElements&&(a=xt("div",t.params.wrapperClass),n.append(a),fe(n,`.${t.params.slideClass}`).forEach(o=>{a.append(o)})),Object.assign(t,{el:n,wrapperEl:a,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:a,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||xe(n,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||xe(n,"direction")==="rtl"),wrongRTL:xe(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const r=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(s=>{s.complete?yt(t,s):s.addEventListener("load",a=>{yt(t,a.target)})}),ci(t),t.initialized=!0,ci(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const n=this,{params:r,el:s,wrapperEl:a,slides:o}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),o&&o.length&&o.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),e!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),es(n)),n.destroyed=!0),null}static extendDefaults(e){te(Qt,e)}static get extendedDefaults(){return Qt}static get defaults(){return ui}static installModule(e){he.prototype.__modules__||(he.prototype.__modules__=[]);const t=he.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>he.installModule(t)),he):(he.installModule(e),he)}};Object.keys(Zt).forEach(i=>{Object.keys(Zt[i]).forEach(e=>{Ti.prototype[e]=Zt[i][e]})});Ti.use([cs,us]);const _n=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function Me(i){return typeof i=="object"&&i!==null&&i.constructor&&Object.prototype.toString.call(i).slice(8,-1)==="Object"&&!i.__swiper__}function Be(i,e){const t=["__proto__","constructor","prototype"];Object.keys(e).filter(n=>t.indexOf(n)<0).forEach(n=>{typeof i[n]>"u"?i[n]=e[n]:Me(e[n])&&Me(i[n])&&Object.keys(e[n]).length>0?e[n].__swiper__?i[n]=e[n]:Be(i[n],e[n]):i[n]=e[n]})}function Tn(i){return i===void 0&&(i={}),i.navigation&&typeof i.navigation.nextEl>"u"&&typeof i.navigation.prevEl>"u"}function En(i){return i===void 0&&(i={}),i.pagination&&typeof i.pagination.el>"u"}function $n(i){return i===void 0&&(i={}),i.scrollbar&&typeof i.scrollbar.el>"u"}function Cn(i){i===void 0&&(i="");const e=i.split(" ").map(n=>n.trim()).filter(n=>!!n),t=[];return e.forEach(n=>{t.indexOf(n)<0&&t.push(n)}),t.join(" ")}function gr(i){return i===void 0&&(i=""),i?i.includes("swiper-wrapper")?i:`swiper-wrapper ${i}`:"swiper-wrapper"}function vr(i){let{swiper:e,slides:t,passedParams:n,changedParams:r,nextEl:s,prevEl:a,scrollbarEl:o,paginationEl:l}=i;const c=r.filter(b=>b!=="children"&&b!=="direction"&&b!=="wrapperClass"),{params:d,pagination:u,navigation:p,scrollbar:h,virtual:v,thumbs:x}=e;let E,f,g,m,w,T,P,I;r.includes("thumbs")&&n.thumbs&&n.thumbs.swiper&&d.thumbs&&!d.thumbs.swiper&&(E=!0),r.includes("controller")&&n.controller&&n.controller.control&&d.controller&&!d.controller.control&&(f=!0),r.includes("pagination")&&n.pagination&&(n.pagination.el||l)&&(d.pagination||d.pagination===!1)&&u&&!u.el&&(g=!0),r.includes("scrollbar")&&n.scrollbar&&(n.scrollbar.el||o)&&(d.scrollbar||d.scrollbar===!1)&&h&&!h.el&&(m=!0),r.includes("navigation")&&n.navigation&&(n.navigation.prevEl||a)&&(n.navigation.nextEl||s)&&(d.navigation||d.navigation===!1)&&p&&!p.prevEl&&!p.nextEl&&(w=!0);const _=b=>{e[b]&&(e[b].destroy(),b==="navigation"?(e.isElement&&(e[b].prevEl.remove(),e[b].nextEl.remove()),d[b].prevEl=void 0,d[b].nextEl=void 0,e[b].prevEl=void 0,e[b].nextEl=void 0):(e.isElement&&e[b].el.remove(),d[b].el=void 0,e[b].el=void 0))};r.includes("loop")&&e.isElement&&(d.loop&&!n.loop?T=!0:!d.loop&&n.loop?P=!0:I=!0),c.forEach(b=>{if(Me(d[b])&&Me(n[b]))Object.assign(d[b],n[b]),(b==="navigation"||b==="pagination"||b==="scrollbar")&&"enabled"in n[b]&&!n[b].enabled&&_(b);else{const y=n[b];(y===!0||y===!1)&&(b==="navigation"||b==="pagination"||b==="scrollbar")?y===!1&&_(b):d[b]=n[b]}}),c.includes("controller")&&!f&&e.controller&&e.controller.control&&d.controller&&d.controller.control&&(e.controller.control=d.controller.control),r.includes("children")&&t&&v&&d.virtual.enabled?(v.slides=t,v.update(!0)):r.includes("virtual")&&v&&d.virtual.enabled&&(t&&(v.slides=t),v.update(!0)),r.includes("children")&&t&&d.loop&&(I=!0),E&&x.init()&&x.update(!0),f&&(e.controller.control=d.controller.control),g&&(e.isElement&&(!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-pagination"),l.part.add("pagination"),e.el.appendChild(l)),l&&(d.pagination.el=l),u.init(),u.render(),u.update()),m&&(e.isElement&&(!o||typeof o=="string")&&(o=document.createElement("div"),o.classList.add("swiper-scrollbar"),o.part.add("scrollbar"),e.el.appendChild(o)),o&&(d.scrollbar.el=o),h.init(),h.updateSize(),h.setTranslate()),w&&(e.isElement&&((!s||typeof s=="string")&&(s=document.createElement("div"),s.classList.add("swiper-button-next"),s.innerHTML=e.hostEl.constructor.nextButtonSvg,s.part.add("button-next"),e.el.appendChild(s)),(!a||typeof a=="string")&&(a=document.createElement("div"),a.classList.add("swiper-button-prev"),a.innerHTML=e.hostEl.constructor.prevButtonSvg,a.part.add("button-prev"),e.el.appendChild(a))),s&&(d.navigation.nextEl=s),a&&(d.navigation.prevEl=a),p.init(),p.update()),r.includes("allowSlideNext")&&(e.allowSlideNext=n.allowSlideNext),r.includes("allowSlidePrev")&&(e.allowSlidePrev=n.allowSlidePrev),r.includes("direction")&&e.changeDirection(n.direction,!1),(T||I)&&e.loopDestroy(),(P||I)&&e.loopCreate(),e.update()}function Ki(i,e){i===void 0&&(i={});const t={on:{}},n={},r={};Be(t,ui),t._emitClasses=!0,t.init=!1;const s={},a=_n.map(l=>l.replace(/_/,"")),o=Object.assign({},i);return Object.keys(o).forEach(l=>{typeof i[l]>"u"||(a.indexOf(l)>=0?Me(i[l])?(t[l]={},r[l]={},Be(t[l],i[l]),Be(r[l],i[l])):(t[l]=i[l],r[l]=i[l]):l.search(/on[A-Z]/)===0&&typeof i[l]=="function"?t.on[`${l[2].toLowerCase()}${l.substr(3)}`]=i[l]:s[l]=i[l])}),["navigation","pagination","scrollbar"].forEach(l=>{t[l]===!0&&(t[l]={}),t[l]===!1&&delete t[l]}),{params:t,passedParams:r,rest:s,events:n}}function yr(i,e){let{el:t,nextEl:n,prevEl:r,paginationEl:s,scrollbarEl:a,swiper:o}=i;Tn(e)&&n&&r&&(o.params.navigation.nextEl=n,o.originalParams.navigation.nextEl=n,o.params.navigation.prevEl=r,o.originalParams.navigation.prevEl=r),En(e)&&s&&(o.params.pagination.el=s,o.originalParams.pagination.el=s),$n(e)&&a&&(o.params.scrollbar.el=a,o.originalParams.scrollbar.el=a),o.init(t)}function br(i,e,t,n,r){const s=[];if(!e)return s;const a=l=>{s.indexOf(l)<0&&s.push(l)};if(t&&n){const l=n.map(r),c=t.map(r);l.join("")!==c.join("")&&a("children"),n.length!==t.length&&a("children")}return _n.filter(l=>l[0]==="_").map(l=>l.replace(/_/,"")).forEach(l=>{if(l in i&&l in e)if(Me(i[l])&&Me(e[l])){const c=Object.keys(i[l]),d=Object.keys(e[l]);c.length!==d.length?a(l):(c.forEach(u=>{i[l][u]!==e[l][u]&&a(l)}),d.forEach(u=>{i[l][u]!==e[l][u]&&a(l)}))}else i[l]!==e[l]&&a(l)}),s}const wr=i=>{!i||i.destroyed||!i.params.virtual||i.params.virtual&&!i.params.virtual.enabled||(i.updateSlides(),i.updateProgress(),i.updateSlidesClasses(),i.parallax&&i.params.parallax&&i.params.parallax.enabled&&i.parallax.setTranslate())};function Jt(i,e,t){i===void 0&&(i={});const n=[],r={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]},s=(a,o)=>{Array.isArray(a)&&a.forEach(l=>{const c=typeof l.type=="symbol";o==="default"&&(o="container-end"),c&&l.children?s(l.children,o):l.type&&(l.type.name==="SwiperSlide"||l.type.name==="AsyncComponentWrapper")||l.componentOptions&&l.componentOptions.tag==="SwiperSlide"?n.push(l):r[o]&&r[o].push(l)})};return Object.keys(i).forEach(a=>{if(typeof i[a]!="function")return;const o=i[a]();s(o,a)}),t.value=e.value,e.value=n,{slides:n,slots:r}}function xr(i,e,t){if(!t)return null;const n=d=>{let u=d;return d<0?u=e.length+d:u>=e.length&&(u=u-e.length),u},r=i.value.isHorizontal()?{[i.value.rtlTranslate?"right":"left"]:`${t.offset}px`}:{top:`${t.offset}px`},{from:s,to:a}=t,o=i.value.params.loop?-e.length:0,l=i.value.params.loop?e.length*2:e.length,c=[];for(let d=o;d<l;d+=1)d>=s&&d<=a&&c.length<e.length&&c.push(e[n(d)]);return c.map(d=>{if(d.props||(d.props={}),d.props.style||(d.props.style={}),d.props.swiperRef=i,d.props.style=r,d.type)return ae(d.type,{...d.props},d.children);if(d.componentOptions)return ae(d.componentOptions.Ctor,{...d.props},d.componentOptions.children)})}const Mn={name:"Swiper",props:{tag:{type:String,default:"div"},wrapperTag:{type:String,default:"div"},modules:{type:Array,default:void 0},init:{type:Boolean,default:void 0},direction:{type:String,default:void 0},oneWayMovement:{type:Boolean,default:void 0},swiperElementNodeName:{type:String,default:"SWIPER-CONTAINER"},touchEventsTarget:{type:String,default:void 0},initialSlide:{type:Number,default:void 0},speed:{type:Number,default:void 0},cssMode:{type:Boolean,default:void 0},updateOnWindowResize:{type:Boolean,default:void 0},resizeObserver:{type:Boolean,default:void 0},nested:{type:Boolean,default:void 0},focusableElements:{type:String,default:void 0},width:{type:Number,default:void 0},height:{type:Number,default:void 0},preventInteractionOnTransition:{type:Boolean,default:void 0},userAgent:{type:String,default:void 0},url:{type:String,default:void 0},edgeSwipeDetection:{type:[Boolean,String],default:void 0},edgeSwipeThreshold:{type:Number,default:void 0},autoHeight:{type:Boolean,default:void 0},setWrapperSize:{type:Boolean,default:void 0},virtualTranslate:{type:Boolean,default:void 0},effect:{type:String,default:void 0},breakpoints:{type:Object,default:void 0},breakpointsBase:{type:String,default:void 0},spaceBetween:{type:[Number,String],default:void 0},slidesPerView:{type:[Number,String],default:void 0},maxBackfaceHiddenSlides:{type:Number,default:void 0},slidesPerGroup:{type:Number,default:void 0},slidesPerGroupSkip:{type:Number,default:void 0},slidesPerGroupAuto:{type:Boolean,default:void 0},centeredSlides:{type:Boolean,default:void 0},centeredSlidesBounds:{type:Boolean,default:void 0},slidesOffsetBefore:{type:Number,default:void 0},slidesOffsetAfter:{type:Number,default:void 0},normalizeSlideIndex:{type:Boolean,default:void 0},centerInsufficientSlides:{type:Boolean,default:void 0},watchOverflow:{type:Boolean,default:void 0},roundLengths:{type:Boolean,default:void 0},touchRatio:{type:Number,default:void 0},touchAngle:{type:Number,default:void 0},simulateTouch:{type:Boolean,default:void 0},shortSwipes:{type:Boolean,default:void 0},longSwipes:{type:Boolean,default:void 0},longSwipesRatio:{type:Number,default:void 0},longSwipesMs:{type:Number,default:void 0},followFinger:{type:Boolean,default:void 0},allowTouchMove:{type:Boolean,default:void 0},threshold:{type:Number,default:void 0},touchMoveStopPropagation:{type:Boolean,default:void 0},touchStartPreventDefault:{type:Boolean,default:void 0},touchStartForcePreventDefault:{type:Boolean,default:void 0},touchReleaseOnEdges:{type:Boolean,default:void 0},uniqueNavElements:{type:Boolean,default:void 0},resistance:{type:Boolean,default:void 0},resistanceRatio:{type:Number,default:void 0},watchSlidesProgress:{type:Boolean,default:void 0},grabCursor:{type:Boolean,default:void 0},preventClicks:{type:Boolean,default:void 0},preventClicksPropagation:{type:Boolean,default:void 0},slideToClickedSlide:{type:Boolean,default:void 0},loop:{type:Boolean,default:void 0},loopedSlides:{type:Number,default:void 0},loopPreventsSliding:{type:Boolean,default:void 0},rewind:{type:Boolean,default:void 0},allowSlidePrev:{type:Boolean,default:void 0},allowSlideNext:{type:Boolean,default:void 0},swipeHandler:{type:Boolean,default:void 0},noSwiping:{type:Boolean,default:void 0},noSwipingClass:{type:String,default:void 0},noSwipingSelector:{type:String,default:void 0},passiveListeners:{type:Boolean,default:void 0},containerModifierClass:{type:String,default:void 0},slideClass:{type:String,default:void 0},slideActiveClass:{type:String,default:void 0},slideVisibleClass:{type:String,default:void 0},slideFullyVisibleClass:{type:String,default:void 0},slideBlankClass:{type:String,default:void 0},slideNextClass:{type:String,default:void 0},slidePrevClass:{type:String,default:void 0},wrapperClass:{type:String,default:void 0},lazyPreloaderClass:{type:String,default:void 0},lazyPreloadPrevNext:{type:Number,default:void 0},runCallbacksOnInit:{type:Boolean,default:void 0},observer:{type:Boolean,default:void 0},observeParents:{type:Boolean,default:void 0},observeSlideChildren:{type:Boolean,default:void 0},a11y:{type:[Boolean,Object],default:void 0},autoplay:{type:[Boolean,Object],default:void 0},controller:{type:Object,default:void 0},coverflowEffect:{type:Object,default:void 0},cubeEffect:{type:Object,default:void 0},fadeEffect:{type:Object,default:void 0},flipEffect:{type:Object,default:void 0},creativeEffect:{type:Object,default:void 0},cardsEffect:{type:Object,default:void 0},hashNavigation:{type:[Boolean,Object],default:void 0},history:{type:[Boolean,Object],default:void 0},keyboard:{type:[Boolean,Object],default:void 0},mousewheel:{type:[Boolean,Object],default:void 0},navigation:{type:[Boolean,Object],default:void 0},pagination:{type:[Boolean,Object],default:void 0},parallax:{type:[Boolean,Object],default:void 0},scrollbar:{type:[Boolean,Object],default:void 0},thumbs:{type:Object,default:void 0},virtual:{type:[Boolean,Object],default:void 0},zoom:{type:[Boolean,Object],default:void 0},grid:{type:[Object],default:void 0},freeMode:{type:[Boolean,Object],default:void 0},enabled:{type:Boolean,default:void 0}},emits:["_beforeBreakpoint","_containerClasses","_slideClass","_slideClasses","_swiper","_freeModeNoMomentumRelease","activeIndexChange","afterInit","autoplay","autoplayStart","autoplayStop","autoplayPause","autoplayResume","autoplayTimeLeft","beforeDestroy","beforeInit","beforeLoopFix","beforeResize","beforeSlideChangeStart","beforeTransitionStart","breakpoint","changeDirection","click","disable","doubleTap","doubleClick","destroy","enable","fromEdge","hashChange","hashSet","init","keyPress","lock","loopFix","momentumBounce","navigationHide","navigationShow","navigationPrev","navigationNext","observerUpdate","orientationchange","paginationHide","paginationRender","paginationShow","paginationUpdate","progress","reachBeginning","reachEnd","realIndexChange","resize","scroll","scrollbarDragEnd","scrollbarDragMove","scrollbarDragStart","setTransition","setTranslate","slidesUpdated","slideChange","slideChangeTransitionEnd","slideChangeTransitionStart","slideNextTransitionEnd","slideNextTransitionStart","slidePrevTransitionEnd","slidePrevTransitionStart","slideResetTransitionStart","slideResetTransitionEnd","sliderMove","sliderFirstMove","slidesLengthChange","slidesGridLengthChange","snapGridLengthChange","snapIndexChange","swiper","tap","toEdge","touchEnd","touchMove","touchMoveOpposite","touchStart","transitionEnd","transitionStart","unlock","update","virtualUpdate","zoomChange"],setup(i,e){let{slots:t,emit:n}=e;const{tag:r,wrapperTag:s}=i,a=G("swiper"),o=G(null),l=G(!1),c=G(!1),d=G(null),u=G(null),p=G(null),h={value:[]},v={value:[]},x=G(null),E=G(null),f=G(null),g=G(null),{params:m,passedParams:w}=Ki(i);Jt(t,h,v),p.value=w,v.value=h.value;const T=()=>{Jt(t,h,v),l.value=!0};m.onAny=function(_){for(var b=arguments.length,y=new Array(b>1?b-1:0),C=1;C<b;C++)y[C-1]=arguments[C];n(_,...y)},Object.assign(m.on,{_beforeBreakpoint:T,_containerClasses(_,b){a.value=b}});const P={...m};if(delete P.wrapperClass,u.value=new Ti(P),u.value.virtual&&u.value.params.virtual.enabled){u.value.virtual.slides=h.value;const _={cache:!1,slides:h.value,renderExternal:b=>{o.value=b},renderExternalUpdate:!1};Be(u.value.params.virtual,_),Be(u.value.originalParams.virtual,_)}fn(()=>{!c.value&&u.value&&(u.value.emitSlidesClasses(),c.value=!0);const{passedParams:_}=Ki(i),b=br(_,p.value,h.value,v.value,y=>y.props&&y.props.key);p.value=_,(b.length||l.value)&&u.value&&!u.value.destroyed&&vr({swiper:u.value,slides:h.value,passedParams:_,changedParams:b,nextEl:x.value,prevEl:E.value,scrollbarEl:g.value,paginationEl:f.value}),l.value=!1}),hn("swiper",u),qn(o,()=>{Kn(()=>{wr(u.value)})}),wi(()=>{d.value&&(yr({el:d.value,nextEl:x.value,prevEl:E.value,paginationEl:f.value,scrollbarEl:g.value,swiper:u.value},m),n("swiper",u.value))}),pn(()=>{u.value&&!u.value.destroyed&&u.value.destroy(!0,!1)});function I(_){return m.virtual?xr(u,_,o.value):(_.forEach((b,y)=>{b.props||(b.props={}),b.props.swiperRef=u,b.props.swiperSlideIndex=y}),_)}return()=>{const{slides:_,slots:b}=Jt(t,h,v);return ae(r,{ref:d,class:Cn(a.value)},[b["container-start"],ae(s,{class:gr(m.wrapperClass)},[b["wrapper-start"],I(_),b["wrapper-end"]]),Tn(i)&&[ae("div",{ref:E,class:"swiper-button-prev"}),ae("div",{ref:x,class:"swiper-button-next"})],$n(i)&&ae("div",{ref:g,class:"swiper-scrollbar"}),En(i)&&ae("div",{ref:f,class:"swiper-pagination"}),b["container-end"]])}}},ke={name:"SwiperSlide",props:{tag:{type:String,default:"div"},swiperRef:{type:Object,required:!1},swiperSlideIndex:{type:Number,default:void 0,required:!1},zoom:{type:Boolean,default:void 0,required:!1},lazy:{type:Boolean,default:!1,required:!1},virtualIndex:{type:[String,Number],default:void 0}},setup(i,e){let{slots:t}=e,n=!1;const{swiperRef:r}=i,s=G(null),a=G("swiper-slide"),o=G(!1);function l(u,p,h){p===s.value&&(a.value=h)}wi(()=>{!r||!r.value||(r.value.on("_slideClass",l),n=!0)}),Yn(()=>{n||!r||!r.value||(r.value.on("_slideClass",l),n=!0)}),fn(()=>{!s.value||!r||!r.value||(typeof i.swiperSlideIndex<"u"&&(s.value.swiperSlideIndex=i.swiperSlideIndex),r.value.destroyed&&a.value!=="swiper-slide"&&(a.value="swiper-slide"))}),pn(()=>{!r||!r.value||r.value.off("_slideClass",l)});const c=Xn(()=>({isActive:a.value.indexOf("swiper-slide-active")>=0,isVisible:a.value.indexOf("swiper-slide-visible")>=0,isPrev:a.value.indexOf("swiper-slide-prev")>=0,isNext:a.value.indexOf("swiper-slide-next")>=0}));hn("swiperSlide",c);const d=()=>{o.value=!0};return()=>ae(i.tag,{class:Cn(`${a.value}`),ref:s,"data-swiper-slide-index":typeof i.virtualIndex>"u"&&r&&r.value&&r.value.params.loop?i.swiperSlideIndex:i.virtualIndex,onLoadCapture:d},i.zoom?ae("div",{class:"swiper-zoom-container","data-swiper-zoom":typeof i.zoom=="number"?i.zoom:void 0},[t.default&&t.default(c.value),i.lazy&&!o.value&&ae("div",{class:"swiper-lazy-preloader"})]):[t.default&&t.default(c.value),i.lazy&&!o.value&&ae("div",{class:"swiper-lazy-preloader"})])}};function Sr(i,e,t,n){return i.params.createElements&&Object.keys(n).forEach(r=>{if(!t[r]&&t.auto===!0){let s=fe(i.el,`.${n[r]}`)[0];s||(s=xt("div",n[r]),s.className=n[r],i.el.append(s)),t[r]=s,e[r]=s}}),t}function Ke(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function _r(i){let{swiper:e,extendParams:t,on:n,emit:r}=i;const s="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:f=>f,formatFractionTotal:f=>f,bulletClass:`${s}-bullet`,bulletActiveClass:`${s}-bullet-active`,modifierClass:`${s}-`,currentClass:`${s}-current`,totalClass:`${s}-total`,hiddenClass:`${s}-hidden`,progressbarFillClass:`${s}-progressbar-fill`,progressbarOppositeClass:`${s}-progressbar-opposite`,clickableClass:`${s}-clickable`,lockClass:`${s}-lock`,horizontalClass:`${s}-horizontal`,verticalClass:`${s}-vertical`,paginationDisabledClass:`${s}-disabled`}}),e.pagination={el:null,bullets:[]};let a,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function c(f,g){const{bulletActiveClass:m}=e.params.pagination;f&&(f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&(f.classList.add(`${m}-${g}`),f=f[`${g==="prev"?"previous":"next"}ElementSibling`],f&&f.classList.add(`${m}-${g}-${g}`)))}function d(f){const g=f.target.closest(Ke(e.params.pagination.bulletClass));if(!g)return;f.preventDefault();const m=St(g)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===m)return;e.slideToLoop(m)}else e.slideTo(m)}function u(){const f=e.rtl,g=e.params.pagination;if(l())return;let m=e.pagination.el;m=pe(m);let w,T;const P=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,I=e.params.loop?Math.ceil(P/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(T=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,T=e.previousSnapIndex):(T=e.previousIndex||0,w=e.activeIndex||0),g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const _=e.pagination.bullets;let b,y,C;if(g.dynamicBullets&&(a=di(_[0],e.isHorizontal()?"width":"height"),m.forEach(M=>{M.style[e.isHorizontal()?"width":"height"]=`${a*(g.dynamicMainBullets+4)}px`}),g.dynamicMainBullets>1&&T!==void 0&&(o+=w-(T||0),o>g.dynamicMainBullets-1?o=g.dynamicMainBullets-1:o<0&&(o=0)),b=Math.max(w-o,0),y=b+(Math.min(_.length,g.dynamicMainBullets)-1),C=(y+b)/2),_.forEach(M=>{const $=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(R=>`${g.bulletActiveClass}${R}`)].map(R=>typeof R=="string"&&R.includes(" ")?R.split(" "):R).flat();M.classList.remove(...$)}),m.length>1)_.forEach(M=>{const $=St(M);$===w?M.classList.add(...g.bulletActiveClass.split(" ")):e.isElement&&M.setAttribute("part","bullet"),g.dynamicBullets&&($>=b&&$<=y&&M.classList.add(...`${g.bulletActiveClass}-main`.split(" ")),$===b&&c(M,"prev"),$===y&&c(M,"next"))});else{const M=_[w];if(M&&M.classList.add(...g.bulletActiveClass.split(" ")),e.isElement&&_.forEach(($,R)=>{$.setAttribute("part",R===w?"bullet-active":"bullet")}),g.dynamicBullets){const $=_[b],R=_[y];for(let B=b;B<=y;B+=1)_[B]&&_[B].classList.add(...`${g.bulletActiveClass}-main`.split(" "));c($,"prev"),c(R,"next")}}if(g.dynamicBullets){const M=Math.min(_.length,g.dynamicMainBullets+4),$=(a*M-a)/2-C*a,R=f?"right":"left";_.forEach(B=>{B.style[e.isHorizontal()?R:"top"]=`${$}px`})}}m.forEach((_,b)=>{if(g.type==="fraction"&&(_.querySelectorAll(Ke(g.currentClass)).forEach(y=>{y.textContent=g.formatFractionCurrent(w+1)}),_.querySelectorAll(Ke(g.totalClass)).forEach(y=>{y.textContent=g.formatFractionTotal(I)})),g.type==="progressbar"){let y;g.progressbarOpposite?y=e.isHorizontal()?"vertical":"horizontal":y=e.isHorizontal()?"horizontal":"vertical";const C=(w+1)/I;let M=1,$=1;y==="horizontal"?M=C:$=C,_.querySelectorAll(Ke(g.progressbarFillClass)).forEach(R=>{R.style.transform=`translate3d(0,0,0) scaleX(${M}) scaleY(${$})`,R.style.transitionDuration=`${e.params.speed}ms`})}g.type==="custom"&&g.renderCustom?(_.innerHTML=g.renderCustom(e,w+1,I),b===0&&r("paginationRender",_)):(b===0&&r("paginationRender",_),r("paginationUpdate",_)),e.params.watchOverflow&&e.enabled&&_.classList[e.isLocked?"add":"remove"](g.lockClass)})}function p(){const f=e.params.pagination;if(l())return;const g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let m=e.pagination.el;m=pe(m);let w="";if(f.type==="bullets"){let T=e.params.loop?Math.ceil(g/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&T>g&&(T=g);for(let P=0;P<T;P+=1)f.renderBullet?w+=f.renderBullet.call(e,P,f.bulletClass):w+=`<${f.bulletElement} ${e.isElement?'part="bullet"':""} class="${f.bulletClass}"></${f.bulletElement}>`}f.type==="fraction"&&(f.renderFraction?w=f.renderFraction.call(e,f.currentClass,f.totalClass):w=`<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`),f.type==="progressbar"&&(f.renderProgressbar?w=f.renderProgressbar.call(e,f.progressbarFillClass):w=`<span class="${f.progressbarFillClass}"></span>`),e.pagination.bullets=[],m.forEach(T=>{f.type!=="custom"&&(T.innerHTML=w||""),f.type==="bullets"&&e.pagination.bullets.push(...T.querySelectorAll(Ke(f.bulletClass)))}),f.type!=="custom"&&r("paginationRender",m[0])}function h(){e.params.pagination=Sr(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const f=e.params.pagination;if(!f.el)return;let g;typeof f.el=="string"&&e.isElement&&(g=e.el.querySelector(f.el)),!g&&typeof f.el=="string"&&(g=[...document.querySelectorAll(f.el)]),g||(g=f.el),!(!g||g.length===0)&&(e.params.uniqueNavElements&&typeof f.el=="string"&&Array.isArray(g)&&g.length>1&&(g=[...e.el.querySelectorAll(f.el)],g.length>1&&(g=g.filter(m=>yn(m,".swiper")[0]===e.el)[0])),Array.isArray(g)&&g.length===1&&(g=g[0]),Object.assign(e.pagination,{el:g}),g=pe(g),g.forEach(m=>{f.type==="bullets"&&f.clickable&&m.classList.add(...(f.clickableClass||"").split(" ")),m.classList.add(f.modifierClass+f.type),m.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.type==="bullets"&&f.dynamicBullets&&(m.classList.add(`${f.modifierClass}${f.type}-dynamic`),o=0,f.dynamicMainBullets<1&&(f.dynamicMainBullets=1)),f.type==="progressbar"&&f.progressbarOpposite&&m.classList.add(f.progressbarOppositeClass),f.clickable&&m.addEventListener("click",d),e.enabled||m.classList.add(f.lockClass)}))}function v(){const f=e.params.pagination;if(l())return;let g=e.pagination.el;g&&(g=pe(g),g.forEach(m=>{m.classList.remove(f.hiddenClass),m.classList.remove(f.modifierClass+f.type),m.classList.remove(e.isHorizontal()?f.horizontalClass:f.verticalClass),f.clickable&&(m.classList.remove(...(f.clickableClass||"").split(" ")),m.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(m=>m.classList.remove(...f.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const f=e.params.pagination;let{el:g}=e.pagination;g=pe(g),g.forEach(m=>{m.classList.remove(f.horizontalClass,f.verticalClass),m.classList.add(e.isHorizontal()?f.horizontalClass:f.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?E():(h(),p(),u())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),n("snapIndexChange",()=>{u()}),n("snapGridLengthChange",()=>{p(),u()}),n("destroy",()=>{v()}),n("enable disable",()=>{let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{u()}),n("click",(f,g)=>{const m=g.target,w=pe(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!m.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&m===e.navigation.nextEl||e.navigation.prevEl&&m===e.navigation.prevEl))return;const T=w[0].classList.contains(e.params.pagination.hiddenClass);r(T===!0?"paginationShow":"paginationHide"),w.forEach(P=>P.classList.toggle(e.params.pagination.hiddenClass))}});const x=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList.remove(e.params.pagination.paginationDisabledClass))),h(),p(),u()},E=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:f}=e.pagination;f&&(f=pe(f),f.forEach(g=>g.classList.add(e.params.pagination.paginationDisabledClass))),v()};Object.assign(e.pagination,{enable:x,disable:E,render:p,update:u,init:h,destroy:v})}function Tr(i){let{swiper:e,extendParams:t,on:n,emit:r,params:s}=i;e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,l=s&&s.autoplay?s.autoplay.delay:3e3,c=s&&s.autoplay?s.autoplay.delay:3e3,d,u=new Date().getTime(),p,h,v,x,E,f,g;function m(A){!e||e.destroyed||!e.wrapperEl||A.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(g||A.detail&&A.detail.bySwiperTouchMove)&&y())}const w=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?p=!0:p&&(c=d,p=!1);const A=e.autoplay.paused?d:u+c-new Date().getTime();e.autoplay.timeLeft=A,r("autoplayTimeLeft",A,A/l),o=requestAnimationFrame(()=>{w()})},T=()=>{let A;return e.virtual&&e.params.virtual.enabled?A=e.slides.filter(Z=>Z.classList.contains("swiper-slide-active"))[0]:A=e.slides[e.activeIndex],A?parseInt(A.getAttribute("data-swiper-autoplay"),10):void 0},P=A=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),w();let re=typeof A>"u"?e.params.autoplay.delay:A;l=e.params.autoplay.delay,c=e.params.autoplay.delay;const Z=T();!Number.isNaN(Z)&&Z>0&&typeof A>"u"&&(re=Z,l=Z,c=Z),d=re;const Te=e.params.speed,mt=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Te,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Te,!0,!0),r("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Te,!0,!0),r("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Te,!0,!0),r("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return re>0?(clearTimeout(a),a=setTimeout(()=>{mt()},re)):requestAnimationFrame(()=>{mt()}),re},I=()=>{u=new Date().getTime(),e.autoplay.running=!0,P(),r("autoplayStart")},_=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r("autoplayStop")},b=(A,re)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),A||(f=!0);const Z=()=>{r("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):y()};if(e.autoplay.paused=!0,re){E&&(d=e.params.autoplay.delay),E=!1,Z();return}d=(d||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&d<0&&!e.params.loop)&&(d<0&&(d=0),Z())},y=()=>{e.isEnd&&d<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),f?(f=!1,P(d)):P(),e.autoplay.paused=!1,r("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const A=ve();A.visibilityState==="hidden"&&(f=!0,b(!0)),A.visibilityState==="visible"&&y()},M=A=>{A.pointerType==="mouse"&&(f=!0,g=!0,!(e.animating||e.autoplay.paused)&&b(!0))},$=A=>{A.pointerType==="mouse"&&(g=!1,e.autoplay.paused&&y())},R=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",M),e.el.addEventListener("pointerleave",$))},B=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",M),e.el.removeEventListener("pointerleave",$))},ue=()=>{ve().addEventListener("visibilitychange",C)},Wt=()=>{ve().removeEventListener("visibilitychange",C)};n("init",()=>{e.params.autoplay.enabled&&(R(),ue(),I())}),n("destroy",()=>{B(),Wt(),e.autoplay.running&&_()}),n("_freeModeStaticRelease",()=>{(v||f)&&y()}),n("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?_():b(!0,!0)}),n("beforeTransitionStart",(A,re,Z)=>{e.destroyed||!e.autoplay.running||(Z||!e.params.autoplay.disableOnInteraction?b(!0,!0):_())}),n("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){_();return}h=!0,v=!1,f=!1,x=setTimeout(()=>{f=!0,v=!0,b(!0)},200)}}),n("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!h)){if(clearTimeout(x),clearTimeout(a),e.params.autoplay.disableOnInteraction){v=!1,h=!1;return}v&&e.params.cssMode&&y(),v=!1,h=!1}}),n("slideChange",()=>{e.destroyed||!e.autoplay.running||(E=!0)}),Object.assign(e.autoplay,{start:I,stop:_,pause:b,resume:y})}function Er(i){let{swiper:e,extendParams:t,emit:n,once:r}=i;t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function s(){if(e.params.cssMode)return;const l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function a(){if(e.params.cssMode)return;const{touchEventsData:l,touches:c}=e;l.velocities.length===0&&l.velocities.push({position:c[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:c[e.isHorizontal()?"currentX":"currentY"],time:Ce()})}function o(l){let{currentPos:c}=l;if(e.params.cssMode)return;const{params:d,wrapperEl:u,rtlTranslate:p,snapGrid:h,touchEventsData:v}=e,E=Ce()-v.touchStartTime;if(c<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(c>-e.maxTranslate()){e.slides.length<h.length?e.slideTo(h.length-1):e.slideTo(e.slides.length-1);return}if(d.freeMode.momentum){if(v.velocities.length>1){const _=v.velocities.pop(),b=v.velocities.pop(),y=_.position-b.position,C=_.time-b.time;e.velocity=y/C,e.velocity/=2,Math.abs(e.velocity)<d.freeMode.minimumVelocity&&(e.velocity=0),(C>150||Ce()-_.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=d.freeMode.momentumVelocityRatio,v.velocities.length=0;let f=1e3*d.freeMode.momentumRatio;const g=e.velocity*f;let m=e.translate+g;p&&(m=-m);let w=!1,T;const P=Math.abs(e.velocity)*20*d.freeMode.momentumBounceRatio;let I;if(m<e.maxTranslate())d.freeMode.momentumBounce?(m+e.maxTranslate()<-P&&(m=e.maxTranslate()-P),T=e.maxTranslate(),w=!0,v.allowMomentumBounce=!0):m=e.maxTranslate(),d.loop&&d.centeredSlides&&(I=!0);else if(m>e.minTranslate())d.freeMode.momentumBounce?(m-e.minTranslate()>P&&(m=e.minTranslate()+P),T=e.minTranslate(),w=!0,v.allowMomentumBounce=!0):m=e.minTranslate(),d.loop&&d.centeredSlides&&(I=!0);else if(d.freeMode.sticky){let _;for(let b=0;b<h.length;b+=1)if(h[b]>-m){_=b;break}Math.abs(h[_]-m)<Math.abs(h[_-1]-m)||e.swipeDirection==="next"?m=h[_]:m=h[_-1],m=-m}if(I&&r("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(p?f=Math.abs((-m-e.translate)/e.velocity):f=Math.abs((m-e.translate)/e.velocity),d.freeMode.sticky){const _=Math.abs((p?-m:m)-e.translate),b=e.slidesSizesGrid[e.activeIndex];_<b?f=d.speed:_<2*b?f=d.speed*1.5:f=d.speed*2.5}}else if(d.freeMode.sticky){e.slideToClosest();return}d.freeMode.momentumBounce&&w?(e.updateProgress(T),e.setTransition(f),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating=!0,Ft(u,()=>{!e||e.destroyed||!v.allowMomentumBounce||(n("momentumBounce"),e.setTransition(d.speed),setTimeout(()=>{e.setTranslate(T),Ft(u,()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(n("_freeModeNoMomentumRelease"),e.updateProgress(m),e.setTransition(f),e.setTranslate(m),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,Ft(u,()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(m),e.updateActiveIndex(),e.updateSlidesClasses()}else if(d.freeMode.sticky){e.slideToClosest();return}else d.freeMode&&n("_freeModeNoMomentumRelease");(!d.freeMode.momentum||E>=d.longSwipesMs)&&(n("_freeModeStaticRelease"),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:s,onTouchMove:a,onTouchEnd:o}})}const $r="/LULU_School/assets/header-03-BQ1mNebj.jpg",Cr="/LULU_School/assets/header-04-BYFFI3n7.jpg",Mr="/LULU_School/assets/header-00-6yh-R8Wt.jpg",Or="/LULU_School/assets/header-02-C3DcTQSL.jpg",Pr="/LULU_School/assets/header-01-Clc-DNG7.jpg",Rr={class:"position-relative",style:{height:"100vh"}},Ar={class:"swiperPosition"},Ir={__name:"SwiperBgModel",setup(i){const e=[Tr,_r];return(t,n)=>(j(),V("section",Rr,[n[0]||(n[0]=At('<section class="ms-4 text-white position-absolute animate__animated animate__bounceInDown" style="top:40%;left:10%;z-index:2;"><p class="h6">Grow up. Turn professional.</p><p class="h2 d-flex"><span style="animation-delay:calc(1s * 0.4);" class="animate__animated animate__rotateInDownLeft">有</span><span style="animation-delay:calc(1s * 0.6);" class="animate__animated animate__rotateInDownLeft">趣</span><span style="animation-delay:calc(1s * 0.8);" class="animate__animated animate__rotateInDownLeft">的</span><span style="animation-delay:calc(1s * 1);" class="animate__animated animate__rotateInDownLeft">物</span><span style="animation-delay:calc(1s * 1.2);" class="animate__animated animate__rotateInDownLeft">理</span><span style="animation-delay:calc(1s * 1.4);" class="animate__animated animate__rotateInDownLeft">，</span></p><p class="h2 d-flex mb-4"><span style="animation-delay:calc(1s * 1.4);" class="animate__animated animate__rotateInDownRight">由</span><span style="animation-delay:calc(1s * 1.2);" class="animate__animated animate__rotateInDownRight">我</span><span style="animation-delay:calc(1s * 1);" class="animate__animated animate__rotateInDownRight">們</span><span style="animation-delay:calc(1s * 0.8);" class="animate__animated animate__rotateInDownRight">展</span><span style="animation-delay:calc(1s * 0.6);" class="animate__animated animate__rotateInDownRight">現</span><span style="animation-delay:calc(1s * 0.4);" class="animate__animated animate__rotateInDownRight">。</span></p><p class="h6"> 教學多年的物理老師-俊民<br>來讓你體驗最有趣的物理學。<br>在這學習不在沒有障礙。<br>讓我們邁向超越自己鎖定的目標！ </p></section>',1)),O("section",Ar,[q(Q(Mn),{spaceBetween:30,centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},modules:e,class:"mySwiper"},{default:me(()=>[q(Q(ke),{class:"bgImg",style:be({backgroundImage:`url(${Q($r)})`})},null,8,["style"]),q(Q(ke),{class:"bgImg",style:be({backgroundImage:`url(${Q(Cr)})`})},null,8,["style"]),q(Q(ke),{class:"bgImg",style:be({backgroundImage:`url(${Q(Mr)})`})},null,8,["style"]),q(Q(ke),{class:"bgImg",style:be({backgroundImage:`url(${Q(Or)})`})},null,8,["style"]),q(Q(ke),{class:"bgImg",style:be({backgroundImage:`url(${Q(Pr)})`})},null,8,["style"])]),_:1})])]))}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=window,Ei=bt.ShadowRoot&&(bt.ShadyCSS===void 0||bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$i=Symbol(),Zi=new WeakMap;let On=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==$i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Ei&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=Zi.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Zi.set(t,e))}return e}toString(){return this.cssText}};const Lr=i=>new On(typeof i=="string"?i:i+"",void 0,$i),k=(i,...e)=>{const t=i.length===1?i[0]:e.reduce((n,r,s)=>n+(a=>{if(a._$cssResult$===!0)return a.cssText;if(typeof a=="number")return a;throw Error("Value passed to 'css' function must be a 'css' function result: "+a+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[s+1],i[0]);return new On(t,i,$i)},kr=(i,e)=>{Ei?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),r=bt.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)})},Qi=Ei?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return Lr(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ei;const _t=window,Ji=_t.trustedTypes,zr=Ji?Ji.emptyScript:"",en=_t.reactiveElementPolyfillSupport,fi={toAttribute(i,e){switch(e){case Boolean:i=i?zr:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Pn=(i,e)=>e!==i&&(e==e||i==i),ti={attribute:!0,type:String,converter:fi,reflect:!1,hasChanged:Pn},pi="finalized";let ze=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const r=this._$Ep(n,t);r!==void 0&&(this._$Ev.set(r,n),e.push(r))}),e}static createProperty(e,t=ti){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(r){const s=this[e];this[t]=r,this.requestUpdate(e,s,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ti}static finalize(){if(this.hasOwnProperty(pi))return!1;this[pi]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const r of n)this.createProperty(r,t[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const r of n)t.unshift(Qi(r))}else e!==void 0&&t.push(Qi(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return kr(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=ti){var r;const s=this.constructor._$Ep(e,n);if(s!==void 0&&n.reflect===!0){const a=(((r=n.converter)===null||r===void 0?void 0:r.toAttribute)!==void 0?n.converter:fi).toAttribute(t,n.type);this._$El=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$El=null}}_$AK(e,t){var n;const r=this.constructor,s=r._$Ev.get(e);if(s!==void 0&&this._$El!==s){const a=r.getPropertyOptions(s),o=typeof a.converter=="function"?{fromAttribute:a.converter}:((n=a.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?a.converter:fi;this._$El=s,this[s]=o.fromAttribute(t,a.type),this._$El=null}}requestUpdate(e,t,n){let r=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||Pn)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):r=!1),!this.isUpdatePending&&r&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((r,s)=>this[s]=r),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(r=>{var s;return(s=r.hostUpdate)===null||s===void 0?void 0:s.call(r)}),this.update(n)):this._$Ek()}catch(r){throw t=!1,this._$Ek(),r}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdated)===null||r===void 0?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ze[pi]=!0,ze.elementProperties=new Map,ze.elementStyles=[],ze.shadowRootOptions={mode:"open"},en==null||en({ReactiveElement:ze}),((ei=_t.reactiveElementVersions)!==null&&ei!==void 0?ei:_t.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ii;const Tt=window,De=Tt.trustedTypes,tn=De?De.createPolicy("lit-html",{createHTML:i=>i}):void 0,hi="$lit$",we=`lit$${(Math.random()+"").slice(9)}$`,Rn="?"+we,Br=`<${Rn}>`,Oe=document,Qe=()=>Oe.createComment(""),Je=i=>i===null||typeof i!="object"&&typeof i!="function",An=Array.isArray,jr=i=>An(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",ni=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nn=/-->/g,sn=/>/g,Ee=RegExp(`>|${ni}(?:([^\\s"'>=/]+)(${ni}*=${ni}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rn=/'/g,an=/"/g,In=/^(?:script|style|textarea|title)$/i,Dr=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),L=Dr(1),Ne=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),on=new WeakMap,$e=Oe.createTreeWalker(Oe,129,null,!1);function Ln(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return tn!==void 0?tn.createHTML(e):e}const Nr=(i,e)=>{const t=i.length-1,n=[];let r,s=e===2?"<svg>":"",a=Ze;for(let o=0;o<t;o++){const l=i[o];let c,d,u=-1,p=0;for(;p<l.length&&(a.lastIndex=p,d=a.exec(l),d!==null);)p=a.lastIndex,a===Ze?d[1]==="!--"?a=nn:d[1]!==void 0?a=sn:d[2]!==void 0?(In.test(d[2])&&(r=RegExp("</"+d[2],"g")),a=Ee):d[3]!==void 0&&(a=Ee):a===Ee?d[0]===">"?(a=r??Ze,u=-1):d[1]===void 0?u=-2:(u=a.lastIndex-d[2].length,c=d[1],a=d[3]===void 0?Ee:d[3]==='"'?an:rn):a===an||a===rn?a=Ee:a===nn||a===sn?a=Ze:(a=Ee,r=void 0);const h=a===Ee&&i[o+1].startsWith("/>")?" ":"";s+=a===Ze?l+Br:u>=0?(n.push(c),l.slice(0,u)+hi+l.slice(u)+we+h):l+we+(u===-2?(n.push(void 0),o):h)}return[Ln(i,s+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class et{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let s=0,a=0;const o=e.length-1,l=this.parts,[c,d]=Nr(e,t);if(this.el=et.createElement(c,n),$e.currentNode=this.el.content,t===2){const u=this.el.content,p=u.firstChild;p.remove(),u.append(...p.childNodes)}for(;(r=$e.nextNode())!==null&&l.length<o;){if(r.nodeType===1){if(r.hasAttributes()){const u=[];for(const p of r.getAttributeNames())if(p.endsWith(hi)||p.startsWith(we)){const h=d[a++];if(u.push(p),h!==void 0){const v=r.getAttribute(h.toLowerCase()+hi).split(we),x=/([.?@])?(.*)/.exec(h);l.push({type:1,index:s,name:x[2],strings:v,ctor:x[1]==="."?Gr:x[1]==="?"?Wr:x[1]==="@"?Fr:It})}else l.push({type:6,index:s})}for(const p of u)r.removeAttribute(p)}if(In.test(r.tagName)){const u=r.textContent.split(we),p=u.length-1;if(p>0){r.textContent=De?De.emptyScript:"";for(let h=0;h<p;h++)r.append(u[h],Qe()),$e.nextNode(),l.push({type:2,index:++s});r.append(u[p],Qe())}}}else if(r.nodeType===8)if(r.data===Rn)l.push({type:2,index:s});else{let u=-1;for(;(u=r.data.indexOf(we,u+1))!==-1;)l.push({type:7,index:s}),u+=we.length-1}s++}}static createElement(e,t){const n=Oe.createElement("template");return n.innerHTML=e,n}}function He(i,e,t=i,n){var r,s,a,o;if(e===Ne)return e;let l=n!==void 0?(r=t._$Co)===null||r===void 0?void 0:r[n]:t._$Cl;const c=Je(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((a=(o=t)._$Co)!==null&&a!==void 0?a:o._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=He(i,l._$AS(i,e.values),l,n)),e}class Hr{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:r}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:Oe).importNode(n,!0);$e.currentNode=s;let a=$e.nextNode(),o=0,l=0,c=r[0];for(;c!==void 0;){if(o===c.index){let d;c.type===2?d=new ot(a,a.nextSibling,this,e):c.type===1?d=new c.ctor(a,c.name,c.strings,this,e):c.type===6&&(d=new Ur(a,this,e)),this._$AV.push(d),c=r[++l]}o!==(c==null?void 0:c.index)&&(a=$e.nextNode(),o++)}return $e.currentNode=Oe,s}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ot{constructor(e,t,n,r){var s;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cp=(s=r==null?void 0:r.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=He(this,e,t),Je(e)?e===Y||e==null||e===""?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==Ne&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):jr(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Y&&Je(this._$AH)?this._$AA.nextSibling.data=e:this.$(Oe.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:r}=e,s=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=et.createElement(Ln(r.h,r.h[0]),this.options)),r);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(n);else{const a=new Hr(s,this),o=a.u(this.options);a.v(n),this.$(o),this._$AH=a}}_$AC(e){let t=on.get(e.strings);return t===void 0&&on.set(e.strings,t=new et(e)),t}T(e){An(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,r=0;for(const s of e)r===t.length?t.push(n=new ot(this.k(Qe()),this.k(Qe()),this,this.options)):n=t[r],n._$AI(s),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class It{constructor(e,t,n,r,s){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,r){const s=this.strings;let a=!1;if(s===void 0)e=He(this,e,t,0),a=!Je(e)||e!==this._$AH&&e!==Ne,a&&(this._$AH=e);else{const o=e;let l,c;for(e=s[0],l=0;l<s.length-1;l++)c=He(this,o[n+l],t,l),c===Ne&&(c=this._$AH[l]),a||(a=!Je(c)||c!==this._$AH[l]),c===Y?e=Y:e!==Y&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}a&&!r&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Gr extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}const Vr=De?De.emptyScript:"";class Wr extends It{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Y?this.element.setAttribute(this.name,Vr):this.element.removeAttribute(this.name)}}class Fr extends It{constructor(e,t,n,r,s){super(e,t,n,r,s),this.type=5}_$AI(e,t=this){var n;if((e=(n=He(this,e,t,0))!==null&&n!==void 0?n:Y)===Ne)return;const r=this._$AH,s=e===Y&&r!==Y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,a=e!==Y&&(r===Y||s);s&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class Ur{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){He(this,e)}}const ln=Tt.litHtmlPolyfillSupport;ln==null||ln(et,ot),((ii=Tt.litHtmlVersions)!==null&&ii!==void 0?ii:Tt.litHtmlVersions=[]).push("2.8.0");const qr=(i,e,t)=>{var n,r;const s=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let a=s._$litPart$;if(a===void 0){const o=(r=t==null?void 0:t.renderBefore)!==null&&r!==void 0?r:null;s._$litPart$=a=new ot(e.insertBefore(Qe(),o),o,void 0,t??{})}return a._$AI(i),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var si,ri;class ye extends ze{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Ne}}ye.finalized=!0,ye._$litElement$=!0,(si=globalThis.litElementHydrateSupport)===null||si===void 0||si.call(globalThis,{LitElement:ye});const dn=globalThis.litElementPolyfillSupport;dn==null||dn({LitElement:ye});((ri=globalThis.litElementVersions)!==null&&ri!==void 0?ri:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=i=>e=>typeof e=="function"?((t,n)=>(customElements.define(t,n),n))(i,e):((t,n)=>{const{kind:r,elements:s}=n;return{kind:r,elements:s,finisher(a){customElements.define(t,a)}}})(i,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yr=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},Xr=(i,e,t)=>{e.constructor.createProperty(t,i)};function S(i){return(e,t)=>t!==void 0?Xr(i,e,t):Yr(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Kr(i){return S({...i,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zr=({finisher:i,descriptor:e})=>(t,n)=>{var r;if(n===void 0){const s=(r=t.originalKey)!==null&&r!==void 0?r:t.key,a=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return i!=null&&(a.finisher=function(o){i(o,s)}),a}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,n,e(n)),i==null||i(s,n)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function U(i,e){return Zr({descriptor:t=>({get(){var r,s;return(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(i))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ai;((ai=window.HTMLSlotElement)===null||ai===void 0?void 0:ai.prototype.assignedElements)!=null;var Qr=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Jr=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const N=k`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class H extends ye{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){const t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){Ci(this,e,t)}}Qr([U("svg"),Jr("design:type",SVGSVGElement)],H.prototype,"svg",void 0);function ea(){return Math.floor(Math.random()*2**31)}function Ci(i,e,t){i.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function mi(i,e,t){if(i&&i.length){const[n,r]=e,s=Math.PI/180*t,a=Math.cos(s),o=Math.sin(s);for(const l of i){const[c,d]=l;l[0]=(c-n)*a-(d-r)*o+n,l[1]=(c-n)*o+(d-r)*a+r}}}function ta(i,e,t){const n=[];i.forEach(r=>n.push(...r)),mi(n,e,t)}function ia(i,e){return i[0]===e[0]&&i[1]===e[1]}function na(i,e,t,n=1){const r=t,s=Math.max(e,.1),a=i[0]&&i[0][0]&&typeof i[0][0]=="number"?[i]:i,o=[0,0];if(r)for(const c of a)mi(c,o,r);const l=sa(a,s,n);if(r){for(const c of a)mi(c,o,-r);ta(l,o,-r)}return l}function sa(i,e,t){const n=[];for(const c of i){const d=[...c];ia(d[0],d[d.length-1])||d.push([d[0][0],d[0][1]]),d.length>2&&n.push(d)}const r=[];e=Math.max(e,.1);const s=[];for(const c of n)for(let d=0;d<c.length-1;d++){const u=c[d],p=c[d+1];if(u[1]!==p[1]){const h=Math.min(u[1],p[1]);s.push({ymin:h,ymax:Math.max(u[1],p[1]),x:h===u[1]?u[0]:p[0],islope:(p[0]-u[0])/(p[1]-u[1])})}}if(s.sort((c,d)=>c.ymin<d.ymin?-1:c.ymin>d.ymin?1:c.x<d.x?-1:c.x>d.x?1:c.ymax===d.ymax?0:(c.ymax-d.ymax)/Math.abs(c.ymax-d.ymax)),!s.length)return r;let a=[],o=s[0].ymin,l=0;for(;a.length||s.length;){if(s.length){let c=-1;for(let u=0;u<s.length&&!(s[u].ymin>o);u++)c=u;s.splice(0,c+1).forEach(u=>{a.push({s:o,edge:u})})}if(a=a.filter(c=>!(c.edge.ymax<=o)),a.sort((c,d)=>c.edge.x===d.edge.x?0:(c.edge.x-d.edge.x)/Math.abs(c.edge.x-d.edge.x)),(t!==1||l%e===0)&&a.length>1)for(let c=0;c<a.length;c=c+2){const d=c+1;if(d>=a.length)break;const u=a[c].edge,p=a[d].edge;r.push([[Math.round(u.x),o],[Math.round(p.x),o]])}o+=t,a.forEach(c=>{c.edge.x=c.edge.x+t*c.edge.islope}),l++}return r}function kn(i,e){var t;const n=e.hachureAngle+90;let r=e.hachureGap;r<0&&(r=e.strokeWidth*4),r=Math.round(Math.max(r,.1));let s=1;return e.roughness>=1&&(((t=e.randomizer)===null||t===void 0?void 0:t.next())||Math.random())>.7&&(s=r),na(i,r,n,s||1)}class ra{constructor(e){this.helper=e}fillPolygons(e,t){return this._fillPolygons(e,t)}_fillPolygons(e,t){const n=kn(e,t);return{type:"fillSketch",ops:this.renderLines(n,t)}}renderLines(e,t){const n=[];for(const r of e)n.push(...this.helper.doubleLineOps(r[0][0],r[0][1],r[1][0],r[1][1],t));return n}}function aa(i){const e=i[0],t=i[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}class oa extends ra{fillPolygons(e,t){let n=t.hachureGap;n<0&&(n=t.strokeWidth*4),n=Math.max(n,.1);const r=Object.assign({},t,{hachureGap:n}),s=kn(e,r),a=Math.PI/180*t.hachureAngle,o=[],l=n*.5*Math.cos(a),c=n*.5*Math.sin(a);for(const[u,p]of s)aa([u,p])&&o.push([[u[0]-l,u[1]+c],[...p]],[[u[0]+l,u[1]-c],[...p]]);return{type:"fillSketch",ops:this.renderLines(o,t)}}}class la{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function zn(i,e,t,n,r){return{type:"path",ops:Et(i,e,t,n,r)}}function da(i,e,t){const n=(i||[]).length;if(n>2){const r=[];for(let s=0;s<n-1;s++)r.push(...Et(i[s][0],i[s][1],i[s+1][0],i[s+1][1],t));return r.push(...Et(i[n-1][0],i[n-1][1],i[0][0],i[0][1],t)),{type:"path",ops:r}}else if(n===2)return zn(i[0][0],i[0][1],i[1][0],i[1][1],t);return{type:"path",ops:[]}}function Bn(i,e){return da(i,!0,e)}function ca(i,e,t,n,r){const s=[[i,e],[i+t,e],[i+t,e+n],[i,e+n]];return Bn(s,r)}function jn(i,e,t,n,r){const s=Dn(t,n,r);return ua(i,e,r,s).opset}function Dn(i,e,t){const n=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(i/2,2)+Math.pow(e/2,2))/2)),r=Math.ceil(Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*n)),s=Math.PI*2/r;let a=Math.abs(i/2),o=Math.abs(e/2);const l=1-t.curveFitting;return a+=W(a*l,t),o+=W(o*l,t),{increment:s,rx:a,ry:o}}function ua(i,e,t,n){const[r,s]=un(n.increment,i,e,n.rx,n.ry,1,n.increment*gi(.1,gi(.4,1,t),t),t);let a=cn(r,null,t);if(!t.disableMultiStroke&&t.roughness!==0){const[o]=un(n.increment,i,e,n.rx,n.ry,1.5,0,t),l=cn(o,null,t);a=a.concat(l)}return{estimatedPoints:s,opset:{type:"path",ops:a}}}function fa(i,e,t,n,r){return Et(i,e,t,n,r,!0)}function Nn(i){return i.randomizer||(i.randomizer=new la(i.seed||0)),i.randomizer.next()}function gi(i,e,t,n=1){return t.roughness*n*(Nn(t)*(e-i)+i)}function W(i,e,t=1){return gi(-i,i,e,t)}function Et(i,e,t,n,r,s=!1){const a=s?r.disableMultiStrokeFill:r.disableMultiStroke,o=vi(i,e,t,n,r,!0,!1);if(a)return o;const l=vi(i,e,t,n,r,!0,!0);return o.concat(l)}function vi(i,e,t,n,r,s,a){const o=Math.pow(i-t,2)+Math.pow(e-n,2),l=Math.sqrt(o);let c=1;l<200?c=1:l>500?c=.4:c=-.0016668*l+1.233334;let d=r.maxRandomnessOffset||0;d*d*100>o&&(d=l/10);const u=d/2,p=.2+Nn(r)*.2;let h=r.bowing*r.maxRandomnessOffset*(n-e)/200,v=r.bowing*r.maxRandomnessOffset*(i-t)/200;h=W(h,r,c),v=W(v,r,c);const x=[],E=()=>W(u,r,c),f=()=>W(d,r,c),g=r.preserveVertices;return a?x.push({op:"move",data:[i+(g?0:E()),e+(g?0:E())]}):x.push({op:"move",data:[i+(g?0:W(d,r,c)),e+(g?0:W(d,r,c))]}),a?x.push({op:"bcurveTo",data:[h+i+(t-i)*p+E(),v+e+(n-e)*p+E(),h+i+2*(t-i)*p+E(),v+e+2*(n-e)*p+E(),t+(g?0:E()),n+(g?0:E())]}):x.push({op:"bcurveTo",data:[h+i+(t-i)*p+f(),v+e+(n-e)*p+f(),h+i+2*(t-i)*p+f(),v+e+2*(n-e)*p+f(),t+(g?0:f()),n+(g?0:f())]}),x}function cn(i,e,t){const n=i.length,r=[];if(n>3){const s=[],a=1-t.curveTightness;r.push({op:"move",data:[i[1][0],i[1][1]]});for(let o=1;o+2<n;o++){const l=i[o];s[0]=[l[0],l[1]],s[1]=[l[0]+(a*i[o+1][0]-a*i[o-1][0])/6,l[1]+(a*i[o+1][1]-a*i[o-1][1])/6],s[2]=[i[o+1][0]+(a*i[o][0]-a*i[o+2][0])/6,i[o+1][1]+(a*i[o][1]-a*i[o+2][1])/6],s[3]=[i[o+1][0],i[o+1][1]],r.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}}else n===3?(r.push({op:"move",data:[i[1][0],i[1][1]]}),r.push({op:"bcurveTo",data:[i[1][0],i[1][1],i[2][0],i[2][1],i[2][0],i[2][1]]})):n===2&&r.push(...vi(i[0][0],i[0][1],i[1][0],i[1][1],t,!0,!0));return r}function un(i,e,t,n,r,s,a,o){const l=o.roughness===0,c=[],d=[];if(l){i=i/4,d.push([e+n*Math.cos(-i),t+r*Math.sin(-i)]);for(let u=0;u<=Math.PI*2;u=u+i){const p=[e+n*Math.cos(u),t+r*Math.sin(u)];c.push(p),d.push(p)}d.push([e+n*Math.cos(0),t+r*Math.sin(0)]),d.push([e+n*Math.cos(i),t+r*Math.sin(i)])}else{const u=W(.5,o)-Math.PI/2;d.push([W(s,o)+e+.9*n*Math.cos(u-i),W(s,o)+t+.9*r*Math.sin(u-i)]);const p=Math.PI*2+u-.01;for(let h=u;h<p;h=h+i){const v=[W(s,o)+e+n*Math.cos(h),W(s,o)+t+r*Math.sin(h)];c.push(v),d.push(v)}d.push([W(s,o)+e+n*Math.cos(u+Math.PI*2+a*.5),W(s,o)+t+r*Math.sin(u+Math.PI*2+a*.5)]),d.push([W(s,o)+e+.98*n*Math.cos(u+a),W(s,o)+t+.98*r*Math.sin(u+a)]),d.push([W(s,o)+e+.9*n*Math.cos(u+a*.5),W(s,o)+t+.9*r*Math.sin(u+a*.5)])}return[d,c]}const pa={randOffset(i,e){return i},randOffsetWithRange(i,e,t){return(i+e)/2},ellipse(i,e,t,n,r){return jn(i,e,t,n,r)},doubleLineOps(i,e,t,n,r){return fa(i,e,t,n,r)}};function Fe(i){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:i}}function ha(i,e){let t="";for(const n of i.ops){const r=n.data;switch(n.op){case"move":if(e&&t)break;t+=`M${r[0]} ${r[1]} `;break;case"bcurveTo":t+=`C${r[0]} ${r[1]}, ${r[2]} ${r[3]}, ${r[4]} ${r[5]} `;break;case"lineTo":t+=`L${r[0]} ${r[1]} `;break}}return t.trim()}function Ge(i,e){const t=document.createElementNS("http://www.w3.org/2000/svg",i);if(e)for(const n in e)t.setAttributeNS(null,n,e[n]);return t}function lt(i,e,t=!1){const n=Ge("path",{d:ha(i,t)});return e&&e.appendChild(n),n}function J(i,e,t,n,r,s){return lt(ca(e+2,t+2,n-4,r-4,Fe(s)),i)}function D(i,e,t,n,r,s){return lt(zn(e,t,n,r,Fe(s)),i)}function ma(i,e,t){return lt(Bn(e,Fe(t)),i,!0)}function Pe(i,e,t,n,r,s){return n=Math.max(n>10?n-4:n-1,1),r=Math.max(r>10?r-4:r-1,1),lt(jn(e,t,n,r,Fe(s)),i)}function Lt(i,e){const n=new oa(pa).fillPolygon(i,Fe(e));return lt(n,null)}function Mi(i,e,t,n,r){const s=Fe(r),a=Dn(t,n,s),o=[];let l=0;for(;l<=Math.PI*2;)o.push([i+a.rx*Math.cos(l),e+a.ry*Math.sin(l)]),l+=a.increment;return Lt(o,r)}var kt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},zt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let tt=class extends H{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[N,k`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return L`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,r=e.height+(t-1)*2;return[n,r]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};J(e,0,0,r.width,r.height,this.seed);for(let s=1;s<n;s++)D(e,s*2,r.height+s*2,r.width+s*2,r.height+s*2,this.seed).style.opacity=`${(75-s*10)/100}`,D(e,r.width+s*2,r.height+s*2,r.width+s*2,s*2,this.seed).style.opacity=`${(75-s*10)/100}`,D(e,s*2,r.height+s*2,r.width+s*2,r.height+s*2,this.seed).style.opacity=`${(75-s*10)/100}`,D(e,r.width+s*2,r.height+s*2,r.width+s*2,s*2,this.seed).style.opacity=`${(75-s*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};kt([S({type:Number}),zt("design:type",Object)],tt.prototype,"elevation",void 0);kt([S({type:Boolean,reflect:!0}),zt("design:type",Object)],tt.prototype,"disabled",void 0);kt([U("button"),zt("design:type",HTMLButtonElement)],tt.prototype,"button",void 0);tt=kt([z("wired-button"),zt("design:paramtypes",[])],tt);var Oi=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Pi=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let it=class extends H{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return L`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){const t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,r=e.height+(t-1)*2;return[n,r]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};if(this.fill&&this.fill.trim()){const s=Lt([[2,2],[r.width-4,2],[r.width-2,r.height-4],[2,r.height-4]],this.seed);s.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(s)}J(e,2,2,r.width-4,r.height-4,this.seed);for(let s=1;s<n;s++)D(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,D(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`,D(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,D(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`}};Oi([S({type:Number}),Pi("design:type",Object)],it.prototype,"elevation",void 0);Oi([S({type:String}),Pi("design:type",String)],it.prototype,"fill",void 0);it=Oi([z("wired-card"),Pi("design:paramtypes",[])],it);var dt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Bt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ve=class extends H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[N,k`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return L`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){J(e,0,0,t[0],t[1],this.seed),this.svgCheck=Ge("g"),e.appendChild(this.svgCheck),D(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),D(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};dt([S({type:Boolean}),Bt("design:type",Object)],Ve.prototype,"checked",void 0);dt([S({type:Boolean,reflect:!0}),Bt("design:type",Object)],Ve.prototype,"disabled",void 0);dt([Kr(),Bt("design:type",Object)],Ve.prototype,"focused",void 0);dt([U("input"),Bt("design:type",HTMLInputElement)],Ve.prototype,"input",void 0);Ve=dt([z("wired-checkbox")],Ve);var jt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Ri=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let nt=class extends H{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[N,k`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return L`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){const n=Lt([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(n)}};jt([S(),Ri("design:type",Object)],nt.prototype,"value",void 0);jt([S(),Ri("design:type",Object)],nt.prototype,"name",void 0);jt([S({type:Boolean}),Ri("design:type",Object)],nt.prototype,"selected",void 0);nt=jt([z("wired-item")],nt);var Ue=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ct=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Re=class extends ye{constructor(){super(...arguments),this.disabled=!1,this.seed=ea(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return k`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return L`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const n=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${n.width}`),t.setAttribute("height",`${n.height}`);const r=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=r.height+"px",J(t,0,0,r.width,r.height,this.seed);const s=r.width-4;J(t,s,0,34,r.height,this.seed);const a=Math.max(0,Math.abs((r.height-24)/2)),o=ma(t,[[s+8,5+a],[s+26,5+a],[s+17,a+Math.min(r.height,18)]],this.seed);if(o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let c=0;c<l.length;c++){const d=l[c];d.tagName==="WIRED-ITEM"&&(d.setAttribute("role","option"),this.itemNodes.push(d))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let r=0;r<t.length;r++){const s=t[r];if(s.tagName==="WIRED-ITEM"){const a=s.value||s.getAttribute("value")||"";if(this.selected&&a===this.selected){n=s;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(n=>n.nodeType===Node.ELEMENT_NODE).forEach(n=>{const r=n;r.requestUpdate&&r.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Ci(this,"selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Ue([S({type:Object}),ct("design:type",Object)],Re.prototype,"value",void 0);Ue([S({type:String,reflect:!0}),ct("design:type",String)],Re.prototype,"selected",void 0);Ue([S({type:Boolean,reflect:!0}),ct("design:type",Object)],Re.prototype,"disabled",void 0);Ue([U("svg"),ct("design:type",SVGSVGElement)],Re.prototype,"svg",void 0);Ue([U("#card"),ct("design:type",HTMLDivElement)],Re.prototype,"card",void 0);Re=Ue([z("wired-combo")],Re);var Dt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Ai=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let st=class extends ye{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return k`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return L`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};Dt([S({type:Number}),Ai("design:type",Object)],st.prototype,"elevation",void 0);Dt([S({type:Boolean,reflect:!0}),Ai("design:type",Object)],st.prototype,"open",void 0);Dt([U("wired-card"),Ai("design:type",it)],st.prototype,"card",void 0);st=Dt([z("wired-dialog")],st);var Hn=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ga=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let yi=class extends H{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[N,k`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return L`<svg></svg>`}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5);for(let r=0;r<n;r++)D(e,0,r*6+3,t[0],r*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};Hn([S({type:Number}),ga("design:type",Object)],yi.prototype,"elevation",void 0);yi=Hn([z("wired-divider")],yi);var Ii=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Gn=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let $t=class extends H{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[N,k`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return L`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]),r=Mi(n/2,n/2,n,n,this.seed);e.appendChild(r)}};Ii([S({type:Boolean,reflect:!0}),Gn("design:type",Object)],$t.prototype,"disabled",void 0);Ii([U("button"),Gn("design:type",HTMLButtonElement)],$t.prototype,"button",void 0);$t=Ii([z("wired-fab")],$t);var Li=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Vn=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ct=class extends H{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[N,k`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return L`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){const n=Math.min(t[0],t[1]);e.setAttribute("width",`${n}`),e.setAttribute("height",`${n}`),Pe(e,n/2,n/2,n,n,this.seed)}};Li([S({type:Boolean,reflect:!0}),Vn("design:type",Object)],Ct.prototype,"disabled",void 0);Li([U("button"),Vn("design:type",HTMLButtonElement)],Ct.prototype,"button",void 0);Ct=Li([z("wired-icon-button")],Ct);var ki=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},zi=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};const va="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Mt=class extends H{constructor(){super(),this.elevation=1,this.src=va,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return L`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width+(t-1)*2,r=e.height+(t-1)*2;return[n,r]}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0]-(n-1)*2,height:t[1]-(n-1)*2};J(e,2,2,r.width-4,r.height-4,this.seed);for(let s=1;s<n;s++)D(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,D(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`,D(e,s*2,r.height-4+s*2,r.width-4+s*2,r.height-4+s*2,this.seed).style.opacity=`${(85-s*10)/100}`,D(e,r.width-4+s*2,r.height-4+s*2,r.width-4+s*2,s*2,this.seed).style.opacity=`${(85-s*10)/100}`}};ki([S({type:Number}),zi("design:type",Object)],Mt.prototype,"elevation",void 0);ki([S({type:String}),zi("design:type",String)],Mt.prototype,"src",void 0);Mt=ki([z("wired-image"),zi("design:paramtypes",[])],Mt);var X=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},K=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let F=class extends H{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return L`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};X([S({type:Boolean,reflect:!0}),K("design:type",Object)],F.prototype,"disabled",void 0);X([S({type:String}),K("design:type",Object)],F.prototype,"placeholder",void 0);X([S({type:String}),K("design:type",String)],F.prototype,"name",void 0);X([S({type:String}),K("design:type",String)],F.prototype,"min",void 0);X([S({type:String}),K("design:type",String)],F.prototype,"max",void 0);X([S({type:String}),K("design:type",String)],F.prototype,"step",void 0);X([S({type:String}),K("design:type",Object)],F.prototype,"type",void 0);X([S({type:String}),K("design:type",Object)],F.prototype,"autocomplete",void 0);X([S({type:String}),K("design:type",Object)],F.prototype,"autocapitalize",void 0);X([S({type:String}),K("design:type",Object)],F.prototype,"autocorrect",void 0);X([S({type:Boolean}),K("design:type",Object)],F.prototype,"required",void 0);X([S({type:Boolean}),K("design:type",Object)],F.prototype,"autofocus",void 0);X([S({type:Boolean}),K("design:type",Object)],F.prototype,"readonly",void 0);X([S({type:Number}),K("design:type",Number)],F.prototype,"minlength",void 0);X([S({type:Number}),K("design:type",Number)],F.prototype,"maxlength",void 0);X([S({type:Number}),K("design:type",Number)],F.prototype,"size",void 0);X([U("input"),K("design:type",HTMLInputElement)],F.prototype,"textInput",void 0);F=X([z("wired-input"),K("design:paramtypes",[])],F);var ut=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Nt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let We=class extends H{constructor(){super(...arguments),this.elevation=1}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return L`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),n=e.width,r=e.height+(t-1)*2;return[n,r]}return this.lastSize}draw(e,t){const n=Math.min(Math.max(1,this.elevation),5),r={width:t[0],height:t[1]-(n-1)*2};for(let s=0;s<n;s++)D(e,0,r.height+s*2-2,r.width,r.height+s*2-2,this.seed),D(e,0,r.height+s*2-2,r.width,r.height+s*2-2,this.seed)}};ut([S({type:Number}),Nt("design:type",Object)],We.prototype,"elevation",void 0);ut([S({type:String}),Nt("design:type",String)],We.prototype,"href",void 0);ut([S({type:String}),Nt("design:type",String)],We.prototype,"target",void 0);ut([U("a"),Nt("design:type",HTMLAnchorElement)],We.prototype,"anchor",void 0);We=ut([z("wired-link")],We);var Ht=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Bi=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let rt=class extends H{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[N,k`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return L`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){const n=e[t];n.tagName==="WIRED-ITEM"&&(n.setAttribute("role","option"),this.itemNodes.push(n))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let n=null;for(let r=0;r<t.length;r++){const s=t[r];if(s.tagName==="WIRED-ITEM"){const a=s.value||"";if(this.selected&&a===this.selected){n=s;break}}}this.lastSelectedItem=n||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),n?this.value={value:n.value||"",text:n.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const e=this.itemNodes;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.lastSelectedItem){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,0,0,t[0],t[1],this.seed)}};Ht([S({type:Object}),Bi("design:type",Object)],rt.prototype,"value",void 0);Ht([S({type:String}),Bi("design:type",String)],rt.prototype,"selected",void 0);Ht([S({type:Boolean}),Bi("design:type",Object)],rt.prototype,"horizontal",void 0);rt=Ht([z("wired-listbox")],rt);var ft=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Gt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ae=class extends H{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[N,k`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return L`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0;const t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);const n=t.width*Math.max(0,Math.min(e,100));this.progBox=Lt([[0,0],[n,0],[n,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};ft([S({type:Number}),Gt("design:type",Object)],Ae.prototype,"value",void 0);ft([S({type:Number}),Gt("design:type",Object)],Ae.prototype,"min",void 0);ft([S({type:Number}),Gt("design:type",Object)],Ae.prototype,"max",void 0);ft([S({type:Boolean}),Gt("design:type",Object)],Ae.prototype,"percentage",void 0);Ae=ft([z("wired-progress")],Ae);var qe=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},pt=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ie=class extends H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[N,k`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return L`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){Pe(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=Ge("g"),e.appendChild(this.svgCheck);const n=Math.max(t[0]*.6,5),r=Math.max(t[1]*.6,5);Pe(this.svgCheck,t[0]/2,t[1]/2,n,r,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};qe([S({type:Boolean}),pt("design:type",Object)],Ie.prototype,"checked",void 0);qe([S({type:Boolean,reflect:!0}),pt("design:type",Object)],Ie.prototype,"disabled",void 0);qe([S({type:String}),pt("design:type",String)],Ie.prototype,"name",void 0);qe([S(),pt("design:type",Object)],Ie.prototype,"focused",void 0);qe([U("input"),pt("design:type",HTMLInputElement)],Ie.prototype,"input",void 0);Ie=qe([z("wired-radio")],Ie);var Wn=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ya=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let bi=class extends ye{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return k`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return L`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){const t=e.detail.checked,n=e.target,r=n.name||"";t?(this.selected=t&&r||"",this.fireSelected()):n.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let n=0;n<t.length;n++){const r=t[n];if(r.tagName==="WIRED-RADIO"){this.radioNodes.push(r);const s=r.name||"";this.selected&&s===this.selected?r.checked=!0:r.checked=!1}}}selectPrevious(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let r=0;r<e.length;r++)if(e[r].name===this.selected){n=r;break}n<0?t=e[0]:(n--,n<0&&(n=e.length-1),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const e=this.radioNodes;if(e.length){let t=null,n=-1;if(this.selected){for(let r=0;r<e.length;r++)if(e[r].name===this.selected){n=r;break}n<0?t=e[0]:(n++,n>=e.length&&(n=0),t=e[n])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Ci(this,"selected",{selected:this.selected})}};Wn([S({type:String}),ya("design:type",String)],bi.prototype,"selected",void 0);bi=Wn([z("wired-radio-group")],bi);var Le=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Ye=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Se=class extends H{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return L`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=Ge("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),Pe(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),D(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=Ge("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),D(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),D(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};Le([S({type:Boolean,reflect:!0}),Ye("design:type",Object)],Se.prototype,"disabled",void 0);Le([S({type:String}),Ye("design:type",Object)],Se.prototype,"placeholder",void 0);Le([S({type:String}),Ye("design:type",Object)],Se.prototype,"autocomplete",void 0);Le([S({type:String}),Ye("design:type",Object)],Se.prototype,"autocorrect",void 0);Le([S({type:Boolean}),Ye("design:type",Object)],Se.prototype,"autofocus",void 0);Le([U("input"),Ye("design:type",HTMLInputElement)],Se.prototype,"textInput",void 0);Se=Le([z("wired-search-input")],Se);var Xe=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ht=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let _e=class extends H{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[N,k`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return L`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];const n=Math.round(t[1]/2);D(e,0,n,t[0],n,this.seed).classList.add("bar"),this.knob=Pe(e,10,n,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const e=+this.input.value,t=Math.max(this.step,this.max-this.min),n=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${n*(this.canvasWidth-20)}px)`)}}};Xe([S({type:Number}),ht("design:type",Object)],_e.prototype,"min",void 0);Xe([S({type:Number}),ht("design:type",Object)],_e.prototype,"max",void 0);Xe([S({type:Number}),ht("design:type",Object)],_e.prototype,"step",void 0);Xe([S({type:Boolean,reflect:!0}),ht("design:type",Object)],_e.prototype,"disabled",void 0);Xe([U("input"),ht("design:type",HTMLInputElement)],_e.prototype,"input",void 0);_e=Xe([z("wired-slider")],_e);var ji=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Fn=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Ot=class extends H{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return L`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){Pe(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=Mi(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};ji([S({type:Boolean}),Fn("design:type",Object)],Ot.prototype,"spinning",void 0);ji([S({type:Number}),Fn("design:type",Object)],Ot.prototype,"duration",void 0);Ot=ji([z("wired-spinner")],Ot);var Di=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Ni=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Pt=class extends H{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return L`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,2,2,t[0]-4,t[1]-4,this.seed)}};Di([S({type:String}),Ni("design:type",Object)],Pt.prototype,"name",void 0);Di([S({type:String}),Ni("design:type",Object)],Pt.prototype,"label",void 0);Pt=Di([z("wired-tab"),Ni("design:paramtypes",[])],Pt);var Hi=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Un=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let Rt=class extends ye{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[N,k`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return L`
    <div id="bar">
      ${this.pages.map(e=>L`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){const n=e[t];if(n.nodeType===Node.ELEMENT_NODE&&n.tagName.toLowerCase()==="wired-tab"){const r=n;this.pages.push(r);const s=r.getAttribute("name")||"";s&&s.trim().split(" ").forEach(a=>{a&&this.pageMap.set(a,r)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){const e=this.getElement();for(let t=0;t<this.pages.length;t++){const n=this.pages[t];n===e?n.classList.remove("hidden"):n.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){const e=this.pages;if(e.length){let t=-1;for(let n=0;n<e.length;n++)if(e[n]===this.current){t=n;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};Hi([S({type:String}),Un("design:type",String)],Rt.prototype,"selected",void 0);Hi([U("slot"),Un("design:type",HTMLSlotElement)],Rt.prototype,"slotElement",void 0);Rt=Hi([z("wired-tabs")],Rt);var se=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},le=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let ee=class extends H{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return L`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){const t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};se([S({type:Boolean,reflect:!0}),le("design:type",Object)],ee.prototype,"disabled",void 0);se([S({type:Number}),le("design:type",Object)],ee.prototype,"rows",void 0);se([S({type:Number}),le("design:type",Object)],ee.prototype,"maxrows",void 0);se([S({type:String}),le("design:type",Object)],ee.prototype,"autocomplete",void 0);se([S({type:Boolean}),le("design:type",Object)],ee.prototype,"autofocus",void 0);se([S({type:String}),le("design:type",Object)],ee.prototype,"inputmode",void 0);se([S({type:String}),le("design:type",Object)],ee.prototype,"placeholder",void 0);se([S({type:Boolean}),le("design:type",Object)],ee.prototype,"required",void 0);se([S({type:Boolean}),le("design:type",Object)],ee.prototype,"readonly",void 0);se([S({type:Number}),le("design:type",Number)],ee.prototype,"minlength",void 0);se([S({type:Number}),le("design:type",Number)],ee.prototype,"maxlength",void 0);se([U("textarea"),le("design:type",HTMLTextAreaElement)],ee.prototype,"textareaInput",void 0);ee=se([z("wired-textarea")],ee);var Vt=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},Gi=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let at=class extends H{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[N,k`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return L`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){J(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=Ge("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);const r=Mi(16,16,32,32,this.seed);r.classList.add("knobfill"),this.knob.appendChild(r),Pe(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Vt([S({type:Boolean}),Gi("design:type",Object)],at.prototype,"checked",void 0);Vt([S({type:Boolean,reflect:!0}),Gi("design:type",Object)],at.prototype,"disabled",void 0);Vt([U("input"),Gi("design:type",HTMLInputElement)],at.prototype,"input",void 0);at=Vt([z("wired-toggle")],at);var de=function(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s},ce=function(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)};let oe=class extends H{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[N,k`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return L`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"▶"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){J(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){const t=Math.floor(e/60),n=Math.round(e-t*60);return`${t}:${n}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};de([S({type:String}),ce("design:type",Object)],oe.prototype,"src",void 0);de([S({type:Boolean}),ce("design:type",Object)],oe.prototype,"autoplay",void 0);de([S({type:Boolean}),ce("design:type",Object)],oe.prototype,"loop",void 0);de([S({type:Boolean}),ce("design:type",Object)],oe.prototype,"muted",void 0);de([S({type:Boolean}),ce("design:type",Object)],oe.prototype,"playsinline",void 0);de([S(),ce("design:type",Object)],oe.prototype,"playing",void 0);de([S(),ce("design:type",Object)],oe.prototype,"timeDisplay",void 0);de([U("wired-progress"),ce("design:type",Ae)],oe.prototype,"progressBar",void 0);de([U("wired-slider"),ce("design:type",_e)],oe.prototype,"slider",void 0);de([U("video"),ce("design:type",HTMLVideoElement)],oe.prototype,"video",void 0);oe=de([z("wired-video"),ce("design:paramtypes",[])],oe);const ba={class:"card bg-white border-0 ps-sm-4 py-2 adSet"},wa={class:"card border-0"},xa={class:"card-body"},Sa=["src"],_a={class:"d-flex justify-content-between align-items-center pt-2"},Ta={class:"card-title text-start border-bottom w-100 pb-2 mb-0"},Ea={__name:"SwiperAdModel",setup(i){const e=G({breakpoints:{767:{slidesPerView:3.2,spaceBetween:0},1024:{slidesPerView:4.1,spaceBetween:0}}}),t=G([{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2017/07/unchiku_01.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2018/06/magazine_thum11-1.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2020/02/magazine_thum.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2020/06/magazine_thum_covid-1.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2020/01/magazine_thum_shiten01.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2020/04/magazine_thum_mokei.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2018/06/magazine_thum11-1.jpg"},{title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！",img:"https://beyondarchitecture.jp/wp/wp-content/uploads/2019/08/magazine_thum_sento.jpg"}]),n=[Er];return(r,s)=>{const a=mn("router-link");return j(),V("section",ba,[s[1]||(s[1]=O("div",{class:"card border border-0"},[O("div",{class:"card-body pb-0"},[O("h6",{class:"text-black-50"},"- pick up")])],-1)),q(Q(Mn),{slidesPerView:1.3,spaceBetween:0,freeMode:!0,modules:n,breakpoints:e.value.breakpoints,class:"mySwiper px-2 px-sm-5 ps-sm-0"},{default:me(()=>[(j(!0),V(ge,null,je(t.value,(o,l)=>(j(),Vi(Q(ke),{key:l},{default:me(()=>[O("div",wa,[O("div",xa,[q(a,{to:"#",class:"mouseOver text-decoration-none"},{default:me(()=>[(j(),Vi(Zn("wired-card"),{elevation:"3"},{default:me(()=>[O("img",{src:o.img,class:"card-img-top rounded",alt:"..."},null,8,Sa)]),_:2},1024)),O("div",_a,[O("h6",Ta,ie(o.title),1),s[0]||(s[0]=O("i",{class:"bi bi-arrow-right-short h4"},null,-1))])]),_:2},1024)])])]),_:2},1024))),128))]),_:1},8,["breakpoints"])])}}},$a=xi(Ea,[["__scopeId","data-v-7db83220"]]),Ca={class:"card rounded-0 py-5 bg-white border-0"},Ma={class:"container"},Oa={class:"row row-cols-1 row-cols-lg-2 g-sm-4"},Pa={class:"col"},Ra={class:"card border-0"},Aa={class:"card-body"},Ia={class:"list-unstyled","data-visible":"all"},La={key:0,class:"border-bottom"},ka={class:"text-nowrap mb-1"},za={datetime:"2024-07-18"},Ba={class:"mx-3 text-nowrap mb-1"},ja={class:""},Da={class:"card-footer bg-body border-0 text-end"},Na={class:"col"},Ha={class:"card border-0"},Ga={class:"card-body"},Va={class:"list-unstyled","data-visible":"all"},Wa={key:0,class:"border-bottom"},Fa={class:"text-nowrap mb-1"},Ua={datetime:"2024-07-18"},qa={class:"mx-3 text-nowrap mb-1"},Ya={class:""},Xa={class:"card-footer bg-body border-0 text-end"},Ka={__name:"MenuModel",setup(i){const e=G([{date:"2024.07.18",category:"news",title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！"},{date:"2024.07.17",category:"news",title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！"},{date:"2024.07.17",category:"news",title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！"},{date:"2024.07.17",category:"news",title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！"},{date:"2024.07.17",category:"news",title:"卷民暑期體驗！！「 夏日體驗班」７月２８日（日）開招！"},{date:"2024.07.17",category:"note",title:"筆記筆記好多筆記通通免費！！！"},{date:"2024.07.17",category:"note",title:"筆記筆記好多筆記通通免費～～歐拉歐拉"},{date:"2024.07.17",category:"note",title:"筆記筆記好多筆記通通免費～～木大木大"},{date:"2024.07.17",category:"note",title:"講義講義新講義來下載"},{date:"2024.07.17",category:"note",title:"講義講義新講義來下載！！！！！"}]);return(t,n)=>{const r=mn("router-link");return j(),V("section",Ca,[O("div",Ma,[O("div",Oa,[O("div",Pa,[O("div",Ra,[O("div",Aa,[n[1]||(n[1]=O("div",{class:"card-title h3 border-bottom mb-0 pb-3 fw-bold"},"News",-1)),O("ul",Ia,[(j(!0),V(ge,null,je(e.value,(s,a)=>(j(),V(ge,{key:a},[s.category==="news"?(j(),V("li",La,[q(r,{to:"#",class:"d-flex align-items-center pt-3 flex-wrap flex-lg-nowrap text-decoration-none mouseOver"},{default:me(()=>[O("p",ka,[O("time",za,ie(s.date),1)]),O("p",Ba,ie(s.category),1),O("h5",ja,ie(s.title),1)]),_:2},1024)])):Wi("",!0)],64))),128))]),O("div",Da,[q(r,{to:"#",class:"text-dark"},{default:me(()=>n[0]||(n[0]=[oi("查看更多"),O("i",{class:"bi bi-arrow-right-circle ms-1"},null,-1)])),_:1})])])])]),O("div",Na,[O("div",Ha,[O("div",Ga,[n[3]||(n[3]=O("div",{class:"card-title h3 border-bottom mb-0 pb-3 fw-bold"},"Note",-1)),O("ul",Va,[(j(!0),V(ge,null,je(e.value,(s,a)=>(j(),V(ge,{key:a},[s.category==="note"?(j(),V("li",Wa,[q(r,{to:"#",class:"d-flex align-items-center pt-3 flex-wrap flex-lg-nowrap text-decoration-none mouseOver"},{default:me(()=>[O("p",Fa,[O("time",Ua,ie(s.date),1)]),O("p",qa,ie(s.category),1),O("h5",Ya,ie(s.title),1)]),_:2},1024)])):Wi("",!0)],64))),128))]),O("div",Xa,[q(r,{to:"#",class:"text-dark"},{default:me(()=>n[2]||(n[2]=[oi("查看更多"),O("i",{class:"bi bi-arrow-right-circle ms-1"},null,-1)])),_:1})])])])])])])])}}},Za=xi(Ka,[["__scopeId","data-v-cae4f540"]]),Qa="/LULU_School/assets/advantageBg-LFmfSeQZ.jpg",Ja={class:"card border-0 rounded-0 bg-white overflow-hidden pe-sm-5"},eo={class:"mb-2"},to={class:"fs-1"},io={class:"mb-0 text-black-50"},no={__name:"AdvantageModel",setup(i){const e=G([{title:"自由排課",commit:"彈性安排與教師的上課時間"},{title:"專屬課程",commit:"依照你的能力、需求進行備課"},{title:"免費試聽",commit:"獨家視聽，滿意再購買"},{title:"頂尖教師",commit:"世界各地頂尖教師任你選擇"}]);return(t,n)=>(j(),V("section",Ja,[O("div",{class:"text-white pt-5 ps-sm-5 advantageSit",style:be([{"'border-radius'":"'0 24px 0 0'"},{backgroundImage:`url(${Q(Qa)})`}])},[n[0]||(n[0]=At('<h4 class="mb-2" data-v-a10336c2>卷民wrrrry的四大優勢</h4><h2 class="mb-5 d-flex" data-v-a10336c2><i class="fas fa-exclamation me-3" style="animation-delay:calc(1s * 0.1);" data-aos="animate__rotateInDownLeft" data-v-a10336c2></i><span style="animation-delay:calc(1s * 0.2);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>爲</span><span style="animation-delay:calc(1s * 0.3);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>何</span><span style="animation-delay:calc(1s * 0.4);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>選</span><span style="animation-delay:calc(1s * 0.5);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>擇</span><span style="animation-delay:calc(1s * 0.6);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>捲</span><span style="animation-delay:calc(1s * 0.7);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>民</span><span style="animation-delay:calc(1s * 0.8);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>W</span><span style="animation-delay:calc(1s * 0.9);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>r</span><span style="animation-delay:calc(1s * 1);" class="animate__animated animate__rotateInDownLeft" data-v-a10336c2>rrrry</span></h2>',2)),O("div",null,[(j(!0),V(ge,null,je(e.value,(r,s)=>(j(),V("div",{key:s,class:"py-8 d-block text-dark text-decoration-none advantageBox"},[O("div",{class:Si(["px-5 py-4 shadow-lg col-12 col-sm-5 animate__animated animate__fadeInDown",`marginLeft-${s}`])},[O("h2",eo,[oi(" #"+ie(s+1)+" ",1),O("span",to,ie(r.title),1)]),O("h3",io,ie(r.commit),1)],2)]))),128))])],4)]))}},so=xi(no,[["__scopeId","data-v-a10336c2"]]),ro={class:"card bg-white border-0 rounded-0 p-5"},ao={class:""},oo={class:"row row-cols-1 row-cols-md-3 g-4"},lo={class:"animate__animated animate__fadeInDown"},co={class:"card border-0 shadow"},uo=["src"],fo={class:"card-body"},po={class:"card-title fs-3"},ho={class:"card-text"},mo={__name:"SubjectModal",setup(i){const e=G([{title:"國中物理/理化",commit:"結合生活情境的趣味教學、詳細的概念解說、課後觀念確認，讓你用均一自學理化變得好簡單！",img:"https://images.unsplash.com/photo-1607988795691-3d0147b43231?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"linear-gradient(90deg, #ed3131, #ff744f)"},{title:"高中物理/理化",img:"https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",commit:"物體的運動. 牛頓三大運動定律. 生活中常見的力. 查看課程內容. 物質的組成與交互作用. 物質的組成. 原子的結構. 基本交互作用",color:"linear-gradient(90deg, #fc841a, #fab82a)",ptSet:"pt-lg-4"},{title:"GRE 物理/理化",commit:"GRE物理測試（GRE Physics Test）是由美國教育測驗服務社（ETS）主辦的標準化考試。這項考試的範圍主要是美國大學物理學系本科前三年的課程內容。",img:"https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"linear-gradient(90deg, #4ccb43, #9fd628)",ptSet:"pt-lg-5"},{title:"DSE 物理/理化",commit:"DSE）物理科是一門結合理論與實踐的科目，涵蓋廣泛的知識範疇，並要求學生具備良好的理解力和應用能力。",img:"https://plus.unsplash.com/premium_photo-1667119473280-23ed9fb45573?q=80&w=2900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"linear-gradient(90deg, #59c6c0, #88ddf5)"},{title:"IB 物理/理化",commit:"IB物理並不是一堂容易的課程，但假如學生對這門課有興趣，甚至大學想讀領域相關的主修，那你就應該要知道IB Physics SL和HL有什麼差別，以及應該如何選擇 ...",img:"https://images.unsplash.com/photo-1675458134252-1968ac5ef177?q=80&w=2808&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"linear-gradient(90deg, #7749a7, #b48ad4)",ptSet:"pt-lg-4"},{title:"GCSE 物理/理化",commit:"GCSE 物理（General Certificate of Secondary Education - Physics）是英國中學教育體系中的一門核心科目，適用於 14 至 16 歲的學生。此課程涵蓋物理學的基本概念，並培養學生的科學思維、實驗技能和問題解決能力。",img:"https://images.unsplash.com/photo-1632571401005-458e9d244591?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",color:"linear-gradient(90deg, #7747, #333)",ptSet:"pt-lg-5"}]);return(t,n)=>(j(),V("section",ro,[n[0]||(n[0]=At('<h2 class="mb-sm-5 mb-3 d-flex text-dark"><span style="animation-delay:calc(1s * 0.1);" class="animate__animated animate__rotateInDownLeft"><i class="fas fa-exclamation me-3"></i></span><span style="animation-delay:calc(1s * 0.2);" class="animate__animated animate__rotateInDownLeft">6</span><span style="animation-delay:calc(1s * 0.3);" class="animate__animated animate__rotateInDownLeft">大</span><span style="animation-delay:calc(1s * 0.4);" class="animate__animated animate__rotateInDownLeft">課</span><span style="animation-delay:calc(1s * 0.5);" class="animate__animated animate__rotateInDownLeft">程</span><span style="animation-delay:calc(1s * 0.6);" class="animate__animated animate__rotateInDownLeft">介</span><span style="animation-delay:calc(1s * 0.7);" class="animate__animated animate__rotateInDownLeft">紹</span></h2>',1)),O("div",ao,[O("div",oo,[(j(!0),V(ge,null,je(e.value,(r,s)=>(j(),V("div",{key:s,class:Si(["",r.ptSet])},[O("div",lo,[O("div",co,[O("div",{style:be([{height:"4px"},{background:r.color}])},null,4),O("img",{src:r.img,class:"card-img-top rounded-0",alt:"..."},null,8,uo),O("div",fo,[O("div",po,ie(r.title),1),O("p",ho,ie(r.commit),1)])])])],2))),128))])])]))}},go={class:"card bg-white p-5 border-0 rounded-0 grid_line"},vo={class:"container py-5"},yo={class:"message-board"},bo={__name:"FeedbackModel",setup(i){const e=G([{id:1,text:"LULU:老師講的比課本還生動，感覺像在聽故事一樣！",x:0,y:0,color:"bg-primary"},{id:2,text:"老師，這堂課的知識量超標了，我的腦袋快要升級了！",x:0,y:0,color:"bg-success"},{id:3,text:"這個留言板有點亂 XD",x:0,y:0,color:"bg-warning"},{id:4,text:"這堂課讓我腦袋開竅了！感覺像打開了新世界的大門！",x:0,y:0,color:"bg-info"},{id:5,text:"教室的貓助教會盯人上課 ：）",x:0,y:0,color:"bg-dark"},{id:6,text:"今天的課程就像一場精彩的電影，高潮迭起、知識點滿滿！",x:0,y:0,color:"bg-secondary"},{id:7,text:"我考上第一志願拉～～～",x:0,y:0,color:"bg-primary"},{id:8,text:"教室有滿滿的點心吃到飽～",x:0,y:0,color:"bg-success"},{id:9,text:"我發現這個概念超有趣，沒想到還能這樣應用！",x:0,y:0,color:"bg-warning"},{id:4,text:"很喜歡補習班的學習環境，大家一起衝刺！",x:0,y:0,color:"bg-info"},{id:5,text:"以前覺得這些知識很枯燥，但老師的講解讓我產生了興趣！",x:0,y:0,color:"bg-dark"},{id:10,text:"這堂課讓我對這個主題更有信心了！以前覺得難，現在覺得可以挑戰！",x:0,y:0,color:"bg-danger"}]),t=()=>({x:Math.random()*window.innerWidth*.5,y:Math.random()*window.innerHeight*.5});return wi(()=>{e.value.forEach(n=>{const r=t();n.x=r.x,n.y=r.y})}),(n,r)=>(j(),V("section",go,[r[0]||(r[0]=At('<h2 class="d-flex text-dark"><span style="animation-delay:calc(1s * 0.1);" class="animate__animated animate__rotateInDownLeft"><i class="fas fa-exclamation me-3"></i></span><span style="animation-delay:calc(1s * 0.2);" class="animate__animated animate__rotateInDownLeft">學</span><span style="animation-delay:calc(1s * 0.3);" class="animate__animated animate__rotateInDownLeft">生</span><span style="animation-delay:calc(1s * 0.4);" class="animate__animated animate__rotateInDownLeft">回</span><span style="animation-delay:calc(1s * 0.5);" class="animate__animated animate__rotateInDownLeft">饋</span></h2>',1)),O("div",vo,[O("div",yo,[(j(!0),V(ge,null,je(e.value,s=>(j(),V("div",{key:s.id,class:Si(["message text-white p-3 rounded shadow",s.color]),style:be({top:s.y+"px",left:s.x+"px"})},ie(s.text),7))),128))])])]))}},qo={__name:"IndexView",setup(i){return(e,t)=>(j(),V(ge,null,[q(Ir),q($a,{class:"ms-sm-5",id:"breakpoint"}),q(Za),q(so),q(mo),q(bo)],64))}};export{qo as default};
