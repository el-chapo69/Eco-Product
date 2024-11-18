import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Sustainable Fashion: More Than Just a Trend",
    excerpt: "Discover how sustainable fashion is revolutionizing the industry through innovative materials, ethical production, and conscious consumption practices.",
    content: `Sustainable fashion has evolved from a niche market to a global movement, transforming how we think about clothing production and consumption. This shift represents a fundamental change in the fashion industry's approach to environmental responsibility and social justice.

    The Impact of Fast Fashion
    The traditional fashion industry is one of the world's largest polluters, contributing significantly to water pollution, textile waste, and carbon emissions. Fast fashion's rapid production cycles and disposable nature have created an unsustainable model that's increasingly being challenged by consumers and industry leaders alike.

    Innovative Materials Leading the Way
    • Recycled ocean plastics transformed into durable textiles
    • Mushroom leather providing a cruelty-free alternative
    • Agricultural waste converted into sustainable fabrics
    • Bio-engineered materials reducing environmental impact

    The Role of Technology
    Advanced manufacturing techniques and blockchain technology are making it possible to track the entire supply chain, ensuring transparency and accountability in production processes. This technological integration is crucial for verifying sustainable practices and ethical labor conditions.

    Consumer Education and Awareness
    As consumers become more educated about the environmental impact of their clothing choices, they're demanding greater transparency and sustainability from brands. This awareness is driving innovation in:
    • Production methods
    • Material sourcing
    • Waste reduction
    • Worker conditions

    The Future of Fashion
    The industry is moving towards a circular economy model where clothes are designed to be:
    • Reused
    • Recycled
    • Repurposed
    • Biodegradable

    This transformation is not just about using eco-friendly materials; it's about reimagining the entire fashion ecosystem.`,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=800",
    author: "Emma Thompson",
    date: "2024-03-15",
    readTime: "5 min read",
    category: "Fashion",
    tags: ["Sustainable Fashion", "Ethical Production", "Eco-friendly Materials"]
  },
  {
    id: 2,
    title: "Zero-Waste Living: A Beginner's Guide",
    excerpt: "Transform your lifestyle with practical zero-waste tips, from kitchen organization to sustainable shopping habits that reduce environmental impact.",
    content: `Embarking on a zero-waste journey might seem daunting at first, but with the right approach and mindset, it's an achievable and rewarding lifestyle change. This comprehensive guide will help you take your first steps toward a more sustainable future.

    Starting Your Zero-Waste Journey
    The transition to zero-waste living doesn't happen overnight. Begin with these fundamental changes:
    • Audit your waste output
    • Identify easy substitutions
    • Start with one room at a time
    • Build sustainable habits gradually

    Kitchen Transformations
    The kitchen is often the heart of waste production in many homes. Here's how to transform it:
    1. Replace disposables with reusables
    2. Shop with bulk containers
    3. Compost food scraps
    4. Plan meals to minimize waste
    5. Store food properly to extend shelf life

    Sustainable Shopping Practices
    • Bring your own bags, containers, and produce nets
    • Shop at local farmers' markets
    • Choose package-free options when available
    • Support bulk food stores
    • Invest in quality, long-lasting items

    Bathroom and Personal Care
    Transform your personal care routine with these sustainable swaps:
    • Bamboo toothbrushes
    • Solid shampoo and conditioner bars
    • Reusable cotton rounds
    • Safety razors
    • Package-free soap and deodorant

    Common Challenges and Solutions
    1. Limited access to bulk stores
    - Start a community group
    - Request options from local stores
    - Shop online from zero-waste retailers

    2. Budget constraints
    - Focus on reusing what you have
    - Make gradual changes
    - Calculate long-term savings

    3. Family resistance
    - Lead by example
    - Start small
    - Highlight benefits
    - Make it fun and engaging

    The Impact of Going Zero-Waste
    • Reduced landfill contribution
    • Lower carbon footprint
    • Financial savings
    • Simplified lifestyle
    • Community influence

    Remember, zero-waste living is about progress, not perfection. Every small change contributes to a larger environmental impact.`,
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800",
    author: "Marcus Rodriguez",
    date: "2024-03-12",
    readTime: "8 min read",
    category: "Lifestyle",
    tags: ["Zero Waste", "Sustainable Living", "Minimalism"]
  },
  {
    id: 3,
    title: "The Future of Renewable Energy: Innovations Shaping Tomorrow",
    excerpt: "Explore groundbreaking developments in renewable energy technology and their impact on creating a sustainable future for generations to come.",
    content: `The renewable energy sector is experiencing unprecedented growth and innovation, driven by urgent climate challenges and technological breakthroughs. This comprehensive overview explores the latest developments and their potential impact on our sustainable future.

    Solar Technology Breakthroughs
    • Perovskite solar cells achieving record efficiency
    • Transparent solar panels for windows
    • Solar fabric integration in everyday items
    • Enhanced energy storage solutions

    Wind Power Evolution
    • Floating offshore wind farms
    • Vertical axis turbines for urban areas
    • Smart grid integration
    • Improved maintenance through AI

    The Role of AI in Energy Management
    • Predictive maintenance
    • Grid optimization
    • Consumption forecasting
    • Automated energy trading

    Future Prospects
    The next decade will be crucial for renewable energy adoption, with several key developments:
    1. Grid modernization
    2. Energy storage solutions
    3. Smart city integration
    4. Community energy projects`,
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800",
    author: "Dr. Sarah Chen",
    date: "2024-03-10",
    readTime: "6 min read",
    category: "Technology",
    tags: ["Renewable Energy", "Innovation", "Climate Action"]
  },
  {
    id: 4,
    title: "Urban Farming: Growing Food in Small Spaces",
    excerpt: "Learn how to transform your balcony or windowsill into a thriving garden, contributing to food sustainability in urban environments.",
    content: `Urban farming is revolutionizing how city dwellers think about food production and sustainability. This guide shows you how to start your own urban garden, regardless of space constraints.

    Getting Started
    • Assess your space and sunlight
    • Choose appropriate containers
    • Select suitable plants
    • Create a watering schedule

    Best Plants for Urban Gardens
    1. Herbs: Basil, mint, parsley
    2. Vegetables: Cherry tomatoes, lettuce, peppers
    3. Microgreens
    4. Vertical growing plants

    Advanced Techniques
    • Hydroponics systems
    • Vertical gardening
    • Companion planting
    • Composting in small spaces`,
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800",
    author: "Lisa Wong",
    date: "2024-03-08",
    readTime: "7 min read",
    category: "Gardening",
    tags: ["Urban Farming", "Food Security", "Sustainable Living"]
  },
  {
    id: 5,
    title: "Eco-Friendly Home Renovation Guide",
    excerpt: "Transform your living space with sustainable materials and energy-efficient solutions that benefit both the environment and your wallet.",
    content: `Creating an eco-friendly home doesn't require a complete overhaul. This guide provides practical steps for sustainable home improvements that make a real difference.

    Energy Efficiency
    • Smart thermostats
    • LED lighting
    • Improved insulation
    • Energy-efficient appliances

    Sustainable Materials
    • Reclaimed wood
    • Recycled metal
    • Natural insulation
    • Low-VOC paints

    Water Conservation
    • Dual-flush toilets
    • Rainwater harvesting
    • Greywater systems
    • Water-efficient fixtures

    Cost-Benefit Analysis
    Understanding the long-term savings of eco-friendly renovations:
    • Energy bill reduction
    • Water savings
    • Maintenance costs
    • Property value increase`,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800",
    author: "Michael Chang",
    date: "2024-03-05",
    readTime: "9 min read",
    category: "Home",
    tags: ["Home Improvement", "Energy Efficiency", "Sustainable Living"]
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Featured Post */}
      <div className="mb-16">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <img
            src={blogPosts[0].image}
            alt={blogPosts[0].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
              {blogPosts[0].category}
            </span>
            <h1 className="text-3xl font-bold text-white mb-4">
              {blogPosts[0].title}
            </h1>
            <div className="flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{blogPosts[0].author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{blogPosts[0].readTime}</span>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              {blogPosts[0].tags.map((tag) => (
                <span key={tag} className="text-white/75 text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.slice(1).map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <img
                src={post.image}
                alt={post.title}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-green-600 text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center gap-1 text-green-600 hover:text-green-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Full Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="relative h-64 mb-6">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedPost.category}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-4 text-gray-500 mb-6">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>{selectedPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>

                <div className="prose max-w-none">
                  {selectedPost.content.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>

                <div className="flex gap-2 mt-6">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}