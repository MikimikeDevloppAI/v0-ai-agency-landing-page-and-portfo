export interface PortfolioItem {
  slug: string
  title: string
  logo: string
  mainImage: string
  shortDescription: string
  projectUrl: string
  content: string
  sortOrder: string
  categories?: string[] // We'll add this for filtering
}

// Add a check for client-side environment at the top of the fetchPortfolioData function

export async function fetchPortfolioData(): Promise<PortfolioItem[]> {
  // This ensures the new projects are always shown regardless of the CSV file state
  return getFallbackPortfolioData()
}

function getFallbackPortfolioData(): PortfolioItem[] {
  return [
    {
      slug: "planning-medical-automatise",
      title: "Planning Médical Automatisé",
      logo: "/medical-icon.png",
      mainImage: "/medical-clinic-scheduling-software-interface-moder.jpg",
      shortDescription: "Solution de planning complexe et évolutive pour clinique médicale.",
      projectUrl: "#",
      content: `<h3>Aperçu du Projet</h3><p>Implémentation d'une solution de planning automatisé et complexe pour une clinique médicale. Ce système prend en compte toutes les problématiques liées à un planning en perpétuelle évolution, gérant les disponibilités des médecins, les salles d'examen, et les urgences en temps réel.</p><h3>Fonctionnalités Clés</h3><ul><li>Gestion des conflits en temps réel</li><li>Interface intuitive pour le personnel médical</li></ul><h3>Impact</h3><p>Réduction de 30% du temps administratif et augmentation de 15% de la capacité d'accueil de la clinique.</p>`,
      sortOrder: "2024-03-15",
      categories: ["web", "ai", "health"],
    },
    {
      slug: "gestion-administrative-ia",
      title: "Gestion Administrative IA",
      logo: "/ai-health-icon.jpg",
      mainImage: "/medical-office-administration-ai-dashboard.jpg",
      shortDescription: "Plateforme pilotée par l'IA pour la gestion administrative d'un cabinet médical.",
      projectUrl: "#",
      content: `<h3>Aperçu du Projet</h3><p>Création d'une plateforme complète pilotée par l'intelligence artificielle pour automatiser et simplifier la gestion administrative d'un cabinet médical. De la facturation à la gestion des dossiers patients, l'IA assiste le personnel au quotidien.</p><h3>Fonctionnalités Clés</h3><ul><li>Prise de note pour les meetings avec todo piloté par l'IA</li><li>Gestion des stocks</li><li>Remplissage de formulaire automatisé</li><li>Assistant IA pour lettre patient</li><li>Gestion des notes de frais par l'IA</li></ul>`,
      sortOrder: "2024-03-01",
      categories: ["web", "ai", "health"],
    },
    {
      slug: "erp-atelier-broderie",
      title: "ERP Atelier de Broderie",
      logo: "/textile-icon.jpg",
      mainImage: "/embroidery-workshop-software-interface-textile-pro.jpg",
      shortDescription: "Gestion complète de la demande de devis à la production.",
      projectUrl: "#",
      content: `<h3>Aperçu du Projet</h3><p>Élaboration d'un software sur mesure pour un atelier de broderie. Ce système gère l'intégralité du flux de travail, de la demande de devis initiale jusqu'à l'accompagnement dans la production, en passant par la gestion des stocks et des machines.</p><h3>Fonctionnalités Clés</h3><ul><li>Générateur de devis instantané</li><li>Suivi de production en temps réel</li><li>Gestion des stocks de fils et textiles</li><li>Interface de commande client</li></ul>`,
      sortOrder: "2024-02-15",
      categories: ["web", "automation"],
    },
    {
      slug: "coach-sportif-ia",
      title: "Coach Sportif IA",
      logo: "/fitness-icon.png",
      mainImage: "/fitness-app-interface-ai-workout-planner-mobile.jpg",
      shortDescription: "Application de coaching avec création de séances par IA.",
      projectUrl: "#",
      content: `<h3>Aperçu du Projet</h3><p>Développement d'une application mobile pour coachs sportifs intégrant une IA générative pour créer des séances d'entraînement personnalisées. L'application permet un suivi précis des progrès et adapte les programmes en fonction des feedbacks des athlètes.</p><h3>Fonctionnalités Clés</h3><ul><li>Génération de programmes d'entraînement</li><li>Analyse de la performance</li><li>Communication coach-athlète</li><li>Bibliothèque d'exercices vidéo</li></ul>`,
      sortOrder: "2024-02-01",
      categories: ["mobile", "ai", "health"],
    },
    {
      slug: "analyse-sentiment-finance",
      title: "Analyse Sentiment Finance",
      logo: "/finance-icon.png",
      mainImage: "/financial-sentiment-analysis-dashboard-data-visual.jpg",
      shortDescription: "Surveillance des réseaux sociaux pour gérant de fortune.",
      projectUrl: "#",
      content: `<h3>Aperçu du Projet</h3><p>Mise en place d'un système de surveillance des réseaux sociaux et d'analyse de sentiment pour un gérant de fortune. L'outil permet de rester informé en temps réel des tendances du marché et de la perception publique des actifs gérés.</p><h3>Fonctionnalités Clés</h3><ul><li>Monitoring temps réel des réseaux sociaux</li><li>Analyse de sentiment par NLP</li><li>Alertes personnalisées</li><li>Rapports de tendances automatisés</li></ul>`,
      sortOrder: "2024-01-15",
      categories: ["ai", "data", "finance"],
    },
    {
      slug: "agent-ia-restaurant",
      title: "Agent IA Restaurant",
      logo: "/restaurant-icon.jpg",
      mainImage: "/restaurant-management-software-tablet-interface.jpg",
      shortDescription: "Agent IA pour la gestion des commandes et du planning.",
      projectUrl: "#",
      content: `<h3>Aperçu du Projet</h3><p>Développement d'un agent IA complet pour un restaurant, capable de gérer les commandes, de traiter les demandes de devis pour les événements, et d'optimiser le planning des employés en fonction de l'affluence prévue.</p><h3>Fonctionnalités Clés</h3><ul><li>Prise de commande vocale et textuelle</li><li>Gestion automatisée des réservations</li><li>Optimisation des plannings d'équipe</li><li>Gestion des stocks prédictive</li></ul>`,
      sortOrder: "2024-01-01",
      categories: ["ai", "automation", "food"],
    },
    {
      slug: "sample-saas-platform",
      title: "TaskFlow Pro",
      logo: "/taskflow-logo.jpg",
      mainImage: "/portfolio-images/saas-dashboard-1.jpg",
      shortDescription: "AI-powered task management platform for teams",
      projectUrl: "https://example.com",
      content: `<h3>Project Overview</h3><p>TaskFlow Pro is a comprehensive task management platform that leverages AI to help teams prioritize work and optimize productivity. Built with modern web technologies, it features real-time collaboration, intelligent task suggestions, and advanced analytics.</p><h3>Key Features</h3><ul><li>AI-powered task prioritization</li><li>Real-time team collaboration</li><li>Advanced project analytics</li><li>Custom workflow automation</li><li>Mobile-responsive design</li></ul><h3>Technologies Used</h3><p>This project was built using React, Node.js, PostgreSQL, and OpenAI's API for intelligent task suggestions. The platform handles over 10,000 active users and processes millions of tasks monthly.</p>`,
      sortOrder: "2024-01-15",
      categories: ["all", "web", "ai"],
    },
    {
      slug: "ecommerce-marketplace",
      title: "ShopConnect",
      logo: "/shopconnect-logo.jpg",
      mainImage: "/portfolio-images/ecommerce-interface-1.jpg",
      shortDescription: "Multi-vendor marketplace with AI recommendations",
      projectUrl: "https://example.com",
      content: `<h3>Project Overview</h3><p>ShopConnect is a modern multi-vendor marketplace that connects buyers with sellers through an intuitive platform. The system features AI-powered product recommendations, advanced search capabilities, and seamless payment processing.</p><h3>Key Features</h3><ul><li>Multi-vendor management system</li><li>AI-powered product recommendations</li><li>Advanced search and filtering</li><li>Secure payment processing</li><li>Vendor analytics dashboard</li><li>Mobile app integration</li></ul><h3>Technical Implementation</h3><p>Built with Next.js, Stripe for payments, and a microservices architecture. The platform supports thousands of vendors and processes over $1M in transactions monthly.</p>`,
      sortOrder: "2024-01-10",
      categories: ["all", "web", "ai"],
    },
    {
      slug: "ai-content-generator",
      title: "ContentAI Studio",
      logo: "/contentai-logo.jpg",
      mainImage: "/portfolio-images/ai-platform-1.jpg",
      shortDescription: "AI-powered content creation platform for marketers",
      projectUrl: "https://example.com",
      content: `<h3>Project Overview</h3><p>ContentAI Studio revolutionizes content creation by providing marketers with AI-powered tools to generate high-quality blog posts, social media content, and marketing copy in minutes rather than hours.</p><h3>Key Features</h3><ul><li>Multi-format content generation</li><li>Brand voice customization</li><li>SEO optimization tools</li><li>Content calendar integration</li><li>Team collaboration features</li><li>Performance analytics</li></ul><h3>Impact & Results</h3><p>The platform has helped over 500 marketing teams reduce content creation time by 70% while maintaining quality. Built with React, Python, and integrated with multiple AI models for optimal results.</p>`,
      sortOrder: "2024-01-05",
      categories: ["all", "web", "ai"],
    },
  ]
}

