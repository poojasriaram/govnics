import fs from 'fs';
import path from 'path';

try {
  let content = fs.readFileSync(path.join(process.cwd(), 'retrieved_compendium.txt'), 'utf8');
  
  // Find all matches for title
  // It could be title: "..." or "title": "..."
  const regex = /(?:title|titleNumber|titleText|title):\s*\\?"([^"\\]+)/g;
  let match;
  const titles = new Set();
  while ((match = regex.exec(content)) !== null) {
    if (match[1] !== 'Govern' && match[1] !== 'Identify' && match[1] !== 'Protect' && match[1] !== 'Detect' && match[1] !== 'Respond' && match[1] !== 'Recover' && match[1] !== 'Cross-cutting') {
      titles.add(match[1].replace(/\\n/g, '').trim());
    }
  }
  
  console.log(`Found ${titles.size} unique titles:`);
  Array.from(titles).forEach((t, i) => console.log(`${i + 1}: ${t}`));
} catch (err) {
  console.error('Error:', err);
}
