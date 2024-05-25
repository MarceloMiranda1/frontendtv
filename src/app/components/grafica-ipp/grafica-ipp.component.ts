import { Component, Inject, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-grafica-ipp',
  templateUrl: './grafica-ipp.component.html',
  styleUrls: ['./grafica-ipp.component.css']
})
export class GraficaIppComponent implements OnInit {

  public chartOptions: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.chartOptions = {
      series: [
        {
          name: "Actividad (AC)",
          data: this.data.percentil.map((item: any) => item.AC)
        },
        {
          name: "Profesión (PR)",
          data: this.data.percentil.map((item: any) => item.PR)
        },

      ],
      chart: {
        type: "bar",
        height: 500
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Científico-Experimental",
          "Científico-Técnico",
          "Científico-Sanitario",
          "Teórico-Humanista",
          "Literario",
          "Psicopedagógico",
          "Político-Social",
          "Económico-Empresarial",
          "Persuasivo-Comercial",
          "Administrativo",
          "Deportivo",
          "Agropecuario",
          "Artístico-Musical",
          "Artístico-Plástico",
          "Militar-Seguridad",
          "Aventura-Riesgo",
          "Mecánico-Manual"
        ]
      },
      yaxis: {
        title: {
          text: "Puntaje"
        }
      },
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val:number) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

  ngOnInit(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();
  }

}
