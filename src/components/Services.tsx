import React from 'react'
import carImg from "../assets/rides.png";



const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
            <div className="services-container">
                <h2 className="services-h2">ჩვენი სერვისები</h2>
                <p className="services-p">
                 უბრალოდ ბეჭდვისა და ბეჭდვის ინდუსტრიის მოჩვენებითი ტექსტია. Lorem Ipsum იყო ინდუსტრიის სტანდარტული <br />
                 მოჩვენებითი ტექსტი 1500-იანი წლებიდან,
                </p>
                <div className="services-cards">
                    <div className="serv-card">
                      <h3 className="serv-card-h3">
                        მგზავრობები
                      </h3>
                      <p className='serv-card-p'>
                      გამოიძახე ტაქსი
                     <br /> რამდენიმე წამში და <br />
                      იმგზავრე წუთებში.
                      </p>
                      <img className="serv-card-img" src={carImg} alt="" />
                    </div>
                  
                    
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Services
