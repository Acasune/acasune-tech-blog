import { Card, CardBody, Icon, Tag } from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillTags } from 'react-icons/ai'

interface EntryCardProps {
  date: string
  link: string
  tag: string
  title: string
}

export const EntryCard = ({ date, link, tag, title }: EntryCardProps) => {
  return (
    <Card>
      <CardBody>
        <Tag>{date}</Tag>
        <Link href={link}>{title}</Link>
        <Icon as={AiFillTags} />
        <Tag>{tag}</Tag>
      </CardBody>
    </Card>
  )
}
