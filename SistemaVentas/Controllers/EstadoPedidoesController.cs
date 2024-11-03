﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaVentas.Context;
using SistemaVentas.Models;

namespace SistemaVentas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstadoPedidoesController : ControllerBase
    {
        private readonly SistemaVentasContext _context;

        public EstadoPedidoesController(SistemaVentasContext context)
        {
            _context = context;
        }

        // GET: api/EstadoPedidoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<EstadoPedido>>> GetEstadoPedidos()
        {
            return await _context.EstadoPedidos.ToListAsync();
        }

        // GET: api/EstadoPedidoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<EstadoPedido>> GetEstadoPedido(int id)
        {
            var estadoPedido = await _context.EstadoPedidos.FindAsync(id);

            if (estadoPedido == null)
            {
                return NotFound();
            }

            return estadoPedido;
        }

        // PUT: api/EstadoPedidoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEstadoPedido(int id, EstadoPedido estadoPedido)
        {
            if (id != estadoPedido.IdEstado)
            {
                return BadRequest();
            }

            _context.Entry(estadoPedido).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EstadoPedidoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/EstadoPedidoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<EstadoPedido>> PostEstadoPedido(EstadoPedido estadoPedido)
        {
            _context.EstadoPedidos.Add(estadoPedido);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetEstadoPedido", new { id = estadoPedido.IdEstado }, estadoPedido);
        }

        // DELETE: api/EstadoPedidoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEstadoPedido(int id)
        {
            var estadoPedido = await _context.EstadoPedidos.FindAsync(id);
            if (estadoPedido == null)
            {
                return NotFound();
            }

            _context.EstadoPedidos.Remove(estadoPedido);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool EstadoPedidoExists(int id)
        {
            return _context.EstadoPedidos.Any(e => e.IdEstado == id);
        }
    }
}
