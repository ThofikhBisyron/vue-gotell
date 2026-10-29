const apiUrl = import.meta.env.VITE_API_URL

let refreshPromise: Promise<boolean> | null = null

const refreshAccessToken = async (): Promise<boolean> => {
  if (!refreshPromise) {
    refreshPromise = (async () => {
      try {
        const response = await fetch(`${apiUrl}/auth/refresh`, {
          method: 'POST',
          credentials: 'include',
        })

        return response.ok
      } catch {
        return false
      } finally {
        refreshPromise = null
      }
    })()
  }

  return refreshPromise
}

export const apiFetch = async (
  path: string,
  options: RequestInit = {},
): Promise<Response> => {
  const request = () =>
    fetch(`${apiUrl}${path}`, {
      ...options,
      credentials: 'include',
    })

  const response = await request()

  if (response.status !== 401) {
    return response
  }

  const refreshed = await refreshAccessToken()

  if (!refreshed) {
    return response
  }

  return request()
}