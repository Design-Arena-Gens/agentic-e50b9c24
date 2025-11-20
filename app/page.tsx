export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f2ff] via-white to-[#fdf7f0] text-slate-900">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-64 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-gradient-to-br from-purple-200 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute top-24 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-amber-100 via-transparent to-transparent blur-3xl opacity-60" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-purple-100 via-transparent to-transparent blur-3xl opacity-70" />
      </div>

      <header className="relative mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-16 sm:px-12 lg:px-16 lg:pt-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/80 px-4 py-1 text-sm font-semibold text-purple-700 shadow-sm backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-purple-500" />
              New mindful release
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Bramhcharya: Harness Your Creative Energy With Clarity
            </h1>
            <p className="text-lg text-slate-700 sm:text-xl">
              A modern guide to an ancient discipline. Discover rituals,
              reflections, and daily practices to channel your energy into the
              work, relationships, and impact that matter most.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-purple-300/40 transition hover:bg-purple-500"
              >
                Reserve Your Copy
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-purple-200 hover:text-purple-700"
              >
                Download a Free Preview
              </a>
            </div>
            <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-3">
              <div>
                <p className="text-2xl font-semibold text-slate-900">148</p>
                <p>pages of mindful frameworks and guided exercises</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">21</p>
                <p>rituals you can begin in under 10 minutes each</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-slate-900">7k+</p>
                <p>readers using Bramhcharya to elevate their lives</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-sm rounded-3xl bg-white/80 p-6 shadow-xl shadow-purple-100 backdrop-blur">
            <div className="absolute -top-6 right-6 inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700 shadow">
              <span className="inline-flex h-2 w-2 rounded-full bg-purple-500" />
              Limited early access bonus
            </div>
            <div className="overflow-hidden rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-amber-50">
              <div className="flex items-center justify-between border-b border-purple-100 px-5 py-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-500">
                    The Workbook
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    Bramhcharya
                  </p>
                </div>
                <div className="rounded-full bg-white px-3 py-1 text-sm font-semibold text-purple-600 shadow">
                  Ebook + Audio
                </div>
              </div>
              <div className="space-y-4 px-5 py-6 text-sm text-slate-600">
                <p>
                  Crafted to accompany your daily practice with mindful prompts,
                  reflective journaling, and breathwork cues.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-600">
                      01
                    </span>
                    4-phase energy reorientation framework
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-600">
                      02
                    </span>
                    Daily ritual blueprints for mornings & evenings
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-100 text-sm font-semibold text-purple-600">
                      03
                    </span>
                    Introspective prompts for discipline & compassion
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-dashed border-purple-200 bg-white px-5 py-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                Bonus
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Pre-order now and receive a guided audio meditation bundle.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex max-w-5xl flex-col gap-24 px-6 pb-32 sm:px-12 lg:px-16">
        <section
          id="preview"
          className="rounded-3xl border border-purple-100 bg-white/70 p-10 shadow-lg shadow-purple-100 backdrop-blur"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                A holistic roadmap for channeling vitality
              </h2>
              <p className="text-lg text-slate-600">
                Learn to cultivate restraint without repression, creativity
                without chaos, and devotion without dogma. Each chapter merges
                timeless wisdom with modern neuroscience and gentle somatic
                practices.
              </p>
              <ul className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  4 foundational pillars with reflective frameworks
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  Guided weekly sādhanā with planning worksheets
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  Breath regulation and mantra harmonization practices
                </li>
                <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                  Relationship & community integration strategies
                </li>
              </ul>
            </div>
            <div className="w-full max-w-md rounded-3xl border border-slate-100 bg-gradient-to-br from-white via-purple-50 to-white p-6 shadow-inner">
              <h3 className="text-center text-lg font-semibold text-slate-900">
                Sneak Peek: Chapter Flow
              </h3>
              <div className="mt-5 space-y-4">
                {[
                  {
                    title: "Awakening Awareness",
                    description:
                      "Recognize scattered energy patterns and design daily guardrails.",
                  },
                  {
                    title: "Rewriting Desire",
                    description:
                      "Transform impulsive urges into conscious inspiration with breathwork.",
                  },
                  {
                    title: "Sustaining Devotion",
                    description:
                      "Anchor your practice through community, seva, and mindful relationships.",
                  },
                  {
                    title: "Radiating Presence",
                    description:
                      "Integrate higher purpose through art, leadership, and creativity.",
                  },
                ].map((chapter, idx) => (
                  <div
                    key={chapter.title}
                    className="rounded-2xl border border-purple-100 bg-white p-4 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold text-purple-600">
                        Chapter {idx + 1}
                      </p>
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                        {idx === 0
                          ? "Mindset"
                          : idx === 1
                            ? "Practice"
                            : idx === 2
                              ? "Devotion"
                              : "Integration"}
                      </span>
                    </div>
                    <p className="mt-2 text-base font-medium text-slate-900">
                      {chapter.title}
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      {chapter.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 rounded-3xl border border-slate-100 bg-white/80 p-10 shadow-lg shadow-purple-100 backdrop-blur lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              What you&apos;ll embody inside the ebook
            </h2>
            <p className="text-lg text-slate-600">
              Beyond restraint, Bramhcharya is about honoring your highest
              commitments. These core modules guide you through self-awareness,
              mindful action, and compassionate rest.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: "Awareness Rituals",
                  description:
                    "Morning and evening check-ins align your senses with purpose.",
                },
                {
                  title: "Energy Transmutation",
                  description:
                    "Techniques to redirect urges into creative power without suppression.",
                },
                {
                  title: "Sacred Boundaries",
                  description:
                    "Strengthen your yes/no intuition with practical reflection prompts.",
                },
                {
                  title: "Compassionate Discipline",
                  description:
                    "Build habits that honor devotion while embracing rest and joy.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm shadow-purple-100"
                >
                  <p className="text-base font-semibold text-purple-600">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="space-y-5 rounded-3xl border border-dashed border-purple-200 bg-gradient-to-br from-purple-50 via-white to-purple-50 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-400">
              Early Reader Bonuses
            </p>
            <ul className="space-y-4 text-sm text-slate-600">
              {[
                "Guided 21-day accountability calendar",
                "Private live integration circle with the author",
                "Audio affirmations for mindful redirection",
                "Printable altar cards for Sankalpa practice",
              ].map((bonus) => (
                <li key={bonus} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-semibold text-white">
                    ✓
                  </span>
                  <span>{bonus}</span>
                </li>
              ))}
            </ul>
            <div className="rounded-2xl bg-white/70 p-4 text-sm text-slate-600 shadow-inner">
              <p>
                Bonuses delivered instantly with your preorder confirmation.
              </p>
            </div>
          </aside>
        </section>

        <section className="grid gap-12 rounded-3xl border border-slate-100 bg-white/70 p-10 shadow-lg shadow-purple-100 backdrop-blur lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Meet the author
            </h2>
            <p className="text-lg text-slate-600">
              Sadhika Rao is a meditation teacher, yoga therapist, and former
              product strategist who guides founders, artists, and seekers in
              harmonizing discipline with delight. After a decade of personal
              study across ashrams in Rishikesh and retreats in Kyoto, she
              created this workbook to demystify Bramhcharya for modern life.
            </p>
            <div className="rounded-2xl border border-purple-100 bg-white p-5 text-sm text-slate-600 shadow-sm">
              <p>
                “Bramhcharya is the art of walking with your creative fire
                without letting it burn the world around you. It is permission
                to choose clarity over compulsion, devotion over distraction.”
              </p>
              <p className="mt-3 text-right text-sm font-semibold text-purple-600">
                — Sadhika Rao
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-slate-900">
              Voices from early readers
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  quote:
                    "Each page whispered practical wisdom. My mornings feel grounded and purposeful.",
                  name: "Arjun M.",
                  role: "Wellness Coach",
                },
                {
                  quote:
                    "The guided prompts helped me reinterpret desire with compassion. Powerful and gentle.",
                  name: "Priya K.",
                  role: "Creative Director",
                },
                {
                  quote:
                    "A rare blend of tradition and modernity. The rituals are easy to implement.",
                  name: "Devansh R.",
                  role: "Product Lead",
                },
                {
                  quote:
                    "I finally understand how to honor my energy without withdrawing from relationships.",
                  name: "Meera S.",
                  role: "Therapist",
                },
              ].map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
                  <div className="mt-4 text-sm font-semibold text-purple-600">
                    {testimonial.name}
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="reserve"
          className="grid gap-12 rounded-3xl border border-purple-100 bg-white/80 p-10 shadow-xl shadow-purple-100 backdrop-blur lg:grid-cols-[1fr_0.9fr]"
        >
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Reserve your copy now
            </h2>
            <p className="text-lg text-slate-600">
              Secure early access to the full ebook, audiobook narration, and
              guided meditation library. Launch price increases after the first
              500 readers.
            </p>
            <div className="rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-purple-100 px-6 py-5 shadow-inner">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-semibold text-slate-900">
                  ₹799
                </span>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-purple-500">
                  Launch bundle
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Includes lifetime updates + invitation to the integration circle.
              </p>
            </div>
            <ul className="grid gap-3 text-sm text-slate-600">
              {[
                "Instant PDF download (desktop, tablet, mobile optimized)",
                "60-minute guided meditation soundtrack",
                "Access to live Q&A immersion (limited seats)",
                "Printable ritual trackers and altar art",
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] font-bold text-white">
                    +
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <form className="space-y-4 rounded-3xl border border-slate-100 bg-white p-8 shadow-lg shadow-purple-100">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              Preorder Form
            </p>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                Full name
              </label>
              <input
                type="text"
                placeholder="Sadhana Mehta"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                What inspired your interest?
              </label>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-purple-300 focus:ring-2 focus:ring-purple-200"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose an option
                </option>
                <option>Personal spiritual growth</option>
                <option>Supporting relationships</option>
                <option>Enhancing creative focus</option>
                <option>Curious about yogic philosophy</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="block text-sm font-medium text-slate-700">
                Preferred format
              </label>
              <div className="grid gap-3 sm:grid-cols-2">
                {["PDF", "Audiobook", "Both"].map((format) => (
                  <label
                    key={format}
                    className="flex cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 transition hover:border-purple-200"
                  >
                    <input
                      type="radio"
                      name="format"
                      value={format}
                      className="h-4 w-4 accent-purple-600"
                      defaultChecked={format === "Both"}
                    />
                    {format}
                  </label>
                ))}
              </div>
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300/40 transition hover:bg-purple-500"
            >
              Complete Preorder
            </button>
            <p className="text-xs text-slate-500">
              You&apos;ll receive confirmation and bonus access directly in your
              inbox within minutes.
            </p>
          </form>
        </section>

        <section className="rounded-3xl border border-slate-100 bg-white/70 p-10 shadow-lg shadow-purple-100 backdrop-blur">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Frequently asked questions
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                question: "Is the ebook suitable for beginners?",
                answer:
                  "Yes. Each concept is introduced with context, story, and simple practices, so you can build a foundation even if you’re brand new to yogic philosophy.",
              },
              {
                question:
                  "How soon do I receive the bonuses after preordering?",
                answer:
                  "All bonuses are delivered instantly via email — including the 21-day calendar, altar cards, and guided audio bundle.",
              },
              {
                question: "Do I need any special tools or prior knowledge?",
                answer:
                  "No additional tools are required. Journaling materials and a quiet space are helpful, but optional. The practices are adaptable to any lifestyle.",
              },
              {
                question: "Will there be future updates or community sessions?",
                answer:
                  "Yes. Preorder readers receive lifetime updates and invitations to seasonal integration circles hosted live with Sadhika.",
              },
            ].map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <p className="text-base font-semibold text-purple-600">
                  {faq.question}
                </p>
                <p className="mt-2 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative mx-auto mt-24 max-w-5xl rounded-3xl border border-slate-100 bg-white/80 px-8 py-10 text-center shadow-lg shadow-purple-100 backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
          Bramhcharya Ebook
        </p>
        <p className="mt-4 text-lg text-slate-600">
          Crafted for seekers who want to honor their energy and radiate their
          purpose with grace.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <a
            href="#reserve"
            className="inline-flex items-center justify-center rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-300/40 transition hover:bg-purple-500"
          >
            Secure Your Copy
          </a>
          <a
            href="mailto:hello@sadhikarao.com"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-purple-200 hover:text-purple-700"
          >
            Contact the Author
          </a>
        </div>
        <p className="mt-6 text-xs text-slate-400">
          © {new Date().getFullYear()} Sadhika Rao. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
