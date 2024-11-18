import React from 'react';
import { Leaf, Users, Globe, Award } from 'lucide-react';

const stats = [
  { label: 'Eco-friendly Products', value: '1000+' },
  { label: 'Happy Customers', value: '50,000+' },
  { label: 'Trees Planted', value: '25,000+' },
  { label: 'Carbon Offset (tons)', value: '1,200+' },
];

const team = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-founder',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400',
    bio: 'Former environmental scientist passionate about sustainable commerce.',
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Head of Sustainability',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400',
    bio: 'Expert in sustainable supply chains and circular economy.',
  },
  {
    name: 'Emma Thompson',
    role: 'Product Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400',
    bio: 'Dedicated to bringing eco-friendly products to mainstream markets.',
  },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Making Sustainable Living Accessible
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We're on a mission to make eco-friendly products the new normal, 
          helping people make sustainable choices without compromising on quality or style.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl p-6 text-center shadow-lg">
            <p className="text-3xl font-bold text-green-600 mb-2">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Leaf className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Sustainability First</h3>
            <p className="text-gray-600">
              Every product we offer is carefully selected based on its environmental impact 
              and sustainable production methods.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
            <p className="text-gray-600">
              We believe in building a community of environmentally conscious consumers 
              and supporting local eco-friendly initiatives.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-gray-600">
              Our actions have a ripple effect. We work with partners worldwide to 
              promote sustainable practices and reduce environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-green-600 mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}