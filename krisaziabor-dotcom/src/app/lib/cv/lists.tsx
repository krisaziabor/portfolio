import {fetchRecords} from "../cv/model"
import { rawData, rawExtra } from "../cv/raw"

export const softwareDesign = fetchRecords(rawData, "software");
export const photo = fetchRecords(rawData, "photo");
export const projects = fetchRecords(rawData, "projects");

export const extraSoftware = fetchRecords(rawExtra, "software");
export const extraPhoto = fetchRecords(rawExtra, "photo");
export const extraProjects = fetchRecords(rawExtra, "projects");