function parseCSV(csvText: string): PortfolioItem[] {
  // Split the CSV into lines
  const lines = csvText.split("\n")

  // Extract headers (first line)
  const headers = lines[0].split(",").map((header) => header.trim().replace(/^"/, "").replace(/"$/, ""))

  // Map CSV columns to our interface properties
  const columnMap: Record<string, keyof PortfolioItem> = {
    Slug: "slug",
    Title: "title",
    Logo: "logo",
    "Main Image": "mainImage",
    "Short Description": "shortDescription",
    "Project URL": "projectUrl",
    Content: "content",
    "Sort Order": "sortOrder",
  }

  // Parse the data rows
  const items: PortfolioItem[] = []

  for (let i = 1; i < lines.length; i++) {
    if (!lines[i].trim()) continue // Skip empty lines

    // Handle CSV values that might contain commas within quotes
    const values: string[] = []
    let currentValue = ""
    let insideQuotes = false

    for (let j = 0; j < lines[i].length; j++) {
      const char = lines[i][j]

      if (char === '"') {
        insideQuotes = !insideQuotes
      } else if (char === "," && !insideQuotes) {
        values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))
        currentValue = ""
      } else {
        currentValue += char
      }
    }

    // Add the last value
    values.push(currentValue.trim().replace(/^"/, "").replace(/"$/, ""))

    // Create the portfolio item
    const item: Partial<PortfolioItem> = {}

    // Map values to properties
    headers.forEach((header, index) => {
      const key = columnMap[header]
      if (key && index < values.length) {
        item[key] = values[index]
      }
    })

    // Add categories based on content or title for filtering
    item.categories = inferCategories(item as PortfolioItem)

    items.push(item as PortfolioItem)
  }

  // Sort by sortOrder
  return items.sort((a, b) => {
    return new Date(b.sortOrder).getTime() - new Date(a.sortOrder).getTime()
  })
}

