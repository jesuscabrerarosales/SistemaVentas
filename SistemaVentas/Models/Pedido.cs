using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaVentas.Models
{
    public class Pedidos
    {
        [Key]
        public int NroPedido { get; set; }

        [Required]
        public DateTime FechaPedido { get; set; } = DateTime.Now;

        public DateTime? FechaDespacho { get; set; }
        public DateTime? FechaEntrega { get; set; }

        [Required]
        public int IdVendedor { get; set; }

        public int? IdDelivery { get; set; }

        [ForeignKey("IdEstado")]
        public int IdEstado { get; set; }

        public virtual Usuario Vendedor { get; set; }
        public virtual Usuario Delivery { get; set; }

        public virtual ICollection<PedidoProductos> Detalles { get; set; }
    }
}
