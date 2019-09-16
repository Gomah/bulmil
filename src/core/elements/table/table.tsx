import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
@Component({
  tag: 'b-table',
  styleUrls: ['table.scss'],
})
export class Table implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class: string;

  /**
   * Bordered
   */
  @Prop() isBordered = false;

  /**
   * Striped
   */
  @Prop() isStriped = false;

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
    return (
      <table
        class={{
          table: true,
          [this.class]: !!this.class,
          'is-bordered': this.isBordered,
          'is-striped': this.isStriped,
          'is-narrow': this.isNarrow,
          'is-hoverable': this.isHoverable,
          'is-fullwidth': this.isFullwidth,
        }}
      >
        <thead>
          <tr>
            <th>Tr Head</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th>Tr Body</th>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <th>Tr Foot</th>
          </tr>
        </tfoot>
      </table>
    );
  }
}
