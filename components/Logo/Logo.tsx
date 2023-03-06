import React from 'react'
import { useRouter } from "next/router";

/*styles */
import styles from "./Logo.styles";

const Logo =()=> {
  const router = useRouter()
  const {classes} = styles();
  return (
    <div className={classes.root} onClick={()=>router.push("/")}>
      <p>campaign dashboard</p>
    </div>
  )
}

export default Logo
