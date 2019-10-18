<template>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer></v-spacer>
    <div class="hidden-sm-and-down">
      <!-- <router-link to="/forum">
        <v-btn flat >Forum</v-btn>
      </router-link>
      <router-link to="/ask">
        <v-btn flat >Ask Question</v-btn>
      </router-link>
      <router-link to="/category">
        <v-btn flat >Category</v-btn>
      </router-link> -->

      <router-link v-for="item in items" :key="item.title" :to="item.to" v-if="item.show">
        <v-btn flat >{{ item.title }}</v-btn>
      </router-link>

      <!-- <router-link to="/login">
        <v-btn flat >Login</v-btn>
      </router-link> -->
    </div>
  </v-toolbar>
</template>

<script>
export default {
    data() {
      return {
        items: [
          { title: 'Forum', to: '/forum', show: true },
          { title: 'Ask Question', to: '/ask', show: User.loggedIn() },
          { title: 'Category', to: '/category', show: User.loggedIn() },
          { title: 'Login', to: '/login', show: !User.loggedIn() },
          { title: 'Logout', to: '/logout', show: User.loggedIn() }
        ]
      }
    },
    created(){
      EventBus.$on('Logout', () => {
        User.logout()
      })
    }
}
</script>