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


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Overall Review
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                           This is an overall review for the products
                        </Typography>
                        
                    </Container>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                      
                            
                            <Grid item key="1" xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRySyXSk4AMa8M3D6RbMfR3v47UiLDPBlbAu33DcNDzG7ilOoQNi4AYAx-wSfrWX87ip-Kyfp-p79N8--hgypghvvOvVPKYDQ"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            iPhone 13
                                        </Typography>
                                        <Typography>
                                            Total reviews: {iphoneReviewsCount}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        {redirectToAddReview && <Redirect to="/detailedreview/1"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                            Detailed review
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item key="2" xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://www.lipton.com/content/dam/unilever/lipton_international/united_states_of_america/pack_shot/041000008450-1545970-png.png"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Lipton Iced Tea
                                        </Typography>
                                        <Typography>
                                        Total reviews: {icedTeaReviewsCount}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {redirectToAddReview && <Redirect to="/detailedreview/2"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                        Detailed review
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                            <Grid item key="3" xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://devfolio.co/blog/content/images/size/w2000/2022/02/Frame-3.png"
                                        title="Image title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                           Devfolio Beta
                                        </Typography>
                                        <Typography>
                                        Total reviews: {devfolioReviewsCount}

                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                    {redirectToAddReview && <Redirect to="/detailedreview/3"/>}
                                        <Button size="small" color="primary" onClick={() => setredirectToAddReview(true)}>
                                        Detailed review
                                        </Button>
                                    </CardActions>
                                </Card>
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