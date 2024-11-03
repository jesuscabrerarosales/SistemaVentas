export interface UsuarioDto {
  CodigoTrabajador: number;
  Nombre: string;
  Email: string;
  PasswordHash: string;
  Telefono: string;
  Puesto: string;
  IdRol: number;
  EstadoUsuario: boolean;
  Rol?: string;
}
