/** Site defaults — replace when business details are confirmed */
export const site = {
  name: 'Forge & Timber',
  tagline: 'Steel joined. Wood refined.',
  subline: 'Precision welding and fine woodwork for homes that demand both strength and finish.',
  phone: '+92 300 0000000',
  phoneHref: 'tel:+923000000000',
  whatsapp: '923000000000',
  email: 'hello@forgeandtimber.com',
  address: 'Workshop Lane, Industrial Area — City, Pakistan',
  hours: {
    weekdays: 'Mon – Sat · 9:00 – 18:00',
    sunday: 'Sunday · By appointment',
  },
  social: {
    facebook: '',
    instagram: '',
    youtube: '',
  },
  yearsLabel: 'Years of dual-trade craft',
  ctaPrimary: 'Request Quote',
} as const

export type WeldingSlug =
  | 'gates'
  | 'grills'
  | 'railings'
  | 'staircases'
  | 'canopies'
  | 'structural'
  | 'furniture-frames'
  | 'repair'
  | 'custom-metal'

export type WoodSlug =
  | 'doors'
  | 'windows'
  | 'frames'
  | 'cabinets'
  | 'furniture'
  | 'paneling'
  | 'partitions'
  | 'custom-joinery'
  | 'repair-refinish'

export interface ServiceItem {
  slug: string
  title: string
  short: string
  image: string
  body: string[]
  covers: string[]
  materials: string[]
  idealFor: string[]
  faq: { q: string; a: string }[]
}

