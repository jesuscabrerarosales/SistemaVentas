import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDto } from '../Types/usuario/usuarioDto.model';
import { API_ENDPOINTS } from '../app-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(API_ENDPOINTS.USUARIOS.GET);
  }

  getUsuarioById(id: number): Observable<UsuarioDto> {
    return this.http.get<UsuarioDto>(`${API_ENDPOINTS.USUARIOS.GET_BY_ID}/${id}`);
  }

  createUsuario(usuario: UsuarioDto): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(API_ENDPOINTS.USUARIOS.POST, usuario);
  }

  updateUsuario(id: number, usuario: UsuarioDto): Observable<UsuarioDto> {
    return this.http.put<UsuarioDto>(`${API_ENDPOINTS.USUARIOS.PUT}/${id}`, usuario);
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${API_ENDPOINTS.USUARIOS.DELETE}/${id}`);
  }
}
