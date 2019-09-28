import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import axios from 'axios';

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
            let feedbackToSend = this.props.reduxStore.feedbackReducer
            axios.post('/', feedbackToSend)
                .then(response => {
                    console.log('posted to feedback database', feedbackToSend)
                    this.props.history.push('/submit')
                }).catch(error => {
                    console.log('error in posting the order', error)
                })

        }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>Review Your Feedback</h2>
                    </div>
                    <div className="summary">
                       Feelings: {this.props.reduxStore.feedbackReducer.feeling}
                       <br></br>
                       <br></br>
                        Understanding: {this.props.reduxStore.feedbackReducer.understanding}
                       <br></br>
                       <br></br>
                        Support: {this.props.reduxStore.feedbackReducer.support}
                       <br></br>
                        <br></br>
                         Comments: {this.props.reduxStore.feedbackReducer.comments}
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
const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);