const listingsData = [
  {
    title: "Mills Memorial Library (Quiet Study Areas)",
    description:
      "A dedicated quiet study space on the upper floors with individual desks and ample natural light from large windows.",
    tags: [
      { label: "Library", color: "#90BE6D" },
      { label: "Quiet", color: "#F8961E" },
      { label: "Brightly Lit", color: "#F8961E" },
      { label: "Wheelchair Accessible", color: "#43AA8B" },
      { label: "Elevator Nearby", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Power Outlets", color: "#F3722C" },
      { label: "Nearby Restrooms", color: "#F3722C" },
      { label: "Natural Light", color: "#277DA1" },
      { label: "5 Stars", color: "#F9C74F" },
    ],
    image:
      "https://library.mcmaster.ca/sites/default/files/uploaded_files/20150312_1459.jpg",
  },
  {
    title: "MUSC (McMaster University Student Centre) Atrium",
    description:
      "A bustling common area with tables and chairs perfect for group work, located near various food options.",
    tags: [
      { label: "Common Area", color: "#90BE6D" },
      { label: "Moderate Noise", color: "#F8961E" },
      { label: "Airy/Open Space", color: "#F8961E" },
      { label: "Wheelchair Accessible", color: "#43AA8B" },
      { label: "Close to Public Transit", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Nearby Restrooms", color: "#F3722C" },
      { label: "For Group Study", color: "#577590" },
      { label: "Close to Food Options", color: "#4D908E" },
      { label: "Close to Coffee Shops", color: "#4D908E" },
      { label: "4 Stars", color: "#F9C74F" },
    ],
    image:
      "https://muscmcmaster.ca/wp-content/uploads/2016/08/atrium2-1024x768.jpg",
  },
  {
    title: "Thode Library (Basement Study Pods)",
    description:
      "Private study pods available in the basement, perfect for focused individual or group study sessions.",
    tags: [
      { label: "Private Room", color: "#90BE6D" },
      { label: "Quiet", color: "#F8961E" },
      { label: "Cozy", color: "#F8961E" },
      { label: "Elevator Nearby", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Power Outlets", color: "#F3722C" },
      { label: "Large Tables", color: "#F3722C" },
      { label: "For Individual Study", color: "#577590" },
      { label: "For Group Study", color: "#577590" },
      { label: "Bookable Space", color: "#5F67BF" },
      { label: "5 Stars", color: "#F9C74F" },
    ],
    image:
      "https://images.squarespace-cdn.com/content/v1/5cb0c0dfab1a625324607ed3/1564156689309-0F3BY4YFXXHKZYYHLUW1/20081023_0285_smaller.jpg?format=1000w",
  },
  {
    title: "Peter George Centre for Living and Learning (PGCLL) Study Lounges",
    description:
      "Brightly lit study lounges in PGCLL with modern seating and large tables for group discussions.",
    tags: [
      { label: "Common Area", color: "#90BE6D" },
      { label: "Brightly Lit", color: "#F8961E" },
      { label: "Airy/Open Space", color: "#F8961E" },
      { label: "Wheelchair Accessible", color: "#43AA8B" },
      { label: "Elevator Nearby", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Power Outlets", color: "#F3722C" },
      { label: "Large Tables", color: "#F3722C" },
      { label: "For Group Study", color: "#577590" },
      { label: "Natural Light", color: "#277DA1" },
      { label: "Near Dormitories", color: "#4D908E" },
      { label: "5 Stars", color: "#F9C74F" },
    ],
    image:
      "https://aercoustics.com/wp-content/uploads/2023/06/234-DSAI-PGCLL-1024x683.jpg",
  },
  {
    title: "Burke Science Building (BSB) Courtyard",
    description:
      "An outdoor space surrounded by greenery, ideal for studying during sunny weather with a refreshing atmosphere.",
    tags: [
      { label: "Outdoor", color: "#90BE6D" },
      { label: "Quiet", color: "#F8961E" },
      { label: "Airy/Open Space", color: "#F8961E" },
      { label: "Nearby Parking", color: "#43AA8B" },
      { label: "Bike Racks Available", color: "#43AA8B" },
      { label: "For Individual Study", color: "#577590" },
      { label: "Natural Light", color: "#277DA1" },
      { label: "Plant-Rich Environment", color: "#277DA1" },
      { label: "View/Scenic Spot", color: "#5F67BF" },
      { label: "4 Stars", color: "#F9C74F" },
    ],
    image:
      "https://manteconpartners.com/wp-content/uploads/2017/07/MTP-BSB-0819_100-1.jpg",
  },
  {
    title: "Mills Memorial Library Learning Commons",
    description:
      "A 24/7 accessible study area with collaborative spaces, large tables, and whiteboards for brainstorming.",
    tags: [
      { label: "Common Area", color: "#90BE6D" },
      { label: "Moderate Noise", color: "#F8961E" },
      { label: "Brightly Lit", color: "#F8961E" },
      { label: "Wheelchair Accessible", color: "#43AA8B" },
      { label: "Elevator Nearby", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Large Tables", color: "#F3722C" },
      { label: "Whiteboard Available", color: "#F3722C" },
      { label: "For Group Study", color: "#577590" },
      { label: "24/7 Availability", color: "#5F67BF" },
      { label: "5 Stars", color: "#F9C74F" },
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Learning_Commons_in_Mills_Memorial_Library_at_McMaster_University.jpg/800px-Learning_Commons_in_Mills_Memorial_Library_at_McMaster_University.jpg?20160105154603",
  },
  {
    title: "Engineering Technology Building (ETB) Café Lounge",
    description:
      "A café-style study area with cozy seating, proximity to coffee, and a relaxing ambiance.",
    tags: [
      { label: "Café", color: "#90BE6D" },
      { label: "Cozy", color: "#F8961E" },
      { label: "Moderate Noise", color: "#F8961E" },
      { label: "Close to Public Transit", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Power Outlets", color: "#F3722C" },
      { label: "Close to Coffee Shops", color: "#4D908E" },
      { label: "Close to Water Fountains", color: "#4D908E" },
      { label: "4 Stars", color: "#F9C74F" },
    ],
    image:
      "https://rebuildhamilton.com/wp-content/uploads/2013/07/image-19.jpeg?w=500&h=375",
  },
  {
    title: "Hamilton Hall (HH) Common Study Area",
    description:
      "A common study area with vintage architecture, moderate noise, and large windows offering natural light.",
    tags: [
      { label: "Common Area", color: "#90BE6D" },
      { label: "Moderate Noise", color: "#F8961E" },
      { label: "Brightly Lit", color: "#F8961E" },
      { label: "Wheelchair Accessible", color: "#43AA8B" },
      { label: "Wi-Fi", color: "#F3722C" },
      { label: "Large Tables", color: "#F3722C" },
      { label: "For Group Study", color: "#577590" },
      { label: "Natural Light", color: "#277DA1" },
      { label: "4 Stars", color: "#F9C74F" },
    ],
    image:
      "https://images.ctfassets.net/beh2ph2tgbqk/57VmVQSfyS6skqU0u184L5/cc75e939dc97f8004f93175e210e0540/4.3.16-Hamilton-Lounge-210223-JW-2400x2479.jpg",
  },
  {
    title: "Togo Salmon Hall (TSH) Study Rooms",
    description:
      "Quiet private rooms with bookable spaces, perfect for exam preparation or creative work sessions.",
    tags: [
      { label: "Private Room", color: "#90BE6D" },
      { label: "Quiet", color: "#F8961E" },
      { label: "Cozy", color: "#F8961E" },
      { label: "Elevator Nearby", color: "#43AA8B" },
      { label: "Power Outlets", color: "#F3722C" },
      { label: "Whiteboard Available", color: "#F3722C" },
      { label: "For Individual Study", color: "#577590" },
      { label: "Bookable Space", color: "#5F67BF" },
      { label: "5 Stars", color: "#F9C74F" },
    ],
    image:
      "https://hmc.humanities.mcmaster.ca/wp-content/uploads/sites/2/2024/05/hmc-tsh206-1-02-1920x1281.jpg",
  },
];

export default listingsData;
