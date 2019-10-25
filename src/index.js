import React from 'react'
import PropTypes from 'prop-types'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import nightOwl from 'prism-react-renderer/themes/nightOwl'

import styles from './styles.css'

const ReactLivePlayground = ({
  code = '',
  theme = nightOwl,
  editorClass,
  errorClass,
  previewClass
}) => (
  <section>
    <LiveProvider code={code} theme={theme}>
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
  editorClass: PropTypes.string,
  errorClass: PropTypes.string,
  previewClass: PropTypes.string
}

export default ReactLivePlayground
