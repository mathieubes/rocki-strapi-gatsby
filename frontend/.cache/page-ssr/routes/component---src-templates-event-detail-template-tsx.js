"use strict";
exports.id = "component---src-templates-event-detail-template-tsx";
exports.ids = ["component---src-templates-event-detail-template-tsx"];
exports.modules = {

/***/ "./src/templates/event-detail-template.tsx?export=default":
/*!****************************************************************!*\
  !*** ./src/templates/event-detail-template.tsx?export=default ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventDetailTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function EventDetailTemplate({
  data: {
    allStrapiEvent: data
  }
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, data.event_type.defaultTitlePrefix, " - ", data.event_type.defaultTitleSuffix);
}
const query = "1517212966";

/***/ })

};
;
//# sourceMappingURL=component---src-templates-event-detail-template-tsx.js.map