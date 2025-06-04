import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-12" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-700">
          Creative and detail-oriented Video Editor with over 4 years of experience in crafting compelling
          visual narratives. Proficient in leveraging AI technologies to produce high-quality video content,
          including multi-camera setups, promotional materials, reels, testimonials, chroma key footage, and podcasts.
          Adept at collaborating with cross-functional teams to deliver engaging content that aligns with brand vision and objectives.
        </p>
      </motion.div>
    </section>
  );
}
