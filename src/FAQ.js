import React, { Component } from "react";
import image7 from './BLS-class5.jpg';
 
class FAQ extends Component {
  render() {
    return (
      <div>
        <img className="FaqIMG" src={image7} />
        <h2>Frequently Asked Questions:</h2>
        <ol>
        <ul>
        <li className="FaqHeader">Q: What is the minimum age to learn CPR?</li>
            <ul>
                <p>A: The AHA does not mandate a minimum age requirement for learning CPR. 
                    The ability to perform CPR is based more on body strength than age. 
                    Studies have shown that children as young as nine years old can learn and 
                    retain CPR skills.
                </p>
            </ul>
        </ul>
        <ul>
        <li className="FaqHeader">Q: Why is AED training included in all your CPR courses?</li>
            <ul>
                <p>A: The science in the official AHA Guidelines for CPR and ECC shows that 
                    victims have a greater chance of survival from cardiac arrest when high-quality 
                    CPR includes use of an AED.
                </p>
            </ul>
        </ul>
        <ul>
        <li className="FaqHeader">Q: Which CPR course should a "first responder" or “professional rescuer” take?</li>
            <ul>
                <p>A: First responders or professional rescuers generally include fire, police, 
                    and emergency medical personnel. These types of prehospital professionals 
                    usually need to complete a Basic Life Support (BLS) course. Check with your 
                    employer or licensing authority and learn more about our BLS course options.
                </p>
            </ul>
        </ul>
        </ol>
      </div>
    );
  }
}
 
export default FAQ;