//structure for siongle product that the API will fetch for us
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}
//API response will be like thi(array of products)
export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
