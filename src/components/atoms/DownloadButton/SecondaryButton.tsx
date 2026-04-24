import React from 'react'
import DownloadButton from './DownloadButton'

type Props = React.ComponentProps<typeof DownloadButton>

export default function SecondaryButton(props: Props) {
  return <DownloadButton {...props} variant="secondary" />
}
