import styles from './index.less';

export default function IndexPage() {
  return (
    <div className={styles.main}>
      <h1 className={styles.title}> Tangerine
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-juzi"></use>
      </svg>
      </h1>
    </div>
  );
}
