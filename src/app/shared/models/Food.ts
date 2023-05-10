export interface Foods {
  data: Array<FoodItem>;
}

export interface FoodItem {
  _id: string;
  id: string;
  name: string;
  price: number;
  tags: Array<TagItem>;
  favorite: boolean;
  stars: number;
  imageUrl: string;
  origins: Array<OriginItem>;
  cookTime: string;
  createdAt: string;
  updatedAt: string;
}

export interface Food {
  id: string;
  name: string;
  price: number;
  cookTime: string;
  favorite: boolean;
  origins: string[];
  stars: number;
  imageUrl: string;
  tags: string[];
}

export interface FoodItemOrder {
  food: Food;
  quantity: number;
  price: number;
}

export interface Order {
  items: FoodItemOrder[];
  totalPrice: number;
  addressLatLng: {
    lat: number;
    lng: number;
  };
  name: string;
  address: string;
}

export interface TagItem {
  name: string;
}
export interface OriginItem {
  name: string;
}
