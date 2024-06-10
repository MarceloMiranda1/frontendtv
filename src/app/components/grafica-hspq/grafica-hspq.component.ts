import {Component, Inject, OnInit} from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-grafica-hspq',
  templateUrl: './grafica-hspq.component.html',
  styleUrls: ['./grafica-hspq.component.css']
})
export class GraficaHspqComponent implements OnInit {

  public chartOptions: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [this.data]
        }
      ],
      chart: {
        type: "bar",
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: [
          "Reservado - Abierto",
          "Emocionalmente Afectado - Estable",
          "Calmado - Excitable",
          "Sumiso - Dominante",
          "Sobrio - Entusiasta",
          "Despreocupado - Consciente",
          "Cohibido - Emprendedor",
          "Sensibilidad Dura - Blanda",
          "Seguro - Dubitativo",
          "Sereno - Aprensivo",
          "Sociable - Autosuficiente",
          "Menos - Mas integrado",
          "Relajado - Tenso"

        ]
      },

    };
  }

  ngOnInit(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();
  }
}
