import WhatsAppButton from "./WhatsAppButton";

export default function Contact() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6">

      <div className="bg-[#08142b] w-full max-w-2xl p-8 rounded-xl shadow-lg border border-gray-700">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-white text-center mb-6">
          Contact Me
        </h2>

        {/* TEXT */}
        <p className="text-gray-300 text-center mb-8">
          Let’s work together on your website, brand, or design project.
        </p>

        {/* CONTACT INFO BOX */}
        <div className="space-y-4 text-center">

          <div className="bg-[#0b1b3a] p-4 rounded-lg">
            <p className="text-gray-400">Email</p>
            <p className="text-white font-semibold">
              vickyuzoma10@email.com
            </p>
          </div>

          <div className="bg-[#0b1b3a] p-4 rounded-lg">
            <p className="text-gray-400">Phone / WhatsApp</p>
            <p className="text-white font-semibold">
              +234 916 485 1072
            </p>
          </div>

        </div>

        {/* WHATSAPP BUTTON */}
        <div className="mt-8 flex justify-center">
          <WhatsAppButton />
        </div>

      </div>

    </div>
  );
}