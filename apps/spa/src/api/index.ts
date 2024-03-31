import createClient from 'openapi-fetch'
import type { paths } from './v1'

export const client = localStorage.getItem('token_video_platform_7348734')
  ? createClient<paths>({
      baseUrl: 'http://127.0.0.1:8000',
      headers: { Authorization: `Bearer ${localStorage.getItem('token_video_platform_7348734')}` }
    })
  : createClient<paths>({ baseUrl: 'http://127.0.0.1:8000' })
