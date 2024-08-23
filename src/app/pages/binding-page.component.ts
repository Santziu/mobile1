import { Component } from '@angular/core';

@Component(
  {
    selector: 'app-binding',
    template: `
    <h1>Imagem do Angular</h1>
    <img src="https://as2.ftcdn.net/v2/jpg/02/95/03/85/1000_F_295038583_mn0uxJ6A0YO57HA4xXQqHFUjiW1BcqBE.jpg"/>
    `
  }
)

export class BindingPageComponent {
  imagem = ""
}
