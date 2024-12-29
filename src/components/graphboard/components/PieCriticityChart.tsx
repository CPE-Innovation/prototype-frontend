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

interface PieCriticityChartProps {
    project: IProject;
}

const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];
// 3 couleurs (Low, Medium, High) par ex.

const PieCriticityChart: React.FC<PieCriticityChartProps> = ({ project }) => {
    // Data pour le pie chart
    const data = [
        { name: 'Low', value: project.low_risks },
        { name: 'Medium', value: project.medium_risks },
        { name: 'High', value: project.high_risks },
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

export default PieCriticityChart;
