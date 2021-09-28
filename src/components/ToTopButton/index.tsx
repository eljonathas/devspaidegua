import { Button, Icon } from '@chakra-ui/react'
import { BiArrowToTop } from 'react-icons/bi'
import { animateScroll as scroll } from 'react-scroll'

import { useScrollTop } from '@hooks/useScrollTop'

export const ToTopButton = () => {
  const scrollTop = useScrollTop()

  function handleToTop() {
    scroll.scrollToTop()
  }

  return (
    <Button
      position="fixed"
      bottom="2rem"
      right="2rem"
      py="6"
      zIndex={100}
      display={scrollTop > 768 ? 'flex' : 'none'}
      onClick={handleToTop}
      bgGradient="linear(to-br, purple.600, blue.600)"
      shadow="md"
      _hover={{
        bgGradient: 'linear(to-br, purple.600, blue.600)'
      }}
      _active={{
        bgGradient: 'linear(to-br, purple.600, blue.600)'
      }}
    >
      <Icon as={BiArrowToTop} fontSize="2xl" />
    </Button>
  )
}
