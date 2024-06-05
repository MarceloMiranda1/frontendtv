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

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "basic",
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
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
          "Dificultad Manejo Emocional - Adecuado Manejo Emocional ",
          "Canada",
          "United Kingdom",
          "Netherlands",
          "Italy",
          "France",
          "Japan",
          "United States",
          "China",
          "Germany"
        ]
      },

    };
  }

  ngOnInit(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();
  }
}
