import { Flex, Text, Button, Separator } from "@amigoapp/doca-react";
import { postSelector } from "../../store/slices/posts";
import { useSelector } from "react-redux";
import Users from "../users/Users";
import Comments from "../comments/Comments";

function PostItem({ post, onButtonClick, comments, postId, commentsShow, users }) {
  const postContent = useSelector(state => postSelector.selectById(state, post));

  return (
    <>
      <Flex align="start" direction="col" gap={2} key={postContent.title}>
        <Text as="h1" weight="bold" size="large">
          {postContent.title}
        </Text>
        <Text size="small">{postContent.body}</Text>
        <Users
          users={users}
          postUserId={postContent.userId}
        />
        <Button
          iconLeft="comment"
          className="doca-mb-2"
          size="small"
          onClick={(id) => onButtonClick(postContent.id)}
          variant="secondary"
        >
          Comentários
        </Button>
        {commentsShow && postContent.id === postId ? (
          <Comments postId={postId} comments={comments} />
        ) : null}
        <Separator />
      </Flex>
    </>
  );
}

export default PostItem;
