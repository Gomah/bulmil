import { Component, Prop, h, JSX } from '@stencil/core';

@Component({
  tag: 'b-table',
})
export class Table {
  @Prop() class: string;
  @Prop() isBordered: boolean = false;
  @Prop() isStriped: boolean = false;
  @Prop() isNarrow: boolean = false;
  @Prop() isHoverable: boolean = false;
  @Prop() isFullwidth: boolean = false;

  render(): JSX.Element {
    return (
      <table
        class={`table ${this.class || ''} ${this.isBordered ? 'is-bordered' : ''} ${
          this.isStriped ? 'is-striped' : ''
        } ${this.isNarrow ? 'is-narrow' : ''} ${this.isHoverable ? 'is-hoverable' : ''} ${
          this.isFullwidth ? 'is-fullwidth' : ''
        }`}
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
