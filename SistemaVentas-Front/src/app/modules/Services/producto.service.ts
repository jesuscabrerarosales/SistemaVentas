import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductoDto } from '../Types/producto/productoDto.model';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from '../app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) {}

  getProductos(): Observable<ProductoDto[]> {
    return this.http.get<ProductoDto[]>(API_ENDPOINTS.PRODUCTOS.GET);
  }

  getProductoById(id: number): Observable<ProductoDto> {
    return this.http.get<ProductoDto>(`${API_ENDPOINTS.PRODUCTOS.GET_BY_ID}/${id}`);
  }

  createProducto(producto: ProductoDto): Observable<ProductoDto> {
    return this.http.post<ProductoDto>(API_ENDPOINTS.PRODUCTOS.POST, producto);
  }

  updateProducto(id: number, producto: ProductoDto): Observable<ProductoDto> {
    return this.http.put<ProductoDto>(`${API_ENDPOINTS.PRODUCTOS.PUT}/${id}`, producto);
  }

  deleteProducto(id: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.PRODUCTOS.DELETE}/${id}`);
  }
}
