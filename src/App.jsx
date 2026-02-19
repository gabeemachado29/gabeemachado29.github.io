export default function App() {
  return (
    <div className="container">
      <header>
        <h1>Gabriel Machado</h1>
        <p>Técnico em Informática • Programador Flutter • Web Developer</p>
      </header>

      <section className="card">
        <h2>🚀 Sobre mim</h2>
        <p>
          Desenvolvedor focado em tecnologia, criação de sistemas web e apps
          mobile. Experiência com Flutter, React, PHP e Laravel.
        </p>
      </section>

      <section className="card">
        <h2>🛠️ Tecnologias</h2>
        <ul>
          <li>Flutter</li>
          <li>React</li>
          <li>Laravel</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>JavaScript</li>
        </ul>
      </section>

      <section className="card">
        <h2>📂 Projetos</h2>
        <p>Em breve você poderá ver meus projetos aqui.</p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} • Gabriel Machado</p>
      </footer>
    </div>
  );
}
