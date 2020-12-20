import React, {Component, Fragment} from 'react';
import './App.css'
// material imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
// material imports
import MainPage from "./Main-page/Main-page";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Link} from 'react-router-dom';
import Media from "./Media/Media";
import Contact from "./Contact/Contact";
import Biography from "./Biography/Biography";


export default class App extends Component {
    state = {
        main: false,
        biography: false,
        media: false,
        contact: false
    }
    btnToggleToFalse = () => ({
        main: false,
        biography: false,
        media: false,
        contact: false
    })
    onMain = () => {
        this.setState({...this.btnToggleToFalse(), main: !this.state.main})
    }
    onBiography = () => {
        this.setState({...this.btnToggleToFalse(), biography: !this.state.biography})
    }
    onMedia = () => {
        this.setState({...this.btnToggleToFalse(), media: !this.state.media})
    }
    onContact = () => {
        this.setState({...this.btnToggleToFalse(), contact: !this.state.contact})
    }

    render() {
        const {main,media, contact , biography} = this.state
        const mainStyle = main ? 'BtnIfTrue' : 'BtnIfFalse;'
        const mediaStyle = media ? 'BtnIfTrue' : 'BtnIfFalse;'
        const contactStyle = contact ? 'BtnIfTrue' : 'BtnIfFalse;'
        const biographyStyle = biography ? 'BtnIfTrue' : 'BtnIfFalse;'
        return (
            <Fragment>
                <Router>
                    <AppBar position="fixed">
                        <div className="nav-main">
                            <div className="nav-bar">
                                <Toolbar className="nav-content">
                                    <Link to="/">
                                        <Button onClick={this.onMain} className={mainStyle}
                                                color="inherit">Main</Button>
                                    </Link>

                                    <Link to="/media">
                                    <Button onClick={this.onMedia} className={mediaStyle} color="inherit">Media</Button>
                                    </Link>
                                    <Link to="/biography">
                                        <Button onClick={this.onBiography} className={biographyStyle}
                                                color="inherit">Biography</Button>
                                    </Link>
                                    <Link to="/contact">
                                    <Button onClick={this.onContact} className={contactStyle}
                                            color="inherit">Contact</Button>
                                    </Link>
                                </Toolbar>
                            </div>
                        </div>
                    </AppBar>
                    <Route path='/' exact={true} component={MainPage}/>
                    <Route path='/media' exact={true} component={Media}/>
                    <Route path='/contact' exact={true} component={Contact}/>
                    <Route path='/biography' exact={true} component={Biography}/>
                </Router>
            </Fragment>
        )
    }
}
