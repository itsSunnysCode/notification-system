/*libraries */
import { makeStyles } from 'tss-react/mui';
/*utils*/
import variables from "~/styles/variables";

const styles = makeStyles()(() => ({
  root: {
   background:variables.white,
   color:variables.black,
   fontSize:"2rem"
  },
}));

export default styles;