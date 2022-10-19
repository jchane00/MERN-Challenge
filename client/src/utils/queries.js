import { gql } from '@apollo/client';

export const GET_BOOKS = gql`
    {
        Books {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                
            }
        }
    }
`