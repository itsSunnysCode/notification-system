import React from "react";
/*styles */
import styles from "./Notifications.styles";
/*utils */
import { timeSince } from "~/utils/timeSince";

interface Props {
  details: {
    title: string;
    isRead: boolean;
    created:string;
  };
}

const NotificationTab: React.FC<Props> = ({ details }) => {
  const { classes } = styles();
  const { title, isRead, created } = details || {};

  return (
    <div className={classes.individualNotification}>
      <div>
        <p>{title}</p>
        <span>{`${timeSince(new Date(created))} ago`}</span>
      </div>
      {!isRead ? <span /> : null}
    </div>
  );
};

export default NotificationTab;
