import { apiUrls } from './constants/constants'
import { doGet } from './fetchApiActions';


export async function getBooks() {
  return await doGet(`${apiUrls.feedsList}`)
}


