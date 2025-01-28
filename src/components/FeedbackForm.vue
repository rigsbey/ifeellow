<template>
  <div class="feedback-container" :class="{ 'is-open': isOpen }">
    <div class="feedback-button" @click="toggleForm">
      <el-icon v-if="!isOpen"><ChatLineRound /></el-icon>
      <el-icon v-else><Close /></el-icon>
    </div>

    <div class="feedback-form" v-show="isOpen">
      <h3>Contact Us</h3>
      <p class="form-description">We are here to help. Please send us a message.</p>

      <el-form 
        ref="feedbackForm"
        :model="formData"
        :rules="rules"
        @submit.prevent="handleSubmit"
      >
        <el-form-item prop="message">
          <el-input
            v-model="formData.message"
            type="textarea"
            rows="6"
            placeholder="Your message..."
            resize="none"
          />
        </el-form-item>

        <el-form-item>
          <el-button 
            type="primary" 
            native-type="submit"
            :loading="loading"
            class="submit-button"
          >
            Send
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { ChatLineRound, Close } from '@element-plus/icons-vue'
import emailjs from '@emailjs/browser'
import { ElMessage } from 'element-plus'

export default {
  name: 'FeedbackForm',
  
  components: {
    ChatLineRound,
    Close
  },

  setup() {
    const isOpen = ref(false)
    const loading = ref(false)
    const feedbackForm = ref(null)

    const formData = reactive({
      message: ''
    })

    const rules = {
      message: [
        { required: true, message: 'Please enter a message', trigger: 'blur' }
      ]
    }

    const toggleForm = () => {
      isOpen.value = !isOpen.value
    }

    const handleSubmit = async () => {
      try {
        loading.value = true
        
        await emailjs.send(
          'service_alrbm6a',
          'template_dnvwt7p',
          {
            message: formData.message,
            reply_to: 'anonymous@user.com'
          },
          'BPXhgRofLupqeSc2c'
        )

        ElMessage.success('Message sent successfully')
        formData.message = ''
        isOpen.value = false
      } catch (error) {
        console.error('Error:', error)
        ElMessage.error('Error sending message')
      } finally {
        loading.value = false
      }
    }

    return {
      isOpen,
      loading,
      formData,
      rules,
      feedbackForm,
      toggleForm,
      handleSubmit
    }
  }
}
</script>

<style scoped>
.feedback-container {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

.feedback-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #2864A4;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(40, 100, 164, 0.3);
  transition: all 0.3s ease;
}

.feedback-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(40, 100, 164, 0.4);
}

.feedback-form {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 320px;
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.feedback-form h3 {
  font-family: var(--font-heading);
  font-size: 24px;
  color: #15293E;
  margin-bottom: 8px;
}

.form-description {
  color: #696E76;
  margin-bottom: 24px;
  font-size: 14px;
}

.submit-button {
  width: 100%;
}

@media (max-width: 768px) {
  .feedback-container {
    bottom: 20px;
    right: 20px;
  }

  .feedback-form {
    width: 280px;
  }
}

/* Animations */
.is-open .feedback-button {
  background: #DC3545;
}

:deep(.el-input__wrapper),
:deep(.el-textarea__inner) {
  box-shadow: 0 0 0 1px #E5E7EB inset;
}

:deep(.el-input__wrapper:hover),
:deep(.el-textarea__inner:hover) {
  box-shadow: 0 0 0 1px #2864A4 inset;
}

:deep(.el-button--primary) {
  background: #2864A4;
  border-color: #2864A4;
}

:deep(.el-button--primary:hover) {
  background: #1e4f8a;
  border-color: #1e4f8a;
}
</style> 