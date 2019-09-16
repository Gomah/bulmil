import { newE2EPage } from '@stencil/core/testing';

describe('basic: b-box', () => {
  it('should render a b-box component', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <b-box>
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet
                massa fringilla egestas. Nullam condimentum luctus turpis.
              </p>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="reply">
                  <span class="icon is-small">
                    <i class="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </article>
      </b-box>
    `);
    const el = await page.find('b-box');
    expect(el).not.toBeNull();

    const compare = await page.compareScreenshot();
    expect(compare).toMatchScreenshot();
  });
});