export const weldingServices: ServiceItem[] = [
  {
    slug: 'gates',
    title: 'Gates & Entrances',
    short: 'Driveway and courtyard gates engineered for daily use and lasting presence.',
    image: '/images/06-weld-gates.jpg',
    body: [
      'A gate is the first handshake of a property. We design and fabricate mild-steel and ornamental gates that close cleanly, hang true, and take weather without warping.',
      'From single swing leaves to double driveways and sliding tracks, every hinge plate, latch, and frame is measured to your opening—not adapted from a generic kit.',
      'Finishes range from industrial primer to powder-coat colour matches so the metal sits correctly beside brick, stone, or timber cladding.',
    ],
    covers: [
      'Single & double swing gates',
      'Sliding driveway systems',
      'Pedestrian side gates',
      'Ornamental & minimal designs',
      'Automated opener-ready frames',
    ],
    materials: ['Mild steel sections', 'Decorative ironwork', 'Powder coat / enamel', 'Stainless hardware options'],
    idealFor: ['Homes & compounds', 'Farmhouses', 'Commercial yards', 'Security upgrades'],
    faq: [
      {
        q: 'How long does a custom gate take?',
        a: 'Most residential gates move from measure to install in two to four weeks, depending on design complexity and finish curing.',
      },
      {
        q: 'Can you match an existing railing style?',
        a: 'Yes. Bring a photo or sample bar profile and we will align proportions, scrollwork, and finish.',
      },
    ],
  },
  {
    slug: 'grills',
    title: 'Window & Security Grills',
    short: 'Protective steelwork that respects light, airflow, and façade lines.',
    image: '/images/07-weld-grills.jpg',
    body: [
      'Security should not turn a window into a cage. Our grill patterns balance bar spacing with sightlines so rooms keep daylight while openings stay protected.',
      'We fabricate fixed, hinged, and detachable panels for apartments, houses, and shopfronts—with clean welds and frames that sit flush to masonry or timber surrounds.',
    ],
    covers: ['Fixed window grills', 'Hinged access panels', 'Shopfront security', 'Balcony protection mesh', 'Custom lattice patterns'],
    materials: ['Square & round bar', 'Flat plate accents', 'Anti-rust primer systems'],
    idealFor: ['Ground-floor windows', 'Rental properties', 'Retail fronts'],
    faq: [
      {
        q: 'Will grills block emergency exit?',
        a: 'We can specify hinged or quick-release sections where fire egress matters—discussed during site measure.',
      },
    ],
  },
  {
    slug: 'railings',
    title: 'Railings & Balustrades',
    short: 'Interior and balcony railings with crisp geometry and safe hand heights.',
    image: '/images/11-weld-railings.jpg',
    body: [
      'Railings carry both load and line. We fabricate balcony, terrace, and stair railings that meet practical height requirements while keeping a composed silhouette.',
      'Options include vertical bar, horizontal cable-ready frames, glass-clamp stubs, and wood-top handrails when you want steel structure with a warm grip.',
    ],
    covers: ['Balcony railings', 'Terrace guards', 'Stair handrails', 'Glass-ready posts', 'Wood-capped rails'],
    materials: ['MS box & pipe', 'Flat bar', 'Optional stainless accents'],
    idealFor: ['New builds', 'Renovation upgrades', 'Commercial lobbies'],
    faq: [
      {
        q: 'Can railings include wood tops?',
        a: 'Yes—our woodwork team can mill and finish hardwood caps that bolt cleanly to the steel substructure.',
      },
    ],
  },
  {
    slug: 'staircases',
    title: 'Steel Staircases',
    short: 'Structural stair frames that land level, feel solid, and accept timber or tile treads.',
    image: '/images/08-weld-structural.jpg',
    body: [
      'A staircase is architecture you walk on. We fabricate stringers, landings, and riser supports with checked rise-run geometry so every step feels even underfoot.',
      'Open industrial stairs, closed risers for timber cladding, and spiral cores are all within scope—coordinated with your flooring and railing finish.',
    ],
    covers: ['Straight & L-shaped stairs', 'Spiral cores', 'Mezzanine access', 'Landing frames', 'Tread-ready stringers'],
    materials: ['Structural MS sections', 'Checker plate options', 'Primer for site finish'],
    idealFor: ['Duplex homes', 'Workshops', 'Retail mezzanines'],
    faq: [
      {
        q: 'Do you install timber treads?',
        a: 'Yes. Welding and woodwork are under one roof—steel frame and hardwood treads can be delivered as a single package.',
      },
    ],
  },
  {
    slug: 'canopies',
    title: 'Shades & Canopies',
    short: 'Weather shades, carports, and entrance canopies built for wind and rain loads.',
    image: '/images/09-weld-custom.jpg',
    body: [
      'Shade structures fail when frames flex. We size posts, beams, and bracing for local wind exposure, then sheet or polycarbonate-clad as specified.',
      'Entrance canopies, walkway covers, and carport bays are fabricated off-site where possible and bolted cleanly on installation day.',
    ],
    covers: ['Entrance canopies', 'Carport frames', 'Walkway covers', 'Patio shade structures'],
    materials: ['MS columns & trusses', 'Sheet / polycarbonate coordination'],
    idealFor: ['Homes', 'Shops', 'Parking bays'],
    faq: [
      {
        q: 'Can canopies attach to existing walls?',
        a: 'Often yes, after we inspect masonry or steel for suitable anchor points and load paths.',
      },
    ],
  },
  {
    slug: 'structural',
    title: 'Structural Fabrication',
    short: 'Beams, columns, brackets, and workshop steel cut and welded to drawing.',
    image: '/images/08-weld-structural.jpg',
    body: [
      'When a project needs more than decorative metal, we fabricate structural members to engineer or architect drawings—with clear weld schedules and fit-up checks.',
      'Brackets, lintel supports, mezzanine frames, and custom plates are produced with the same care as visible architectural steel.',
    ],
    covers: ['Beams & columns', 'Brackets & base plates', 'Mezzanine frames', 'Custom plates & cleats'],
    materials: ['Structural sections', 'Plate steel', 'Specified electrodes'],
    idealFor: ['Contractors', 'Renovations', 'Industrial fit-outs'],
    faq: [
      {
        q: 'Do you work from CAD drawings?',
        a: 'Yes. Share DWG/PDF with dimensions and weld notes; we confirm cut lists before fabrication.',
      },
    ],
  },
  {
    slug: 'furniture-frames',
    title: 'Furniture Frames',
    short: 'Metal skeletons for tables, benches, and shelving—ready for wood or stone tops.',
    image: '/images/09-weld-custom.jpg',
    body: [
      'Furniture that lasts starts with a true frame. We weld table bases, bench frames, and shelving uprights with level pads and clean miters.',
      'Pair with our woodshop for tops and panels, or supply frames alone to your interior contractor.',
    ],
    covers: ['Table bases', 'Bench & sofa frames', 'Shelving systems', 'Display stands'],
    materials: ['Box tube', 'Round pipe', 'Flat bar accents'],
    idealFor: ['Interiors', 'Cafés', 'Custom homes'],
    faq: [
      {
        q: 'Can frames be powder coated black?',
        a: 'Yes—matte black and custom RAL colours are available depending on batch size.',
      },
    ],
  },
  {
    slug: 'repair',
    title: 'Repair & On-Site Welding',
    short: 'Gates that sag, railings that rust, frames that crack—restored where they stand.',
    image: '/images/10-weld-repair.jpg',
    body: [
      'Not every job starts in the workshop. Our mobile welding covers hinge resets, cracked joints, rusted sections, and reinforcement of tired steel.',
      'We cut out failed metal, reweld sound sections, and refinish the repair zone so the piece works again without full replacement—when that is the smarter path.',
    ],
    covers: ['Gate realignment', 'Hinge & latch repair', 'Railing reinforcement', 'Crack welding', 'Section replacement'],
    materials: ['Matching electrodes', 'Primer touch-up systems'],
    idealFor: ['Emergency fixes', 'Budget-conscious upgrades', 'Heritage pieces worth saving'],
    faq: [
      {
        q: 'Do you weld aluminium on site?',
        a: 'Primary focus is mild steel and related ferrous work. Aluminium jobs are assessed case by case.',
      },
    ],
  },
  {
    slug: 'custom-metal',
    title: 'Custom Metalwork',
    short: 'One-off pieces—screens, planters, brackets, and sculptural accents.',
    image: '/images/09-weld-custom.jpg',
    body: [
      'When the drawing is yours alone, we translate sketches into cut lists and welds. Custom screens, fireplace surrounds, planter frames, and art brackets are everyday work here.',
      'Expect prototypes for complex curves, then a finished piece that sits correctly in its intended light and context.',
    ],
    covers: ['Decorative screens', 'Planter frames', 'Fireplace surrounds', 'Art & display brackets'],
    materials: ['MS / selected metals', 'Finish per design'],
    idealFor: ['Architects', 'Interior designers', 'Homeowners with a clear vision'],
    faq: [
      {
        q: 'Can I bring a hand sketch?',
        a: 'Absolutely. We refine dimensions together before any metal is cut.',
      },
    ],
  },
]

