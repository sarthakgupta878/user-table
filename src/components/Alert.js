import React from 'react'

const Alert = (props) => {
    const capitalize = (word) => {
        if(word === "danger")
    {
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
// console.log(props.alert)
  return (
    <div>
      <div style={{ height: '70px' ,marginTop:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} fixed-top alert-dismissible fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>}
      </div>
    </div>
  )
}

export default Alert 