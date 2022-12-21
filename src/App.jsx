import { useState } from "react";
import Posts from "./components/posts/Posts";

function App() {
  const [commentsShow, setCommentsShow] = useState(false);
  const [postId, setPostId] = useState('');

  const posts = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 2,
      "id": 12,
      "title": "in quibusdam tempore odit est dolorem",
      "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    }
  ];

  const comments = [
    {
      "postId": 1,
      "id": 1,
      "name": "id labore ex et quam laborum",
      "email": "Eliseo@gardner.biz",
      "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
      "postId": 1,
      "id": 2,
      "name": "quo vero reiciendis velit similique earum",
      "email": "Jayne_Kuhic@sydney.com",
      "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
      "postId": 2,
      "id": 10,
      "name": "eaque et deleniti atque tenetur ut quo ut",
      "email": "Carmen_Keeling@caroline.name",
      "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    },
    {
      "postId": 12,
      "id": 58,
      "name": "sint minus reiciendis qui perspiciatis id",
      "email": "Ezra_Abshire@lyda.us",
      "body": "veritatis qui nihil\nquia reprehenderit non ullam ea iusto\nconsectetur nam voluptas ut temporibus tempore provident error\neos et nisi et voluptate"
    }
  ];

  const onButtonClick = (id) => {
    commentsShow ? setCommentsShow(false) && setPostId('') : setCommentsShow(true) && setPostId(id);
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

export default App
