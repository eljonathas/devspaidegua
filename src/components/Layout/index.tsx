import { Flex, useColorMode } from '@chakra-ui/react'

export const Layout = (props: any) => {
  const { colorMode } = useColorMode()

  const bgColor = { light: 'gray.50', dark: 'gray.900' }

  return (
    <Flex
      w="100%"
      minH="100vh"
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      {...props}
    />
  )
}
