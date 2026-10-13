'using strict'

const polar = document.getElementById("polarArea");
new Chart(polar, {
  type: "polarArea",
  data: {
    labels: ["Stocks", "Bonds", "ETFs", "Crypto"],
    datasets: [
      {
        label: "Investment Distribution",
        data: [5000, 2000, 3000, 1000],
        borderWidth: 1,
        backgroundColor: [
          "rgb(14, 123, 195)",
          "rgb(85, 144, 115)",
          "rgb(201, 203, 207)",
          "rgb(171, 94, 16)",
        ],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Investment Distribution",
      },
    },
  },
});

// pie
const pie = document.getElementById("pie");
new Chart(pie, {
  type: "pie",
  data: {
    labels: ["Tech", "Healthcare", "Energy", "Finance"],
    datasets: [
      {
        labels: ["Tech", "Healthcare", "Energy", "Finance"],
        data: [40, 25, 15, 20],
        borderWidth: 1,
        backgroundColor: [
          "rgb(118, 149, 144)",
          "rgb(113, 151, 60)",
          "rgb(157, 159, 163)",
          "rgb(139, 77, 15)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Sector Allocation",
      },
    },
  },
});
const line = document.getElementById("line");
new Chart(line, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: ["Portfolio Growth ($)"],
        data: [10000, 12000, 14000, 13000, 15000, 17000],
        borderWidth: 1,
        borderColor: ["rgb(68, 87, 145)"],
        borderWidth: 3,
        fill: true,
        backgroundColor: ["rgba(175, 177, 182, 0.43)"],
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Portfolio Growth",
      },
    },
  },
});

const bar = document.getElementById("bar");
new Chart(bar, {
  type: "bar",

  data: {
    labels: ["January", "February", "March", "April", "May", "June"],

    datasets: [
      {
        label: "Monthly Expenses ($)",
        position: "top",
        data: [500, 600, 700, 800, 900, 1000],
        borderWidth: 1,
        backgroundColor: ["rgb(255, 102, 0)"],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Monthly Expenses ($)",
      },
    },
  },
});