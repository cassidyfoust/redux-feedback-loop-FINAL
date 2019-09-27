import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, createMuiTheme , MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme ({
    overrides: {
        MuiButton: {
            root: {
                margin: "10px",
                padding: "10px"
            }
        }
    }
});

class Feeling extends Component {

    handleClick = () => {
        console.log('clicked next!')
        this.props.history.push('/understanding')
    }

    render() {
        return (
            <>
                <MuiThemeProvider theme={theme}>
            <div className="component">
                <h2>How are you feeling today?</h2>
                </div>
            <div className="component">
                <TextField
                    id="standard-number"
                    label="Feeling?"
                    // value={values.age}
                    // onChange={handleChange('age')}
                    type="number"
                    // className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    required={true}
                />
                    <Button className="btn" variant="contained" color="primary" onClick={this.handleClick}>
                        Next
                    </Button>
                </div>
                </MuiThemeProvider>
                </>
        )
    };
}
export default Feeling;