/*libraries */
import { makeStyles } from 'tss-react/mui';
import { flexSpaceBetween } from '~/styles/mixins';
/*utils*/
import variables from "~/styles/variables";

const styles = makeStyles()(() => ({
  root: {
   background:variables.white,
   padding:"14px",
   boxShadow: "9px 46px 41px -19px rgba(0,0,0,0.20)",
   ...flexSpaceBetween
  },
  headerOptions:{
    "& > button":{
      color:"unset"
    }
  }
}));

export default styles;