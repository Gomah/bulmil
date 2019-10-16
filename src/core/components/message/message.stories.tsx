import notes from './readme.md';
import { storiesOf } from '@storybook/html';
import { select } from '@storybook/addon-knobs';

storiesOf('Components|Message', module)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Example', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-message
            color="${select(
              'Color',
              {
                'is-dark': 'is-dark',
                'is-primary': 'is-primary',
                'is-link': 'is-link',
                'is-info': 'is-info',
                'is-success': 'is-success',
                'is-warning': 'is-warning',
                'is-danger': 'is-danger',
              },
              null
            )}"
            size="${select(
              'Size',
              {
                'is-small': 'is-small',
                'is-medium': 'is-medium',
                'is-large': 'is-large',
              },
              null
            )}"
          >
            <div class="message-header">
              <p>Hello World</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>
        </bm-container>
      </bm-section>
    `;
  })
  .add('Colors', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-message color="is-dark">
            <div class="message-header">
              <p>Dark</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-primary">
            <div class="message-header">
              <p>Primary</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-link">
            <div class="message-header">
              <p>Link</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-info">
            <div class="message-header">
              <p>Info</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-success">
            <div class="message-header">
              <p>Success</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-warning">
            <div class="message-header">
              <p>Warning</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-danger">
            <div class="message-header">
              <p>Danger</p>
              <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>
        </bm-container>
      </bm-section>
    `;
  })
  .add('Message body only', () => {
    return `
      <bm-section>
        <bm-container>
          <bm-message color="is-dark">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-primary">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-link">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-info">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-success">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-warning">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>

          <bm-message color="is-danger">
            <div class="message-body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla.
              Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
              <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus.
              Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor
              mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
            </div>
          </bm-message>
        </bm-container>
      </bm-section>
    `;
  });
