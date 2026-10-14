"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import Link from "next/link"
import { IconArrowUpRight, IconMinus, IconPlus } from "@tabler/icons-react"

const questions = [
  {
    question: "Which AI data services can you support?",
    answer:
      "We provide data collection, annotation, transcription, translation, document AI, generative AI support, and model evaluation. Share your use case and we can scope the right workflow.",
  },
  {
    question: "How do you keep annotation work consistent?",
    answer:
      "We align on your taxonomy and acceptance criteria, calibrate with sample data, and review unclear examples so decisions stay consistent across a batch.",
  },
  {
    question: "Can you follow our schema and tools?",
    answer:
      "Yes. We can discuss your labeling guide, preferred tools, and delivery format during project scoping.",
  },
  {
    question: "Which languages and data types can I ask about?",
    answer:
      "Our service pages cover image, video, audio, text, and document data. Tell us the language, domain, and data type you have in mind.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send us your project goals, sample data, approximate volume, and preferred timeline. We’ll use those details to discuss the next steps.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(1)

  return (
    <section className="home-section faq-section" aria-labelledby="faq-title">
      <div className="faq-heading">
        <div>
          <p className="home-label">Good questions</p>
          <h2 id="faq-title" className="home-heading">Frequently asked questions</h2>
        </div>
        <p className="home-lead">
          Not finding what you need?{" "}
          <Link href="/contact#inquiry" className="faq-contact">Talk to us <IconArrowUpRight aria-hidden="true" /></Link>
        </p>
      </div>
      <div className="faq-list">
        {questions.map(({ question, answer }, index) => {
          const isOpen = openIndex === index
          const panelId = `faq-answer-${index}`
          return (
            <article className={`faq-item${isOpen ? " is-open" : ""}`} key={question}>
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{question}</span>
                  {isOpen ? <IconMinus aria-hidden="true" /> : <IconPlus aria-hidden="true" />}
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    role="region"
                    aria-label={question}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="faq-answer-wrap"
                  >
                    <p>{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          )
        })}
      </div>
    </section>
  )
}
