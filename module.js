export const ctx = document.getElementById("myChart");
export const typeChart = "bar";
export const array_labels = ["Reds", "Blue", "Yellow", "Green", "Purple", "Orange"];
export const array_data = [12, 19, 3, 5, 2, 3];
export const string_label = "# of Votes";
export const border_width = 1;
export const begin_at_zero = true;
export class BarChart {
  constructor(id, typechart, labels, data, borderwidth, beginAtZero) {
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

export {BarChart};
