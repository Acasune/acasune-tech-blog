import { Box, Center, Icon, Tag, Wrap, WrapItem } from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillTags } from 'react-icons/ai'
import { MdOutlineDateRange } from 'react-icons/md'
export interface EntryCardProps {
  date: string
  tags: string[]
  title: string
  slug: string
}

export const EntryCard = ({ date, tags, title, slug }: EntryCardProps) => {
  return (
    <Box width="100%" mb={4}>
      <Link as={`/${slug}`} href="/[slug]">
        {title}
      </Link>
      <Wrap mt={10}>
        {' '}
        <WrapItem>
          <Center>
            <Icon as={MdOutlineDateRange} />
          </Center>
        </WrapItem>
        <WrapItem>
          <Tag bg="#44475a" px={6} py={2} color="#f8f8f2" rounded={10}>
            {date}
          </Tag>
        </WrapItem>
        <WrapItem>
          <Center>
            <Icon as={AiFillTags} ml={8} />
          </Center>
        </WrapItem>
        {tags.map((t, i) => (
          <WrapItem key={i}>
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
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  )
}
