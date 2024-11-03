import { PedidoDto } from "../pedido/pedidoDto.model";
import { ProductoDto } from "../producto/productoDto.model";

export interface PedidoProductosDto {
  NroPedido: number;
  SKU: number;
  Cantidad: number;
  PrecioUnitario: number;
  Pedidos?: PedidoDto;
  Producto?: ProductoDto;
}
