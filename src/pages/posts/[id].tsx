// pages/posts/[id].js
import LanguageSwitcher from '@/components/LanguageSwitcher';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

export default function Post() {
  const { t } = useTranslation('posts');
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t(`post-${id}-title`)}</h1>
      <p>{t(`post-${id}-content`)}</p>
    </div>
  );
}
