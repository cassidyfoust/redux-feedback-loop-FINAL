import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import axios from 'axios';

const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            root: {
                margin: "120px",
                padding: "10px"
            }
        }
    }
});

class Admin extends Component {

    state = {
        responses: []
    };
    
    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        axios.get('/admin')
            .then((response) => {
                console.log(response.data)
                response.data.forEach((feedback => {
                    this.setState({
                        responses: [...this.state.responses, feedback]
                    })
                }))
            }).catch((error) => {
                console.log('this is the error:', error)
            })
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
                    <div className="component">
                        <h2>Feedback Results:</h2>
                    </div>
                    <div className="component">
                        <table>
                            <tbody>
                                {this.state.responses.map((response) => {
                                    return <tr>
                                        <td>{response.feeling}</td>
                                        <td>{response.understanding}</td>
                                        <td>{response.support}</td>
                                        <td>{response.comments}</td>
                                        <td>Delete Button TK</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </MuiThemeProvider>
            </>
        )
}
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);