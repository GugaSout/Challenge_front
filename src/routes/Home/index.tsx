import './Home.css'

export default function Home(){

  window.watsonAssistantChatOptions = {
    integrationID: "d410df2d-ab85-40d5-98e5-2e4a60274a5d", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "198a297c-9be0-4faa-a3c1-a4a3ccd3f138", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function () {
    const t = document.createElement('script');
    t.src = "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});

    return(

    <div className="Home">
      
      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>Car Doctor</h1>
            <p>
              Saiba tudo sobre a saúde do seu carro com o CarDoctor.
            </p>
          </div>
          <div className="hero-image">
            <img className='carro' src="carro_azul.png" alt="Carro Azul" />
          </div>
        </section>
      </main>
    </div>
  );
}
