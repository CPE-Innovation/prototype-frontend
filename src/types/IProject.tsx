export type IRisk = {
    id: number;
    message: string;
    criteria: string;
    critical: string;
    date: string;
}

export type IProject = {
    projectId: number;
    projectName: string;
    high_risks : number;
    medium_risks : number;
    low_risks : number;
    critical : string;
    projectRisks: {
        qualityRisks: IRisk[];
        costsRisks: IRisk[];
        delayRisks: IRisk[];
    }
}