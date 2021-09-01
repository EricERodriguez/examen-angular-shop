import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //llamo Date para poder traer los años y dejarlo directamente guardado en la variable annon, asi utilizar en el footer y no estar cambiando continuamente
  date = new Date()
  annon = this.date.getFullYear()

}
