![bulmil](https://user-images.githubusercontent.com/2362138/65760979-583d4b00-e161-11e9-94a2-476d566327b9.jpg)

![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)
[![npm version][npm-version-src]][npm-version-href]
[![Dependencies][david-dm-src]][david-dm-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![code style: prettier](https://img.shields.io/badge/code_style-stencil/stylelint/prettier-5851ff.svg?style=flat-square)](https://github.com/airbnb/javascript)
[![package phobia][package-phobia-src]][package-phobia-href]
[![bundle phobia][bundle-phobia-src]][bundle-phobia-href]
[![License: MIT](https://img.shields.io/badge/License-MIT-black.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Stencil

Stencil is a compiler for building fast web apps using Web Components.

Stencil combines the best concepts of the most popular frontend frameworks into a compile-time rather than run-time tool. Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient one-way data binding, an asynchronous rendering pipeline (similar to React Fiber), and lazy-loading out of the box, and generates 100% standards-based Web Components that run in any browser supporting the Custom Elements v1 spec.

Stencil components are just Web Components, so they work in any major framework or with no framework at all.

---

## Getting Started

```bash
# Using npm
npm i bulmil

# Using yarn
yarn add bulmil
```

---

## Framework Integration

Stencil's primary goal is to remove the need for components to be written using a specific framework's API. It accomplishes this by using standardized web platform APIs that work across all modern browsers. Using the low-level component model that is provided by the browser (which all frameworks are built on) allows Stencil components to work inside of a framework or without one.

Stencil's integration with different frameworks is currently a work in progress. As Stencil matures, the goal is to make it easy to write standard web components which will compile to various output targets. This allows developers to stay aligned with the latest web standards while using a common API. The generated components will also be more future-proof as frameworks continue to change.

The following list contains the framework integrations that have been started. All of them are not yet completed.

### Components without a Framework

Integrating a component built with Stencil to a project without a JavaScript framework is straight forward. If you're using a simple HTML page, you can add your component via a script tag. For example, if we published a component to npm, we could load the component through unpkg like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script src="https://unpkg.com/test-components/latest/dist/test-components.js"></script>
  </head>
  <body>
    <b-button>Button</b-button>
  </body>
</html>
```

Alternatively, if you wanted to take advantage of ES Modules, you could include the components using an import statement. Note that in this scenario `applyPolyfills` is needed if you are targeting Edge or IE11.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <script type="module">
      import {
        applyPolyfills,
        defineCustomElements,
      } from 'https://unpkg.com/test-components/latest/dist/esm/es2017/test-components.define.js';
      applyPolyfills().then(() => {
        defineCustomElements(window);
      });
    </script>
  </head>
  <body>
    <test-component></test-component>
  </body>
</html>
```

#### Passing object props from a non-JSX element

##### Setting the prop manually

```tsx
import { Prop } from '@stencil/core';

export class TodoList {
  @Prop() myObject: object;
  @Prop() myArray: Array<string>;
}
```

```tsx
<todo-list></todo-list>
<script>
  const todoListElement = document.querySelector('todo-list');
  todoListElement.myObject = {};
  todoListElement.myArray = [];
</script>
```

##### Watching props changes

```tsx
import { Prop, State, Watch } from '@stencil/core';

export class TodoList {
  @Prop() myObject: string;
  @Prop() myArray: string;
  @State() myInnerObject: object;
  @State() myInnerArray: Array<string>;

  componentWillLoad() {
    this.parseMyObjectProp(this.myObject);
    this.parseMyArrayProp(this.myArray);
  }

  @Watch('myObject')
  parseMyObjectProp(newValue: string) {
    if (newValue) this.myInnerObject = JSON.parse(newValue);
  }

  @Watch('myArray')
  parseMyArrayProp(newValue: string) {
    if (newValue) this.myInnerArray = JSON.parse(newValue);
  }
}
```

```tsx
<todo-list my-object="{}" my-array="[]"></todo-list>
```

---

### React

With an application built using the `create-react-app` script the easiest way to include the component library is to call `defineCustomElements(window)` from the `index.js` file.
Note that in this scenario `applyPolyfills` is needed if you are targeting Edge or IE11.

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// test-component is the name of our made up Web Component that we have
// published to npm:
import { applyPolyfills, defineCustomElements } from 'bulmil/dist/loader';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

Following the steps above will enable your web components to be used in React, however there are some additional complexities that must also be considered. https://custom-elements-everywhere.com/ describes them well.

---

### Vue

In order to use the custom element library within the Vue app, the application must be modified to define the custom elements and to inform the Vue compiler which elements to ignore during compilation. This can all be done within the `main.js` file.

Assuming you’ve run `npm install --save test-components` beforehand, and that `test-component` is the name of our made up Web Components that we have published to npm, you import the components into the 'main.js' file by

- importing the node module
- telling Vue to ignore the custom element tags (see `https://vuejs.org/v2/api/#ignoredElements`)
- binding the Stenciljs component code to the window object

```tsx
import Vue from 'vue';
import App from './App.vue';

import { applyPolyfills, defineCustomElements } from 'bulmil/dist/loader';

Vue.config.productionTip = false;

// Tell Vue to ignore all components defined in the test-components
// package. The regex assumes all components names are prefixed
// 'test'
Vue.config.ignoredElements = [/b-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements(window);
});

new Vue({
  render: h => h(App),
}).$mount('#app');
```

#### Using Nuxt

Create a plugin, (e.g bulmil.ts):

```ts
import Vue from 'vue';

import { defineCustomElements } from 'bulmil/dist/loader';

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/b-\w*/];

// Bind the custom elements to the window object
defineCustomElements(window);
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
      <b-button>Button</b-button>
    </div>
  )
}
```

Vue provides several different ways to install and use the framework in an application. The above technique for integrating a Stencil custom element library has been tested on a Vue application that was created using the `vue-cli` with ES2015 and WebPack as primary options. A similar technique should work if the application was generated using other options.

### Angular

Using a Stencil built web component collection within an Angular CLI project is a two-step process. We need to:

1. Include the `CUSTOM_ELEMENTS_SCHEMA` in the modules that use the components.
2. Call `defineCustomElements(window)` from `main.ts` (or some other appropriate place).

#### Including the Custom Elements Schema

Including the `CUSTOM_ELEMENTS_SCHEMA` in the module allows the use of the web components in the HTML markup without the compiler producing errors this code should be added into the `AppModule` and in every other modules that use your custom elements.
Here is an example of adding it to `AppModule`:

```tsx
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

The `CUSTOM_ELEMENTS_SCHEMA` needs to be included in any module that uses custom elements.

#### Calling defineCustomElements

A component collection built with Stencil includes a main function that is used to load the components in the collection. That function is called `defineCustomElements()` and it needs to be called once during the bootstrapping of your application. One convenient place to do this is in `main.ts` as such:

```tsx
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Note: loader import location set using "esmLoaderPath" within the output target confg
import { defineCustomElements } from 'bulmil/dist/loader';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
defineCustomElements(window);
```

#### Edge and IE11 polyfills

If you want your custom elements to be able to work on older browser, you should add the `applyPolyfills()` that surrond the `defineCustomElements()` function.

```tsx
import { applyPolyfills, defineCustomElements } from 'bulmil/dist/loader';
...
applyPolyfills().then(() => {
  defineCustomElements(window)
})

```

#### Accessing components using ViewChild and ViewChildren

Once included, components could be referenced in your code using `ViewChild` and `ViewChildren` as in the following example:

```tsx
import { Component, ElementRef, ViewChild } from '@angular/core';

import 'bulmil/dist';

@Component({
  selector: 'app-home',
  template: `
    <b-button #button></b-button>
  `,
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('button') buttonComponent: ElementRef<HTMLTestComponentElement>;

  async onAction() {
    await this.buttonComponent.nativeElement.componentMethod();
  }
}
```

---

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

<!-- Badges: -->
<!-- Add Stylelint -->
<!-- Add Downloads -->
<!-- Add Dependencies -->
<!-- Add Minzipped size -->
<!-- Add Install size -->
<!-- Add Prettier -->
<!-- Add Storybook -->
<!-- Add Npm version -->
<!-- Add CircleCI badge -->
<!-- Add License badge -->

<!-- Add Contribute -->
<!-- Add CircleCI -->

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `yarn storybook` or `npm run storybook`

## 📑 License

[MIT License](./LICENSE)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/dt/bulmil.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/bulmil
[npm-downloads-src]: https://img.shields.io/npm/v/bulmil/latest.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/bulmil
[david-dm-src]: https://david-dm.org/gomah/bulmil/status.svg?style=flat-square
[david-dm-href]: https://david-dm.org/gomah/bulmil
[package-phobia-src]: https://flat.badgen.net/packagephobia/install/bulmil
[package-phobia-href]: https://packagephobia.now.sh/result?p=bulmil
[bundle-phobia-src]: https://flat.badgen.net/bundlephobia/minzip/bulmil
[bundle-phobia-href]: https://bundlephobia.com/result?p=bulmil
