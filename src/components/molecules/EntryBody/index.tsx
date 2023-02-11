import { useState, Fragment, useEffect } from 'react'
import markdownToReact from '@/src/lib/markdownToReact'

interface PostBodyProps {
  content: string
  slug: string
}

const EntryBody = ({ content, slug }: PostBodyProps) => {
  const [component, setComponent] = useState(<Fragment />)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-extra-semi
    ;(async () => {
      const contentComponent = await markdownToReact(content, slug)
      setComponent(contentComponent)
    })()
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {}
  }, [content])

  return <div>{component}</div>
}

export default EntryBody
