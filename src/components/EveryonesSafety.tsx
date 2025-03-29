import React from 'react'
import { Link } from 'react-router-dom'
import img1 from "../assets/12.webp";
import img2 from "../assets/13.webp";


const EveryonesSafety = () => {
  return (
    <div>
      <div className="everyonesSafety">
        <div className="container">
            <div className="everyonesSafety-container">
                <h2 className="eversuf-h2">მგზავრობის გაზიარება</h2>
                <div className="everyonesSafety-cont_inner">
                    <div className="everyonesSafety-inner_left">
                        <img className="eversaf-inner-img" src={img1} alt="" />
                        <h3 className="eversuf-h3">მგზავრის უსაფრთხოება</h3>
                        <p>
                            გაეცანით ჩვენი მხედრის უსაფრთხოების <br />
                            მახასიათებლებს — შემუშავებული თქვენს <br />
                            გათვალისწინებით
                        </p>
                        <Link className="saf-link" to={'passengersafety'}>გაიგეთ მეტი</Link>
                    </div>

                    <div className="everyonesSafety-inner_center"></div>
                    <div className="everyonesSafety-inner_right">
                    <img className="eversaf-inner-img" src={img2} alt="" />
                        <h3 className="eversuf-h3">მგზავრის უსაფრთხოება</h3>
                        <p>
                            გაეცანით ჩვენი მხედრის უსაფრთხოების <br />
                            მახასიათებლებს — შემუშავებული თქვენს <br />
                            გათვალისწინებით
                        </p>
                        <Link className="saf-link" to={'drivesaferty'}>გაიგეთ მეტი</Link>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EveryonesSafety
