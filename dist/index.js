var K=Object.defineProperty;var R=(e,t)=>{for(var n in t)K(e,n,{get:t[n],enumerable:!0})};var b={};R(b,{MODE:()=>W,NODE_ENV:()=>F,SSR:()=>G});var W="production",F="production",G=!1;function p(){}function T(e){return e()}function M(){return Object.create(null)}function h(e){e.forEach(T)}function I(e){return typeof e=="function"}function v(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function J(e){return Object.keys(e).length===0}function u(e,t){e.appendChild(t)}function q(e,t,n){e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function Q(e){return document.createTextNode(e)}function k(){return Q(" ")}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function U(e){return Array.from(e.childNodes)}var D;function g(e){D=e}var m=[],L=[],x=[],P=[],X=Promise.resolve(),w=!1;function Y(){w||(w=!0,X.then(V))}function j(e){x.push(e)}var A=!1,E=new Set;function V(){if(!A){A=!0;do{for(let e=0;e<m.length;e+=1){let t=m[e];g(t),Z(t.$$)}for(g(null),m.length=0;L.length;)L.pop()();for(let e=0;e<x.length;e+=1){let t=x[e];E.has(t)||(E.add(t),t())}x.length=0}while(m.length);for(;P.length;)P.pop()();w=!1,A=!1,E.clear()}}function Z(e){if(e.fragment!==null){e.update(),h(e.before_update);let t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}var ee=new Set;function te(e,t){e&&e.i&&(ee.delete(e),e.i(t))}function ne(e,t,n){let{fragment:o,on_mount:s,on_destroy:a,after_update:f}=e.$$;o&&o.m(t,n),j(()=>{let i=s.map(T).filter(I);a?a.push(...i):h(i),e.$$.on_mount=[]}),f.forEach(j)}function re(e,t){let n=e.$$;n.fragment!==null&&(h(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){e.$$.dirty[0]===-1&&(m.push(e),Y(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function S(e,t,n,o,s,a,f=[-1]){let i=D;g(e);let r=e.$$={fragment:null,ctx:null,props:a,update:p,not_equal:s,bound:M(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:M(),dirty:f,skip_bound:!1},d=!1;if(r.ctx=n?n(e,t.props||{},(l,N,...C)=>{let O=C.length?C[0]:N;return r.ctx&&s(r.ctx[l],r.ctx[l]=O)&&(!r.skip_bound&&r.bound[l]&&r.bound[l](O),d&&oe(e,l)),N}):[],r.update(),d=!0,h(r.before_update),r.fragment=o?o(r.ctx):!1,t.target){if(t.hydrate){let l=U(t.target);r.fragment&&r.fragment.l(l),l.forEach($)}else r.fragment&&r.fragment.c();t.intro&&te(e.$$.fragment),ne(e,t.target,t.anchor),V()}g(i)}var y=class{$destroy(){re(this,1),this.$destroy=p}$on(t,n){let o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{let s=o.indexOf(n);s!==-1&&o.splice(s,1)}}$set(t){this.$$set&&!J(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}};function le(e){let t,n,o,s,a,f,i,r;return{c(){t=_("div"),n=_("header"),o=_("img"),a=k(),f=_("p"),f.innerHTML="Edit <code>src/App.svelte</code> and save to reload.",i=k(),r=_("a"),r.textContent=`${se}`,o.src!==(s="/logo.svg")&&c(o,"src",s),c(o,"class","App-logo pointer-events-none m-4 h-64 svelte-6pbrz2"),c(o,"alt","logo"),c(r,"class","text-orange-500"),c(r,"href","https://svelte.dev"),c(r,"target","_blank"),c(r,"rel","noopener noreferrer"),c(n,"class","bg-gray-100 h-screen flex justify-center items-center flex-col text-3xl"),c(t,"class","text-center font-serif")},m(d,l){q(d,t,l),u(t,n),u(n,o),u(n,a),u(n,f),u(n,i),u(n,r)},p,i:p,o:p,d(d){d&&$(t)}}}var se="Learn Svelte",z=class extends y{constructor(t){super();S(this,t,null,le,v,{})}},B=z;import.meta.env=b;var H=new B({target:document.body}),ce=H;import.meta?.hot&&((void 0).accept(),(void 0).dispose(()=>{H.$destroy()}));export{ce as default};
