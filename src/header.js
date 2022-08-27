import {
    AppBar,
    Toolbar,
    Typography,
    makeStyles,
    Button,
} from "@material-ui/core";
import React from "react";
import Login from "./login";
import { useHistory } from "react-router-dom";
import {Redirect} from 'react-router-dom';

const headersData = [
    {
        label: "Log In",
        href: "https://www.iome.ai/",
       
    },
    {
        label:"Sign up",
        href:"https://www.iome.ai/"
    }
];

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: "#008080",
        paddingRight: "79px",
        paddingLeft: "118px",
    },
    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function Header() {
    const { header, logo, menuButton, toolbar } = useStyles();
    const history = useHistory();
    const displayDesktop = () => {
        return (
            <Toolbar className={toolbar}>
                {toteDaoLogo}
                <div>
                    {getMenuButtons()}
                </div>
            </Toolbar>
        );
    };

    const toteDaoLogo = (

        <Typography variant="h6" component="h1" className={logo} onClick={() => Redirect("/")}>
            Tote DAO
        </Typography>
    );

    const getMenuButtons = () => {
        // const [redirectToCommunity, setRedirectToCommunity] = React.useState(false);
        // const [redirectToCreate, setRedirectToCreate] = React.useState(false);
            return (


                <></>
                // {redirectToCreate && <Redirect to="/newcommunity" /> }

                // <Button size="small" color="primary" onClick={ () => setRedirectToCreate(true) }>
                //     CREATE NEW GROUP
                // </Button>
            );
        
    };

    return (
        <header>
            {/* <Login /> */}
            <AppBar className={header}>{displayDesktop()}</AppBar>
        </header>
    );
}