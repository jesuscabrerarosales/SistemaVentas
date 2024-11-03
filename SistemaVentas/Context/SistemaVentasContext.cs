using Microsoft.EntityFrameworkCore;
using SistemaVentas.Models;

namespace SistemaVentas.Context
{
    public class SistemaVentasContext : DbContext
    {
        public SistemaVentasContext(DbContextOptions<SistemaVentasContext> options) : base(options) { }

        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Productos> Productos { get; set; }
        public DbSet<Pedidos> Pedidos { get; set; }
        public DbSet<EstadoPedido> EstadoPedidos { get; set; }
        public DbSet<PedidoProductos> DetallePedidos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PedidoProductos>()
                .Property(d => d.PrecioUnitario)
                .HasColumnType("decimal(18, 2)");

            modelBuilder.Entity<Productos>()
                .Property(p => p.Precio)
                .HasColumnType("decimal(18, 2)");

            modelBuilder.Entity<PedidoProductos>()
        .HasKey(pp => new { pp.NroPedido, pp.SKU});

            base.OnModelCreating(modelBuilder);
        }
    }
}
