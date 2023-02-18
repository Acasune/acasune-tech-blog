import { Box, Center, Icon, Tag, Wrap } from '@chakra-ui/react'
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
        <Center>
          <Icon as={MdOutlineDateRange} />
        </Center>
        <Tag bg="#44475a" px={6} py={2} color="#f8f8f2" rounded={10}>
          {date}
        </Tag>
        <Center>
          <Icon as={AiFillTags} ml={8} />
        </Center>
        {tags.map((t, i) => (
          <Tag key={i} bg="#44475a" px={8} py={2} color="#f8f8f2" rounded={10}>
            {t}
          </Tag>
        ))}
      </Wrap>
    </Box>
  )
}
