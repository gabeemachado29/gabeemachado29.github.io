import React from "react";

export default function App() {

  return (
    <div className="font-sans scroll-smooth">

      {/* MENU FIXO */}
      <nav className="fixed w-full bg-slate-900 text-white p-4 flex justify-center gap-6 z-50 shadow">

        <a href="#home">Home</a>
        <a href="#sobre">Sobre</a>
        <a href="#skills">Skills</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>

      </nav>

      {/* HERO */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
      >

        <img
          src="https://avatars.githubusercontent.com/gabeemachado29"
          className="w-40 h-40 rounded-full border-4 border-cyan-400 mb-6"
        />

        <h1 className="text-5xl font-bold mb-4">
          Gabriel Machado França
        </h1>

        <p className="text-xl opacity-80 mb-6">
          Desenvolvedor Full Stack • Analista de Sistemas • Técnico de TI
        </p>

        <a
          href="/cv.pdf"
          className="px-6 py-3 bg-cyan-500 rounded-xl"
        >
          📄 Baixar Currículo
        </a>

      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="min-h-screen flex items-center bg-white text-gray-900 px-6"
      >

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-6">
            Sobre Mim
          </h2>

          <p className="mb-4">
            Profissional de Tecnologia da Informação com experiência em suporte,
            infraestrutura e desenvolvimento de sistemas web e mobile.
          </p>

          <p className="mb-4">
            Iniciei minha carreira como Auxiliar de Informática no Colégio
            Adventista de Paranaguá e atualmente atuo como Técnico de
            Informática pela Faiston, prestando serviços para a Klabin.
          </p>

          <p>
            Desenvolvo também projetos próprios como o App Med, focado em
            comunicação e gestão entre médicos e pacientes.
          </p>

        </div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen flex items-center bg-slate-900 text-white px-6"
      >

        <div className="max-w-5xl mx-auto w-full">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Habilidades
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-center">

            {[
              ["🐦","Flutter"],
              ["🐘","PHP"],
              ["⚡","JavaScript"],
              ["🐍","Python"],
              ["☕","Java"],
              ["🔥","Firebase"],
              ["💾","MySQL"],
              ["🎯","Dart"]
            ].map(skill => (

              <div
                key={skill[1]}
                className="bg-slate-800 p-6 rounded-xl"
              >
                <div className="text-3xl mb-2">
                  {skill[0]}
                </div>
                {skill[1]}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="min-h-screen flex items-center bg-white text-gray-900 px-6"
      >

        <div className="max-w-5xl mx-auto w-full">

          <h2 className="text-3xl font-bold mb-10 text-center">
            Projetos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                nome:"App Med",
                desc:"Sistema de comunicação entre médicos e pacientes."
              },
              {
                nome:"Fast Work",
                desc:"Plataforma para conectar trabalhadores informais."
              }
            ].map(p => (

              <div className="bg-gray-100 p-6 rounded-xl shadow">

                <h3 className="font-bold text-cyan-600 mb-2">
                  {p.nome}
                </h3>

                <p>{p.desc}</p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="min-h-screen flex flex-col justify-center items-center bg-slate-900 text-white"
      >

        <h2 className="text-3xl font-bold mb-6">
          Contato
        </h2>

        <p className="mb-2">
          📧 gamafran@outlook.com
        </p>

        <a
          href="https://wa.me/5541991011256"
          className="bg-green-500 px-6 py-3 rounded-xl mt-4"
        >
          WhatsApp
        </a>

      </section>

    </div>
  );
}
