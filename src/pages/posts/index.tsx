import { postDate } from '@/fixtures/fakeData';
import Link from 'next/link';

const PostsPage = () => {
  return (
    <div>
      {postDate.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Link href={`/posts/${post.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default PostsPage;
