define(["./arrayRemoveDuplicates-7d5d09a3","./Transforms-17f51d6a","./Matrix2-1ba2543c","./RuntimeError-ac440aa5","./ComponentDatatype-07fbb0d4","./CoplanarPolygonGeometryLibrary-aaa4993a","./defaultValue-69ee94f4","./GeometryAttribute-73969808","./GeometryAttributes-1b4134a9","./GeometryInstance-5555f2e4","./GeometryPipeline-c4b5fb60","./IndexDatatype-0b020dfb","./PolygonGeometryLibrary-90112517","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./WebGLConstants-f63312fc","./OrientedBoundingBox-120c309f","./EllipsoidTangentPlane-ae4f20da","./AxisAlignedBoundingBox-e20af6a2","./IntersectionTests-146a5ece","./Plane-faef0199","./AttributeCompression-4c4a8822","./EncodedCartesian3-8da855cc","./ArcType-e1641d8d","./EllipsoidRhumbLine-001b8738","./PolygonPipeline-57cc2c7a"],(function(e,t,n,o,r,a,i,c,y,l,s,u,p,d,m,f,g,b,h,P,G,L,C,T,E,H){"use strict";function A(e){const t=e.length,n=new Float64Array(3*t),o=u.IndexDatatype.createTypedArray(t,2*t);let a=0,i=0;for(let r=0;r<t;r++){const c=e[r];n[a++]=c.x,n[a++]=c.y,n[a++]=c.z,o[i++]=r,o[i++]=(r+1)%t}const l=new y.GeometryAttributes({position:new c.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:n})});return new c.Geometry({attributes:l,indices:o,primitiveType:c.PrimitiveType.LINES})}function k(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).polygonHierarchy;this._polygonHierarchy=t,this._workerName="createCoplanarPolygonOutlineGeometry",this.packedLength=p.PolygonGeometryLibrary.computeHierarchyPackedLength(t,n.Cartesian3)+1}k.fromPositions=function(e){return new k({polygonHierarchy:{positions:(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).positions}})},k.pack=function(e,t,o){return o=i.defaultValue(o,0),t[o=p.PolygonGeometryLibrary.packPolygonHierarchy(e._polygonHierarchy,t,o,n.Cartesian3)]=e.packedLength,t};const _={polygonHierarchy:{}};return k.unpack=function(e,t,o){t=i.defaultValue(t,0);const r=p.PolygonGeometryLibrary.unpackPolygonHierarchy(e,t,n.Cartesian3);t=r.startingIndex,delete r.startingIndex;const a=e[t];return i.defined(o)||(o=new k(_)),o._polygonHierarchy=r,o.packedLength=a,o},k.createGeometry=function(o){const r=o._polygonHierarchy;let i=r.positions;if(i=e.arrayRemoveDuplicates(i,n.Cartesian3.equalsEpsilon,!0),i.length<3)return;if(!a.CoplanarPolygonGeometryLibrary.validOutline(i))return;const y=p.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(r,!1);if(0===y.length)return;const u=[];for(let e=0;e<y.length;e++){const t=new l.GeometryInstance({geometry:A(y[e])});u.push(t)}const d=s.GeometryPipeline.combineInstances(u)[0],m=t.BoundingSphere.fromPoints(r.positions);return new c.Geometry({attributes:d.attributes,indices:d.indices,primitiveType:d.primitiveType,boundingSphere:m})},function(e,t){return i.defined(t)&&(e=k.unpack(e,t)),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),k.createGeometry(e)}}));