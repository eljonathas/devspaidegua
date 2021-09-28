import Image from 'next/image'
import { Box, Flex, Text, Stack } from '@chakra-ui/react'

type QuoteBoxProps = {
  quoteContent: string
  quoteAuthor: string
  quoteRole: string
  quoteAuthorImage: string
}

export const QuoteBox = ({
  quoteContent,
  quoteAuthor,
  quoteRole,
  quoteAuthorImage
}: QuoteBoxProps) => {
  return (
    <Box bg="gray.800" p="8" borderRadius="md">
      <Text mb="4">{quoteContent}</Text>

      <Flex alignItems="center" gridGap="4">
        <Box
          rounded="full"
          position="relative"
          w="14"
          h="14"
          minW="14"
          minH="14"
          maxW="14"
          maxH="14"
        >
          <Image
            className="avatar-image"
            src={quoteAuthorImage}
            alt={`${quoteAuthor} profile image`}
            layout="fill"
            objectFit="cover"
          />
          {/* enable border radius to image */}
          <style jsx global>{`
            .avatar-image {
              border-radius: 9999px;
            }
          `}</style>
        </Box>

        <Stack spacing={1}>
          <Text fontWeight="semibold">{quoteAuthor}</Text>
          <Text color="gray.400">{quoteRole}</Text>
        </Stack>
      </Flex>
    </Box>
  )
}
