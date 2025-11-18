"use client"

import { useState } from "react"
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    id: 1,
    question: "À quoi puis-je m'attendre lorsque nous travaillons ensemble ?",
    answer:
      "Nous commençons par un appel de découverte pour comprendre vos besoins, puis nous fournissons une proposition détaillée avec un calendrier et une estimation des coûts. Une fois approuvé, nous commençons le développement avec des mises à jour régulières et des sessions de feedback.",
  },
  {
    id: 2,
    question: "Combien de temps prennent les projets ?",
    answer:
      "Les délais varient en fonction de la complexité. Les flows d'automatisation et agents IA simples peuvent prendre 2 à 4 semaines, tandis que les systèmes complexes peuvent prendre 3 à 6 mois. Nous fournissons des délais détaillés lors de la phase de proposition.",
  },
  {
    id: 3,
    question: "Quels outils utilisez-vous pour construire ?",
    answer:
      "Nous utilisons des frameworks modernes comme React, Next.js et Node.js. Pour l'IA, nous privilégions des solutions open source hébergées en Suisse qui respectent la LPD, assurant ainsi la souveraineté et la sécurité de vos données.",
  },
  {
    id: 5,
    question: "Comment peut-on s'assurer de la sécurité des données ?",
    answer:
      "La sécurité de vos données est notre priorité absolue. Nous hébergeons toutes nos solutions en Suisse, garantissant une conformité totale avec la LPD (Loi sur la Protection des Données). Nous utilisons des sauvegardes automatiques quotidiennes et des audits de sécurité réguliers. De plus, nous privilégions les solutions open source qui vous permettent de garder un contrôle total sur vos données.",
  },
  {
    id: 6,
    question: "Pouvez-vous gérer le support technique de mon application ?",
    answer:
      "Oui, nous proposons des forfaits de support technique et de maintenance continue. Ceux-ci peuvent inclure le support utilisateur, la correction de bugs, les mises à jour de fonctionnalités et la surveillance des performances.",
  },
  {
    id: 7,
    question: "Mon entreprise est-elle trop petite pour vos solutions ?",
    answer:
      "Absolument pas ! Nos solutions s'adaptent à tous les types d'entreprise, des startups aux grandes organisations. Nous concevons des systèmes modulaires et évolutifs qui grandissent avec vous. Que vous soyez une équipe de 2 personnes ou de 200, nous créons des outils sur mesure qui correspondent à vos besoins actuels tout en anticipant votre croissance future.",
  },
]

export default function Faq() {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="my-20">
      <div className="card p-8 md:p-10 shadow-lg">
        <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
          Questions Fréquemment
          <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Posées</span>
        </h2>
        <p className="mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          Vous avez des questions sur nos services ? Trouvez les réponses aux questions les plus courantes et découvrez comment notre équipe peut améliorer votre processus créatif.
        </p>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border-b pb-4 border-gray-300 dark:border-gray-700">
              <button
                onClick={() => toggleItem(faq.id)}
                className="flex justify-between items-center w-full text-left py-2 font-medium text-black dark:text-white hover:text-[#7A7FEE] dark:hover:text-[#7A7FEE] transition-colors"
                aria-expanded={openItem === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openItem === faq.id ? "rotate-180 text-[#7A7FEE]" : ""}`}
                />
              </button>
              {openItem === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="mt-2 text-gray-700 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
