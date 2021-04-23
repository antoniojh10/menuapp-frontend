import styles from "../styles/Home.module.css";

const categories = [
  {
    src: "https://nextjs.org/docs",
    title: "Restaurantes",
    description: "Encuentra los mejores restaurantes cerca de ti.",
  },
  {
    src: "https://nextjs.org/docs",
    title: "Tiendas",
    description: "Encuentra los mejores restaurantes cerca de ti.",
  },
  {
    src: "https://nextjs.org/docs",
    title: "Servicios",
    description: "Encuentra los mejores restaurantes cerca de ti.",
  },
  {
    src: "https://nextjs.org/docs",
    title: "Supermercados",
    description: "Encuentra los mejores restaurantes cerca de ti.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <a href="#">Ordenando</a>
        </h1>

        <p className={styles.description}>
          ¿Quieres registrar tu negocio?{" "}
          <code className={styles.code}>Empieza aquí</code>
        </p>

        <div className={styles.grid}>
          {categories.map((category) => (
            <a key={category.title} href={category.src} className={styles.card}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
