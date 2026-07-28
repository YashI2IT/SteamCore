const fs = require('fs');
const path = require('path');

const dirPages = path.join(__dirname, 'src', 'pages');
const dirComponents = path.join(__dirname, 'src', 'components');

const files = [
  ...['Home.jsx', 'About.jsx', 'Contact.jsx', 'Founder.jsx', 'Industries.jsx', 'Projects.jsx', 'Services.jsx', 'Training.jsx', 'WhyChooseUs.jsx'].map(f => path.join(dirPages, f)),
  path.join(dirComponents, 'Layout.jsx')
];

const twMap = {
  'text-7xl': 'text-6xl',
  'text-6xl': 'text-5xl',
  'text-5xl': 'text-4xl',
  'text-4xl': 'text-3xl',
  'text-3xl': 'text-2xl',
  'text-2xl': 'text-xl',
  'text-xl': 'text-lg',
  'text-lg': 'text-[15px]'
};

files.forEach(filePath => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');

  // Shrink explicit pixel sizing (body and display texts)
  content = content.replace(/text-\[([0-9]+)px\]/g, (match, p1) => {
    let size = parseInt(p1);
    if (size >= 80) return 'text-[64px]';
    if (size === 72) return 'text-[56px]';
    if (size === 60) return 'text-[48px]';
    if (size === 56) return 'text-[44px]';
    if (size === 44) return 'text-[36px]';
    if (size === 26) return 'text-[20px]';
    if (size === 24) return 'text-[18px]';
    if (size === 22) return 'text-[17px]';
    if (size === 20) return 'text-[16px]';
    if (size === 19) return 'text-[15px]';
    if (size === 18) return 'text-[15px]';
    if (size === 17) return 'text-[14px]';
    if (size === 16) return 'text-[14px]';
    return match; // don't shrink 15px or lower any further automatically
  });

  // Shrink tailwind utility classes safely
  content = content.replace(/\btext-(7xl|6xl|5xl|4xl|3xl|2xl|xl|lg)\b/g, (m) => twMap[m] || m);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Resized typography in ${path.basename(filePath)}`);
});
