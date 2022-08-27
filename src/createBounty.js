import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

export default function Album() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [redirectToHome, setredirectToHome] = React.useState(false);

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    
    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={0}>
                        <Grid item xs={12}>
                        {/* <div> */}

                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Create a new bounty
                            </Typography>
                            <br/>
                            <form className={classes.root} noValidate autoComplete="off">
                                <TextField id="bounty-co-name" label="Name of the company" variant="outlined"/> <br/>
                                <TextField id="bounty-prod-name" label="Name of the product" variant="outlined"/> <br/>
                                <TextField id="bounty-prod-link" label="Product website link" variant="outlined"/> <br/>
                                <TextField id="bounty-review-nums" label="Number of bounties sponsored" variant="outlined"/> <br/>
                                <TextField id="bounty-review-amt" label="Amount sponsored per bounty" variant="outlined"/> <br/>
                                <FormControl className={classes.formControl}>

                                {/* <InputLabel shrink id="demo-simple-select-placeholder-label-label">Target age group</InputLabel>
                                <Select
                                    labelId="demo-simple-select-placeholder-label-label"
                                    id="demo-simple-select-placeholder-label"
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    className={classes.selectEmpty}
                                >
                                    <MenuItem value=""><em>None</em> </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                                <FormHelperText>Label + placeholder</FormHelperText> */}
                                    
                                    <TextField id="bounty-prod-image" label="Product Image" type="file" variant="outlined"/>
                                {redirectToHome && <Redirect to="/"/>}
                                    
                                    <Button variant="contained" color="primary" onClick={() => setredirectToHome(true)}> SUBMIT </Button>
                                </FormControl>
                            </form>
                        {/* </div> */}
                        </Grid>
                    </Grid>
                </Container>
            </main>
            {/*/!* Footer *!/*/}
            {/*<footer className={classes.footer}>*/}
            {/*    <Typography variant="h6" align="center" gutterBottom>*/}
            {/*        Footer*/}
            {/*    </Typography>*/}
            {/*    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
            {/*        Something here to give the footer a purpose!*/}
            {/*    </Typography>*/}
            {/*    <Copyright />*/}
            {/*</footer>*/}
            {/*/!* End footer *!/*/}
        </React.Fragment>
    );
}