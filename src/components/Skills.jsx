import { motion } from "framer-motion";

export default function Skills() {
  return (
    <section className="px-6 py-12" id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <div>
            <h3 className="font-semibold">🎬 Video Editing</h3>
            <ul className="list-disc ml-5">
              <li>Adobe Premiere Pro</li>
              <li>Adobe After Effects</li>
              <li>DaVinci Resolve</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">🎨 Design & Image Editing</h3>
            <ul className="list-disc ml-5">
              <li>Adobe Photoshop</li>
              <li>Adobe Illustrator</li>
              <li>Canva</li>
              <li>Adobe Lightroom</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">🤖 AI Tools</h3>
            <ul className="list-disc ml-5">
              <li>11labs</li>
              <li>Pika</li>
              <li>Runway</li>
              <li>Sora</li>
              <li>HeyGen</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">💻 Scripting & Automation</h3>
            <ul className="list-disc ml-5">
              <li>FFmpeg (basic)</li>
              <li>API Integration (basic)</li>
              <li>Jupyter Notebooks (basic scripting)</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
