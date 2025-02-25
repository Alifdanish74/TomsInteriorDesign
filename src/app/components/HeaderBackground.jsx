// eslint-disable-next-line react/prop-types
function HeaderBackground({ H1, P, T }) {
  return (
    <>
      {/* Header background */}
      <div
        className="flex flex-col h-64 md:min-h-72 text-white items-center text-center justify-end pb-8 md:pb-12 mx-auto "
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        {/* Your Kad Digital Page Content Here */}
        <p className="font-bold text-sm ">{T}</p>
        <h1 className="text-5xl font-bold py-4">{H1}</h1>
        <p className="font-medium text-wrap">{P}</p>
      </div>
    </>
  );
}

export default HeaderBackground;
