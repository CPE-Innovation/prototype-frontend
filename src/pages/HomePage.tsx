import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid2, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {IProject} from "../types/IProject.tsx";
import { sampleProjects } from '../data/sampleProjects';
import GlobalStatsBoard from "../components/home/components/GlobalStatsBoard.tsx";

const HomePage: React.FC = () => {
    // 1. Calculer quelques stats globales si besoin
    const totalProjects = sampleProjects.length;
    const totalHigh = sampleProjects.reduce((acc, p) => acc + p.high_risks, 0);
    const totalMedium = sampleProjects.reduce((acc, p) => acc + p.medium_risks, 0);
    const totalLow = sampleProjects.reduce((acc, p) => acc + p.low_risks, 0);

    return (
        <Box p={2}>
            <Typography variant="h4" gutterBottom>
                KnowIt Dashboard
            </Typography>

            {/* Un composant qui affiche un ou plusieurs graphiques "globaux" */}
            <GlobalStatsBoard projects={sampleProjects} />

            {/* Un petit résumé rapide des stats globales */}
            <Box my={2}>
                <Typography variant="h6">Global Stats</Typography>
                <Typography>Total Projects: {totalProjects}</Typography>
                <Typography>Total High Risks: {totalHigh}</Typography>
                <Typography>Total Medium Risks: {totalMedium}</Typography>
                <Typography>Total Low Risks: {totalLow}</Typography>
            </Box>

            {/* Liste de tous les projets dans une grille */}
            <Grid container spacing={2}>
                {sampleProjects.map((project) => (
                    <Grid item xs={12} md={6} lg={4} key={project.projectId}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">{project.projectName}</Typography>
                                <Typography variant="body2" color="textSecondary">
                                    ID: {project.projectId} — Criticality: {project.critical}
                                </Typography>
                                <Typography variant="body2">
                                    High: {project.high_risks}, Medium: {project.medium_risks}, Low: {project.low_risks}
                                </Typography>

                                <Box mt={2}>
                                    {/*
                    On utilise Link de react-router-dom avec state pour passer
                    le projet complet à la page /project
                  */}
                                    <Button
                                        variant="contained"
                                        component={Link}
                                        to="/project"
                                        state={{ project }}
                                    >
                                        View Project
                                    </Button>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default HomePage;
