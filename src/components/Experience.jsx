import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section className="px-6 py-12 bg-gray-100" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="font-semibold text-xl">VFX Artist – TrueFan</h3>
            <p className="italic text-sm">Gurugram, Haryana | March 2023 – Present</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed AI-powered video templates aligning with brand guidelines</li>
              <li>Applied VFX, motion graphics, and animation techniques</li>
              <li>Collaborated with AI engineers and creative teams</li>
              <li>Led a team of editors and designers</li>
              <li>Clients: Zomato, Chingari, Ranveer Singh, Kareena Kapoor, Tiger Shroff, Hrithik Roshan</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Senior Executive Video Editor – SpeakX (formerly Yellow Class)</h3>
            <p className="italic text-sm">Jan 2021 – Feb 2023</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Created YouTube videos, reels, and ads</li>
              <li>Collaborated with design, content, and marketing teams</li>
              <li>Contributed voiceover and acting when needed</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Video Editor Intern – Expertrons</h3>
            <p className="italic text-sm">Sept 2020 – Dec 2020</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Delivered reels, ads, and YouTube content with motion graphics</li>
              <li>Worked with a cross-functional team</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Graphic Artist Intern – BANKEDGE</h3>
            <p className="italic text-sm">August 2020</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Edited course explainer videos using After Effects</li>
              <li>Reported progress directly to the Project Head</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
