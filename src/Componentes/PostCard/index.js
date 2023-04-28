import { Link, useLocation } from "react-router-dom";
import styles from "./Post.module.css";
import BotaoPrincipal from "Componentes/BotaoPrincipal";

export default function PostCard({ post, isInHome }) {

  //Saber se vim do Inicio ou de um Post em si.
  const localizacao = useLocation();

  return (
    <Link to={localizacao.pathname == "/" ? `post/${post.id}` : `/post/${post.id}#post` }>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <BotaoPrincipal >Ler</BotaoPrincipal>
      </div>
    </Link>
  );
}
