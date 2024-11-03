using System.ComponentModel.DataAnnotations;

namespace SistemaVentas.Models
{
    public class EstadoPedido
    {
        [Key]
        public int IdEstado { get; set; }

        [Required]
        [StringLength(50)]
        public string NombreEstado { get; set; }
    }
}
