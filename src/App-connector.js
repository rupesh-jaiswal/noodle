import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from './App';
import { getNoodles } from './state/noodle/noodle-action-creators';


const mapStateToProps = (state) => ({
    noodles: state.noodle.noodles,
    asyncStatus: state.noodle.asyncStatus,
});

// const mapDispatchToProps = (state) => ({
//     getNoodles,
// });

const mapDispatchToProps = (dispatch) => ({
    actions: {
        ...bindActionCreators(
            {
                getNoodles,
            },
            dispatch
        ),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
