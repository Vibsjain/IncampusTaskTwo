import React, { Component } from "react";
import { connect } from "react-redux";
import { incpage } from "./action/actionPage";
import { getten } from "./action/actionPhotos";
import { incy } from "./action/incrementy";
import Photopage from "./photopage";

class getPhotoById extends Component {

//   defining state that contain element with provided id - getd is array that store element with provided id 
  state = {
      getd: []
  }

//   Getting element using filter on all the photos fetched till now from redux store
  getd = [];
  getDetail = (id) => {
    if (this.props.photo.photos) {
      this.setState({
        getd: this.props.photo.photos.filter((item) => item.id === +id)
      })
    }
  };

  componentDidMount() {
    this.getDetail(this.props.match.params.id);
  }

//   Passing this element as a prop to another component that will render all the details
  render() {
    if (this.state.getd.length > 0) {
      return (
        <Photopage obj={this.state.getd[0]} />
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

const mapStatesToProps = (state) => ({
  photo: state.photo,
  page: state.page.page,
  y: state.yvalue.value,
});

const mapDespatchToProps = {
  getten,
  incpage,
  incy,
};

export default connect(mapStatesToProps, mapDespatchToProps)(getPhotoById);
