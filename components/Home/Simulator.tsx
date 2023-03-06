import React, { useState, useContext } from "react";
/*Contexts */
import { UserContext } from "~/globals/UserContext";
/*library */
import { SelectChangeEvent } from "@mui/material/Select";
/*components */
import Button from "~/components/common/Button";
import Select from "~/components/common/Select";
/*utils */
import { notificationTypes } from "~/utils/notificationTypes";
import { replaceUWS } from "~/utils/casingHelpers";
/*styles */
import { flexSpaceBetween } from "~/styles/mixins";

const notificationTypesOptions = [
  {
    label: replaceUWS(notificationTypes?.campaignLandingPage),
    value: notificationTypes?.campaignLandingPage,
  },
  {
    label: replaceUWS(notificationTypes?.invoiceGenerated),
    value: notificationTypes?.invoiceGenerated,
  },
  {
    label: replaceUWS(notificationTypes?.referral),
    value: notificationTypes?.referral,
  },
  {
    label: replaceUWS(notificationTypes?.campaignStatus),
    value: notificationTypes?.campaignStatus,
  },
];
const campaignOptions = [
  {
    label: "Campaign1",
    value: "camp1",
  },
  {
    label: "Campaign2",
    value: "camp2",
  },
  {
    label: "Campaign3",
    value: "camp3",
  },
  {
    label: "Campaign5",
    value: "camp5",
  },
  {
    label: "Campaign8",
    value: "camp8",
  },
  {
    label: "Campaign9",
    value: "camp9",
  },
  {
    label: "Campaign19",
    value: "camp19",
  },
];
const titleGenerator = (type:string) => {
  let message;
  switch (type) {
    case notificationTypes.campaignLandingPage:
      message="New Landing Page Added for a campaign"
      break;
    case notificationTypes.referral:
      message="A New User Signed up using your referral"
      break;
    case notificationTypes.invoiceGenerated:
      message="New Invoice has been generated"
      break;
    case notificationTypes.campaignStatus:
      message="Campaign has been deactivated"
      break;    
    default:
      break;
  }
  return message;
}
const Simulator = () => {
  const {
    state: { userData },
    addNotification,
    setMarkZero
  } = useContext(UserContext);
  const [typeOfNotification, setTypeOfNotification] = useState("");
  const [campaign, setCampaign] = useState("");
  const addNotifications = () => {
    setMarkZero(false);
    addNotification({
      id: Math.random(),
      title: titleGenerator(typeOfNotification),
      type: typeOfNotification,
      created: Date.now(),
      isRead: 0,
      campaignId:campaign,
      organizationId:null
    },)
  };

  return (
    <div style={{ ...flexSpaceBetween, justifyContent: "start" }}>
      <Select
        label={"Type Of Notification"}
        onChange={(e: SelectChangeEvent) =>
          setTypeOfNotification(e.target.value)
        }
        value={typeOfNotification}
        options={notificationTypesOptions}
      />
      {typeOfNotification?.toLowerCase()?.includes("campaign")?<Select
        label={"Select Campaign"}
        onChange={(e: SelectChangeEvent) =>
          setCampaign(e.target.value)
        }
        value={campaign}
        options={campaignOptions}
      />:null}
      <Button onClick={() => addNotifications()}>
        Click to add more notifications
      </Button>
    </div>
  );
};

export default Simulator;
