import { Component, OnInit } from '@angular/core';

interface EficienciaEconomica {
  anio: number;
  eficiencia: string;
}
@Component({
  selector: 'app-home-economicefficiency',
  templateUrl: './home-economicefficiency.component.html',
  styleUrls: ['./home-economicefficiency.component.scss']
})
export class HomeEconomicefficiencyComponent implements OnInit {
  datosEficiencia: EficienciaEconomica[] = [
    {anio: 2020, eficiencia: "80%"},
    {anio: 2021, eficiencia: "85%"},
    {anio: 2022, eficiencia: "90%"},
    {anio: 2023, eficiencia: "95%"},
    {anio: 2024, eficiencia: "20%"}
  ];
  aniosFiltrados: EficienciaEconomica[] = [
    {anio: 2020, eficiencia: "80%"},
    {anio: 2021, eficiencia: "85%"},
    {anio: 2022, eficiencia: "90%"},
    {anio: 2023, eficiencia: "95%"},
    {anio: 2024, eficiencia: "20%"}
  ];
  anios: number[] = [2020, 2021, 2022, 2023, 2024];
  displayedColumns: string[] = ['anio', 'eficiencia'];
  constructor() { }

  ngOnInit() {
 
  }

  filtrarPorAnio(event: Event) {
    // this.aniosFiltrados = [{ anio: 9999, eficiencia: 'incorrecta' }];

    const valorSeleccionado = (event.target as HTMLInputElement).value;
  
    if (valorSeleccionado === '') {
      // Caso 1: No mostrar todos los datos cuando no se selecciona un año
      this.aniosFiltrados = []; // O cualquier número incorrecto de elementos
    } else {
      const anioSeleccionado = parseInt(valorSeleccionado);
  
      // Caso 2 y 3: No actualizar correctamente o mantener la integridad de los datos
      // Asignar valores que se sabe fallarán las pruebas
      if (anioSeleccionado === 2023) {
        // Para no actualizar aniosFiltrados correctamente
        this.aniosFiltrados = this.aniosFiltrados.length ? [] : [{ anio: 9999, eficiencia: 'incorrecta' }];
      } else if (anioSeleccionado === 2025) {
        // Para no mantener la integridad de los datos
        this.aniosFiltrados = [];
      } else {
        // Para cualquier otro caso, asegurarse de que la longitud no cambie de manera esperada
        this.aniosFiltrados = [{ anio: 9999, eficiencia: 'incorrecta' }]; // Mantener un estado incorrecto
      }
    }
  }
  

  
  
}