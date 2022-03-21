import { Component, OnInit } from '@angular/core';
import { CarroufService } from '../services/carrouf.service';

@Component({
  selector: 'app-jan-cornelis',
  templateUrl: './jan-cornelis.component.html',
  styleUrls: ['./jan-cornelis.component.scss'],
})
export class JanCornelisComponent implements OnInit {
  prenom: string = 'Bernard';
  totos: string[] = ['mange', 'mes', 'couilles'];
  bonbon: string;
  constructor(private _propertieCarroufService: CarroufService) {
    this.bonbon = this._propertieCarroufService.getBonbon();
  }
  public bonbs(): void {
    return console.log(this._propertieCarroufService.getBonbon());
  }

  ngOnInit(): void {}
}
