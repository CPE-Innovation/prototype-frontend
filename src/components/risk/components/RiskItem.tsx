import React, { useCallback } from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { IRisk} from "../../../types/IProject.tsx";

interface RiskItemProps {
    risk: IRisk;
    onDelete?: (id: number) => void;
}

const RiskItem: React.FC<RiskItemProps> = ({ risk, onDelete }) => {
    // Callback quand on clique sur la poubelle
    const handleDelete = useCallback(() => {
        if (onDelete) {
            onDelete(risk.id);
        }
    }, [onDelete, risk]);

    return (
        <TableRow>
            <TableCell>{risk.id}</TableCell>
            <TableCell>{risk.message}</TableCell>
            <TableCell>{risk.criteria}</TableCell>
            <TableCell>{risk.critical}</TableCell>
            <TableCell>{risk.date}</TableCell>
            <TableCell align="center">
                <IconButton color="error" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
};

export default RiskItem;
