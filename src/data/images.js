export const getIndustrialImage = (index) => {
  const ids = [
    '1581091226825-a6a2a5aee158', // Verified worker/machine
    '1513828583688-c52646db42da', // Verified structure
    '1506501139174-099022df5260', // Verified pipes
    '1605810230434-7631ac76ec81', // Verified refinery
    '1486406146926-c627a92ad1ab', // Verified architecture
    '1497366216548-37526070297c'  // Verified infrastructure
  ];
  return `https://images.unsplash.com/photo-${ids[index % ids.length]}?w=800&q=80&auto=format,compress`;
}
