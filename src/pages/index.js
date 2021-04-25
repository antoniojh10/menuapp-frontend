import styles from "../styles/Home.module.css";
import Link from "next/link";
import { getCommerces } from "../lib/api";

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

export default function Home({ stores }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a{" "}
          <Link href="#">
            <a>Ordenando</a>
          </Link>
        </h1>

        <p className={styles.description}>
          ¿Quieres registrar tu negocio?{" "}
          <Link href="/signin">
            <a className={styles.code}>Empieza aquí</a>
          </Link>
        </p>

        <div className={styles.grid}>
          {stores.map((store) => (
            <Link href={`/${store.domainName}`}>
              <a key={store.domainName} className={styles.card}>
                <h3>{store.name}</h3>
                <p>{store.description}</p>
              </a>
            </Link>
          ))}
        </div>

        <div className={styles.grid}>
          {categories.map((category) => (
            <a key={category.title} href={category.src} className={styles.card}>
              <h3>{category.title}</h3>
              <p>{category.description}</p>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const response = await getCommerces();
  const stores = response.data;

  // Pass data to the page via props
  return { props: { stores } };
}
