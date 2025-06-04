import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="px-6 py-12 bg-gray-100" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        {/* <p className="text-gray-700">📞 +91 81928 57286</p>
        <p className="text-gray-700">✉️ <a className="underline" href="mailto:sonali.08051999@gmail.com">sonali.08051999@gmail.com</a></p>
        <p className="text-gray-700">🔗 <a className="underline" href="https://linkedin.com/in/sonalijaiswal" target="_blank">LinkedIn</a></p> */}
        <h3 className="text-xl font-semibold mt-6">References</h3>
        <ul className="mt-2 text-gray-600">
          <li><strong>Nishtha Agarwal</strong> – Content Head at SpeakX | ✉️ nishtha@ivypods.com</li>
          <li><strong>Deepanshi Prabhakar</strong> – HR Director at SpeakX | ✉️ deepanshi@ivypods.com</li>
        </ul>
      </motion.div>
    </section>
  );
}
