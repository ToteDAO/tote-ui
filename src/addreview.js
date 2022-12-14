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
import Validatepurchase from './validatepurchase';

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
    
    var productdetails;
    var path = window.location.pathname;
    var params = path.split('/');
    var id = params[params.length-1];
    if(id==1)
    productdetails ="The iPhone 13 also comes with dual 12MP cameras. There are 12MP ultra-wide, wide, and telephoto cameras on both the iPhone 13 Pro and iPhone 13 Pro Max";
    else if(id==2)
    productdetails ="Lipton iced tea is the perfect addition for any of your meals because of its crisp and refreshing taste. So don’t just default to the usual, enjoy the superior taste of fresh-brewed tea and choose Lipton Iced Tea. With a range of flavors available, our iced tea selection is sure to be a great treat for the whole family on a hot summer's day!";
    else if(id==3)
    productdetails ="The Devfolio Beta Program is open to all users. We’re looking for community members especially those who use have participated in various initiatives through the Devfolio platform.";


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
<Validatepurchase></Validatepurchase>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={3}>
                        <Grid item key="1" xs={6}>
                            <div>
                                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                    Add Review
                                </Typography>
                                <br/>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <TextField id="bounty-co-name" label="Appearance" variant="outlined"/> <br/>
                                    <TextField id="bounty-prod-name" label="Quality" variant="outlined"/> <br/>
                                    <TextField id="bounty-prod-link" label="Cost worthiness" variant="outlined"/> <br/>
                                    <TextField id="bounty-review-nums" label="Others" variant="outlined"/> <br/>    

                                    <FormControl className={classes.formControl}>
                                    <TextField id="bounty-prod-image" label="Product Image" type="file" variant="outlined"/><br/>

                                    {redirectToHome && <Redirect to="/"/>}
                                        <Button variant="contained" color="primary" onClick={() => setredirectToHome(true)}> SUBMIT </Button>
                                    </FormControl>
                                </form>
                            </div>
                        </Grid>
                        <Grid item key="2" xs={6}>
                            <div>
                            <h3> Product Details</h3>
                                {productdetails}
                            </div>
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