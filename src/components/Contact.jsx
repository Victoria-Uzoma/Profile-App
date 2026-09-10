import WhatsAppButton from "./WhatsAppButton";

export default function Contact() {
  return (
    <section className="min-h-screen bg-[#08142B] text-[#F8FAFC] px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#14B8A6] uppercase tracking-[0.25em] font-semibold text-sm mb-5">
            Get In Touch
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let&apos;s create something
            <span className="text-[#3B82F6]"> meaningful.</span>
          </h1>

          <p className="text-[#94A3B8] text-lg leading-8 max-w-2xl">
            Whether you have a website idea, a design project, or simply want
            to discuss an opportunity, I&apos;d love to hear from you.
          </p>
        </div>

        {/* CONTACT CONTENT */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* LEFT SIDE */}
          <div>
            <p className="text-[#94A3B8] uppercase tracking-[0.2em] text-sm font-semibold mb-6">
              Contact Details
            </p>

            <div className="space-y-8">

              {/* EMAIL */}
              <div className="border-b border-[#1E3354] pb-7">
                <p className="text-[#94A3B8] text-sm mb-2">
                  Email
                </p>

                <a
                  href="mailto:vickyuzoma10@email.com"
                  className="text-lg md:text-xl font-semibold hover:text-[#14B8A6] transition-colors duration-300"
                >
                  vickyuzoma10@email.com
                </a>
              </div>

              {/* PHONE */}
              <div className="border-b border-[#1E3354] pb-7">
                <p className="text-[#94A3B8] text-sm mb-2">
                  Phone / WhatsApp
                </p>

                <a
                  href="tel:+2349164851072"
                  className="text-lg md:text-xl font-semibold hover:text-[#14B8A6] transition-colors duration-300"
                >
                  +234 916 485 1072
                </a>
              </div>

              {/* AVAILABILITY */}
              <div>
                <p className="text-[#94A3B8] text-sm mb-2">
                  Availability
                </p>

                <p className="text-lg font-semibold">
                  Open to projects &amp; opportunities
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#0F1F38] border border-[#1E3354] rounded-2xl p-8 md:p-10">

            <p className="text-[#14B8A6] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
              Start A Conversation
            </p>

            <h2 className="text-2xl md:text-3xl font-bold mb-5">
              Have an idea?
            </h2>

            <p className="text-[#94A3B8] leading-7 mb-8">
              Tell me what you&apos;re working on and let&apos;s discuss how
              development, design, or both can help bring it to life.
            </p>

            <WhatsAppButton />

          </div>

        </div>

        {/* BOTTOM STATEMENT */}
        <div className="mt-24 pt-10 border-t border-[#1E3354]">
          <p className="text-[#94A3B8] text-sm uppercase tracking-[0.2em] mb-3">
            Victoria Paul
          </p>

          <p className="text-2xl md:text-3xl font-semibold max-w-3xl leading-tight">
            Development, design, and continuous learning —
            <span className="text-[#3B82F6]">
              {" "}all working together.
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}