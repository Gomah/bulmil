import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-message',
  styleUrls: ['message.scss'],
})
export class Message implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Color
   */
  @Prop() color:
    | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  render(): JSX.Element {
    return (
      <article
        class={{
          message: true,
          [this.color]: Boolean(this.color),
          [this.size]: Boolean(this.size),
        }}
      >
        <slot />
      </article>
    );
  }
}
