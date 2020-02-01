/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { fromEvent } from 'rxjs';

export const proxyInputs = (Cmp: any, inputs: string[]) => {
  const Prototype = Cmp.prototype;
  inputs.forEach(item => {
    Object.defineProperty(Prototype, item, {
      get() { return this.el[item]; },
      set(val: any) { this.z.runOutsideAngular(() => (this.el[item] = val)); }
    });
  });
};

export const proxyMethods = (Cmp: any, methods: string[]) => {
  const Prototype = Cmp.prototype;
  methods.forEach(methodName => {
    Prototype[methodName] = function () {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};

export const proxyOutputs = (instance: any, el: any, events: string[]) => {
  events.forEach(eventName => instance[eventName] = fromEvent(el, eventName));
}

// tslint:disable-next-line: only-arrow-functions
export function ProxyCmp(opts: { inputs?: any; methods?: any }) {
  const decorator =  function(cls: any){
    if (opts.inputs) {
      proxyInputs(cls, opts.inputs);
    }
    if (opts.methods) {
      proxyMethods(cls, opts.methods);
    }
    return cls;
  };
  return decorator;
}

import { Components } from 'bulmil'

export declare interface BmBox extends Components.BmBox {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-box', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmBreadcrumb extends Components.BmBreadcrumb {}
@ProxyCmp({inputs: ['alignment', 'class', 'separator', 'size']})
@Component({ selector: 'bm-breadcrumb', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'separator', 'size'] })
export class BmBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmButton extends Components.BmButton {}
@ProxyCmp({inputs: ['class', 'color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size']})
@Component({ selector: 'bm-button', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size'] })
export class BmButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmButtons extends Components.BmButtons {}
@ProxyCmp({inputs: ['class', 'size']})
@Component({ selector: 'bm-buttons', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] })
export class BmButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmCard extends Components.BmCard {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-card', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmCardContent extends Components.BmCardContent {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-card-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmCardFooter extends Components.BmCardFooter {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-card-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmCardFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmCardHeader extends Components.BmCardHeader {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-card-header', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmCardImage extends Components.BmCardImage {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-card-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmCardImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmCheckbox extends Components.BmCheckbox {}
@ProxyCmp({inputs: ['checked', 'class', 'disabled', 'labelClass']})
@Component({ selector: 'bm-checkbox', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'disabled', 'labelClass'] })
export class BmCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmColumn extends Components.BmColumn {}
@ProxyCmp({inputs: ['class', 'isNarrow', 'sizes']})
@Component({ selector: 'bm-column', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isNarrow', 'sizes'] })
export class BmColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmColumns extends Components.BmColumns {}
@ProxyCmp({inputs: ['class', 'gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered']})
@Component({ selector: 'bm-columns', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered'] })
export class BmColumns {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmContainer extends Components.BmContainer {}
@ProxyCmp({inputs: ['breakpoint', 'class', 'isFluid']})
@Component({ selector: 'bm-container', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['breakpoint', 'class', 'isFluid'] })
export class BmContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmContent extends Components.BmContent {}
@ProxyCmp({inputs: ['class', 'size']})
@Component({ selector: 'bm-content', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] })
export class BmContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmDivider extends Components.BmDivider {}
@ProxyCmp({inputs: ['class', 'content', 'orientation']})
@Component({ selector: 'bm-divider', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'content', 'orientation'] })
export class BmDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmDropdown extends Components.BmDropdown {}
@ProxyCmp({inputs: ['class', 'isActive', 'isHoverable', 'isRight', 'isUp']})
@Component({ selector: 'bm-dropdown', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isActive', 'isHoverable', 'isRight', 'isUp'] })
export class BmDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmField extends Components.BmField {}
@ProxyCmp({inputs: ['class', 'hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size']})
@Component({ selector: 'bm-field', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size'] })
export class BmField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmFile extends Components.BmFile {}
@ProxyCmp({inputs: ['alignment', 'class', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size']})
@Component({ selector: 'bm-file', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size'] })
export class BmFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmFooter extends Components.BmFooter {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-footer', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmIcon extends Components.BmIcon {}
@ProxyCmp({inputs: ['class', 'color', 'size']})
@Component({ selector: 'bm-icon', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'size'] })
export class BmIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmImage extends Components.BmImage {}
@ProxyCmp({inputs: ['class', 'size']})
@Component({ selector: 'bm-image', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] })
export class BmImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmInput extends Components.BmInput {}
@ProxyCmp({inputs: ['class', 'color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value']})
@Component({ selector: 'bm-input', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value'] })
export class BmInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmMenu extends Components.BmMenu {}
@ProxyCmp({inputs: ['class']})
@Component({ selector: 'bm-menu', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class'] })
export class BmMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmMessage extends Components.BmMessage {}
@ProxyCmp({inputs: ['class', 'color', 'size']})
@Component({ selector: 'bm-message', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'size'] })
export class BmMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmModal extends Components.BmModal {}
@ProxyCmp({inputs: ['class', 'hasModalCard', 'isActive']})
@Component({ selector: 'bm-modal', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasModalCard', 'isActive'] })
export class BmModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmNavbar extends Components.BmNavbar {}
@ProxyCmp({inputs: ['class', 'color', 'fixedPosition', 'isSpaced', 'isTransparent']})
@Component({ selector: 'bm-navbar', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'fixedPosition', 'isSpaced', 'isTransparent'] })
export class BmNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmNotification extends Components.BmNotification {}
@ProxyCmp({inputs: ['class', 'color', 'dismissable']})
@Component({ selector: 'bm-notification', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'dismissable'] })
export class BmNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmPagination extends Components.BmPagination {}
@ProxyCmp({inputs: ['alignment', 'class', 'isRounded', 'size']})
@Component({ selector: 'bm-pagination', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'isRounded', 'size'] })
export class BmPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmPanel extends Components.BmPanel {}
@ProxyCmp({inputs: ['class', 'color']})
@Component({ selector: 'bm-panel', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color'] })
export class BmPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmProgress extends Components.BmProgress {}
@ProxyCmp({inputs: ['class', 'color', 'max', 'size', 'value']})
@Component({ selector: 'bm-progress', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'max', 'size', 'value'] })
export class BmProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmRadio extends Components.BmRadio {}
@ProxyCmp({inputs: ['checked', 'class', 'disabled', 'labelClass', 'name']})
@Component({ selector: 'bm-radio', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'disabled', 'labelClass', 'name'] })
export class BmRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmSection extends Components.BmSection {}
@ProxyCmp({inputs: ['class', 'size']})
@Component({ selector: 'bm-section', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'size'] })
export class BmSection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmSelect extends Components.BmSelect {}
@ProxyCmp({inputs: ['class', 'color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state', 'value']})
@Component({ selector: 'bm-select', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state', 'value'] })
export class BmSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmSwitch extends Components.BmSwitch {}
@ProxyCmp({inputs: ['checked', 'class', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size']})
@Component({ selector: 'bm-switch', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['checked', 'class', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size'] })
export class BmSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmTable extends Components.BmTable {}
@ProxyCmp({inputs: ['class', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped']})
@Component({ selector: 'bm-table', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped'] })
export class BmTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmTabs extends Components.BmTabs {}
@ProxyCmp({inputs: ['alignment', 'class', 'isFullwidth', 'isRounded', 'size', 'tabStyle']})
@Component({ selector: 'bm-tabs', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['alignment', 'class', 'isFullwidth', 'isRounded', 'size', 'tabStyle'] })
export class BmTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmTag extends Components.BmTag {}
@ProxyCmp({inputs: ['class', 'color', 'modifier', 'size', 'tag']})
@Component({ selector: 'bm-tag', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'modifier', 'size', 'tag'] })
export class BmTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmTags extends Components.BmTags {}
@ProxyCmp({inputs: ['class', 'hasAddons', 'size']})
@Component({ selector: 'bm-tags', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'hasAddons', 'size'] })
export class BmTags {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}

export declare interface BmTextarea extends Components.BmTextarea {}
@ProxyCmp({inputs: ['class', 'color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value']})
@Component({ selector: 'bm-textarea', changeDetection: ChangeDetectionStrategy.OnPush, template: '<ng-content></ng-content>', inputs: ['class', 'color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value'] })
export class BmTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
