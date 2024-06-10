import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';
import {SimulationNodeDatum, SimulationLinkDatum} from 'd3';
interface NodeDatum extends SimulationNodeDatum {
  id: string;
}

@Component({
  selector: 'app-redes-sis',
  templateUrl: './redes-sis.component.html',
  styleUrls: ['./redes-sis.component.css'],

})
export class RedesSisComponent implements OnInit, AfterViewInit {
  @ViewChild('container', { static: false }) container!: ElementRef;

  nodes: NodeDatum[] = [];
  links: SimulationLinkDatum<NodeDatum>[] = [];

  ngOnInit() {
    this.nodes = [
      { id: '1', fx: null, fy: null },
      { id: '2', fx: null, fy: null },
      { id: '3', fx: null, fy: null }
    ];

    this.links = [
      { source: this.nodes[0], target: this.nodes[1] },
      { source: this.nodes[1], target: this.nodes[2] },
      { source: this.nodes[2], target: this.nodes[0] }
    ];

    console.log('nodes:', this.nodes);
    console.log('links:', this.links);
  }

  ngAfterViewInit() {
    const svg = d3.select(this.container.nativeElement)
      .append('svg')
      .attr('width', 800)
      .attr('height', 600);

    const simulation = d3.forceSimulation(this.nodes)
      .force('link', d3.forceLink(this.links).id((d: any, i: number, nodesData: SimulationNodeDatum[]) => d.id ? d.id : '').distance(200)) // Ajusta la distancia de los enlaces
      .force('charge', d3.forceManyBody().strength(-500)) // Ajusta la fuerza de repulsión
      .force('center', d3.forceCenter(800 / 2, 600 / 2));

    const link = svg.append('g')
      .selectAll('line')
      .data(this.links)
      .join('line')
      .attr('stroke', 'black');

    const node = svg.append('g')
      .selectAll('circle')
      .data(this.nodes)
      .join('circle')
      .attr('r', 20)
      .attr('fill', 'blue')

    simulation.on('tick', () => {
      link
        .attr('x1', d => ((d.source as NodeDatum).x as number))
        .attr('y1', d => ((d.source as NodeDatum).y as number))
        .attr('x2', d => ((d.target as NodeDatum).x as number))
        .attr('y2', d => ((d.target as NodeDatum).y as number));

      node
        .attr('cx', d => (d.x as number))
        .attr('cy', d => (d.y as number));
    });
  }

}
