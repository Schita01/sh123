import { useEffect, useState } from "react";
import AccordionItem from "../components/AccordionItem";
import "../styles/all-style.css";
import MainTop from "../components/MainTop";
import mainImg from "../assets/Safety_LP-Overview-Hero_Desktop_2x-compressed.webp";



const DriversSafety = () => {

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
    <>
         <main>
         <div className="wrapper wrapper-driver">
          <MainTop 
           title="უსაფრთხოება ყველასთვის. არ აქვს მნიშვნელობა რომელ სკამზე ხარ."
           text="Lyft არის საზოგადოება, სადაც ყველას ეკუთვნის. ხართ თუ არა მძღოლის სავარძელზე, უკანა სავარძელზე თუ ველოსიპედის სავარძელზე, ჩვენ ყოველთვის პატივისცემით მოგექცევით და გავუფრთხილდებით თქვენს უსაფრთხოებას. ჩვენ ამას ვაკეთებთ მაღალი სტანდარტების დაცვით, რომელიც იწყება თქვენს პირველ მგზავრობამდე. ჩვენი პროაქტიული უსაფრთხოების ზომები ყოველთვის მოქმედებს. და ღამისა თუ დღის ნებისმიერ დროს, ჩვენ გთავაზობთ რეალურ დახმარებას ნამდვილი ადამიანებისგან."
           img={mainImg}
          />
          </div>

            <div className="container">
           <div className="accordion-container">
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
                  title="უსაფრთხოების მაღალი სტანდარტები"
                  content="
                  ჩვენ ყოველთვის პატივისცემით ვეპყრობით ერთმანეთს და არ მოვითმენთ დისკრიმინაციას. ნებისმიერი, ვინც არღვევს ჩვენს წესებს, შეიძლება სამუდამოდ წაიშალოს პლატფორმიდან. შეგიძლიათ გააუქმოთ ნებისმიერი მგზავრობა, რომელიც თავს დაცულად გაგრძნობინებთ
                  "
                />
                <AccordionItem
                  activeAccordionNumber={activeAccordionNumber}
                  handleClick={handleClick}
                  itemNumber={3}
                  title="უსაფრთხოების მაღალი სტანდარტები"
                  content="
                  ჩვენ ყოველთვის პატივისცემით ვეპყრობით ერთმანეთს და არ მოვითმენთ დისკრიმინაციას. ნებისმიერი, ვინც არღვევს ჩვენს წესებს, შეიძლება სამუდამოდ წაიშალოს პლატფორმიდან. შეგიძლიათ გააუქმოთ ნებისმიერი მგზავრობა, რომელიც თავს დაცულად გაგრძნობინებთ
                  "
                />
                <AccordionItem
                  activeAccordionNumber={activeAccordionNumber}
                  handleClick={handleClick}
                  itemNumber={4}
                  title="უსაფრთხოების მაღალი სტანდარტები"
                  content="
                  ჩვენ ყოველთვის პატივისცემით ვეპყრობით ერთმანეთს და არ მოვითმენთ დისკრიმინაციას. ნებისმიერი, ვინც არღვევს ჩვენს წესებს, შეიძლება სამუდამოდ წაიშალოს პლატფორმიდან. შეგიძლიათ გააუქმოთ ნებისმიერი მგზავრობა, რომელიც თავს დაცულად გაგრძნობინებთ
                  "
                />
           </div>
           </div>
           
        </main>
    </>
  )
}

export default DriversSafety
