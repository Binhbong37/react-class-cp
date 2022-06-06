import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { DISHES } from '../shared/dishes';

import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomeComponent from './HomeComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

    render() {
        const HomePage = () => {
            return <HomeComponent />;
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
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </>
        );
    }
}

export default Main;
