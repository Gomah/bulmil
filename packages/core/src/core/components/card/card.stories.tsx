import { html, TemplateResult } from 'lit-html';

export default {
  title: 'Components/Card',
  component: 'bm-card',
};

export const ImageAndContent = (): TemplateResult => {
  return html`
    <div class="story-center" style="max-width:480px;">
      <bm-card>
        <bm-card-image>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
          </figure>
        </bm-card-image>
        <bm-card-content>
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <bm-content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </bm-content>
        </bm-card-content>
      </bm-card>
    </div>
  `;
};

export const WithoutImage = (): TemplateResult => {
  return html`
    <div class="story-center" style="max-width:480px;">
      <bm-card>
        <bm-card-header>
          <p class="card-header-title">
            Component
          </p>
          <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
        </bm-card-header>
        <bm-card-content>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
            <br />
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </bm-card-content>

        <bm-card-footer>
          <a href="#" class="card-footer-item">Save</a>
          <a href="#" class="card-footer-item">Edit</a>
          <a href="#" class="card-footer-item">Delete</a>
        </bm-card-footer>
      </bm-card>
    </div>
  `;
};

export const ContentAndFooter = (): TemplateResult => {
  return html`
    <div style="max-width:480px;" class="story-center">
      <bm-card>
        <bm-card-content>
          <p class="title">
            “There are two hard things in computer science: cache invalidation, naming things, and
            off-by-one errors.”
          </p>
          <p class="subtitle">
            Jeff Atwood
          </p>
        </bm-card-content>

        <bm-card-footer>
          <p class="card-footer-item">
            <span>
              View on
              <a href="https://twitter.com/codinghorror/status/506010907021828096">Twitter</a>
            </span>
          </p>
          <p class="card-footer-item">
            <span> Share on <a href="#">Facebook</a> </span>
          </p>
        </bm-card-footer>
      </bm-card>
    </div>
  `;
};
