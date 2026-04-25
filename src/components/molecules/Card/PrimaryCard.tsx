import React from 'react'
import Card from './Card'

type Props = React.ComponentProps<typeof Card>

export default function PrimaryCard(props: Props) {
  return <Card {...props} className={`card--highlight ${props.className ?? ''}`} />
}
