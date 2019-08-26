import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-card',
  styleUrls: ['card.scss'],
})
export class Card implements ComponentInterface {
  @Prop() class = '';

  render(): JSX.Element {
    const cardClass = classNames('card', this.class);

    return (
      <div class={cardClass}>
        <slot></slot>
      </div>
    );
  }
}
