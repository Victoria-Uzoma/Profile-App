export default function About() {
  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">

      <div className="bg-[#112a55] p-8 rounded-xl w-full max-w-2xl text-center shadow-lg">

        <h2
          className="text-white font-bold mb-6"
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            letterSpacing: "2px",
          }}
        >
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-7">
          I am a <span className="text-white font-semibold">Front-End Developer</span> and a
          <span className="text-white font-semibold"> Graphic Designer</span>.
          <br /><br />
          I specialize in building modern, responsive, and user-friendly websites
          using React and modern web technologies.
          <br /><br />
          I also design creative graphics that help brands stand out and communicate
          better with their audience.
          <br /><br />
          My goal is to combine design and development to create clean, professional,
          and impactful digital experiences.
        </p>

      </div>
    </div>
  );
}