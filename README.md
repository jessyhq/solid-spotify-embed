# solid-spotify-embed

[![npm](https://img.shields.io/badge/npm-solid--spotify--embed-brightgreen.svg?style=flat-square)](https://www.npmjs.com/package/solid-spotify-embed)
[![npm version](https://img.shields.io/npm/v/solid-spotify-embed.svg?style=flat-square)](https://www.npmjs.com/package/solid-spotify-embed)
[![npm downloads](https://img.shields.io/npm/dm/solid-spotify-embed.svg?style=flat-square)](https://www.npmjs.com/package/solid-spotify-embed)
[![sponsors](https://img.shields.io/github/sponsors/diragb)](https://github.com/sponsors/diragb)

Use this component to create a Spotify embed for a given Spotify link. In Spotify, click ••• > Copy Link, and paste it in the <Spotify link={...}> prop.

Any link should work (albums, songs, etc.). All other props on the Spotify embed widget can also be overridden (see [here](https://developer.spotify.com/documentation/embeds)).


## Inspiration
Inspired by the battle-tested and original [react-spotify-embed](https://www.npmjs.com/package/react-spotify-embed).

## Installation
```bash
npm i solid-spotify-embed

yarn add solid-spotify-embed
```

## Usage

```tsx
import type { Component } from 'solid-js'
import Spotify from 'solid-spotify-embed'

const App: Component = () => {
  return (
    <div>
      <Spotify link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
      <Spotify link="https://open.spotify.com/album/0fUy6IdLHDpGNwavIlhEsl?si=mTiITmlHQpaGkoivGTv8Jw" />
      <Spotify wide link="https://open.spotify.com/track/5ihDGnhQgMA0F0tk9fNLlA?si=4472348a63dd4f83" />
    </div>
  )
}
```

The `<Spotify>` component is completely customizable. Check out the following code:

```tsx
import type { Component } from 'solid-js'
import Spotify from 'solid-spotify-embed'

const CustomSpotify: Component = () => {
  return (
    <Spotify
      wide={false}
      width='420px'
      height='69px'
      frameBorder='10px'
      allow='encrypted-media'
      { ...props }
    >
  )
}
```

## License
MIT