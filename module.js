export const ctx = document.getElementById("myChart");
export const typeChart = "bar";
export const labels = ["Reds", "Blue", "Yellow", "Green", "Purple", "Orange"];
export const data = [12, 19, 3, 5, 2, 3];
export const label = "# of Votes";
export const borderwidth = 1;
export const beginAtZero = true;
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
