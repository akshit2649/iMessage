import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { Center, Button, Stack, Text, Image, Input } from "@chakra-ui/react";
import { useState } from "react";

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

export const Auth = ({ session, reloadSession }: IAuthProps) => {
  const [username, setUsername] = useState("");

  const onSubmit = async () => {
    try {
      // CreateUsername mutation to send our username to the GraphQL API
    } catch (error) {
      console.log("onSumit error", error);
    }
  };

  return (
    <Center height="100vh">
      <Stack spacing={8} align="center">
        {session ? (
          <>
            <Text fontSize="3xl">Create a Username</Text>
            <Input
              placeholder="Enter a username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <Button width="100%" onClick={onSubmit}>
              Save
            </Button>
          </>
        ) : (
          <>
            <Text fontSize="3xl">MessengerQL</Text>
            <Button
              onClick={() => signIn("google")}
              leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
            >
              Continue with Google
            </Button>
          </>
        )}
      </Stack>
    </Center>
  );
};
