using APLICACION_RRHH.EntidadDto;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;

namespace APLICACION_RRHH.Controllers

{
    [ApiController]
    [Route("[controller]")]
    public class ProveedorController : Controller
    {
            private readonly string? conexionMySql;

            public ProveedorController(IConfiguration conexion)
            {
                conexionMySql = conexion.GetConnectionString("conexion");
            }

            [HttpPost]
            public async Task<IActionResult> PostProveedor(ProveedorDto proveedor)
            {
                try
                {
                    string querySql = "INSERT INTO proveedor (NombreProveedor, TelefonoProveedor, DireccionProveedor) " +
                                      "VALUES (@Nombre, @Telefono, @Direccion)";

                    using (var conexion = new MySqlConnection(conexionMySql))
                    {
                        await conexion.OpenAsync();

                        using (var command = new MySqlCommand(querySql, conexion))
                        {
                            command.Parameters.AddWithValue("@Nombre", proveedor.NombreProveedor);
                            command.Parameters.AddWithValue("@Telefono", proveedor.TelefonoProveedor);
                            command.Parameters.AddWithValue("@Direccion", proveedor.DireccionProveedor);

                            await command.ExecuteNonQueryAsync();
                        }
                    }

                    return Ok(new { message = "Proveedor creado exitosamente" });
                }
                catch (MySqlException me)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new
                    {
                        message = "Error al interactuar con la base de datos MySQL",
                        error = me.Message
                    });
                }
                catch (Exception e)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, new
                    {
                        message = "Ocurrió un error en el servidor",
                        error = e.Message
                    });
                }
            }


    }
}
