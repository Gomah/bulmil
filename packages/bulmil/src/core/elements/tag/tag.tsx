import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
@Component({
  tag: 'bm-tag',
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
          [this.color]: Boolean(this.color),
          [this.size]: Boolean(this.size),
          [this.modifier]: Boolean(this.modifier),
          [this.class]: Boolean(this.class),
        }}
      >
        {this.modifier !== 'is-delete' && <slot />}
      </TagType>
    );
  }
}
