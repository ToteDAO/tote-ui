import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {Redirect} from 'react-router-dom';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cards = [1, 2, 3];

const iphoneReviewsCount=4;
const icedTeaReviewsCount=4;
const devfolioReviewsCount=4;

export default function Album() {
    const [redirectTriggeredNewProposal, setRedirectNewProposal] = React.useState(false);
    const [redirectTriggeredOpenProposal, setRedirectOpenProposal] = React.useState(false);
    const classes = useStyles();
    const [redirectToAddReview, setredirectToAddReview] = React.useState(false);
    const [redirectToHome, setredirectToHome] = React.useState(false);


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Reviews
                        </Typography>
                        
                        
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={3}>
                        <Grid item key="P" xs={6}>
                        <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                        Positive Reviews
                        </Typography>
                        <Grid item key="1" xs={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            by Username Positive 1
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {redirectToAddReview && <Redirect to="/userspecificreview/1"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                            Detailed review 
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item key="2" xs={12}>
                            <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            by Username Positive 2
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {redirectToAddReview && <Redirect to="/userspecificreview/1"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                            Detailed review
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                      <Grid item key="N"  xs={6}>
                      <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
                      Negative Reviews
                        </Typography>
                      <Grid item key="3" xs={12}>
                                <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            by Username Negative 1
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {redirectToAddReview && <Redirect to="/userspecificreview/1"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                            Detailed review
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item key="4" xs={12}>
                            <Card className={classes.card}>
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            by Username Negative 2
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {redirectToAddReview && <Redirect to="/userspecificreview/1"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                            Detailed review
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        </Grid>
                        {redirectToHome && <Redirect to="/overallreview"/>}
                            <Button variant="contained" color="primary" onClick={() => setredirectToHome(true)}> Back </Button>

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