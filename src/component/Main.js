import React, { Component } from 'react';
import Contact from './Contact';
import Header from './Header';
import Home from './Home';
import Services from './Services';
import Footer from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    
    render() {
    
        const HomePage = () => {
        return (
            <Home
                // campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                // promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                // partner={this.state.partners.filter(partner => partner.featured)[0]}
            />
        );
        }

        
     
        return (
            <div>
                <Switch>
              <Header />
              <Route path='/home' component={HomePage} />
                    <Route exact path='/services'  />
                    <Route path='/contact'/>
                </Switch>
            <Footer />
            </div>
        );
    }
}


export default Main;