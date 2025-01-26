<template>
  <div class="container">
    <div class="main-content">
      <div class="content">
        <h2 class="section-title">Diary</h2>
        <p class="description">
          Here you can write down your thoughts and feelings.
          Keeping a diary helps you better understand yourself and your emotions.
        </p>

        <div class="diary-form">
          <div class="form-group">
            <label>Date</label>
            <el-date-picker
              v-model="entryDate"
              type="date"
              placeholder="Select date"
              format="DD.MM.YYYY"
              value-format="YYYY-MM-DD"
            />
          </div>

          <div class="form-group">
            <label>How are you feeling today?</label>
            <el-rate
              v-model="mood"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
              :texts="['Bad', 'Okay', 'Good', 'Very Good', 'Excellent']"
              show-text
            />
          </div>

          <div class="form-group">
            <label>Your thoughts</label>
            <el-input
              v-model="entry"
              type="textarea"
              :rows="6"
              placeholder="Describe your thoughts and feelings..."
              resize="none"
            />
          </div>

          <div class="form-actions">
            <el-button type="primary" @click="saveEntry">
              Save entry
            </el-button>
          </div>
        </div>

        <div class="previous-entries" v-if="entries.length > 0">
          <h3 class="subsection-title">Previous entries</h3>
          <el-timeline>
            <el-timeline-item
              v-for="entry in entries"
              :key="entry.id"
              :timestamp="entry.date"
              placement="top"
            >
              <el-card class="entry-card">
                <div class="entry-mood">
                  Mood: <el-rate v-model="entry.mood" disabled />
                </div>
                <p class="entry-text">{{ entry.text }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-logo">THNX</div>
      <router-link to="/privacy">Privacy Policy</router-link>
      <router-link to="/terms">Terms of Service</router-link>
      <span>Powered by <span class="open-source">Open Source</span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiaryPage',
  data() {
    return {
      entryDate: new Date().toISOString().split('T')[0],
      entry: '',
      mood: 3,
      entries: [
        {
          id: 1,
          date: '2024-03-19',
          mood: 4,
          text: 'Today was a productive day. I feel motivated.'
        },
        {
          id: 2,
          date: '2024-03-18',
          mood: 3,
          text: "A regular day. I'm a bit tired, but overall it's okay."
        }
      ]
    };
  },
  methods: {
    saveEntry() {
      const newEntry = {
        id: this.entries.length + 1,
        date: this.entryDate,
        mood: this.mood,
        text: this.entry
      };
      
      this.entries.unshift(newEntry);
      this.entry = '';
      this.mood = 3;
      
      this.$message({
        message: 'Entry saved',
        type: 'success'
      });
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  min-height: 100vh;
  background: #FAFAFD;
}

.main-content {
  padding: 0 130px;
  margin-bottom: 100px;
}

.content {
  background: white;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
  padding: 40px;
}

.section-title {
  font-size: 28px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 16px;
}

.description {
  font-size: 16px;
  color: #696E76;
  margin-bottom: 40px;
  line-height: 1.6;
}

.diary-form {
  max-width: 800px;
}

.form-group {
  margin-bottom: 30px;
}

.form-group label {
  display: block;
  color: #696E76;
  margin-bottom: 10px;
  font-weight: 500;
}

.form-actions {
  margin-top: 30px;
}

.subsection-title {
  font-size: 24px;
  font-weight: 600;
  color: #15293E;
  margin: 40px 0 24px;
}

.entry-card {
  margin-bottom: 20px;
}

.entry-mood {
  margin-bottom: 16px;
  color: #696E76;
}

.entry-text {
  color: #15293E;
  line-height: 1.6;
}

.footer {
  margin-top: 40px;
  background: #F0F1F6;
  padding: 25px 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 185px;
}

.footer-logo {
  background: #E31235;
  width: 50px;
  height: 38px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
}

.footer a {
  color: inherit;
  text-decoration: none;
}

.footer a:hover {
  color: #2864A4;
}

.open-source {
  color: #2864A4;
}

/* Стили для Element Plus компонентов */
:deep(.el-input__inner),
:deep(.el-textarea__inner) {
  background: #F8F9FC;
  border: none;
  border-radius: 10px;
  padding: 12px 20px;
}

:deep(.el-textarea__inner) {
  min-height: 150px;
}

:deep(.el-button--primary) {
  background-color: #2864A4;
  border-color: #2864A4;
  padding: 12px 40px;
  font-size: 16px;
  height: auto;
  border-radius: 10px;
}

:deep(.el-button--primary:hover) {
  background-color: #1e4f8a;
  border-color: #1e4f8a;
}

:deep(.el-timeline-item__node) {
  background-color: #2864A4;
}

:deep(.el-timeline-item__timestamp) {
  color: #696E76;
}

:deep(.el-card) {
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
}

:deep(.el-rate) {
  margin-top: 8px;
}

:deep(.el-date-editor) {
  width: 100%;
  max-width: 200px;
}
</style> 