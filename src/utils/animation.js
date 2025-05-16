// Анімації
// Анімація переходу між сторінками
// App;
export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: "easeIn" } },
};
// Layout;
export const headerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
// ThemeSwitch;
export const animationsThemeSwitch = {
  button: {
    hover: { scale: 1.15, transition: { duration: 0.2 } },
    tap: { scale: 0.9 },
  },
  menu: {
    hidden: { opacity: 0, x: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      x: -120,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      x: 50,
      scale: 0.8,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  },
  item: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    hover: { scale: 1.2, transition: { duration: 0.2 } },
  },
};

// WelcomeSection;
export const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export const iconVariants = {
  hidden: { opacity: 0, rotate: -180, scale: 0.5 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// CatalogFilters;
export const animationsFilter = {
  dropdown: {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  },
  button: {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  },
  icon: {
    rotateUp: { rotate: 180, transition: { duration: 0.3 } },
    rotateDown: { rotate: 0, transition: { duration: 0.3 } },
  },
  listItem: {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    hover: { backgroundColor: "#f3f4f6", transition: { duration: 0.2 } },
  },
};

// CatalogList;
// Об'єкт з анімаціями
export const animations = {
  listItem: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  filter: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  },
  loadMoreButton: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 },
  },
};
// CatalogItem;
export const animationsItem = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  },
  avatar: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.3 },
    },
  },
  header: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.4 },
    },
  },
  text: {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.5 },
    },
  },
  name: {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.6 },
    },
  },
  rating: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.7 },
    },
  },
  favoriteButton: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: 0.8 },
    },
    hover: { scale: 1.1 },
  },
};
// TherapistProfile;
export const animationsProfile = {
  container: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  },
};

// ReviewsAccordion;

export const animationsReviewsAccordion = {
  button: {
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
  },
  accordion: {
    initial: { maxHeight: 0, opacity: 0 },
    animate: {
      maxHeight: "1000px",
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: {
      maxHeight: 0,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  },
  reviewItem: (index) => ({
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.1 },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }),
  avatar: {
    hover: { scale: 1.1 },
  },
  starIcon: {
    hover: { scale: 1.2, rotate: 10 },
  },
};
// MakeAnAppointment;
export const animationsMakeAnAppointment = {
  fadeInUp: (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
  }),
  button: {
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  },
};

// SignInForm; SignUpForm
export const animationsForm = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  },
};

// animationsNotFound;
export const animationsNotFound = {
  text: {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: [0, 2, -2, 0], // Легке гойдання при появі
      transition: { duration: 1, ease: "easeOut" },
    },
    floating: {
      y: [0, -3, 3, 0], // Дрейф вгору-вниз
      transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
    },
  },
  number: {
    hidden: { opacity: 0, filter: "blur(10px)", scale: 0.8 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
    floating: {
      rotate: [0, 1, -1, 0], // Легке хитання числа "404"
      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
    },
  },
  button: {
    hover: {
      scale: 1.1,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
      transition: { duration: 0.3 },
    },
  },
  background: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  },
};
