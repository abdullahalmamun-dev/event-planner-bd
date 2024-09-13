import React, { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAndAnswers = [
    {
      question: "How to become a member?",
      answer:
        "To become a member of Culture Press, you need to visit our website and navigate to the membership section. There, you will find a registration form that you need to fill out with your personal details. After submitting the form, you will receive a confirmation email with further instructions. Membership grants you access to exclusive events, discounts, and newsletters. We encourage you to join our community and participate in our upcoming activities!",
    },
    {
      question: "How to become an organizer?",
      answer:
        "Becoming an organizer with Culture Press involves a few simple steps. First, you should fill out the organizer application form available on our website. This form requires you to provide information about your experience and the types of events you are interested in organizing. Once your application is submitted, our team will review it and get back to you within a week. If selected, you will receive training and support to help you successfully plan and execute events.",
    },
    {
      question: "How to become an editor?",
      answer:
        "To become an editor at Culture Press, you will need to submit an application that includes your resume and a portfolio showcasing your previous work. We are looking for individuals with a strong background in writing, editing, or journalism. After reviewing your application, our team may invite you for an interview to discuss your experience and vision for our content. As an editor, you will play a crucial role in shaping our publications and ensuring high-quality content for our audience.",
    },
    {
      question: "How to buy an event ticket?",
      answer:
        "Buying an event ticket is a straightforward process. First, visit our events page on the website, where you can browse through upcoming events. Once you find an event you are interested in, click on it to view more details. You will see a 'Buy Ticket' button that will direct you to the checkout page. Here, you can select the number of tickets and enter your payment information. After completing the purchase, you will receive a confirmation email with your ticket details.",
    },
    {
      question: "What is the refund policy?",
      answer:
        "Our refund policy is designed to be fair and transparent. If you need to cancel your ticket, you can request a full refund up to 48 hours before the event starts. To initiate a refund, simply contact our support team via email or through the contact form on our website. Please include your order number and the reason for the cancellation. Refunds will be processed within 7-10 business days, and you will receive a confirmation once the refund has been issued.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact our support team in several ways. The easiest method is to fill out the contact form available on our website. Alternatively, you can reach us via email at support@culturepress.com, and we will respond as quickly as possible. For urgent inquiries, we recommend calling our support hotline, which is listed on the contact page. Our support team is available from 9 AM to 6 PM on weekdays to assist you with any questions or concerns.",
    },
    {
      question: "Are there any membership fees?",
      answer:
        "Yes, there is a nominal membership fee to join Culture Press. This fee helps us maintain our services and support our events. The membership fee is a one-time payment that grants you access to exclusive benefits, including discounts on event tickets, early access to new events, and a subscription to our newsletter. We believe that the value you receive from being a member far outweighs the cost. For more details on membership fees, please visit the membership section of our website.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <h2 className="text-xl md:text-4xl font-bold text-[#003366] mb-6 text-center uppercase my-10 md:my-20">
        Frequently Asked Questions
      </h2>
      {questionsAndAnswers.map((item, index) => (
        <div key={index} className="bg-white shadow-md rounded-md mb-4">
          <div
            className="flex justify-between items-center p-4 cursor-pointer text-justify"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-semibold text-[#003366] text-justify">
              {item.question}
            </span>
            <i
              className={`fas ${
                activeIndex === index ? "fa-chevron-up" : "fa-chevron-down"
              } text-[#FFD700]`}
            ></i>
          </div>
          {activeIndex === index && (
            <div className="p-4 border-t border-gray-200">
              <p className="text-gray-700 text-justify">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQs;
