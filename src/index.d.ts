// Type definitions for react-live-playground
// Definitions by: Thomas Wang <thomas@wang.sh>

/* ~ You can declare types that are available via importing the module */
export interface Props {
  code: string
  theme: object
  scope: object
  noInline: boolean
  transformCode: any
  language: string
  disabled: boolean
  editorClass: string
  errorClass: string
  previewClass: string
}
