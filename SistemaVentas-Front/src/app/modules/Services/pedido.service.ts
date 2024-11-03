import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PedidoDto } from '../Types/pedido/pedidoDto.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<PedidoDto[]> {
    return this.http.get<PedidoDto[]>(API_ENDPOINTS.PEDIDO.GET);
  }

  getPedidoById(id: number): Observable<PedidoDto> {
    return this.http.get<PedidoDto>(`${API_ENDPOINTS.PEDIDO.GET_BY_ID}/${id}`);
  }

  createPedido(pedido: PedidoDto): Observable<PedidoDto> {
    return this.http.post<PedidoDto>(API_ENDPOINTS.PEDIDO.POST, pedido);
  }

  updatePedido(id: number, pedido: PedidoDto): Observable<PedidoDto> {
    return this.http.put<PedidoDto>(`${API_ENDPOINTS.PEDIDO.PUT}/${id}`, pedido);
  }

  deletePedido(id: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.PEDIDO.DELETE}/${id}`);
  }
}
