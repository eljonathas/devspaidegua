import Image from 'next/image'
import { Box, Stack, Text } from '@chakra-ui/react'

type ThemeBoxProps = {
  themeTitle: string
  themeDescription: string
  themeBgImage: string
}

export const ThemeBox = ({
  themeTitle,
  themeDescription,
  themeBgImage
}: ThemeBoxProps) => {
  return (
    <Box
      bg="gray.800"
      borderRadius="md"
      position="relative"
      role="group"
      overflow="hidden"
    >
      <Box
        position="absolute"
        w="100%"
        h="100%"
        zIndex={1}
        opacity="0"
        transition="all 0.1s"
        _groupHover={{
          opacity: 0.2
        }}
      >
        <Image
          src={themeBgImage}
          className="theme-bg-image"
          layout="fill"
          objectFit="cover"
          alt={`${themeTitle} background image`}
        />
        <style jsx global>{`
          .theme-bg-image {
            border-radius: 0.375rem;
          }
        `}</style>
      </Box>
      <Box p="8" zIndex={2} position="relative">
        <Stack spacing={2}>
          <Text fontSize="2xl" fontWeight="bold">
            {themeTitle}
          </Text>
          <Text fontWeight="medium" color="gray.400">
            {themeDescription}
          </Text>
        </Stack>
      </Box>
    </Box>
  )
}
