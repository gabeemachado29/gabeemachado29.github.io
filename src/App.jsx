import React, { useEffect, useState } from "react";

export default function App() {

  const [repos, setRepos] = useState([]);
  const [dark, setDark] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/gabeemachado29/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className={dark
      ? "min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      : "min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 text-gray-900"
    }>

      {/* TOGGLE THEME */}
      <div className="absolute top-6 right-6">
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded-xl bg-cyan-500 text-white shadow hover:scale-105 transition"
        >
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      {/* HERO */}
      <section className="text-center py-20 px-6">

        <img
          src="https://avatars.githubusercontent.com/gabeemachado29"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg"
        />

        <h1 className="text-5xl font-bold mb-4">
          Gabriel Machado França
        </h1>

        <p className="text-xl opacity-80">
          Técnico de Informática • Analista de Sistemas • Desenvolvedor Full Stack
        </p>

        <a
          href="/cv.pdf"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 rounded-xl shadow hover:scale-105 transition"
        >
          📄 Baixar Currículo
        </a>

      </section>

      {/* TIMELINE */}
      <section className="max-w-4xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-8">
          🧭 Trajetória
        </h2>

        <div className="space-y-6 border-l-2 border-cyan-400 pl-6">

          <div>
            <h3 className="font-bold text-cyan-400">
              Auxiliar de Informática
            </h3>
            <p className="opacity-80">
              Colégio Adventista de Paranaguá
            </p>
          </div>

          <div>
            <h3 className="font-bold text-cyan-400">
              Técnico de Informática
            </h3>
            <p className="opacity-80">
              Faiston • Prestação para Klabin
            </p>
          </div>

          <div>
            <h3 className="font-bold text-cyan-400">
              Desenvolvedor Full Stack
            </h3>
            <p className="opacity-80">
              Projetos próprios e App Med
            </p>
          </div>

        </div>

      </section>

      {/* STATS GITHUB */}
      <section className="text-center mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📊 GitHub Stats
        </h2>

        <img
          src="https://github-readme-stats.vercel.app/api?username=gabeemachado29&show_icons=true&theme=tokyonight"
          className="mx-auto mb-6"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabeemachado29&layout=compact&theme=tokyonight"
          className="mx-auto"
        />

      </section>

      {/* PROJETOS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📂 Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {repos.slice(0,6).map(repo => (

            <div
              key={repo.id}
              className="p-5 rounded-xl backdrop-blur bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-cyan-400 font-bold">
                {repo.name}
              </h3>

              <p className="text-sm opacity-80 mb-3">
                {repo.description || "Sem descrição"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                className="text-cyan-400 text-sm hover:underline"
              >
                Ver →
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section className="text-center pb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📫 Contato
        </h2>

        <div className="flex flex-col gap-3">

          <a href="mailto:gamafran@outlook.com">
            📧 gamafran@outlook.com
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-machadof29"
            target="_blank"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/gabeemachado29"
            target="_blank"
          >
            🐙 GitHub
          </a>

        </div>

      </section>

    </div>
  );
}
