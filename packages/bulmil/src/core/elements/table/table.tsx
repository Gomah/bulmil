import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
@Component({
  tag: 'bm-table',
  styleUrls: ['table.scss'],
})
export class Table implements ComponentInterface {
  /**
   * Bordered
   */
  @Prop() isBordered = false;

  /**
   * Striped
   */
  @Prop() isStriped = false;

  /**
   * Scrollable
   */
  @Prop() isScrollable = false;

  /**
   * Narrow
   */
  @Prop() isNarrow = false;

  /**
   * Hoverable
   */
  @Prop() isHoverable = false;

  /**
   * Fullwidth
   */
  @Prop() isFullwidth = false;

  render(): JSX.Element {
    const table: HTMLTableElement = (
      <table
        class={{
          table: true,
          'is-bordered': this.isBordered,
          'is-striped': this.isStriped,
          'is-narrow': this.isNarrow,
          'is-hoverable': this.isHoverable,
          'is-fullwidth': this.isFullwidth,
        }}
      >
        <slot />
      </table>
    );
    return this.isScrollable ? <div class="table-container">{table}</div> : table;
  }
}
