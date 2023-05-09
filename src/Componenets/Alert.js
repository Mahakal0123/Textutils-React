import React from 'react'

function Alert(props) {
    const capi = (word)=>{
        const lo=word.toLowerCase();
        return lo.charAt(0).toUpperCase()+lo.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong >{capi(props.alert.type)}</strong>:{props.alert.msg}
    </div>
  )
}

export default Alert
