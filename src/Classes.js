import React, { Component } from "react";
import image6 from './ClassesIMG.jpg';
 
class Stuff extends Component {
  render() {
    return (
      <div>
        <img className="ClassIMG" src={image6} />
        <h2>Classes</h2>
        <ol>
          <li>CPR/AED</li>
          <li>Adult/Pediatric CPR and First Aid</li>
          <li>CPR/AED/First AID Instructor</li>
          <li>Lifeguard Course</li>
          <li>BLS and BLS Renewal</li>
        </ol>
      </div>
    );
  }
}
 
export default Stuff;