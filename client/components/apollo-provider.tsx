"use client"

import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, useQuery, gql } from '@apollo/client';
import { ApolloError } from 'apollo-server';
import { useEffect, useState } from 'react';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  })
});

const VERIFY_CONNECTION = gql`
    query connect{
      verifyConnection
    }
`
const CheckConnection = ({children}:{children:React.ReactNode}) => {
    const [isConnected,setIsConnected] = useState<{loading:any,error:any, init: boolean}>({loading:undefined,error:undefined,init:true})
    const {loading,error} = useQuery(VERIFY_CONNECTION)
    useEffect(() => {
        if (isConnected.init) {
            console.log("fetched connection")
            setIsConnected({loading,error,init:false})
        }
    },[isConnected,loading,error])
    if (loading) return <div>loading</div>
    if (error) return <div className='flex w-full h-screen items-center text-5xl font-bold'>Server is Offline<br/>Come back later ;)</div>
    return <>{children}</>
}

const ApolloClientProvider = ({children}:{children:React.ReactNode}) => {
    return (
        <ApolloProvider client={client}>
            <CheckConnection>
                {children}
            </CheckConnection>
        </ApolloProvider>
    )
}

export default ApolloClientProvider;
