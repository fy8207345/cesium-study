define(["./Matrix2-1ba2543c","./RuntimeError-ac440aa5","./defaultValue-69ee94f4","./EllipseGeometry-7cd5921d","./VertexFormat-e68722dd","./ComponentDatatype-07fbb0d4","./WebGLConstants-f63312fc","./GeometryOffsetAttribute-4d39b441","./Transforms-17f51d6a","./_commonjsHelpers-3aae1032-15991586","./combine-0259f56f","./EllipseGeometryLibrary-521b0e34","./GeometryAttribute-73969808","./GeometryAttributes-1b4134a9","./GeometryInstance-5555f2e4","./GeometryPipeline-c4b5fb60","./AttributeCompression-4c4a8822","./EncodedCartesian3-8da855cc","./IndexDatatype-0b020dfb","./IntersectionTests-146a5ece","./Plane-faef0199"],(function(e,t,i,r,o,n,s,l,a,m,d,c,u,p,y,_,G,x,f,h,g){"use strict";function E(e){const t=(e=i.defaultValue(e,i.defaultValue.EMPTY_OBJECT)).radius,o={center:e.center,semiMajorAxis:t,semiMinorAxis:t,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,vertexFormat:e.vertexFormat,stRotation:e.stRotation,shadowVolume:e.shadowVolume};this._ellipseGeometry=new r.EllipseGeometry(o),this._workerName="createCircleGeometry"}E.packedLength=r.EllipseGeometry.packedLength,E.pack=function(e,t,i){return r.EllipseGeometry.pack(e._ellipseGeometry,t,i)};const b=new r.EllipseGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),w={center:new e.Cartesian3,radius:void 0,ellipsoid:e.Ellipsoid.clone(e.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,vertexFormat:new o.VertexFormat,stRotation:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0,shadowVolume:void 0};return E.unpack=function(t,n,s){const l=r.EllipseGeometry.unpack(t,n,b);return w.center=e.Cartesian3.clone(l._center,w.center),w.ellipsoid=e.Ellipsoid.clone(l._ellipsoid,w.ellipsoid),w.height=l._height,w.extrudedHeight=l._extrudedHeight,w.granularity=l._granularity,w.vertexFormat=o.VertexFormat.clone(l._vertexFormat,w.vertexFormat),w.stRotation=l._stRotation,w.shadowVolume=l._shadowVolume,i.defined(s)?(w.semiMajorAxis=l._semiMajorAxis,w.semiMinorAxis=l._semiMinorAxis,s._ellipseGeometry=new r.EllipseGeometry(w),s):(w.radius=l._semiMajorAxis,new E(w))},E.createGeometry=function(e){return r.EllipseGeometry.createGeometry(e._ellipseGeometry)},E.createShadowVolume=function(e,t,i){const r=e._ellipseGeometry._granularity,n=e._ellipseGeometry._ellipsoid,s=t(r,n),l=i(r,n);return new E({center:e._ellipseGeometry._center,radius:e._ellipseGeometry._semiMajorAxis,ellipsoid:n,stRotation:e._ellipseGeometry._stRotation,granularity:r,extrudedHeight:s,height:l,vertexFormat:o.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(E.prototype,{rectangle:{get:function(){return this._ellipseGeometry.rectangle}},textureCoordinateRotationPoints:{get:function(){return this._ellipseGeometry.textureCoordinateRotationPoints}}}),function(t,r){return i.defined(r)&&(t=E.unpack(t,r)),t._ellipseGeometry._center=e.Cartesian3.clone(t._ellipseGeometry._center),t._ellipseGeometry._ellipsoid=e.Ellipsoid.clone(t._ellipseGeometry._ellipsoid),E.createGeometry(t)}}));
