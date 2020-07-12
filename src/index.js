import React from "react";
import PropTypes from "prop-types";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import styles from "./styles.css";

const ReactLivePlayground = ({
  code,
  theme,
  scope,
  noInline,
  transformCode,
  language,
  disabled,
  editorClass,
  errorClass,
  previewClass
}) => (
  <section style={{ marginBottom: "1.75rem" }}>
    <LiveProvider
      code={code}
      theme={theme}
      scope={scope}
      noInline={noInline}
      transformCode={transformCode}
      language={language}
      disabled={disabled}
    >
      <LivePreview className={previewClass || styles.previewArea} />
      <LiveEditor
        padding={42}
        className={editorClass || styles.playgroundCode}
      />
      <LiveError className={errorClass || styles.playgroundError} />
    </LiveProvider>
  </section>
);

ReactLivePlayground.propTypes = {
  code: PropTypes.string,
  theme: PropTypes.object,
  scope: PropTypes.object,
  noInline: PropTypes.bool,
  transformCode: PropTypes.func,
  language: PropTypes.string,
  disabled: PropTypes.bool,
  editorClass: PropTypes.string,
  errorClass: PropTypes.string,
  previewClass: PropTypes.string
};

export default ReactLivePlayground;
