export const errorHandler = (err, req, res, next) => {
    console.error('🔥 Error capturado:', err);
  
    if (err.status === 401) {
      return res.status(401).json({ error: 'API Key inválida o expirada' });
    }
  
    if (err.status === 429) {
      return res.status(429).json({ error: 'Límite de solicitudes excedido. Intenta de nuevo más tarde.' });
    }
  
    if (err.code === 'ECONNABORTED') {
      return res.status(408).json({ error: 'Tiempo de espera agotado' });
    }
  
    res.status(500).json({
      error: 'Error interno del servidor',
      message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
    });
  };
  