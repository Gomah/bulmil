import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'b-file',
  styleUrls: ['file.scss'],
})
export class FileInput implements ComponentInterface {
  /**
   * CSS Classes
   */
  @Prop() class = '';

  /**
   * Name
   */
  @Prop() name = '';

  /**
   * Placeholder
   */
  @Prop() placeholder = 'Choose a file…';

  /**
   * Color
   */
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

  /**
   * Size
   */
  @Prop() size: 'is-small' | 'is-medium' | 'is-large';

  /**
   * Alignment
   */
  @Prop() alignment: 'is-centered' | 'is-right';

  /**
   * Add a placeholder for the selected file name
   */
  @Prop() hasName = false;

  /**
   * Move the CTA to the right side
   */
  @Prop() isRight = false;

  /**
   * Expand the name to fill up the space
   */
  @Prop() isFullwidth = false;

  /**
   * Boxed block
   */
  @Prop() isBoxed = false;

  public file: File;

  handleFileChange = event => {
    this.file = event.target.files[0];
  };

  render(): JSX.Element {
    return (
      <div
        class={{
          file: true,
          [this.size]: !!this.size,
          [this.color]: !!this.color,
          [this.alignment]: !!this.alignment,
          'has-name': this.hasName,
          'is-right': this.isRight,
          'is-fullwidth': this.isFullwidth,
          'is-boxed': this.isBoxed,
          [this.class]: !!this.class,
        }}
      >
        <label class="file-label">
          <input onChange={this.handleFileChange} class="file-input" type="file" name={this.name} />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">{this.placeholder}</span>
          </span>
          {this.hasName && this.file && this.file.name.length > 0 && (
            <span class="file-name">{this.file.name}</span>
          )}
        </label>
      </div>
    );
  }
}
