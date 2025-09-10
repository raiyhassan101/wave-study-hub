const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || 'https://hassan9988.app.n8n.cloud/webhook/gwgalpha';

export interface ChatMessage {
  id: number;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface WebhookRequest {
  message: string;
  conversationId?: string;
  userId?: string;
}

export interface WebhookResponse {
  response: string;
  conversationId?: string;
  success: boolean;
  error?: string;
}

export class ChatAPI {
  private conversationId: string;

  constructor() {
    this.conversationId = this.generateConversationId();
  }

  private generateConversationId(): string {
    return `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  async sendMessage(message: string): Promise<WebhookResponse> {
    try {
      const requestBody: WebhookRequest = {
        message,
        conversationId: this.conversationId,
        userId: 'gwgalpha_user' // You can make this dynamic based on user authentication
      };

      console.log('Sending request to webhook:', {
        url: WEBHOOK_URL,
        body: requestBody
      });

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      console.log('Webhook response status:', response.status);
      console.log('Webhook response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Get the response text first
      const responseText = await response.text();
      console.log('Raw webhook response:', responseText);

      // Try to parse as JSON first
      let data: WebhookResponse;
      try {
        data = JSON.parse(responseText);
        
        // If it's a valid JSON response, check for success
        if (data.success === false) {
          throw new Error(data.error || 'Unknown error occurred');
        }
      } catch (jsonError) {
        // If JSON parsing fails, treat the response as plain text
        console.log('Response is not JSON, treating as plain text');
        data = {
          response: responseText,
          conversationId: this.conversationId,
          success: true
        };
      }

      return data;
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      return {
        response: 'Sorry, I encountered an error while processing your request. Please try again.',
        conversationId: this.conversationId,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  getConversationId(): string {
    return this.conversationId;
  }

  resetConversation(): void {
    this.conversationId = this.generateConversationId();
  }
}

// Export a singleton instance
export const chatAPI = new ChatAPI();
