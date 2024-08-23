import { postDate } from '@/fixtures/fakeData';
import Link from 'next/link';

export default function PostsPage() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {postDate.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
