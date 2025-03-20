import React from "react";
import bankingIllustration from "./assets/6815134-removebg-preview.png";
import educationLoanIcon from "./assets/icons8-education-fees-payment-48.png";
import personalLoanIcon from "./assets/icons8-personal-loan-48.png";
import businessLoanIcon from "./assets/icons8-business-loan-48.png";
import homeLoanIcon from "./assets/icons8-home-loan-48.png";
import carLoanIcon from "./assets/icons8-car-loan-48.png";
import goldLoanIcon from "./assets/icons8-gold-loan-48.png";
import accountingImage from "./assets/5591464-removebg-preview.png";
import certificationImage from "./assets/4757518-removebg-preview.png";
import taxIcon from "./assets/service-icons/tax.png";
import accountingIcon from "./assets/service-icons/accounting.png";
import returnIcon from "./assets/service-icons/return.png";
import nonTaxIcon from "./assets/service-icons/nonTax.png";
import payrollIcon from "./assets/service-icons/payroll.png";

import costSavingIcon from "./assets/benefit-icons/costSaving.png";
import timeSavingIcon from "./assets/benefit-icons/timeSaving.png";
import companyRegIcon from "./assets/benefit-icons/companyReg.png";
import hiringIcon from "./assets/benefit-icons/hiring.png";

import seedFundingIcon from "./assets/offer-icons/seedFunding.png";
import incorporationIcon from "./assets/offer-icons/incorporation.png";
import fssaiIcon from "./assets/offer-icons/fssai.png";
import startupIcon from "./assets/offer-icons/startup.png";



const BankingAndAccountingServices = () => {
  return (
    <>
      {/* Banking Section */}
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
          {loanData.map((loan, index) => (
            <div className="loan-card" key={index}>
              <img src={loan.img} alt={loan.title} />
              <h3>{loan.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Accounting Section */}
      <section className="accounting">
        <div className="container">
          <div className="image">
            <img src={accountingImage} alt="Accounting Illustration" />
          </div>
          <div className="content">
            <h2>Accounting Services</h2>
            <p>We're a company for your business accounting and finance solution</p>
          </div>
        </div>
      </section>

      {/* Accounting Services Section */}
      <section className="accounting-services">
        <div className="accounting-container">
          <h2>OUR <span>ACCOUNTING SERVICES</span></h2>
          <p>At Assistech, we specialize in delivering innovative, technology-driven solutions designed to simplify lives and empower businesses.</p>
          <div className="services-grid">
            {serviceData.map((service, index) => (
              <div className="service-box" key={index}>
                <img src={service.img} alt="Service Icon" />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outsourcing Benefits Section */}
      <section className="outsourcing-benefits">
        <div className="outsourcing-container">
          <h2>Benefits of <span>Outsourcing</span> <hr /></h2>
          <div className="benefits-grid">
            {benefitsData.map((benefit, index) => (
              <div className="benefit-item" key={index}>
                <img src={benefit.img} alt={benefit.title} />
                <p>{benefit.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="certification-section">
        <div className="certification-container">
          <div className="certification-content">
            <h2>Certification and Services</h2>
            <p>We're a company for your business accounting and finance solution</p>
          </div>
          <div className="image">
            <img src={certificationImage} alt="Certification Image" />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers-section">
        <div className="offers-container">
          <h2 className="title">What We Offer</h2>
          <p className="description">
            At Assistech, we specialize in delivering innovative, technology-driven solutions designed to simplify lives and empower businesses.
          </p>
          <div className="offers-grid">
            {offersData.map((offer, index) => (
              <div className="offer-box" key={index}>
                <img src={offer.img} alt={offer.title} />
                <h3>{offer.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const loanData = [
  { img: educationLoanIcon, title: "Education Loan" },
  { img: personalLoanIcon, title: "Personal Loan" },
  { img: businessLoanIcon, title: "Company Loan" },
  { img: homeLoanIcon, title: "Home Loan" },
  { img: carLoanIcon, title: "Vehicle Loan" },
  { img: goldLoanIcon, title: "Gold, Silver Loan" }
];

const serviceData = [
  { img: taxIcon, title: "Goods and Services Tax", description: "Technology-driven solutions for taxation compliance." },
  { img: accountingIcon, title: "Accounting Compliance", description: "Ensure smooth and error-free accounting." },
  { img: returnIcon, title: "Income Tax Return Filing", description: "File IT returns seamlessly with our expertise." },
  { img: nonTaxIcon, title: "Non-Tax Accounting Services", description: "Complete non-tax solutions for your business." },
  { img: payrollIcon, title: "Payroll Services", description: "Automate payroll and manage employees efficiently." }
];

const benefitsData = [
  { img: costSavingIcon, title: "Cost Saving" },
  { img: timeSavingIcon, title: "Time Saving" },
  { img: companyRegIcon, title: "Company Registration" },
  { img: hiringIcon, title: "Eliminate Hiring Processes" }
];

const offersData = [
  { img: seedFundingIcon, title: "Seed Funding Certification" },
  { img: incorporationIcon, title: "Incorporation Services" },
  { img: fssaiIcon, title: "FSSAI License Certification" },
  { img: startupIcon, title: "Startup India Certification" }
];


export default BankingAndAccountingServices;
