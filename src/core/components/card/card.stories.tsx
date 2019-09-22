import centered from '@storybook/addon-centered/html';
import notes from './readme.md';
import { storiesOf } from '@storybook/html';

storiesOf('Components|Card', module)
  .addDecorator(centered)
  .addParameters({
    notes: {
      markdown: notes,
    },
  })

  .add('Image & Content', () => {
    return `
      <div style="max-width:480px;">
        <b-card>
          <b-card-image>
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            </figure>
          </b-card-image>
          <b-card-content>
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>

            <b-content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </b-content>
          </b-card-content>
        </b-card>
      </div>
    `;
  })
  .add('Header, Content & Footer', () => {
    return `
      <div style="max-width:480px;">
        <b-card>
          <b-card-header>
            <p class="card-header-title">
              Component
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </b-card-header>
          <b-card-content>
            <div class="content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
              <br />
              <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
            </div>
          </b-card-content>

          <b-card-footer>
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </b-card-footer>
        </b-card>
      </div>
    `;
  })
  .add('Content & Footer', () => {
    return `
      <div style="max-width:480px; margin: 5vh auto;">
        <b-card>
          <b-card-content>
            <p class="title">
              “There are two hard things in computer science: cache invalidation, naming things, and
              off-by-one errors.”
            </p>
            <p class="subtitle">
              Jeff Atwood
            </p>
          </b-card-content>

          <b-card-footer>
            <p class="card-footer-item">
              <span>
                View on
                <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
              </span>
            </p>
            <p class="card-footer-item">
              <span> Share on <a href="#">Facebook</a> </span>
            </p>
          </b-card-footer>
        </b-card>
      </div>
    `;
  });
