function Button({ children, type, isDisable, version }) {
  return (
     <button type={type} disabled={isDisable} className={version} >
        {children}
     </button>
  )
}

Button.defaultProps ={
   version: 'primary',
   type: 'button',
   isDisable: false
}

export default Button