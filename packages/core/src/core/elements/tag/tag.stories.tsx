import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Tag',
  component: 'bm-tag',
};

export const Example = (props): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tag
        color="${props.color}"
        size="${props.size}"
        tag="${props.tag}"
        modifier="${props.modifier}"
      >
        Tag
      </bm-tag>
    </bm-section>
  `;
};

export const Colors = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tags>
        <bm-tag color="is-black"> Black </bm-tag>
        <bm-tag color="is-dark"> Dark </bm-tag>
        <bm-tag color="is-light"> Light </bm-tag>
        <bm-tag color="is-white"> White </bm-tag>
        <bm-tag color="is-primary"> Primary </bm-tag>
        <bm-tag color="is-link"> Link </bm-tag>
        <bm-tag color="is-info"> Info </bm-tag>
        <bm-tag color="is-success"> Success </bm-tag>
        <bm-tag color="is-warning"> Warning </bm-tag>
        <bm-tag color="is-danger"> Danger </bm-tag>
      </bm-tags>
    </bm-section>
  `;
};

export const Sizes = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tags>
        <bm-tag color="is-link" size="is-normal"> Normal </bm-tag>
        <bm-tag color="is-primary" size="is-medium"> Medium </bm-tag>
        <bm-tag color="is-info" size="is-large"> Large </bm-tag>
      </bm-tags>
    </bm-section>
  `;
};

Example.args = { color: null, size: null, tag: 'span', modifier: null };

Example.argTypes = {
  color: {
    options: [
      'is-black',
      'is-dark',
      'is-light',
      'is-white',
      'is-primary',
      'is-link',
      'is-info',
      'is-success',
      'is-warning',
      'is-danger',
      null,
    ],
    control: {
      type: 'select',
    },
  },
  size: {
    options: ['is-normal', 'is-medium', 'is-large', null],
    control: {
      type: 'select',
    },
  },
  modifier: {
    options: ['is-rounded', 'is-delete', null],
    control: {
      type: 'select',
    },
  },
};
