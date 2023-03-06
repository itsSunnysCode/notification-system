import React, { useContext } from "react";
import { useRouter } from "next/router";
/*styles */
import styles from "./Notifications.styles";
/*utils */
import { timeSince } from "~/utils/timeSince";
import { NotificationType } from "~/types";
import { notificationTypes } from "~/utils/notificationTypes";
/*context */
import { UserContext } from "~/globals/UserContext";

interface Props {
  details: NotificationType;
}

const NotificationTab: React.FC<Props> = ({ details }) => {
  const { classes } = styles();
  const router = useRouter()
  const {
    state: { userData },
    fillNotification,
  } = useContext(UserContext);
  const { id, title, isRead, created, type, landingPageId, campaignId } = details || {};

  const markRead = () => {
    //mark read api
    const notifications = [...userData.notifications];
    notifications.forEach((item) => {
      if (item.id == id) {
        item.isRead = 1;
      }
    });
    fillNotification(notifications);
  };

  const notificationClicked = () => {
    if(!type) return;
    let url="";
    switch (type) {
      case notificationTypes.campaignLandingPage:
        url=`/landingpage/${landingPageId}`
        break;
      case notificationTypes.campaignStatus:
        url=`/campaign/${campaignId}`
        break;
      case notificationTypes.invoiceGenerated:
        url=`/invoicepage`
        break; 
      case notificationTypes.referral:
        url=`/referral_page`
        break;  
      default:
        break;
    }
    markRead();
    router.push(url);
  } 

  return (
    <div className={classes.individualNotification} onClick={()=>notificationClicked()}>
      <div>
        <p>{title}</p>
        <span>{`${timeSince(new Date(created))} ago`}</span>
      </div>
      {!isRead ? (
        <span
          onClick={(e) => {
            e.stopPropagation();
            markRead();
          }}
        />
      ) : null}
    </div>
  );
};

export default NotificationTab;
