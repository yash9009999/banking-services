import React from "react";
import bankingIllustration from "./assets/6815134-removebg-preview.png";
import educationLoanIcon from "./assets/icons8-education-fees-payment-48.png";
import personalLoanIcon from "./assets/icons8-personal-loan-48.png";
import businessLoanIcon from "./assets/icons8-business-loan-48.png";
import homeLoanIcon from "./assets/icons8-home-loan-48.png";
import carLoanIcon from "./assets/icons8-car-loan-48.png";
import goldLoanIcon from "./assets/icons8-gold-loan-48.png";


const BankingServices = () => {
  return (
    <>
      <section className="banking">
        <div className="overlay"></div>
        <div className="container-bank">
          <div className="text-content">
            <h1>BANKING SERVICES</h1>
            <p>Easy Loans, Smart Solutions—Financing Your Dreams.</p>
            <a href="#" className="btn">Get in Touch</a>
          </div>
          <div className="illustration">
            <img src={bankingIllustration} alt="Business Growth Illustration" />
          </div>
        </div>
      </section>

      <section className="banking-services">
        <h2>OUR <span className="highlight">BANKING LOAN SERVICES</span></h2>
        <p className="description">At Assistech, we specialize in delivering innovative, technology-driven solutions designed to simplify lives and empower businesses.</p>

        <div className="loan-container">
          {[{ img: educationLoanIcon, title: "Education Loan" },
            { img: personalLoanIcon, title: "Personal Loan" },
            { img: businessLoanIcon, title: "Company Loan" },
            { img: homeLoanIcon, title: "Home Loan" },
            { img: carLoanIcon, title: "Vehicle Loan" },
            { img: goldLoanIcon, title: "Gold, Silver Loan" }].map((loan, index) => (
            <div className="loan-card" key={index}>
              <img src={loan.img} alt={loan.title} />
              <h3>{loan.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BankingServices;
