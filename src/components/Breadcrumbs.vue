<template>
  <nav aria-label="breadcrumb" class="breadcrumbs">
    <ol>
      <li>
        <router-link to="/">Главная</router-link>
      </li>
      <li v-for="(crumb, index) in crumbs" :key="index">
        <template v-if="index === crumbs.length - 1">
          {{ crumb.name }}
        </template>
        <router-link v-else :to="crumb.path">
          {{ crumb.name }}
        </router-link>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    crumbs() {
      const route = this.$route
      const paths = route.path.split('/').filter(Boolean)
      return paths.map((path, index) => {
        return {
          name: this.getPageName(path),
          path: '/' + paths.slice(0, index + 1).join('/')
        }
      })
    }
  },
  methods: {
    getPageName(path) {
      const names = {
        'exercises': 'Упражнения',
        'tips': 'Советы',
        'hotline': 'Горячая линия',
        'diary': 'Дневник',
        'diagnostics': 'Диагностика'
      }
      return names[path] || path
    }
  }
}
</script>

<style scoped>
.breadcrumbs {
  margin: 16px 0;
  font-size: 14px;
}

.breadcrumbs ol {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.breadcrumbs li:not(:last-child):after {
  content: '/';
  margin-left: 8px;
  color: #696E76;
}

.breadcrumbs a {
  color: #2864A4;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}
</style> 