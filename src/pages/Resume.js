import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Grid,
  Paper,
  Chip,
  Divider,
  Link,
  Box,
  Avatar,
  IconButton,
  Tooltip,
  Zoom,
} from "@material-ui/core";
import ResumeData from "../settings/resume.json";
import ProfileImage from "../assets/profile.jpg";
import { Link as RouterLink } from 'react-router-dom';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(6),
    minHeight: "100vh",
  },
  section: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2.5),
    borderRadius: 16,
    boxShadow: "0 4px 30px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255,255,255,0.5)",
  },
  header: {
    marginBottom: theme.spacing(1.5),
  },
  chip: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  listItem: {
    marginBottom: theme.spacing(1.5),
  },
  muted: {
    opacity: 0.75,
  },
  socialIcons: {
    "& i": {
      fontSize: "1rem",
      marginRight: theme.spacing(1.5),
    },
  },
  hero: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  avatar: {
    width: 96,
    height: 96,
    marginBottom: theme.spacing(1.5),
    boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
  },
  name: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 600,
    letterSpacing: '0.02em',
    fontSize: '1.6rem',
    marginBottom: theme.spacing(0.5),
  },
  labelSmall: {
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '0.9rem',
    opacity: 0.85,
  },
  bodySmall: {
    fontFamily: 'Roboto, sans-serif',
    fontSize: '0.95rem',
  },
  exitButton: {
    position: 'fixed',
    top: theme.spacing(4),
    right: theme.spacing(4),
    zIndex: 2200,
    boxShadow:
      '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  },
  exitIcon: {
    fontSize: '1.25rem',
  },
}));

const SectionTitle = ({ children }) => (
  <Typography variant="h6" component="h2" gutterBottom>
    {children}
  </Typography>
);

export const Resume = () => {
  const classes = useStyles();

  const basics = ResumeData?.basics || {};
  const profiles = basics.profiles || [];
  const work = ResumeData?.work || [];
  const certifications = ResumeData?.certifications || [];
  const skills = ResumeData?.skills || [];
  const languages = ResumeData?.languages || [];
  const interests = ResumeData?.interests || [];

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Tooltip title="Exit" placement="left" TransitionComponent={Zoom}>
        <IconButton
          color="inherit"
          aria-label="Exit resume"
          component={RouterLink}
          to="/"
          className={classes.exitButton}
        >
          <Close className={classes.exitIcon} />
        </IconButton>
      </Tooltip>
      {/* Header */}
      <Paper className={classes.section}>
        <div className={classes.hero}>
          <Avatar src={ProfileImage} alt={basics.name} className={classes.avatar} />
          <Typography component="h1" className={classes.name}>
            {basics.name}
          </Typography>
          {basics.label && (
            <Typography className={classes.labelSmall}>{basics.label}</Typography>
          )}
          {/* Description intentionally hidden on the resume page */}
          {(profiles && profiles.length > 0) && (
            <Box mt={1.5} className={classes.socialIcons}>
              {profiles.map((p) => (
                <Link
                  key={p.network}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  color="inherit"
                  underline="none"
                >
                  <i className={p.x_icon} />
                </Link>
              ))}
            </Box>
          )}
        </div>
      </Paper>

      {/* Work */}
      {work.length > 0 && (
        <Paper className={classes.section}>
          <SectionTitle>Experience</SectionTitle>
          <Divider />
          <Box mt={1.5}>
            {work.map((w, idx) => (
              <div key={`${w.company}-${idx}`} className={classes.listItem}>
                <Typography variant="subtitle2">
                  <strong>{w.position}</strong> @ {w.company}
                </Typography>
                <Typography variant="caption" className={classes.muted}>
                  {w.startDate} – {w.endDate || "Present"}
                </Typography>
                {w.summary && (
                  <Typography className={classes.bodySmall}>{w.summary}</Typography>
                )}
                {w.highlights && w.highlights.length > 0 && (
                  <Box mt={1}>
                    {w.highlights.map((h, i) => (
                      <Chip key={i} size="small" label={h} className={classes.chip} />
                    ))}
                  </Box>
                )}
              </div>
            ))}
          </Box>
        </Paper>
      )}


      {/* Certifications */}
      {certifications.length > 0 && (
        <Paper className={classes.section}>
          <SectionTitle>Certifications</SectionTitle>
          <Divider />
          <Box mt={1.5}>
            {certifications.map((c, idx) => (
              <div key={`${c.name}-${idx}`} className={classes.listItem}>
                <Typography variant="subtitle2">
                  <strong>{c.name}</strong>
                </Typography>
                {c.authority && (
                  <Typography variant="caption" className={classes.muted}>
                    {c.authority}
                  </Typography>
                )}
              </div>
            ))}
          </Box>
        </Paper>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <Paper className={classes.section}>
          <SectionTitle>Skills</SectionTitle>
          <Divider />
          <Grid container spacing={2}>
            {/* Left column */}
            <Grid item xs={12} sm={6}>
              {skills.slice(0, Math.ceil(skills.length / 2)).map((s, idx) => (
                <div key={`${s.name}-${idx}`} className={classes.listItem}>
                  <Typography variant="subtitle2">
                    <strong>{s.name}</strong>
                  </Typography>
                  <Box mt={1}>
                    {(s.keywords || []).map((k, i) => (
                      <Chip key={i} size="small" label={k} className={classes.chip} />
                    ))}
                  </Box>
                </div>
              ))}
            </Grid>
            {/* Right column */}
            <Grid item xs={12} sm={6}>
              {skills.slice(Math.ceil(skills.length / 2)).map((s, idx) => (
                <div key={`${s.name}-${idx + Math.ceil(skills.length / 2)}`} className={classes.listItem}>
                  <Typography variant="subtitle2">
                    <strong>{s.name}</strong>
                  </Typography>
                  <Box mt={1}>
                    {(s.keywords || []).map((k, i) => (
                      <Chip key={i} size="small" label={k} className={classes.chip} />
                    ))}
                  </Box>
                </div>
              ))}
            </Grid>
          </Grid>
        </Paper>
      )}

      {/* Languages & Interests */}
      {(languages.length > 0 || interests.length > 0) && (
        <Grid container spacing={3}>
          {languages.length > 0 && (
            <Grid item xs={12} md={6}>
              <Paper className={classes.section}>
                <SectionTitle>Languages</SectionTitle>
                <Divider />
                <Box mt={1.5}>
                  {languages.map((l, i) => (
                    <Chip
                      key={`${l.language}-${i}`}
                      size="small"
                      label={`${l.language} – ${l.fluency}`}
                      className={classes.chip}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          )}
          {interests.length > 0 && (
            <Grid item xs={12} md={6}>
              <Paper className={classes.section}>
                <SectionTitle>Interests</SectionTitle>
                <Divider />
                <Box mt={1.5}>
                  {interests.map((intr, i) => (
                    <Chip
                      key={`${intr.name}-${i}`}
                      size="small"
                      label={intr.name}
                      className={classes.chip}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          )}
        </Grid>
      )}
    </Container>
  );
};

export default Resume;
