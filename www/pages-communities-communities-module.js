(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-communities-communities-module"],{

/***/ "1pba":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/communities/communities.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n    <ion-title class=\"communities-title\">\r\n      בנתיבי שאול\r\n\r\n      <div class=\"app-descr\" [innerHTML]=\"appDescr\">\r\n      </div>\r\n    </ion-title>\r\n\r\n    <div class=\"read-more-button\" (click)=\"doReadMore()\">\r\n        {{readMore ? 'סגור' : 'קרא עוד'}}\r\n    </div>\r\n\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding eduyot-bg communities-content\" #content>\r\n  <div class=\"read-more\"\r\n       [class.read-more-open]=\"readMore\">\r\n\r\n       <div class=\"about-images\">\r\n          <div *ngFor=\"let person of personImages\"\r\n               class=\"about-image\"\r\n               (click)=\"gotoPerson(person)\">\r\n            <img [src]=\"getPersonImage(person)\" />\r\n          </div>\r\n       </div>\r\n\r\n       <!-- ===== -->\r\n       <!-- about -->\r\n       <!-- ===== -->\r\n       <div class=\"color: red !important\" [innerHTML]=\"about\">\r\n      </div>\r\n  </div>\r\n\r\n\r\n  <!-- ============= -->\r\n  <!-- רשימת הקהילות -->\r\n  <!-- ============= -->\r\n  <div class=\"community-title\">קהילות</div>\r\n  <eduyot-group *ngFor=\"let community of communities\"\r\n    [community]=\"community\"\r\n    (click)=\"openCommunity(community)\">\r\n  </eduyot-group>\r\n\r\n  <div class=\"community-title\">מחנות</div>\r\n  <eduyot-group *ngFor=\"let camp of camps\"\r\n    [community]=\"camp\"\r\n    (click)=\"openCommunity(camp)\">\r\n  </eduyot-group>\r\n</ion-content>\r\n");

/***/ }),

