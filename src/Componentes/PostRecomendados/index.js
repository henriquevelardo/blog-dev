import PostCard from "Componentes/PostCard"
import styles from "./PostRecomendado.module.css";

export default function PostRecomendados({posts}) {

  return (
    <section>
      <h3>Outros posts que você pode gostar:</h3>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}
