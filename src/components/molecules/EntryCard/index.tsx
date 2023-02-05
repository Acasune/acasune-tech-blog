import { Card, CardBody, HStack, Icon, Tag, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillTags } from 'react-icons/ai'

export interface EntryCardProps {
  date: string
  tags: string[]
  title: string
}

export const EntryCard = ({ date, tags, title }: EntryCardProps) => {
  return (
    <Card>
      <CardBody>
        <VStack>
          <HStack>
            <Tag>{date}</Tag>
            {/* <Link href={link}>{title}</Link> */}
          </HStack>
          <HStack>
            <Icon as={AiFillTags} />
            {tags.map((t, i) => (
              <Tag key={i}>{t}</Tag>
            ))}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}
