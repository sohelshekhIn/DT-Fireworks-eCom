type Category = {
  id: string;
  name: string;
  thumb_image: string;
  isOccasion?: boolean;
  isVisible?: boolean;
};

type Occasion = {
  id: string;
  name: string;
  thumb_image: string;
  isVisible?: boolean;
  header_image: string;
};

export type { Category, Occasion };
