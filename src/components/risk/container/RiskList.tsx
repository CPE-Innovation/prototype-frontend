// RiskList.tsx
import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from '@mui/material';
import { IRisk} from "../../../types/IProject.tsx";
import RiskItem from '../components/RiskItem';

interface RiskListProps {
    risks: IRisk[];
    onDeleteRisk?: (id: number) => void;
}

const RiskList: React.FC<RiskListProps> = ({ risks, onDeleteRisk }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Message</TableCell>
                        <TableCell>Criteria</TableCell>
                        <TableCell>Critical</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {risks.map((risk) => (
                        <RiskItem
                            key={risk.id}
                            risk={risk}
                            onDelete={onDeleteRisk}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RiskList;
