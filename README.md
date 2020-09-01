![bulmil](https://user-images.githubusercontent.com/2362138/65766959-c721a080-e16f-11e9-9fb9-45a5a2ad0391.jpg)

<!-- Badges -->

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square" alt="Built with Stencil" />
  </a>

  <a href="https://bulmil.netlify.com/" target="_blank">
    <img src="https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg">
  </a>

  <a href="https://stenciljs.com/docs/style-guide">
    <img src="https://img.shields.io/badge/code_style-stencil/stylelint/prettier-5851ff.svg?style=flat-square" alt="Code Style" />
  </a>

  <a href="https://npmjs.com/package/@bulmil/core">
    <img src="https://img.shields.io/npm/v/@bulmil/core/latest.svg?style=flat-square" alt="npm version" />
  </a>

  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-black.svg?style=flat-square" alt="License MIT" />
  </a>

  <br />

  <a href="https://david-dm.org/gomah/bulmil">
    <img src="https://david-dm.org/gomah/bulmil/status.svg?style=flat-square" alt="dependencies" />
  </a>

  <a href="https://circleci.com/gh/Gomah/bulmil">
    <img src="https://circleci.com/gh/Gomah/bulmil.svg?style=shield" alt="Circle CI" />
  </a>

  <a href="https://npmjs.com/package/@bulmil/core">
    <img src="https://img.shields.io/npm/dt/bulmil.svg?style=flat-square" alt="npm downloads" />
  </a>

  <a href="https://packagephobia.now.sh/result?p=@bulmil/core">
    <img src="https://flat.badgen.net/packagephobia/install/@bulmil/core" alt="Package Phobia" />
  </a>

  <a href="https://bundlephobia.com/result?p=@bulmil/core">
    <img src="https://flat.badgen.net/bundlephobia/minzip/@bulmil/core" alt="Bundle Phobia" />
  </a>

</p>

Bulmil is an agnostic UI library based on Web Components, made with [Bulma.io](https://bulma.io/) & [Stencil.js](https://stenciljs.com/).

Bulmil was created as a proof of concept to introduce an easy way to consume common reusable web components for use with various modern application frameworks (Angular, Vue, React, Ember) or simply with pure Javascript.

:warning: Currently in Alpha, beta will be available once [this issue](https://github.com/Gomah/bulmil/issues/26) is resolved.

## Why Stencil?

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

## Getting Started

```bash
# Using npm
npm i @bulmil/core

# Using yarn
yarn add @bulmil/core
```

---

## Usage

### Without a javascript framework

Integrating a component built with Stencil to a project without a JavaScript framework is straight forward. If you're using a simple HTML page, you can add your component via a script tag. For example, if we published a component to npm, we could load the component through a CDN like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://unpkg.com/@bulmil/core@latest/dist/css/bulmil.min.css" />
    <script src="https://unpkg.com/@bulmil/core@latest/dist/bulmil/bulmil.js"></script>
  </head>
  <body>
    <bm-button>Button</bm-button>
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement. Note that in this scenario `applyPolyfills` is needed if you are targeting Edge or IE11.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="https://unpkg.com/@bulmil/core@latest/dist/css/bulmil.min.css" />
    <script type="module">
      import {
        applyPolyfills,
        defineCustomElements,
      } from 'https://unpkg.com/@bulmil/core@latest/dist/loader/index.es2017.js';
      applyPolyfills().then(() => {
        defineCustomElements(window);
      });
    </script>
  </head>
  <body>
    <bm-button>Button</bm-button>
  </body>
</html>
```

[Try this example on Codesandbox](https://codesandbox.io/s/bulmil-es-module-i8ce8)

---

### Frameworks

Unfortunately the experience of integrating web components into existing applications can be tricky at times. More about this can be read at [https://custom-elements-everywhere.com/](https://custom-elements-everywhere.com/). In order to accommodate the various issues the Stencil team has created new output target plugins to make the process simpler.

The plugins add additional output targets for each framework binding that is included. This output target will emit a native angular/react/vue library, just like if your components were originally written using any of these frameworks.

There are framework specific bindings for:

- [React](#react)
- [Vue / Nuxt](#vue)
- [Svelte](#svelte)
- [Angular](#angular)

Keep in mind, that at its core Bulmil is still simply web components. Even if your framework is not mentioned in the list above, it most likely still supports Bulmil natively. You can check [here](https://custom-elements-everywhere.com/) if your framework has complete support for web components.

There are also [examples](./examples) for loading and using Bulmil with:

- [HTML](./examples/html)
- [React](./examples/react)
- [Next](./examples/next)
- [Vue](./examples/vue)
- [Nuxt](./examples/nuxt)
- [Angular](./examples/angular)
- [Svelte](./examples/svelte)

---

### React

Unfortunately React has poor [web components support](https://custom-elements-everywhere.com/#react) ... but we have you covered with our `@bulmil/react` package, which wraps all the Bulmil web components inside React components so it feels natural to interact with, and it removes all the limitations of working with web components inside React.

Let's first load the CSS for the application, the css file includes:

- Bulma base
- Bulma helpers
- Other components & elements not fitting in any components or not implemented yet.

Add the following to the root of your application:

```tsx
// Global CSS (includes base & helpers). ~50KB
// We recommend to use purgecss to remove the unused css styles from your application.
import '@bulmil/core/dist/css/bulmil.min.css';
```

Now let's install the `@bulmil/react` package by running the following in your terminal:

```bash
# Using npm
npm i @bulmil/react

# Using yarn
yarn add @bulmil/react
```

And ... we're all done :tada:

### Vue

You have two options with Vue due to it having perfect [web components support](https://custom-elements-everywhere.com/#vue). You can either follow the instructions [here](https://stenciljs.com/docs/vue) for loading the web components in their natural form, or you can use the Vue bindings from the `@bulmil/vue` package, which wraps all the web components inside Vue components so you can feel right at home. Some other advantages for using `@bulmil/vue` include typed + documented components, and additional helpers for extending Bulmil with custom components.

Let's first load the CSS for the application, the css file includes:

- Bulma base
- Bulma helpers
- Other components & elements not fitting in any components or not implemented yet.

Add the following to the root of your application:

```tsx
// Global CSS (includes base & helpers). ~50KB
// We recommend to use purgecss to remove the unused css styles from your application.
import '@bulmil/core/dist/css/bulmil.min.css';
```

Now let's install the `@bulmil/vue` package by running the following in your terminal:

```bash
# Using npm
npm i @bulmil/vue

# Using yarn
yarn add @bulmil/vue
```

And ... we're all done :tada:

### Using Nuxt

Create a plugin, (e.g plugins/bulmil.ts):

```ts
import Vue from 'vue';

import { applyPolyfills, defineCustomElements } from '@bulmil/core/dist/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/bm-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

```ts
// nuxt.config.ts
{
  plugins: [
    { src: '~/plugins/bulmil.ts', mode: 'client' },
  ],
}
```

The components should then be available in any of the Vue components

```tsx
render() {
  return (
    <div>
      <bm-button>Button</bm-button>
    </div>
  )
}
```

### Angular

You have two options with Angular due to it having perfect [web components support](https://custom-elements-everywhere.com/#angular). You can either follow the instructions here for loading the web components in their natural form, or you can use the Angular bindings from the `@bulmil/angular` package, which wraps all the web components inside Angular components so you can feel right at home. Some other advantages for using `@bulmil/angular` include typed + documented components, and additional helpers for extending Bulmil with custom components.

Let's first load the CSS for the application, the css file includes:

- Bulma base
- Bulma helpers
- Other components & elements not fitting in any components or not implemented yet.

Add the following to the root of your application styles:

```tsx
// Global CSS (includes base & helpers). ~50KB
// We recommend to use purgecss to remove the unused css styles from your application.
import '@bulmil/core/dist/css/bulmil.min.css';
```

Now let's install the `@bulmil/angular` package by running the following in your terminal:

```bash
# Using npm
npm i @bulmil/angular

# Using yarn
yarn add @bulmil/angular
```

And ... we're all done :tada:

### Svelte

You have two options with Svelte due to it having perfect [web components support](https://custom-elements-everywhere.com/#svelte). You can either follow the instructions for loading it from the CDN and use the Bulmil web components in their natural form, or you can use the Svelte bindings from the `@bulmil/svelte` package, which wraps all the web components inside Svelte components so you can feel right at home. Some other advantages for using `@bulmil/svelte` include typed + documented components, and additional helpers for extending Bulmil with custom components.

Let's first load the CSS for the application, the css file includes:

- Bulma base
- Bulma helpers
- Other components & elements not fitting in any components or not implemented yet.

Add the following to the `<head>` element of your HTML file:

```tsx
// Global CSS (includes base & helpers). ~50KB
// We recommend to use purgecss to remove the unused css styles from your application.
import '@bulmil/core/dist/css/bulmil.min.css';
```

Now let's install the `@bulmil/svelte` package by running the following in your terminal:

```bash
# Using npm
npm i @bulmil/svelte

# Using yarn
yarn add @bulmil/svelte
```

And ... we're all done :tada:

### Ember

Working with Stencil components in Ember is really easy thanks to the `ember-cli-stencil` addon. It handles:

- Importing the required files into your `vendor.js`
- Copying the component definitions into your `assets` directory
- Optionally generating a wrapper component for improved compatibility with older Ember versions

Start off by installing the Ember addon

```bash
ember install ember-cli-stencil
```

Now, when you build your application, Stencil collections in your dependencies will automatically be discovered and pulled into your application. You can just start using the custom elements in your `hbs` files with no further work needed. For more information, check out the [`ember-cli-stencil` documentation](https://github.com/alexlafroscia/ember-cli-stencil).

---

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn storybook` or `npm run storybook`

## 📑 License

[MIT License](./LICENSE)
