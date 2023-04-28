import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from "Paginas/NaoEncontrada";
import EstruturaPadrao from "Componentes/EstruturaPadrao";
import PostRecomendados from "Componentes/PostRecomendados";

export default function Post() {
  const parametros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  function filtraPostsRecomendados() {
    const postsAleatorios = posts.sort(() => {
      return Math.random() - 0.5;
    });

    const postsfitlrados = postsAleatorios.filter((postRecomendado) => {
      return postRecomendado.id !== Number(parametros.id);
    });

    return postsfitlrados.slice(0, 4);
  }

  let postRecomendado = filtraPostsRecomendados();

  return (
    <Routes>
      <Route path="*" element={<EstruturaPadrao />}>
        <Route
          index
          element={
            <>
              <PostModelo
                titulo={post.titulo}
                fotoCapa={`/assets/posts/${post.id}/capa.png`}
              >
                <div className="post-markdown-container" id="post">
                  <ReactMarkdown>{post.texto}</ReactMarkdown>
                </div>
                <PostRecomendados posts={postRecomendado} />
              </PostModelo>
              
            </>
          }
        />
      </Route>
    </Routes>
  );
}
