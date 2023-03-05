import React, { useContext } from "react";
/*contexts */
import { UserContext } from "~/globals/UserContext";
/*componets */
import NotificationTab from "./NotificationTab";
/*styles */
import styles from "./Notifications.styles";
/*types */
import { NotificationType } from "~/types";

const NotificationsList = () => {
  const {
    state: { userData },
  } = useContext(UserContext);

  const { classes } = styles();

  return (
    <div className={classes.notificationList}>
      {userData?.notifications?.map((item: NotificationType) => (
        <NotificationTab key={item?.id} details={item} />
      ))}
    </div>
  );
};

export default NotificationsList;
