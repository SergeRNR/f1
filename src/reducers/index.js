export default (state = { players: [] }, action) => {
    switch (action.type) {

        case 'LOAD_PLAYERS_SUCCESS':
            return Object.assign({}, state, {
                players: action.data
            });

        case 'SEARCH_PLAYERS':
            return Object.assign({}, state, {
                compare: {
                    playerA: action.data.playerA || null,
                    playerB: action.data.playerB || null
                }
            });

        default:
            return state;
    }
};
