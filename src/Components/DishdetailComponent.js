import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log(this.props);
    }

    renderDish(dish) {
        if (dish !== null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg
                            width="100%"
                            src={this.props.dish.image}
                            alt={this.props.dish.name}
                        />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        } else {
            <div>No dish here!!</div>;
        }
    }

    renderComments(comments) {
        if (comments !== null) {
            const commentListItems = comments.map((comment) => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>
                            {comment.author}, {comment.date}
                        </p>
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">{commentListItems}</ul>
                </div>
            );
        } else {
            return <div></div>;
        }
    }

    render() {
        if (this.props.dish) {
            return (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
                </div>
            );
        } else {
            return <div></div>;
        }
    }
}

export default DishDetail;
