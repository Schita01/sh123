import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSymbol } from '@fortawesome/fontawesome-svg-core'
import { fa1, fa2, fa3, fa4} from "@fortawesome/free-solid-svg-icons";
import Img from "../assets/xcs.svg";
import "../styles/all-style.css"; // Import CSS file


const SafertyPeople = () => {
  return (
    <>
      <div className="saferty-people">
        <div className="container">
          <h2 className="safpeopl-h2">მხარდაჭერა ადამიანებისაგან</h2>
          <div className="saferty-people-container">
            <div className="safpeopl-left-container"><img src={Img} alt="" /></div>
            <div className="safpeopl-left-right">
              <ul className="safpeopl-list">
                <li className="safpeopl-li">
                  <span>hello</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />
                   elit. Ipsam, odit iusto et maxime beatae at placeat. <br />
                    Praesentium blanditiis porro modi.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SafertyPeople
