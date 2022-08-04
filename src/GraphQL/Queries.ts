import { gql } from '@apollo/client';

export const GETPEOPLE = gql`
    query ($search: String, $page: Int) {
        people(search: $search, page: $page) {
            next
            previous
            people {
                name
                height
                mass
                gender
                homeworld
                url
            }
            
        },
    }
`

export const GETPERSON = gql`
    query ($id: String!) {
        person(id: $id) {
            name
            gender
            height
            mass
            homeworld
        }
    }
`