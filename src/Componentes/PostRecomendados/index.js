import PostCard from "Componentes/PostCard"
import styles from "./PostRecomendado.module.css";

export default function PostRecomendados({posts}) {
  return (
    <section>
      <h1>Outros posts que você pode gostar:</h1>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <PostCard post={post}/>
        ))}
      </ul>
    </section>
  )
}
