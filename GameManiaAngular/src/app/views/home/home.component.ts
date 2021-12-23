import { Component, OnInit } from '@angular/core';
import { EmailNewsletter } from 'src/app/models/email-newsletter';
import { Produtos } from 'src/app/models/produtos';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaProdutos = [] as Produtos[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.getProdutos().subscribe( (produtosRecebidos: Produtos[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos)
    })
  }

  emailnewsletterModel = new EmailNewsletter("")

  onSubmit() {
    console.log(this.emailnewsletterModel)
  }

}
