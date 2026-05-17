import React from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const QuestionsAnswers = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of cultural and humanitarian based services",
  },
  {
    question: "How can i book your services?",
    answer:
      "you can book our services by reaching out through our contact form or calling us directly",
  },
  {
    question: "What are your opening hours?",
    answer: "We are open every business day of the week from 11am to 5pm",
  },
  {
    question: "How can i schedule a meeting with the King?",
    answer:
      "By filling out the form on our contact page and the administrator will duly attend to you ",
  },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between px-2 items-center"
      >
        <span className="text-xl">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-xs" />
        ) : (
          <FaChevronDown className="text-xs" />
        )}
      </button>
      {isOpen && <p className="pl-4 text-lg">{answer}</p>}
    </div>
  );
};

const Faqs = () => {
  return (
    <div className="py-20">
      <h2 className="text-2xl font-bold mb-4 text-center">FAQS</h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-3/4 space-y-6 px-8 lg:px-0">
            {QuestionsAnswers.map((item, index) => (
              <div key={index}>
                <FaqItem
                  key={index}
                  question={item.question}
                  answer={item.answer}
                />
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/4 mt-6 lg:mt-0 px-8 lg:px-4">
            <div className="rounded p-3 bg-red-200">
              <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
              <p className="mb-4">
                If you can't find the answer you're looking for, please reach
                out to our front-desk:
              </p>
              <button className="flex space-x-2 items-center">
                <FaEnvelope className="pr-2"/>
                info@igwepalace.com
              </button>
              <button className="flex space-x-2 items-center">
                <FaPhoneAlt />
                <span>+234-803-672-6002</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
