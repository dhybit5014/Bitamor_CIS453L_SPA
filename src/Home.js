import React, { Component } from "react";
import image5 from './americanheartblog.png';
 
class Home extends Component {
  render() {
    return (
      <div>
        <img className="AHAlogo" src={image5} />
        <h2>Training you can trust</h2>
        <p> Safety Response Unit, LLC a is an authorized provider of courses designed and certified by the
           (AHA) American Heart Association, (ASHI) American Safety and Health Institute, 
           (AAP) American Academy of Pediatrics, (ARC) American Red Cross, 
           (NAEMT) National Association of Emergency Medical Technicians and (ITLS) International Trauma Life Support. 
           Attentive Safety CPR and Safety Training offers a variety of courses designed to equip all individuals, 
           from everyday citizens to healthcare providers, with the skills and knowledge to perform life-saving skills.
        </p>
        <h2>Being Prepared</h2>
        <p> Safety Response Unit, LLC a is an authorized provider of courses designed and certified by the
            As we all know, prevention is always the best way to protect ourselves and others from accidents and injury. 
            However, emergencies can still occur with even the most diligent precautions. Being trained to recognize and 
            respond to emergencies is the best way to prevent further harm and help others in need. Your ability to assess, 
            act, and help someone in need could mean the difference between life and death. After taking one of our courses, 
            you will have the skills and knowledge to react quickly in an emergency.
        </p>
 
        <p>Sign Up for a class now!</p>
      </div>
    );
  }
}

export default Home;