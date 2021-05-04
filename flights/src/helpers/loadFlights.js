import firestore from '@react-native-firebase/firestore';


export const loadFlights = async (uid) => {
   const flightsSnap = await firestore().collection(`${uid}/flights/flightlist`).get();
   const flights = await []

   flightsSnap.forEach( snapHijo => {
       flights.push({
           id: snapHijo.id,
           ...snapHijo.data()
       })
   })
   return flights

}