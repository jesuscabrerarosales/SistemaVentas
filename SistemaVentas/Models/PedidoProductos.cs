using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaVentas.Models
{
    public class PedidoProductos
    {
        [Key, Column(Order = 0)]
        public int NroPedido { get; set; }

        [Key, Column(Order = 1)]
        public int SKU { get; set; }

        [Required]
        public int Cantidad { get; set; }

        [Required]
        public decimal PrecioUnitario { get; set; }

        public virtual Pedidos Pedidos { get; set; }
        public virtual Productos Producto { get; set; }
    }
}
