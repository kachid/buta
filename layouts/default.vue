<template>
  <v-app dark>
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
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      absolute
      app
      prominent
      shrink-on-scroll
      scroll-target="#scrolling-techniques-2"
    >
      <div class="subtitle-2">Contact Us +44 (012) 5689 3264</div>
      <v-spacer />
      <div class="select">
        <v-select :items="currency" solo flat dense />
        <v-select :items="language" solo flat dense />
      </div>
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
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
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
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
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
        { title: 'ABOUT', to: '/' },
        { title: 'GALLERY', to: '/' },
        { title: 'PAGES', to: '/' },
        { title: 'BLOG', to: '/' },
        { title: 'CONTACT', to: '/' }
      ]
    }
  }
}
</script>
<style>
.full-width {
  width: 100%;
}
.select {
  display: flex;
  width: 174px;
}
</style>
