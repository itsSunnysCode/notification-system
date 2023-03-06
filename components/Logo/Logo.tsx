import React from 'react'

/*styles */
import styles from "./Logo.styles";
import { useRouter } from "next/router";

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
