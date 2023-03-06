import React, { useContext, useState, useEffect } from "react";
/*contexts */
import { UserContext } from "~/globals/UserContext";
/*componets */
import NotificationTab from "./NotificationTab";
/*styles */
import styles from "./Notifications.styles";
/*types */
import { NotificationType, OrganizationType } from "~/types";
/*utils */
import { organizationsData } from "~/utils/mockData";

const NotificationsList = () => {
  const {
    state: { userData },
  } = useContext(UserContext);
  const [organizations, setOrganizations] = useState<OrganizationType[]>([]);

  const { classes } = styles();

  useEffect(() => {
    //cached organization data
    setOrganizations(organizationsData);
  }, []);

  const notificationWrapper = (notifications: NotificationType[]) => {
    const notificationCopy=JSON.parse(JSON.stringify(notifications));
    notificationCopy.forEach((item:any) => {
      if (item?.type?.toLowerCase()?.includes("campaign")) {
        const organizationsRegisteredToCampaign: string[] = [];
        organizations.forEach((organization) => {
          if (
            typeof item?.campaignId === "string" &&
            organization.approvedCampaigns.includes(item.campaignId)
          ) {
              organizationsRegisteredToCampaign.push(organization.name);
          }
          });
          if (organizationsRegisteredToCampaign?.length > 0) {
          console.log(Math.random())
          item.title =
            item.title +
            ` with ${organizationsRegisteredToCampaign.join(", ")}`;
            console.log(organizationsRegisteredToCampaign, item.title);
        }
      }
    });
    return notificationCopy;
  };
  {/*this should be wrapped in infinite scroller*/}
  return (
    <div className={classes.notificationList}>
      {notificationWrapper(userData?.notifications)?.map(
        (item: NotificationType) => (
          <NotificationTab key={item?.id} details={item} />
        )
      )}
    </div>
  );
};

export default NotificationsList;
