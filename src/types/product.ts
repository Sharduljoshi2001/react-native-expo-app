//structure for single product that the API will fetch for us
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
//data to be send to server
export interface CreatePostData {
  title: string;
  body: string;
  userId: number;
}
//servers response
export interface PostResponse {
  id: number;
  title: string;
  body: string;
  userId: number;
}