export const woodServices: ServiceItem[] = [
  {
    slug: 'doors',
    title: 'Doors',
    short: 'Solid and engineered doors—main entrances, interiors, and double leaves.',
    image: '/images/12-wood-doors.jpg',
    body: [
      'A door carries traffic, weather, and first impressions. We build and finish hardwood and engineered doors sized to your frame, with correct clearances for local climate swell.',
      'Panelled classics, flush modern faces, and glazed inserts are available—paired with our welding team when steel frames or security hardware are part of the opening.',
    ],
    covers: ['Main entrance doors', 'Interior room doors', 'Double / French leaves', 'Glazed panels', 'Fire-rated style builds on request'],
    materials: ['Teak, ash, oak & local hardwoods', 'Engineered cores', 'Varnish / polish / paint systems'],
    idealFor: ['New homes', 'Renovation replacements', 'Office suites'],
    faq: [
      {
        q: 'Do you supply frames with doors?',
        a: 'Yes—door and frame packages ensure hinge alignment and consistent reveal lines.',
      },
    ],
  },
  {
    slug: 'windows',
    title: 'Windows',
    short: 'Timber window sashes and frames that open smoothly and seal against dust.',
    image: '/images/13-wood-windows.jpg',
    body: [
      'Wooden windows reward careful joinery. We fabricate casement, sliding, and fixed frames with weather-aware detailing and hardware pockets cut true.',
      'Glazing coordination, insect-screen rebates, and grill interfaces are planned so welding and woodwork meet without gaps.',
    ],
    covers: ['Casement windows', 'Sliding timber windows', 'Fixed picture frames', 'Bay / projection styles'],
    materials: ['Seasoned hardwoods', 'Quality hardware', 'Sealer & exterior finishes'],
    idealFor: ['Heritage restorations', 'Warm interior character', 'Custom openings'],
    faq: [
      {
        q: 'Can windows take steel grills?',
        a: 'Yes. We design timber frames with grill attachment in mind so security metal does not stress the wood.',
      },
    ],
  },
  {
    slug: 'frames',
    title: 'Frames & Architraves',
    short: 'Door and window frames, architraves, and trim that land flush and square.',
    image: '/images/16-wood-frames.jpg',
    body: [
      'Frames decide whether a door swings free or binds forever. We mill and install frames with plumbed jambs and consistent head heights across a floor.',
      'Architraves and skirt interfaces are cut to hide transitions between plaster, tile, and timber—clean lines, not filler gaps.',
    ],
    covers: ['Door frames', 'Window frames', 'Architraves', 'Skirting interfaces'],
    materials: ['Hardwood & softwood as specified', 'Moisture-aware sealers'],
    idealFor: ['Full-floor renovations', 'New construction packages'],
    faq: [
      {
        q: 'Can frames be painted or stained?',
        a: 'Both. We prime for paint systems or stain to show grain—your choice per room.',
      },
    ],
  },
  {
    slug: 'cabinets',
    title: 'Cabinets & Wardrobes',
    short: 'Built-in storage with accurate carcasses, soft closes, and lasting finishes.',
    image: '/images/14-wood-cabinets.jpg',
    body: [
      'Storage fails when boxes are out of square. We build kitchen cabinets, wardrobes, and utility units with calibrated carcasses, adjustable shelving, and hardware that survives daily use.',
      'Layouts respect plumbing, electrical, and appliance clearances—measured on site, not guessed from a brochure.',
    ],
    covers: ['Kitchen cabinets', 'Wardrobes', 'TV & display units', 'Utility cupboards'],
    materials: ['Plywood / MDF / hardwood faces', 'Laminate or polish', 'Soft-close hardware'],
    idealFor: ['Kitchens', 'Bedrooms', 'Studios'],
    faq: [
      {
        q: 'Do you handle island units?',
        a: 'Yes—including coordination with steel brackets or bases when spans need reinforcement.',
      },
    ],
  },
  {
    slug: 'furniture',
    title: 'Custom Furniture',
    short: 'Tables, beds, benches, and pieces designed for your room—not a showroom aisle.',
    image: '/images/15-wood-furniture.jpg',
    body: [
      'Furniture should fit the wall it lives against. We design and build tables, beds, consoles, and seating to your dimensions, with joinery chosen for the load each piece will see.',
      'Metal frames from our welding bay can underpin large tops; timber provides the touch surfaces.',
    ],
    covers: ['Dining & work tables', 'Beds & headboards', 'Benches & consoles', 'Shelving pieces'],
    materials: ['Selected hardwoods', 'Engineered panels', 'Optional steel bases'],
    idealFor: ['Custom interiors', 'Hospitality', 'One-off gifts'],
    faq: [
      {
        q: 'Can you copy a reference photo?',
        a: 'We can interpret proportions and details from photos, then adapt them to available timber and your room size.',
      },
    ],
  },
  {
    slug: 'paneling',
    title: 'Paneling & Wall Cladding',
    short: 'Wall and ceiling timber that adds depth without visual noise.',
    image: '/images/17-wood-custom.jpg',
    body: [
      'Panelling is rhythm on a wall. We install vertical, horizontal, and patterned cladding with consistent shadow gaps and moisture management behind the face.',
      'Feature walls, headboard surrounds, and ceiling coffers are planned with lighting cut-outs and socket positions from day one.',
    ],
    covers: ['Feature walls', 'Ceiling cladding', 'Wainscot / dado', 'Acoustic-style slats'],
    materials: ['Solid strips & veneered panels', 'Appropriate backing'],
    idealFor: ['Living rooms', 'Bedrooms', 'Reception areas'],
    faq: [
      {
        q: 'Is panelling suitable for humid rooms?',
        a: 'We select species and finishes accordingly, and may recommend alternatives for wet zones.',
      },
    ],
  },
  {
    slug: 'partitions',
    title: 'Partitions',
    short: 'Room dividers and office partitions in timber—solid, glazed, or mixed.',
    image: '/images/17-wood-custom.jpg',
    body: [
      'Partitions redefine flow without rebuilding the shell. We fabricate timber dividers, half-walls, and glazed timber screens that feel permanent, not temporary.',
      'Steel posts can hide inside timber wraps when spans or heights need extra stiffness.',
    ],
    covers: ['Full-height dividers', 'Half walls', 'Glazed timber screens', 'Office cubicles'],
    materials: ['Timber frames', 'Panel infills', 'Optional steel cores'],
    idealFor: ['Open-plan homes', 'Studios', 'Small offices'],
    faq: [
      {
        q: 'Can partitions be relocated later?',
        a: 'Some designs are modular; others are fixed. We advise during planning which approach fits your future plans.',
      },
    ],
  },
  {
    slug: 'custom-joinery',
    title: 'Custom Joinery',
    short: 'Stairs treads, handrail wood, niches, and bespoke details others skip.',
    image: '/images/17-wood-custom.jpg',
    body: [
      'The difference between “fitted” and “crafted” lives in the details. We mill stair treads, landing nosings, window seats, niches, and one-off joinery that completes a room.',
      'When steel staircases need timber treads, both trades share one measure and one install schedule.',
    ],
    covers: ['Stair treads & risers', 'Window seats', 'Niches & alcoves', 'Bespoke millwork'],
    materials: ['Hardwoods matched to existing floors', 'Finish systems'],
    idealFor: ['Architect-led projects', 'High-detail renovations'],
    faq: [
      {
        q: 'Can you match existing floor colour?',
        a: 'We sample stains against your floor under the same light before committing to the full run.',
      },
    ],
  },
  {
    slug: 'repair-refinish',
    title: 'Repair & Refinish',
    short: 'Doors that stick, cabinets that sag, finishes that fade—brought back to use.',
    image: '/images/12-wood-doors.jpg',
    body: [
      'Good timber deserves a second life. We plane sticking doors, rebuild failed joints, replace damaged panels, and refinish surfaces that have gone dull or scratched.',
      'Often repair is faster and more sustainable than full replacement—especially for solid hardwood pieces.',
    ],
    covers: ['Door planing & hinge resets', 'Cabinet repairs', 'Veneer patches', 'Full refinishing'],
    materials: ['Matching timber', 'Compatible finish systems'],
    idealFor: ['Heritage doors', 'Quality furniture', 'Budget-smart upgrades'],
    faq: [
      {
        q: 'Can you match an old varnish sheen?',
        a: 'We aim for closest practical match; exact vintage formulas may not exist, but visual harmony is the goal.',
      },
    ],
  },
]

