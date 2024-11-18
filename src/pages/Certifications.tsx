import React from 'react';
import { Shield, CheckCircle, Award, Leaf } from 'lucide-react';

const certifications = [
  {
    name: 'Fair Trade Certified',
    icon: Award,
    color: 'blue',
    description: 'Ensures fair wages and safe working conditions for workers throughout the supply chain.',
    criteria: [
      'Fair wages and labor practices',
      'Safe working conditions',
      'Environmental protection',
      'Community development',
    ],
  },
  {
    name: 'GOTS Certified Organic',
    icon: Leaf,
    color: 'green',
    description: 'Global Organic Textile Standard certification for organic fibers, including ecological and social criteria.',
    criteria: [
      'Organic fiber production',
      'Environmental management',
      'Social compliance',
      'Chemical input restrictions',
    ],
  },
  {
    name: 'B Corp Certification',
    icon: Shield,
    color: 'purple',
    description: 'Meets the highest standards of verified social and environmental performance.',
    criteria: [
      'Environmental impact',
      'Worker treatment',
      'Community engagement',
      'Governance practices',
    ],
  },
  {
    name: 'Cradle to Cradle',
    icon: CheckCircle,
    color: 'amber',
    description: 'Products designed for circular economy, ensuring materials remain in continuous cycles.',
    criteria: [
      'Material health',
      'Material reuse',
      'Renewable energy use',
      'Water stewardship',
    ],
  },
];

export default function Certifications() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Our Certification Standards
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We partner with leading certification bodies to ensure our products meet 
          the highest standards of sustainability and ethical production.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {certifications.map((cert) => (
          <div key={cert.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-${cert.color}-100 rounded-full flex items-center justify-center`}>
                  <cert.icon className={`w-6 h-6 text-${cert.color}-600`} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{cert.name}</h2>
              </div>
              
              <p className="text-gray-600 mb-6">
                {cert.description}
              </p>

              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Certification Criteria</h3>
                <ul className="space-y-3">
                  {cert.criteria.map((criterion) => (
                    <li key={criterion} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-green-50 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Looking for Certified Products?
        </h2>
        <p className="text-gray-600 mb-6">
          Browse our collection of certified sustainable products and make an informed choice 
          for a better planet.
        </p>
        <button className="btn btn-primary">
          Shop Certified Products
        </button>
      </div>
    </div>
  );
}