import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return <h1>Post ID: {id}</h1>;
}

// import { postDate } from '@/fixtures/fakeData';
// import Link from 'next/link';
// import { useRouter } from 'next/router';

// export default function Post() {
//   const router = useRouter();
//   const { id } = router.query;
//   const currentData = postDate.find(
//     (post) => String(post.id) === (router.query.id as string),
//   );

//   return (
//     <div>
//       <h1>Post ID: {id}</h1>
//       <h2>{currentData?.title}</h2>
//       <p>{currentData?.content}</p>
//       <Link href='/posts'>返回列表</Link>
//     </div>
//   );
// }
