import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-footer',
  styleUrls: ['footer.scss'],
})
export class Section {
  @Prop() class: string = '';

  render(): JSX.Element {
    const footerClass = classNames('footer', this.class);

    return (
      <footer class={footerClass}>
        <slot />
      </footer>
    );
  }
}
