import { Flex, Stack, Text } from "@chakra-ui/react";
import { SearchedUsers } from "../../../../util/types";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ParticipantsProps {
  participants: Array<SearchedUsers>;
  removeParticipant: (userId: string) => void;
}

const Participants = ({
  participants,
  removeParticipant,
}: ParticipantsProps) => {
  console.log("HERE ARE PARTICIPANTs", participants);
  return (
    <Flex mt={8} gap="10px" flex="wrap">
      {participants.map((participant) => (
        <Stack
          key={participant.id}
          direction="row"
          align="center"
          bg="whiteAlpha.200"
          borderRadius={4}
          p={2}
        >
          <Text>{participant.username}</Text>
          <IoIosCloseCircleOutline
            size={20}
            cursor="pointer"
            onClick={() => removeParticipant(participant.id)}
          />
        </Stack>
      ))}
    </Flex>
  );
};
export default Participants;
