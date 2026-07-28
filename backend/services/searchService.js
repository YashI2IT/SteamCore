import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Fuse from 'fuse.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load FAQ Data
const faqsPath = path.join(__dirname, '../data/faqs.json');
const faqsData = JSON.parse(fs.readFileSync(faqsPath, 'utf8'));

// Initialize Fuse.js for fuzzy searching
const fuseOptions = {
  isCaseSensitive: false,
  includeScore: true,
  shouldSort: true,
  threshold: 0.3, // 0.0 is perfect match, 1.0 is anything
  keys: [
    { name: 'question', weight: 0.7 },
    { name: 'answer', weight: 0.3 }
  ]
};

const fuse = new Fuse(faqsData, fuseOptions);

export const searchFAQ = (query) => {
  const results = fuse.search(query);
  
  if (results.length > 0) {
    // If we have a very good match (score closer to 0)
    if (results[0].score < 0.4) {
      return results[0].item.answer;
    }
  }
  
  return null;
};
