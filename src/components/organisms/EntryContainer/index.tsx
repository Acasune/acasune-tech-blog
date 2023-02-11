import EntryBody from '@/src/components/molecules/EntryBody'
import EntryHeader from '@/src/components/molecules/EntryHeader'
import { Entry } from '@/src/types'

interface EntryContainerProps {
  entry: Entry
}

const EntryContainer = ({ entry }: EntryContainerProps) => {
  return (
    <div>
      <EntryHeader title={entry.title} tags={entry.tags} date={entry.date} />
      <EntryBody content={entry.content} slug={entry.slug} />
    </div>
  )
}

export default EntryContainer