export const processSteps = [
  {
    title: 'Measure',
    text: 'On-site dimensions, opening checks, and photos. We note walls, levels, and constraints before any design is locked.',
    image: '/images/21-process-measure.jpg',
  },
  {
    title: 'Design',
    text: 'Sketches or drawings with materials, finishes, and hardware. You approve the plan—and the quote—before cutting begins.',
    image: '/images/22-process-design.jpg',
  },
  {
    title: 'Fabricate',
    text: 'Steel is cut and welded; timber is milled and joined. Both trades share schedules when a project needs both.',
    image: '/images/23-process-fabricate.jpg',
  },
  {
    title: 'Install',
    text: 'Delivery, fixing, alignment, and handover. We leave openings that swing true and metal that sits level.',
    image: '/images/24-process-install.jpg',
  },
]

export const projects = [
  {
    title: 'Compound Entrance Pair',
    trade: 'Welding + Wood',
    summary:
      'Powder-coated driveway gate with matching pedestrian leaf, paired with a solid hardwood main door and frame package.',
    image: '/images/18-project-1.jpg',
  },
  {
    title: 'Terrace Line',
    trade: 'Welding',
    summary:
      'Continuous balcony railing with wood-capped handrail, installed across three bays with consistent post spacing.',
    image: '/images/19-project-2.jpg',
  },
  {
    title: 'Dual Bay Workshop Fit',
    trade: 'Workshop',
    summary:
      'Internal documentation of our own layout—welding bay and timber benches under one roof for coordinated jobs.',
    image: '/images/20-project-3.jpg',
  },
]

