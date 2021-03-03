import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getall } from "./action/actionPhotos";
import "./album.css";

class Albums extends Component {
  state = {
    output: [],
  };

  componentDidMount() {
    this.props.getall();
  }

  render() {

    // Getting unique number of album Id present in data using for loop
    if (this.props.loadedall) {
      var flag = [];
      var output = [];
      for (var i = 0; i < 4999; i++) {
        if (flag[this.props.allphoto[i].albumId]) continue;
        flag[this.props.allphoto[i].albumId] = true;
        output.push(this.props.allphoto[i].albumId);
      }
    }

    // returning cards for unique album id so that user can get only those photos which have same album id as that of card
    return (
      <div>
        <h1 style={{textAlign: "center"}}>ALBUMS</h1>
        <div className="displayflex">
          {this.props.loadedall &&
            output.map((album) => (
            <Link to={`/album/${album}`} style={{textDecoration: "none"}}>
            <div className="albumdesign">
            <h1 className="albumno">{album}</h1>
            </div>
            </Link>
            ))}
        </div>
      </div>
    );
  }
}

const mapStatesToProps = (state) => ({
  allphoto: state.allPhoto.allphoto,
  loadedall: state.allPhoto.loadedall,
});

const mapDespatchToProps = {
  getall,
};

export default connect(mapStatesToProps, mapDespatchToProps)(Albums);
