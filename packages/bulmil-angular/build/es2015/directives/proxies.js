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
export const proxyInputs = (/**
 * @param {?} Cmp
 * @param {?} inputs
 * @return {?}
 */
(Cmp, inputs) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    inputs.forEach((/**
     * @param {?} item
     * @return {?}
     */
    item => {
        Object.defineProperty(Prototype, item, {
            /**
             * @return {?}
             */
            get() { return this.el[item]; },
            /**
             * @param {?} val
             * @return {?}
             */
            set(val) { this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => (this.el[item] = val))); }
        });
    }));
});
/** @type {?} */
export const proxyMethods = (/**
 * @param {?} Cmp
 * @param {?} methods
 * @return {?}
 */
(Cmp, methods) => {
    /** @type {?} */
    const Prototype = Cmp.prototype;
    methods.forEach((/**
     * @param {?} methodName
     * @return {?}
     */
    methodName => {
        Prototype[methodName] = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            const args = arguments;
            return this.z.runOutsideAngular((/**
             * @return {?}
             */
            () => this.el[methodName].apply(this.el, args)));
        });
    }));
});
/** @type {?} */
export const proxyOutputs = (/**
 * @param {?} instance
 * @param {?} el
 * @param {?} events
 * @return {?}
 */
(instance, el, events) => {
    events.forEach((/**
     * @param {?} eventName
     * @return {?}
     */
    eventName => instance[eventName] = fromEvent(el, eventName)));
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
    const decorator = (/**
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
let BmBox = class BmBox {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmBox.decorators = [
    { type: Component, args: [{ selector: 'bm-box', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmBox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmBox = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmBox);
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
let BmBreadcrumb = class BmBreadcrumb {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmBreadcrumb.decorators = [
    { type: Component, args: [{ selector: 'bm-breadcrumb', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'separator', 'size'] },] },
];
/** @nocollapse */
BmBreadcrumb.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmBreadcrumb = tslib_1.__decorate([
    ProxyCmp({ inputs: ['alignment', 'class', 'separator', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmBreadcrumb);
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
let BmButton = class BmButton {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmButton.decorators = [
    { type: Component, args: [{ selector: 'bm-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size'] },] },
];
/** @nocollapse */
BmButton.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmButton = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmButton);
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
let BmButtons = class BmButtons {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmButtons.decorators = [
    { type: Component, args: [{ selector: 'bm-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
];
/** @nocollapse */
BmButtons.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmButtons = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmButtons);
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
let BmCard = class BmCard {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmCard.decorators = [
    { type: Component, args: [{ selector: 'bm-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmCard.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmCard = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmCard);
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
let BmCardContent = class BmCardContent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmCardContent.decorators = [
    { type: Component, args: [{ selector: 'bm-card-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmCardContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmCardContent = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmCardContent);
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
let BmCardFooter = class BmCardFooter {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmCardFooter.decorators = [
    { type: Component, args: [{ selector: 'bm-card-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmCardFooter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmCardFooter = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmCardFooter);
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
let BmCardHeader = class BmCardHeader {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmCardHeader.decorators = [
    { type: Component, args: [{ selector: 'bm-card-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmCardHeader.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmCardHeader = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmCardHeader);
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
let BmCardImage = class BmCardImage {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmCardImage.decorators = [
    { type: Component, args: [{ selector: 'bm-card-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmCardImage.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmCardImage = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmCardImage);
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
let BmCheckbox = class BmCheckbox {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmCheckbox.decorators = [
    { type: Component, args: [{ selector: 'bm-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'disabled', 'labelClass'] },] },
];
/** @nocollapse */
BmCheckbox.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmCheckbox = tslib_1.__decorate([
    ProxyCmp({ inputs: ['checked', 'class', 'disabled', 'labelClass'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmCheckbox);
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
let BmColumn = class BmColumn {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmColumn.decorators = [
    { type: Component, args: [{ selector: 'bm-column', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isNarrow', 'sizes'] },] },
];
/** @nocollapse */
BmColumn.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmColumn = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'isNarrow', 'sizes'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmColumn);
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
let BmColumns = class BmColumns {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmColumns.decorators = [
    { type: Component, args: [{ selector: 'bm-columns', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered'] },] },
];
/** @nocollapse */
BmColumns.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmColumns = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmColumns);
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
let BmContainer = class BmContainer {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmContainer.decorators = [
    { type: Component, args: [{ selector: 'bm-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['breakpoint', 'class', 'isFluid'] },] },
];
/** @nocollapse */
BmContainer.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmContainer = tslib_1.__decorate([
    ProxyCmp({ inputs: ['breakpoint', 'class', 'isFluid'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmContainer);
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
let BmContent = class BmContent {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmContent.decorators = [
    { type: Component, args: [{ selector: 'bm-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
];
/** @nocollapse */
BmContent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmContent = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmContent);
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
let BmDivider = class BmDivider {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmDivider.decorators = [
    { type: Component, args: [{ selector: 'bm-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'content', 'orientation'] },] },
];
/** @nocollapse */
BmDivider.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmDivider = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'content', 'orientation'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmDivider);
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
let BmDropdown = class BmDropdown {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmDropdown.decorators = [
    { type: Component, args: [{ selector: 'bm-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isActive', 'isHoverable', 'isRight', 'isUp'] },] },
];
/** @nocollapse */
BmDropdown.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmDropdown = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'isActive', 'isHoverable', 'isRight', 'isUp'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmDropdown);
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
let BmField = class BmField {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmField.decorators = [
    { type: Component, args: [{ selector: 'bm-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size'] },] },
];
/** @nocollapse */
BmField.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmField = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmField);
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
let BmFile = class BmFile {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmFile.decorators = [
    { type: Component, args: [{ selector: 'bm-file', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size'] },] },
];
/** @nocollapse */
BmFile.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmFile = tslib_1.__decorate([
    ProxyCmp({ inputs: ['alignment', 'class', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmFile);
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
let BmFooter = class BmFooter {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmFooter.decorators = [
    { type: Component, args: [{ selector: 'bm-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmFooter.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmFooter = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmFooter);
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
let BmIcon = class BmIcon {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmIcon.decorators = [
    { type: Component, args: [{ selector: 'bm-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'size'] },] },
];
/** @nocollapse */
BmIcon.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmIcon = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmIcon);
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
let BmImage = class BmImage {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmImage.decorators = [
    { type: Component, args: [{ selector: 'bm-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
];
/** @nocollapse */
BmImage.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmImage = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmImage);
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
let BmInput = class BmInput {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmInput.decorators = [
    { type: Component, args: [{ selector: 'bm-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value'] },] },
];
/** @nocollapse */
BmInput.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmInput = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmInput);
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
let BmMenu = class BmMenu {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmMenu.decorators = [
    { type: Component, args: [{ selector: 'bm-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] },] },
];
/** @nocollapse */
BmMenu.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmMenu = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmMenu);
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
let BmMessage = class BmMessage {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmMessage.decorators = [
    { type: Component, args: [{ selector: 'bm-message', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'size'] },] },
];
/** @nocollapse */
BmMessage.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmMessage = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmMessage);
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
let BmModal = class BmModal {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmModal.decorators = [
    { type: Component, args: [{ selector: 'bm-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasModalCard', 'isActive'] },] },
];
/** @nocollapse */
BmModal.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmModal = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'hasModalCard', 'isActive'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmModal);
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
let BmNavbar = class BmNavbar {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmNavbar.decorators = [
    { type: Component, args: [{ selector: 'bm-navbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'fixedPosition', 'isSpaced', 'isTransparent'] },] },
];
/** @nocollapse */
BmNavbar.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmNavbar = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'fixedPosition', 'isSpaced', 'isTransparent'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmNavbar);
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
let BmNotification = class BmNotification {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmNotification.decorators = [
    { type: Component, args: [{ selector: 'bm-notification', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'dismissable'] },] },
];
/** @nocollapse */
BmNotification.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmNotification = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'dismissable'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmNotification);
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
let BmPagination = class BmPagination {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmPagination.decorators = [
    { type: Component, args: [{ selector: 'bm-pagination', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'isRounded', 'size'] },] },
];
/** @nocollapse */
BmPagination.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmPagination = tslib_1.__decorate([
    ProxyCmp({ inputs: ['alignment', 'class', 'isRounded', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmPagination);
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
let BmPanel = class BmPanel {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmPanel.decorators = [
    { type: Component, args: [{ selector: 'bm-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color'] },] },
];
/** @nocollapse */
BmPanel.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmPanel = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmPanel);
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
let BmProgress = class BmProgress {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmProgress.decorators = [
    { type: Component, args: [{ selector: 'bm-progress', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'max', 'size', 'value'] },] },
];
/** @nocollapse */
BmProgress.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmProgress = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'max', 'size', 'value'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmProgress);
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
let BmRadio = class BmRadio {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmRadio.decorators = [
    { type: Component, args: [{ selector: 'bm-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'disabled', 'labelClass', 'name'] },] },
];
/** @nocollapse */
BmRadio.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmRadio = tslib_1.__decorate([
    ProxyCmp({ inputs: ['checked', 'class', 'disabled', 'labelClass', 'name'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmRadio);
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
let BmSection = class BmSection {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmSection.decorators = [
    { type: Component, args: [{ selector: 'bm-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] },] },
];
/** @nocollapse */
BmSection.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmSection = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmSection);
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
let BmSelect = class BmSelect {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmSelect.decorators = [
    { type: Component, args: [{ selector: 'bm-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state', 'value'] },] },
];
/** @nocollapse */
BmSelect.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmSelect = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state', 'value'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmSelect);
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
let BmSwitch = class BmSwitch {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmSwitch.decorators = [
    { type: Component, args: [{ selector: 'bm-switch', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size'] },] },
];
/** @nocollapse */
BmSwitch.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmSwitch = tslib_1.__decorate([
    ProxyCmp({ inputs: ['checked', 'class', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmSwitch);
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
let BmTable = class BmTable {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmTable.decorators = [
    { type: Component, args: [{ selector: 'bm-table', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped'] },] },
];
/** @nocollapse */
BmTable.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmTable = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmTable);
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
let BmTabs = class BmTabs {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmTabs.decorators = [
    { type: Component, args: [{ selector: 'bm-tabs', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'isFullwidth', 'isRounded', 'size', 'tabStyle'] },] },
];
/** @nocollapse */
BmTabs.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmTabs = tslib_1.__decorate([
    ProxyCmp({ inputs: ['alignment', 'class', 'isFullwidth', 'isRounded', 'size', 'tabStyle'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmTabs);
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
let BmTag = class BmTag {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmTag.decorators = [
    { type: Component, args: [{ selector: 'bm-tag', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'modifier', 'size', 'tag'] },] },
];
/** @nocollapse */
BmTag.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmTag = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'modifier', 'size', 'tag'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmTag);
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
let BmTags = class BmTags {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmTags.decorators = [
    { type: Component, args: [{ selector: 'bm-tags', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasAddons', 'size'] },] },
];
/** @nocollapse */
BmTags.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmTags = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'hasAddons', 'size'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmTags);
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
let BmTextarea = class BmTextarea {
    /**
     * @param {?} c
     * @param {?} r
     * @param {?} z
     */
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
};
BmTextarea.decorators = [
    { type: Component, args: [{ selector: 'bm-textarea', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value'] },] },
];
/** @nocollapse */
BmTextarea.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: NgZone }
];
BmTextarea = tslib_1.__decorate([
    ProxyCmp({ inputs: ['class', 'color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value'] }),
    tslib_1.__metadata("design:paramtypes", [ChangeDetectorRef, ElementRef, NgZone])
], BmTextarea);
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
