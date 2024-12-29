import React, { useMemo } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { IProject} from "../../../types/IProject.tsx";

interface StackedCategoryChartProps {
    project: IProject;
}

const StackedCategoryChart: React.FC<StackedCategoryChartProps> = ({ project }) => {
    const data = useMemo(() => {
        const categories = [
            { name: 'Quality', risks: project.projectRisks.qualityRisks },
            { name: 'Costs', risks: project.projectRisks.costsRisks },
            { name: 'Delay', risks: project.projectRisks.delayRisks },
        ];

        return categories.map((cat) => {
            let highCount = 0;
            let mediumCount = 0;
            let lowCount = 0;
            cat.risks.forEach((risk) => {
                if (risk.critical === 'High') highCount++;
                else if (risk.critical === 'Medium') mediumCount++;
                else if (risk.critical === 'Low') lowCount++;
            });
            return {
                category: cat.name,
                high: highCount,
                medium: mediumCount,
                low: lowCount,
            };
        });
    }, [project]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="category" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="low" stackId="a" fill="#0088FE" name="Low" />
                <Bar dataKey="medium" stackId="a" fill="#FFBB28" name="Medium" />
                <Bar dataKey="high" stackId="a" fill="#FF8042" name="High" />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default StackedCategoryChart;
