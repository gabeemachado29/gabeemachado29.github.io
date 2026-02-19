import React, { useEffect, useState } from "react";

export default function App() {

  const [repos, setRepos] = useState([]);
  const [dark, setDark] = useState(true);
  const [selectedRepo, setSelectedRepo] = useState(null);

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
          className="px-4 py-2 rounded-xl bg-cyan-500 text-white shadow"
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

        <h1 className="text-5xl font-bold mb-2">
          Gabriel Machado França
        </h1>

        <p className="opacity-80">
          Técnico de Informática • Analista de Sistemas • Desenvolvedor Full Stack
        </p>

        <p className="opacity-70 text-sm mt-2">
          Especialista em suporte corporativo, infraestrutura e desenvolvimento de
          aplicações web e mobile.
        </p>

        <a
          href="/cv.pdf"
          className="inline-block mt-6 px-6 py-3 bg-cyan-500 rounded-xl shadow hover:scale-105 transition"
        >
          📄 Baixar Currículo
        </a>

      </section>

      {/* SOBRE EXPANDIDO */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700">

          <h2 className="text-2xl font-semibold mb-4">
            👨‍💻 Sobre mim
          </h2>

          <p className="opacity-80 mb-3">
            Atuo na área de Tecnologia da Informação desde cedo, iniciando minha
            carreira como Auxiliar de Informática no Colégio Adventista de
            Paranaguá, onde adquiri experiência em manutenção, suporte e mídia.
          </p>

          <p className="opacity-80 mb-3">
            Atualmente trabalho como Técnico de Informática pela Faiston,
            prestando serviços para a Klabin em suas duas unidades, atuando com
            suporte corporativo, redes e infraestrutura.
          </p>

          <p className="opacity-80">
            Também desenvolvo projetos próprios, com foco em sistemas reais,
            integração de APIs, cloud e aplicativos mobile.
          </p>

        </div>

      </section>

      {/* SKILLS COM ÍCONES */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          🧠 Tecnologias
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {[
            ["💙","Flutter"],
            ["🎯","Dart"],
            ["🐘","PHP"],
            ["⚡","JavaScript"],
            ["🐍","Python"],
            ["☕","Java"],
            ["💾","MySQL"],
            ["🔥","Firebase"]
          ].map(skill => (

            <div
              key={skill[1]}
              className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-center hover:scale-105 transition"
            >
              <div className="text-2xl">{skill[0]}</div>
              <div className="opacity-80">{skill[1]}</div>
            </div>

          ))}

        </div>

      </section>

      {/* CERTIFICADOS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          🏆 Certificados
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            📜 Análise e Desenvolvimento de Sistemas — IFPR
          </div>

          <div className="bg-slate-800 p-5 rounded-xl border border-slate-700">
            📜 Cursos complementares em Desenvolvimento e TI
          </div>

        </div>

      </section>

      {/* PROJETOS */}
      <section className="max-w-5xl mx-auto px-6 mb-20">

        <h2 className="text-2xl font-semibold mb-6">
          🚀 Projetos
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {repos.slice(0,6).map(repo => (

            <div
              key={repo.id}
              onClick={() => setSelectedRepo(repo)}
              className="p-5 rounded-xl bg-white/5 border border-white/10 cursor-pointer hover:scale-105 transition"
            >
              <h3 className="text-cyan-400 font-bold">
                {repo.name}
              </h3>

              <p className="text-sm opacity-80">
                Clique para detalhes
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* MODAL PROJETO */}
      {selectedRepo && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-6">

          <div className="bg-slate-900 p-6 rounded-xl max-w-lg w-full">

            <h3 className="text-xl font-bold text-cyan-400 mb-3">
              {selectedRepo.name}
            </h3>

            <p className="opacity-80 mb-4">
              {selectedRepo.description || "Sem descrição adicionada."}
            </p>

            <a
              href={selectedRepo.html_url}
              target="_blank"
              className="text-cyan-400 hover:underline"
            >
              Abrir repositório →
            </a>

            <div className="mt-6">
              <button
                onClick={() => setSelectedRepo(null)}
                className="px-4 py-2 bg-red-500 rounded"
              >
                Fechar
              </button>
            </div>

          </div>

        </div>

      )}

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5541991011256"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 w-14 h-14 flex items-center justify-center rounded-full text-2xl shadow-lg hover:scale-110 transition"
      >
        💬
      </a>

      {/* CONTATO */}
      <section className="text-center pb-20">

        <h2 className="text-2xl font-semibold mb-6">
          📫 Contato
        </h2>

        <p>📧 gamafran@outlook.com</p>

        <p className="opacity-80">
          LinkedIn • GitHub • WhatsApp
        </p>

      </section>

    </div>
  );
}
