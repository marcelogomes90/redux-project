import { useEffect, useState } from "react";
import Posts from "./components/posts/Posts";

function App() {
  const [commentsShow, setCommentsShow] = useState(false);
  const [postId, setPostId] = useState('');
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(dataPosts => setPosts(dataPosts))

    fetch(`https://jsonplaceholder.typicode.com/comments`)
      .then(response => response.json())
      .then(dataComment => setComments(dataComment))
  }, [])

  const onButtonClick = (id) => {
    commentsShow ? setCommentsShow(false) : setCommentsShow(true);
    setPostId(id);
  };

  return (
    <div className="doca-m-8">
      <Posts
        posts={posts}
        onButtonClick={onButtonClick}
        postId={postId}
        comments={comments}
        commentsShow={commentsShow}
      />
    </div>
  )
}

export default App;
