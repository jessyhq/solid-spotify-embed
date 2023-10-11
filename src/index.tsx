// Packages:
import { Component, JSX } from 'solid-js'


// Typescript:
interface SpotifyProps extends JSX.IframeHTMLAttributes<HTMLIFrameElement> {
  [ key: string ]: any
  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}


// Functions:
const Spotify: Component<SpotifyProps> = (props) => {
  // Constants:
  const url = new URL(props.link)
  const style = typeof props.style === 'string' ? (
    'border-radius: 8;' + props.style
  ) : ({
    'border-radius': 8,
    ...props.style
  } as JSX.CSSProperties)

  // Return:
  return (
    <iframe
      title='Spotify Web Player'
      src={`https://open.spotify.com/embed${url.pathname}`}
      width={props.width ?? props.wide ? '100%' : 300}
      height={props.height ?? props.wide ? 80 : 380}
      frameBorder={props.frameBorder ?? 0}
      allow={props.allow ?? 'encrypted-media'}
      style={style}
      {...props}
    />
  )
}


// Exports:
export default Spotify
