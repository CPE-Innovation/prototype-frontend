import React from 'react';
import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import { IProject} from "../../../types/IProject.tsx";
import PieCriticityChart from '../components/PieCriticityChart';
import PieCategoryChart from '../components/PieCategoryChart';
import LineEvolutionChart from '../components/LineEvolutionChart';
import StackedCategoryChart from '../components/StackedCategoryChart';

interface BoardProps {
    project: IProject;
}

const Board: React.FC<BoardProps> = ({ project }) => {
    return (
        <Box mt={2}>
            <Typography variant="h5" gutterBottom>
                Dashboard de {project.projectName}
            </Typography>

            <Grid container spacing={2}>
                {/* Pie chart Criticity */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Risks repartition by criticality</Typography>
                            <PieCriticityChart project={project} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Pie chart Category */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Risks repartition by category</Typography>
                            <PieCategoryChart project={project} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Line chart Evolution */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Evolution of the number of risks</Typography>
                            <LineEvolutionChart project={project} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Stacked bar chart (optionnel) */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">High/Medium/Low distribution per category</Typography>
                            <StackedCategoryChart project={project} />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Board;
