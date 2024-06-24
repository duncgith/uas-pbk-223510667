<template>
    <q-layout view="hHh lpR fFf">
      <q-header elevated class="bg-dark">
        <q-toolbar>
          <q-toolbar-title>
            SUN TRACKER
          </q-toolbar-title>
          <q-btn flat round dense icon="menu" @click="toggleDrawer" />
        </q-toolbar>
      </q-header>
  
      <q-drawer v-model="drawer" show-if-above bordered>
        <q-list>
          <q-item to="/" clickable v-ripple>
            <q-item-section>
              Home
            </q-item-section>
          </q-item>
          <q-item to="/tasks" clickable v-ripple>
            <q-item-section>
              Tasks
            </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>
  
      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </template>
  
  <script>
  export default {
    data() {
      return {
        drawer: false
      }
    },
    methods: {
      toggleDrawer() {
        this.drawer = !this.drawer
      }
    }
  }
  </script>
  