export interface PlayerInfo {
    id: number;
    fName: string;
    lName: string;
    userBio: string;
    sportId: number;
    sportName: string;
    dOB: string;
    country: string;
    joinedHistory: PlayerTeamInfo[];
}

export interface PlayerTeamInfo {
    teamPlayerId: number;
    teamId: number;
    teamName: string;
    joinedDate: string;
    releasedDate: string;
}

export interface TableTeamData {
    id: number;
    name: string;
    country: string;
    sportId: number;
    sportName: string;
    ownerId: number;
    ownerFName: string;
    ownerLName: string;
}

export interface TeamData {
    id: number;
    name: string;
    country: string;
    sportId: number;
    sportName: string;
    ownerId: number;
    ownerFName: string;
    ownerLName: string;
    lstPlayers: PlayerInfo[]
}