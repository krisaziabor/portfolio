import linkus from "./linkus";
import fidelity from "./fidelity";
// import fiftytwox from "./52x";
import photos from "./photos";
import crookes from "./crookes";
import designatyale from "./day";
// import snippets from "./snippets";


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
  ...photos,
  crookes,
];

export { projects, projectTypes };
