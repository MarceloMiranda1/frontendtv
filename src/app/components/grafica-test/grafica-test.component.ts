import {Component, Inject, OnInit} from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
@Component({
  selector: 'app-grafica-test',
  templateUrl: './grafica-test.component.html',
  styleUrls: ['./grafica-test.component.css']
})
export class GraficaTestComponent implements OnInit {

  public chartOptions: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.chartOptions = {
      series: [
        {
          name: "Resultado",
          data: [this.data.total, 41, 35, 51, 49, 62, 69],
        }
      ],
      chart: {
        height: 350,
        type: "bar",
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
              filename: "Prueba DAT"
            }
          }
        }
      },
      plotOptions: {
        bar: {
          distributed: true,
          dataLabels: {
            position: "top" // top, center, bottom
          }
        }
      },
      dataLabels: {
        enabled: this.data.showNumbers,
        style: {
          fontSize: '12px',
          colors: ["#000000"]
        }
      },
      title: {
        text: "Grafica Prueba DAT"
      },

      xaxis: {
        categories: ["Verbal", "Numerico", "Abstracto", "Mecanico", "Espacial", "Ortografía", "Rapidez y Exactitud"],
        crosshairs: {
          fill: {
            type: "gradient",
            gradient: {
              colorFrom: "#D8E3F0",
              colorTo: "#BED1E6",
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5
            }
          }
        },
      },
      colors: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF', '#0dc4af']
    };
  }

  ngOnInit(): void {
    const chart = new ApexCharts(document.querySelector("#chart"), this.chartOptions);
    chart.render();
  }

}
