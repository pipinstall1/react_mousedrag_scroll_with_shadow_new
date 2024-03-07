import ScrollShadow from '../components/ScrollShadow';

export default function Home({ exploreData, cardsData }) {
  return (
    <main className="container mx-auto px-8">
      <section>
        <h2 className="my-5 text-4xl font-semibold">Vertical?</h2>
        <ScrollShadow direction="vertical">
          <div className="space-y-4 h-96">
            {Array.from({ length: 25 }, (_, index) => (
              <button
                key={index}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded block"
              >
                Button {index + 1}
              </button>
            ))}
          </div>
        </ScrollShadow>
      </section>

      <section>
        <h2 className="my-5 text-4xl font-semibold">Horizontal?</h2>
        <ScrollShadow direction="horizontal">
          <div className="space-x-4">
            {Array.from({ length: 25 }, (_, index) => (
              <button
                key={index}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Button {index + 1}
              </button>
            ))}
          </div>
        </ScrollShadow>
      </section>
    </main>
  );
}
