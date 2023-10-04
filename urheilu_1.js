class Henkilo {
  constructor(etunimet, sukunimi, kutsumanimi, syntymavuosi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
  }
}
class Urheilija extends Henkilo {
  constructor(linkki, omapaino, laji, saavutukset) {
    this.linkki = linkki;
    this.omapaino = omapaino;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }
  get linkki() {
    return this.linkki();
  }
  get omapaino() {
    return this.omapaino();
  }
  get laji() {
    return this.laji();
  }
  get saavutukset() {
    return this.saavutukset();
  }
  set linkki(linkki) {
    this.linkki = linkki;
  }
  set omapaino(omapaino) {
    this.omapaino = omapaino;
  }
  set laji(laji) {
    this.laji = laji;
  }
  set saavutukset(saavutukset) {
    this.saavutukset = saavutukset;
  }
}
