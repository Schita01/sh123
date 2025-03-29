import React, { useEffect, useLayoutEffect, useState } from "react";
import "../styles/all-style.css"; // Import CSS file
import AccordionItem from "../components/AccordionItem";
import SafertySupport from "../components/SafertySupport";
import EveryonesSafety from "../components/EveryonesSafety";
import SaferyStandart from "../components/SaferyStandart";
import SafertyPeople from "../components/SafertyPeople";
import MainTop from "../components/MainTop";
import mainImg from "../assets/Safety_LP-Overview-Hero_Desktop_2x-compressed.webp";


const Saferty = () => {
    
    const [activeAccordionNumber, setActiveAccordionNumber] = useState(null);

    const handleClick = (accordionNumber: any) => {
        if (activeAccordionNumber === accordionNumber) {
            setActiveAccordionNumber(null);
        } else {
            setActiveAccordionNumber(accordionNumber);
        }  
    };

    useEffect(() => {
        window.scrollTo({
          top: window.innerHeight * 0, // Scroll to 100vh
          behavior: "smooth", // Smooth scrolling animation
        });
      },[])
      

    return (
        <main>
          <div className="wrapper wrapper-saferty">
          <MainTop 
           title="უსაფრთხოება ყველასთვის. არ აქვს მნიშვნელობა რომელ სკამზე ხარ."
           text="Lyft არის საზოგადოება, სადაც ყველას ეკუთვნის. ხართ თუ არა მძღოლის სავარძელზე, უკანა სავარძელზე თუ ველოსიპედის სავარძელზე, ჩვენ ყოველთვის პატივისცემით მოგექცევით და გავუფრთხილდებით თქვენს უსაფრთხოებას. ჩვენ ამას ვაკეთებთ მაღალი სტანდარტების დაცვით, რომელიც იწყება თქვენს პირველ მგზავრობამდე. ჩვენი პროაქტიული უსაფრთხოების ზომები ყოველთვის მოქმედებს. და ღამისა თუ დღის ნებისმიერ დროს, ჩვენ გთავაზობთ რეალურ დახმარებას ნამდვილი ადამიანებისგან."
           img={mainImg}
          />
          </div>
            <div className="saferty-accordion">
                <div className="container">
                    <div className="accordion-container">
                        <h2 className="accordion-con-h2">უს აფრთხოების გარანტიები</h2>
                        <AccordionItem
                            activeAccordionNumber={activeAccordionNumber}
                            handleClick={handleClick}
                            itemNumber={1}
                            title="უსაფრთხოების მაღალი სტანდარტები"
                            content="
                            ჩვენ ყოველთვის პატივისცემით ვეპყრობით ერთმანეთს და არ მოვითმენთ დისკრიმინაციას. ნებისმიერი, ვინც არღვევს ჩვენს წესებს, შეიძლება სამუდამოდ წაიშალოს პლატფორმიდან. შეგიძლიათ გააუქმოთ ნებისმიერი მგზავრობა, რომელიც თავს დაცულად გაგრძნობინებთ
                            "
                        />
                        <AccordionItem
                            activeAccordionNumber={activeAccordionNumber}
                            handleClick={handleClick}
                            itemNumber={2}
                            title="პროაქტიული უსაფრთხოების მხარდაჭერა"
                            content="
                                ჩვენ ვაკვირდებით მგზავრობას უჩვეულო აქტივობებზე, როგორიცაა გრძელი გაჩერებები ან მარშრუტის გადახრები. თუ რაიმე შეფერხებას შევამჩნევთ თქვენს მგზავრობასთან დაკავშირებით, დაგიკავშირდებით, რომ დაგჭირდეთ დახმარება.
                            "
                        />
                        <AccordionItem
                            activeAccordionNumber={activeAccordionNumber}
                            handleClick={handleClick}
                            itemNumber={3}
                            title="დახმარება ნამდვილი ადამიანებისგან"
                            content="
                            უსაფრთხოების გუნდის წევრები ყოველთვის გვერდში დგანან, მზად არიან დასახმარებლად ტელეფონით ან ჩეთის საშუალებით.
                            "
                        />
                        <AccordionItem
                            activeAccordionNumber={activeAccordionNumber}
                            handleClick={handleClick}
                            itemNumber={4}
                            title="უყურებენ ერთმანეთს"
                            content="
                                ჩვენ ვიცით, რომ ყველას აქვს სხვადასხვა კომფორტის დონე, როდესაც საქმე ეხება ჯანმრთელობის უსაფრთხოებას. ასე რომ, თქვენ შეგიძლიათ განაგრძოთ ნიღბის ტარება, თუ გსურთ, როცა მგზავრობთ ან მართავთ.
                            "
                        />
                    </div>
                </div>
            </div>
            <SaferyStandart/>
            <SafertySupport/>
            <SafertyPeople/>
            <EveryonesSafety/>            
        </main>
    );
};

export default Saferty;
