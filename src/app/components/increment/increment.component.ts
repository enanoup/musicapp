import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html'
})
export class IncrementComponent implements OnInit {

  // Cambia el atributa de leyenda a nombre
  @Input('nombre') leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  // emitir un numero como evento
  @Output() eventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  cambiarValor( valor: number ) {

      if ( this.porcentaje <= 0 && valor < 0) {
        this.porcentaje = 0;
        return;
      }

      if ( this.porcentaje >= 100 && valor > 0) {
        this.porcentaje = 100;
        return;
      }

      this.porcentaje += valor;

      this.eventEmitter.emit(this.porcentaje);
  }

}
