 
const Home = () => {
    const images = [
    "https://picsum.photos/300/200?1",
    "https://picsum.photos/300/200?2",
    "https://picsum.photos/300/200?3",
    "https://picsum.photos/300/200?4",
    "https://picsum.photos/300/200?5",
    "https://picsum.photos/300/200?6",
    "https://picsum.photos/300/200?7",
    "https://picsum.photos/300/200?8",
    "https://picsum.photos/300/200?9",
  ];
  return (
    <>
    <h1 className="p-2 m-2 text-center text-3xl mt-3 text-blue-950">Welcome here</h1>
     <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={img}
              alt={`card-${index}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">Card {index + 1}</h3>
              <p className="text-sm text-gray-600">
                Responsive Tailwind Card
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default Home