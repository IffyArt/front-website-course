import { useRouter } from 'next/router';

type Props = {};

const About = (props: Props) => {
  const router = useRouter();

  console.log(router.query);

  return <div>About</div>;
};

export default About;
