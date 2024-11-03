import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../app-endpoints';
import { EstadoPedidoDto } from '../Types/estado-pedido/estadoPedido.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadoPedidoService {

  constructor(private http: HttpClient) {}

  getEstadoPedidos(): Observable<EstadoPedidoDto[]> {
    return this.http.get<EstadoPedidoDto[]>(API_ENDPOINTS.ESTADO_PEDIDO.GET);
  }

  getEstadoPedidoById(id: number): Observable<EstadoPedidoDto> {
    return this.http.get<EstadoPedidoDto>(`${API_ENDPOINTS.ESTADO_PEDIDO.GET_BY_ID}/${id}`);
  }

  createEstadoPedido(estadoPedido: EstadoPedidoDto): Observable<EstadoPedidoDto> {
    return this.http.post<EstadoPedidoDto>(API_ENDPOINTS.ESTADO_PEDIDO.POST, estadoPedido);
  }

  updateEstadoPedido(id: number, estadoPedido: EstadoPedidoDto): Observable<EstadoPedidoDto> {
    return this.http.put<EstadoPedidoDto>(`${API_ENDPOINTS.ESTADO_PEDIDO.PUT}/${id}`, estadoPedido);
  }

  deleteEstadoPedido(id: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.ESTADO_PEDIDO.DELETE}/${id}`);
  }
}
