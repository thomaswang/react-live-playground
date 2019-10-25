import React from 'react'
import PropTypes from 'prop-types'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

import styles from './styles.css'

const ReactLivePlayground = ({
  code = '',
  theme = nightOwl,
  scope,
  noInline,
  transformCode,
  language,
  disabled,
  editorClass,
  errorClass,
  previewClass
}) => (
  <section style={{ marginBottom: '1.75rem' }}>
    <LiveProvider
      code={code}
      theme={theme}
      scope={scope}
      noInline={noInline}
      transformCode={transformCode}
      language={language}
      disabled={disabled}
    >
      <LiveEditor
        padding={36}
        className={editorClass || styles.playgroundCode}
      />
      <LiveError className={errorClass || styles.playgroundError} />
      <LivePreview className={previewClass || styles.previewArea} />
    </LiveProvider>
  </section>
)

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
}

export default ReactLivePlayground
