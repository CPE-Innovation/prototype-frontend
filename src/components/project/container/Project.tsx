import React from 'react';
import { Card, CardContent, Divider, Box } from '@mui/material';
import { IProject} from "../../../types/IProject.tsx";
import ProjectHeader from "../components/ProjectHeader.tsx";
import ProjectDetails from "../components/ProjectDetails.tsx";

interface ProjectProps {
    project: IProject;
}

const Project: React.FC<ProjectProps> = ({ project }:ProjectProps) => {
    return (
        <Box sx={{ m: 2 }}>
            <Card variant="outlined">
                <CardContent>
                    <ProjectHeader project={project} />
                    <Divider sx={{ my: 2 }} />
                    <ProjectDetails project={project} />
                </CardContent>
            </Card>
        </Box>
    );
};

export default Project;
