export const toTop = {
  hidden: { opacity: 0, transform: "tranlateY(20px)" },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
    transform: "tranlateY(0)",
  },
};

export const toBottom = {
  hidden: { opacity: 0, transform: "tranlateY(-20px)" },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
    transform: "tranlateY(0)",
  },
};
