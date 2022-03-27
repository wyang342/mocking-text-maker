import React from 'react'

interface MockingTextProps {
  text: string,
}

const createDefaultText = (text: string): string => {
  let mockingText = text.toLowerCase();
  const n = text.length;
  let upperStreak = 0;
  let upperCount = 0;

  for (let i = 1; i < n - 1; i++) {
    if (Math.random() < 0.5 && upperStreak <= 1) {
      mockingText = mockingText.slice(0, i) + mockingText[i].toUpperCase() + mockingText.slice(i + 1, n);
      upperStreak++;
      upperCount++;
    } else {
      upperStreak = 0;
    }
  }

  if (upperCount === 0) {
    const randIndex = Math.floor(Math.random() * n);
    mockingText = mockingText.slice(0, randIndex) + mockingText.charAt(randIndex).toUpperCase() + mockingText.slice(randIndex + 1, n);
  }

  return mockingText;
}

const createMockingWord = (text: string): string => {
  let mockingText;

  switch (text.length) {
    case 1:
      mockingText = text.toLowerCase();
      break;
    case 2:
      mockingText = text[0] + text[1].toUpperCase();
      break;
    case 3:
      mockingText = Math.random() < 0.5 ? text[0] + text[1].toUpperCase() + text[2] : text[0].toUpperCase() + text[1] + text[2].toUpperCase();
      break;
    default:
      mockingText = createDefaultText(text);
      break;
  }

  return mockingText;
}

const displayText = (text: string): React.ReactElement => {
  const lines = text.split("\n");
  const mockingLines = [];

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    let line = lines[lineIndex];
    let words = line.split(" ");
    let mockingWords = [];
    for (let i = 0; i < words.length; i++) {
      let word = createMockingWord(words[i]);
      mockingWords.push(word);
    }
    line = mockingWords.join(" ");
    mockingLines.push(line);
  }

  return <h3>{mockingLines.join("\n")}</h3>;
}

export const MockingText: React.FC<MockingTextProps> = ({ text }) => {
  return (
    <div>{displayText(text)}</div>
  );
}