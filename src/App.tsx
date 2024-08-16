import { useState } from 'react';
import {
  usePostCreate,
  usePostDestroy,
  usePostList,
  usePostRetrieve,
  usePostUpdate,
} from './queries/posts';

const App = () => {
  const [currentId, setCurrentId] = useState<string>('');
  const { data: posts, refetch } = usePostList();
  const { data: post } = usePostRetrieve(currentId);
  const postCreate = usePostCreate();
  const postUpdate = usePostUpdate(currentId);
  const postDestroy = usePostDestroy();

  return (
    <div>
      <h1>Posts</h1>
      <button
        onClick={() =>
          postCreate.mutate(
            {
              id: require('uuid').v4(),
              title: 'New Post',
              body: 'This is a new post.',
              views: 0,
            },
            {
              onSuccess: () => {
                refetch();
              },
            },
          )
        }
      >
        Add Post
      </button>
      {post && <div>{post.body}</div>}
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>

              <p>Views: {post.views}</p>
              <button onClick={() => setCurrentId(post.id)}>View</button>
              {currentId && (
                <button
                  onClick={() =>
                    postUpdate.mutate(
                      {
                        id: post.id,
                        title: post.title,
                        body: post.body,
                        views: post.views + 1,
                      },
                      {
                        onSuccess: () => {
                          refetch();
                        },
                      },
                    )
                  }
                >
                  update
                </button>
              )}
              <button
                onClick={() =>
                  postDestroy.mutate(post.id, {
                    onSuccess: () => {
                      refetch();
                    },
                  })
                }
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
