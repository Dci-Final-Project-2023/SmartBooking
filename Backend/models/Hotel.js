import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 4,
  },
  cheapestPrice: {
    type: Number,
  },
  maxPeople: {
    type: Number,
    required: true,
    default: 5,
  },
});

export default mongoose.model("Hotel", HotelSchema);


// form filter
// destination : city
// check ín/out date : date (redux)
// min price : number
// max price : number
// number of people : number
// number of rooms : numberx

// fe url hotelfinden in home -> for be filter
// hotels show filtered hotels
// be controller -> filter

// filter page
// button for angebote --> navigate zu single page 

// singlehotel component / page
// click angebote ansehen
// container - hotel information with button zur Buchung

// buchung page
// hotel buchung information
// form for buchung
// button for buchung
// alert success component
// buchung daten werden in db gespeichert
// buchung daten werden in email gesendet
// buchung daten in dahboard angezeigt


//hotel finder show fe. 3 hotels gefunden
//if no matches es gibt kein gefunden Hotel 
//See availibility geht direkt single Hotel Page
// default value 1 Woche and 2 adult
