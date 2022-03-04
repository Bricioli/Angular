import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  /* Define as constantes utilizadas para operações matematicas */

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';

  constructor() { }
  /**  metodo responsavel por realizar o calculo de dois numbers e retornar o resultado.
   * suporta operacoes de soma, subtracao, multiplicacao e divisao
   * @param num1 number
   * @param num2 number
   * @param operação string operacao a ser realizada
   * @return number Resultado da operacao
   * **/
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case (CalculadoraService.SUBTRACAO):
        resultado = num1 - num2;
        break;
      case (CalculadoraService.DIVISAO):
        resultado = num1 / num2;
        break;
      case (CalculadoraService.MULTIPLICACAO):
        resultado = num1 * num2;
        break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
