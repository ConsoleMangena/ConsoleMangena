import React from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "./TextDecrypt";
import { TextScramble } from "./TextScramble";
import Resume from "../../settings/resume.json";
import { FirstName, LastName } from "../../utils/getName";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: "auto",
    marginBottom: "auto",
  },
  heading: {
    marginLeft: theme.spacing(50),
    "@media (max-width: 1200px)": {
      marginLeft: theme.spacing(24),
    },
    "@media (max-width: 900px)": {
      marginLeft: theme.spacing(14),
    },
    "@media (max-width: 768px)": {
      marginLeft: theme.spacing(6),
    },
  },
  jobs: {
    fontSize: 'clamp(2rem, 6vw, 3.5rem)',
    lineHeight: 1.1,
    "@media (max-width: 768px)": {
      fontSize: 'clamp(1.75rem, 8vw, 2.5rem)',
    },
  },
}));

export const Content = () => {
  const classes = useStyles();

  return (
    <Container component="main" className={classes.main} maxWidth="md">
      <div className={classes.heading}>
        <Typography variant="h5" component="h2">
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </Typography>
        <Typography variant="h1" component="h1" className={classes.jobs}>
            {`${Resume.basics.job1} `}
            <TextScramble
              phrases={[
                `${Resume.basics.job2}`,
                `${Resume.basics.job3}`,
                'Game Developer'
              ]}
              interval={2200}
            />
        </Typography>
      </div>
    </Container>
  );
};
