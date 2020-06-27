import { Component, Prop, h, JSX, ComponentInterface } from '@stencil/core';

@Component({
  tag: 'bm-file',
  styleUrls: ['file.scss'],
})
export class FileInput implements ComponentInterface {
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
   * File
   */
  @Prop({ mutable: true }) file: File;

  /**
   * Boxed block
   */
  @Prop() isBoxed = false;

  private handleFileChange = (event): void => {
    this.file = event.target.files[0];
  };

  private get fileName(): string | undefined {
    return this.file && this.file.name;
  }

  get displayName(): boolean {
    return this.hasName && Boolean(this.fileName);
  }

  render(): JSX.Element {
    return (
      <div
        class={{
          file: true,
          [this.size]: Boolean(this.size),
          [this.color]: Boolean(this.color),
          [this.alignment]: Boolean(this.alignment),
          'has-name': this.displayName,
          'is-right': this.isRight,
          'is-fullwidth': this.isFullwidth,
          'is-boxed': this.isBoxed,
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
          {this.displayName && <span class="file-name">{this.fileName}</span>}
        </label>
      </div>
    );
  }
}
