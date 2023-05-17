import howwork from "../../assets/HIW1.webp";
import howwork2 from "../../assets/HIW2.webp";
import howwork3 from "../../assets/HIW3.webp";

function HowWork() {
  return (
    <main className="p-5  bg-slate-300  shadow-xl py-8">
      <h1 className="text-4xl text-center">Wie es funktioniert!</h1>
      <p className="text-center text-gray-600 m-2">Bleib ruhig und reise weiter...</p>
      <section className="flex flex-col md:flex-row md:my-6 md:mx-6 my-4 justify-center gap-2 lg:gap-4 font-light text-gray-600 ">
        <div className="p-6 rounded-sm shadow-lg hover:shadow-xl ">
          <img
            src={howwork2}
            alt="image"
            className="h-48 object-contain mx-auto"
          />
          <div className="">
            <h3 className="text-xl text-center mt-3 font-semibold">
              Intelligente Suche
            </h3>
            <p className="text-justify mt-4">
              Benennen Sie das Gebiet oder den Hotel, nach dem Sie suchen, in
              der Suchleiste. Unsere App findet für Sie die perfekte
              Übereinstimmung.
            </p>
          </div>
        </div>
        <div className="p-6 rounded-sm shadow-lg hover:shadow-xl  ">
          <img
            src={howwork}
            alt="image2"
            className="h-48 object-contain mx-auto"
          />
          <div>
            <h3 className="text-xl text-center mt-3 font-semibold">
              Wählen Sie Eigenschaft
            </h3>
            <p className="text-justify mt-4">
              Aus der Anzahl der Optionen, die unsere App bietet, können Sie
              jede Eigenschaft auswählen, die Sie erkunden möchten.
            </p>
          </div>
        </div>
        <div className="p-6 rounded-sm shadow-lg hover:shadow-xl  ">
          <img
            src={howwork3}
            alt="image3"
            className="h-48 object-contain mx-auto"
          />
          <div>
            <h3 className="text-xl text-center mt-3 font-semibold">
              Buchen Sie Ihre Unterkunft
            </h3>
            <p className="text-justify mt-4">
              Finden Sie ein Hotel oder eine Unterkunft in unserer Suchleiste.
              Geben Sie Ihren spezifischen Standort, den Objekttyp und die
              Preisspanne ein.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HowWork;
