<template>
  <section class="bg-white-800 py-8" id="informatie">
    <div class="container max-w-5xl mx-auto m-8">
      <h1 class="w-full my-2 text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-center text-gray">
        Informatie
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-100 my-0 py-0 rounded-t bg-blue"></div>
      </div>
    </div>
    <div class="container mx-auto bg-white mt-10 rounded-md shadow-md" id="privacy">
      <h1 class="w-full py-6 text-2xl md:text-3xl lg:text-4xl leading-tight text-center text-orange-700">
        Privacy verklaring
      </h1>
      <div class="flex-row bg-white-500 text-gray-600 font-semibold item-center px-4 pb-6">
        VoetDeluxe hecht veel waarde aan de bescherming van Uw persoonsgegevens. In deze privacyverklaring staat duidelijk hoe met Uw persoonsgegevens wordt omgegaan.<br />
        U kunt er zeker van zijn dat er alles aangedaan wordt uw privacy te waarborgen. VoetDeluxe houdt zich in alle gevallen aan de toepasselijke wet- en regelgeving, waaronder de Algemene Verordening Gegevensbescherming (AVG).
      </div>
      <div
        v-for="(privacy, index) in privacy"
        :key="privacy.heading"
      >
        <p class="bg-white text-orange text-xl font-semibold py-2 px-4 cursor-pointer"
          @click="privacyItemClick(index)">
          {{ privacy.heading }}
        </p>
        <div :data-privacy-id="index" class="bg-white p-1 text-gray-600 px-6 hidden">
          <p>{{ privacy.details }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Informatie',
  data() {
    return {
      active: false,
      privacy: [
        {
          heading: 'Welke gegevens worden verwerkt?',
          details: 'Door het gebruik van deze website en de daarop beschikbare diensten laat U bepaalde gegevens bij mij achter. ' +
          'Dit gebeurd ook in het kader van de uitvoering van de behandelovereenkomst. Dat kunnen persoonsgegevens zijn. ' +
          'VoetDeluxe bewaart en gebruikt uitsluitend persoonsgegevens die rechtstreeks door U worden opgegeven of waarvan bij opgave duidelijk is dat ze aan VoetDeluxe worden verstrekt om te verwerken. ' +
          'Afhankelijk van de dienst die U van VoetDeluxe afneemt kunnen één of meerdere van de volgende gegevens verzameld worden: ' +
          'NAW-gegevens; Geslacht; Geboortedatum; Emailadres; Telefoonnummer; Gegevens betreffende Uw voeten; Tijdstip van uw afspraak.'
        },
        {
          heading: 'Waarvoor worden de gegevens verwerkt',
          details: 'Uw persoonsgegevens worden door medisch pedicure Dorietha van Lent verwerkt ten behoeve van de volgende doeleinden: ' +
          '- Het geven van de behandelingen; ' +
          '– Het inplannen van een afspraak; ' +
          '- Het versturen van afspraakgegevens, herinnering via email of bericht; ' +
          '- Het opstellen en eventueel versturen van de factuur; ' +
          '- Het aanmaken van uw dossier om u bij de praktijk in te schrijven; ' +
          '- Het verbeteren van onze dienstverlening.'
        },
        {
          heading: 'Verstrekking aan derden',
          details: 'De gegevens die U verstrekt, kan ik aan derde partijen verstrekken met uw toestemming, indien dit noodzakelijk is voor uitvoering van de hierboven beschreven doeleinden. ' +
          'Zo maakt VoetDeluxe gebruik van een derde partij voor de boekhouding waarin de factuur wordt aangemaak en de betaling verwerkt. ' +
          'VoetDeluxe geef nooit persoonsgegevens door aan andere partijen waarmee geen verwerkersovereenkomst is afgesloten. ' +
          'Met deze partijen maak ik de vereiste afspraken om de beveiliging van uw persoonsgegevens te waarborgen. ' +
          'Verder zal ik de door u verstrekte gegevens niet aan andere partijen verstrekken, tenzij dit wettelijk verplicht is. ' +
          'Een voorbeeld hiervan is dat de politie in het kader van een onderzoek (persoons)gegevens bij mij opvraagt. ' +
          'In een dergelijk geval dien ik medewerking te verlenen en ben ik verplicht deze gegevens af te geven. ' +
          'VoetDeluxe verstrekt geen persoonsgegevens aan partijen welke gevestigd zijn buiten de EU.'
        },
        {
          heading: 'Minderjarigen',
          details: 'Ik verwerk enkel en alleen persoonsgegevens van minderjarigen (personen jongen dan 16 jaar) indien daarvoor schriftelijke toestemming is gegeven door de ouder, verzorger of wettelijke vertegenwoordiger.'
        },
        {
          heading: 'Bewaartermijn',
          details: 'Pedicure VoetDeluxe bewaart persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor deze zijn verstrekt dan wel op grond van de wet is vereist.'
        },
        {
          heading: 'Beveiliging',
          details: 'VoetDeluxe heeft passende technische- en organisatorische maatregelen genomen om persoonsgegevens van U te beschermen tegen onrechtmatige verwerking.'  +
          'VoetDeluxe heeft ondermeer de volgende maatregelen genomen: ' +
          '1. Alle personen die namens Pedicure VoetDeluxe van uw gegevens kennis kunnen nemen, zijn gehouden aan geheimhouding daarvan. ' +
          '2. We hanteren een gebruikersnaam, wachtwoordbeleid plus tweede factor beveiliging op al onze systemen waar Uw gegevens worden bewaard of bewerkt. ' +
          '3. We versleutelen de gegevens die opgeslagen worden en maken back-ups van de persoonsgegevens om te kunnen herstellen in geval van een storing. ' +
          '4. De papieren administratie met persoonsgegevens is opgeborgen in een afsluitbare kast.'
        },
        {
          heading: 'Google Analytics',
          details: 'VoetDeluxe maakt gebruik van Google Analytics om bij te houden hoe gebruikers de website bezoeken en hoe effectief de advertenties bij Google zoekresultaatpagina’s zijn. De aldus verkregen informatie wordt, met inbegrip van het adres van de gebruikte computer (IP-adres), overgebracht naar en door Google opgeslagen op servers in de Verenigde Staten. Lees het privacybeleid van Google voor meer informatie. Google gebruikt deze informatie om bij te houden hoe onze website gebruikt wordt, om rapporten over de website aan VoetDeluxe te kunnen verstrekken en om haar adverteerders informatie over de effectiviteit van hun campagnes te kunnen bieden. Google kan deze informatie aan derden verschaffen indien Google hiertoe wettelijk wordt verplicht, of voor zover deze derden de informatie namens Google verwerken. Wij hebben hier geen invloed op. Wij hebben Google niet toegestaan de verkregen analytics informatie te gebruiken voor andere Google diensten.'
        },
        {
          heading: 'Rechten omtrent je gegevens',
          details: 'U hebt recht op inzage, rectificatie of verwijdering van de persoonsgegeven welke VoetDeluxe van U heeft opgeslagen. ' +
          'Tevens kunt U bezwaar maken tegen de verwerking van uw persoonsgegevens (of een deel hiervan) door VoetDeluxe. ' +
          'Ook hebt U het recht de door U verstrekte gegevens door VoetDeluxe te laten overdragen aan uzelf of direct aan een andere partij indien gewenst. ' +
          'VoetDeluxe kan U een legitimatie vragen voordat gehoor geven wordt aan voornoemde verzoeken.'
        },
        {
          heading: 'Klachten',
          details: 'Mocht U een klacht hebben over de verwerking van Uw persoonsgegevens, vraagt VoetDeluxe U hierover contact op te nemen. ' +
          'Komt U hier niet met mij uit dan vind ik dat natuurlijk erg vervelend. U heeft het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens, ' +
          'dit is de toezichthoudende overheidsinstantie op het gebied van privacy. ' +
          'Heeft U naar aanleiding van deze privacy regels nog vragen, neem dan contact op.'
        },
        {
          heading: 'Aanpassen privacy statement',
          details: 'VoetDeluxe behoudt zich het recht voor ons privacy statement aan te passen. Wijzigingen zullen op deze website worden gepubliceerd.'
        }
      ]
    }
  },
  methods: {
    privacyItemClick (privacyIndex) {
      const privacyInfoElement = document.querySelectorAll('[data-privacy-id="' + privacyIndex + '"]')[0]
      if (privacyInfoElement.classList.contains('block')) {
        privacyInfoElement.classList.remove('block')
        privacyInfoElement.classList.add('hidden')
      } else {
        privacyInfoElement.classList.remove('hidden')
        privacyInfoElement.classList.add('block')
      }
    }
  }
}
</script>
