import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { Session } from "next-auth";
import ConversationList from "./ConversationList";
import ConversationOperations from "../../../graphql/operations/conversation";
import {
  ConversationCreatedSubscriptionData,
  ConversationsData,
} from "../../../util/types";
import { useRouter } from "next/router";

interface ConversationsWrapperProps {
  session: Session;
}

const ConversationsWrapper = ({ session }: ConversationsWrapperProps) => {
  const {
    data: conversationsData,
    error: conversationsError,
    loading: conversationsLoading,
    subscribeToMore,
  } = useQuery<ConversationsData, null>(
    ConversationOperations.Queries.conversations
  );

  const router = useRouter();
  const {
    query: { conversationId },
  } = router;

  const onViewConversation = async (conversationId: string) => {
    // 1. Push the conversation id to the router query params
    router.push({ query: { conversationId } });
    // 2. Mark the message as read
  };

  const subscribeToNewConversation = () => {
    subscribeToMore({
      document: ConversationOperations.Subscriptions.conversationCreated,
      updateQuery: (
        prev,
        { subscriptionData }: ConversationCreatedSubscriptionData
      ) => {
        if (!subscriptionData.data) return prev;
        const newConversation = subscriptionData.data.conversationCreated;
        return Object.assign({}, prev, {
          conversations: [newConversation, ...prev.conversations],
        });
      },
    });
  };

  useEffect(() => {
    subscribeToNewConversation();
  }, []);

  console.log("HERE IS DATA", conversationsData);
  return (
    <Box
      width={{ base: "100%", md: "400px" }}
      bg="whiteAlpha.50"
      py={6}
      px={3}
      display={{ base: conversationId ? "none" : "flex", md: "flex" }}
    >
      {/* Skeleton Loader */}
      <ConversationList
        session={session}
        conversations={conversationsData?.conversations || []}
        onViewConversation={onViewConversation}
      />
    </Box>
  );
};
export default ConversationsWrapper;
