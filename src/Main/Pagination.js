import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

let w = window.innerWidth;
let w1 = window.innerWidth / 2 + 250;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    width:'100%',
    display:'block',
    height:18
  },
  pag:{
      marginLeft:`calc(${w}px - ${w1}px )`
  }

}));


const MyPagination = () => {
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination className={classes.pag} count={10} color='secondary' variant="outlined" shape="rounded" />
    </div>
  );
    
}
 
export default MyPagination;
