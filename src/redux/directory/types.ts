export interface Section {
  title: string;
  imageUrl: string;
  id: number;
  linkUrl: string;
  size?: string;
}

export interface DirectoryState {
  sections: Section[];
}
