import { Component, Prop, h, JSX } from '@stencil/core';
import classNames from 'classnames';

@Component({
  tag: 'b-file',
})
export class File {
  @Prop() class: string = '';
  @Prop() name: string = '';
  @Prop() color:
    | 'is-white'
    | 'is-black'
    | 'is-light'
    | 'is-dark'
    | 'is-primary'
    | 'is-link'
    | 'is-info'
    | 'is-success'
    | 'is-warning'
    | 'is-danger';

  @Prop() size: 'is-small' | 'is-medium' | 'is-large';
  @Prop() alignment: 'is-centered' | 'is-right';
  @Prop() hasName: boolean = false;
  @Prop() isRight: boolean = false;
  @Prop() isFullwidth: boolean = false;
  @Prop() isBoxed: boolean = false;

  render(): JSX.Element {
    const fileClass = classNames(
      'file',
      this.size,
      this.color,
      this.alignment,
      {
        'has-name': this.hasName,
        'is-right': this.isRight,
        'is-fullwidth': this.isFullwidth,
        'is-boxed': this.isBoxed,
      },
      this.class
    );

    return (
      <div class={fileClass}>
        <label class="file-label">
          <input class="file-input" type="file" name={this.name} />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
          {this.hasName && <span class="file-name">Screen Shot 2019-07-29 at 15.54.25.png</span>}
        </label>
      </div>
    );
  }
}