/***/ "Cw/w":
/*!****************************************************!*\
  !*** ./src/app/pages/communities/communities.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/** Ionic CSS Variables **/\n:root {\n  /* fonts */\n  --ion-font-family: \"NextExit Hebrew\";\n  /** primary **/\n  --ion-color-primary: #3880ff;\n  --ion-color-primary-rgb: 56, 128, 255;\n  --ion-color-primary-contrast: #ffffff;\n  --ion-color-primary-contrast-rgb: 255, 255, 255;\n  --ion-color-primary-shade: #3171e0;\n  --ion-color-primary-tint: #4c8dff;\n  /** secondary **/\n  --ion-color-secondary: #3dc2ff;\n  --ion-color-secondary-rgb: 61, 194, 255;\n  --ion-color-secondary-contrast: #ffffff;\n  --ion-color-secondary-contrast-rgb: 255, 255, 255;\n  --ion-color-secondary-shade: #36abe0;\n  --ion-color-secondary-tint: #50c8ff;\n  /** tertiary **/\n  --ion-color-tertiary: #5260ff;\n  --ion-color-tertiary-rgb: 82, 96, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #4854e0;\n  --ion-color-tertiary-tint: #6370ff;\n  /** success **/\n  --ion-color-success: #2dd36f;\n  --ion-color-success-rgb: 45, 211, 111;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #28ba62;\n  --ion-color-success-tint: #42d77d;\n  /** warning **/\n  --ion-color-warning: #ffc409;\n  --ion-color-warning-rgb: 255, 196, 9;\n  --ion-color-warning-contrast: #000000;\n  --ion-color-warning-contrast-rgb: 0, 0, 0;\n  --ion-color-warning-shade: #e0ac08;\n  --ion-color-warning-tint: #ffca22;\n  /** danger **/\n  --ion-color-danger: #eb445a;\n  --ion-color-danger-rgb: 235, 68, 90;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #cf3c4f;\n  --ion-color-danger-tint: #ed576b;\n  /** dark **/\n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 36, 40;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  /** medium **/\n  --ion-color-medium: #92949c;\n  --ion-color-medium-rgb: 146, 148, 156;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #808289;\n  --ion-color-medium-tint: #9d9fa6;\n  /** light **/\n  --ion-color-light: #f4f5f8;\n  --ion-color-light-rgb: 244, 245, 248;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n}\n@media (prefers-color-scheme: dark) {\n  /*\n   * Dark Colors\n   * -------------------------------------------\n   */\n  body {\n    --ion-color-primary: #428cff;\n    --ion-color-primary-rgb: 66,140,255;\n    --ion-color-primary-contrast: #ffffff;\n    --ion-color-primary-contrast-rgb: 255,255,255;\n    --ion-color-primary-shade: #3a7be0;\n    --ion-color-primary-tint: #5598ff;\n    --ion-color-secondary: #50c8ff;\n    --ion-color-secondary-rgb: 80,200,255;\n    --ion-color-secondary-contrast: #ffffff;\n    --ion-color-secondary-contrast-rgb: 255,255,255;\n    --ion-color-secondary-shade: #46b0e0;\n    --ion-color-secondary-tint: #62ceff;\n    --ion-color-tertiary: #6a64ff;\n    --ion-color-tertiary-rgb: 106,100,255;\n    --ion-color-tertiary-contrast: #ffffff;\n    --ion-color-tertiary-contrast-rgb: 255,255,255;\n    --ion-color-tertiary-shade: #5d58e0;\n    --ion-color-tertiary-tint: #7974ff;\n    --ion-color-success: #2fdf75;\n    --ion-color-success-rgb: 47,223,117;\n    --ion-color-success-contrast: #000000;\n    --ion-color-success-contrast-rgb: 0,0,0;\n    --ion-color-success-shade: #29c467;\n    --ion-color-success-tint: #44e283;\n    --ion-color-warning: #ffd534;\n    --ion-color-warning-rgb: 255,213,52;\n    --ion-color-warning-contrast: #000000;\n    --ion-color-warning-contrast-rgb: 0,0,0;\n    --ion-color-warning-shade: #e0bb2e;\n    --ion-color-warning-tint: #ffd948;\n    --ion-color-danger: #ff4961;\n    --ion-color-danger-rgb: 255,73,97;\n    --ion-color-danger-contrast: #ffffff;\n    --ion-color-danger-contrast-rgb: 255,255,255;\n    --ion-color-danger-shade: #e04055;\n    --ion-color-danger-tint: #ff5b71;\n    --ion-color-dark: #f4f5f8;\n    --ion-color-dark-rgb: 244,245,248;\n    --ion-color-dark-contrast: #000000;\n    --ion-color-dark-contrast-rgb: 0,0,0;\n    --ion-color-dark-shade: #d7d8da;\n    --ion-color-dark-tint: #f5f6f9;\n    --ion-color-medium: #989aa2;\n    --ion-color-medium-rgb: 152,154,162;\n    --ion-color-medium-contrast: #000000;\n    --ion-color-medium-contrast-rgb: 0,0,0;\n    --ion-color-medium-shade: #86888f;\n    --ion-color-medium-tint: #a2a4ab;\n    --ion-color-light: #222428;\n    --ion-color-light-rgb: 34,36,40;\n    --ion-color-light-contrast: #ffffff;\n    --ion-color-light-contrast-rgb: 255,255,255;\n    --ion-color-light-shade: #1e2023;\n    --ion-color-light-tint: #383a3e;\n  }\n\n  /*\n   * iOS Dark Theme\n   * -------------------------------------------\n   */\n  .ios body {\n    --ion-background-color: #000000;\n    --ion-background-color-rgb: 0,0,0;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-color-step-50: #0d0d0d;\n    --ion-color-step-100: #1a1a1a;\n    --ion-color-step-150: #262626;\n    --ion-color-step-200: #333333;\n    --ion-color-step-250: #404040;\n    --ion-color-step-300: #4d4d4d;\n    --ion-color-step-350: #595959;\n    --ion-color-step-400: #666666;\n    --ion-color-step-450: #737373;\n    --ion-color-step-500: #808080;\n    --ion-color-step-550: #8c8c8c;\n    --ion-color-step-600: #999999;\n    --ion-color-step-650: #a6a6a6;\n    --ion-color-step-700: #b3b3b3;\n    --ion-color-step-750: #bfbfbf;\n    --ion-color-step-800: #cccccc;\n    --ion-color-step-850: #d9d9d9;\n    --ion-color-step-900: #e6e6e6;\n    --ion-color-step-950: #f2f2f2;\n    --ion-item-background: #000000;\n    --ion-card-background: #1c1c1d;\n  }\n\n  .ios ion-modal {\n    --ion-background-color: var(--ion-color-step-100);\n    --ion-toolbar-background: var(--ion-color-step-150);\n    --ion-toolbar-border-color: var(--ion-color-step-250);\n  }\n\n  /*\n   * Material Design Dark Theme\n   * -------------------------------------------\n   */\n  .md body {\n    --ion-background-color: #121212;\n    --ion-background-color-rgb: 18,18,18;\n    --ion-text-color: #ffffff;\n    --ion-text-color-rgb: 255,255,255;\n    --ion-border-color: #222222;\n    --ion-color-step-50: #1e1e1e;\n    --ion-color-step-100: #2a2a2a;\n    --ion-color-step-150: #363636;\n    --ion-color-step-200: #414141;\n    --ion-color-step-250: #4d4d4d;\n    --ion-color-step-300: #595959;\n    --ion-color-step-350: #656565;\n    --ion-color-step-400: #717171;\n    --ion-color-step-450: #7d7d7d;\n    --ion-color-step-500: #898989;\n    --ion-color-step-550: #949494;\n    --ion-color-step-600: #a0a0a0;\n    --ion-color-step-650: #acacac;\n    --ion-color-step-700: #b8b8b8;\n    --ion-color-step-750: #c4c4c4;\n    --ion-color-step-800: #d0d0d0;\n    --ion-color-step-850: #dbdbdb;\n    --ion-color-step-900: #e7e7e7;\n    --ion-color-step-950: #f3f3f3;\n    --ion-item-background: #1e1e1e;\n    --ion-toolbar-background: #1f1f1f;\n    --ion-tab-bar-background: #1f1f1f;\n    --ion-card-background: #1e1e1e;\n  }\n}\n.communities-title {\n  position: relative;\n  text-align: center;\n  height: 193px;\n  font-size: 30px;\n  font-weight: 600;\n}\n.communities-title .toolbar-title-md {\n  position: relative;\n  top: -20px;\n  font-size: 26px;\n  font-weight: 800;\n}\n.communities-title .app-descr {\n  font-size: 20px;\n  line-height: 23px;\n  text-align: center;\n  color: #fff;\n  font-weight: 100;\n  margin-top: 15px;\n}\n.read-more-button {\n  color: #3999b9;\n  text-align: center;\n  position: relative;\n  font-size: 20px;\n  position: absolute;\n  bottom: 10%;\n  width: 100%;\n}\nion-content.communities-content {\n  padding: 0;\n  margin: 0;\n}\nion-content.communities-content div.scroll-content {\n  padding: 0;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.read-more {\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 400ms, padding-top 400ms;\n  font-size: 20px;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 0;\n}\n.read-more.read-more-open {\n  max-height: 6000px;\n  padding-top: 20px;\n  padding-bottom: 40px;\n}\n.read-more .about-images {\n  padding: 10px;\n  display: flex;\n  justify-content: center;\n}\n.read-more .about-images .about-image {\n  width: 60px;\n  height: 60px;\n  padding: 4px;\n}\n.community-title {\n  padding: 10px;\n  font-size: 25px;\n  text-align: center;\n  font-weight: 500;\n}\n.back-button {\n  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHRoZW1lXFx2YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxjb21tdW5pdGllcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBb0JBO0VBQ0UsVUFBQTtFQUNBLG9DQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsaURBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBRUEsZUFBQTtFQUNBLDZCQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtFQUNBLGdEQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLHFDQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EseUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUVBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSw0Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQzlCRjtBRGlDQTtFQUNFOzs7SUFBQTtFQUtBO0lBQ0UsNEJBQUE7SUFDQSxt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TVk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFtTWhCO0FBOUxJO0VBQ0ksYUFBQTtFQUVBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZ01SO0FBN0xFO0VBQ0UsaUVBQUE7QUFnTUoiLCJmaWxlIjoiY29tbXVuaXRpZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcclxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXHJcblxyXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuXHJcbiRhcHAtZGlyZWN0aW9uOiBcInJ0bFwiO1xyXG5cclxuLy9lZHV5b3QgY29sb3JzXHJcbiRlZHV5b3QtZGFyazogIzIzMjMyNjtcclxuJGVkdXlvdC1kYXJ0MjogIzQyNDI0MjtcclxuJGVkdXlvdC1kYXJrMzogIzZkNmQ2ZDtcclxuJGVkdXlvdC1saWdodDogI2Y1ZjVmNjtcclxuJGVkdXlvdC1ibHVlOiAjNTBiZmQ4O1xyXG5cclxuJGZvbnQtZmFtaWx5LWJhc2U6IFwiTmV4dEV4aXQgSGVicmV3XCI7XHJcbiRmb250LWZhbWlseS1pb3MtYmFzZTogXCJOZXh0RXhpdCBIZWJyZXdcIjtcclxuJGZvbnQtZmFtaWx5LW1kLWJhc2U6IFwiTmV4dEV4aXQgSGVicmV3XCI7XHJcbiRmb250LWZhbWlseS13cC1iYXNlOiBcIk5leHRFeGl0IEhlYnJld1wiO1xyXG5cclxuJHRvb2xiYXItbWQtdGl0bGUtdGV4dC1jb2xvcjogJGVkdXlvdC1saWdodDtcclxuJHRvb2xiYXItaW9zLXRpdGxlLXRleHQtY29sb3I6ICRlZHV5b3QtbGlnaHQ7XHJcbiR0b29sYmFyLXdwLXRpdGxlLXRleHQtY29sb3I6ICRlZHV5b3QtbGlnaHQ7XHJcblxyXG46cm9vdCB7XHJcbiAgLyogZm9udHMgKi9cclxuICAtLWlvbi1mb250LWZhbWlseTogXCJOZXh0RXhpdCBIZWJyZXdcIjtcclxuXHJcbiAgLyoqIHByaW1hcnkgKiovXHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzM4ODBmZjtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXJnYjogNTYsIDEyOCwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzMxNzFlMDtcclxuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XHJcblxyXG4gIC8qKiBzZWNvbmRhcnkgKiovXHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjM2RjMmZmO1xyXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDYxLCAxOTQsIDI1NTtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICMzNmFiZTA7XHJcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XHJcblxyXG4gIC8qKiB0ZXJ0aWFyeSAqKi9cclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzUyNjBmZjtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDgyLCA5NiwgMjU1O1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzQ4NTRlMDtcclxuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xyXG5cclxuICAvKiogc3VjY2VzcyAqKi9cclxuICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmRkMzZmO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NSwgMjExLCAxMTE7XHJcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcclxuICAtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlOiAjMjhiYTYyO1xyXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcclxuXHJcbiAgLyoqIHdhcm5pbmcgKiovXHJcbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmYzQwOTtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLXJnYjogMjU1LCAxOTYsIDk7XHJcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlOiAjZTBhYzA4O1xyXG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcclxuXHJcbiAgLyoqIGRhbmdlciAqKi9cclxuICAtLWlvbi1jb2xvci1kYW5nZXI6ICNlYjQ0NWE7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjM1LCA2OCwgOTA7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjY2YzYzRmO1xyXG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xyXG5cclxuICAvKiogZGFyayAqKi9cclxuICAtLWlvbi1jb2xvci1kYXJrOiAjMjIyNDI4O1xyXG4gIC0taW9uLWNvbG9yLWRhcmstcmdiOiAzNCwgMzYsIDQwO1xyXG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XHJcbiAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItZGFyay1zaGFkZTogIzFlMjAyMztcclxuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XHJcblxyXG4gIC8qKiBtZWRpdW0gKiovXHJcbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTI5NDljO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1yZ2I6IDE0NiwgMTQ4LCAxNTY7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XHJcbiAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODA4Mjg5O1xyXG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xyXG5cclxuICAvKiogbGlnaHQgKiovXHJcbiAgLS1pb24tY29sb3ItbGlnaHQ6ICNmNGY1Zjg7XHJcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NSwgMjQ4O1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xyXG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcclxuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcclxuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xyXG59XHJcblxyXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XHJcbiAgLypcclxuICAgKiBEYXJrIENvbG9yc1xyXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuXHJcbiAgYm9keSB7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5OiAjNDI4Y2ZmO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xyXG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcclxuICAgIC0taW9uLWNvbG9yLXByaW1hcnktdGludDogIzU1OThmZjtcclxuXHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnk6ICM1MGM4ZmY7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiOiA4MCwyMDAsMjU1O1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGU6ICM0NmIwZTA7XHJcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcclxuXHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogMTA2LDEwMCwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdDogI2ZmZmZmZjtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1zaGFkZTogIzVkNThlMDtcclxuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3OTc0ZmY7XHJcblxyXG4gICAgLS1pb24tY29sb3Itc3VjY2VzczogIzJmZGY3NTtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xyXG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XHJcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQ6ICM0NGUyODM7XHJcblxyXG4gICAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmZDUzNDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsMjEzLDUyO1xyXG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGJiMmU7XHJcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XHJcblxyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjU1LDczLDk3O1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNlMDQwNTU7XHJcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2ZmNWI3MTtcclxuXHJcbiAgICAtLWlvbi1jb2xvci1kYXJrOiAjZjRmNWY4O1xyXG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xyXG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdDogIzAwMDAwMDtcclxuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XHJcbiAgICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICNmNWY2Zjk7XHJcblxyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xyXG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTUyLDE1NCwxNjI7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XHJcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAwLDAsMDtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcclxuICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xyXG5cclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAzNCwzNiw0MDtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjZmZmZmZmO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcclxuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjMWUyMDIzO1xyXG4gICAgLS1pb24tY29sb3ItbGlnaHQtdGludDogIzM4M2EzZTtcclxuICB9XHJcblxyXG4gIC8qXHJcbiAgICogaU9TIERhcmsgVGhlbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG4gIC5pb3MgYm9keSB7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2I6IDAsMCwwO1xyXG5cclxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XHJcblxyXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzBkMGQwZDtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMyNjI2MjY7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzMzMzMzMztcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM0ZDRkNGQ7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzU5NTk1OTtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3MzczNzM7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzgwODA4MDtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICM5OTk5OTk7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2E2YTZhNjtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNiZmJmYmY7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2NjY2NjYztcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlNmU2ZTY7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YyZjJmMjtcclxuXHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMwMDAwMDA7XHJcblxyXG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWMxYzFkO1xyXG4gIH1cclxuXHJcbiAgLmlvcyBpb24tbW9kYWwge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcclxuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwKTtcclxuICAgIC0taW9uLXRvb2xiYXItYm9yZGVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC0yNTApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8qXHJcbiAgICogTWF0ZXJpYWwgRGVzaWduIERhcmsgVGhlbWVcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICovXHJcblxyXG4gIC5tZCBib2R5IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XHJcblxyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcclxuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcclxuXHJcbiAgICAtLWlvbi1ib3JkZXItY29sb3I6ICMyMjIyMjI7XHJcblxyXG4gICAgLS1pb24tY29sb3Itc3RlcC01MDogIzFlMWUxZTtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMmEyYTJhO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTIwMDogIzQxNDE0MTtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNGQ0ZDRkO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTM1MDogIzY1NjU2NTtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNzE3MTcxO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwMDogIzg5ODk4OTtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOTQ5NDk0O1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTY1MDogI2FjYWNhYztcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjhiOGI4O1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTgwMDogI2QwZDBkMDtcclxuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZGJkYmRiO1xyXG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XHJcbiAgICAtLWlvbi1jb2xvci1zdGVwLTk1MDogI2YzZjNmMztcclxuXHJcbiAgICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6ICMxZTFlMWU7XHJcblxyXG4gICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjMWYxZjFmO1xyXG5cclxuICAgIC0taW9uLXRhYi1iYXItYmFja2dyb3VuZDogIzFmMWYxZjtcclxuXHJcbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxZTFlMWU7XHJcbiAgfVxyXG59XHJcbiIsIi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiBmb250cyAqL1xuICAtLWlvbi1mb250LWZhbWlseTogXCJOZXh0RXhpdCBIZWJyZXdcIjtcbiAgLyoqIHByaW1hcnkgKiovXG4gIC0taW9uLWNvbG9yLXByaW1hcnk6ICMzODgwZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktcmdiOiA1NiwgMTI4LCAyNTU7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlOiAjMzE3MWUwO1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM0YzhkZmY7XG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzNkYzJmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNjEsIDE5NCwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzM2YWJlMDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQ6ICM1MGM4ZmY7XG4gIC8qKiB0ZXJ0aWFyeSAqKi9cbiAgLS1pb24tY29sb3ItdGVydGlhcnk6ICM1MjYwZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXJnYjogODIsIDk2LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlOiAjNDg1NGUwO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50OiAjNjM3MGZmO1xuICAvKiogc3VjY2VzcyAqKi9cbiAgLS1pb24tY29sb3Itc3VjY2VzczogIzJkZDM2ZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2I6IDQ1LCAyMTEsIDExMTtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOGJhNjI7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzQyZDc3ZDtcbiAgLyoqIHdhcm5pbmcgKiovXG4gIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmM0MDk7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctcmdiOiAyNTUsIDE5NiwgOTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctc2hhZGU6ICNlMGFjMDg7XG4gIC0taW9uLWNvbG9yLXdhcm5pbmctdGludDogI2ZmY2EyMjtcbiAgLyoqIGRhbmdlciAqKi9cbiAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZWI0NDVhO1xuICAtLWlvbi1jb2xvci1kYW5nZXItcmdiOiAyMzUsIDY4LCA5MDtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYW5nZXItc2hhZGU6ICNjZjNjNGY7XG4gIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZWQ1NzZiO1xuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNiwgNDA7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG4gIC8qKiBtZWRpdW0gKiovXG4gIC0taW9uLWNvbG9yLW1lZGl1bTogIzkyOTQ5YztcbiAgLS1pb24tY29sb3ItbWVkaXVtLXJnYjogMTQ2LCAxNDgsIDE1NjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGU6ICM4MDgyODk7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjOWQ5ZmE2O1xuICAvKiogbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWxpZ2h0OiAjZjRmNWY4O1xuICAtLWlvbi1jb2xvci1saWdodC1yZ2I6IDI0NCwgMjQ1LCAyNDg7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0OiAjMDAwMDAwO1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdC1yZ2I6IDAsIDAsIDA7XG4gIC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlOiAjZDdkOGRhO1xuICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjZjVmNmY5O1xufVxuXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gIC8qXG4gICAqIERhcmsgQ29sb3JzXG4gICAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGJvZHkge1xuICAgIC0taW9uLWNvbG9yLXByaW1hcnk6ICM0MjhjZmY7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDY2LDE0MCwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdDogI2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzNhN2JlMDtcbiAgICAtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQ6ICM1NTk4ZmY7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5OiAjNTBjOGZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2I6IDgwLDIwMCwyNTU7XG4gICAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2I6IDI1NSwyNTUsMjU1O1xuICAgIC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZTogIzQ2YjBlMDtcbiAgICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzYyY2VmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeTogIzZhNjRmZjtcbiAgICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDEwNiwxMDAsMjU1O1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0OiAjZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM1ZDU4ZTA7XG4gICAgLS1pb24tY29sb3ItdGVydGlhcnktdGludDogIzc5NzRmZjtcbiAgICAtLWlvbi1jb2xvci1zdWNjZXNzOiAjMmZkZjc1O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiA0NywyMjMsMTE3O1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMyOWM0Njc7XG4gICAgLS1pb24tY29sb3Itc3VjY2Vzcy10aW50OiAjNDRlMjgzO1xuICAgIC0taW9uLWNvbG9yLXdhcm5pbmc6ICNmZmQ1MzQ7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwyMTMsNTI7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdDogIzAwMDAwMDtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYmIyZTtcbiAgICAtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQ6ICNmZmQ5NDg7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyOiAjZmY0OTYxO1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci1yZ2I6IDI1NSw3Myw5NztcbiAgICAtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZTA0MDU1O1xuICAgIC0taW9uLWNvbG9yLWRhbmdlci10aW50OiAjZmY1YjcxO1xuICAgIC0taW9uLWNvbG9yLWRhcms6ICNmNGY1Zjg7XG4gICAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDI0NCwyNDUsMjQ4O1xuICAgIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2I6IDAsMCwwO1xuICAgIC0taW9uLWNvbG9yLWRhcmstc2hhZGU6ICNkN2Q4ZGE7XG4gICAgLS1pb24tY29sb3ItZGFyay10aW50OiAjZjVmNmY5O1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bTogIzk4OWFhMjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsMTU0LDE2MjtcbiAgICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICMwMDAwMDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYjogMCwwLDA7XG4gICAgLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlOiAjODY4ODhmO1xuICAgIC0taW9uLWNvbG9yLW1lZGl1bS10aW50OiAjYTJhNGFiO1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0OiAjMjIyNDI4O1xuICAgIC0taW9uLWNvbG9yLWxpZ2h0LXJnYjogMzQsMzYsNDA7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3Q6ICNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogIzFlMjAyMztcbiAgICAtLWlvbi1jb2xvci1saWdodC10aW50OiAjMzgzYTNlO1xuICB9XG5cbiAgLypcbiAgICogaU9TIERhcmsgVGhlbWVcbiAgICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKi9cbiAgLmlvcyBib2R5IHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3ItcmdiOiAwLDAsMDtcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmZmZmO1xuICAgIC0taW9uLXRleHQtY29sb3ItcmdiOiAyNTUsMjU1LDI1NTtcbiAgICAtLWlvbi1jb2xvci1zdGVwLTUwOiAjMGQwZDBkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTAwOiAjMWExYTFhO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMTUwOiAjMjYyNjI2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjAwOiAjMzMzMzMzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMjUwOiAjNDA0MDQwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzAwOiAjNGQ0ZDRkO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtMzUwOiAjNTk1OTU5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDAwOiAjNjY2NjY2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNDUwOiAjNzM3MzczO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTAwOiAjODA4MDgwO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTUwOiAjOGM4YzhjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjAwOiAjOTk5OTk5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNjUwOiAjYTZhNmE2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzAwOiAjYjNiM2IzO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNzUwOiAjYmZiZmJmO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODAwOiAjY2NjY2NjO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtODUwOiAjZDlkOWQ5O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTAwOiAjZTZlNmU2O1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtOTUwOiAjZjJmMmYyO1xuICAgIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgICAtLWlvbi1jYXJkLWJhY2tncm91bmQ6ICMxYzFjMWQ7XG4gIH1cblxuICAuaW9zIGlvbi1tb2RhbCB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTAwKTtcbiAgICAtLWlvbi10b29sYmFyLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCk7XG4gICAgLS1pb24tdG9vbGJhci1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTI1MCk7XG4gIH1cblxuICAvKlxuICAgKiBNYXRlcmlhbCBEZXNpZ24gRGFyayBUaGVtZVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqL1xuICAubWQgYm9keSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYjogMTgsMTgsMTg7XG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZmZmZjtcbiAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogMjU1LDI1NSwyNTU7XG4gICAgLS1pb24tYm9yZGVyLWNvbG9yOiAjMjIyMjIyO1xuICAgIC0taW9uLWNvbG9yLXN0ZXAtNTA6ICMxZTFlMWU7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xMDA6ICMyYTJhMmE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0xNTA6ICMzNjM2MzY7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yMDA6ICM0MTQxNDE7XG4gICAgLS1pb24tY29sb3Itc3RlcC0yNTA6ICM0ZDRkNGQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zMDA6ICM1OTU5NTk7XG4gICAgLS1pb24tY29sb3Itc3RlcC0zNTA6ICM2NTY1NjU7XG4gICAgLS1pb24tY29sb3Itc3RlcC00MDA6ICM3MTcxNzE7XG4gICAgLS1pb24tY29sb3Itc3RlcC00NTA6ICM3ZDdkN2Q7XG4gICAgLS1pb24tY29sb3Itc3RlcC01MDA6ICM4OTg5ODk7XG4gICAgLS1pb24tY29sb3Itc3RlcC01NTA6ICM5NDk0OTQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC02MDA6ICNhMGEwYTA7XG4gICAgLS1pb24tY29sb3Itc3RlcC02NTA6ICNhY2FjYWM7XG4gICAgLS1pb24tY29sb3Itc3RlcC03MDA6ICNiOGI4Yjg7XG4gICAgLS1pb24tY29sb3Itc3RlcC03NTA6ICNjNGM0YzQ7XG4gICAgLS1pb24tY29sb3Itc3RlcC04MDA6ICNkMGQwZDA7XG4gICAgLS1pb24tY29sb3Itc3RlcC04NTA6ICNkYmRiZGI7XG4gICAgLS1pb24tY29sb3Itc3RlcC05MDA6ICNlN2U3ZTc7XG4gICAgLS1pb24tY29sb3Itc3RlcC05NTA6ICNmM2YzZjM7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICAgIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogIzFmMWYxZjtcbiAgICAtLWlvbi10YWItYmFyLWJhY2tncm91bmQ6ICMxZjFmMWY7XG4gICAgLS1pb24tY2FyZC1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICB9XG59XG4uY29tbXVuaXRpZXMtdGl0bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxOTNweDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNvbW11bml0aWVzLXRpdGxlIC50b29sYmFyLXRpdGxlLW1kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uY29tbXVuaXRpZXMtdGl0bGUgLmFwcC1kZXNjciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5yZWFkLW1vcmUtYnV0dG9uIHtcbiAgY29sb3I6ICMzOTk5Yjk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tY29udGVudC5jb21tdW5pdGllcy1jb250ZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuaW9uLWNvbnRlbnQuY29tbXVuaXRpZXMtY29udGVudCBkaXYuc2Nyb2xsLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi5yZWFkLW1vcmUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDQwMG1zLCBwYWRkaW5nLXRvcCA0MDBtcztcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLnJlYWQtbW9yZS5yZWFkLW1vcmUtb3BlbiB7XG4gIG1heC1oZWlnaHQ6IDYwMDBweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA0MHB4O1xufVxuLnJlYWQtbW9yZSAuYWJvdXQtaW1hZ2VzIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4ucmVhZC1tb3JlIC5hYm91dC1pbWFnZXMgLmFib3V0LWltYWdlIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uY29tbXVuaXR5LXRpdGxlIHtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIHRleHQtc2hhZG93OiAtMXB4IDAgYmxhY2ssIDAgMXB4IGJsYWNrLCAxcHggMCBibGFjaywgMCAtMXB4IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "Q/xc":
/*!*********************************************!*\
  !*** ./src/app/services/data/about.data.ts ***!
  \*********************************************/
/*! exports provided: APP_SHORT_DESCRIPTION, ABOUT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SHORT_DESCRIPTION", function() { return APP_SHORT_DESCRIPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ABOUT", function() { return ABOUT; });
const APP_SHORT_DESCRIPTION = `
מיוון לפולין - מסע קולות ועדויות
<br>
<p>ניצולי שואה ילידי יוון
מלווים בקולותיהם את המבקרים בקהילות יהודי יוון ובאתרי השמדה בפולין

<p>יישומון תוכן  פרי פיתוח של
מכון סלטי לחקר הלאדינו, אוניברסיטת בר-אילן

`;
const ABOUT = `
<h1>מיוון לפולין - מסע קולות ועדויות</h1>

<p>ניצולי שואה ילידי יוון
מלווים בקולותיהם את המבקרים בקהילות יהודי יוון ובאתרי השמדה בפולין

<p>יישומון תוכן  פרי פיתוח של
מכון סלטי לחקר הלאדינו, אוניברסיטת בר-אילן

<p>בשנת 1988 ראה אור הספר <b>בנתיבי שְאול: יהודי יוון בשואה – פרקי עדות</b> (הוצאת המכון לחקר יהדות שאלוניקי בשיתוף ארגון ניצולי מחנות ההשמדה יוצאי יוון) מאת שמואל רפאל, ובו עדויות ראשוניות של 62 ניצולי שואה, שחיו אז בישראל, ומקום לידתם – יוון על עושר קהילותיה. הספר הנציח את קולותיהם, והביא בכתב את סיפוריהם של רבים שכבר אינם עמנו. בעת ההיא, וגם היום, הספר הזה היה למאסף הגדול ביותר בעברית של דברי עדות מהמרחב היהודי-היווני.

<p><img src="assets/imgs/book_cover.jpg" width="180" height="240" class="center70"></p>

<p>בספר המחזיק כ500 עמודים פורסמו בתמציתיות מרובה למעלה מ-120 שעות הקלטה. זהו ריכוז משמעותי של קולות ושל סיפורים שעד לעת ההיא כמעט ושלא נשמעו. ממרחק העשורים שחלפו מאז יצא  הספר לאור, ניכר כי הוא היה זרז שהאיץ מגמה להיחשפות – היו מבין העדים שפרסמו את זיכרונותיהם בספרים עצמאיים; אחרים נטלו חלק במיזמים ישראליים ובין-לאומיים; והיו העדים שהתמסרו למלאכת הזיכרון וההנצחה של יהודי יוון בישראל ומחוצה לה.

<p>הסתלקותם מאתנו של עדים שיספרו בגוף ראשון את אשר אירע ליהודי יוון בזמן לפני השואה, במהלכה ולאחריה מורגש מאוד כבר היום, והוא ילך ויורגש ביתר שאת בעתיד. כבר היום אין עוד מי שילווה בקולו את מסעותיהם של בני נוער וחיילים בדרכי פולין; אין עוד מי שיוכל לומר "אני הייתי כאן", "מכאן נשלחתי למחנות", "פה היה ביתי".

<p>האפליקציה שלפניכם היא פרי יוזמה ופיתוח של צוות מחקר, בראשותו של פרופ' שמואל רפאל, מייסד מכון סלטי לחקר הלאדינו באוניברסיטת בר אילן, ואז – סטודנט צעיר, מתעדם של העדים.

<p>באפליקציה הזאת עשינו מאמץ לחלץ מקטעי קול אותנטיים  מתוך למעלה מ- 120 שעות הקלטה ביודענו שאנו מותירים מאחור קולות וסיפורים שעדיין ספונים בקלטות הישנות שהוקלטו במחצית שנות השמונים של המאה העשרים. הבאנו כאן רק מקבץ ראשוני של קטעי קול וסיפורי עדות, מכיוון שלא עמדו לרשותנו האפשרויות לדיגיטציה מלאה של כל ההקלטות ולתימלולן המחקרי המקיף. אנו תקווה כי לא ירחק היום ובעתיד יתאפשר לנו להציל באמצעים דיגיטליים מודרניים את המכלול השלם של ההקלטות הישנות, כדי שניתן יהיה להפגיש את המאזינים עם הקול האותנטי של העדים. כך נבטיח, אחת ולתמיד, את העברתו, מרשות היחיד (המתעד) לרשותם של הרבים, ובעיקר נאפשר למאזין מפגש בלתי אמצעי עם העדים, עם נעימת קולם ועם חוויותיהם המיוחדות.

<p>לצד מקטעי קול קצרים הקול אנו מעמידים לרשות המשתמשים באפליקציה מידע היסטורי תמציתי על אודות מרכזי היהודים ביוון ועל קורות היהודים בהם. את המידע ההיסטורי גיבשנו מתוך סיפורי העדות שפורסמו בספר "בנתיבי שאול" וכן מתוך מקבץ מקורות היסטוריים מוכרים על אודות יוון ויהודיה.

<p>בשנים האחרונות יזם מכון סלטי לחקר הלאדינו באוניברסיטת בר-אילן מסעות היסטוריים בעקבות דוברי הלאדינו בשואה. מאות השתתפו בסיורים האלה, ובעקבותיהם הלך והתברר הצורך להעמיד לרשות המבקר הישראלי כלי יעיל וזמין, שיאפשר מפגש עם העבר היהודי-היווני באמצעים טכנולוגיים מודרניים. האפליקציה הזאת נועדה לתת מענה לכל אלה שמבקשים להתוודע לעבר היהודי ביוון ולאחריתה של קהילה מפוארת זו על אדמת פולין בזמן השואה הנוראית. המיזם הזה, שהוא בבחינת יחידת הדרכה, ראשונית יש לומר, לאלה המבקשים להיפגש עם סיפורה של יהדות יוון בשואה, התאפשר הודות לתרומה ייעודית שהעמיד לשם כך מר <b>יעקב ג'קי חנדלי ז'ל</b> ניצול השואה יליד סלוניקי, ואחד מאלה שקולם תועד בכתובים בספר <b>בנתיבי שאול</b>. למן פרסום עדותו בספר, לא חדל מר יעקב ג'קי חנדלי ז'ל מלהביא את סיפורו בפני קהלים מגוונים, בארץ ומחוצה לה. הוא הפך סוכן תרבות של הסיפור היהודי-היווני בשואה, מתוך אמונה מלאה שעשייתו היא יד ושם לזכר הנספים מבני קהילתו. דאגתו להנחלת סיפור קורותיה של יהדות יוון בשואה לדורות הבאים מעוררת השראה, ואנו מלאי תודה לו ולבני משפחתו.

<h3>תודה למי שתרמו לפיתוח האפליקציה:</h3>
<ul style="list-style-type:circle;">
<li>פרופ' שמואל רפאל – היוזם והמפתח של המפעל;
<li>ליאת רובינשטיין האמונה על התכנים ועל הדרכות שטח ביוון ובפולין;
<li>חיה אלחיני עורכת הלשון;
<li>עמוס נשר על פיתוח קוד האפליקציה;
<li>מאיר יהונתן קופרק שסייע לשפר את איכות הקול של קטעי השמע שבחרנו לצורך האפליקציה;
<li>גילי מילר ולילי אזר שעיצבו את האפליקציה;
<li>ינק יונטף על תרומת הפונט לאפליקציה;
<li>זיו בירר שניהל את המיזם;
</ul>
<p>התצלומים באפליקציה: צוות מכון סלטי לחקר הלאדינו באוניברסיטת בר-אילן ומשתתפי המסעות "מיוון לפולין - מסע בעקבות דוברי הלאדינו בשואה" ©
<h3>על תרומתם לקידום הפרויקט יבואו על הברכה:</h3>
<ul style="list-style-type:circle;">
<li>דפנה יצחקי וד''ר שלמה חנדלי לזכר הוריהם רחל וג'קי חנדלי ז''ל
<li>מר יעקב אלעד
<li>גב' ניבי גומל לזכרו של המנוח יוסי גומל ז"ל
<li>מר אליעד כהן
<li>מר אהרון סולימה
<li>גב' דליה ומר דובי פלורנטין
<li>פרופ' רויטל ופרופ' שמואל רפאל
<li>מר צדיק רפאל לזכרו של המנוח חיים רפאל ז"ל
<li>מר אלי פדידה
</ul>

<p><img src="assets/imgs/machon_salti_logo.jpg" class="center"></p>

`;


/***/ }),

