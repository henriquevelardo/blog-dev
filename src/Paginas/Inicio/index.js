import Banner from "Componentes/Banner";
import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import Post from "Componentes/Post";

export default function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </ul>
  );
}
