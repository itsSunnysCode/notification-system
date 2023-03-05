import React from 'react'

/*styles */
import styles from "./Logo.styles";
const Logo =()=> {
  const {classes} = styles();
  return (
    <div className={classes.root}>
      <p>campaign dashboard</p>
    </div>
  )
}

export default Logo