export const faqs = [
  {
    q: 'Do you handle both welding and woodwork on one project?',
    a: 'Yes. That is our advantage. Gates with timber doors, steel stairs with wooden treads, and grill-ready window frames are planned as one scope.',
  },
  {
    q: 'How do I get a quote?',
    a: 'Use the quote form, WhatsApp, or call. Share opening sizes or invite us for a site measure—accurate dimensions beat guesses.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We work across the city and nearby towns. Distance jobs are scheduled with travel noted in the quote.',
  },
  {
    q: 'How long does a typical job take?',
    a: 'Simple repairs may finish in days. Custom gates or full door sets usually need two to four weeks after approval, depending on finish and complexity.',
  },
  {
    q: 'Do you install as well as fabricate?',
    a: 'Yes. Fabrication and installation are both offered so fitment stays under our control.',
  },
  {
    q: 'What finishes are available for steel?',
    a: 'Primer, enamel, and powder coat options depending on the piece and exposure. We advise based on outdoor vs indoor use.',
  },
  {
    q: 'Which woods do you commonly use?',
    a: 'Project-dependent—teak, ash, oak, and quality local hardwoods, plus engineered cores where stability matters more than solid face grain.',
  },
  {
    q: 'Can you work from architect drawings?',
    a: 'Yes. Share PDFs or CAD with notes; we confirm any missing dimensions before fabrication.',
  },
  {
    q: 'Do you charge for a site measure?',
    a: 'Site visits for quoting are usually folded into the job if you proceed. Distant visits may include a small travel note—confirmed when you book.',
  },
  {
    q: 'Can welding and woodwork run on the same install day?',
    a: 'Often yes when sequenced correctly—steel frames first, timber hang after. We plan the day so trades do not block each other.',
  },
  {
    q: 'What payment terms do you use?',
    a: 'Typically a booking deposit to start fabrication, with the balance on install or handover. Exact terms are written on your quote.',
  },
  {
    q: 'Do you offer warranties on workmanship?',
    a: 'Workmanship is backed for structural integrity and install fit under normal use. Finish wear from weather or misuse is discussed case by case.',
  },
]

export const reviews = [
  {
    name: 'Ahmed R.',
    role: 'Homeowner',
    rating: 5,
    text: 'Gate and main door arrived as one package. The swing was true on day one—no follow-up hinge drama.',
  },
  {
    name: 'Sana K.',
    role: 'Interior client',
    rating: 5,
    text: 'Wardrobe carcasses were square, soft-closes quiet, and they coordinated a steel bracket for the long span without fuss.',
  },
  {
    name: 'Bilal M.',
    role: 'Contractor',
    rating: 5,
    text: 'Clear drawings, clean welds, on-time install. Easy to put on a site schedule with other trades.',
  },
  {
    name: 'Nadia F.',
    role: 'Duplex owner',
    rating: 5,
    text: 'Steel stair frame plus hardwood treads felt like one workshop, not two vendors arguing over heights.',
  },
  {
    name: 'Omar H.',
    role: 'Shop owner',
    rating: 4,
    text: 'Security grills look intentional, not bolted-on. Measure was careful around existing window frames.',
  },
  {
    name: 'Fatima Z.',
    role: 'Renovation',
    rating: 5,
    text: 'They repaired a sagging gate instead of pushing a full replace. Honest scope, fair price, solid result.',
  },
]
