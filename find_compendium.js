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
    if (stepStr.includes('cybersecurity-compendium-data.ts') && (stepStr.includes('write_to_file') || stepStr.includes('replace_file_content'))) {
      console.log(`FOUND Step index modifying file: ${step.step_index}, Source: ${step.source}, Type: ${step.type}`);
      // Find the tool call
      const toolCalls = step.tool_calls || [];
      for (const call of toolCalls) {
        if (call.name === 'write_to_file' || call.name === 'replace_file_content') {
          const args = call.args;
          const fileContent = args.CodeContent || args.ReplacementContent;
          if (fileContent && fileContent.includes('securityOfferings')) {
            console.log(`FOUND CONTENT inside tool call in step ${step.step_index}`);
            fs.writeFileSync(path.join(process.cwd(), 'retrieved_compendium.txt'), fileContent, 'utf8');
            console.log('Saved tool call content to retrieved_compendium.txt');
            break;
          }
        }
      }
    }
  }
} catch (err) {
  console.error('Error:', err);
}
