import PostModelo from "Componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, me chamo Henrique!</h3>

      <img
        src="https://github.com/henriquevelardo.png"
        alt="Imagem do Henrique github"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Apaixonado por tecnologia, desde o hardware ao software, procuro novas
        oportunidades e desafios na área
      </p>

      <p className={styles.paragrafo}>
        Procuro adquirir novos conhecimentos e maior desenvolvimento pessoal, além de,
        contribuir ao máximo para ajudar em quaisquer tarefas que a mim forem
        atribuídas.
      </p>

      <p className={styles.paragrafo}>
        Esta página é um projeto acadêmico para prática com React Js
      </p>
    </PostModelo>
  );
}
