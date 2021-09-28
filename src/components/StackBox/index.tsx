import { Flex, Icon, Stack, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

type StackBoxProps = {
  iconElement: IconType
  stackTitle: string
  stackDescription: string
}

export const StackBox = ({
  iconElement,
  stackTitle,
  stackDescription
}: StackBoxProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      gridGap="6"
      bgColor="gray.800"
      py="10"
      px="8"
      borderRadius="md"
      height="100%"
    >
      <Icon
        as={iconElement}
        fontSize="7xl"
        bgGradient="linear(to-br, purple.600, blue.600)"
        borderRadius="md"
        p="2"
      ></Icon>
      <Stack alignItems="center">
        <Text fontSize="xl" fontWeight="bold" textAlign="center">
          {stackTitle}
        </Text>
        <Text maxW="60" textAlign="center" color="gray.300">
          {stackDescription}
        </Text>
      </Stack>
    </Flex>
  )
}
