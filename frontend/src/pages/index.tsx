import { Box } from "@chakra-ui/react";
import { Inter } from "@next/font/google";
import { NextPageContext } from "next";
import { getSession, useSession } from "next-auth/react";
import { Auth } from "../components/Auth/Auth";
import { Chat } from "../components/Chat/Chat";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();

  const reloadSession = () => {
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };

  console.log("HERE IS SESSION", session);
  return (
    <Box>
      {session?.user?.username ? (
        <Chat />
      ) : (
        <Auth session={session} reloadSession={reloadSession} />
      )}
    </Box>
  );
}

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
