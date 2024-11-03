using System.ComponentModel.DataAnnotations;

namespace SistemaVentas.Models
{
    public class Productos
    {
        [Key]
        public int SKU { get; set; }

        [Required]
        [StringLength(150)]
        public string Nombre { get; set; }

        [Required]
        [StringLength(50)]
        public string Tipo { get; set; }

        [StringLength(50)]
        public string Etiqueta { get; set; }

        [Required]
        public decimal Precio { get; set; }

        [Required]
        public int Unidad { get; set; }
    }
}
