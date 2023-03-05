import React from "react";
/*libraries */
import { makeStyles } from "tss-react/mui";
/*styles */
import breakpoints from "~/styles/breakpoints";
import { flexSpaceBetween } from "~/styles/mixins";

const styles = makeStyles()(() => ({
  organizationTab: {
    boxShadow: "9px 46px 140px -12px rgba(0,0,0,0.36)",
    borderRadius: "10px",
    width: "50%",
    padding: "18px",
    cursor: "pointer",
    ...flexSpaceBetween,
    [breakpoints.sm]: {
      width: "100% ",
    },
    "& > div:first-of-type": {
      "& > p": {
        fontSize: "2rem",
      },
    },
  },
  campaignInvoiceField: {
    textAlign: "center",
    "& > p": {
      fontSize: "1.3rem",
    },
  },
}));

interface Props {
  details: {
    name: string;
    invoicesGenerated: number;
    approvedCampaigns: string[];
  };
}
const OrganizationTab: React.FC<Props> = ({ details }) => {

  const { classes } = styles();
  const { name = "", invoicesGenerated = 0, approvedCampaigns = [] } = details;

  return (
    <div className={classes.organizationTab}>
      <div>
        <p>{name}</p>
      </div>
      <div className={classes.campaignInvoiceField}>
        <p>{invoicesGenerated}</p>
        <span>invoices</span>
      </div>
      <div className={classes.campaignInvoiceField}>
        <p>{approvedCampaigns?.length ?? 0}</p>
        <span>campaigns</span>
      </div>
    </div>
  );

};

export default OrganizationTab;
