import { Component, Prop, h, JSX, ComponentInterface, Host } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-pagination',
  styleUrls: ['pagination.scss'],
})
export class Pagination implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Pagination size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Alignment
   */
  @Prop() alignment: 'is-centered' | 'is-right';

  /**
   * Rounded
   */
  @Prop() isRounded = false;

  render(): JSX.Element {
    const cardClass = classNames(
      'pagination',
      this.size,
      this.alignment,
      { 'is-rounded': this.isRounded },
      this.class
    );

    return (
      <Host>
        <nav class={cardClass} role="navigation" aria-label="pagination">
          <slot name="pagination-previous">
            <a class="pagination-previous">Previous</a>
          </slot>

          <slot name="pagination-next">
            <a class="pagination-next">Next page</a>
          </slot>

          <ul class="pagination-list">
            <li>
              <a class="pagination-link" aria-label="Goto page 1">
                1
              </a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 45">
                45
              </a>
            </li>
            <li>
              <a class="pagination-link is-current" aria-label="Page 46" aria-current="page">
                46
              </a>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 47">
                47
              </a>
            </li>
            <li>
              <span class="pagination-ellipsis">&hellip;</span>
            </li>
            <li>
              <a class="pagination-link" aria-label="Goto page 86">
                86
              </a>
            </li>
          </ul>
        </nav>
      </Host>
    );
  }
}
