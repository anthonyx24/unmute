import sanityClient from './sanity';
// let sanityQuery = (query, params) => createClient.fetch(query, params)

export async function getUsers() {
    const users = await sanityClient.fetch('*[_type == "user"]')
    return users
  }