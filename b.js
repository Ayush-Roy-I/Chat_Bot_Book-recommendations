
  window.watsonAssistantChatOptions = {
    integrationID: "a2d64ca3-d2e7-4da8-a67f-9269e8f0ef56", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "b8b98dcb-d8de-4f35-81c9-2af0ce91d520", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });
