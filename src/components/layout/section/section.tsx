import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-section',
})
export class Section {
  @Prop() class: string = '';
  @Prop() size: 'is-medium' | 'is-large';

  render(): JSX.Element {
    const sectionClass = classNames('section', this.size, this.class);

    return (
      <div class={sectionClass}>
        <slot />
      </div>
    );
  }
}
