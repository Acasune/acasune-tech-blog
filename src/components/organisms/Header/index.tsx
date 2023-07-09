import { Heading, Box } from '@chakra-ui/react'
import Link from 'next/link'

const Header = () => {
  return (
    <Box as="header">
      <div>
        <Link href="/" style={{ textDecoration: 'none' }}>
          {' '}
          <Heading color="#bc3f3c" as="h1" fontSize="2xl">
            Acasune Tech Blog
          </Heading>
        </Link>
      </div>
    </Box>
  )
}

export default Header
