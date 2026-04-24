// Every card title maps to a unique, contextually relevant Pexels image
const TITLE_IMAGE_MAP = {

  // ── Home page: Core services ──────────────────────────────────────
  // Antique steam boiler — industrial setting
  'Boiler & Utility Consultancy':
    'https://images.pexels.com/photos/36676009/pexels-photo-36676009.jpeg?auto=compress&w=800',
  // Solar technician inspecting panels — energy audit
  'Energy Audit & Optimization':
    'https://images.pexels.com/photos/4254159/pexels-photo-4254159.jpeg?auto=compress&w=800',
  // Technician repairing industrial machinery
  'Reliability & Maintenance':
    'https://images.pexels.com/photos/35072827/pexels-photo-35072827.jpeg?auto=compress&w=800',
  // Aerial industrial power plant at sunset
  'Project Engineering':
    'https://images.pexels.com/photos/5462679/pexels-photo-5462679.jpeg?auto=compress&w=800',

  // ── Home page: Additional engineering focus ───────────────────────
  // Rustic industrial boiler with metalwork
  'Boiler & Steam System Excellencefocus':
    'https://images.pexels.com/photos/36152008/pexels-photo-36152008.jpeg?auto=compress&w=800',
  // Two electricians inspecting solar panels
  'Energy Audit & Cost Reductionfocus':
    'https://images.pexels.com/photos/4254166/pexels-photo-4254166.jpeg?auto=compress&w=800',
  // Blue industrial machine under building pipes
  'Utility System Optimizationfocus':
    'https://images.pexels.com/photos/10290629/pexels-photo-10290629.jpeg?auto=compress&w=800',
  // Worker in safety gear inspecting machinery
  'Reliability & Maintenancefocus':
    'https://images.pexels.com/photos/16368437/pexels-photo-16368437.jpeg?auto=compress&w=800',

  // ── Services page: Primary services (9 cards) ─────────────────────
  // Technician maintaining heating system in workshop
  'Boiler operation & maintenance':
    'https://images.pexels.com/photos/34938442/pexels-photo-34938442.jpeg?auto=compress&w=800',
  // Close-up vintage industrial boiler
  'Boiler & utility consultancy':
    'https://images.pexels.com/photos/36403580/pexels-photo-36403580.jpeg?auto=compress&w=800',
  // Smart electricity meters on wall
  'Energy audit & optimization':
    'https://images.pexels.com/photos/12274476/pexels-photo-12274476.jpeg?auto=compress&w=800',
  // Mechanic repairing engine — reliability
  'Reliability & maintenance support':
    'https://images.pexels.com/photos/29226627/pexels-photo-29226627.jpeg?auto=compress&w=800',
  // Close-up old metal valves — troubleshooting
  'Industrial troubleshooting & root cause analysis':
    'https://images.pexels.com/photos/5503819/pexels-photo-5503819.jpeg?auto=compress&w=800',
  // Thermal power station with cooling towers
  'Project engineering':
    'https://images.pexels.com/photos/7563984/pexels-photo-7563984.jpeg?auto=compress&w=800',
  // Steel pipes with pressure gauge — valve/trap service
  'Authorized service support (UNI KLINGER Ltd.)':
    'https://images.pexels.com/photos/7937300/pexels-photo-7937300.jpeg?auto=compress&w=800',
  // Technician inspecting electronic component — monitoring
  'Maintenance contracts & performance monitoring':
    'https://images.pexels.com/photos/34054470/pexels-photo-34054470.jpeg?auto=compress&w=800',
  // Two electricians discussing near solar panels — training
  'Training & capability development':
    'https://images.pexels.com/photos/4254157/pexels-photo-4254157.jpeg?auto=compress&w=800',

  // ── Services page: Core service offerings (12 numbered cards) ─────
  // Industrial factory pipes and structures — utility systems
  '1. Integrated Utility System Optimization':
    'https://images.pexels.com/photos/33813584/pexels-photo-33813584.jpeg?auto=compress&w=800',
  // Brass pipes of vintage steam mechanism
  '2. Boiler & Steam System Excellence':
    'https://images.pexels.com/photos/14724663/pexels-photo-14724663.jpeg?auto=compress&w=800',
  // Solar technician with documents — energy audit
  '3. Energy Audit & Cost Reduction Programs':
    'https://images.pexels.com/photos/4254163/pexels-photo-4254163.jpeg?auto=compress&w=800',
  // Nuclear power plant cooling towers — cogeneration
  '4. Cogeneration & Captive Power Advisory':
    'https://images.pexels.com/photos/10165692/pexels-photo-10165692.jpeg?auto=compress&w=800',
  // Technician repairing industrial equipment
  '5. Reliability & Maintenance Engineering':
    'https://images.pexels.com/photos/34054465/pexels-photo-34054465.jpeg?auto=compress&w=800',
  // Industrial pipes close-up — chemical cleaning
  '6. Chemical Cleaning & System Health Restoration':
    'https://images.pexels.com/photos/11142768/pexels-photo-11142768.jpeg?auto=compress&w=800',
  // Technician repairing air compressor
  '7. Utility Equipment Performance Optimization':
    'https://images.pexels.com/photos/32588560/pexels-photo-32588560.jpeg?auto=compress&w=800',
  // Power plant with smokestacks — project/design
  '8. Engineering Design & Project Support':
    'https://images.pexels.com/photos/7599420/pexels-photo-7599420.jpeg?auto=compress&w=800',
  // Electrician adjusting wires on control panel — PSM/safety
  '9. Process Safety & Compliance (PSM)':
    'https://images.pexels.com/photos/26100225/pexels-photo-26100225.jpeg?auto=compress&w=800',
  // Engineer with hardhat checking solar panel — training
  '10. Training & Capability Development':
    'https://images.pexels.com/photos/4254171/pexels-photo-4254171.jpeg?auto=compress&w=800',
  // Cooling towers emitting steam — sustainability
  '11. Sustainability & Decarbonization Advisory':
    'https://images.pexels.com/photos/29155807/pexels-photo-29155807.jpeg?auto=compress&w=800',
  // Rusty pressure valve — crisis/troubleshooting
  '12. Troubleshooting & Crisis Support':
    'https://images.pexels.com/photos/7865898/pexels-photo-7865898.jpeg?auto=compress&w=800',

  // ── Training page: Topic cards ───────────────────────────────────
  // Technician at boiler controls — boiler operation
  'Boiler operation training':
    'https://images.pexels.com/photos/7859953/pexels-photo-7859953.jpeg?auto=compress&w=800',
  // Solar engineer with documents — energy efficiency
  'Energy efficiency programs':
    'https://images.pexels.com/photos/4254169/pexels-photo-4254169.jpeg?auto=compress&w=800',
  // Industrial pipes and utility systems — utility awareness
  'Utility system awareness sessions':
    'https://images.pexels.com/photos/33813584/pexels-photo-33813584.jpeg?auto=compress&w=800',
  // Mechanic repairing engine — troubleshooting & maintenance
  'Troubleshooting and maintenance training':
    'https://images.pexels.com/photos/29181490/pexels-photo-29181490.jpeg?auto=compress&w=800',
  // Engineer studying with documents — exam preparation
  'Exam-oriented support':
    'https://images.pexels.com/photos/4254157/pexels-photo-4254157.jpeg?auto=compress&w=800',
  // Waste heat recovery — industrial heat exchanger / flue stacks
  'Waste heat recovery implementation':
    'https://images.pexels.com/photos/3387159/pexels-photo-3387159.jpeg?auto=compress&w=800',
  // Boiler project execution — large industrial boiler construction
  'Boiler project execution (example: 16 TPH)':
    'https://images.pexels.com/photos/12238026/pexels-photo-12238026.jpeg?auto=compress&w=800',
  // Genset noise reduction — generator / industrial electrical room
  'Genset noise reduction':
    'https://images.pexels.com/photos/7178310/pexels-photo-7178310.jpeg?auto=compress&w=800',
  // Vehicle NVH — automotive engineering / vehicle testing
  'Vehicle NVH optimization':
    'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&w=800',
  // Tyre noise — road / tyre close-up
  'Tyre noise reduction':
    'https://images.pexels.com/photos/35072827/pexels-photo-35072827.jpeg?auto=compress&w=800',
  // Industrial noise compliance — factory floor / worker with ear protection
  'Industrial noise compliance':
    'https://images.pexels.com/photos/16442672/pexels-photo-16442672.jpeg?auto=compress&w=800',
  // Acoustic room / chamber — controlled test environment
  'Acoustic room / chamber':
    'https://images.pexels.com/photos/34054460/pexels-photo-34054460.jpeg?auto=compress&w=800',
  // Vibration isolation — heavy machinery / industrial equipment base
  'Vibration isolation solutions':
    'https://images.pexels.com/photos/10290629/pexels-photo-10290629.jpeg?auto=compress&w=800',
  // Metal pipes in factory — boiler O&M
  'Boiler Operation & Maintenance':
    'https://images.pexels.com/photos/11899171/pexels-photo-11899171.jpeg?auto=compress&w=800',
  // Industrial pipe system with gauges — UNI KLINGER valves/traps
  'Authorised Service Support – UNI KLINGER Systems':
    'https://images.pexels.com/photos/11142768/pexels-photo-11142768.jpeg?auto=compress&w=800',
  // Workers servicing industrial machinery
  'Process Plant Maintenance & Reliability Support':
    'https://images.pexels.com/photos/16045333/pexels-photo-16045333.jpeg?auto=compress&w=800',
  // Mechanic working on engine — RCA
  'Industrial Troubleshooting & Root Cause Analysis':
    'https://images.pexels.com/photos/29181490/pexels-photo-29181490.jpeg?auto=compress&w=800',
  // Person holding lightbulb over plant — energy efficiency
  'Utility & Energy Efficiency Improvement':
    'https://images.pexels.com/photos/8543294/pexels-photo-8543294.jpeg?auto=compress&w=800',
  // Worker on jib crane by factory chimneys — shutdown/emergency
  'Shutdown Planning & Emergency Technical Support':
    'https://images.pexels.com/photos/15866644/pexels-photo-15866644.jpeg?auto=compress&w=800',
  // Electrician using multimeter on control panel — monitoring
  'Maintenance Contracts & Performance Monitoring':
    'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&w=800',
  // Inspector with clipboard at solar panels — training
  'Engineering Training & Capability Development':
    'https://images.pexels.com/photos/4254169/pexels-photo-4254169.jpeg?auto=compress&w=800',
}

// Fallback Unsplash pool
const FALLBACK_IDS = [
  '1581091226825-a6a2a5aee158',
  '1513828583688-c52646db42da',
  '1506501139174-099022df5260',
  '1605810230434-7631ac76ec81',
  '1486406146926-c627a92ad1ab',
  '1497366216548-37526070297c',
]

export const getIndustrialImage = (indexOrTitle) => {
  if (typeof indexOrTitle === 'string' && TITLE_IMAGE_MAP[indexOrTitle]) {
    return TITLE_IMAGE_MAP[indexOrTitle]
  }
  const i = (typeof indexOrTitle === 'number' ? indexOrTitle : 0) % FALLBACK_IDS.length
  return `https://images.unsplash.com/photo-${FALLBACK_IDS[i]}?w=800&q=80&auto=format,compress`
}
