import React, { useEffect, useState } from "react";

export default function App() {

  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gabeemachado29/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">

      {/* HERO */}
      <section className="text-center py-20 px-6 animate-fade">

        <img
          src="https://avatars.githubusercontent.com/u/000000?v=4"
          alt="foto"
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-cyan-400 shadow-lg"
        />

        <h1 className="text-5xl font-bold mb-4">
          Gabriel Machado França
        </h1>

        <p className="text-slate-300 text-xl">
          Técnico de Informática • Analista de Sistemas • Desenvolvedor Full Stack
        </p>

      </section>

      {/* SOBRE */}
      <section className="max-w-5xl mx-auto px-6 mb-16 animate-slide">

        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700">

          <h2 className="text-2xl font-semibold mb-4">👨‍💻 Sobre mim</h2>

          <p className="text-slate-300 mb-3">
            Tenho 22 anos e atuo na área de Tecnologia da Informação desde cedo,
            iniciando como Auxiliar de Informática e evoluindo para suporte
            corporativo e desenvolvimento de sistemas.
          </p>

          <p className="text-slate-300">
            Formado em Análise e Desenvolvimento de Sistemas, atuo também com
            desenvolvimento de aplicações e soluções próprias.
          </p>

        </div>
      </section>

      {/* PROJETO DESTAQUE */}
      <section className="max-w-5xl mx-auto px-6 mb-16">

        <div className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700 hover:scale-105 transition">

          <h2 className="text-2xl font-semibold mb-4">
            🚀 Projeto em Destaque
          </h2>

          <h3 className="text-cyan-400 text-xl font-bold">App Med</h3>

          <p className="text-slate-300 mb-4">
            Sistema de comunicação e gerenciamento entre médicos e pacientes,
            em produção desde 2025.
          </p>

          <div className="flex flex-wrap gap-2">
            {["Flutter","Firebase","Google Cloud","APIs REST"].map((tech) => (
              <span
                key={tech}
                className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* PROJETOS DINÂMICOS */}
      <section className="max-w-5xl mx-auto px-6 mb-16">

        <h2 className="text-2xl font-semibold mb-6">
          📂 Projetos no GitHub
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {repos.slice(0,6).map((repo) => (

            <div
              key={repo.id}
              className="bg-slate-800 p-5 rounded-xl border border-slate-700 hover:scale-105 transition"
            >
              <h3 className="text-cyan-400 font-bold text-lg">
                {repo.name}
              </h3>

              <p className="text-slate-300 text-sm mb-3">
                {repo.description || "Sem descrição"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                className="text-cyan-400 text-sm hover:underline"
              >
                Ver repositório →
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section className="max-w-5xl mx-auto px-6 pb-20 text-center">

        <h2 className="text-2xl font-semibold mb-6">📫 Contato</h2>

        <div className="flex flex-col gap-3 text-slate-300">

          <a
            href="mailto:gamafran@outlook.com"
            className="hover:text-cyan-400 transition"
          >
            📧 gamafran@outlook.com
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-machadof29"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://github.com/gabeemachado29"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            🐙 GitHub
          </a>

        </div>

      </section>

      {/* ANIMAÇÕES CSS */}
      <style>{`
        .animate-fade {
          animation: fade 1s ease-in-out;
        }

        .animate-slide {
          animation: slide 1s ease-in-out;
        }

        @keyframes fade {
          from {opacity:0}
          to {opacity:1}
        }

        @keyframes slide {
          from {
            opacity:0;
            transform: translateY(40px);
          }
          to {
            opacity:1;
            transform: translateY(0);
          }
        }
      `}</style>

    </div>
  );
}
