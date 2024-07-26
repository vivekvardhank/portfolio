import React from 'react';
import { Box, Typography } from '@mui/material';
import { info } from '../../info/Info';
import Style from './Portfolio.module.scss';

export default function Portfolio({ innerRef }) {
  return (
    <Box id={"portfolio"} ref={innerRef} className={Style.portfolio_container}>
      {info.portfolio.map((project, index) => (
        <Box key={index} className={Style.portfolio_item}>
          {project.image && (
            <img src={project.image} alt={project.title} className={Style.project_image} />
          )}
          <Typography variant={"h5"} className={Style.project_title} style={{ fontSize: '25px', fontWeight:'bold' }}>{project.title}</Typography>
          <Typography variant={"body2"} className={Style.project_description} style={{ fontSize: '18px'}}>{project.description}</Typography>
          <Box className={Style.project_links}>
            <a href={project.live} target={"_blank"} rel="noopener noreferrer" className={Style.project_link}>Live</a>
            <a href={project.source} target={"_blank"} rel="noopener noreferrer" className={Style.project_link}>Source</a>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
