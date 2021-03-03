import React, { Component } from "react";
import { connect } from "react-redux";
import { getall } from "./action/actionPhotos";
import "./photobyalbum.css"

class Photobyalbum extends Component {

    // getting all the photo with provided album id from redux store
  render() {
    if (this.props.loadedall) {
      var getd = this.props.allphoto.filter(
        (item) => item.albumId === +this.props.match.params.id
      );
    }

    // returning those photos that belongs to provided album id
    return (
      <div>
        <h1 style={{textAlign: "center"}}>ALBUM {this.props.match.params.id}</h1>
        <div className="photodisplay">
          {getd.map(photo => (
          <img style={{marginBottom: "20px"}} src={photo.url} alt="" />
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

export default connect(mapStatesToProps, mapDespatchToProps)(Photobyalbum);
