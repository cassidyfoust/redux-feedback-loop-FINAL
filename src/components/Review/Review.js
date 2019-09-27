import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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

class Review extends Component {

    handleClick = () => {
        console.log('clicked next!')
        // this.props.history.push('/review')
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>Review Your Feedback</h2>
                    </div>
                    <div className="summary">
                       Feelings:
                       <br></br>
                       <br></br>
                       Understanding:
                       <br></br>
                       <br></br>
                       Support:
                       <br></br>
                        <br></br>
                        Comments:
                        </div>
                        <div className="component">
                        <Button className="btn" variant="contained" color="primary" onClick={this.handleClick}>
                            Submit
                    </Button>
                    </div>
                </MuiThemeProvider>
            </>
        )
    };
}
export default Review;