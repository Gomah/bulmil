/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone } from '@angular/core';

import { ProxyCmp } from './angular-component-lib/utils';

import { Components } from '@bulmil/core';


@ProxyCmp({
  inputs: ['color', 'isLight', 'isOutlined', 'position']
})
@Component({
  selector: 'bm-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'isLight', 'isOutlined', 'position'],
})
export class BmBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmBadge extends Components.BmBadge {}


@ProxyCmp({
})
@Component({
  selector: 'bm-box',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmBox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmBox extends Components.BmBox {}


@ProxyCmp({
  inputs: ['alignment', 'separator', 'size']
})
@Component({
  selector: 'bm-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'separator', 'size'],
})
export class BmBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmBreadcrumb extends Components.BmBreadcrumb {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLight', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size']
})
@Component({
  selector: 'bm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'isActive', 'isFocused', 'isFullwidth', 'isHovered', 'isInverted', 'isLight', 'isLoading', 'isOutlined', 'isRounded', 'isStatic', 'size'],
})
export class BmButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmButton extends Components.BmButton {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bm-buttons',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class BmButtons {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmButtons extends Components.BmButtons {}


@ProxyCmp({
})
@Component({
  selector: 'bm-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmCard extends Components.BmCard {}


@ProxyCmp({
})
@Component({
  selector: 'bm-card-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmCardContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmCardContent extends Components.BmCardContent {}


@ProxyCmp({
})
@Component({
  selector: 'bm-card-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmCardFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmCardFooter extends Components.BmCardFooter {}


@ProxyCmp({
})
@Component({
  selector: 'bm-card-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmCardHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmCardHeader extends Components.BmCardHeader {}


@ProxyCmp({
})
@Component({
  selector: 'bm-card-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmCardImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmCardImage extends Components.BmCardImage {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'inputClass', 'labelClass']
})
@Component({
  selector: 'bm-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'inputClass', 'labelClass'],
})
export class BmCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmCheckbox extends Components.BmCheckbox {}


@ProxyCmp({
  inputs: ['isNarrow', 'sizes']
})
@Component({
  selector: 'bm-column',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isNarrow', 'sizes'],
})
export class BmColumn {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmColumn extends Components.BmColumn {}


@ProxyCmp({
  inputs: ['gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered']
})
@Component({
  selector: 'bm-columns',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['gaps', 'isCentered', 'isDesktop', 'isGapless', 'isMobile', 'isMultiline', 'isVcentered'],
})
export class BmColumns {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmColumns extends Components.BmColumns {}


@ProxyCmp({
  inputs: ['breakpoint', 'isFluid']
})
@Component({
  selector: 'bm-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['breakpoint', 'isFluid'],
})
export class BmContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmContainer extends Components.BmContainer {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bm-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class BmContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmContent extends Components.BmContent {}


@ProxyCmp({
  inputs: ['alignment', 'color', 'isLight', 'isVertical']
})
@Component({
  selector: 'bm-divider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'color', 'isLight', 'isVertical'],
})
export class BmDivider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmDivider extends Components.BmDivider {}


@ProxyCmp({
  inputs: ['isActive', 'isHoverable', 'isRight', 'isUp']
})
@Component({
  selector: 'bm-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isActive', 'isHoverable', 'isRight', 'isUp'],
})
export class BmDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmDropdown extends Components.BmDropdown {}


@ProxyCmp({
  inputs: ['hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size']
})
@Component({
  selector: 'bm-field',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasAddons', 'isGrouped', 'isGroupedMultiline', 'isHorizontal', 'label', 'message', 'size'],
})
export class BmField {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmField extends Components.BmField {}


@ProxyCmp({
  inputs: ['alignment', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size']
})
@Component({
  selector: 'bm-file',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'color', 'file', 'hasName', 'isBoxed', 'isFullwidth', 'isRight', 'name', 'placeholder', 'size'],
})
export class BmFile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmFile extends Components.BmFile {}


@ProxyCmp({
})
@Component({
  selector: 'bm-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmFooter extends Components.BmFooter {}


@ProxyCmp({
  inputs: ['color', 'size', 'withText']
})
@Component({
  selector: 'bm-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size', 'withText'],
})
export class BmIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmIcon extends Components.BmIcon {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bm-image',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class BmImage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmImage extends Components.BmImage {}


@ProxyCmp({
  inputs: ['color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value']
})
@Component({
  selector: 'bm-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'controlClass', 'disabled', 'isLoading', 'isRounded', 'isStatic', 'name', 'placeholder', 'readonly', 'required', 'size', 'state', 'type', 'value'],
})
export class BmInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmInput extends Components.BmInput {}


@ProxyCmp({
})
@Component({
  selector: 'bm-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class BmMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmMenu extends Components.BmMenu {}


@ProxyCmp({
  inputs: ['color', 'size']
})
@Component({
  selector: 'bm-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'size'],
})
export class BmMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmMessage extends Components.BmMessage {}


@ProxyCmp({
  inputs: ['hasModalCard', 'isActive']
})
@Component({
  selector: 'bm-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasModalCard', 'isActive'],
})
export class BmModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmModal extends Components.BmModal {}


@ProxyCmp({
  inputs: ['color', 'fixedPosition', 'isSpaced', 'isTransparent']
})
@Component({
  selector: 'bm-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'fixedPosition', 'isSpaced', 'isTransparent'],
})
export class BmNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmNavbar extends Components.BmNavbar {}


@ProxyCmp({
  inputs: ['color', 'dismissable']
})
@Component({
  selector: 'bm-notification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'dismissable'],
})
export class BmNotification {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmNotification extends Components.BmNotification {}


@ProxyCmp({
  inputs: ['alignment', 'isRounded', 'size']
})
@Component({
  selector: 'bm-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'isRounded', 'size'],
})
export class BmPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmPagination extends Components.BmPagination {}


@ProxyCmp({
  inputs: ['color']
})
@Component({
  selector: 'bm-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color'],
})
export class BmPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmPanel extends Components.BmPanel {}


@ProxyCmp({
  inputs: ['color', 'max', 'size', 'value']
})
@Component({
  selector: 'bm-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'max', 'size', 'value'],
})
export class BmProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmProgress extends Components.BmProgress {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'inputClass', 'labelClass', 'name']
})
@Component({
  selector: 'bm-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'inputClass', 'labelClass', 'name'],
})
export class BmRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmRadio extends Components.BmRadio {}


@ProxyCmp({
  inputs: ['size']
})
@Component({
  selector: 'bm-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['size'],
})
export class BmSection {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmSection extends Components.BmSection {}


@ProxyCmp({
  inputs: ['color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state']
})
@Component({
  selector: 'bm-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'controlClass', 'icon', 'isLoading', 'isMultiple', 'isRounded', 'size', 'state'],
})
export class BmSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmSelect extends Components.BmSelect {}


@ProxyCmp({
  inputs: ['color', 'disabled', 'isCircle', 'max', 'min', 'size', 'step', 'value']
})
@Component({
  selector: 'bm-slider',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'disabled', 'isCircle', 'max', 'min', 'size', 'step', 'value'],
})
export class BmSlider {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmSlider extends Components.BmSlider {}


@ProxyCmp({
  inputs: ['checked', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size']
})
@Component({
  selector: 'bm-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'color', 'disabled', 'isOutlined', 'isRounded', 'isThin', 'size'],
})
export class BmSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmSwitch extends Components.BmSwitch {}


@ProxyCmp({
  inputs: ['isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped']
})
@Component({
  selector: 'bm-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['isBordered', 'isFullwidth', 'isHoverable', 'isNarrow', 'isScrollable', 'isStriped'],
})
export class BmTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmTable extends Components.BmTable {}


@ProxyCmp({
  inputs: ['alignment', 'isFullwidth', 'isRounded', 'size', 'tabStyle']
})
@Component({
  selector: 'bm-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'isFullwidth', 'isRounded', 'size', 'tabStyle'],
})
export class BmTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmTabs extends Components.BmTabs {}


@ProxyCmp({
  inputs: ['color', 'modifier', 'size', 'tag']
})
@Component({
  selector: 'bm-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'modifier', 'size', 'tag'],
})
export class BmTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmTag extends Components.BmTag {}


@ProxyCmp({
  inputs: ['hasAddons', 'size']
})
@Component({
  selector: 'bm-tags',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasAddons', 'size'],
})
export class BmTags {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmTags extends Components.BmTags {}


@ProxyCmp({
  inputs: ['color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value']
})
@Component({
  selector: 'bm-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['color', 'controlClass', 'disabled', 'hasFixedSize', 'isLoading', 'readonly', 'rows', 'size', 'state', 'value'],
})
export class BmTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface BmTextarea extends Components.BmTextarea {}


