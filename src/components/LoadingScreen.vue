<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="loading-container">
      <div class="logo-container">
        <div class="logo-text">AB</div>
        <div class="logo-subtitle">Ahmed Bouzaffour</div>
      </div>
      
      <div class="loading-animation">
        <div class="loading-dots">
          <div class="dot" v-for="n in 3" :key="n" :style="{ animationDelay: `${n * 0.2}s` }"></div>
        </div>
        <div class="loading-text">Loading Portfolio...</div>
      </div>
      
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: `${progress}%` }"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  props: {
    isLoading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      progress: 0
    }
  },
  mounted() {
    this.simulateProgress();
  },
  methods: {
    simulateProgress() {
      const interval = setInterval(() => {
        this.progress += Math.random() * 15;
        if (this.progress >= 100) {
          this.progress = 100;
          clearInterval(interval);
          setTimeout(() => {
            this.$emit('loading-complete');
          }, 500);
        }
      }, 100);
    }
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 50%, #dee2e6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: fadeOut 0.5s ease-out 2.5s forwards;
}

@keyframes fadeOut {
  to {
    opacity: 0;
    visibility: hidden;
  }
}

.loading-container {
  text-align: center;
  max-width: 400px;
  width: 90%;
  padding: 3rem 2rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.logo-container {
  margin-bottom: 3rem;
}

.logo-text {
  font-size: 3.5rem;
  font-weight: 700;
  color: #2563eb;
  font-family: 'Orbitron', monospace;
  text-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
  animation: gentleGlow 3s ease-in-out infinite alternate;
  letter-spacing: 2px;
}

@keyframes gentleGlow {
  from {
    text-shadow: 0 2px 8px rgba(37, 99, 235, 0.2);
  }
  to {
    text-shadow: 0 4px 16px rgba(37, 99, 235, 0.3), 0 0 20px rgba(37, 99, 235, 0.1);
  }
}

.logo-subtitle {
  font-size: 1.1rem;
  color: #4b5563;
  opacity: 0.9;
  margin-top: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.5px;
}

.loading-animation {
  margin-bottom: 2.5rem;
}

.loading-dots {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 1.25rem;
}

.dot {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 50%;
  animation: gentleBounce 1.6s ease-in-out infinite both;
  box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);
}

@keyframes gentleBounce {
  0%, 80%, 100% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  40% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.loading-text {
  color: #6b7280;
  font-size: 0.95rem;
  opacity: 0.8;
  animation: gentlePulse 2.5s ease-in-out infinite;
  font-weight: 400;
  letter-spacing: 0.3px;
}

@keyframes gentlePulse {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
  }
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: rgba(107, 114, 128, 0.1);
  border-radius: 3px;
  overflow: hidden;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #1d4ed8, #3b82f6);
  border-radius: 3px;
  transition: width 0.3s ease;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
  position: relative;
}

.progress-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

/* Dark theme override (if needed) */
:global(.dark-theme) .loading-screen {
  background: linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%);
}

:global(.dark-theme) .loading-container {
  background: rgba(31, 41, 55, 0.95);
  border: 1px solid rgba(75, 85, 99, 0.3);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 8px 16px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

:global(.dark-theme) .logo-subtitle,
:global(.dark-theme) .loading-text {
  color: #d1d5db;
}

:global(.dark-theme) .progress-bar {
  background: rgba(156, 163, 175, 0.2);
}
</style> 