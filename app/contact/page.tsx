'use client';

import { useState } from 'react';
import { AnimatedHeadline } from '@/components/AnimatedHeadline';
import { AngledPanel } from '@/components/AngledPanel';
import { Barcode } from '@/components/Barcode';
import clubData from '@/content/club.json';

const { club: clubInfo, identity, keyMessage } = clubData;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submission:', formData);
    // In a real app, this would send to an API
    alert('Thanks for your interest! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', experience: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <main className="pt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <AngledPanel className="p-8 md:p-16 mb-8">
          <div className="mb-8">
            <Barcode label="CONTACT-FORM" />
          </div>
          
          <AnimatedHeadline 
            text="JOIN US" 
            className="mb-8"
          />
          
          <p className="text-lg leading-relaxed max-w-3xl">
            {keyMessage}
          </p>

          <p className="text-base leading-relaxed max-w-3xl font-mono text-gray-700 mt-4">
            {clubInfo.mission}
          </p>
        </AngledPanel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Contact Form */}
          <AngledPanel className="p-8" angle="none">
            <h2 className="font-bebas text-3xl uppercase mb-6">Application Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-sm uppercase tracking-wider mb-2 block">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full brutal-border-thin p-4 font-mono focus-brutal"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-sm uppercase tracking-wider mb-2 block">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full brutal-border-thin p-4 font-mono focus-brutal"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="experience" className="font-mono text-sm uppercase tracking-wider mb-2 block">
                  Running Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="w-full brutal-border-thin p-4 font-mono focus-brutal"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="competitive">Competitive runner</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-sm uppercase tracking-wider mb-2 block">
                  Why KJ Run Club? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full brutal-border-thin p-4 font-mono resize-none focus-brutal"
                  placeholder="Tell us about your goals and what you hope to achieve..."
                />
              </div>

              <button
                type="submit"
                className="btn-brutal w-full"
              >
                Submit Application
              </button>
            </form>
          </AngledPanel>

          {/* Contact Info */}
          <div className="space-y-8">
            
            <AngledPanel className="p-8" angle="tl">
              <h3 className="font-bebas text-2xl uppercase mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-sm uppercase tracking-wider text-gray-600 mb-1">Email</h4>
                  <a 
                    href={`mailto:${identity.contact}`}
                    className="font-mono hover:underline focus-brutal"
                  >
                    {identity.contact}
                  </a>
                </div>

                <div>
                  <h4 className="font-mono text-sm uppercase tracking-wider text-gray-600 mb-1">Registered Name</h4>
                  <p className="font-mono">
                    {identity.registeredName}<br />
                    Reg No: {identity.regNo}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Barcode label="CONTACT-INFO" />
              </div>
            </AngledPanel>

            <AngledPanel className="p-8" angle="both">
              <h3 className="font-bebas text-2xl uppercase mb-6">Training Hours</h3>
              
              <div className="space-y-3">
                {[
                  { day: 'Tuesday', time: '06:00 - 07:30', type: 'Speedwork' },
                  { day: 'Friday', time: '19:00 - 20:30', type: 'Strength & Skills' },
                  { day: 'Sunday', time: '06:00 - 09:00', type: 'Long Run' }
                ].map((session, index) => (
                  <div key={index} className="flex justify-between items-center brutal-border-thin bg-gray-50 p-3">
                    <div>
                      <p className="font-mono font-medium">{session.day}</p>
                      <p className="font-mono text-xs text-gray-600">{session.type}</p>
                    </div>
                    <p className="font-mono text-sm">{session.time}</p>
                  </div>
                ))}
              </div>
            </AngledPanel>

            <AngledPanel className="p-8" angle="none">
              <h3 className="font-bebas text-2xl uppercase mb-6">Follow Us</h3>
              
              <div className="space-y-3">
                {[
                  { platform: 'Instagram', handle: '@kjrunclub', url: 'https://instagram.com/kjrunclub' },
                  { platform: 'Strava', handle: 'KJ Run Club', url: 'https://strava.com/clubs/kjrunclub' },
                  { platform: 'Facebook', handle: 'KJ Run Club KL', url: 'https://facebook.com/kjrunclub' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block brutal-border-thin bg-white p-4 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-bebas text-lg uppercase">{social.platform}</p>
                        <p className="font-mono text-sm text-gray-600">{social.handle}</p>
                      </div>
                      <span className="font-mono text-xs uppercase tracking-wider group-hover:underline">
                        Follow
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </AngledPanel>

          </div>
        </div>

      </div>
    </main>
  );
}
