// Packages:
import { Component, JSX } from 'solid-js'


// Typescript:
export interface SpotifyProps extends JSX.IframeHTMLAttributes<HTMLIFrameElement> {
  [ key: string ]: any
  link: string
  wide?: boolean
  width?: number | string
  height?: number | string
  frameBorder?: number | string
  allow?: string
}


// Functions:
export const getBackgroundColor = async (rawURL: string, fallbackColor: string = '#000000') => {
  // Constants:
  const pathname = new URL(rawURL).pathname
  const response = await fetch(`https://open.spotify.com/embed${ pathname }`)
  const HTML = await response.text()
  const classNameIndex = HTML.search('BackgroundColorContainer')
  if (classNameIndex === 0) return fallbackColor
  const HTMLAss = [ ...HTML.substring(classNameIndex) ].reverse().join('')
  const hashIndex = HTMLAss.lastIndexOf('#')
  const color = [ ...HTMLAss.substring(hashIndex - 6, hashIndex + 1) ].reverse().join('')

  return color
}

const Spotify: Component<SpotifyProps> = (props) => {
  // Constants:
  const url = new URL(props.link)
  const style = typeof props.style === 'string' ? (
    'border-radius: 8px;' + props.style
  ) : ({
    'border-radius': '8px',
    ...props.style
  } as JSX.CSSProperties)

  // Return:
  return (
    <iframe
      title='Spotify Web Player'
      src={`https://open.spotify.com/embed${ url.pathname }`}
      width={props.width ?? props.wide ? '100%' : 300}
      height={props.height ?? props.wide ? 80 : 380}
      frameBorder={props.frameBorder ?? 0}
      allow={props.allow ?? 'encrypted-media'}
      style={style}
      sandbox='allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation'
      {...props}
    />
  )
}


// Exports:
export default Spotify


// Testing:
// const App = () => {
//   getBackgroundColor('https://open.spotify.com/track/0LPMWPwCHrIorXSdpnPVyv?si=1bccc28b3df94bab').then(console.log)

//   return (
//     <>
//       <Spotify wide link='https://open.spotify.com/track/0LPMWPwCHrIorXSdpnPVyv?si=1bccc28b3df94bab' />
//     </>
//   )
// }

// const root = document.getElementById('root')
// render(() => <App />, root!)
