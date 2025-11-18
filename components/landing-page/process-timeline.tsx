import { CheckCircle2, Lightbulb, Wrench, Rocket, TrendingUp } from 'lucide-react'

const processSteps = [
  {
    id: 1,
    phase: "DÉCOUVERTE",
    icon: Lightbulb,
    items: [
      "Analyse approfondie de vos besoins",
      "Audit de votre écosystème actuel",
      "Identification des opportunités",
      "Définition de la stratégie cible"
    ]
  },
  {
    id: 2,
    phase: "CONCEPTION",
    icon: Wrench,
    items: [
      "Design de votre solution sur mesure",
      "Développement itératif et agile",
      "Tests rigoureux et validation",
      "Formation complète de vos équipes"
    ]
  },
  {
    id: 3,
    phase: "DÉPLOIEMENT",
    icon: Rocket,
    items: [
      "Mise en production progressive",
      "Accompagnement au lancement",
      "Monitoring et surveillance renforcés",
      "Ajustements immédiats si nécessaire"
    ]
  },
  {
    id: 4,
    phase: "SUIVI CONTINU",
    icon: TrendingUp,
    items: [
      "Support technique permanent",
      "Optimisations régulières",
      "Évolution selon vos besoins",
      "Rapports de performance détaillés"
    ]
  }
]

export default function ProcessTimeline() {
  return (
    <section id="process" className="my-20">
      <div className="mb-12 text-left">
        <h2 className="text-black dark:text-white text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
          Travaillons <span className="text-[#7A7FEE] dark:text-[#7A7FEE]">Ensemble</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
          Une approche collaborative structurée pour comprendre vos enjeux et déployer des solutions pérennes au cœur de votre écosystème.
        </p>
      </div>

      {/* Desktop horizontal timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#7A7FEE]/20 via-[#7A7FEE] to-[#7A7FEE]/20"></div>
          
          <div className="grid grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative pt-16 h-full">
                {/* Icon circle */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-[#7A7FEE] flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content card */}
                <div className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
                  <h3 className="text-lg font-bold mb-4 text-[#7A7FEE] dark:text-[#7A7FEE] text-center uppercase tracking-wide">
                    {step.phase}
                  </h3>
                  <ul className="space-y-3 flex-grow">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-[#7A7FEE] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile vertical timeline */}
      <div className="lg:hidden space-y-8">
        {processSteps.map((step, index) => (
          <div key={step.id} className="relative">
            {/* Connecting line */}
            {index < processSteps.length - 1 && (
              <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-[#7A7FEE]/30 -mb-8"></div>
            )}

            <div className="flex gap-4">
              {/* Icon circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-[#7A7FEE] flex items-center justify-center shadow-lg flex-shrink-0">
                <step.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content card */}
              <div className="flex-1 card p-6 shadow-md">
                <h3 className="text-lg font-bold mb-4 text-[#7A7FEE] dark:text-[#7A7FEE]">
                  {step.phase}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-[#7A7FEE] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
