import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';

@Component({
  tag: 'bm-switch',
  styleUrls: ['switch.scss'],
})
export class Switch implements ComponentInterface {
  /**
   * Color
   */
  @Prop() color: 'is-success' | 'is-warning' | 'is-danger' | 'is-info';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Thin
   */
  @Prop() isThin = false;

  /**
   * Rounded
   */
  @Prop() isRounded = false;

  /**
   * Outlined
   */
  @Prop() isOutlined = false;

  /**
   * Disabled
   */
  @Prop() disabled = false;

  /**
   * Checked
   */
  @Prop({ mutable: true }) checked = false;

  private onClick = (): void => {
    this.checked = !this.checked;
  };

  render(): JSX.Element {
    return (
      <Host onClick={this.onClick}>
        <input
          type="checkbox"
          class={{
            switch: true,
            [this.color]: Boolean(this.color),
            [this.size]: Boolean(this.size),
            'is-thin': this.isThin,
            'is-rounded': this.isRounded,
            'is-outlined': this.isOutlined,
          }}
          checked={this.checked}
          disabled={this.disabled}
        />
        <label>
          <slot />
        </label>
      </Host>
    );
  }
}
