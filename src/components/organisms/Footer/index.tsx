import { Avatar, HStack, VStack, Box, Text, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import { profile, policy } from '@/data/siteMetaData'

const Footer = () => {
  return (
    <Box as="footer">
      <VStack>
        <HStack>
          <Box boxSize={80}>
            <div
              style={{ position: 'relative', height: '75px', width: '69px' }}
            >
              <Image src="/assets/acasune.png" fill alt="logo" />
            </div>
          </Box>
          <VStack>
            <Box>
              <Box>Name: {profile.name}</Box>
              <Box>{profile.description}</Box>
            </Box>
            <Box width="100%">
              {' '}
              <HStack>
                <NextLink href={profile.twitter} passHref aria-label="twitter">
                  <Icon as={FaTwitterSquare} boxSize={30} color="#f8f8f2" />
                </NextLink>
                <NextLink href={profile.github} passHref aria-label="Github">
                  <Icon as={FaGithubSquare} boxSize={30} color="#f8f8f2" />
                </NextLink>
              </HStack>
            </Box>
          </VStack>
        </HStack>
        <Text>{policy}</Text>
      </VStack>
    </Box>
  )
}

export default Footer
