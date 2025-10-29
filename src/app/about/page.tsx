export default function About() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-black p-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Más que un cubo de madera.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-16 text-gray-600">
          TOCO es un símbolo de regeneración y compromiso con el planeta. Cada TOCO es un pequeño trozo de madera recuperada, transformado en un objeto único con un mensaje poderoso: "Comprando un TOCO, estás donando el 50% de su valor a la reforestación de zonas afectadas por incendios".
        </p>

        <div className="grid md:grid-cols-2 gap-16 text-left mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">El Proceso</h2>
            <ul className="space-y-4 text-gray-600">
              <li><strong>Recuperación:</strong> Seleccionamos madera de descarte o residuos, evitando que termine en la basura.</li>
              <li><strong>Transformación:</strong> Cortamos, lijamos y pulimos cada pieza para crear cubos uniformes y suaves al tacto.</li>
              <li><strong>Identidad:</strong> Marcamos cada TOCO con un sello al calor, garantizando autenticidad y durabilidad.</li>
              <li><strong>Protección:</strong> Aplicamos barniz ecológico para preservar la madera y resaltar su belleza natural.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">El Kit TOCO</h2>
            <p className="text-gray-600 mb-4">Cada cubo incluye un folleto explicativo con:</p>
            <ul className="space-y-2 text-gray-600">
              <li>La historia detrás de TOCO.</li>
              <li>Datos sobre la importancia de reforestar.</li>
              <li>Cómo tu compra contribuye directamente a plantar árboles.</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">¿Por qué TOCO?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-lg">
              <p className="text-gray-600">Madera rescatada = menos desperdicio.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Solidario</h3>
              <p className="text-gray-600">Mitad para bosques, mitad para seguir creciendo.</p>
            </div>
            <div className="p-8 border border-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Versátil</h3>
              <p className="text-gray-600">Ideal como regalo, objeto decorativo o recordatorio tangible de tu aporte al planeta.</p>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}