export default function Movement() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-black p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Unite al Movimiento TOCO.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-16 text-gray-600">
          Creá un impacto real y generá ingresos uniéndote a nuestra red de emprendedores por la reforestación. Descubrí cómo podés ser parte del cambio.
        </p>

        <div className="grid md:grid-cols-2 gap-16 text-left mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Distribuidores Independientes</h2>
            <p className="text-gray-600 mb-4">Comprá TOCOs al por mayor con descuento y revendelos en tu comunidad. Obtené un margen de ganancia atractivo, material de marketing y capacitación en ventas.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Margen de ganancia del 30-40%.</li>
              <li>✓ Kit de inicio gratuito.</li>
              <li>✓ Capacitación y soporte continuo.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Representantes y Socios</h2>
            <p className="text-gray-600 mb-4">Promové TOCO en tu negocio o comunidad y ganá una comisión por cada venta. Ideal para cafeterías, tiendas, y oficinas con conciencia ecológica.</p>
            <ul className="space-y-2 text-gray-600">
              <li>✓ Comisión recurrente del 15%.</li>
              <li>✓ Posibilidad de escalar a Embajador de Zona.</li>
              <li>✓ Sin inversión inicial.</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-12 rounded-lg text-left">
          <h2 className="text-3xl font-bold mb-6 text-center">Cómo Empezar</h2>
          <ol className="relative border-l border-gray-300 dark:border-gray-700">
            <li className="mb-12 ml-4">
              <p className="mb-4 text-base font-normal text-gray-500">Completá nuestro formulario de registro online y aceptá los términos y condiciones.</p>
            </li>
            <li className="mb-12 ml-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900">2. Recibí tu Kit</h3>
              <p className="text-base font-normal text-gray-500">Si sos distribuidor, realizá tu compra inicial. Te enviaremos tu paquete de inicio con todo lo que necesitás.</p>
            </li>
            <li className="ml-4">
              <div className="absolute w-3 h-3 bg-gray-300 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <h3 className="text-lg font-semibold text-gray-900">3. Empezá a Vender</h3>
              <p className="text-base font-normal text-gray-500">Utilizá nuestros recursos de marketing y tu propia creatividad para empezar a vender y a generar un impacto positivo.</p>
            </li>
          </ol>
        </div>

      </div>
    </main>
  );
}