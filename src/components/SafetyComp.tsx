import { Link, useNavigate } from "react-router-dom";
import safCImg from "../assets/home_pinkpaint_safety.webp";

const SafetyComp = () => {
    const navigate = useNavigate();
    
    const getNavigate = () => {
        navigate("/saferty")
    }

  return (
    <>
        <div className="safetyComp">
            <div className="container">
                <div className="safetyComp-container">
                    <div className="safetyComp-container-img">
                        <img className="safc-img" src={safCImg} alt="" />
                    </div>
                    <div className="safetyComp-container-inf">
                        <span className="safC-inf-head-text">უსაფრთხოება პირველ რიგში</span>
                        <h3 className="safC-inf-h3">
                            თქვენი უსაფრთხოება <br />
                            უპირველეს ყოვლისა. <br />
                            ყოველთვის.
                        </h3>
                        <p className="safC-inf-p">
                           ჩვენ ვზრუნავთ თქვენზე ყოველი გასეირნების წინ, <br />
                           დროს და შემდეგ. და ჩვენ ვამოწმებთ თქვენთან <br />
                           მგზავრობისას, რათა დაგეხმაროთ იქ, სადაც უნდა<br />
                           წახვიდეთ. თუ ოდესმე დაგჭირდებათ, ჩვენ გვერდით <br />
                           ვართ, მზად ვართ დაგეხმაროთ.
                        </p>
                        <button onClick={getNavigate} 
                         className="safC-btn">მეტის გაგება</button>
                    </div>
                </div>
            </div>
        </div>
    </>

  )
}

export default SafetyComp
