import React from "react";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#0f172a,#1e293b,#020617)",
      color: "white",
      fontFamily: "Arial",
      padding: "40px"
    }}>
      
      <div style={{maxWidth: "900px", margin: "0 auto"}}>

        <h1 style={{fontSize: "42px", marginBottom: "10px"}}>
          Gabriel Machado França
        </h1>

        <p style={{color: "#94a3b8", marginBottom: "40px"}}>
          Técnico de Informática • Analista de Sistemas • Desenvolvedor Full Stack
        </p>

        {/* SOBRE */}
        <section style={{marginBottom: "40px"}}>
          <h2>👨‍💻 Sobre mim</h2>
          <p>
            Tenho 22 anos e atuo na área de Tecnologia da Informação desde cedo,
            iniciando como Auxiliar de Informática e evoluindo para suporte
            corporativo e desenvolvimento de sistemas.
          </p>
          <p>
            Sou formado em Análise e Desenvolvimento de Sistemas e desenvolvo
            projetos próprios focados em soluções reais.
          </p>
        </section>

        {/* PROJETO */}
        <section style={{marginBottom: "40px"}}>
          <h2>🚀 Projeto em Destaque</h2>

          <h3 style={{color: "#22d3ee"}}>App Med</h3>

          <p>
            Sistema de comunicação e gerenciamento entre médicos e pacientes,
            em produção desde 2025 e em fase final de testes.
          </p>
        </section>

        {/* SKILLS */}
        <section style={{marginBottom: "40px"}}>
          <h2>🧠 Tecnologias</h2>

          <ul>
            <li>Flutter / Dart</li>
            <li>PHP / Laravel</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>Java</li>
            <li>C / C++</li>
            <li>MySQL / SQLite</li>
            <li>Firebase / Google Cloud</li>
          </ul>
        </section>

        {/* CONTATO */}
        <section>
          <h2>📫 Contato</h2>

          <p>Email: gamafran@outlook.com</p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/gabriel-machadof29"
              target="_blank"
              style={{color:"#22d3ee"}}
            >
              Acessar
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/gabeemachado29"
              target="_blank"
              style={{color:"#22d3ee"}}
            >
              Acessar
            </a>
          </p>
        </section>

      </div>
    </div>
  );
}
