<template>
  <div class="content-container">
    <div class="content-card">
      <h2 class="section-title">Diagnostics</h2>
      <p class="description">
        Answer a few questions to help us understand your current state
        and provide the most appropriate support.
      </p>

      <div class="diagnostics-content" v-if="!testCompleted">
        <el-steps :active="currentStep" finish-status="success" class="steps">
          <el-step v-for="(question, index) in questions" :key="index" :title="`Question ${index + 1}`" />
        </el-steps>

        <div class="question-card">
          <h3>{{ currentQuestion.text }}</h3>
          
          <div class="answers">
            <el-radio-group v-model="currentAnswer">
              <el-radio 
                v-for="(answer, index) in currentQuestion.answers" 
                :key="index" 
                :label="index"
                border
              >
                {{ answer.text }}
              </el-radio>
            </el-radio-group>
          </div>

          <div class="navigation-buttons">
            <el-button 
              v-if="currentStep > 0" 
              @click="previousQuestion"
            >
              Back
            </el-button>
            <el-button 
              type="primary" 
              @click="nextQuestion"
              :disabled="currentAnswer === null"
            >
              {{ currentStep === questions.length - 1 ? 'Finish' : 'Next' }}
            </el-button>
          </div>
        </div>
      </div>

      <div class="results" v-else>
        <h3>Diagnostic Results</h3>
        <div class="result-summary">
          <p>{{ getSummary }}</p>
        </div>

        <div class="recommendations">
          <h4>Recommended actions:</h4>
          <div class="recommendation-buttons">
            <el-button 
              class="recommendation-button" 
              @click="$router.push('/exercises#breathing')"
            >
              <PhWind class="tag-icon" />
              Do breathing exercises
            </el-button>
            
            <el-button 
              class="recommendation-button" 
              @click="$router.push('/exercises#grounding')"
            >
              <PhTree class="tag-icon" />
              Try grounding techniques
            </el-button>
            
            <el-button 
              class="recommendation-button" 
              @click="$router.push('/diary')"
            >
              <PhNotebook class="tag-icon" />
              Write your thoughts in the diary
            </el-button>
          </div>
        </div>

        <div class="action-buttons">
          <el-button type="primary" @click="$router.push('/exercises')">
            Go to Exercises
          </el-button>
          <el-button type="danger" @click="$router.push('/hotline')">
            Get Professional Help
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { PhWind, PhTree, PhNotebook } from '@phosphor-icons/vue'

export default {
  name: 'DiagnosticsPage',
  components: {
    PhWind,
    PhTree,
    PhNotebook
  },
  setup() {
    const currentStep = ref(0)
    const currentAnswer = ref(null)
    const testCompleted = ref(false)
    const answers = ref([])

    const questions = [
      {
        text: "How would you rate your current emotional state?",
        answers: [
          { text: "I feel good", value: 0 },
          { text: "I feel slightly anxious", value: 1 },
          { text: "I feel very anxious", value: 2 },
          { text: "I feel overwhelmed", value: 3 }
        ]
      },
      {
        text: "How strong are these feelings?",
        answers: [
          { text: "Very strong", score: 3 },
          { text: "Moderate", score: 2 },
          { text: "Weak", score: 1 }
        ]
      },
      {
        text: "How long has this been going on?",
        answers: [
          { text: "A few hours", score: 1 },
          { text: "A few days", score: 2 },
          { text: "More than a week", score: 3 }
        ]
      },
      {
        text: "Does this affect your daily life?",
        answers: [
          { text: "Yes, significantly", score: 3 },
          { text: "A little", score: 2 },
          { text: "Almost not at all", score: 1 }
        ]
      },
      {
        text: "Do you have thoughts of self-harm?",
        answers: [
          { text: "Yes", score: 3 },
          { text: "Sometimes", score: 2 },
          { text: "No", score: 0 }
        ]
      }
    ]

    const currentQuestion = computed(() => questions[currentStep.value])

    const getSummary = computed(() => {
      const totalScore = answers.value.reduce((sum, answer) => {
        return sum + questions[answer.questionIndex].answers[answer.answerIndex].score
      }, 0)

      if (totalScore >= 12) {
        return 'Your condition requires attention. We recommend contacting a specialist.'
      } else if (totalScore >= 8) {
        return 'You have an elevated level of stress. Try relaxation techniques.'
      } else {
        return 'Your condition is normal, but you can improve your well-being with our exercises.'
      }
    })

    const recommendations = computed(() => {
      const totalScore = answers.value.reduce((sum, answer) => {
        return sum + questions[answer.questionIndex].answers[answer.answerIndex].score
      }, 0)

      if (totalScore >= 12) {
        return [
          'Contact a psychologist immediately',
          'Call the crisis hotline',
          'Don\'t stay alone'
        ]
      } else if (totalScore >= 8) {
        return [
          'Do breathing exercises',
          'Try grounding techniques',
          'Write your thoughts in the diary'
        ]
      } else {
        return [
          'Regularly do relaxation exercises',
          'Keep an emotion diary',
          'Read our stress management tips'
        ]
      }
    })

    const nextQuestion = () => {
      if (currentAnswer.value !== null) {
        answers.value[currentStep.value] = {
          questionIndex: currentStep.value,
          answerIndex: currentAnswer.value
        }
        
        if (currentStep.value < questions.length - 1) {
          currentStep.value++
          currentAnswer.value = null
        } else {
          testCompleted.value = true
        }
      }
    }

    const previousQuestion = () => {
      if (currentStep.value > 0) {
        currentStep.value--
        currentAnswer.value = answers.value[currentStep.value]?.answerIndex || null
      }
    }

    return {
      currentStep,
      currentAnswer,
      testCompleted,
      questions,
      currentQuestion,
      getSummary,
      recommendations,
      nextQuestion,
      previousQuestion
    }
  }
}
</script>

<style scoped>
.content-container {
  padding: 30px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.content-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 16px;
}

.steps {
  margin-bottom: 40px;
}

.question-card {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.answers {
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.results {
  background: white;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
}

.result-summary {
  margin: 20px 0;
  padding: 20px;
  background: #F8F9FC;
  border-radius: 8px;
}

.recommendations {
  margin: 30px 0;
}

.recommendation-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin: 20px 0;
}

.recommendation-button {
  background: #E0F7FA;
  border: 1px solid #B2EBF2;
  color: #00796B;
  transition: all 0.2s ease;
}

.recommendation-button:hover {
  background: #B2EBF2;
  border-color: #80DEEA;
}

.tag-icon {
  width: 18px;
  height: 18px;
}

.action-buttons {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}

.description {
  font-family: var(--font-body);
}

/* Цвета для иконок */
.phone-icon {
  fill: #C8FACC; /* Светло-зеленый для иконки звонка */
}

.copy-icon {
  fill: #D0F0FD; /* Светло-голубой для иконки копирования */
}

/* Цвета для значков "24/7" и "Free" */
.icon-24-7 {
  background: #F4F9FF; /* Нежный голубой фон */
  color: #4A90E2; /* Синий текст для акцента */
}
</style> 