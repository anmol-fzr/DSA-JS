function mostWordsFound(sentences: string[]): number {
  let words = 0;
  for (const sentence of sentences) {
    words = Math.max(sentence.split(" ").length, words)
  }
  return words
};

export default mostWordsFound
