/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';
import LimsImage from '../../assets/recentprojects/lims.png';
import SiteSurveyorImage from '../../assets/recentprojects/sitesurveyor.jpeg';
import MapperQuestImage from '../../assets/recentprojects/mapperquest.jpeg';



const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Land Information Management System',
      description: `A web-based Land Information Management System (LIMS) leveraging GIS for cadastral mapping, parcel searches, and secure records management. Features include parcel lookup, ownership history, document attachments, and role-based access for administrators and surveyors.`,
      alter: 'Land Information Management System',
      image: LimsImage,
    },
    {
      id: 2,
      title: 'SiteSurveyor – Geomatics Appstore',
      description: `SiteSurveyor is a geomatics app store that offers both free open‑source and premium professional tools for surveyors and GIS teams. It includes secure sign‑in with email verification, user profiles and protected pages, and features like AI/ML‑assisted image analysis, cloud collaboration, and support for common spatial data formats (Shapefile, GeoJSON, KML, GeoTIFF).`,
      alter: 'SiteSurveyor – Geomatics Appstore',
      image: SiteSurveyorImage,
    },
    {
      id: 3,
      title: 'MapperQuest',
      description: `MapperQuest is a friendly, game-inspired way to learn mapping and improve places that are missing from the map. It turns real community needs into small, easy tasks and shows your progress and impact as you go. The goal is to reduce data gaps in underserved regions while helping new contributors build confidence with clear guidance and simple feedback.`,
      alter: 'MapperQuest',
      image: MapperQuestImage,
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img
                src={ project.image }
                alt={ project.alter }
                className={`project-image project-image-${project.id}`}
              />
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
