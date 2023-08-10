
/**
 * Splits a paragraph into lines of a given maximum length.
 * @param
 * @returns
 */
export default function (paragraph: string, maxLength: number): string[] {
  const words = paragraph.split(' ');
  let currentLine = '';

  const lines: string[] = [];
  words.forEach((word) => {
    if ((currentLine + word).length <= maxLength) {
      currentLine += `${word} `;
    } else {
      lines.push(currentLine.trim());
      currentLine = `${word} `;
    }
  });

  if (currentLine.length > 0) {
    lines.push(currentLine.trim());
  }

  return lines;
}
