import { connect } from 'react-redux';
import Compare from './Compare';
import { searchPlayers } from '../actionCreators';

const mapStateToProps = state => {
    let compare = state.compare;
    if (compare) {
        return {
            playerA: compare.playerA,
            playerB: compare.playerB
        };
    }
    return { playerA: null, playerB: null };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSearch: function (name) {
        dispatch(searchPlayers(
            this.refs.playerA.value,
            this.refs.playerB.value
        ));
    }
});

const CompareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Compare);

export default CompareContainer;
