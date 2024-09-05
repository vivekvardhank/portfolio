import React from 'react';
import { Box } from "@mui/material";
import { Viewer, Worker } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import styles from './Resume.module.scss'; 
import resume from "../../img/resume_n.pdf"

export default function Resume({ innerRef }) {
    return (
        <Box ref={innerRef} className={styles.resumeContainer}  style={{marginTop:'40px'}}id="resume">
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={resume} showToolbar={true} />
            </Worker>
            <div className={styles.linkContainer}>
                <a href="https://drive.google.com/file/d/1XLRJoYJCuEeaXGtt6xPKJ14E6MrIkPSr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.driveLink}>
                    View on Google Drive
                </a>
            </div>
        </Box>
    );
}