function inferCategories(item: PortfolioItem): string[] {
  const categories: string[] = ["all"]

  // Add categories based on content keywords
  const contentLower = (item.content || "").toLowerCase()
  const titleLower = (item.title || "").toLowerCase()
  const descriptionLower = (item.shortDescription || "").toLowerCase()

  if (
    contentLower.includes("web3") ||
    contentLower.includes("blockchain") ||
    titleLower.includes("web3") ||
    descriptionLower.includes("web3") ||
    contentLower.includes("crypto") ||
    titleLower.includes("crypto") ||
    titleLower.includes("blockchain")
  ) {
    categories.push("web3")
  }

  if (
    contentLower.includes("bubble") ||
    contentLower.includes("no-code") ||
    contentLower.includes("nocode") ||
    contentLower.includes("no code")
  ) {
    categories.push("bubble")
  }

  if (
    contentLower.includes("ai") ||
    contentLower.includes("artificial intelligence") ||
    titleLower.includes("ai") ||
    descriptionLower.includes("ai") ||
    titleLower.includes("content") ||
    descriptionLower.includes("ai-powered")
  ) {
    categories.push("ai")
  }

  if (
    contentLower.includes("mobile") ||
    contentLower.includes("ios") ||
    contentLower.includes("android") ||
    titleLower.includes("app")
  ) {
    categories.push("mobile")
  }

  if (
    contentLower.includes("design") ||
    contentLower.includes("ui") ||
    contentLower.includes("ux") ||
    contentLower.includes("interface")
  ) {
    categories.push("design")
  }

  // Default to "web" if no specific category is found
  if (categories.length === 1) {
    categories.push("web")
  }

  return categories
}
