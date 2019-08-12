
export interface OpensearchQuery {
    text: string;
    role: string;
    startPage: string;
}

export interface Image {
    text: string;
    size: string;
}

export interface Track {
    name: string;
    artist: string;
    url: string;
    streamable: string;
    listeners: string;
    image: Image[];
    mbid: string;
}

export interface Trackmatches {
    track: Track[];
}

export interface Attr {
}

export interface Results {
    Query: OpensearchQuery;
    totalResults: string;
    startIndex: string;
    itemsPerPage: string;
    trackmatches: Trackmatches;
        attr: Attr;
    }

export interface RootObject {
    results: Results;
}

