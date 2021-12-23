import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  // Variavel criada para armazenar o endereço da API
  url = "http://localhost:3000/produtos";

  // Insere a dependencia HttpCLient
  constructor(private httpClient: HttpClient) { }

  // Variável que armazena as configurações dos Headers da requisição
  httpOptions = {
    hearders: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Método GET, que vai trazer as notícias da API
  getProdutos(): Observable<Produtos[]>{
    return this.httpClient.get<Produtos[]>(this.url)
  }

}
