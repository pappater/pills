import fileContent from './assets/a.txt?raw';

// Convert file content into a Set for fast lookup
const dictionaryWords = new Set(fileContent.split('\n').map(word => word.trim().toLowerCase()));

/**
 * Checks if a given text is present in the dictionary file.
 * @param {string} text - The text to check.
 * @returns {boolean} - Returns true if the text is present, false otherwise.
 */
export const isTextPresent = (text) => {
  return dictionaryWords.has(text.toLowerCase().trim());
};
