import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
@Component({
  tag: 'b-tag',
  styleUrls: ['tag.scss'],
})
export class Tag implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Tag
   */
  @Prop() tag = 'span';

  /**
   * Color
   */
  @Prop() color:
    | 'is-black'
    | 'is-dark'
    | 'is-light'
    | 'is-white'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';

  /**
   * Size
   */
  @Prop() size: 'is-normal' | 'is-medium' | 'is-large';

  /**
   * Modifier
   */
  @Prop() modifier: 'is-rounded' | 'is-delete';

  render(): JSX.Element {
    const TagType = this.tag;

    return (
      <TagType
        class={{
          tag: true,
          [this.color]: !!this.color,
          [this.size]: !!this.size,
          [this.modifier]: !!this.modifier,
          [this.class]: !!this.class,
        }}
      >
        {this.modifier !== 'is-delete' && <slot />}
      </TagType>
    );
  }
}
