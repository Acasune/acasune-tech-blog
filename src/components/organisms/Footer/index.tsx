import { Avatar, HStack, VStack, Box, Text, Icon } from '@chakra-ui/react'
import NextLink from 'next/link'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import { profile, policy } from '@/data/siteMetaData'

const Footer = () => {
  return (
    <Box>
      <VStack>
        <HStack>
          <Box boxSize={80}>
            <Avatar name="acasune.png" src="/assets/acasune.png" />
          </Box>
          <VStack>
            <Box>
              <Box>Name: {profile.name}</Box>
              <Box>{profile.description}</Box>
            </Box>
            <Box width="100%">
              {' '}
              <HStack>
                <NextLink href={profile.twitter} passHref>
                  <Icon as={FaTwitterSquare} boxSize={30} color="#f8f8f2" />
                </NextLink>
                <NextLink href={profile.github} passHref>
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
