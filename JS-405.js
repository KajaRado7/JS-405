let vlasnik = {
  ime_v: "Maja",
  prezime: "Ivanović",
  kontakt_broj: "095 222 3334",
  pas: {
    ime_p: "Fluffy",
    vrsta: "Pekinezer",
    dob: "3",
    kg: "5",
    posjete: [
      {
        datum: "12.5.2020",
        sifra: 2317,
        cijena: "150"
      },
      {
        datum: "9.7.2020",
        sifra: 3118,
        cijena: "100"
      },
      {
        datum: "19.9.2020",
        sifra: 4014,
        cijena: "200"
      }
    ]
  }
}

console.log("Vlasnik psa " + vlasnik.pas.ime_p + " je " + vlasnik.ime_v );
console.log("Datum zadnje posjete : " + vlasnik.pas.posjete[2].datum);
console.log("Pas " + vlasnik.pas.ime_p + " je " + vlasnik.pas.vrsta);
