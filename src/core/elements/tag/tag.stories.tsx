import centered from '@storybook/addon-centered/html';
import { storiesOf } from '@storybook/html';
import { select, text } from '@storybook/addon-knobs';
import notes from './readme.md';

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

storiesOf('Elements|Tag', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <b-tag
        color="${select('Color', colors, 'is-primary')}"
        size="${select('Size', sizes, null)}"
        tag="${text('Tag', 'span')}"
        modifier="${select('Modifier', modifiers, null)}"
      >
        Tag
      </b-tag>
    `;
  })
  .add('Colors', () => {
    return `
      <b-tags>
        <b-tag
          color="is-black"
        >
          Black
        </b-tag>
        <b-tag
          color="is-dark"
        >
          Dark
        </b-tag>
        <b-tag
          color="is-light"
        >
          Light
        </b-tag>
        <b-tag
          color="is-white"
        >
          White
        </b-tag>
        <b-tag
          color="is-primary"
        >
          Primary
        </b-tag>
        <b-tag
          color="is-link"
        >
          Link
        </b-tag>
        <b-tag
          color="is-info"
        >
          Info
        </b-tag>
        <b-tag
          color="is-success"
        >
          Success
        </b-tag>
        <b-tag
          color="is-warning"
        >
          Warning
        </b-tag>
        <b-tag
          color="is-danger"
        >
          Danger
        </b-tag>
      </b-tags>
    `;
  })
  .add('Sizes', () => {
    return `
      <b-tags>
        <b-tag color="is-link" size="is-normal">
          Normal
        </b-tag>
        <b-tag color="is-primary" size="is-medium">
          Medium
        </b-tag>
        <b-tag
          color="is-info"
          size="is-large"
        >
          Large
        </b-tag>
      </b-tags>
    `;
  });
