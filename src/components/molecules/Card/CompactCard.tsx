import React from 'react'
import Card from './Card'

type Props = React.ComponentProps<typeof Card>

export default function CompactCard(props: Props) {
  return <Card {...props} className={`card--compact ${props.className ?? ''}`} />
}
