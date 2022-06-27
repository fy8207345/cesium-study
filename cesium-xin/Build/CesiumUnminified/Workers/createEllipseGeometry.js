/**
 * Cesium - https://github.com/CesiumGS/cesium
 *
 * Copyright 2011-2020 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define(['./Matrix2-fb98ca95', './defaultValue-69ee94f4', './EllipseGeometry-8d2916d6', './RuntimeError-ac440aa5', './ComponentDatatype-7ed489c0', './WebGLConstants-f63312fc', './GeometryOffsetAttribute-bae60293', './Transforms-76085a87', './_commonjsHelpers-3aae1032-15991586', './combine-0259f56f', './EllipseGeometryLibrary-c9f01d4b', './GeometryAttribute-923d70b9', './GeometryAttributes-1b4134a9', './GeometryInstance-8059c913', './GeometryPipeline-ca646eac', './AttributeCompression-142fe884', './EncodedCartesian3-928e138a', './IndexDatatype-b58b63e4', './IntersectionTests-1728704c', './Plane-a09326f5', './VertexFormat-c648f71f'], (function (Matrix2, defaultValue, EllipseGeometry, RuntimeError, ComponentDatatype, WebGLConstants, GeometryOffsetAttribute, Transforms, _commonjsHelpers3aae1032, combine, EllipseGeometryLibrary, GeometryAttribute, GeometryAttributes, GeometryInstance, GeometryPipeline, AttributeCompression, EncodedCartesian3, IndexDatatype, IntersectionTests, Plane, VertexFormat) { 'use strict';

  function createEllipseGeometry(ellipseGeometry, offset) {
    if (defaultValue.defined(offset)) {
      ellipseGeometry = EllipseGeometry.EllipseGeometry.unpack(ellipseGeometry, offset);
    }
    ellipseGeometry._center = Matrix2.Cartesian3.clone(ellipseGeometry._center);
    ellipseGeometry._ellipsoid = Matrix2.Ellipsoid.clone(ellipseGeometry._ellipsoid);
    return EllipseGeometry.EllipseGeometry.createGeometry(ellipseGeometry);
  }

  return createEllipseGeometry;

}));
//# sourceMappingURL=createEllipseGeometry.js.map
