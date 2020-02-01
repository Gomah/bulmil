/**
 * @fileoverview added by tsickle
 * Generated from: directives/proxies.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';
/** @type {?} */
export var proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
function (Cmp, inputs) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        Object.defineProperty(Prototype, item, {
            get: /**
             * @return {?}
             */
            function () { return this.el[item]; },
            set: /**
             * @param {?} val
             * @return {?}
             */
            function (val) {
                var _this = this;
                this.z.runOutsideAngular((/**
                 * @return {?}
                 */
                function () { return (_this.el[item] = val); }));
            }
        });
    }));
});
/** @type {?} */
export var proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
function (Cmp, methods) {
    /** @type {?} */
    var Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    function (methodName) {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.el[methodName].apply(_this.el, args); }));
        });
    }));
});
/** @type {?} */
export var proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
function (instance, el, events) {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) { return instance[eventName] = fromEvent(el, eventName); }));
})
// tslint:disable-next-line: only-arrow-functions
;
// tslint:disable-next-line: only-arrow-functions
/**
 * @param {?} opts
 * @return {?}
 */
export function ProxyCmp(opts) {
    /** @type {?} */
    var decorator = (/**
     * @param {?} cls
     * @return {?}
     */
    function (cls) {
        if (opts.inputs) {
            proxyInputs(cls, opts.inputs);
        }
        if (opts.methods) {
            proxyMethods(cls, opts.methods);
        }
        return cls;
    });
    return decorator;
}
var BmBox = /** @class */ (function () {
    function BmBox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmBox.decorators = [
        { type: Component, args: [{ selector: 'bm-box', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmBox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmBox = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmBox);
    return BmBox;
}());
export { BmBox };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmBox.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmBox.prototype.z;
}
var BmBreadcrumb = /** @class */ (function () {
    function BmBreadcrumb(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmBreadcrumb.decorators = [
        { type: Component, args: [{ selector: 'bm-breadcrumb', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'separator', 'size'] },] },
    ];
    /** @nocollapse */
    BmBreadcrumb.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmBreadcrumb = tslib_1.__decorate([
        ProxyCmp({ inputs: ['alignment', 'class', 'separator', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmBreadcrumb);
    return BmBreadcrumb;
}());
export { BmBreadcrumb };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmBreadcrumb.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmBreadcrumb.prototype.z;
}
var BmButton = /** @class */ (function () {
    function BmButton(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmButton.decorators = [
        { type: Component, args: [{ selector: 'bm-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size'] },] },
    ];
    /** @nocollapse */
    BmButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmButton = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmButton);
    return BmButton;
}());
export { BmButton };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmButton.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmButton.prototype.z;
}
var BmButtons = /** @class */ (function () {
    function BmButtons(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmButtons.decorators = [
        { type: Component, args: [{ selector: 'bm-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
    ];
    /** @nocollapse */
    BmButtons.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmButtons = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmButtons);
    return BmButtons;
}());
export { BmButtons };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmButtons.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmButtons.prototype.z;
}
var BmCard = /** @class */ (function () {
    function BmCard(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmCard.decorators = [
        { type: Component, args: [{ selector: 'bm-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmCard.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmCard = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmCard);
    return BmCard;
}());
export { BmCard };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmCard.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmCard.prototype.z;
}
var BmCardContent = /** @class */ (function () {
    function BmCardContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmCardContent.decorators = [
        { type: Component, args: [{ selector: 'bm-card-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmCardContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmCardContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmCardContent);
    return BmCardContent;
}());
export { BmCardContent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmCardContent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmCardContent.prototype.z;
}
var BmCardFooter = /** @class */ (function () {
    function BmCardFooter(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmCardFooter.decorators = [
        { type: Component, args: [{ selector: 'bm-card-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmCardFooter.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmCardFooter = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmCardFooter);
    return BmCardFooter;
}());
export { BmCardFooter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmCardFooter.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmCardFooter.prototype.z;
}
var BmCardHeader = /** @class */ (function () {
    function BmCardHeader(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmCardHeader.decorators = [
        { type: Component, args: [{ selector: 'bm-card-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmCardHeader.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmCardHeader = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmCardHeader);
    return BmCardHeader;
}());
export { BmCardHeader };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmCardHeader.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmCardHeader.prototype.z;
}
var BmCardImage = /** @class */ (function () {
    function BmCardImage(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmCardImage.decorators = [
        { type: Component, args: [{ selector: 'bm-card-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmCardImage.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmCardImage = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmCardImage);
    return BmCardImage;
}());
export { BmCardImage };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmCardImage.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmCardImage.prototype.z;
}
var BmCheckbox = /** @class */ (function () {
    function BmCheckbox(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmCheckbox.decorators = [
        { type: Component, args: [{ selector: 'bm-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'disabled', 'labelClass'] },] },
    ];
    /** @nocollapse */
    BmCheckbox.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmCheckbox = tslib_1.__decorate([
        ProxyCmp({ inputs: ['checked', 'class', 'disabled', 'labelClass'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmCheckbox);
    return BmCheckbox;
}());
export { BmCheckbox };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmCheckbox.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmCheckbox.prototype.z;
}
var BmColumn = /** @class */ (function () {
    function BmColumn(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmColumn.decorators = [
        { type: Component, args: [{ selector: 'bm-column', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isNarrow', 'sizes'] },] },
    ];
    /** @nocollapse */
    BmColumn.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmColumn = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'isNarrow', 'sizes'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmColumn);
    return BmColumn;
}());
export { BmColumn };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmColumn.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmColumn.prototype.z;
}
var BmColumns = /** @class */ (function () {
    function BmColumns(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmColumns.decorators = [
        { type: Component, args: [{ selector: 'bm-columns', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered'] },] },
    ];
    /** @nocollapse */
    BmColumns.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmColumns = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmColumns);
    return BmColumns;
}());
export { BmColumns };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmColumns.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmColumns.prototype.z;
}
var BmContainer = /** @class */ (function () {
    function BmContainer(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmContainer.decorators = [
        { type: Component, args: [{ selector: 'bm-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['breakpoint', 'class', 'isFluid'] },] },
    ];
    /** @nocollapse */
    BmContainer.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmContainer = tslib_1.__decorate([
        ProxyCmp({ inputs: ['breakpoint', 'class', 'isFluid'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmContainer);
    return BmContainer;
}());
export { BmContainer };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmContainer.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmContainer.prototype.z;
}
var BmContent = /** @class */ (function () {
    function BmContent(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmContent.decorators = [
        { type: Component, args: [{ selector: 'bm-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
    ];
    /** @nocollapse */
    BmContent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmContent = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmContent);
    return BmContent;
}());
export { BmContent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmContent.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmContent.prototype.z;
}
var BmDivider = /** @class */ (function () {
    function BmDivider(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmDivider.decorators = [
        { type: Component, args: [{ selector: 'bm-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'content', 'orientation'] },] },
    ];
    /** @nocollapse */
    BmDivider.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmDivider = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'content', 'orientation'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmDivider);
    return BmDivider;
}());
export { BmDivider };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmDivider.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmDivider.prototype.z;
}
var BmDropdown = /** @class */ (function () {
    function BmDropdown(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmDropdown.decorators = [
        { type: Component, args: [{ selector: 'bm-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isActive', 'isHoverable', 'isRight', 'isUp'] },] },
    ];
    /** @nocollapse */
    BmDropdown.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmDropdown = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'isActive', 'isHoverable', 'isRight', 'isUp'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmDropdown);
    return BmDropdown;
}());
export { BmDropdown };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmDropdown.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmDropdown.prototype.z;
}
var BmField = /** @class */ (function () {
    function BmField(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmField.decorators = [
        { type: Component, args: [{ selector: 'bm-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size'] },] },
    ];
    /** @nocollapse */
    BmField.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmField = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmField);
    return BmField;
}());
export { BmField };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmField.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmField.prototype.z;
}
var BmFile = /** @class */ (function () {
    function BmFile(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmFile.decorators = [
        { type: Component, args: [{ selector: 'bm-file', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size'] },] },
    ];
    /** @nocollapse */
    BmFile.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmFile = tslib_1.__decorate([
        ProxyCmp({ inputs: ['alignment', 'class', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmFile);
    return BmFile;
}());
export { BmFile };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmFile.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmFile.prototype.z;
}
var BmFooter = /** @class */ (function () {
    function BmFooter(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmFooter.decorators = [
        { type: Component, args: [{ selector: 'bm-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmFooter.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmFooter = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmFooter);
    return BmFooter;
}());
export { BmFooter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmFooter.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmFooter.prototype.z;
}
var BmIcon = /** @class */ (function () {
    function BmIcon(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmIcon.decorators = [
        { type: Component, args: [{ selector: 'bm-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'size'] },] },
    ];
    /** @nocollapse */
    BmIcon.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmIcon = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmIcon);
    return BmIcon;
}());
export { BmIcon };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmIcon.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmIcon.prototype.z;
}
var BmImage = /** @class */ (function () {
    function BmImage(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmImage.decorators = [
        { type: Component, args: [{ selector: 'bm-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
    ];
    /** @nocollapse */
    BmImage.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmImage = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmImage);
    return BmImage;
}());
export { BmImage };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmImage.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmImage.prototype.z;
}
var BmInput = /** @class */ (function () {
    function BmInput(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmInput.decorators = [
        { type: Component, args: [{ selector: 'bm-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value'] },] },
    ];
    /** @nocollapse */
    BmInput.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmInput = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmInput);
    return BmInput;
}());
export { BmInput };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmInput.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmInput.prototype.z;
}
var BmMenu = /** @class */ (function () {
    function BmMenu(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmMenu.decorators = [
        { type: Component, args: [{ selector: 'bm-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
    ];
    /** @nocollapse */
    BmMenu.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmMenu = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmMenu);
    return BmMenu;
}());
export { BmMenu };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmMenu.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmMenu.prototype.z;
}
var BmMessage = /** @class */ (function () {
    function BmMessage(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmMessage.decorators = [
        { type: Component, args: [{ selector: 'bm-message', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'size'] },] },
    ];
    /** @nocollapse */
    BmMessage.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmMessage = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmMessage);
    return BmMessage;
}());
export { BmMessage };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmMessage.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmMessage.prototype.z;
}
var BmModal = /** @class */ (function () {
    function BmModal(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmModal.decorators = [
        { type: Component, args: [{ selector: 'bm-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasModalCard', 'isActive'] },] },
    ];
    /** @nocollapse */
    BmModal.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmModal = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'hasModalCard', 'isActive'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmModal);
    return BmModal;
}());
export { BmModal };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmModal.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmModal.prototype.z;
}
var BmNavbar = /** @class */ (function () {
    function BmNavbar(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmNavbar.decorators = [
        { type: Component, args: [{ selector: 'bm-navbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'fixedPosition', 'isSpaced', 'isTransparent'] },] },
    ];
    /** @nocollapse */
    BmNavbar.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmNavbar = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'fixedPosition', 'isSpaced', 'isTransparent'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmNavbar);
    return BmNavbar;
}());
export { BmNavbar };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmNavbar.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmNavbar.prototype.z;
}
var BmNotification = /** @class */ (function () {
    function BmNotification(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmNotification.decorators = [
        { type: Component, args: [{ selector: 'bm-notification', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'dismissable'] },] },
    ];
    /** @nocollapse */
    BmNotification.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmNotification = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'dismissable'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmNotification);
    return BmNotification;
}());
export { BmNotification };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmNotification.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmNotification.prototype.z;
}
var BmPagination = /** @class */ (function () {
    function BmPagination(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmPagination.decorators = [
        { type: Component, args: [{ selector: 'bm-pagination', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'isRounded', 'size'] },] },
    ];
    /** @nocollapse */
    BmPagination.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmPagination = tslib_1.__decorate([
        ProxyCmp({ inputs: ['alignment', 'class', 'isRounded', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmPagination);
    return BmPagination;
}());
export { BmPagination };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmPagination.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmPagination.prototype.z;
}
var BmPanel = /** @class */ (function () {
    function BmPanel(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmPanel.decorators = [
        { type: Component, args: [{ selector: 'bm-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color'] },] },
    ];
    /** @nocollapse */
    BmPanel.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmPanel = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmPanel);
    return BmPanel;
}());
export { BmPanel };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmPanel.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmPanel.prototype.z;
}
var BmProgress = /** @class */ (function () {
    function BmProgress(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmProgress.decorators = [
        { type: Component, args: [{ selector: 'bm-progress', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'max', 'size', 'value'] },] },
    ];
    /** @nocollapse */
    BmProgress.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmProgress = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'max', 'size', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmProgress);
    return BmProgress;
}());
export { BmProgress };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmProgress.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmProgress.prototype.z;
}
var BmRadio = /** @class */ (function () {
    function BmRadio(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmRadio.decorators = [
        { type: Component, args: [{ selector: 'bm-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'disabled', 'labelClass', 'name'] },] },
    ];
    /** @nocollapse */
    BmRadio.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmRadio = tslib_1.__decorate([
        ProxyCmp({ inputs: ['checked', 'class', 'disabled', 'labelClass', 'name'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmRadio);
    return BmRadio;
}());
export { BmRadio };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmRadio.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmRadio.prototype.z;
}
var BmSection = /** @class */ (function () {
    function BmSection(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmSection.decorators = [
        { type: Component, args: [{ selector: 'bm-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
    ];
    /** @nocollapse */
    BmSection.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmSection = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmSection);
    return BmSection;
}());
export { BmSection };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmSection.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmSection.prototype.z;
}
var BmSelect = /** @class */ (function () {
    function BmSelect(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmSelect.decorators = [
        { type: Component, args: [{ selector: 'bm-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state', 'value'] },] },
    ];
    /** @nocollapse */
    BmSelect.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmSelect = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmSelect);
    return BmSelect;
}());
export { BmSelect };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmSelect.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmSelect.prototype.z;
}
var BmSwitch = /** @class */ (function () {
    function BmSwitch(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmSwitch.decorators = [
        { type: Component, args: [{ selector: 'bm-switch', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size'] },] },
    ];
    /** @nocollapse */
    BmSwitch.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmSwitch = tslib_1.__decorate([
        ProxyCmp({ inputs: ['checked', 'class', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmSwitch);
    return BmSwitch;
}());
export { BmSwitch };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmSwitch.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmSwitch.prototype.z;
}
var BmTable = /** @class */ (function () {
    function BmTable(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmTable.decorators = [
        { type: Component, args: [{ selector: 'bm-table', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped'] },] },
    ];
    /** @nocollapse */
    BmTable.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmTable = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmTable);
    return BmTable;
}());
export { BmTable };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmTable.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmTable.prototype.z;
}
var BmTabs = /** @class */ (function () {
    function BmTabs(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmTabs.decorators = [
        { type: Component, args: [{ selector: 'bm-tabs', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'isFullwidth', 'isRounded', 'size', 'tabStyle'] },] },
    ];
    /** @nocollapse */
    BmTabs.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmTabs = tslib_1.__decorate([
        ProxyCmp({ inputs: ['alignment', 'class', 'isFullwidth', 'isRounded', 'size', 'tabStyle'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmTabs);
    return BmTabs;
}());
export { BmTabs };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmTabs.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmTabs.prototype.z;
}
var BmTag = /** @class */ (function () {
    function BmTag(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmTag.decorators = [
        { type: Component, args: [{ selector: 'bm-tag', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'modifier', 'size', 'tag'] },] },
    ];
    /** @nocollapse */
    BmTag.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmTag = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'modifier', 'size', 'tag'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmTag);
    return BmTag;
}());
export { BmTag };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmTag.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmTag.prototype.z;
}
var BmTags = /** @class */ (function () {
    function BmTags(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmTags.decorators = [
        { type: Component, args: [{ selector: 'bm-tags', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasAddons', 'size'] },] },
    ];
    /** @nocollapse */
    BmTags.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmTags = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'hasAddons', 'size'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmTags);
    return BmTags;
}());
export { BmTags };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmTags.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmTags.prototype.z;
}
var BmTextarea = /** @class */ (function () {
    function BmTextarea(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    BmTextarea.decorators = [
        { type: Component, args: [{ selector: 'bm-textarea', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value'] },] },
    ];
    /** @nocollapse */
    BmTextarea.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: NgZone }
    ]; };
    BmTextarea = tslib_1.__decorate([
        ProxyCmp({ inputs: ['class', 'color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value'] }),
        tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
    ], BmTextarea);
    return BmTextarea;
}());
export { BmTextarea };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    BmTextarea.prototype.el;
    /**
     * @type {?}
     * @protected
     */
    BmTextarea.prototype.z;
}
