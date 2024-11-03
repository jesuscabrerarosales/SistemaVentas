import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoProductosDto } from '../Types/pedido-productos/pedidoProductosDto.model';
import { API_ENDPOINTS } from '../app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class PedidoProductoService {

  constructor(private http: HttpClient) {}

  getPedidoProductos(): Observable<PedidoProductosDto[]> {
    return this.http.get<PedidoProductosDto[]>(API_ENDPOINTS.PEDIDOS_PRODUCTOS.GET);
  }

  getPedidoProductoById(id: number): Observable<PedidoProductosDto> {
    return this.http.get<PedidoProductosDto>(`${API_ENDPOINTS.PEDIDOS_PRODUCTOS.GET_BY_ID}/${id}`);
  }

  createPedidoProducto(pedidoProducto: PedidoProductosDto): Observable<PedidoProductosDto> {
    return this.http.post<PedidoProductosDto>(API_ENDPOINTS.PEDIDOS_PRODUCTOS.POST, pedidoProducto);
  }

  updatePedidoProducto(id: number, pedidoProducto: PedidoProductosDto): Observable<PedidoProductosDto> {
    return this.http.put<PedidoProductosDto>(`${API_ENDPOINTS.PEDIDOS_PRODUCTOS.PUT}/${id}`, pedidoProducto);
  }

  deletePedidoProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.PEDIDOS_PRODUCTOS.DELETE}/${id}`);
  }
}
