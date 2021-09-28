import {
  Box,
  Button,
  Collapse,
  Flex,
  Text,
  useDisclosure
} from '@chakra-ui/react'

type FaqCollapseProps = {
  faqNumber: number
  faqTitle: string
  faqDescription: string
}

export const FaqCollapse = ({
  faqNumber,
  faqTitle,
  faqDescription
}: FaqCollapseProps) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Flex direction="column" gridGap="2">
      <Button
        onClick={onToggle}
        fontSize="xl"
        userSelect="none"
        display="flex"
        alignItems="center"
        gridGap="4"
        justifyContent="flex-start"
        whiteSpace="normal"
        textAlign="start"
        bg="gray.700"
        height="fit-content"
        _hover={{
          bg: 'gray.700'
        }}
        _active={{
          bg: 'gray.700'
        }}
        py="8"
      >
        <Text color="gray.400">{faqNumber}</Text>
        {faqTitle}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="8" rounded="md" bg="gray.800">
          <Text fontSize="lg">{faqDescription}</Text>
        </Box>
      </Collapse>
    </Flex>
  )
}
