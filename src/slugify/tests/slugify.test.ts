import slugify from '..'

describe('slugify', () => {
  test('slugify() should throw an error', () => {
    expect(() => slugify()).toThrowError()
  })

  test('slugify(42) should throw an error', () => {
    expect(() => slugify(42)).toThrowError()
  })

  test('slugify("") should return an empty string', () => {
    expect(slugify('')).toEqual('')
  })

  test('slugify("hello") should return "hello"', () => {
    expect(slugify('hello')).toEqual('hello')
  })

  test('slugify("hello.world") should return a "hello-world"', () => {
    expect(slugify('hello.world')).toEqual('hello-world')
  })

  test('slugify("Hello") should return "hello"', () => {
    expect(slugify('Hello')).toEqual('hello')
  })

  test('slugify("Hello.wOrld.anD.spacE") should return "hello-world-and-space"', () => {
    expect(slugify('Hello.wOrld.anD.spacE')).toEqual('hello-world-and-space')
  })

  test('slugify("Hello World") should return "hello-world"', () => {
    expect(slugify('Hello World')).toEqual('hello-world')
  })

  test('slugify("Hello, World") should return "hello-world"', () => {
    expect(slugify('Hello, World')).toEqual('hello-world')
  })

  test('slugify("Hello,World") should return "hello-world"', () => {
    expect(slugify('Hello,World')).toEqual('hello-world')
  })

  test('slugify("Hello, World ?") should return "hello-world"', () => {
    expect(slugify('Hello, World ?')).toEqual('hello-world')
  })

  test('slugify("Hello: World") should return "hello-world"', () => {
    expect(slugify('Hello: World')).toEqual('hello-world')
  })

  test('slugify("Hello: "World"") should return "hello-world"', () => {
    expect(slugify("Hello: 'World'")).toEqual('hello-world')
  })

  test('slugify("Hello? World ,space") should return "hello-world-space"', () => {
    expect(slugify('Hello? World ,space')).toEqual('hello-world-space')
  })

  test('slugify("$Hello? World$ ,space") should return "hello-world-space"', () => {
    expect(slugify('$Hello? World$ ,space')).toEqual('hello-world-space')
  })

  test('slugify("Hello, World", true) should return "#hello-world"', () => {
    expect(slugify('Hello, World', true)).toEqual('#hello-world')
  })
})
