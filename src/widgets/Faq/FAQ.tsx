import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './faq.module.scss'

interface FaqItem {
  question: string;
  answer: string;
}

const Faq: React.FC = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const faqItems: FaqItem[] = [
    {
      question: "Do you have all your team in-house?",
      answer: "Yes, we have a full in-house team of developers, designers, and project managers."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can contact us through our website form or email, and we'll provide a free quote."
    },
    {
      question: "How can I control the project?",
      answer: "We provide regular updates and use project management tools where you can track progress."
    },
    {
      question: "Who can recommend your software agency?",
      answer: "Many of our clients are happy to provide references. We can connect you with them."
    }
  ];

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <section className={styles.faq}>
      <div className={styles.container}>
        <h2>FAQ</h2>
        {faqItems.map((item, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            className={styles.accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.icon} />} className={styles.summary}    >
              <Typography className={styles.question}>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className={styles.answer}>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

export default Faq;