export const config = {
    partialUrls: {
        login: 'Login/SignIn',
        signup: 'Login/SignUp',
        getAllRoles: 'Login/GetRoleForRegister',
        getAllSportsForRegister: 'Login/GetSportsForRegister',

        getAllSports: 'Sport/GetAllSports',
        sportAdd: 'Sport/AddSport',
        sportDelete: 'Sport/DeleteSport',

        getAllVenues: 'Venue/GetAllVenues',
        venueAdd: 'Venue/AddVenue',
        venueDelete: 'Venue/DeleteVenue',

        getAllTeams: 'Team/GetAllTeams',
        teamAdd: 'Team/AddTeam',
        teamDelete: 'Team/DeleteTeam',
        teamUpdate: 'Team/UpdateTeam',
        teamPlayerRelease: 'Team/AddPlayerToTeam',
        teamPlayerAdd: 'Team/ReleasePlayerFromTeam',

        getAllTournaments: 'Tournament/GetAllTournaments',
        tournamentAdd: 'Tournament/AddTournament',
        tournamentDelete: 'Tournament/DeleteTournament',
        tournamentUpdate: 'Tournament/UpdateTournament',
        tournamentTeamRelease: 'Tournament/AddTeamToTournament',
        tournamentTeamAdd: 'Tournament/ReleaseTeamFromTournament',

        getAllMatches: 'Match/GetAllMatches',
        matchAdd: 'Match/AddMatch',
        matchDelete: 'Match/DeleteMatch',

        getUsersRoleWise: 'User/GetUsersRoleWise',
        getPlayersForTeam: 'User/GetPlayersForTeam',
    }
};
