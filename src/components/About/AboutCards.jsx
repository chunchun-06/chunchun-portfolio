import { motion } from 'framer-motion';
import './AboutCards.css'; // New custom CSS for the cinematic Uiverse cards

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

const CheckIcon = () => (
  <svg
    className="check_svg"
    fill="currentColor"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      clipRule="evenodd"
      d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
      fillRule="evenodd"
    ></path>
  </svg>
);

const cardsData = [
  {
    id: 1,
    title: 'Java Developer',
    desc: 'Building robust backend systems with core Java principles.',
    list: ['Object-Oriented Programming', 'Java Collections', 'Data Structures', 'REST APIs'],
    gridClass: 'md:col-span-2 lg:col-span-2',
  },
  {
    id: 2,
    title: 'Full Stack Developer',
    desc: 'Creating end-to-end scalable web applications.',
    list: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    gridClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 3,
    title: 'AI / ML Enthusiast',
    desc: 'Exploring predictive models and data analytics.',
    list: ['Python', 'Scikit-learn', 'Data Analysis', 'Machine Learning'],
    gridClass: 'md:col-span-1 lg:col-span-1',
  },
  {
    id: 4,
    title: 'Problem Solver',
    desc: 'Architecting logical solutions to complex challenges.',
    list: ['Problem Solving', 'Database Design', 'API Development', 'System Thinking'],
    gridClass: 'md:col-span-2 lg:col-span-2',
  },
];

const AboutCards = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {cardsData.map((card) => (
        <motion.div
          key={card.id}
          variants={cardVariants}
          className={`${card.gridClass}`}
        >
          <div className="uiverse-card">
            <div className="card__border"></div>
            
            <div className="card_title__container">
              <span className="card_title">{card.title}</span>
              <p className="card_paragraph">{card.desc}</p>
            </div>
            
            <hr className="line" />
            
            <ul className="card__list">
              {card.list.map((item, index) => (
                <li key={index} className="card__list_item">
                  <span className="check">
                    <CheckIcon />
                  </span>
                  <span className="list_text">{item}</span>
                </li>
              ))}
            </ul>
            
            {/* The "Get Your Success" button has been intentionally removed as requested */}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default AboutCards;
