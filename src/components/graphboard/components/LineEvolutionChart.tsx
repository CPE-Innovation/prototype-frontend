import React, { useMemo } from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';
import { IProject, IRisk} from "../../../types/IProject.tsx";

// Petit helper pour formater la date ou trier
const formatDate = (dateStr: string) => {
    // Si tu veux un format plus lisible : YYYY-MM-DD
    return dateStr.slice(0, 10);
};

interface LineEvolutionChartProps {
    project: IProject;
}

const LineEvolutionChart: React.FC<LineEvolutionChartProps> = ({ project }) => {
    // On combine tous les risques dans un seul tableau
    const allRisks: IRisk[] = [
        ...project.projectRisks.qualityRisks,
        ...project.projectRisks.costsRisks,
        ...project.projectRisks.delayRisks,
    ];

    // On regroupe par date le nombre de risques créés
    const data = useMemo(() => {
        const dateCountMap: Record<string, number> = {};

        allRisks.forEach((risk) => {
            const dateKey = formatDate(risk.date);
            if (!dateCountMap[dateKey]) {
                dateCountMap[dateKey] = 0;
            }
            dateCountMap[dateKey] += 1;
        });

        // Transformer l'objet en tableau trié par date
        const sortedDates = Object.keys(dateCountMap).sort();
        return sortedDates.map((date) => ({
            date,
            count: dateCountMap[date],
        }));
    }, [allRisks]);

    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" stroke="#8884d8" name="Risks" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default LineEvolutionChart;
