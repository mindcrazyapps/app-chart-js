export class BarChart {
  constructor(id, typechart, labels, data, label, borderwidth, beginAtZero) {
    this.id = id;
    this.typechart= typechart;
    this.labels= labels;
    this.data= data;
    this.label= label;
    this.borderwidth= borderwidth;
    this.beginAtZero= beginAtZero;
  }
  generateGraph() {
    return new Chart(this.id, {
        type: this.typechart,
        data: {
          labels: this.labels,
          datasets: [
            {
              label: this.label,
              data: this.data,
              borderWidth: this.borderwidth,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: this.beginAtZero,
            },
          },
        },
      }); 
    }
  }
