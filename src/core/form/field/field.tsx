import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-field',
  styleUrls: ['field.scss'],
})
export class Field implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Label
   */
  @Prop() label: string;

  /**
   * Help or error message
   */
  @Prop() message: string;

  /**
   * Has addons
   */
  @Prop() hasAddons = false;

  /**
   * Field size
   */
  @Prop() size: 'is-small' | 'is-normal' | 'is-medium' | 'is-large';

  /**
   * Horizontal field
   */
  @Prop() isHorizontal = false;

  /**
   * Grouped field
   */
  @Prop() isGrouped = false;

  /**
   * Grouped, on multiline
   */
  @Prop() isGroupedMultiline = false;

  render(): JSX.Element {
    const fieldClass = {
      field: true,
      'has-addons': this.hasAddons,
      'is-horizontal': this.isHorizontal,
      'is-grouped': this.isGrouped,
      'is-grouped-multiline': this.isGroupedMultiline,
      [this.class]: !!this.class,
    };
    if (this.isHorizontal) {
      return (
        <div class={fieldClass}>
          <div class={`field-label ${this.size || ''}`}>
            <label class="label">{this.label}</label>
          </div>
          <div class="field-body">
            <div class="field">
              <slot />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div class={fieldClass}>
          <label class="label">{this.label}</label>
          <slot />
          {this.message && (
            <p
              class={{
                help: true,
              }}
            >
              {this.message}
            </p>
          )}
        </div>
      );
    }
  }
}
