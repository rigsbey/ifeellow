<template>
  <div class="article-container">
    <div class="article-header">
      <h1>{{ article.title }}</h1>
      <div class="article-meta">
        <span class="article-date">{{ article.date }}</span>
        <span class="article-reading-time">{{ article.readingTime }} min read</span>
      </div>
    </div>
    <img :src="article.image" :alt="article.title" class="article-main-image">
    <div class="article-content" v-html="article.content"></div>
  </div>
</template>

<script>
export default {
  name: 'ArticleView',
  props: {
    articleId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      article: null
    }
  },
  created() {
    // В реальном приложении здесь будет запрос к API
    this.article = this.getArticleData(this.articleId)
  },
  methods: {
    getArticleData(id) {
      // Объект со всеми статьями
      const articles = {
        'grounding-techniques': {
          title: 'Grounding Techniques: Quick Ways to Calm Anxiety',
          date: 'January 28, 2024',
          readingTime: 5,
          image: '/images/articles/grounding-techniques.jpg',
          content: `
            <h2>What are Grounding Techniques?</h2>
            <p>Grounding techniques are strategies that help reconnect you with the present moment when anxiety threatens to overwhelm you. These simple but effective methods can help you regain control and reduce anxiety symptoms quickly.</p>
            
            <h2>The 5-4-3-2-1 Method</h2>
            <p>One of the most effective grounding techniques is the 5-4-3-2-1 method. Here's how it works:</p>
            <ul>
              <li>Name 5 things you can see</li>
              <li>Name 4 things you can touch</li>
              <li>Name 3 things you can hear</li>
              <li>Name 2 things you can smell</li>
              <li>Name 1 thing you can taste</li>
            </ul>
            
            <h2>Physical Grounding Techniques</h2>
            <p>Sometimes, physical sensations can help anchor you to the present moment. Try these techniques:</p>
            <ul>
              <li>Hold an ice cube in your hand</li>
              <li>Focus on your breathing</li>
              <li>Press your feet firmly into the ground</li>
              <li>Run cool or warm water over your hands</li>
            </ul>
          `
        },
        'understanding-panic-attacks': {
          title: 'Understanding Panic Attacks: A Comprehensive Guide',
          date: 'January 29, 2024',
          readingTime: 7,
          image: '/images/articles/panic-attacks.jpg',
          content: `
            <h2>What is a Panic Attack?</h2>
            <p>A panic attack is an intense surge of fear or extreme discomfort that reaches a peak within minutes...</p>
          `
        },
        'breathing-exercises': {
          title: 'Breathing Exercises for Immediate Stress Relief',
          date: 'January 30, 2024',
          readingTime: 4,
          image: '/images/articles/breathing-exercises.jpg',
          content: `
            <h2>The Power of Breath</h2>
            <p>Proper breathing is one of the most effective ways to reduce stress and anxiety...</p>
          `
        }
      };

      // Возвращаем статью по id или первую статью, если id не найден
      return articles[id] || articles['grounding-techniques'];
    }
  }
}
</script>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

.article-header {
  margin-bottom: 32px;
}

.article-meta {
  color: #696E76;
  font-size: 14px;
  margin-top: 8px;
}

.article-date {
  margin-right: 16px;
}

.article-main-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 32px;
}

.article-content {
  font-size: 18px;
  line-height: 1.8;
  color: #2C3E50;
}

.article-content h2 {
  margin: 32px 0 16px;
  font-size: 24px;
  color: #15293E;
}

.article-content p {
  margin-bottom: 24px;
}

.article-content ul {
  margin-bottom: 24px;
  padding-left: 24px;
}

.article-content li {
  margin-bottom: 8px;
}
</style> 