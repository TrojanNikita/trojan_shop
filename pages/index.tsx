import styles from '../styles/styles.module.scss';
import Head from 'next/head';
import HeaderLogo from '../components/HeaderLogo';

const data = Array.from({length: 20}, (_a, index) => index + 1);

const IndexPage = () => (
    <div>
        <Head>
          <title>Главная</title>
        </Head>
        <header className={styles.header}>
            <HeaderLogo />
            <nav className={styles.navigation}>
                <ul className={styles.navigationList}>
                    <li>Продукты</li>
                    <li>Одежда</li>
                    <li>Техника</li>
                </ul>
            </nav>
        </header>
        <main className={styles.main}>
            <section className={styles.content}>
                {data.map(item => <div className={styles.contentItem}>{item}</div>)}
            </section>
        </main>
    </div>
)

export default IndexPage
