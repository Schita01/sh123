import aboutImg from "../assets/feature-bolt-building.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSymbol } from '@fortawesome/fontawesome-svg-core'
import { fa1, fa2, fa3} from "@fortawesome/free-solid-svg-icons";
// import "../animation.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react";


const About = () => {

  useEffect(() => {
    AOS.init({duration: 1000})
  },[])
  return (
    <>
      <div data-aos="zoom-in"  className="about">
        <div className="container">
          <div className="about-container">
            <div className="about-container-img">
              <img className="about-img" src={aboutImg} alt="" />
            </div>
            <div className="about-container-inf">
              <h3 className="about-h3">ჩვენ შესახებ</h3>
              <p className="about-p">
                ბოლტი არის პირველი ევროპული მობილური სუპერ-აპლიკაცია. ჩვენ ვცდილობთ <br />
                შევქმნათ ადამიანებზე მორგებული ქალაქები, მოსახლეობას ვთავაზობთ პირადი <br />
                ავტომობილების ალტერნატივას: ტაქსის გამოძახება, სკუტერები, საჭმლის და <br />
                სურსათის მიტანა.
              </p>
              <ul className="about-list">
               <li className="about-li">
                 <FontAwesomeIcon className="fas" icon={fa1} />
                  <div className="about-list-inf">
                    <span className="list-inf-span">150+ მილიონი</span>
                    <p className="list-inf-p">მომხმარებელი მსოფლიოს გარშემო</p>
                  </div>
               </li>
               <li className="about-li">
                 <FontAwesomeIcon className="fas" icon={fa2} />
                  <div className="about-list-inf">
                    <span className="list-inf-span">150+ მილიონი</span>
                    <p className="list-inf-p">მომხმარებელი მსოფლიოს გარშემო</p>
                  </div>
               </li>
               <li className="about-li">
                 <FontAwesomeIcon className="fas" icon={fa3} />
                  <div className="about-list-inf">
                    <span className="list-inf-span">150+ მილიონი</span>
                    <p className="list-inf-p">მომხმარებელი მსოფლიოს გარშემო</p>
                  </div>
               </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
