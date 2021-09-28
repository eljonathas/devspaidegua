import Image from 'next/image'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'

type TeamBoxProps = {
  teamPhotoUrl: string
  teamName: string
  teamRole: string
  teamDescription: string
}

export const TeamBox = ({
  teamPhotoUrl,
  teamRole,
  teamName,
  teamDescription
}: TeamBoxProps) => {
  return (
    <Box bg="gray.700" borderRadius="md" p="8">
      <Flex direction="column" gridGap="2" alignItems="center">
        <Box
          rounded="full"
          position="relative"
          w="24"
          h="24"
          minW="24"
          minH="24"
          maxW="24"
          maxH="24"
        >
          <Image
            className="team-avatar-image"
            src={teamPhotoUrl}
            alt={`${teamName} profile image`}
            layout="fill"
            objectFit="cover"
          />
          {/* enable border radius to image */}
          <style jsx global>{`
            .team-avatar-image {
              border-radius: 9999px;
            }
          `}</style>
        </Box>

        <Stack textAlign="center" spacing={0}>
          <Text fontSize="xl" fontWeight="bold">
            {teamName}
          </Text>
          <Text fontSize="sm" fontWeight="medium" color="gray.400">
            {teamRole}
          </Text>
        </Stack>

        <Text
          fontSize="md"
          fontWeight="medium"
          color="gray.300"
          textAlign="center"
        >
          {teamDescription}
        </Text>
      </Flex>
    </Box>
  )
}
