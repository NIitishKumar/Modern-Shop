import React from 'react'

function FormButton({children, type, ...otherProps}) {

    const BUTTON_TYPE_CLASSES = {
        google:"google-sign-in",
        inverted:"inverted"
    }

  return (
    <>
        <button className={`button-container ${BUTTON_TYPE_CLASSES[type]}`} {...otherProps} >{children}</button>
    </>
  )
}

export default FormButton