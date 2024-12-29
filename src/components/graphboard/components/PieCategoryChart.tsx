import React from 'react';
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { IProject} from "../../../types/IProject.tsx";

interface PieCategoryChartProps {
    project: IProject;
}

const COLORS = ['#00C49F', '#FFBB28', '#FF8042'];
// 3 couleurs pour Q, C, D

const PieCategoryChart: React.FC<PieCategoryChartProps> = ({ project }) => {
    const qualityCount = project.projectRisks.qualityRisks.length;
    const costsCount = project.projectRisks.costsRisks.length;
    const delayCount = project.projectRisks.delayRisks.length;

    const data = [
        { name: 'Quality', value: qualityCount },
        { name: 'Costs', value: costsCount },
        { name: 'Delay', value: delayCount },
    ];

    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    dataKey="value"
                    data={data}
                    nameKey="name"
                    outerRadius={90}
                    fill="#8884d8"
                    label
                >
                    {data.map((_entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieCategoryChart;
