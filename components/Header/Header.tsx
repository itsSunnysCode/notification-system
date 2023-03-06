import React, {useContext} from "react";

/*contexts */
import { UserContext } from "~/globals/UserContext";

/*components */
import Logo from "~/components/Logo";
import Notifications from "~/components/Notifications";
/*styles */
import styles from "./Header.styles";

const Header = () => {
  const {state:{userData}} = useContext(UserContext);
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
