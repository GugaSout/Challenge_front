interface WatsonAssistantInstance {
    render: () => Promise<void>;
  }
  
  declare global {
    interface Window {
      watsonAssistantChatOptions: {
        integrationID: string;
        region: string;
        serviceInstanceID: string;
        onLoad: (instance: WatsonAssistantInstance) => Promise<void>;
        clientVersion?: string; // Se clientVersion é opcional
      };
    }
  }