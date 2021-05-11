import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  } else {
    return <div></div>;
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    const commentList = comments.map((comment) => {
      let formattedDate = new Intl.DateTimeFormat("fr-CA", { year: "numeric", month: "short", day: "2-digit" }).format(
        new Date(Date.parse(comment.date))
      );

      return (
        <li key={comment.id}>
          <p className="text-left">{comment.comment}</p>
          <p className="text-left">
            -- {comment.author}, {formattedDate}
          </p>
        </li>
      );
    });
    return <ul class="list-unstyled">{commentList}</ul>;
  } else {
    return <div></div>;
  }
}

const Dishdetail = (props) => {
  if (props.dish != null) {
    let dish = props.dish;

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments comments={dish.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Dishdetail;
