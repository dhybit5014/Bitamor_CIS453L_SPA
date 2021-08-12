import React, { Component } from "react";
import image1 from './BLS-class1.jpg';
import image2 from './BLS-class2.jpg';
import image3 from './BLS-class3.jpg';
import image4 from './BLS-class4.jpg';
 
class FavoriteActivities extends Component {
  render() {
    return (
      <div className="container">
        <h2 className="PhotosHeader">Enjoy the hands-on experience!</h2>
        <ul className="gallery">
            <img className="item" src={image1} />
            <img className="item" src={image2} />
            <img className="item" src={image3} />
            <img className="item" src={image4} />
        </ul>
      </div>
    );
  }
}

export default FavoriteActivities;