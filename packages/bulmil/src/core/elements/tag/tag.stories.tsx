import { select, text } from '@storybook/addon-knobs';
import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Elements/Tag',
  component: 'bm-tag',
};

const colors = {
  'is-black': 'is-black',
  'is-dark': 'is-dark',
  'is-light': 'is-light',
  'is-white': 'is-white',
  'is-primary': 'is-primary',
  'is-link': 'is-link',
  'is-info': 'is-info',
  'is-success': 'is-success',
  'is-warning': 'is-warning',
  'is-danger': 'is-danger',
  none: null,
};

const sizes = {
  'is-normal': 'is-normal',
  'is-medium': 'is-medium',
  'is-large': 'is-large',
  none: null,
};

const modifiers = {
  'is-rounded': 'is-rounded',
  'is-delete': 'is-delete',
  none: null,
};

export const Example = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tag
        color="${select('Color', colors, 'is-primary')}"
        size="${select('Size', sizes, null)}"
        tag="${text('Tag', 'span')}"
        modifier="${select('Modifier', modifiers, null)}"
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
        <bm-tag color="is-black">
          Black
        </bm-tag>
        <bm-tag color="is-dark">
          Dark
        </bm-tag>
        <bm-tag color="is-light">
          Light
        </bm-tag>
        <bm-tag color="is-white">
          White
        </bm-tag>
        <bm-tag color="is-primary">
          Primary
        </bm-tag>
        <bm-tag color="is-link">
          Link
        </bm-tag>
        <bm-tag color="is-info">
          Info
        </bm-tag>
        <bm-tag color="is-success">
          Success
        </bm-tag>
        <bm-tag color="is-warning">
          Warning
        </bm-tag>
        <bm-tag color="is-danger">
          Danger
        </bm-tag>
      </bm-tags>
    </bm-section>
  `;
};

export const Sizes = (): TemplateResult => {
  return html`
    <bm-section class="story-center">
      <bm-tags>
        <bm-tag color="is-link" size="is-normal">
          Normal
        </bm-tag>
        <bm-tag color="is-primary" size="is-medium">
          Medium
        </bm-tag>
        <bm-tag color="is-info" size="is-large">
          Large
        </bm-tag>
      </bm-tags>
    </bm-section>
  `;
};