/***/ "i4mW":
/*!**************************************************!*\
  !*** ./src/app/pages/communities/communities.ts ***!
  \**************************************************/
/*! exports provided: CommunitiesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitiesPage", function() { return CommunitiesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_communities_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./communities.html */ "1pba");
/* harmony import */ var _communities_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./communities.scss */ "Cw/w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_eduyot_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/eduyot.service */ "vCfe");
/* harmony import */ var _services_data_about_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/about.data */ "Q/xc");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







/**
 * Generated class for the CommunitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let CommunitiesPage = class CommunitiesPage {
    constructor(navCtrl, eduyotService) {
        this.navCtrl = navCtrl;
        this.eduyotService = eduyotService;
        this.readMore = false;
        this.about = _services_data_about_data__WEBPACK_IMPORTED_MODULE_5__["ABOUT"];
        this.appDescr = _services_data_about_data__WEBPACK_IMPORTED_MODULE_5__["APP_SHORT_DESCRIPTION"];
        this.personImages = this.eduyotService.getRandomPersons(4);
    }
    ionViewDidLoad() {
    }
    get communities() {
        return this.eduyotService.getCommunities();
    }
    get camps() {
        return this.eduyotService.getCamps();
    }
    openCommunity(community) {
        if (community.subtitles.length > 0) {
            if (community.categoryView) {
                this.navCtrl.navigateForward('/subtitle-category', { state: { community } });
            }
            else {
                this.navCtrl.navigateForward('/playback-list', { state: { community } });
            }
        }
        else {
            this.navCtrl.navigateForward('/community-info', { state: { community } });
        }
    }
    doReadMore() {
        this.readMore = !this.readMore;
        // @ts-ignore
        this.content.scrollToTop();
    }
    getPersonImage(person) {
        return "assets/persons-imgs/" + person.image;
    }
    gotoPerson(person) {
        this.navCtrl.navigateForward('/person', { state: { person } });
    }
};
CommunitiesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _services_eduyot_service__WEBPACK_IMPORTED_MODULE_4__["EduyotService"] }
];
CommunitiesPage.propDecorators = {
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["content",] }]
};
CommunitiesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-communities',
        template: _raw_loader_communities_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_communities_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CommunitiesPage);



/***/ }),

/***/ "qHU6":
/*!*********************************************************!*\
  !*** ./src/app/pages/communities/communities.module.ts ***!
  \*********************************************************/
/*! exports provided: CommunitiesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunitiesPageModule", function() { return CommunitiesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _communities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./communities */ "i4mW");








let CommunitiesPageModule = class CommunitiesPageModule {
};
CommunitiesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                {
                    path: '',
                    component: _communities__WEBPACK_IMPORTED_MODULE_7__["CommunitiesPage"]
                }
            ]),
            _components_components_module__WEBPACK_IMPORTED_MODULE_1__["ComponentsModule"]
        ],
        declarations: [_communities__WEBPACK_IMPORTED_MODULE_7__["CommunitiesPage"]]
    })
], CommunitiesPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-communities-communities-module.js.map