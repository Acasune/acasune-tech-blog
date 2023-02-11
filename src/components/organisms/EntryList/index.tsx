import { Flex, Spacer, VStack } from '@chakra-ui/react'
import { EntryCard } from '@/src/components/molecules/EntryCard'
import { Entry } from '@/src/types'

interface EntryListProps {
  entries: Entry[]
}

const EntryList = ({ entries }: EntryListProps) => {
  return (
    <VStack>
      {entries.map((ent) => (
        <EntryCard
          key={ent.slug}
          date={ent.date}
          tags={ent.tags}
          title={ent.title}
          slug={ent.slug}
        />
      ))}
    </VStack>
  )
}

export default EntryList
