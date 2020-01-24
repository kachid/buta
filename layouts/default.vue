<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      right
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="{ title, to } in pages"
          :key="title"
          :to="to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      absolute
      app
      dark
      prominent
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
      src="/hotel_pool.jpg"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <div class="subtitle-2">Contact Us +44 (012) 5689 3264</div>
      <v-spacer />
      <app-select-locale />
      <template v-slot:extension>
        <v-toolbar-title v-text="name" />
        <v-spacer />
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          class="hidden-lg-and-up"
        />
        <v-btn-toggle group>
          <v-btn
            v-for="{ title, to } in pages"
            :key="title"
            :to="to"
            nuxt
            exact
            text
            class="hidden-md-and-down"
          >
            {{ title }}
          </v-btn>
        </v-btn-toggle>
      </template>
    </v-app-bar>
    <v-content>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container>
          <nuxt />
        </v-container>
      </v-sheet>
    </v-content>
    <v-footer app absolute padless dark>
      <v-img
        src="/hotel_pool.jpg"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        height="300"
      >
        <span>&copy; 2020</span>
      </v-img>
    </v-footer>
  </v-app>
</template>

<script>
import AppSelectLocale from '@/components/SelectLocale'

export default {
  components: {
    AppSelectLocale
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      name: 'Hotel Buta',
      currency: ['RUB', 'USD', 'EUR'],
      language: ['ENG', 'RUS'],
      pages: [
        { title: 'HOME', to: '/' },
        { title: 'ABOUT', to: '/about' },
        { title: 'GALLERY', to: '/gallery' },
        { title: 'PAGES', to: '/pages' },
        { title: 'BLOG', to: '/blog' },
        { title: 'CONTACT', to: '/contact' }
      ]
    }
  }
}
</script>
<style>
.full-width {
  width: 100%;
}
</style>
