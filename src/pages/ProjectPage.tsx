import React from 'react';
import {Box, Button} from '@mui/material';
import Project from '../components/project/container/Project';
import Board from '../components/graphboard/container/Board';
import { IProject } from '../types/IProject';
import ProjectRisksDialog from "../components/risk/container/ProjectRisksDialog.tsx";
import {useLocation, useNavigate} from "react-router-dom";

const ProjectPage: React.FC = () => {
    // On récupère la data transmise via Link
    const location = useLocation();
    const navigate = useNavigate();

    // On "cast" le state pour TypeScript
    const { project } = location.state as { project: IProject };

    const [openRisks, setOpenRisks] = React.useState(false);

    if (!project) {
        // S'il n'y a pas de project, on redirige vers la home
        navigate('/');
        return null; // ou un loader
    }

    const handleShowRisks = () => setOpenRisks(true);
    const handleCloseRisks = () => setOpenRisks(false);

    return (
        <Box p={2}>
            <Project project={project} />

            <Box mt={4}>
                <Board project={project} />
            </Box>

            <Box mt={4}>
                <Button variant="contained" onClick={handleShowRisks}>
                    Show Risks
                </Button>
            </Box>

            <ProjectRisksDialog
                open={openRisks}
                onClose={handleCloseRisks}
                project={project}
            />
        </Box>
    );
};

export default ProjectPage;

