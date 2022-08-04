import React from "react";
import Services from "./Services";
import Carousel from "./Carousel";
import NavBar from "./NavBar";

function Home() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <div className="below__carousel">
        <div className="app_services">
          <Services
            source="http://schoolerpindia.com/images/bg/1.webp"
            title="Service 1"
            description="Conduct Your Student Online Exam With School ERP"
          />
          <Services
            source="http://schoolerpindia.com/images/bg/2.webp"
            title="Service 2"
            description="Examination Software Enabled Payment gateway Feature"
          />
          <Services
            source="http://schoolerpindia.com/images/bg/3.webp"
            title="Service 3"
            description="Send Fee Reminder With Phone Pay Link On WhatsApp/Sms"
          />
          <Services
            source="http://schoolerpindia.com/images/bg/4.webp"
            title="Service 4"
            description="Send Student Report Progress Card On WhatsApp/Sms/Email"
          />
          <Services
            source="http://schoolerpindia.com/images/bg/5.webp"
            title="Service 5"
            description="Send Fee Reminder With Dynamic Qr Code WhatsApp/Sms"
          />
          <Services
            source="http://schoolerpindia.com/images/bg/7.webp"
            title="Service 6"
            description="Fee Collect Using Payment Gateway/ Phonepe/ Qr Code"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
