// pages/index.tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common'); // 加載 common.json 中的翻譯內容

  return (
    <div>
      <LanguageSwitcher />
      <h1>{t('welcome')}</h1>
      {/* 根據當前語言顯示翻譯 */}

      <p>{t('hello', { name: 'iffy' })}</p>
    </div>
  );
}
