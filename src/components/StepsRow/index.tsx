import { Flex, Box, Text } from '@chakra-ui/react'

type StepsRowProps = {
  stepTitle: string
  stepDescription: string
  stepDate: string
}

export const StepsRow = ({
  stepTitle,
  stepDate,
  stepDescription
}: StepsRowProps) => {
  return (
    <Box
      p="1"
      bgGradient="linear(to-br, purple.600, blue.600)"
      borderRadius="md"
    >
      <Flex
        direction={{
          base: 'column',
          md: 'row'
        }}
        gridGap="4"
        bg="gray.800"
        p="6"
        borderRadius="md"
      >
        <Flex direction="column" gridGap="2" flex="1">
          <Box
            width="fit-content"
            bgGradient="linear(to-br, purple.600, blue.600)"
            borderRadius="md"
            py="2"
            px="4"
          >
            <Text fontWeight="semibold" whiteSpace="nowrap">
              {stepTitle}
            </Text>
          </Box>

          <Text fontSize="md" color="gray.400" fontWeight="500">
            {stepDate}
          </Text>
        </Flex>

        <Text fontWeight="medium" color="gray.400">
          {stepDescription}
        </Text>
      </Flex>
    </Box>
  )
}
