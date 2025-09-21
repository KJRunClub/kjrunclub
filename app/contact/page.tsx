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
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for your interest! We'll get back to you soon.");
    setFormData({ name: '', email: '', experience: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <main className="pt-32 pb-24">
      <section className="mx-auto max-w-7xl px-6">
        <AngledPanel className="p-10 md:p-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-6">
              <Barcode label="Contact" className="mb-2" />
              <AnimatedHeadline text="Join Us" className="text-[hsl(var(--foreground))]" />
              <p className="max-w-2xl text-lg leading-relaxed text-[hsl(var(--foreground))]/80">{keyMessage}</p>
              <p className="max-w-xl font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/60">
                {clubInfo.mission}
              </p>
            </div>
            <div className="badge-frosted w-fit">Crew intake</div>
          </div>
        </AngledPanel>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <AngledPanel className="p-10" angle="none">
            <h2 className="font-bebas text-3xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] md:text-4xl headline-wrap">
              Application Form
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/65">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-4 font-mono text-sm text-[hsl(var(--foreground))] focus-brutal"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/65">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-4 font-mono text-sm text-[hsl(var(--foreground))] focus-brutal"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="experience" className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/65">
                  Running Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  required
                  value={formData.experience}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/50 px-5 py-4 font-mono text-sm text-[hsl(var(--foreground))] focus-brutal"
                >
                  <option value="">Select your level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                  <option value="competitive">Competitive runner</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/65">
                  Why KJ Run Club? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="mt-2 w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-4 font-mono text-sm text-[hsl(var(--foreground))] focus-brutal"
                  placeholder="Tell us about your goals and what you hope to achieve..."
                />
              </div>

              <button type="submit" className="btn-framer w-full">
                <span>Submit Application</span>
              </button>
            </form>
          </AngledPanel>

          <div className="grid gap-10">
            <AngledPanel className="p-8" angle="tl">
              <h3 className="font-bebas text-2xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] headline-wrap">
                Get In Touch
              </h3>

              <div className="mt-6 space-y-5">
                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">Email</h4>
                  <a
                    href={`mailto:${identity.contact}`}
                    className="mt-2 block font-mono text-sm text-[hsl(var(--foreground))]/80 transition hover:text-[hsl(var(--foreground))]"
                  >
                    {identity.contact}
                  </a>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/60">
                    Registered Name
                  </h4>
                  <p className="mt-2 font-mono text-sm leading-relaxed text-[hsl(var(--foreground))]/70">
                    {identity.registeredName}
                    <br />Reg No: {identity.regNo}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Barcode label="Contact Info" />
              </div>
            </AngledPanel>

            <AngledPanel className="p-8" angle="both">
              <h3 className="font-bebas text-2xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] headline-wrap">
                Training Hours
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  { day: 'Tuesday', time: '06:00 - 07:30', type: 'Speedwork' },
                  { day: 'Friday', time: '19:00 - 20:30', type: 'Strength & Skills' },
                  { day: 'Sunday', time: '06:00 - 09:00', type: 'Long Run' },
                ].map((session) => (
                  <div
                    key={session.day}
                    className="flex items-center justify-between rounded-2xl border border-white/12 bg-white/5 px-5 py-4"
                  >
                    <div>
                      <p className="font-bebas text-xl uppercase tracking-wide text-[hsl(var(--foreground))]">
                        {session.day}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/55">
                        {session.type}
                      </p>
                    </div>
                    <p className="font-mono text-sm uppercase tracking-[0.3em] text-[hsl(var(--foreground))]/70">
                      {session.time}
                    </p>
                  </div>
                ))}
              </div>
            </AngledPanel>

            <AngledPanel className="p-8" angle="none">
              <h3 className="font-bebas text-2xl uppercase tracking-[0.18em] text-[hsl(var(--foreground))] headline-wrap">
                Follow Us
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  { platform: 'Instagram', handle: '@kjrunclub', url: 'https://instagram.com/kjrunclub' },
                  { platform: 'Strava', handle: 'KJ Run Club', url: 'https://strava.com/clubs/kjrunclub' },
                  { platform: 'Facebook', handle: 'KJ Run Club KL', url: 'https://facebook.com/kjrunclub' },
                ].map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-5 py-4 font-mono text-xs uppercase tracking-[0.35em] text-[hsl(var(--foreground))]/70 transition hover:bg-white/10 hover:text-[hsl(var(--foreground))]"
                  >
                    <span className="font-bebas text-lg uppercase tracking-wide text-[hsl(var(--foreground))]">
                      {social.platform}
                    </span>
                    <span>{social.handle}</span>
                  </a>
                ))}
              </div>
            </AngledPanel>
          </div>
        </div>
      </section>
    </main>
  );
}
