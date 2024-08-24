import { NextPage } from 'next';
import { useRouter } from 'next/router';

interface Props {}

const NewsDetailPage: NextPage<Props> = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default NewsDetailPage;
