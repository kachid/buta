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
      color="rgba(100,115,201,.7)"
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
      src="/images/hotel_pool.jpg"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <div class="subtitle-2">
        Contact Us&emsp;
        <a href="tel:+995558090979">+995 (558) 09 09 79</a>
      </div>
      <v-spacer />
      <app-select-locale />
      <template v-slot:extension>
        <v-toolbar-title v-text="name" />
        <v-spacer />
        <v-app-bar-nav-icon
          class="hidden-lg-and-up"
          @click.stop="drawer = !drawer"
        />
        <v-btn-toggle group>
          <v-btn
            v-for="{ title, to } in pages"
            :key="title"
            :to="to"
            nuxt
            exact
            x-large
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
        max-height="800"
      >
        <v-container>
          <nuxt />
        </v-container>
      </v-sheet>
    </v-content>
    <v-footer app absolute padless dark>
      <v-img
        src="/images/hotel_pool.jpg"
        gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        height="300"
      >
        <v-row>
          <v-col>
            <span class="ma-6">&copy; 2020</span>
          </v-col>
        </v-row>
      </v-img>
    </v-footer>
  </v-app>
</template>

<script>
import AppSelectLocale from '@@/components/SelectLocale'

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
      pages: [
        { title: 'HOME', to: '/' },
        { title: 'ABOUT', to: '/about' },
        { title: 'GALLERY', to: '/gallery' },
        { title: 'ROOMS', to: '/rooms' },
        { title: 'BLOG', to: '/blog' },
        { title: 'CONTACT', to: '/contact' }
      ]
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>
