import React from 'react';
import './Pages.css';
import { useState } from 'react';

const faqData = {
  general: [
    {
      question: "What is a hackathon?",
      answer: "A hackathon is a day-long event where attendees can compete for prize categories, attend workshops, and participate in fun activities and games. Competing is completely optional! You can also choose which workshops/activities you want or don’t want to attend based on your interests."
    },
    {
      question: "Do I need to know how to code?",
      answer: "Short answer: Nope! Long answer: HopperHacks is a beginner-friendly hackathon, so please do not feel as if you need to have any coding experience to participate. If you do not know how to code but want to learn and have fun, we have workshops and activities throughout the event for you to attend. We know that hackathons can be intimidating for many first-time hackers, and so we want this to be a learning and fun experience for you to become more comfortable with working with others, developing new skills, and letting your creativity shine under a time constraint."
    },
    {
      question: "What is HopperHacks Bootcamp Week?",
      answer: "To help students prepare for HopperHacks, we invite WiCS alumni, on-campus organizations, and other industry professionals to host a variety of workshops the week leading up to HopperHacks."
    },
    {
      question: "What's the cost?",
      answer: "F-R-E-E! There are no upfront costs for HopperHacks, with the exception of travel or housing costs, which we do not reimburse."
    },
    {
      question: "When is HopperHacks?",
      answer: "HopperHacks 2025 will begin Saturday, February 22nd at 10:00 AM and end on Sunday, February 23rd at 8:00 PM!"
    },
    {
      question: "I have more questions!",
      answer: "If you have anything you want us to know prior to the event, please feel free to email us at wics@cs.stonybrook.edu. If you have any questions or concerns during the event, you can always chat with us in person or in the Discord channel, and we will do our best to help you!"
    },
  ],
  registration: [
    {
      question: "Who can attend?",
      answer: "We welcome all undergraduate and graduate students, regardless of gender, major and school! Open to programmers and designers of all skill levels. Coding experience not required."
    },
    {
      question: "When is the deadline to register?",
      answer: "The registration deadline is TBD. Please fill out the interest form to be the first to know when applications open!"
    },
    {
      question: "Do I need to create a Devpost Account?",
      answer: "Yes. You will be expected to submit a project on the Devpost platform which means you are required to create an account."
    },
    {
      question: "Do I have to submit a project to attend?",
      answer: "Nope! You are free to attend any of our workshops and events without submitting a project."
    },
    {
      question: "How can I be a mentor?",
      answer: "You can apply to be a mentor in the HopperHacks application, which will be released soon. Please understand that we will not be able to accept everyone to be a mentor!"
    },
    {
      question: "How can I be a volunteer?",
      answer: "You can apply to be a volunteer in the HopperHacks application, which will be released soon. Please note that we cannot accept all volunteer applications!"
    },
  ],
  tracks: [
    {
      question: "What are the tracks?",
      answer: "We will have several tracks for you to hack in, which will be revealed closer to the hackathon! Each track has it's own judging criteria and style. The winners of each track will receive a prize!"
    },
    {
      question: "How will prizes work?",
      answer: "You will submit a project to ONE track. If that project wins the track, you'll recieve communication from us for instructions on how to redeem your prize!",
    },
    {
      question: "Do I have to enter a track?",
      answer: "Yes, if you wish to compete in a track. Please note that you can only enter to ONE track. If you enter multiple tracks, one will be assigned to you.",
    },
    {
      question: "Can I enter multiple tracks?",
      answer: "We do not accept multiple track submissions.",
    },
    {
      question: "How can I enter the Best Beginner Hack?",
      answer: "A team must be at least 50% beginner hackers (less than 2 hackathons attended).",
    },
  ],
  logistics: [
    {
      question: "How will teams work?",
      answer: "We typically recommend a team of 3 to 4 people. You are free to choose your teammates either prior to or during the day of the event. You are also free to work on your own. If you are looking for a team, we will have a Discord channel for you to reach out to other participants and form teams."
    },
    {
      question: "How do I come up with an idea for a project?",
      answer: "Think about what changes you want to bring to the world. Think of any issues that you or anyone else have faced that you want to resolve. Then, you can start brainstorming ways to build a solution using the resources available."
    },
    {
      question: "Can I submit a project from another hackathon?",
      answer: "No cross-submitting is permitted. If a project is cross-submitted, then the project will not be considered for judging."
    },
    {
      question: "Are there any travel reimbursements or overnight accomodations?",
      answer: "While HopperHacks is an overnight event, we do not provide an overnight space nor do we reimburse travel/housing. Be sure to make arrangements beforehand if you would like to stay on campus for the entire hackathon."
    },
    {
      question: "Where is HopperHacks?",
      answer: "HopperHacks will take place in SAC! The main hacking space will be Ballroom A, the awards ceremony will be in the SAC Auditorium, and there will be various bootcamp events on the third floor of the building!"
    },
  ],
};


const FAQ = () => {

  const [expandedIndex, setExpandedIndex] = useState({ category: null, index: null });

  const toggleAnswer = (category, index) => {
    setExpandedIndex(
      expandedIndex.category === category && expandedIndex.index === index
        ? { category: null, index: null }
        : { category, index }
    );
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p className='section-title'>~FAQ~</p>
      <img className='image' src={`${process.env.PUBLIC_URL}/hook.png`} alt="hook"/>
      {Object.keys(faqData).map((category) => (
        <div key={category}>
          <h3 className='section-sub-title'>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>
          <ul>
            {faqData[category].map((faq, index) => (
              <li style={{ listStyleType: 'none' }} key={index}>
                <div
                  onClick={() => toggleAnswer(category, index)}
                  style={{ cursor: 'pointer', marginBottom: '10px' }}
                >
                  <strong className='section-text question'>{faq.question}</strong>
                </div>
                {expandedIndex.category === category && expandedIndex.index === index && (
                  <p
                    style={{
                      padding: '10px',
                      backgroundColor: '#fba275',
                      borderRadius: '40px',
                    }}
                    className='section-tiny-text'
                  >
                    {faq.answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FAQ;