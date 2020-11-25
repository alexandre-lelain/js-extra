export default (text: string, received: any, expected: any) => {
  let stringyfiedReceived = received;
  let stringyfiedExpected = expected;
  try {
    stringyfiedReceived = JSON.stringify(stringyfiedReceived);
  }
  try {
    stringyfiedExpected = JSON.stringify(stringyfiedExpected);
  }

  const receivedText = text.replace("%s", stringyfiedReceived);
  const expectedText = receivedText.replace("%s", stringyfiedExpected);
  return expectedText || receivedText;
}