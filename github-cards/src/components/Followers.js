import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));


export default function Followers({ followers }) {

  const classes = useStyles();

  return (
    <>
      {followers.map(follower => (
        <Card className={classes.root} key={follower.id}>
    <CardHeader
      
      action={
        <IconButton aria-label="settings">
        
        </IconButton>
      }
      title={follower.login}
      
    />
    <img
     
      src={follower.avatar_url}
         
          alt='profile'
    />
    
   
  
  </Card>
      ))

      }
    
);

    </>
  )
}
