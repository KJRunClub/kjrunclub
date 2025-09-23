import { contact, identity } from '@/lib/siteContent';

export function ContactFormSlide() {
  return (
    <section className="relative flex min-h-screen snap-start flex-col justify-center bg-neutral-950 px-4 py-24 text-neutral-100 sm:px-6 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_60%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center">
        <div className="grid min-h-[70vh] gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col justify-center">
            <div className="rounded-3xl border border-neutral-800 bg-neutral-900/85 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:p-10">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-400">Lets Collaborate</p>
              <h2 className="mt-3 font-bebas text-5xl uppercase tracking-[0.18em] text-neutral-50 md:text-6xl">
                Contact Form
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-300">
                Share campaign ideas, partnership requests, or media enquiries and we will respond quickly.
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="mt-8 inline-flex items-center justify-center rounded-full border border-neutral-100 bg-neutral-100 px-8 py-3 font-mono text-[0.65rem] uppercase tracking-[0.4em] text-neutral-900 transition hover:bg-neutral-300"
              >
                Email {contact.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="grid gap-6">
              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 text-neutral-200">
                <h3 className="font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">Contact</h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.35em] text-neutral-400">
                  {identity.registeredName}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-neutral-300">
                  Reg No: {identity.regNo}
                  <br />
                  Email:{' '}
                  <a
                    href={`mailto:${contact.email}`}
                    className="underline decoration-neutral-500 underline-offset-4 transition hover:text-neutral-100"
                  >
                    {contact.email}
                  </a>
                </p>
              </div>

              <div className="rounded-3xl border border-neutral-800 bg-neutral-900/80 p-8 text-neutral-200">
                <h3 className="font-bebas text-3xl uppercase tracking-[0.18em] text-neutral-50">Follow</h3>
                <ul className="mt-5 space-y-3">
                  {contact.social.map((social) => (
                    <li key={social.platform}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-950/60 px-5 py-4 font-mono text-xs uppercase tracking-[0.35em] text-neutral-300 transition hover:border-neutral-600 hover:text-neutral-100"
                      >
                        <span className="font-bebas text-xl uppercase tracking-[0.18em]">{social.platform}</span>
                        <span>{social.handle}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <span className="rounded-full border border-neutral-800 bg-neutral-900/70 px-4 py-1 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-neutral-500">
          Form
        </span>
      </div>
    </section>
  );
}
