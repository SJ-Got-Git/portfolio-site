import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 text-center">
      <h1 className="text-3xl font-bold">Sonali Jaiswal</h1>
      <p className="text-gray-600">🎬 Senior Video Editor & VFX Artist | AI-Driven Content Specialist</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>📍 Gurugram, Haryana, India</p>
        <p>📞 +91 81928 57286</p>
        <p>✉️ <a className="underline" href="mailto:sonali.08051999@gmail.com">sonali.08051999@gmail.com</a></p>
        <p>🔗 <a className="underline" href="https://linkedin.com/in/sonalijaiswal" target="_blank">LinkedIn</a></p>
        <p>🌐 <a className="underline" href="https://bit.ly/3Etr8Sq" target="_blank">Portfolio</a></p>
      </div>
    </header>
  );
}
