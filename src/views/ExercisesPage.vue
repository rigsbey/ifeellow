<template>
  <div class="content-container">
    <div class="content-card">
      <h2 class="section-title">Exercises</h2>
      <p class="description">
        Here are techniques and exercises that will help you relieve tension
        and improve your emotional state.
      </p>

      <div class="exercises-content">
        <el-tabs v-model="activeExercise">
          <el-tab-pane label="4-4-6 Breathing" name="breathing">
            <div class="exercise-card">
              <h3>Breathing Exercise</h3>
              <p>Follow the animation and breathe in the indicated rhythm:</p>
              
              <div class="animation-container">
                <dotlottie-player
                  ref="lottiePlayer"
                  src="/ifeellow/breathing-animation.lottie"
                  background="transparent"
                  speed="1"
                  style="width: 300px; height: 300px;"
                  :autoplay="false"
                  :loop="true"
                ></dotlottie-player>
                
                <el-button 
                  type="primary"
                  class="breathing-button" 
                  @click="toggleBreathing"
                  size="large"
                >
                  {{ isBreathingActive ? 'Stop' : 'Start' }}
                </el-button>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Grounding" name="grounding">
            <div class="exercise-card">
              <h3>Grounding Technique</h3>
              <p>Let's explore your surroundings together. This will help you calm down and return to the present moment.</p>
              
              <div class="grounding-steps">
                <div class="progress-circles">
                  <div 
                    v-for="(step, index) in ['Sight', 'Touch', 'Sound', 'Smell', 'Taste']" 
                    :key="step"
                    class="progress-step"
                    :class="{
                      'active': index === groundingStep,
                      'completed': index < groundingStep
                    }"
                  >
                    <div class="step-icon">
                      <el-icon v-if="index === 0"><View /></el-icon>
                      <el-icon v-if="index === 1"><Pointer /></el-icon>
                      <el-icon v-if="index === 2"><Headset /></el-icon>
                      <el-icon v-if="index === 3"><Compass /></el-icon>
                      <el-icon v-if="index === 4"><ForkSpoon /></el-icon>
                    </div>
                    <span class="step-name">{{ step }}</span>
                  </div>
                </div>
                
                <div class="step-content" :key="groundingStep">
                  <div v-if="groundingStep === 0" class="sense-group">
                    <div class="step-header">
                      <h4>What do you see around you?</h4>
                      <p class="step-hint">Look around and write down 5 items that caught your attention</p>
                    </div>
                    <div class="input-cards">
                      <div 
                        v-for="i in 5" 
                        :key="`see-${i}`" 
                        class="input-card"
                        :class="{ 'filled': grounding.see[i-1].trim() !== '' }"
                      >
                        <el-input
                          v-model="grounding.see[i-1]"
                          :placeholder="getVisualPlaceholder(i)"
                          @input="checkStepCompletion"
                        />
                      </div>
                    </div>
                    <div class="step-navigation">
                      <el-button 
                        type="primary" 
                        @click="nextGroundingStep"
                        :disabled="!isCurrentStepComplete"
                      >
                        Next
                      </el-button>
                    </div>
                  </div>
                 
                  <div v-if="groundingStep === 1" class="sense-group">
                    <div class="step-header">
                      <h4>What do you feel on your body?</h4>
                      <p class="step-hint">Feel 4 different sensations</p>
                    </div>
                    <div class="input-cards">
                      <div 
                        v-for="i in 4" 
                        :key="`feel-${i}`" 
                        class="input-card"
                        :class="{ 'filled': grounding.feel[i-1].trim() !== '' }"
                      >
                        <el-input
                          v-model="grounding.feel[i-1]"
                          :placeholder="getTactilePlaceholder(i)"
                          @input="checkStepCompletion"
                        />
                      </div>
                    </div>
                    <div class="step-navigation">
                      <el-button 
                        type="primary" 
                        @click="nextGroundingStep"
                        :disabled="!isCurrentStepComplete"
                      >
                        Next
                      </el-button>
                    </div>
                  </div>
                 
                  <div v-if="groundingStep === 2" class="sense-group">
                    <div class="step-header">
                      <h4>What do you hear around you?</h4>
                      <p class="step-hint">Write down 3 sounds you hear</p>
                    </div>
                    <div class="input-cards">
                      <div 
                        v-for="i in 3" 
                        :key="`hear-${i}`" 
                        class="input-card"
                        :class="{ 'filled': grounding.hear[i-1].trim() !== '' }"
                      >
                        <el-input
                          v-model="grounding.hear[i-1]"
                          :placeholder="getAuditoryPlaceholder(i)"
                          @input="checkStepCompletion"
                        />
                      </div>
                    </div>
                    <div class="step-navigation">
                      <el-button 
                        type="primary" 
                        @click="nextGroundingStep"
                        :disabled="!isCurrentStepComplete"
                      >
                        Next
                      </el-button>
                    </div>
                  </div>
                 
                  <div v-if="groundingStep === 3" class="sense-group">
                    <div class="step-header">
                      <h4>What do you smell around you?</h4>
                      <p class="step-hint">Write down 2 scents you smell</p>
                    </div>
                    <div class="input-cards">
                      <div 
                        v-for="i in 2" 
                        :key="`smell-${i}`" 
                        class="input-card"
                        :class="{ 'filled': grounding.smell[i-1].trim() !== '' }"
                      >
                        <el-input
                          v-model="grounding.smell[i-1]"
                          :placeholder="getOlfactoryPlaceholder(i)"
                          @input="checkStepCompletion"
                        />
                      </div>
                    </div>
                    <div class="step-navigation">
                      <el-button 
                        type="primary" 
                        @click="nextGroundingStep"
                        :disabled="!isCurrentStepComplete"
                      >
                        Next
                      </el-button>
                    </div>
                  </div>
                 
                  <div v-if="groundingStep === 4" class="sense-group">
                    <div class="step-header">
                      <h4>What do you taste on your tongue?</h4>
                      <p class="step-hint">Write down your taste</p>
                    </div>
                    <div class="input-cards">
                      <div 
                        class="input-card"
                        :class="{ 'filled': grounding.taste.trim() !== '' }"
                      >
                        <el-input
                          v-model="grounding.taste"
                          :placeholder="getGustatoryPlaceholder()"
                          @input="checkStepCompletion"
                        />
                      </div>
                    </div>
                    <div class="step-navigation">
                      <el-button 
                        type="primary" 
                        @click="nextGroundingStep"
                        :disabled="!isCurrentStepComplete"
                      >
                        Next
                      </el-button>
                    </div>
                  </div>
                </div>
                
                <div v-if="groundingStep === 5" class="completion-message">
                  <h4>Great! You've completed the exercise</h4>
                  <p>Now you are fully present in the current moment</p>
                  <el-button type="primary" @click="resetGrounding">
                    Start Over
                  </el-button>
                </div>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="Meditation" name="meditation">
            <div class="exercise-card">
              <h3>Relaxing Meditation</h3>
              <p>Listen to the audio and follow the instructions:</p>

              <div class="video-container">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/inpok4MKVLM"
                  title="Meditation Video"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>

        <div class="feedback-section" v-if="showFeedback">
          <h3>How do you feel after the exercise?</h3>
          <div class="feedback-buttons">
            <el-button @click="submitFeedback('better')">Better</el-button>
            <el-button @click="submitFeedback('slightly-better')">Slightly Better</el-button>
            <el-button @click="submitFeedback('same')">No Change</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { gsap } from 'gsap'
