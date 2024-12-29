import React, { useMemo } from 'react';
import { IProject} from "../../../types/IProject";
import {
    PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { Box, Typography, Card, CardContent } from '@mui/material';

interface GlobalStatsBoardProps {
    projects: IProject[];
}

const GlobalStatsBoard: React.FC<GlobalStatsBoardProps> = ({ projects }) => {
    // On somme tous les risques H/M/L
    const { sumHigh, sumMedium, sumLow } = useMemo(() => {
        let sumHigh = 0, sumMedium = 0, sumLow = 0;
        projects.forEach(p => {
            sumHigh += p.high_risks;
            sumMedium += p.medium_risks;
            sumLow += p.low_risks;
        });
        return { sumHigh, sumMedium, sumLow };
    }, [projects]);

    const pieData = [
        { name: 'High', value: sumHigh },
        { name: 'Medium', value: sumMedium },
        { name: 'Low', value: sumLow },
    ];

    const COLORS = ['#FF8042', '#FFBB28', '#0088FE'];

    return (
        <Box mb={2}>
            <Card>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Global Risks Distribution
                    </Typography>
                    <Box width="100%" height={300}>
                        <ResponsiveContainer>
                            <PieChart>
                                <Pie
                                    dataKey="value"
                                    data={pieData}
                                    nameKey="name"
                                    outerRadius={80}
                                    label
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default GlobalStatsBoard;
