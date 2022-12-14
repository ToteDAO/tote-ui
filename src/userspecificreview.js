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
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';

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
    
var Appearance;
var Quality;
var CostWorthiness;
var Others;
var Username;

    var path = window.location.pathname;
    var params = path.split('/');
    var id = params[params.length-1];
    if(id==="1")
    {
        Username="@madhu";
        Appearance="Good";
        Quality="Best";
        CostWorthiness="Awesome";
        Others="All good";
    }
    else if(id==2)
    {
        Username="@rocky";
        Appearance="Amazing";
        Quality="Best";
        CostWorthiness="Awesome";
        Others="All good";
    }
    else if(id==3)
    {
        Username="@buck";

        Appearance="Poor";
        Quality="Bad";
        CostWorthiness="Not at all";
        Others="Very bad";
    }
    else 
    {
        Username="@mike";

        Appearance="Poor";
        Quality="Bad";
        CostWorthiness="Not at all";
        Others="Very bad";
    }


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}

                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={3}>
                    <Typography component="h1" variant="h4"  color="textPrimary" gutterBottom>
                    Review by {Username}
                    </Typography>
                    <Grid item key="P" xs={6}>
                        
                    <Grid item key="1" xs={12}>
                    <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Appearance
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {Appearance}
                        </Typography>
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item key="1" xs={12}>
                    <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Quality
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {Quality}
                        </Typography>
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item key="1" xs={12}>
                    <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Cost worthiness
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {CostWorthiness}
                        </Typography>
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item key="1" xs={12}>
                    <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Others
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        {Others}
                        </Typography>
                    </CardContent>
                    </Card>
                    </Grid>
                    <CardContent>
                    <Typography variant="body2" color="text.secondary">
                    If you find this review helpful, like and get reward 
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        <Button variant="contained" color="primary" icon={<FavoriteIcon />} onClick="{() => ())}"> Like</Button>

                        </Typography> 
                    </CardContent>
                    {redirectToHome && <Redirect to="/"/>}
                    <Button variant="contained" color="primary" onClick={() => setredirectToHome(true)}>BACK</Button>
                   
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