import { 
  View, 
  Pointer,
  Headset,
  Compass,
  ForkSpoon
} from '@element-plus/icons-vue'
import { DotLottiePlayer } from '@dotlottie/player-component'

console.log('Компонент ExercisesPage инициализирован')

const isBreathingActive = ref(false)
const showFeedback = ref(false)
const activeExercise = ref('breathing')
const groundingStep = ref(0)
const isCurrentStepComplete = ref(false)
const breathingPhase = ref('')
const lottiePlayer = ref(null)

// Отслеживаем изменение активного упражнения
watch(activeExercise, (newValue) => {
  console.log('Выбрано упражнение:', newValue)
})

const grounding = ref({
  see: ['', '', '', '', ''],
  feel: ['', '', '', ''],
  hear: ['', '', ''],
  smell: ['', ''],
  taste: ''
})

onMounted(() => {
  console.log('Компонент смонтирован')
  // Проверяем, зарегистрирован ли компонент
  if (!customElements.get('dotlottie-player')) {
    customElements.define('dotlottie-player', DotLottiePlayer)
  }
})

onBeforeUnmount(() => {
  console.log('Компонент будет размонтирован')
  stopBreathing()
})

const toggleBreathing = () => {
  console.log('Переключение состояния дыхательного упражнения')
  if (isBreathingActive.value) {
    console.log('Останавливаем упражнение')
    stopBreathing()
  } else {
    console.log('Начинаем упражнение')
    startBreathing()
  }
}

