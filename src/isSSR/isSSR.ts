/**
 * Returns true if JS code is compiled into HTML on a server.
 * Returns false else.
 */
const isSSR = (): boolean => {
  return typeof window === 'undefined'
}

export default isSSR
