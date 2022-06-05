import React from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish !== null) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    } else {
        return <div>No dish here!!</div>;
    }
}

function RenderComments({ comments }) {
    if (comments !== null) {
        const commentListItems = comments.map((comment) => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author},{' '}
                        {new Date(comment.date).toLocaleDateString('en-US', {
                            weekday: 'short',
                            year: 'numeric',
                            month: 'short',
                            day: '2-digit',
                        })}
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
const DishDetail = (props) => {
    if (props.dish !== undefined) {
        return (
            <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        );
    } else {
        return <div></div>;
    }
};

export default DishDetail;
