<template>
  <section class="bg-white-500 py-8" id="contact">
    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
      <h1 class="w-full my-2 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center text-gray">
        Contact
      </h1>
      <div class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 my-0 py-0 rounded-t bg-blue"></div>
      </div>
      <div class="flex text-gray-600 font-semibold text-base mt-0 p-0 mb-6 md:mx-8 justify-center items-start text-center">
        Via onderstaand formulier kunt U contact opnemen om een vraag te stellen of een afspraak te maken. U kunt mij ook direct bellen op 06-52878081 of mailen op info@voetdeluxe.nl.
      </div>
      <div class="flex flex-col sm:flex-row justify-center pt-12 my-6 sm:my-2">
        <form class="mb-0 space-y-6" action="#" method="POST">
          <div>
            <label for="name" class="block text-md font-medium text-gray">
              Naam
            </label>
            <div class="mt-1">
              <input
                id="username"
                name="name"
                type="text"
                required
                class="bg-white"
              />
            </div>
          </div>
          <div>
            <label for="email" class="block text-md font-medium text-gray">
              E-mailadres
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                class="bg-white"
              />
            </div>
          </div>
          <div>
            <label for="phone" class="block text-md font-medium text-gray">
              Telefoon
            </label>
            <div class="mt-1">
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                class="bg-white"
              />
            </div>
          </div>
          <div>
            <label for="textarea" class="block text-md font-medium text-gray">
              Vraag
            </label>
            <div class="mt-1">
              <textarea
                name="message"
                id="usermessage"
                class="form-textarea mt-1 block w-full text-gray-400 bg-white"
                rows="3"
                placeholder="Type hier uw eventuele vraag of opmerking"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center">
            <input
              id="terms-and-privacy"
              name="terms-and-privacy"
              type="checkbox"
              required
              class=""
            />
            <label for="terms-and-privacy" class="ml-2 block text-sm text-gray-600">
              Ik ga accoord met de
              <nuxt-link to="#" class="text-orange hover:text-blue">
                Voorwaarden
              </nuxt-link>
              en
              <nuxt-link to="#" class="text-orange hover:text-blue">
                Privacy regels
              </nuxt-link>
            </label>
          </div>
          <div>
            <button
              type="submit"
              class="w-full py-2 font-medium bg-orange text-white border-gray-300 rounded-lg shadow-sm focus:border-gray-200 focus:ring-gray-200"
              @click.prevent="onSubmit"
            >
              Verzend
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        username: "",
        phone: "",
        email: "",
        usermessage: "",
        isSending: false,
      }
    },
    methods: {
      async onSubmit() {
        console.info(`Sending form data: ${username.value}, ${email.value}, ${phone.value}, ${usermessage.value}`)
        try {
          await this.$axios.$post('/send/', {
            name: username.value,
            email: email.value,
            text: "Telefoon: " + phone.value + ". Bericht:" + usermessage.value,
            subject: 'VoetDeluxe Contact Formulier'
          })
          alert("Bedankt voor uw bericht.\nIk neem spoedig contact met u op.")
        } catch(error) {
          console.log(error)  // eslint-disable-line
          alert('Er is iets fout gegaan; probeer het later nog eens.\nOf neem contact met via telefoonnummer 06-52878081.')
        }
      }
    }
  }
</script>
