import { Flex, Text, Button } from "@amigoapp/doca-react";
import Comments from "../comments/Comments";

function Posts({ posts, openInfos, coments, postId, commentsShow }) {

    return (
        <>
            {posts.map((post) => (
            <Flex
                align="start"
                direction="col"
                gap={2}
                key={post.id}
            >
                <Text as="h1" weight="bold">{post.title}</Text>
                <Text as="p">{post.body}</Text>
                <Button
                    block
                    className="doca-mb-2"
                    size="small"
                    onClick={(id) => openInfos(post.id)}
                    variant="secondary"
                >
                Comentários
                </Button>
                {commentsShow && post.id === postId ?
                <Comments
                    postId={postId}
                    coments={coments}
                /> : null}
            </Flex>
            ))}
        </>
    )
}

export default Posts;