import createClient from 'openapi-fetch'
import type { paths } from './v1'

const BASE_URL = import.meta.env.DEV
  ? 'http://127.0.0.1:8000'
  : 'https://amalitechvideoplatform.pythonanywhere.com'

export const client = localStorage.getItem('token_video_platform_7348734')
  ? createClient<paths>({
      baseUrl: BASE_URL,
      headers: { Authorization: `Bearer ${localStorage.getItem('token_video_platform_7348734')}` }
    })
  : createClient<paths>({ baseUrl: BASE_URL })
