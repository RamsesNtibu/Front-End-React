import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log("component ctor");
  }

  componentDidMount() {
    console.log("component DidMount");
  }

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
      return (
        <Card>
          {/* <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody> */}
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    let dish = this.props.dish;
    let dishCard = this.renderDish(dish);
    //let dishComment = this.renderComments(dish.comments);

    console.log("component rendering");
    return <div className="row">
      <div className="col-12 col-md-5 m-1">{dishCard}</div>
      <div className="col-12 col-md-5 m-1">{/*dishComment*/}</div>
    </div>;
  }
}

export default Dishdetail;
