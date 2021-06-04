<template>
  <section class="py-8 bg-white-500" id="contact">
    <!-- Section header -->
    <div class="container px-2 pt-4 pb-12 mx-auto text-gray-800">
      <h1 class="w-full my-2 text-3xl font-bold leading-tight text-center md:text-4xl lg:text-5xl text-gray">
        Contact
      </h1>
      <div class="w-full mb-4">
        <div class="w-64 h-1 py-0 mx-auto my-0 rounded-t gradient bg-blue"></div>
      </div>
      <div class="flex items-start justify-center p-0 mt-0 mb-2 text-base font-semibold text-center text-gray-600 md:mb-6 md:mx-8">
        Via onderstaand formulier kunt U contact opnemen om een vraag te stellen of een afspraak te maken. U kunt mij ook direct bellen op 06-52878081 of mailen naar info@voetdeluxe.nl.
      </div>
      <!-- Contact Form -->
      <div class="flex flex-col justify-center pt-6 mx-auto sm:flex-row">
        <ValidationObserver v-slot="{ invalid, handleSubmit, reset }" ref="contact">
          <form class="space-y-9" @submit.prevent="handleSubmit(onSubmit)">
            <div class="flex flex-row w-full mb-8">
              <select v-model="aanhef" class="z-0 w-1/4 h-10 py-1 mr-6 placeholder-gray-200 bg-white rounded-md shadow-md md:w-1/5 focus:placeholder-gray-100 focus:shadow-outline" placeholder="Mw.">
                <option value="Mw.">Mw.</option>
                <option value="Dhr.">Dhr.</option>
              </select>
              <ValidationProvider name="voorletter" rules="required|min:1|max:1" v-slot="{ errors }" class="w-1/2">
                <div class="relative flex-grow rounded-md shadow-md focus-within:z-10">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input id="voorletter" name="voorletter" type="text" placeholder="Voorletter*" v-model="voorletter" class="z-0 pl-10 placeholder-gray-200 bg-white shadow-md focus:placeholder-gray-100 focus:shadow-outline">
                </div>
                <span class="relative flex-grow text-sm text-orange-900">{{ errors[0] }}</span>
              </ValidationProvider>
            </div>
            <ValidationProvider name="naam" rules="required|min:3" v-slot="{ errors }">
              <div class="flex w-full rounded-md shadow-md">
                <div class="relative flex-grow focus-within:z-10">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <input id="naam" name="naam" type="text" placeholder="Naam*" v-model="naam" class="z-0 pl-10 placeholder-gray-200 bg-white shadow-md focus:placeholder-gray-100 focus:shadow-outline">
                </div>
              </div>
              <span class="relative flex-grow text-sm text-orange-900">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="email" name="emailadres" v-slot="{ errors }">
              <div class="flex w-full pt-8">
                <div class="relative flex-grow rounded-md shadow-md focus-within:z-10 ">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <input id="emailadres" name="emailadres" v-model="emailadres" type="text" placeholder="Email" class="z-0 pl-10 placeholder-gray-200 bg-white shadow-md focus:placeholder-gray-100">
                </div>
              </div>
              <span class="relative flex-grow text-sm text-orange-900">{{ errors[0] }}</span>
            </ValidationProvider>
            <ValidationProvider rules="required|phone" name="telefoon" v-slot="{ errors }">
              <div class="flex w-full pt-8">
                <div class="relative flex-grow rounded-md shadow-md focus-within:z-10 ">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-orange-500 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <input id="telefoon" name="telefoon" type="tel" placeholder="Telefoon*" v-model="telefoon" class="z-0 pl-10 placeholder-gray-200 bg-white shadow-md focus:placeholder-gray-100">
                </div>
              </div>
              <span class="relative flex text-sm text-orange-900">{{ errors[0] }}</span>
            </ValidationProvider>
            <div class="flex w-full rounded-md">
              <div class="relative flex-grow focus-within:z-10">
                <div class="absolute left-0 flex pl-3 pointer-events-none inset-y-3 items-top">
                  <svg class="w-5 h-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <textarea name="bericht" id="bericht" rows="4" placeholder="Type hier uw eventuele vraag of opmerking" class="z-0 pl-10 font-medium text-gray-500 placeholder-gray-200 bg-white shadow-md form-textarea text-md focus:placeholder-gray-100" />
              </div>
            </div>
            <ValidationProvider name="akkoord" rules="required" v-slot="{ errors }">
              <div class="relative flex items-center px-10">
                <input id="akkoord" name="akkoord" v-model="akkoord" type="checkbox" required class="" />
                <label for="akkoord" class="block ml-2 text-sm text-gray-600">
                  Ik ga accoord met de
                  <nuxt-link to="#" class="text-orange hover:text-blue">
                    Voorwaarden
                  </nuxt-link>
                  en
                  <nuxt-link to="#" v-scroll-to="{ element: '#privacy', duration: 800, offset: -40 }" class="text-orange hover:text-blue">
                    Privacy regels
                  </nuxt-link>
                </label>
              </div>
              <span class="flex text-sm text-orange-700">{{ errors[0] }}</span>
            </ValidationProvider>
            <div>
              <button type="submit" class="w-full py-2 font-medium text-white border-gray-300 rounded-lg shadow-lg bg-orange focus:border-none focus:ring-none btn">
                Verstuur
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </section>
</template>

