import React from 'react'
import IconButton from '@mui/material/IconButton';
import Popover from "@mui/material/Popover";

/*Icons */
import NotificationsIcon from '@mui/icons-material/Notifications';
function Notifications() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };


  return (
    <div>
    <IconButton onClick={handleClick}>
      <NotificationsIcon fontSize={"large"}/>
    </IconButton>
    <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
      >
        dshfsjhdfbjsdbhf
      </Popover>
      </div>
  )
}

export default Notifications