import { VStack } from '@chakra-ui/react'
import { EntryCard } from '@/src/components/molecules/EntryCard'

export interface EntryMeta {
  entry_id: number
  date: string
  link: string
  tags: string[]
  title: string
}

interface EntryListProps {
  entries: EntryMeta[]
}

const EntryList = ({ entries }: EntryListProps) => {
  return (
    <VStack>
      {entries.map((ent) => (
        <EntryCard
          key={ent.entry_id}
          date={ent.date}
          link={ent.link}
          tags={ent.tags}
          title={ent.title}
        ></EntryCard>
      ))}
    </VStack>
  )
}

export default EntryList
