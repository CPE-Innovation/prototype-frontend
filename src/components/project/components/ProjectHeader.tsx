import React from 'react';
import { Box, Typography } from '@mui/material';
import { IProject} from "../../../types/IProject.tsx";

interface ProjectHeaderProps {
    project: IProject;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ project }) => {
    return (
        <Box mb={2}>
            <Typography variant="h4" component="h2">
                {project.projectName}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
                Project ID: {project.projectId}
            </Typography>
        </Box>
    );
};

export default ProjectHeader;
