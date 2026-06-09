import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  return (
    <footer className="bg-[#08142b] text-white mt-10 py-10 px-6">

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">
            Victoria Paul
          </h2>
          <p className="text-gray-400">
            Front-End Developer & Graphic Designer
          </p>
        </div>

        {/* CENTER LINKS */}
        <div className="flex flex-col gap-2 text-center">
          <p className="text-gray-300">Home</p>
          <p className="text-gray-300">Projects</p>
          <p className="text-gray-300">Contact</p>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center md:text-right flex flex-col items-center md:items-end gap-3">

          <p className="text-gray-400">
            Let's build something great together
          </p>

          <WhatsAppButton />

        </div>

      </div>

      {/* BOTTOM LINE */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Victoria Paul. All rights reserved.
      </div>

    </footer>
  );
}