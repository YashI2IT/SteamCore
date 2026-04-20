const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'pages');
const pages = ['About.jsx', 'Contact.jsx', 'Founder.jsx', 'Industries.jsx', 'Projects.jsx', 'Services.jsx', 'Training.jsx', 'WhyChooseUs.jsx'];

pages.forEach(page => {
  const file = path.join(dir, page);
  let content = fs.readFileSync(file, 'utf8');

  // Find imports
  if (content.includes('import { fadeUp, staggerWrap }')) {
    content = content.replace(/import \{ fadeUp, staggerWrap \} from '\.\.\/ui\/motion'/, "import { Reveal } from '../ui/Reveal'");
  } else {
    content = content.replace(/import \{ fadeUp \} from '\.\.\/ui\/motion'/, "import { Reveal } from '../ui/Reveal'");
  }

  // Replace tags
  content = content.replace(/<Motion\.section \{\.\.\.fadeUp\}/g, "<Reveal");
  content = content.replace(/<\/Motion\.section>/g, "</Reveal>");

  // Remove unused Motion imports if any
  if (!content.includes('<Motion') && content.includes("import { motion as Motion } from 'framer-motion'")) {
    content = content.replace(/import \{ motion as Motion \} from 'framer-motion'\r?\n/, "");
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Refactored ${page}`);
});
