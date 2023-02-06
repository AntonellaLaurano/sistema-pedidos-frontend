export interface Product {
  category_id: number;
  description: string;
  id: string;
  image_url: string;
  name: string;
  price: number;
}

export interface Category {
  id: string;
  name: string;
}