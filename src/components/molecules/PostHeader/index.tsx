import { Card, CardBody, Icon, Tag } from '@chakra-ui/react'
import Link from 'next/link'
import { AiFillTags } from 'react-icons/ai'

interface PostHeaderProps {
  date: string
  link: string
  tag: string
  title: string
}

export const PostHeader = ({ date, link, tag, title }: PostHeaderProps) => {
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
