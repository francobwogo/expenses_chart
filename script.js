const data = [
  {
    day: "mon",
    amount: 17.45
  },
  {
    day: "tue",
    amount: 34.91
  },
  {
    day: "wed",
    amount: 52.36
  },
  {
    day: "thu",
    amount: 31.07
  },
  {
    day: "fri",
    amount: 23.39
  },
  {
    day: "sat",
    amount: 43.28
  },
  {
    day: "sun",
    amount: 25.48
  }
];

const ctx = document.getElementById('myChart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: data.map(item => item.day),
    datasets: [{
      label: 'Amount',
      data: data.map(item => item.amount),
      backgroundColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
      ],
      borderColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
      ],
      borderWidth: 0,
      borderRadius: 5,
      borderSkipped: false,
      hoverBackgroundColor: [
        '#FF9B87',
        '#FF9B87',
        '#B4DFE5',
        '#FF9B87',
        '#FF9B87',
        '#FF9B87',
        '#FF9B87'
      ]
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          // title: () => null // or function () { return null; }
          title: (tooltipItems) => {
            return '$' + tooltipItems[0].formattedValue;
          },
          label: () => null
        }
      }
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true,
        color: false
      },
      x: {
        grid: {
          display: false
          // drawOnChartArea: false,
          // drawBorder: false,
          // color: false
        }
      }
    }
  }
});