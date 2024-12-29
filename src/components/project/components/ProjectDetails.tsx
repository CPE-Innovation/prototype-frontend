import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { IProject} from "../../../types/IProject.tsx";

interface ProjectDetailsProps {
    project: IProject;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
    return (
        <Box>
            <Typography variant="h6">Project details</Typography>
            <Stack spacing={1} mt={1}>
                <Typography variant="body1">
                    <strong>Criticality :</strong> {project.critical}
                </Typography>
                <Typography variant="body1">
                    <strong>High Risks :</strong> {project.high_risks}
                </Typography>
                <Typography variant="body1">
                    <strong>Medium Risks :</strong> {project.medium_risks}
                </Typography>
                <Typography variant="body1">
                    <strong>Low Risks :</strong> {project.low_risks}
                </Typography>
            </Stack>
        </Box>
    );
};

export default ProjectDetails;
