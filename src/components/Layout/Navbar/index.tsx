import { routers } from '@/fixtures/routers';
import Link from 'next/link';
import styles from './styles.module.css';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={styles.navbar}>
      {routers.map((router) => (
        <Link href={`/${router.path}`} key={router.path}>
          {router.label}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
