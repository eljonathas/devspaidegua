import Image from 'next/image'
import { Box } from '@chakra-ui/react'

type SponsorBoxProps = {
  imageUrl: string
  imageAlt: string
  imageWidth: number
  imageHeight: number
}

export const SponsorBox = ({
  imageUrl,
  imageWidth,
  imageHeight,
  imageAlt
}: SponsorBoxProps) => {
  return (
    <Box
      p="1"
      borderRadius="md"
      bgGradient="linear(to-br, purple.600, blue.600)"
    >
      <Box
        borderRadius="md"
        bg="gray.800"
        p="6"
        width="100%"
        display="flex"
        justifyContent="center"
      >
        <Image
          src={imageUrl}
          width={imageWidth}
          height={imageHeight}
          objectFit="contain"
          alt={imageAlt}
        />
      </Box>
    </Box>
  )
}
