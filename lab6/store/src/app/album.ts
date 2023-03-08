export interface Album {
    id: number;
    title: string;
}

export interface Gallery {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}