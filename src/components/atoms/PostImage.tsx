import Image from 'next/image'
import React from 'react'

type PostImageFunc = (slug: string) => React.FC<JSX.IntrinsicElements['img']>

const PostImage: PostImageFunc =
  (slug: string) =>
  // eslint-disable-next-line react/display-name
  ({ src, alt }: JSX.IntrinsicElements['img']) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const image = require('../../../data/posts/' + slug + '/' + src).default
    return (
      <div style={{ position: 'relative', maxWidth: '100%', height: '400px' }}>
        {' '}
        <Image
          src={image}
          alt={(alt && '') as string}
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
    )
  }

export default PostImage
