import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions } from '@material-ui/core';
import {Redirect} from 'react-router-dom';

export default function MultiActionAreaCard() {
    const [redirectToCommunity, setRedirectToCommunity] = React.useState(false);
    const [redirectToJoinBounty, setredirectToJoinBounty] = React.useState(false);
    const [redirectToCreate, setRedirectToCreate] = React.useState(false);
    const [redirectToReviews, setredirectToReviews] = React.useState(false);

    return (
        
        <div style={{display: "flex", justifyContent : "space-between", padding: "0px 151px"}}>
{window.secretkey}
            
            {redirectToCommunity && <Redirect to="/createbounty" /> }
            <Card style={{width: "350px"}} onClick={ () => setRedirectToCommunity(true) }>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image=" https://img.freepik.com/premium-photo/together-everything-is-possible_102671-887.jpg?w=2000"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Create Bounty
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Are you a product company looking for reviews? Create a bounty and let your genuine users offer reviews.
                            <br/>
                            <br/>
                            <br/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Create a bounty
                    </Button>
                </CardActions>
            </Card>

            {redirectToJoinBounty && <Redirect to="/joinbounty"></Redirect>}
            <Card style={{width: "350px"}} onClick={()=>setredirectToJoinBounty(true)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="http://csb.eu.com/en/wp-content/uploads/join-us.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Join Bounty
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Are you a product user interested in getting bounties in exchange for an honest review? Join a bounty.
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>                    
                    <Button size="small" color="primary" onClick={()=>setredirectToJoinBounty(true)}>
                        Join a bounty
                    </Button>
                </CardActions>
            </Card>

            {redirectToReviews && <Redirect to="/overallreview"></Redirect>}
            <Card style={{width: "350px"}}  onClick={()=>setredirectToReviews(true)}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://images.theconversation.com/files/286560/original/file-20190801-169706-htdqem.jpg?ixlib=rb-1.1.0&rect=0%2C269%2C6000%2C3000&q=45&auto=format&w=668&h=324&fit=crop"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Read Reviews
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           Are you a prospective buyer interested in buying a product? Then browse the verified customer reviews.
                            <br/>
                            <br/>
                            <br/>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={()=>setredirectToReviews(true)}>
                        Read product reviews
                    </Button>
                </CardActions>
            </Card>
        </div>


    );
}
