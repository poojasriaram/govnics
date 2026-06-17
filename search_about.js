import fs from 'fs';

const logFilePath = 'C:\\Users\\HARIKRISHNAN\\.gemini\\antigravity-ide\\brain\\87926a11-81af-43fb-b4bc-fae2e9850e70\\.system_generated\\logs\\transcript.jsonl';

try {
  const content = fs.readFileSync(logFilePath, 'utf8');
  const lines = content.trim().split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) continue;
    const step = JSON.parse(lines[i]);
    const stepStr = JSON.stringify(step);
    if (stepStr.toLowerCase().includes('about') || stepStr.toLowerCase().includes('isi')) {
      console.log(`FOUND at Step: ${step.step_index}, Type: ${step.type}`);
      // If it contains a code write or user input, print a snippet
      if (step.source === 'USER_EXPLICIT' && step.type === 'USER_INPUT') {
        console.log(`  User input: ${step.content.substring(0, 300)}...`);
      }
      if (stepStr.includes('about-page-data.ts')) {
        console.log(`  References about-page-data.ts`);
      }
    }
  }
} catch (err) {
  console.error('Error:', err);
}
