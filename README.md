# React Live Playground

[![NPM](https://img.shields.io/npm/v/react-live-playground.svg)](https://www.npmjs.com/package/react-live-playground)

> Playground wrapper around react-live

## Install

```bash
npm install --save react-live-playground
# or
yarn add react-live-playground
```

## Example

![example](/example.png)

Live example on [my blog post](https://t.wang.sh/blog-post-3).

## Usage

```jsx
import React from "react";
import ReactLivePlayground from "react-live-playground";

const Example = () => (
  <div style={{ maxWidth: "600px" }}>
    <ReactLivePlayground code=`<button>Example Button</button>` />
  </div>
);
```

## Props

#### code: String

See `react-live` for the kind of React code you can use here. Pure JSX works because `react-live` pre-renders.

#### theme: Object

A `prism-react-renderer` theme object. See more in the [README for prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer#theming).

#### scope: Object

To use global packages other than React (included by default), you have to scope them into `react-live`. More info in the [react-live README](https://github.com/FormidableLabs/react-live#how-does-the-scope-work).

### Other LiveProvider Props

`noInline`, `transformCode`, `language`, `disabled` -> These can be found in the [`<LiveProvider />` README section](https://github.com/FormidableLabs/react-live#liveprovider-)

#### editorClass: String

CSS class name you can apply to style the [Live Editor](https://github.com/FormidableLabs/react-live#liveeditor-)

#### errorClass: String

CSS class name you can apply to style the [Live Error](https://github.com/FormidableLabs/react-live#liveerror-)

#### previewClass: String

CSS class name you can apply to style the [Live Preview](https://github.com/FormidableLabs/react-live#livepreview-)
