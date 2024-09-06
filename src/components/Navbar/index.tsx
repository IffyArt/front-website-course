import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';

type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation('components/navbar');

  return (
    <div>
      {t('logo')}
      <ul>
        <li>
          <Link href='/'>{t('home')}</Link>
        </li>
        <li>
          <Link href='/about'>{t('about')}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
