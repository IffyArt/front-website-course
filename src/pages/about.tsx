import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navbar from '@/components/Navbar';
import styles from '@/styles/Home.module.css';
import useTranslation from 'next-translate/useTranslation';
import { Inter } from 'next/font/google';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export default function about() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>{t('about:about.title')}</h1>
          <p>{t('about:about.content')}</p>
        </div>
        <LanguageSwitcher />
      </main>
    </>
  );
}
