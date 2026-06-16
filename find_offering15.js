import fs from 'fs';
import path from 'path';

const logFilePath = 'C:\\Users\\HARIKRISHNAN\\.gemini\\antigravity-ide\\brain\\87926a11-81af-43fb-b4bc-fae2e9850e70\\.system_generated\\logs\\transcript.jsonl';

try {
  const content = fs.readFileSync(logFilePath, 'utf8');
  const lines = content.trim().split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (!lines[i]) continue;
    const step = JSON.parse(lines[i]);
    const stepStr = JSON.stringify(step);
    if (stepStr.toLowerCase().includes('offering 15')) {
      console.log(`FOUND OFFERING 15 in Step index: ${step.step_index}, Source: ${step.source}`);
    }
  }
} catch (err) {
  console.error('Error:', err);
}
