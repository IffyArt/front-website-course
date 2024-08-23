import { postDate } from '@/fixtures/fakeData';
import { Post } from '@/models/post';
import { GetStaticPropsContext } from 'next';
import Link from 'next/link';

export default function BlogPost({ post }: { post: Post | null }) {
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href='/posts'>Back to posts</Link>
    </div>
  );
}

// 使用 getStaticProps 在構建時獲取靜態內容

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = postDate.find((p) => String(p.id) === params?.id);

  return {
    props: {
      post: post || null,
    },
  };
}

export async function getStaticPaths() {
  const paths = postDate.map((post) => ({
    params: { id: String(post.id) }, // 確保 id 是字串
  }));

  return {
    paths,
    fallback: false, // 其他路徑返回404
  };
}