const startBreathing = () => {
  console.log('Начинаем упражнение')
  isBreathingActive.value = true
  
  const player = document.querySelector('dotlottie-player')
  if (player) {
    console.log('Запускаем анимацию')
    player.play()
    
    gsap.timeline({ repeat: -1 })
      .to(breathingPhase, {
        duration: 4,
        onStart: () => breathingPhase.value = 'Breathe in...',
      })
      .to(breathingPhase, {
        duration: 4,
        onStart: () => breathingPhase.value = 'Hold...',
      })
      .to(breathingPhase, {
        duration: 6,
        onStart: () => breathingPhase.value = 'Breathe out...',
      })
  }
}

const stopBreathing = () => {
  console.log('Останавливаем упражнение')
  isBreathingActive.value = false
  breathingPhase.value = ''
  
  const player = document.querySelector('dotlottie-player')
  if (player) {
    player.stop()
  }
  
  gsap.killTweensOf(breathingPhase)
  
  showFeedback.value = true
  console.log('Показываем форму обратной связи')
}

const submitFeedback = (result) => {
  console.log('Получена обратная связь:', result)
  console.log('Сохранение результата упражнения')
  showFeedback.value = false
}

// Отслеживаем изменения в форме заземления
watch(() => grounding.value, (newValue) => {
  console.log('Обновлены данные заземления:', newValue)
}, { deep: true })

const getVisualPlaceholder = (index) => {
  const examples = [
    'Example: window',
    'Example: table',
    'Example: plant',
    'Example: book',
    'Example: cup'
  ]
  return examples[index - 1]
}

const getTactilePlaceholder = (index) => {
  const examples = [
    'Example: warmth',
    'Example: cold',
    'Example: movement',
    'Example: pressure'
  ]
  return examples[index - 1]
}

const getAuditoryPlaceholder = (index) => {
  const examples = [
    'Example: noise',
    'Example: silence',
    'Example: birds singing'
  ]
  return examples[index - 1]
}

const getOlfactoryPlaceholder = (index) => {
  const examples = [
    'Example: flowers',
    'Example: food',
    'Example: water'
  ]
  return examples[index - 1]
}

const getGustatoryPlaceholder = () => {
  const examples = [
    'Example: sweetness',
    'Example: sourness',
    'Example: saltiness'
  ]
  return examples[Math.floor(Math.random() * examples.length)]
}

const checkStepCompletion = () => {
  switch(groundingStep.value) {
    case 0:
      isCurrentStepComplete.value = grounding.value.see.some(item => item.trim() !== '')
      break
    case 1:
      isCurrentStepComplete.value = grounding.value.feel.some(item => item.trim() !== '')
      break
    case 2:
      isCurrentStepComplete.value = grounding.value.hear.some(item => item.trim() !== '')
      break
    case 3:
      isCurrentStepComplete.value = grounding.value.smell.some(item => item.trim() !== '')
      break
    case 4:
      isCurrentStepComplete.value = grounding.value.taste.trim() !== ''
      break
  }
}

const nextGroundingStep = () => {
  groundingStep.value++
  isCurrentStepComplete.value = false
}

