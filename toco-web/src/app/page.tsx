export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-black text-center p-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
          Tocar Madera, ahora es Suerte.
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-12 text-gray-600">
          TOCO es más que un cubo de madera. Es un símbolo de regeneración y compromiso con el planeta. Descubrí cómo un simple gesto puede atraer la buena suerte y ayudar a reforestar nuestros bosques.
        </p>
        <div className="flex justify-center space-x-6">
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
            Comprar un TOCO
          </button>
          <button className="bg-transparent hover:bg-gray-200 text-black font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 border border-gray-400">
            Unite al Movimiento
          </button>
        </div>
      </div>
    </main>
  );
}
