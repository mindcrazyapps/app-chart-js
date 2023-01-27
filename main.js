import { labels, data, borderwidth, beginAtZero} from  "./constants.js";
import { getElementById, typechart, label} from  "./module.js";
export const const ObjectHere = Object.freeze({ id: getElementById('myChart'), typechart: typechart('bar'),  labels: labels, data: data, label: label('# of Votes'), borderwidth:borderwidth, beginAtZero:beginAtZero})
