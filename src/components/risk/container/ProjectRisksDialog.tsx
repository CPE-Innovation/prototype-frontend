// ProjectRisksDialog.tsx (alternative version si on veut gérer la suppression)

import React, { useState, useCallback } from 'react';
import {
    Dialog, DialogTitle, DialogContent, IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { IProject, IRisk } from "../../../types/IProject.tsx";
import RiskList from './RiskList';

interface ProjectRisksDialogProps {
    open: boolean;
    onClose: () => void;
    project: IProject;
}

const ProjectRisksDialog: React.FC<ProjectRisksDialogProps> = ({
                                                                   open,
                                                                   onClose,
                                                                   project
                                                               }) => {
    // On maintient une copie locale des risques pour la démo
    // On combine d'abord, ensuite setLocalRisks nous sert de "petite base" interne
    const [localRisks, setLocalRisks] = useState<IRisk[]>(() => [
        ...project.projectRisks.qualityRisks,
        ...project.projectRisks.costsRisks,
        ...project.projectRisks.delayRisks,
    ]);

    const handleDeleteRisk = useCallback((id: number) => {
        setLocalRisks((prev) => prev.filter((r) => r.id !== id));
    }, []);

    return (
        <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
            <DialogTitle>
                Risks of {project.projectName}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                <RiskList
                    risks={localRisks}
                    onDeleteRisk={handleDeleteRisk}
                />
            </DialogContent>
        </Dialog>
    );
};

export default ProjectRisksDialog;