const resetGrounding = () => {
  groundingStep.value = 0
  grounding.value = {
    see: ['', '', '', '', ''],
    feel: ['', '', '', ''],
    hear: ['', '', ''],
    smell: ['', ''],
    taste: ''
  }
}
</script>

<style scoped>
.content-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.content-card {
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  color: #15293E;
  margin-bottom: 16px;
}

.description {
  font-size: 18px;
  color: #696E76;
  margin-bottom: 32px;
  line-height: 1.6;
}

.exercise-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
}

.animation-container {
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.breathing-button {
  margin-top: 20px !important;
  width: 120px !important;
}

.grounding-steps {
  margin-top: 40px;
}

.progress-circles {
  display: flex;
  justify-content: space-between;
  margin: 40px 0;
  padding: 0 20px;
}

.progress-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.progress-step.active {
  opacity: 1;
  transform: scale(1.1);
}

.progress-step.completed {
  opacity: 0.8;
}

.step-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #F0F7FF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  transition: all 0.3s ease;
}

.active .step-icon {
  background: #2864A4;
  color: white;
  box-shadow: 0 4px 12px rgba(40, 100, 164, 0.2);
}

.step-name {
  font-size: 14px;
  color: #696E76;
}

.active .step-name {
  color: #2864A4;
  font-weight: 600;
}

.input-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;
}

.input-card {
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.input-card.filled {
  background: #F0F7FF;
  border-left: 4px solid #2864A4;
}

.step-header {
  margin-bottom: 24px;
}

.step-header h4 {
  font-size: 24px;
  color: #15293E;
  margin-bottom: 8px;
}

.step-hint {
  color: #696E76;
  font-size: 16px;
}

.step-navigation {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.completion-message {
  text-align: center;
  padding: 40px;
  background: #F8F9FC;
  border-radius: 12px;
  margin-top: 30px;
}

.completion-message h4 {
  color: #2864A4;
  margin-bottom: 12px;
}

.completion-message p {
  color: #696E76;
  margin-bottom: 24px;
}

.video-container {
  position: relative;
  width: 100%;
  margin: 30px 0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.video-container iframe {
  display: block;
  border-radius: 12px;
}

.feedback-section {
  margin-top: 40px;
  text-align: center;
}

.feedback-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

:deep(.el-tabs__nav) {
  margin-bottom: 20px;
}

.thoughts-exercise {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 40px auto;
}

.release-button {
  align-self: center;
  background: linear-gradient(135deg, #91C4FF 0%, #6BA6FF 100%);
  border: none;
  color: white;
  padding: 12px 32px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.release-button:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(145, 196, 255, 0.4);
}

.release-button:disabled {
  background: #E5E7EB;
  cursor: not-allowed;
}

.flying-thought-container {
  height: 400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.flying-thought {
  position: relative;
  background: linear-gradient(135deg, #91C4FF 0%, #F0F7FF 100%);
  padding: 20px;
  border-radius: 20px;
  box-shadow: 
    0 4px 12px rgba(145, 196, 255, 0.3),
    0 8px 24px rgba(145, 196, 255, 0.2);
  max-width: 400px;
  text-align: center;
  color: #15293E;
  font-size: 16px;
  line-height: 1.5;
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  z-index: 2;
}

.particles {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #91C4FF 0%, #F0F7FF 100%);
  border-radius: 50%;
  opacity: 0.6;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .content-container {
    padding: 0 16px;
  }
  
  .content-card {
    padding: 24px;
    border-radius: 16px;
  }
  
  .exercise-card {
    padding: 20px;
  }
}

:deep(.el-button--primary) {
  background: linear-gradient(135deg, #91C4FF 0%, #6BA6FF 100%);
  border: none;
  padding: 12px 32px;
  font-weight: 500;
  transition: all 0.3s ease;
}

:deep(.el-button--primary:hover:not(:disabled)) {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(145, 196, 255, 0.4);
}

:deep(.el-button--primary:disabled) {
  background: #E5E7EB;
  opacity: 0.7;
}
</style> 