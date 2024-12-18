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
          name: "Decatipo",
          data: this.data.total.map((item: any) => item.valor)
        }
      ],
      chart: {
        type: "bar",
        height: 500,
        toolbar: {
          export: {
            csv: {
              show: false,
            },
            svg: {
              show: false,
            },
            png: {
              show: true,
              filename: "Prueba HSPQ"
            }
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          horizontal: true,
          barHeight: '20px', // Ajusta este valor según tus necesidades
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }

      },
      dataLabels: {
        enabled: false
      },
      title: {
        text: "Gráfica Prueba HSPQ",
        align: 'center',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      xaxis: {
        categories: [
          "Reservado-Abierto",
          "Afectado-Estable",
          "Calmado-Excitable",
          "Sumiso-Dominante",
          "Sobrio-Entusiasta",
          "Despreocupado-Consciente",
          "Cohibido-Emprendedor",
          "Sensibilidad Dura-Blanda",
          "Seguro-Dubitativo",
          "Sereno-Aprensivo",
          "Sociable-Autosuficiente",
          "Menos-Mas integrado",
          "Relajado-Tenso"
        ]
      },
      colors: ['#DE7963', '#DE63AF', '#F5B769', '#63CDDE', '#CEEA5A', '#6376DE', '#63DED1', '#CFA6F8', '#F95C98', '#73E6A6', '#9DFE7E', '#71E6EA', '#9E44F0']
    };
  }

  ngOnInit(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();
  }
}
