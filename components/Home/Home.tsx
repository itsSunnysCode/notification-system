import React, { useEffect, useState, useContext } from "react";

/*components */
import OrganizationTab from "~/components/common/OrganizationTab";
import Button from "~/components/common/Button";
import Simulator from "./Simulator";
/*styles */
import styles from "./Home.styles";
/*contexts */
import { UserContext } from "~/globals/UserContext";
/*utils */
import { organizationsData } from "~/utils/mockData";
import { mockSuccessAPI } from "~/utils/mockAPI";
import tc from "~/utils/tc";

interface OrganizationType {
  id: string;
  name: string;
  invoicesGenerated: number;
  approvedCampaigns: string[];
}

const Home = () => {
  const { classes } = styles();
  const [loading, setLoading] = useState(false);
  const {
    state: { userData },
  } = useContext(UserContext);

  const [organizations, setOrganizations] = useState<OrganizationType[]>([]);

  const fetchOrganizations = async () => {
    setLoading(true);
    const [error, res] = await tc(mockSuccessAPI());
    setLoading(false);
    if (res?.isSuccess) {
      setOrganizations(organizationsData);
    }
  };

  useEffect(() => {
    fetchOrganizations();
  }, []);

  const addNotifications = (): void => {
    //
  };

  return (
    <div className={classes.root}>
      <p>Hi {userData?.name}, Welcome to your dashboard</p>
      {loading ? (
        <p className={classes.loadingOrganization}>Loading organizations...</p>
      ) : (
        <div>
          {organizations.map((item) => (
            <OrganizationTab key={item?.id} details={item} />
          ))}
        </div>
      )}
      <span>
        <b>*</b>Below Section is just for simulating few scenarios, this WON'T exist on production app<b>*</b>
      </span>
      <div>
        <Simulator/>
      </div>
    </div>
  );
};

export default Home;
//TODO:customize mock api and add lodader