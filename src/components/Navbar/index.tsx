import useTranslation from 'next-translate/useTranslation';

type Props = {};

const Navbar = (props: Props) => {
  const { t } = useTranslation('components/navbar');

  return <div>{t('logo')}</div>;
};

export default Navbar;
