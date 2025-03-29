import pointImg from "../assets/point.webp";
import "../styles/all-style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaSymbol } from '@fortawesome/fontawesome-svg-core'
import { fa1, fa2, fa3, fa4} from "@fortawesome/free-solid-svg-icons";



const SafetyTips = () => {
  return (
    <>
        <div className="safety-tips">
            <div className="container">
                <div className="safety-tips-container">
                    <h2 className="saf-tip-h2">მხედრის უსაფრთხოების რჩევები</h2>
                    <div className="security-points-container">
                        <div className="security-points-img-container">
                            {/* img */}
                        </div>
                        <div className="security-points-right-container">
                            <h3 className="saf-tip-h3">
                                თქვენი 4-პუნქტიანი <br />
                                უსაფრთხოების შემოწმება
                            </h3>
                            <p className="saf-tip-p">
                                სანამ შეხვალთ, დარწმუნდით, რომ სწორი მგზავრობა გაქვთ.
                            </p>
                            <ul className="sec-point-list">
                                <li className="sec-poin-li">
                                    <FontAwesomeIcon className="fas" icon={fa1} />
                                    <span className="sec-point-span">
                                        შეამოწმეთ მანქანის მარკა და მოდელი
                                    </span>
                                </li>
                                <li className="sec-poin-li">
                                    <FontAwesomeIcon className="fas" icon={fa2} />
                                    <span className="sec-point-span">
                                        დაადასტურეთ სანომრე ნიშანი
                                    </span>
                                </li>
                                <li className="sec-poin-li">
                                    <FontAwesomeIcon className="fas" icon={fa3} />
                                    <span className="sec-point-span">
                                        შეადარეთ დრაივერი თქვენს აპლიკაციაში არსებულ სურათს
                                    </span>

                                </li>
                                <li className="sec-poin-li">
                                    <FontAwesomeIcon className="fas" icon={fa4} />
                                    <span className="sec-point-span">
                                        ჰკითხეთ თქვენს მძღოლს, ვისთვის არიან ისინი აქ
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SafetyTips
