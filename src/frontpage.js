import "./App.css";
import React from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { getten, init } from "./action/actionPhotos";
import { incpage } from "./action/actionPage";
import { incy } from "./action/incrementy";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

class Front extends Component {
  componentDidMount() {
    // Checking whether page is loading for the first time or not
    if(!this.props.photo.initialised){
      this.props.init(this.props.page);
    }

    // Intersection Observer....to check when to fetch more photos
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.7
    }

    
    let observer = new IntersectionObserver(this.handleObserver.bind(this), options)
    
    observer.observe(this.loadingRef);
  }

  // Function for handling intersection observer
  handleObserver = (entities, observer) => {
    const y = entities[0].boundingClientRect.y;
    if(this.props.y > y){
      this.props.incpage(this.props.page)
      this.props.getten(this.props.page)
    }
    this.props.incy(y)
  }

  // Rendering the page
  render() {
    const item = this.props.photo.photos;
    return (
      <div id="header">
        <h1 style={{ textAlign: "center", fontSize: "40px" }}>TASK 2</h1>
        <Link style={{textDecoration: "none"}} to="/albums"><button className="albumbutton">View Photos In Album</button></Link>
        <div className="divflex">
          {item &&
            item.map((photo) => (
              <div>
                <Link to={`/${photo.id}`}>
                <img
                style={{ marginBottom: "20px", marginTop: "20px" }}
                src={photo.url}
                alt=''
                />
                </Link>
              </div>
            ))}
        </div>
        <div ref={loadingRef => (this.loadingRef = loadingRef)}>
        {this.props.photo.loaded && (
          <Loader
          id="loader"
          style={{textAlign: "center"}}
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
          />
          )}
          </div>
      </div>
    );
  }
}

// defining states to be used in components from redux
const mapStatesToProps = (state) => ({
  photo: state.photo,
  page: state.page.page,
  y: state.yvalue.value
});

const mapDespatchToProps = {
  getten,
  incpage,
  incy,
  init
};

export default connect(mapStatesToProps, mapDespatchToProps)(Front);