import { Avatar, Button, Flex, Stack, Text } from "@chakra-ui/react";
import { SearchedUsers } from "../../../../util/types";

interface UserSearchListProps {
  users: Array<SearchedUsers>;
  addParticipant: (user: SearchedUsers) => void;
}

const UserSearchList = ({ users, addParticipant }: UserSearchListProps) => {
  return (
    <>
      {users.length === 0 ? (
        <Flex mt={6} justify="center">
          <Text>No users found</Text>
        </Flex>
      ) : (
        <Stack mt={6}>
          {users.map((user) => (
            <Stack
              key={user.id}
              direction="row"
              align="center"
              spacing={4}
              py={2}
              px={4}
              borderRadius={4}
              _hover={{ bg: "whiteAlpha.200" }}
            >
              <Avatar src="" />
              <Flex justify="space-between" align="center" width="100%">
                <Text color="whiteAlpha.700">{user.username}</Text>
                <Button
                  bg="brand.100"
                  _hover={{ bg: "brand.100" }}
                  onClick={() => {
                    addParticipant(user);
                  }}
                >
                  Select
                </Button>
              </Flex>
            </Stack>
          ))}
        </Stack>
      )}
    </>
  );
};
export default UserSearchList;
