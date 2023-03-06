import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import Badge from "@mui/material/Badge";
/*components */
import NotificationsList from "./NotificationsList";
/*customHook */
import useIsMobile from "~/customHooks/useIsMobile";
/*contexts */
import { UserContext } from "~/globals/UserContext";
/*Icons */
import NotificationsIcon from "@mui/icons-material/Notifications";
/*styles */
import styles from "./Notifications.styles";

const Notifications = () => {
  const { isMobile } = useIsMobile();
  const {classes} = styles();
  const {
    state: { userData },
    setMarkZero
  } = useContext(UserContext);
  const router = useRouter();
  const [anchorEl, setAnchorEl] =
    useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMarkZero(true);
    //api for marking zero will be here so badge wont be there on next time.
    if (isMobile) {
      router.push("/notifications");
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
console.log("z",userData);
  return (
    <div>
      <IconButton onClick={handleClick}>
        <Badge
          badgeContent={
            userData?.markZero?0: userData?.notifications?.filter((d) => !d?.isRead)?.length
          }
          color="primary"
          classes={{ badge: classes.badge }}
        >
          <NotificationsIcon fontSize={"large"} />
        </Badge>
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <NotificationsList />
      </Popover>
    </div>
  );
};

export default Notifications;
