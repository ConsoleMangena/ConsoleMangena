import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import { TextDecrypt } from '../content/TextDecrypt';
import { Link as RouterLink } from 'react-router-dom';
import {
  ResumeIcon
} from '../content/ResumeButton';

const useStyles = makeStyles((theme) => ({
  footerText: {
    position: 'fixed',
    bottom: theme.spacing(6),
    left: theme.spacing(6),
    '&:hover': {
      color: theme.palette.primary.main,
    },
    transition: 'all 0.5s ease',
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '@media (max-width: 768px)': {
      bottom: theme.spacing(12),
      left: theme.spacing(3),
    },
  },
  
}));

export const Resume = () => {
  const classes = useStyles();

  return (
    <Link
      color='inherit'
      underline='none'
      component={RouterLink}
      to='/resume'
      className={classes.footerText}
    >
      <ResumeIcon />
      <Typography component='span'>
        <TextDecrypt text={' Resume'} />
      </Typography>
    </Link>
  );
};
