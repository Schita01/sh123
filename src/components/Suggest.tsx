
import sugImg from "../assets/home_pinkpaint_driver.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSymbol } from '@fortawesome/fontawesome-svg-core'
import { faMoneyBill, faClock, faBolt} from "@fortawesome/free-solid-svg-icons";



const Suggest = () => {
  return (
    <>
        <div className="suggest">
            <div className="container">
                <div className="suggest-container">
                    <div className="suggest-container-info">
                        <span className="sug-inf-main-span">იმოძრავეთ Flash Drive - ით</span>
                        <h3 className="sug-inf-h3">
                            დააყენეთ საკუთარი საათები. <br />
                            იშოვე საკუთარი პირობებით.
                        </h3>
                        <ul className="sug-list">
                            <li>
                                <div className="suggest-references">
                                    <span className="sug-ref-top-span">
                                      <FontAwesomeIcon icon={faMoneyBill} />
                                      სანდო შემოსავალი
                                    </span>
                                    <p className="sug-ref-p">
                                        იშოვე ფული, დაიცავი რჩევები
                                        და გაანაღლე როცა გინდა.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="suggest-references">
                                    <span className="sug-ref-top-span">
                                      <FontAwesomeIcon icon={faClock} />
                                      მოქნილი გრაფიკი
                                    </span>
                                    <p className="sug-ref-p">
                                        იყავით საკუთარი თავის უფროსი და იმოძრავეთ,
                                        როცა თქვენ გნებავთ.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="suggest-references">
                                    <span className="sug-ref-top-span">
                                      <FontAwesomeIcon icon={faBolt} />
                                      მიიღეთ მყისიერად გადახდა:
                                    </span>
                                    <p className="sug-ref-p">
                                        გაანაღდეთ თქვენი შემოსავალი, როცა გინდათ.
                                    </p>
                                </div>
                            </li>
                        </ul>    
                        <div className="sug-btns">
                            <button className="start-btn">დაიწყეთ</button>
                            <button className="how-work-btn">როგორ მუშაობს მძღოლის ანაზღაურება</button>
                        </div>
                    </div>
                    <div className="suggest-container-img">
                        <img className="sug-img" src={sugImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Suggest
