import { NextResponse } from 'next/server';

const API_BASE_URL = 'http://37.59.116.54:8000';

// POST - Envoyer un message au chatbot
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { session_id, message } = body;

    if (!session_id || !message) {
      return NextResponse.json(
        { error: 'Session ID et message sont requis' },
        { status: 400 }
      );
    }

    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        session_id,
        message,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error);
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}
