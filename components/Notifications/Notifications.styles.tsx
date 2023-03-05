/*libraries */
import { makeStyles } from 'tss-react/mui';
/*styles */
import breakpoints from '~/styles/breakpoints';
import { flexSpaceBetween } from '~/styles/mixins';


const styles = makeStyles()(() => ({
  notificationList:{
    width:"320px",
    padding:"10px",
    [breakpoints.sm] :{
      width:"100% "
    }
  },
  badge: {
    fontSize: "1rem"
  },
  individualNotification:{
    borderRadius:"5px",
    padding:"5px",
    boxShadow: "9px 46px 41px -38px rgba(0,0,0,20)",
    cursor:"pointer",
    ...flexSpaceBetween,
    ":hover":{
      background:"#f2f3f5"
    },
    "& > div > p":{
      fontSize:"14px"
    },
    "& > span":{
      backgroundColor:"#2E89FF",
      width:"8px",
      height:"8px",
      borderRadius:"50%",
      display:"inline-block"
    }
  }
}));

export default styles;