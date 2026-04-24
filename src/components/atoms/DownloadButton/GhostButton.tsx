import React from 'react'
import DownloadButton from './DownloadButton'

type Props = React.ComponentProps<typeof DownloadButton>

export default function GhostButton(props: Props) {
  return <DownloadButton {...props} variant="ghost" />
}
