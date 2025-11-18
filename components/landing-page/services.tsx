import { Bot, Layers, Network } from 'lucide-react'

const services = [
  {
    id: 1,
    title: "Agents IA & Automatisation",
    description:
      "Nous concevons des agents intelligents et des workflows automatisés pour réduire vos tâches répétitives et booster votre productivité.",
    icon: Bot,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 2,
    title: "Solutions Sur Mesure",
    description:
      "Des applications web et logicielles développées spécifiquement pour répondre à vos défis uniques et soutenir votre croissance.",
    icon: Layers,
    color: "bg-[#7A7FEE]",
  },
  {
    id: 3,
    title: "Intégration Écosystème",
    description:
      "Déploiement de solutions au cœur de votre écosystème pour une intégration fluide avec vos outils existants.",
    icon: Network,
    color: "bg-[#7A7FEE]",
  },
]

export default function Services() {
  return (
    <section id="services" className="my-20">
      <h2 className="text-black dark:text-white mb-6 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
        Libérez votre
        <span className="block text-[#7A7FEE] dark:text-[#7A7FEE]">Entreprise</span>
      </h2>
      <p className="mb-12 max-w-2xl text-gray-700 dark:text-gray-300">
        Nous construisons des plateformes personnalisées et des outils alimentés par l'IA pour simplifier vos opérations et vous aider à évoluer. Notre processus facilite la concrétisation de vos idées.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="card p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4 shadow-sm`}>
              <service.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">{service.title}</h3>
            <p className="text-gray-700 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
