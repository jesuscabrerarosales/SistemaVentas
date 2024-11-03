import { PedidoProductosDto } from "../pedido-productos/pedidoProductosDto.model";
import { UsuarioDto } from "../usuario/usuarioDto.model";

export interface PedidoDto {
  NroPedido: number;
  FechaPedido: Date;
  FechaDespacho?: Date;
  FechaEntrega?: Date;
  IdVendedor: number;
  IdDelivery?: number;
  IdEstado: number;
  Vendedor?: UsuarioDto;
  Delivery?: UsuarioDto;
  Detalles?: PedidoProductosDto[];
}
