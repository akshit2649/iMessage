import { useLazyQuery, useMutation } from "@apollo/client";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import ConversationOperations from "../../../../graphql/operations/conversation";
import UserOperations from "../../../../graphql/operations/user";
import {
  CreateConversationData,
  CreateConversationInput,
  SearchedUsers,
  SearchUsersData,
  SearchUsersInput,
} from "../../../../util/types";
import Participants from "./Participants";
import UserSearchList from "./UserSearchList";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  session: Session;
}

const ConversationModal = ({ isOpen, onClose, session }: ModalProps) => {
  const {
    user: { id: userId },
  } = session;

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [participants, setParticipants] = useState<Array<SearchedUsers>>([]);

  const [searchUsers, { data, error, loading }] = useLazyQuery<
    SearchUsersData,
    SearchUsersInput
  >(UserOperations.Queries.searchUsers);

  const [createConversation, { loading: createConversationLoading }] =
    useMutation<CreateConversationData, CreateConversationInput>(
      ConversationOperations.Mutations.createConversation
    );

  const onCreateConversation = async () => {
    const participantIds = [userId, ...participants.map((p) => p.id)];
    try {
      const { data } = await createConversation({
        variables: { participantIds },
      });

      if (!data?.createConversation) {
        throw new Error("Failed to create conversation");
      }

      const {
        createConversation: { conversationId },
      } = data;

      router.push({ query: { conversationId } });

      // clear state and close modal
      setParticipants([]);
      setUsername("");
      onClose();

      console.log("HERE IS DATA", data);
    } catch (error: any) {
      console.log("OnCreate CONVERSATION ERROR", error);
      toast.error(error.message);
    }
  };

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    searchUsers({ variables: { username } });
    console.log("INSIDE ONSUBMIT", username);
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter((p) => p.id !== userId));
  };

  const addParticipant = (user: SearchedUsers) => {
    setParticipants((prev) => [...prev, user]);
    setUsername("");
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#2d2d2d" pb={4}>
          <ModalHeader>Create a Conversation</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onSearch}>
              <Stack spacing={4}>
                <Input
                  placeContent="Enter a username"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
                <Button type="submit" disabled={!username} isLoading={loading}>
                  Search
                </Button>
              </Stack>
            </form>
            {data?.searchUsers && (
              <UserSearchList
                users={data?.searchUsers}
                addParticipant={addParticipant}
              />
            )}
            {participants.length !== 0 && (
              <>
                <Participants
                  participants={participants}
                  removeParticipant={removeParticipant}
                />
                <Button
                  bg="brand.100"
                  width="100%"
                  mt={6}
                  _hover={{ bg: "brand.100" }}
                  onClick={() => {
                    onCreateConversation();
                  }}
                  isLoading={createConversationLoading}
                >
                  Create Conversation
                </Button>
              </>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
export default ConversationModal;
