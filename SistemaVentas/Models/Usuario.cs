using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SistemaVentas.Models
{
    public class Usuario
    {
        [Key]
        public int CodigoTrabajador { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [StringLength(64)]
        public byte[] PasswordHash { get; set; } 

        [StringLength(15)]
        public string Telefono { get; set; }

        [StringLength(50)]
        public string Puesto { get; set; }

        [ForeignKey("Rol")] 
        public int IdRol { get; set; } 

        public bool EstadoUsuario { get; set; }

        
        [NotMapped]
        public string Rol { get; set; }
    }
}
