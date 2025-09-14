import React from 'react';
import { Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DisplacementSphere from '../components/background/DisplacementSphere';
import { ThemeToggle } from '../components/theme/ThemeToggle';
import { SocialIcons } from '../components/content/SocialIcons';
import { SpeedDials } from '../components/speedDial/SpeedDial';
import { SideNavbar } from '../components/nav/SideNavbar';
import { LogoLink } from '../components/logo/LogoLink';
import { Blog as BlogSection } from '../components/blog/Blog';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

export default function Blog() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <DisplacementSphere />
        <LogoLink />
        <ThemeToggle />
        <Hidden smDown>
          <SocialIcons />
        </Hidden>
        <Hidden mdUp>
          <SpeedDials />
        </Hidden>
      </div>
      <SideNavbar />
      <BlogSection />
    </>
  );
}
