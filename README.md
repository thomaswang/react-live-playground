# React Live Playground

[![NPM](https://img.shields.io/npm/v/react-live-playground.svg)](https://www.npmjs.com/package/react-live-playground)

> Playground wrapper around react-live

## Install

```bash
npm install --save react-live-playground
# or
yarn add react-live-playground
```

## Usage

```jsx
import React from "react";
import ReactLivePlayground from "react-live-playground";

const Example = () => (
  <div style={{ maxWidth: "600px" }}>
    <ReactLivePlayground />
  </div>
);
```

## Props

#### code: String

See `react-live` for the kind of React code you can use here. Pure JSX works, as `react-live` pre-renders.

#### theme: Object,

A prism-react-renderer theme object. See more in the [README for prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer#theming).

#### editorClass: String,

CSS class name you can apply to style the [Live Editor](https://github.com/FormidableLabs/react-live#liveeditor-)

#### errorClass: String

CSS class name you can apply to style the [Live Error](https://github.com/FormidableLabs/react-live#liveerror-)

#### previewClass: String

CSS class name you can apply to style the [Live Preview](https://github.com/FormidableLabs/react-live#livepreview-)