<script>
  import { ValidationObserver } from "vee-validate";
  import { ValidationProvider } from "vee-validate";

  export default {
    components: {
      ValidationProvider,
      ValidationObserver
    },
    data() {
      return {
        naam: '',
        voorletter: '',
        aanhef: 'Mw.',
        telefoon: '',
        emailadres: '',
        bericht: '',
        akkoord: '',
      }
    },
    methods: {
      async onSubmit(event) {
        console.info(`Sending form data: ${this.aanhef} ${this.voorletter} ${this.naam}, ${this.emailadres}, ${this.telefoon}, ${this.bericht}`)
        // event.preventDefault()
        let token = ''
        let reportError = false

        await this.$axios.post('/aanmelden/', {
          name: 'VoetDeluxe',
          password: 'Pandora1'
        }).then(function (response) {
          token = response.data.token
          reportError = false
        }).catch(function (e) {
          console.error('API login error ', e)
          reportError = true
        })
        // Set token in cookie
        document.cookie = `token=${token}`
        // Send form data
        await this.$axios.$post('/send/', {
            name: this.aanhef + " " + this.voorletter + " " + this.naam,
            email: this.emailadres,
            text: "Telefoon: " + this.telefoon + ". Bericht:" + this.bericht,
            subject: 'VoetDeluxe Website Contactformulier'
        },
        {
          headers: {
            'authorization': 'Bearer ' + token,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(function (response) {
          console.log("Form submission succeeded", response)
          reportError = false
        }).catch(function (e) {
          console.log('Send email error ', e)
          reportError = true
        })

        // Tell user if it succeeded
        if (!reportError) {
          this.voorletter = this.naam = this.emailadres = this.telefoon = this.bericht = this.akkoord = ''
          this.$refs.contact.reset();
          this.$toast.show({
            type: 'success',
            message: 'Bedankt voor uw bericht. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ik neem spoedig contact met u op.',
            classToast: 'bg-orange z-50 mx-auto shadow-3xl',
            classMessage: 'text-white font-semibold text-lg',
            classTimeout: 'bg-white',
            timeout: 7,
          })
        }
        else {
          alert("Sorry, er is iets mis gegaan. Probeer het later opnieuw, of\nneem contact op via 06-52878081 of email info@voetdeluxe.nl.")
        }
      }
    }
  }
</script>
<style scoped>
/* Adding transformation when the button is active */
  .btn:active {
      transform: scale(0.98);
      /* Scaling button to 0.98 to its original size */
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
      /* Lowering the shadow */
  }
</style>
