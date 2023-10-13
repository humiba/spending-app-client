const links = [
  {
    pageGroup: "Main",
    pages: [
      {
        id: 1,
        name: "Dashboard",
        url: "/",
        icon: "fa-solid fa-note-sticky",
      },
      {
        id: 2,
        name: "Analytics & Reports",
        url: "/analytics",
        icon: "fa-solid fa-chart-line",
      },
    ],
  },
  {
    pageGroup: "Spending",
    pages: [
      {
        id: 3,
        name: "Spending",
        url: "/spending/all",
        icon: "fa-solid fa-money-bill-transfer",
      },
      {
        id: 4,
        name: "Add Spending",
        url: "/spending/add",
        icon: "fa-solid fa-square-plus",
      },
    ],
  },
  {
    pageGroup: "Spending Category",
    pages: [
      {
        id: 5,
        name: "Spending Categories",
        url: "/category/all",
        icon: "fa-solid fa-star",
      },
      {
        id: 6,
        name: "Add Spending Category",
        url: "/category/add",
        icon: "fa-solid fa-square-plus",
      },
    ],
  },
];

export { links };
