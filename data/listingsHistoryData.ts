const listingsHistoryData = [
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
    reviews: [
      {
        username: "JohnDoe123",
        rating: 5,
        description: "Great ambiance and perfect lighting for studying!",
      },
      {
        username: "StudyQueen",
        rating: 4,
        description:
          "Nice space, but sometimes too many people make it less quiet.",
      },
      {
        username: "Bookworm99",
        rating: 5,
        description: "Loved the natural light and individual desks.",
      },
    ],
    hasReview: false,
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
    reviews: [
      {
        username: "GroupGuru",
        rating: 5,
        description: "Perfect for group projects, loved the atmosphere!",
      },
      {
        username: "Foodie123",
        rating: 4,
        description:
          "Conveniently located near food options, but a bit noisy sometimes.",
      },
      {
        username: "LivelyLearner",
        rating: 4,
        description: "Great for collaborative work but too crowded at times.",
      },
    ],
    hasReview: true,
  },
];

export default listingsHistoryData;
