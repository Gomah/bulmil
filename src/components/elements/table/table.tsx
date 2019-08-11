import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';
import classNames from 'classnames';
@Component({
  tag: 'b-table',
  styleUrls: ['table.scss'],
})
export class Table implements ComponentInterface {
  @Prop() class: string;
  @Prop() isBordered: boolean = false;
  @Prop() isStriped: boolean = false;
  @Prop() isNarrow: boolean = false;
  @Prop() isHoverable: boolean = false;
  @Prop() isFullwidth: boolean = false;

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
