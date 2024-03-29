import { API_URL, STRAPI_URL } from "../config"

export async function getGames({page = +page}){
  
    const res = await fetch (`${API_URL}/video-games?populate=[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=1`)
    /*http://localhost:1337/api/video-games?populate=[platforms][fields][0]=name&populate[cover][fields][0]=url&pagination[page]=${page}&pagination[pageSize]=1*/
  if(!res.ok){
    throw new Error ('Something went wrong')
  }
  const { data, meta } = await res.json()
  const { pagination } = meta
  return {data, pagination}
  }

  export function getCoverImage ({ attributes }){
    const { url } = attributes.cover.data.attributes
    return `${STRAPI_URL}${url}`
  }  