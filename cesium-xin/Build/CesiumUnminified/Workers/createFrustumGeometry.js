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

define(['./defaultValue-69ee94f4', './FrustumGeometry-ee6f1368', './Transforms-76085a87', './Matrix2-fb98ca95', './RuntimeError-ac440aa5', './ComponentDatatype-7ed489c0', './WebGLConstants-f63312fc', './_commonjsHelpers-3aae1032-15991586', './combine-0259f56f', './GeometryAttribute-923d70b9', './GeometryAttributes-1b4134a9', './Plane-a09326f5', './VertexFormat-c648f71f'], (function (defaultValue, FrustumGeometry, Transforms, Matrix2, RuntimeError, ComponentDatatype, WebGLConstants, _commonjsHelpers3aae1032, combine, GeometryAttribute, GeometryAttributes, Plane, VertexFormat) { 'use strict';

  function createFrustumGeometry(frustumGeometry, offset) {
    if (defaultValue.defined(offset)) {
      frustumGeometry = FrustumGeometry.FrustumGeometry.unpack(frustumGeometry, offset);
    }
    return FrustumGeometry.FrustumGeometry.createGeometry(frustumGeometry);
  }

  return createFrustumGeometry;

}));
//# sourceMappingURL=createFrustumGeometry.js.map
