import linkus from "./linkus";
import fidelity from "./fidelity";
import fiftytwox from "./52x";
import photos from "./photos";
import crookes from "./crookes";
import designatyale from "./day";


const projectTypes = [
  {
    typeID: 1,
    name: "Product",
  },
  {
    typeID: 2,
    name: "Fine Arts",
  },
  {
    typeID: 3,
    name: "Writing",
  },
];

// Sample project data - replace with your actual projects
const projects = [
  linkus,
  designatyale,
  fidelity,
  fiftytwox,
  ...photos,
  crookes,
];

export { projects, projectTypes };
