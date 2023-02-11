import { Box, HStack, Icon, Spacer, Tag, VStack, Text } from '@chakra-ui/react'
import { AiFillTags } from 'react-icons/ai'

interface EntryHeaderProps {
  title: string
  tags: string[]
  date: string
}

const EntryHeader = ({ title, tags, date }: EntryHeaderProps) => {
  return (
    <Box>
      <VStack>
        <h1>{title}</h1>
        <HStack width="100%">
          <Icon as={AiFillTags} />
          {tags.map((t, i) => (
            <Tag key={i}>{t}</Tag>
          ))}
          <Spacer />
        </HStack>
        <HStack width="100%">
          <Text>{date}</Text>
          <Spacer />
        </HStack>
      </VStack>
    </Box>
  )
}

export default EntryHeader
