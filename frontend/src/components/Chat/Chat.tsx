import { Button, Flex } from "@chakra-ui/react";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import ConversationsWrapper from "./Conversations/ConversationsWrapper";
import FeedWrapper from "./Feed/FeedWrapper";

interface ChatProps {
  session: Session;
}

export const Chat = ({ session }: ChatProps) => {
  return (
    <Flex height="100vh">
      <ConversationsWrapper session={session} />
      <FeedWrapper session={session} />
    </Flex>
  );
};
