import openai from '../config/openai.js';

export const sendMessage = async (req, res, next) => {
  try {
    const { message, history = [] } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'El mensaje no puede estar vacío' });
    }

    // Construir el historial de mensajes
    const messages = [
      {
        role: 'system',
        content: `Eres un asistente virtual empresarial inteligente llamado Cognito Business. 
        Tu objetivo es ayudar a empresas con información precisa, profesional y útil.
        Respondes de manera clara, concisa y siempre mantienes un tono corporativo pero amigable.
        Si no sabes algo, admítelo honestamente y sugiere alternativas.`
      },
      ...history.slice(-10), // Limitar historial a últimos 10 mensajes
      { role: 'user', content: message }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
      presence_penalty: 0.6,
      frequency_penalty: 0.5,
    });

    const reply = completion.choices[0].message.content;

    res.json({
      reply,
      timestamp: new Date().toISOString(),
    });

  } catch (error) {
    console.error('❌ Error en chatController:', error.message);
    next(error);
  }
};
