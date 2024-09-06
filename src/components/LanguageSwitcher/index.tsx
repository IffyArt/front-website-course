// components/LanguageSwitcher/index.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const { locale, asPath } = useRouter();

  return (
    <div>
      <Link href={asPath} locale='en'>
        <button disabled={locale === 'en'}>English</button>
      </Link>
      <Link href={asPath} locale='zh'>
        <button disabled={locale === 'zh'}>中文</button>
      </Link>
      <Link href={asPath} locale='fr'>
        <button disabled={locale === 'fr'}>Français</button>
      </Link>
    </div>
  );
}
