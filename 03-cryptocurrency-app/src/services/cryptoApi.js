import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = { //headers we need to pass with the request
  'x-rapidapi-key': '1b874fa855msh23d0bd23df50e96p1a4a99jsn163cb7f12b99',
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com'
}

const baseURL = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url)=>({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder)=>({
        getCryptos: builder.query({
            query: ()=> createRequest('/coins') //api to fetch the data
        })
    })
})

export const {
    useGetCryptosQuery 
  } = cryptoApi;