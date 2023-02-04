import { Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import MessagesHeader from "./Messages/Header";
import MessageInput from "./Messages/Input";

interface FeedWrapperProps {
  session: Session;
}

const FeedWrapper = ({ session }: FeedWrapperProps) => {
  const router = useRouter();
  const {
    user: { id: userId },
  } = session;

  const { conversationId } = router.query;
  return (
    <Flex
      display={{ base: conversationId ? "flex" : "none", md: "flex" }}
      width="100%"
      direction="column"
    >
      {conversationId && typeof conversationId === "string" ? (
        <>
          <Flex
            direction="column"
            justify="space-between"
            overflow="hidden"
            flexGrow={1}
          >
            <MessagesHeader userId={userId} conversationId={conversationId} />
          </Flex>
          <MessageInput session={session} conversationId={conversationId} />
        </>
      ) : (
        <div>No Conversation Selected</div>
      )}
    </Flex>
  );
};
export default FeedWrapper;
