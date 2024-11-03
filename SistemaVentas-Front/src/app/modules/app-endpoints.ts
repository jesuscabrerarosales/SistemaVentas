var apiUrl = "http://localhost:7194";
export const API_ENDPOINTS = {
  USUARIOS:{
    GET: apiUrl + '/api/Usuarios',
    GET_BY_ID: apiUrl + '/api/Usuarios',
    PUT: apiUrl + 'api/Usuarios',
    POST: apiUrl + 'api/Usuarios',
    DELETE: apiUrl + 'api/Usuarios'
  },
  PRODUCTOS:{
    GET: apiUrl + 'api/Productoes',
    GET_BY_ID: apiUrl + 'api/Productoes',
    PUT: apiUrl + 'api/Productoes',
    POST: apiUrl + 'api/Productoes',
    DELETE: apiUrl + 'api/Productoes'
  },
  PEDIDO:{
    GET: apiUrl + 'api/Pedidoes',
    GET_BY_ID: apiUrl + 'api/Pedidoes',
    PUT: apiUrl + 'api/Pedidoes',
    POST: apiUrl + 'api/Pedidoes',
    DELETE: apiUrl + 'api/Pedidoes'
  },
  ESTADO_PEDIDO:{
    GET: apiUrl + 'api/EstadoPedidoes',
    GET_BY_ID: apiUrl + 'api/EstadoPedidoes',
    PUT: apiUrl + 'api/EstadoPedidoes',
    POST: apiUrl + 'api/EstadoPedidoes',
    DELETE: apiUrl + 'api/EstadoPedidoes'
  },
  PEDIDOS_PRODUCTOS:{
    GET: apiUrl + 'api/PedidoProductos',
    GET_BY_ID: apiUrl + 'api/PedidoProductos',
    PUT: apiUrl + 'api/PedidoProductos',
    POST: apiUrl + 'api/PedidoProductos',
    DELETE: apiUrl + 'api/PedidoProductos'
  },
}
