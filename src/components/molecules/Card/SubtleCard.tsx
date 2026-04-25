import React from 'react'
import Card from './Card'

type Props = React.ComponentProps<typeof Card>

export default function SubtleCard(props: Props) {
  return <Card {...props} className={`card--subtle ${props.className ?? ''}`} />
}
