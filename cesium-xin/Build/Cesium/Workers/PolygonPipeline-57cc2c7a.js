define(["exports","./Matrix2-1ba2543c","./RuntimeError-ac440aa5","./ComponentDatatype-07fbb0d4","./defaultValue-69ee94f4","./EllipsoidRhumbLine-001b8738","./GeometryAttribute-73969808","./WebGLConstants-f63312fc"],(function(e,t,n,r,a,i,u,o){"use strict";var s=p,x=p;function p(e,t,n){n=n||2;var r,a,i,u,o,s,x,p=t&&t.length,f=p?t[0]*n:e.length,c=l(e,0,f,n,!0),v=[];if(!c||c.next===c.prev)return v;if(p&&(c=function(e,t,n,r){var a,i,u,o=[];for(a=0,i=t.length;a<i;a++)(u=l(e,t[a]*r,a<i-1?t[a+1]*r:e.length,r,!1))===u.next&&(u.steiner=!0),o.push(b(u));for(o.sort(m),a=0;a<o.length;a++)n=y(n=C(o[a],n),n.next);return n}(e,t,c,n)),e.length>80*n){r=i=e[0],a=u=e[1];for(var d=n;d<f;d+=n)(o=e[d])<r&&(r=o),(s=e[d+1])<a&&(a=s),o>i&&(i=o),s>u&&(u=s);x=0!==(x=Math.max(i-r,u-a))?1/x:0}return h(c,v,n,r,a,x),v}function l(e,t,n,r,a){var i,u;if(a===B(e,t,n,r)>0)for(i=t;i<n;i+=r)u=G(i,e[i],e[i+1],u);else for(i=n-r;i>=t;i-=r)u=G(i,e[i],e[i+1],u);return u&&M(u,u.next)&&(O(u),u=u.next),u}function y(e,t){if(!e)return e;t||(t=e);var n,r=e;do{if(n=!1,r.steiner||!M(r,r.next)&&0!==E(r.prev,r,r.next))r=r.next;else{if(O(r),(r=t=r.prev)===r.next)break;n=!0}}while(n||r!==t);return t}function h(e,t,n,r,a,i,u){if(e){!u&&i&&function(e,t,n,r){var a=e;do{null===a.z&&(a.z=w(a.x,a.y,t,n,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next}while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,function(e){var t,n,r,a,i,u,o,s,x=1;do{for(n=e,e=null,i=null,u=0;n;){for(u++,r=n,o=0,t=0;t<x&&(o++,r=r.nextZ);t++);for(s=x;o>0||s>0&&r;)0!==o&&(0===s||!r||n.z<=r.z)?(a=n,n=n.nextZ,o--):(a=r,r=r.nextZ,s--),i?i.nextZ=a:e=a,a.prevZ=i,i=a;n=r}i.nextZ=null,x*=2}while(u>1)}(a)}(e,r,a,i);for(var o,s,x=e;e.prev!==e.next;)if(o=e.prev,s=e.next,i?c(e,r,a,i):f(e))t.push(o.i/n),t.push(e.i/n),t.push(s.i/n),O(e),e=s.next,x=s.next;else if((e=s)===x){u?1===u?h(e=v(y(e),t,n),t,n,r,a,i,2):2===u&&d(e,t,n,r,a,i):h(y(e),t,n,r,a,i,1);break}}}function f(e){var t=e.prev,n=e,r=e.next;if(E(t,n,r)>=0)return!1;for(var a=e.next.next;a!==e.prev;){if(A(t.x,t.y,n.x,n.y,r.x,r.y,a.x,a.y)&&E(a.prev,a,a.next)>=0)return!1;a=a.next}return!0}function c(e,t,n,r){var a=e.prev,i=e,u=e.next;if(E(a,i,u)>=0)return!1;for(var o=a.x<i.x?a.x<u.x?a.x:u.x:i.x<u.x?i.x:u.x,s=a.y<i.y?a.y<u.y?a.y:u.y:i.y<u.y?i.y:u.y,x=a.x>i.x?a.x>u.x?a.x:u.x:i.x>u.x?i.x:u.x,p=a.y>i.y?a.y>u.y?a.y:u.y:i.y>u.y?i.y:u.y,l=w(o,s,t,n,r),y=w(x,p,t,n,r),h=e.prevZ,f=e.nextZ;h&&h.z>=l&&f&&f.z<=y;){if(h!==e.prev&&h!==e.next&&A(a.x,a.y,i.x,i.y,u.x,u.y,h.x,h.y)&&E(h.prev,h,h.next)>=0)return!1;if(h=h.prevZ,f!==e.prev&&f!==e.next&&A(a.x,a.y,i.x,i.y,u.x,u.y,f.x,f.y)&&E(f.prev,f,f.next)>=0)return!1;f=f.nextZ}for(;h&&h.z>=l;){if(h!==e.prev&&h!==e.next&&A(a.x,a.y,i.x,i.y,u.x,u.y,h.x,h.y)&&E(h.prev,h,h.next)>=0)return!1;h=h.prevZ}for(;f&&f.z<=y;){if(f!==e.prev&&f!==e.next&&A(a.x,a.y,i.x,i.y,u.x,u.y,f.x,f.y)&&E(f.prev,f,f.next)>=0)return!1;f=f.nextZ}return!0}function v(e,t,n){var r=e;do{var a=r.prev,i=r.next.next;!M(a,i)&&Z(a,r,r.next,i)&&R(a,i)&&R(i,a)&&(t.push(a.i/n),t.push(r.i/n),t.push(i.i/n),O(r),O(r.next),r=e=i),r=r.next}while(r!==e);return y(r)}function d(e,t,n,r,a,i){var u=e;do{for(var o=u.next.next;o!==u.prev;){if(u.i!==o.i&&S(u,o)){var s=D(u,o);return u=y(u,u.next),s=y(s,s.next),h(u,t,n,r,a,i),void h(s,t,n,r,a,i)}o=o.next}u=u.next}while(u!==e)}function m(e,t){return e.x-t.x}function C(e,t){var n=function(e,t){var n,r=t,a=e.x,i=e.y,u=-1/0;do{if(i<=r.y&&i>=r.next.y&&r.next.y!==r.y){var o=r.x+(i-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(o<=a&&o>u){if(u=o,o===a){if(i===r.y)return r;if(i===r.next.y)return r.next}n=r.x<r.next.x?r:r.next}}r=r.next}while(r!==t);if(!n)return null;if(a===u)return n;var s,x=n,p=n.x,l=n.y,y=1/0;r=n;do{a>=r.x&&r.x>=p&&a!==r.x&&A(i<l?a:u,i,p,l,i<l?u:a,i,r.x,r.y)&&(s=Math.abs(i-r.y)/(a-r.x),R(r,e)&&(s<y||s===y&&(r.x>n.x||r.x===n.x&&g(n,r)))&&(n=r,y=s)),r=r.next}while(r!==x);return n}(e,t);if(!n)return t;var r=D(n,e),a=y(n,n.next);return y(r,r.next),t===n?a:t}function g(e,t){return E(e.prev,e,t.prev)<0&&E(t.next,e,e.next)<0}function w(e,t,n,r,a){return(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-n)*a)|e<<8))|e<<4))|e<<2))|e<<1))|(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-r)*a)|t<<8))|t<<4))|t<<2))|t<<1))<<1}function b(e){var t=e,n=e;do{(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next}while(t!==e);return n}function A(e,t,n,r,a,i,u,o){return(a-u)*(t-o)-(e-u)*(i-o)>=0&&(e-u)*(r-o)-(n-u)*(t-o)>=0&&(n-u)*(i-o)-(a-u)*(r-o)>=0}function S(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!function(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Z(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}(e,t)&&(R(e,t)&&R(t,e)&&function(e,t){var n=e,r=!1,a=(e.x+t.x)/2,i=(e.y+t.y)/2;do{n.y>i!=n.next.y>i&&n.next.y!==n.y&&a<(n.next.x-n.x)*(i-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next}while(n!==e);return r}(e,t)&&(E(e.prev,e,t.prev)||E(e,t.prev,t))||M(e,t)&&E(e.prev,e,e.next)>0&&E(t.prev,t,t.next)>0)}function E(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function M(e,t){return e.x===t.x&&e.y===t.y}function Z(e,t,n,r){var a=L(E(e,t,n)),i=L(E(e,t,r)),u=L(E(n,r,e)),o=L(E(n,r,t));return a!==i&&u!==o||(!(0!==a||!z(e,n,t))||(!(0!==i||!z(e,r,t))||(!(0!==u||!z(n,e,r))||!(0!==o||!z(n,t,r)))))}function z(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function L(e){return e>0?1:e<0?-1:0}function R(e,t){return E(e.prev,e,e.next)<0?E(e,t,e.next)>=0&&E(e,e.prev,t)>=0:E(e,t,e.prev)<0||E(e,e.next,t)<0}function D(e,t){var n=new T(e.i,e.x,e.y),r=new T(t.i,t.x,t.y),a=e.next,i=t.prev;return e.next=t,t.prev=e,n.next=a,a.prev=n,r.next=n,n.prev=r,i.next=r,r.prev=i,r}function G(e,t,n,r){var a=new T(e,t,n);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function O(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function T(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function B(e,t,n,r){for(var a=0,i=t,u=n-r;i<n;i+=r)a+=(e[u]-e[i])*(e[i+1]+e[u+1]),u=i;return a}p.deviation=function(e,t,n,r){var a=t&&t.length,i=a?t[0]*n:e.length,u=Math.abs(B(e,0,i,n));if(a)for(var o=0,s=t.length;o<s;o++){var x=t[o]*n,p=o<s-1?t[o+1]*n:e.length;u-=Math.abs(B(e,x,p,n))}var l=0;for(o=0;o<r.length;o+=3){var y=r[o]*n,h=r[o+1]*n,f=r[o+2]*n;l+=Math.abs((e[y]-e[f])*(e[h+1]-e[y+1])-(e[y]-e[h])*(e[f+1]-e[y+1]))}return 0===u&&0===l?0:Math.abs((l-u)/u)},p.flatten=function(e){for(var t=e[0][0].length,n={vertices:[],holes:[],dimensions:t},r=0,a=0;a<e.length;a++){for(var i=0;i<e[a].length;i++)for(var u=0;u<t;u++)n.vertices.push(e[a][i][u]);a>0&&(r+=e[a-1].length,n.holes.push(r))}return n},s.default=x;const W={CLOCKWISE:o.WebGLConstants.CW,COUNTER_CLOCKWISE:o.WebGLConstants.CCW,validate:function(e){return e===W.CLOCKWISE||e===W.COUNTER_CLOCKWISE}};var P=Object.freeze(W);const $=new t.Cartesian3,I=new t.Cartesian3,N={computeArea2D:function(e){const t=e.length;let n=0;for(let r=t-1,a=0;a<t;r=a++){const t=e[r],i=e[a];n+=t.x*i.y-i.x*t.y}return.5*n},computeWindingOrder2D:function(e){return N.computeArea2D(e)>0?P.COUNTER_CLOCKWISE:P.CLOCKWISE},triangulate:function(e,n){const r=t.Cartesian2.packArray(e);return s(r,n,2)}},U=new t.Cartesian3,_=new t.Cartesian3,K=new t.Cartesian3,V=new t.Cartesian3,F=new t.Cartesian3,k=new t.Cartesian3,q=new t.Cartesian3,j=new t.Cartesian2,H=new t.Cartesian2,J=new t.Cartesian2,Q=new t.Cartesian2;N.computeSubdivision=function(e,n,i,o,s){s=a.defaultValue(s,r.CesiumMath.RADIANS_PER_DEGREE);const x=a.defined(o),p=i.slice(0);let l;const y=n.length,h=new Array(3*y),f=new Array(2*y);let c=0,v=0;for(l=0;l<y;l++){const e=n[l];if(h[c++]=e.x,h[c++]=e.y,h[c++]=e.z,x){const e=o[l];f[v++]=e.x,f[v++]=e.y}}const d=[],m={},C=e.maximumRadius,g=r.CesiumMath.chordLength(s,C),w=g*g;for(;p.length>0;){const e=p.pop(),n=p.pop(),r=p.pop(),i=t.Cartesian3.fromArray(h,3*r,U),u=t.Cartesian3.fromArray(h,3*n,_),o=t.Cartesian3.fromArray(h,3*e,K);let s,y,c;x&&(s=t.Cartesian2.fromArray(f,2*r,j),y=t.Cartesian2.fromArray(f,2*n,H),c=t.Cartesian2.fromArray(f,2*e,J));const v=t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(i,V),C,V),g=t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(u,F),C,F),b=t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(o,k),C,k),A=t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(v,g,q)),S=t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(g,b,q)),E=t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(b,v,q)),M=Math.max(A,S,E);let Z,z,L;M>w?A===M?(Z=`${Math.min(r,n)} ${Math.max(r,n)}`,l=m[Z],a.defined(l)||(z=t.Cartesian3.add(i,u,q),t.Cartesian3.multiplyByScalar(z,.5,z),h.push(z.x,z.y,z.z),l=h.length/3-1,m[Z]=l,x&&(L=t.Cartesian2.add(s,y,Q),t.Cartesian2.multiplyByScalar(L,.5,L),f.push(L.x,L.y))),p.push(r,l,e),p.push(l,n,e)):S===M?(Z=`${Math.min(n,e)} ${Math.max(n,e)}`,l=m[Z],a.defined(l)||(z=t.Cartesian3.add(u,o,q),t.Cartesian3.multiplyByScalar(z,.5,z),h.push(z.x,z.y,z.z),l=h.length/3-1,m[Z]=l,x&&(L=t.Cartesian2.add(y,c,Q),t.Cartesian2.multiplyByScalar(L,.5,L),f.push(L.x,L.y))),p.push(n,l,r),p.push(l,e,r)):E===M&&(Z=`${Math.min(e,r)} ${Math.max(e,r)}`,l=m[Z],a.defined(l)||(z=t.Cartesian3.add(o,i,q),t.Cartesian3.multiplyByScalar(z,.5,z),h.push(z.x,z.y,z.z),l=h.length/3-1,m[Z]=l,x&&(L=t.Cartesian2.add(c,s,Q),t.Cartesian2.multiplyByScalar(L,.5,L),f.push(L.x,L.y))),p.push(e,l,n),p.push(l,r,n)):(d.push(r),d.push(n),d.push(e))}const b={attributes:{position:new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h})},indices:d,primitiveType:u.PrimitiveType.TRIANGLES};return x&&(b.attributes.st=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:f})),new u.Geometry(b)};const X=new t.Cartographic,Y=new t.Cartographic,ee=new t.Cartographic,te=new t.Cartographic;N.computeRhumbLineSubdivision=function(e,n,o,s,x){x=a.defaultValue(x,r.CesiumMath.RADIANS_PER_DEGREE);const p=a.defined(s),l=o.slice(0);let y;const h=n.length,f=new Array(3*h),c=new Array(2*h);let v=0,d=0;for(y=0;y<h;y++){const e=n[y];if(f[v++]=e.x,f[v++]=e.y,f[v++]=e.z,p){const e=s[y];c[d++]=e.x,c[d++]=e.y}}const m=[],C={},g=e.maximumRadius,w=r.CesiumMath.chordLength(x,g),b=new i.EllipsoidRhumbLine(void 0,void 0,e),A=new i.EllipsoidRhumbLine(void 0,void 0,e),S=new i.EllipsoidRhumbLine(void 0,void 0,e);for(;l.length>0;){const n=l.pop(),r=l.pop(),i=l.pop(),u=t.Cartesian3.fromArray(f,3*i,U),o=t.Cartesian3.fromArray(f,3*r,_),s=t.Cartesian3.fromArray(f,3*n,K);let x,h,v;p&&(x=t.Cartesian2.fromArray(c,2*i,j),h=t.Cartesian2.fromArray(c,2*r,H),v=t.Cartesian2.fromArray(c,2*n,J));const d=e.cartesianToCartographic(u,X),g=e.cartesianToCartographic(o,Y),E=e.cartesianToCartographic(s,ee);b.setEndPoints(d,g);const M=b.surfaceDistance;A.setEndPoints(g,E);const Z=A.surfaceDistance;S.setEndPoints(E,d);const z=S.surfaceDistance,L=Math.max(M,Z,z);let R,D,G,O,T;L>w?M===L?(R=`${Math.min(i,r)} ${Math.max(i,r)}`,y=C[R],a.defined(y)||(D=b.interpolateUsingFraction(.5,te),G=.5*(d.height+g.height),O=t.Cartesian3.fromRadians(D.longitude,D.latitude,G,e,q),f.push(O.x,O.y,O.z),y=f.length/3-1,C[R]=y,p&&(T=t.Cartesian2.add(x,h,Q),t.Cartesian2.multiplyByScalar(T,.5,T),c.push(T.x,T.y))),l.push(i,y,n),l.push(y,r,n)):Z===L?(R=`${Math.min(r,n)} ${Math.max(r,n)}`,y=C[R],a.defined(y)||(D=A.interpolateUsingFraction(.5,te),G=.5*(g.height+E.height),O=t.Cartesian3.fromRadians(D.longitude,D.latitude,G,e,q),f.push(O.x,O.y,O.z),y=f.length/3-1,C[R]=y,p&&(T=t.Cartesian2.add(h,v,Q),t.Cartesian2.multiplyByScalar(T,.5,T),c.push(T.x,T.y))),l.push(r,y,i),l.push(y,n,i)):z===L&&(R=`${Math.min(n,i)} ${Math.max(n,i)}`,y=C[R],a.defined(y)||(D=S.interpolateUsingFraction(.5,te),G=.5*(E.height+d.height),O=t.Cartesian3.fromRadians(D.longitude,D.latitude,G,e,q),f.push(O.x,O.y,O.z),y=f.length/3-1,C[R]=y,p&&(T=t.Cartesian2.add(v,x,Q),t.Cartesian2.multiplyByScalar(T,.5,T),c.push(T.x,T.y))),l.push(n,y,r),l.push(y,i,r)):(m.push(i),m.push(r),m.push(n))}const E={attributes:{position:new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:f})},indices:m,primitiveType:u.PrimitiveType.TRIANGLES};return p&&(E.attributes.st=new u.GeometryAttribute({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:c})),new u.Geometry(E)},N.scaleToGeodeticHeight=function(e,n,r,i){r=a.defaultValue(r,t.Ellipsoid.WGS84);let u=$,o=I;if(n=a.defaultValue(n,0),i=a.defaultValue(i,!0),a.defined(e)){const a=e.length;for(let s=0;s<a;s+=3)t.Cartesian3.fromArray(e,s,o),i&&(o=r.scaleToGeodeticSurface(o,o)),0!==n&&(u=r.geodeticSurfaceNormal(o,u),t.Cartesian3.multiplyByScalar(u,n,u),t.Cartesian3.add(o,u,o)),e[s]=o.x,e[s+1]=o.y,e[s+2]=o.z}return e},e.PolygonPipeline=N,e.WindingOrder=P}));
