import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar, QLayout, QHeader, QDrawer, QPageContainer, QPage, QToolbar, QToolbarTitle, QBtn, QIcon, QList, QItem, QItemSection, QCard, QCardSection } from 'quasar'
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(Quasar, {
  components: {
    QLayout,
    QHeader,
    QDrawer,
    QPageContainer,
    QPage,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QList,
    QItem,
    QItemSection,
    QCard,
    QCardSection
  }
})

app.use(router)
app.mount('#app')
