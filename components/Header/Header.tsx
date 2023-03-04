import React, {useContext} from "react";

/*contexts */
import { UserContext } from "~/globals/UserContext";

/*components */
import Logo from "~/components/Logo";
import Notifications from "~/components/notifications";
/*styles */
import styles from "./Header.styles";

function Header() {
  const {state:{userData}} = useContext(UserContext);
  console.log(useContext(UserContext));
  const { classes } = styles();
  return (
    <div className={classes.root}>
      <Logo />
      <div className={classes.headerOptions}>
      <Notifications/>
      </div>
    </div>
  );
}

export default Header;
