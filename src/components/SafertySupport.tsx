import safSupImg from "../assets/fst.svg";

const SafertySupport = () => {
  return (
    <>
        <div className="saferty-support">
            <div className="container">
                <div className="saferty-support-container">
                    <h2 className="saf-sup-h2">პროაქტიული უსაფრთხოების მხარდაჭერა</h2>
                    <div className="saf-sup-cont_in">

                    <div className="saf-sup-cont-left">
                    <ul className="saf-sup-cont-right-list">
                            <li>
                                <span className="saf-sup-span">.Smart Trip Check-In</span>
                                <p className="saf-sup-p">
                                    ჩვენ ვაკვირდებით მგზავრობას <br />
                                    უჩვეულო აქტივობებზე,<br />
                                    რო
                                    გორიცაა გრძელი გაჩერებები ან <br />
                                    მარშრუტის გადახრები. თუ რაიმე <br />
                                    შეფერხებას შევამჩნევთ თქვენს <br />
                                    მგზავრობასთან დაკავშირებით, დაგიკავშირდებით, <br />
                                    რომ დაგჭირდეთ დახმარება.
                                </p>
                            </li>
                            <li>
                                <span className="saf-sup-span">იხილეთ ვისთან ერთად ატარებთ</span>
                                <p className="saf-sup-p">
                                    მას შემდეგ, რაც თქვენს მხედარს <br />
                                    ან მძღოლს დაემთხვევა, <br />
                                    დაინახავთ მათ სახელს, <br />
                                    პროფილის ფოტოს და <br />
                                    რეიტინგებს.
                                </p>
                            </li>
                            <li>
                                <span className="saf-sup-span">
                                    თქვენი კონფიდენციალურობა დაცულია
                                </span>
                                <p className="saf-sup-p">
                                    ჩვენ არასოდეს ვუზიარებთ თქვენს <br />
                                    ტელეფონის ნომერს ან პირად <br />
                                    ინფორმაციას სხვა მძღოლებთან ან <br />
                                    მგზავრებთან.
                                </p>
                            </li>
                            <li>
                                <span className="saf-sup-span">
                                    ორმხრივი რეიტინგები
                                </span>
                                <p className="saf-sup-p">
                                    თუ შეაფასებთ თქვენს მხედარს ან <br />
                                    მძღოლს სამი ან ნაკლები <br />
                                    ვარსკვლავით, თქვენ აღარ <br />
                                    შეგემთხვევათ მათ. თქვენი <br />
                                    გამოხმაურება ანონიმურია და <br />
                                    გვაძლევს უფლებას მივიღოთ <br />
                                    შესაბამისი ზომები საზოგადოების <br />
                                    უსაფრთხოების <br />
                                    შესანარჩუნებლად.
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="saf-sup-cont-right">
                        <img className="saf-sup-cont-img" src={safSupImg} alt="" />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SafertySupport
