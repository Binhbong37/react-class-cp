import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { actions } from 'react-redux-form';

import {
    postComment,
    fetchDishes,
    fetchPromotions,
    fetchComments,
} from '../redux/actionCreator';

class Main extends Component {
    constructor(props) {
        super(props);

        this.props = {};
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchPromotions();
        this.props.fetchComments();
    }

    render() {
        const HomePage = () => {
            return (
                <Home
                    dish={
                        this.props.dishes.dishes.filter(
                            (dish) => dish.featured
                        )[0]
                    }
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrMess={this.props.dishes.errMess}
                    promotion={
                        this.props.promotions.promos.filter(
                            (promo) => promo.featured
                        )[0]
                    }
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={
                        this.props.leaders.filter(
                            (leader) => leader.featured
                        )[0]
                    }
                />
            );
        };

        const DishWithId = ({ match }) => {
            return (
                <DishDetail
                    dish={
                        this.props.dishes.dishes.filter(
                            (dish) => dish.id === parseInt(match.params.id)
                        )[0]
                    }
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter(
                        (comment) =>
                            comment.dishId === parseInt(match.params.id)
                    )}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addCommentt}
                />
            );
        };

        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route
                        exact
                        path="/menu"
                        component={() => <Menu dishes={this.props.dishes} />}
                    />
                    <Route exact path="/menu/:id" component={DishWithId} />
                    <Route
                        exact
                        path="/contactus"
                        component={() => (
                            <Contact resetForm={this.props.resetFeedbackForm} />
                        )}
                    />
                    <Route
                        exact
                        path="/aboutus"
                        component={() => <About leaders={this.props.leaders} />}
                    />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addCommentt: (dishId, rating, author, comment) =>
            dispatch(postComment(dishId, rating, author, comment)),
        fetchDishes: () => dispatch(fetchDishes()),
        fetchPromotions: () => dispatch(fetchPromotions()),
        fetchComments: () => dispatch(fetchComments()),
        resetFeedbackForm: () => dispatch(actions.reset('feedback')),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
