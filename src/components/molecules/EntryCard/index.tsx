import {
  Card,
  CardBody,
  HStack,
  Icon,
  Spacer,
  Tag,
  VStack,
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillTags } from 'react-icons/ai'

export interface EntryCardProps {
  date: string
  tags: string[]
  title: string
  slug: string
}

export const EntryCard = ({ date, tags, title, slug }: EntryCardProps) => {
  return (
    <HStack width="100%">
      <Card>
        <CardBody>
          <VStack>
            <HStack>
              <Tag>{date}</Tag>
              <Link as={`/${slug}`} href="/[slug]">
                {title}
              </Link>
            </HStack>
            <HStack width="100%">
              <Icon as={AiFillTags} />
              {tags.map((t, i) => (
                <Tag key={i}>{t}</Tag>
              ))}
              <Spacer />
            </HStack>
          </VStack>
        </CardBody>
      </Card>
      <Spacer />
    </HStack>
  )
}
