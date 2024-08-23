import Link from 'next/link';

// export default function Home() {
//   return (
//     <div>
//       <h1>Welcome to the Home Page</h1>
//       <Link href='/about'>Go to About Page</Link>
//     </div>
//   );
// }

export default function Home() {
  const postId = 123;
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link href={`/posts/${postId}`}>Go to Post {postId}</Link>
    </div>
  );
}
