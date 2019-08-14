import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'b-table',
  styleUrls: ['table.scss'],
})
export class Table implements ComponentInterface {
  @Prop() class: string;
  @Prop() isBordered = false;
  @Prop() isStriped = false;
  @Prop() isNarrow = false;
  @Prop() isHoverable = false;
  @Prop() isFullwidth = false;

  render(): JSX.Element {
    const tableClass = classNames(
      'table',
      {
        'is-bordered': this.isBordered,
        'is-striped': this.isStriped,
        'is-narrow': this.isNarrow,
        'is-hoverable': this.isHoverable,
        'is-fullwidth': this.isFullwidth,
      },
      this.class
    );

    return (
      <table class={tableClass}>
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
