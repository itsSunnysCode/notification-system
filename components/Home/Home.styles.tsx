/*libraries */
import { makeStyles } from 'tss-react/mui';
/*utils*/
import variables from "~/styles/variables";

const styles = makeStyles()(() => ({
  root: {
    padding:"14px",
   background:variables.white,
   color:variables.black,
   "& > p:first-of-type":{
     fontSize:"3rem"
   },
   "& > div":{
     marginTop:"20px",
     "& > div":{
       marginBottom:"20px"
     }
   }
  },
  loadingOrganization:{
    fontSize:"1.5rem"
  }
}));

export default styles;