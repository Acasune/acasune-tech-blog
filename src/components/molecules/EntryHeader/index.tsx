import {
  Box,
  HStack,
  Icon,
  Spacer,
  Tag,
  VStack,
  Text,
  Center,
} from '@chakra-ui/react'
import { AiFillTags } from 'react-icons/ai'
import { MdOutlineDateRange } from 'react-icons/md'
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
            <Tag
              key={i}
              bg="#44475a"
              px={8}
              py={2}
              color="#f8f8f2"
              rounded={10}
            >
              {t}
            </Tag>
          ))}
          <Spacer />
        </HStack>
        <HStack width="100%">
          <Center>
            <Icon as={MdOutlineDateRange} />
          </Center>
          <Text>{date}</Text>
          <Spacer />
        </HStack>
      </VStack>
    </Box>
  )
}

export default EntryHeader
