export class Record {
    constructor(institution = "", position = "", status = "", description = "", link = "", tags = []) {
        this.institution = institution;
        this.position = position;
        this.status = status;
        this.description = description;
        this.link = link;
        this.tags = tags;
    }
}

export class Filter {
    constructor(id = "", records = []) {
        this.id = id;
        this.records = records   
    }
}

/*
Inputs: data to be parsed through, and type of data (either software/design, photo, or projects)
Outputs: Record instances within Filter
Purpose: Parsing through data depending on type requested and creating Filter with classes to be called in later functions
*/
export function fetchRecords(data, type) {

    const filter = new Filter();
    filter.type = type;

    for (let i = 0; i < data[type].length; i ++)
    {
        const record = new Record();
        record.institution = data[type][i].institution;
        record.position = data[type][i].position;
        record.status = data[type][i].status;
        record.description = data[type][i].description;
        record.link = data[type][i].link;
        record.tags = data[type][i].tags;
        filter.records.push(record);
    }

    return filter;

}