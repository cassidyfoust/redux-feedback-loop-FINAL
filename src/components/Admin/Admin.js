import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

class Admin extends Component {

    state = {
        responses: []
    };
    
    componentDidMount = () => {
        this.getFeedback();
    }

    getFeedback = () => {
        this.setState({
            responses: []
        })
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

    handleDelete = (id) => {
        axios.delete(`/admin/${id}`)
            .then((response) => {
                console.log(response);
                this.getFeedback()
            }).catch((error) => {
                console.log('this is the error:', error)
            })
    }

    render() {
        return (
            <>
                    <div className="component">
                        <h2>Feedback Results:</h2>
                    </div>
                    <div className="component">
                        <table className="feedback-table">
                            <thead>
                                <th>Feeling</th>
                                <th>Comprehension</th>
                                <th>Support</th>
                                <th>Comments</th>
                                <th>Delete</th>
                            </thead>
                            <tbody>
                                {this.state.responses.map((response) => {
                                    return <tr key={response.id}>
                                        <td>{response.feeling}</td>
                                        <td>{response.understanding}</td>
                                        <td>{response.support}</td>
                                        <td>{response.comments}</td>
                                        <td> <IconButton onClick={(event) => this.handleDelete(response.id)}>
                                            <DeleteIcon /></IconButton></td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
            </>
        )
}
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Admin);