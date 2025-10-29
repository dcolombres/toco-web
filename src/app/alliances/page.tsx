export default function Alliances() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-black p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">
          Creemos un Ecosistema de Impacto.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600">
          En TOCO, creemos en el poder de la colaboración. Buscamos ONGs, empresas y líderes comprometidos para amplificar nuestro impacto y acelerar la reforestación de nuestros bosques.
        </p>

        <div className="grid md:grid-cols-2 gap-12 text-left mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Alianzas con ONGs Ambientales</h2>
            <p className="text-gray-600 mb-4">Validamos el impacto y canalizamos fondos a proyectos reales de reforestación. Las ONGs aliadas reciben el 50% de las ventas y nos ayudan a difundir la misión.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Visibilidad en nuestro packaging y web.</li>
              <li>✓ Reportes de fondos y árboles plantados.</li>
              <li>✓ Oportunidad de vender TOCOs en sus canales.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Alianzas con Empresas (RSE)</h2>
            <p className="text-gray-600 mb-4">Financiá TOCOs como regalos corporativos o incentivos. Demostrá el compromiso de tu empresa con el medio ambiente y obtené un certificado de impacto.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Sello "Empresa Carbon Neutral".</li>
              <li>✓ Contenido para tus redes sociales.</li>
              <li>✓ Activaciones conjuntas de voluntariado.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Alianzas con Gobiernos y Municipios</h2>
            <p className="text-gray-600 mb-4">Integremos TOCO en programas de educación ambiental y recuperación de espacios verdes. Promové la reforestación en tu comunidad y sé parte del cambio.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Herramienta de educación ambiental.</li>
              <li>✓ Promoción en eventos oficiales.</li>
              <li>✓ Fomento de la participación ciudadana.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">Alianzas con Influencers y Medios</h2>
            <p className="text-gray-600 mb-4">Ayudanos a viralizar la misión de TOCO. Recibí TOCOs gratis y promocionalos en tus redes, o regalalos a tu audiencia para generar conciencia.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Marketing de afiliados con donación.</li>
              <li>✓ Sorteos y activaciones con tu audiencia.</li>
              <li>✓ Contenido exclusivo para tus canales.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-4">¿Querés ser nuestro aliado?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-gray-600">
            Descargá nuestro Kit de Alianzas para conocer más sobre cómo podemos colaborar y empezá a generar un impacto positivo hoy mismo.
          </p>
          <a href="/kit-de-alianzas.pdf" download>
            <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              Descargar Kit de Alianzas
            </button>
          </a>
        </div>

      </div>
    </main>
  );
}