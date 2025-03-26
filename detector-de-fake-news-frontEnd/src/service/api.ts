import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Response {
  respostaPrevisao: boolean
}

interface Request {
  news: string
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://nico-bot-detector-de-fake-news-news.vercel.app/api'
  }),
  endpoints: (builder) => ({
    postTitle: builder.mutation<Response, Request>({
      query: (body) => ({
        url: '/checkByTitle/',
        method: 'POST',
        body
      })
    })
  })
})

export const { usePostTitleMutation } = api

export default api
