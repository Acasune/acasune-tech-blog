import { Avatar, HStack, VStack, Box, Text, Icon } from '@chakra-ui/react'
import { FaTwitterSquare, FaGithubSquare } from 'react-icons/fa'
import { profile, policy } from '@/data/siteMetaData'

const Footer = () => {
  return (
    <Box>
      <VStack>
        <HStack>
          <Avatar name={profile.name} src={profile.image} />
          <VStack>
            <HStack>
              <Text>{profile.name}</Text>
              <Text>{profile.description}</Text>
            </HStack>
            <HStack>
              <Icon as={FaTwitterSquare} />
              <Icon as={FaGithubSquare} />
            </HStack>
          </VStack>
        </HStack>
        <Text>{policy}</Text>
      </VStack>
    </Box>
  )
}

export default Footer
