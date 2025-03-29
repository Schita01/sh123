import appImg from "../assets/Select_Lyft_EN_v5.webp";


const DowApp = () => {
  return (
    <>
      <div className="dow-app">
        <div className="container">
            <div className="dow-app-container">
                <h2 className="dow-app-h2">გადმოწერე ჩვენი აპლიკაცია</h2>
                <section className="dow-app-section">
                    <div className="section-left">
                    <h2 className="dow-sec-h2">
                         გამოიძახე რამდენიმე <br />
                        წამში და იმგზავრე <br />
                        წუთებში.</h2>
                    <p className="dow-sec-p">
                        ხელმისაწვდომია iOS და Android <br />
                        მოწყობილობებისთვის.
                    </p>
                    <button className="dow-btn">გადმოწერე აპლიკაცია</button>
                    </div>
                    <div className="section-right">
                        <img className="app-img" src={appImg} alt="" />
                    </div>
                </section>
            </div>
        </div>
      </div>
    </>
  )
}

export default DowApp
