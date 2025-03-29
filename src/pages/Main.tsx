import React, { useEffect,} from 'react'
import "../styles/all-style.css"; // Import CSS file
import Suggest from '../components/Suggest';
import Services from '../components/Services';
import About from '../components/About';
import DowApp from '../components/DowApp';
import SafetyComp from '../components/SafetyComp';
import MainTop from '../components/MainTop';
import DowAppBtn from '../components/DowAppBtn';
import mainImg from "../assets/woman-traveling-with-her-car.jpg";




const Main = () => {

  useEffect(() => {
    window.scrollTo({
      top: window.innerHeight * 0, // Scroll to 100vh
      behavior: "smooth", // Smooth scrolling animation
    });
  },[])
  
  return (
    <>
      <main>
      <div className="wrapper wrapper-main">
          <MainTop 
           title="უსაფრთხოება ყველასთვის. არ აქვს მნიშვნელობა რომელ სკამზე ხარ."
           text="Lyft არის საზოგადოება, სადაც ყველას ეკუთვნის. ხართ თუ არა მძღოლის სავარძელზე, უკანა სავარძელზე თუ ველოსიპედის სავარძელზე, ჩვენ ყოველთვის პატივისცემით მოგექცევით და გავუფრთხილდებით თქვენს უსაფრთხოებას. ჩვენ ამას ვაკეთებთ მაღალი სტანდარტების დაცვით, რომელიც იწყება თქვენს პირველ მგზავრობამდე. ჩვენი პროაქტიული უსაფრთხოების ზომები ყოველთვის მოქმედებს. და ღამისა თუ დღის ნებისმიერ დროს, ჩვენ გთავაზობთ რეალურ დახმარებას ნამდვილი ადამიანებისგან."
           img={mainImg}
          />
          </div>
        <DowAppBtn/>
        <Suggest/>
        <Services/>
        <About/>
        <SafetyComp/>
        <DowApp/>
      </main>
    </>
  )
}

export default Main
