import styles from './styles.module.css';

type Props = {
  title: string;
  imgUrl: string;
  local: string;
  context: string;
};

const Card = ({ title, imgUrl, local, context }: Props) => {
  return (
    <article
      className={styles.card}
      style={{ backgroundImage: `url("${imgUrl}")` }}
    >
      <footer className={styles.footer}>
        <h3>{title}</h3>
        <p>{context}</p>
        <span>{local}</span>
      </footer>
    </article>
  );
};

export default Card;
