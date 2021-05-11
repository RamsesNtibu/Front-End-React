import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
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

  renderComments(comments) {
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

  render() {
    if (this.props.dish != null) {
      let dish = this.props.dish;
      let dishCard = this.renderDish(dish);
      let dishComment = this.renderComments(dish.comments);

      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">{dishCard}</div>
            <div className="col-12 col-md-5 m-1">
              <h4>Comments</h4>
              {dishComment}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default Dishdetail;
