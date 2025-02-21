import {Injectable} from '@angular/core';
import {ProductType} from "../../../types/productType";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = []


  // private products: ProductType[] = [
  //   {
  //     id: 1,
  //     image: 'pizza1.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы'
  //   },
  //   {
  //     id: 2,
  //     image: 'pizza2.png',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось'
  //   },
  //   {
  //     id: 3,
  //     image: 'pizza3.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста'
  //   },
  //   {
  //     id: 4,
  //     image: 'pizza4.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'
  //   },
  //   {
  //     id: 5,
  //     image: 'pizza5.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбкею, сыр, курица, соус для пиццы, соус чили'
  //   },
  //   {
  //     id: 6,
  //     image: 'pizza6.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная'
  //   },
  //   {
  //     id: 7,
  //     image: 'pizza7.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы'
  //   },
  //   {
  //     id: 8,
  //     image: 'pizza8.png',
  //     title: 'Сырная',
  //     description: 'Сыр Джюгас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный'
  //   }]
  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>(environment.apiURL + 'pizzas')
  }

  getProduct(id: number): Observable<ProductType> | undefined {
    return this.http.get<ProductType>(environment.apiURL + `pizzas?id=${id}`)
  }

  createOrder(data:{product:string, address:string, phone:string}){
    return this.http.post<{success:boolean, message?:string}>(environment.apiURL + `order-pizza`, data)

  }

}
