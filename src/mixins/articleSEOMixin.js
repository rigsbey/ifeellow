export default {
  mounted() {
    this.addArticleSchema()
  },
  methods: {
    addArticleSchema() {
      const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": this.$route.meta.title,
        "description": this.$route.meta.description,
        "author": {
          "@type": "Organization",
          "name": "ifeellow"
        },
        "publisher": {
          "@type": "Organization",
          "name": "ifeellow",
          "logo": {
            "@type": "ImageObject",
            "url": "https://ifeellow.com/logo.png"
          }
        },
        "datePublished": this.article.date,
        "dateModified": this.article.date
      }

      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(schema)
      document.head.appendChild(script)
    }
  }
} 