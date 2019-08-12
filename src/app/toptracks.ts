export interface Streamable {
    text: string;
    fulltrack: string;
}

export interface Artist {
    name: string;
    mbid: string;
    url: string;
}

export interface Image {
    text: string;
    size: string;
}

export interface Attr {
    rank: string;
}

export interface TopTrack {
    name: string;
    duration: string;
    mbid: string;
    url: string;
    streamable: Streamable;
    artist: Artist;
    image: Image[];
    attr: Attr;
}

export interface Attr2 {
    tag: string;
    page: string;
    perPage: string;
    totalPages: string;
    total: string;
}

export interface TopTracks {
    track: TopTrack[];
    attr: Attr2;
}

export interface RootObject {
    tracks: TopTracks;
}


