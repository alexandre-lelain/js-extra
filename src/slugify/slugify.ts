/**
 * Takes a string, often a title, or a paragraph, and slugify it to make it
 * a valid url hash.
 * Example: slugify("API of React.Component") == "api-of-react-component"
 * You can specify the 2nd parameter to true if you want to include the hashtag #
 * in the result:  slugify("API of React.Component", true) == "#api-of-react-component"
 */
const slugify = (text: string, withHash = false): string => {
  if (!text) {
    return ''
  }
  const loweredText = text.toLowerCase()
  const filteredText = replaceWeirdChars(loweredText)
  const slug = trimText(filteredText)
  return withHash ? `#${slug}` : slug
}

const replaceWeirdChars = (text: string): string => text.replace(/[\W]/g, '-').replace(/[-]{2,}/g, '-')

const trimText = (almostASlug: string): string => almostASlug.replace(/^[-]|[-]$/g, '').trim()

export default slugify
