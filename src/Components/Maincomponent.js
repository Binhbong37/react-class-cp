import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES, COMMENTS, PROMOTIONS, LEADERS } from '../shared/dishes';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
        };
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                    promotion={
                        this.state.promotions.filter(
                            (promo) => promo.featured
                        )[0]
                    }
                    leader={
                        this.state.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                />
            );
        };
        return (
            <>
                <Header />
                <div className="container">
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route
                            exact
                            path="/menu"
                            component={() => (
                                <Menu dishes={this.state.dishes} />
                            )}
                        />
                        <Route exact path="/contactus" component={Contact} />
                        <Route
                            exact
                            path="/aboutus"
                            component={() => (
                                <About leaders={this.state.leaders} />
                            )}
                        />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </>
        );
    }
}

export default Main;
