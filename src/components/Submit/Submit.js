import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: "10px",
                padding: "10px"
            }
        }
    }
});

class Submit extends Component {

    handleClick = () => {
        console.log('clicked next!')
        this.props.dispatch({type:'RESET_FEEDBACK'})
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>Thank you!</h2>
                    </div>
                    <div className="component">
                        <Button className="btn" variant="contained" color="primary" onClick={this.handleClick}>
                            Leave New Feedback
                    </Button>
                    </div>
                </MuiThemeProvider>
            </>
        )
    };
}
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Submit);