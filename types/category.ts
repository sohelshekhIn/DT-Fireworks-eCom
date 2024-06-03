type Category = {
  id: string;
  name: string;
  thumb_image: string;
  isOccassion?: boolean;
  isVisible?: boolean;
};

type Occassion = {
  id: string;
  name: string;
  thumb_image: string;
  isVisible?: boolean;
  header_image: string;
};

export type { Category, Occassion };
