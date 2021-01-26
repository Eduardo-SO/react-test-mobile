import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

import formatDate from './utils/formatDate'

import {
  Container,
  // Content,
  // FieldContainer,
  // Filters,
  // FilterSelect,
  // FilterLabel,
  // FilterInput,
  // FilterDateInput,
  Login,
  LoginTitle,
  LoginDescription,
  LoginLink,
  AccessDenied
} from './styles/index'

// import FeaturedPlaylists from './components/FeaturedPlaylists'

// interface Playlist {
//   name: string
//   description: string
//   images: {
//     url: string
//   }[]
//   tracks: string
// }

// interface Featured {
//   message: string
//   playlists: {
//     items: Playlist[]
//   }
// }

// interface Filter {
//   id: string
//   name: string
//   values?: {
//     value: string
//     name: string
//   }[]
//   validation?: {
//     primitiveType: string
//     min?: number
//     max?: number
//     entityType?: string
//     pattern?: string
//   }
// }

const Home: React.FC = () => {
  // const router = useRouter()
  const [spotifyResponseDenied, setSpotifyResponseDenied] = useState(false)
  // const [spotifyPlaylists, setSpotifyPlaylists] = useState({} as Featured)
  // const [token, setToken] = useState('')
  // const [filters, setFilters] = useState<Filter[]>()

  // const [country, setCountry] = useState('BR')
  // const [locale, setLocale] = useState('pt_BR')
  // const [limit, setLimit] = useState(4)
  // const [date, setDate] = useState(formatDate(new Date().toString()))
  // const [offset, setOffset] = useState(0)
  // const [page, setPage] = useState(1)

  // const [refresh, setRefresh] = useState(1)

  // useEffect(() => {
  //   const path = ''
  //   const [firstParam] = path.split('&')
  //   const [param, value] = firstParam.split('=')

  //   if (value === 'access_denied') {
  //     setSpotifyResponseDenied(true)
  //     return
  //   }

  //   if (param === '/#access_token') {
  //     setSpotifyResponseDenied(false)
  //     setToken(value)
  //     getFilters()
  //     getPlaylists(value)
  //   }
  // }, [country, locale, date, limit, offset, token, refresh])

  // const getPlaylists = useCallback(
  //   async spotifyToken => {
  //     const response = await axios.get(
  //       'https://api.spotify.com/v1/browse/featured-playlists',
  //       {
  //         params: {
  //           country,
  //           locale,
  //           limit,
  //           date,
  //           offset
  //         },
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //           Authorization: 'Bearer ' + spotifyToken
  //         },
  //         data: {}
  //       }
  //     )

  //     setSpotifyPlaylists(response.data)
  //   },
  //   [country, locale, date, limit, offset]
  // )

  // const getFilters = useCallback(async () => {
  //   const response = await axios.get(
  //     'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
  //   )

  //   setFilters(response.data.filters)
  // }, [])

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setRefresh(refresh => refresh + 1)
  //   }, 30000)
  //   return () => clearInterval(interval)
  // }, [refresh])

  // const handleUpdateLimit = useCallback((limit: string) => {
  //   const parsedLimit = parseInt(limit)

  //   if (parsedLimit > 0 && parsedLimit <= 50) {
  //     setLimit(parsedLimit)

  //     return
  //   }

  //   alert('Digite um limite entre 1 e 50 apenas')
  // }, [])

  // const handleUpdatePage = useCallback(
  //   (page: string) => {
  //     const parsedPage = parseInt(page)

  //     if (parsedPage > 0 && parsedPage <= 500000) {
  //       setOffset((parsedPage - 1) * limit)
  //       setPage(parsedPage)
  //     }
  //   },
  //   [limit]
  // )

  return (
    <Container>
      {/* {spotifyPlaylists.playlists ? (
        <Content>
          <Filters>
            {filters.map(filter => (
              <FieldContainer key={filter.id}>
                {filter.id === 'locale' && (
                  <>
                    <FilterLabel>{filter.name}</FilterLabel>
                    <FilterSelect
                      value={locale}
                      onValueChange={e => setLocale(e.target.value)}
                      items={[{ label: '', value: '' }]}
                    />
                  </>
                )}

                {filter.id === 'country' && (
                  <>
                    <FilterLabel>{filter.name}</FilterLabel>
                    <FilterSelect
                      value={locale}
                      onValueChange={e => setCountry(e.target.value)}
                      items={[{ label: '', value: '' }]}
                    />
                  </>
                )}

                {filter.id === 'timestamp' && (
                  <>
                    <FilterLabel>{filter.name}</FilterLabel>
                    <FilterDateInput
                      id={filter.id}
                      name={filter.id}
                      onChange={e => setDate(e.target.value)}
                      value={date}
                    />
                  </>
                )}

                {filter.id === 'limit' && (
                  <>
                    <FilterLabel>{filter.name}</FilterLabel>
                    <FilterInput
                      type="number"
                      id={filter.id}
                      name={filter.id}
                      min={filter.validation.min}
                      max={filter.validation.max}
                      onChange={e => handleUpdateLimit(e.target.value)}
                      value={limit}
                    />
                  </>
                )}

                {filter.id === 'offset' && (
                  <>
                    <FilterLabel>{filter.name}</FilterLabel>
                    <FilterInput
                      type="number"
                      id={filter.id}
                      name={filter.id}
                      onChange={e => handleUpdatePage(e.target.value)}
                      value={page}
                    />
                  </>
                )}
              </FieldContainer>
            ))}
          </Filters>

          <FeaturedPlaylists
            playlists={spotifyPlaylists.playlists}
            message={spotifyPlaylists.message}
          />
        </Content>
      ) : (
      */}
      <Login>
        <LoginTitle>Spotify Playlists</LoginTitle>

        <LoginDescription>
          Autorize a sua conta do Spotify para visualizar as playlists em
          destaque.
        </LoginDescription>
        <LoginLink
        // href="https://accounts.spotify.com/authorize?client_id=50eb067b28e0491380591d6b7884165d&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&response_type=token"
        >
          Autorizar
        </LoginLink>

        {spotifyResponseDenied && (
          <AccessDenied>
            É necessáro autorizar sua conta para visualizar as playlists!
          </AccessDenied>
        )}
      </Login>
      {/* )} */}
    </Container>
  )
}

export default Home
