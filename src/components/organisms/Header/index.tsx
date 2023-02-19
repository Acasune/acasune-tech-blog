import { Heading, Box } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => {
  return (
    <Box as="header">
      <Heading cursor="pointer" color="#bc3f3c" ml={30}>
        <Link href="/">Acasune Tech Blog</Link>
      </Heading>
    </Box>
  )
}

export default Header
