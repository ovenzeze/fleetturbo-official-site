<template>
  <div>
    <HeroSection />
    <PricingSection />
    <BenefitsSection />
    <ServicesSection />
    <SupportSection />
    <!-- <PartnersSection /> -->
    <Testimonial
      :title="page.testimonials.title"
      :description="page.testimonials.description"
      :items="page.testimonials.items"
      id="testimonials"
      class="min-h-screen w-fullflex flex-colitems-center justify-center content-center"
    />
    <CTASection />
  </div>
</template>

<script lang="ts" setup>
import HeroSection from '~/components/HeroSection.vue'
import PricingSection from '~/components/PricingSection.vue'
import BenefitsSection from '~/components/BenefitsSection.vue'
import ServicesSection from '~/components/ServicesSection.vue'
import SupportSection from '~/components/SupportSection.vue'
import PartnersSection from '~/components/PartnersSection.vue'
import Testimonial from '~/components/Testimonial.vue'
import CTASection from '~/components/CTASection.vue'

const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

</script>

<style>
/* Placeholder styles for sections */
.hero-section, .pricing-section, .benefits-section, .services-section, .support-section, .partners-section, .testimonials-section, .cta-section {
  padding: 2rem;
}

.hero-bg {
  background-color: #1E3A8A; /* FleetTurbo brand color */
  height: 200px;
}

.hero-content {
  text-align: center;
  color: white;
}

.hero-title {
  font-size: 2rem;
  font-weight: bold;
}

.hero-subtitle {
  font-size: 1.25rem;
}

.pricing-card, .benefit-item, .service-item, .support-item, .partner-logo, .testimonial-card, .cta-section {
  background-color: #F3F4F6; /* Light gray background */
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  text-align: center;
}

.cta-button {
  background-color: #F97316; /* Accent color */
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>

<!-- 设计思路：

1. 整体布局：
   - 采用单页滚动设计，各个部分顺序排列，便于用户浏览和理解。
   - 使用一致的色彩方案和排版风格，确保视觉统一性。
   - 在不同部分之间使用交替的背景色（如白色和浅灰色），以增加视觉层次感。

2. 排版：
   - 使用清晰的层级结构，主标题、副标题和正文字体大小有明显区分。
   - 采用易读的无衬线字体，如 Roboto 或 Open Sans。
   - 标题使用大号加粗字体，突出重要信息。

3. 色彩：
   - 主色调：使用 FleetTurbo 的品牌色（假设为深蓝色 #1E3A8A）。
   - 辅助色：使用与主色调互补的颜色，如橙色 #F97316 作为强调色。
   - 背景色：交替使用白色 #FFFFFF 和浅灰色 #F3F4F6。
   - 文字颜色：深色文字 #1F2937 用于正文，更深的 #111827 用于标题。

4. 图标和图像：
   - 使用 Phosphor Icons 作为主要图标库，保持风格一致性。
   - 在适当位置使用高质量的物流相关图片，增强视觉吸引力。

动画方案：

对于每个部分，我们将使用入场动画来增加页面的动态感和吸引力。所有动画将在元素进入视口时触发。

1. 英雄区域：
   - 动画：背景图片淡入，同时标题和副标题从底部滑入。
   - 实现：使用 CSS transition 和 transform。
   - 代码示例：
     ```css
     .hero-bg {
       opacity: 0;
       transition: opacity 1s ease-out;
     }
     .hero-content {
       opacity: 0;
       transform: translateY(30px);
       transition: opacity 0.8s ease-out, transform 0.8s ease-out;
     }
     .hero-visible .hero-bg {
       opacity: 1;
     }
     .hero-visible .hero-content {
       opacity: 1;
       transform: translateY(0);
     }
     ```

2. 简单定价与透明度：
   - 动画：卡片依次淡入并放大。
   - 实现：使用 CSS animation，为每个卡片设置不同的延迟。
   - 代码示例：
     ```css
     @keyframes fadeInScale {
       from {
         opacity: 0;
         transform: scale(0.9);
       }
       to {
         opacity: 1;
         transform: scale(1);
       }
     }
     .pricing-card {
       animation: fadeInScale 0.5s ease-out forwards;
       opacity: 0;
     }
     .pricing-card:nth-child(1) { animation-delay: 0.1s; }
     .pricing-card:nth-child(2) { animation-delay: 0.2s; }
     .pricing-card:nth-child(3) { animation-delay: 0.3s; }
     ```

3. 为什么选择 FleetTurbo：
   - 动画：每个优势项目从左侧滑入。
   - 实现：使用 CSS animation，设置不同的延迟。
   - 代码示例：
     ```css
     @keyframes slideInLeft {
       from {
         opacity: 0;
         transform: translateX(-30px);
       }
       to {
         opacity: 1;
         transform: translateX(0);
       }
     }
     .benefit-item {
       animation: slideInLeft 0.5s ease-out forwards;
       opacity: 0;
     }
     .benefit-item:nth-child(1) { animation-delay: 0.1s; }
     .benefit-item:nth-child(2) { animation-delay: 0.2s; }
     .benefit-item:nth-child(3) { animation-delay: 0.3s; }
     ```

4. 附加服务：
   - 动画：服务项目依次淡入。
   - 实现：使用 CSS animation，设置不同的延迟。
   - 代码示例：
     ```css
     @keyframes fadeIn {
       from { opacity: 0; }
       to { opacity: 1; }
     }
     .service-item {
       animation: fadeIn 0.5s ease-out forwards;
       opacity: 0;
     }
     .service-item:nth-child(1) { animation-delay: 0.1s; }
     .service-item:nth-child(2) { animation-delay: 0.2s; }
     .service-item:nth-child(3) { animation-delay: 0.3s; }
     ```

5. 客户支持：
   - 动画：支持项目从下方滑入。
   - 实现：使用 CSS animation，设置不同的延迟。
   - 代码示例：
     ```css
     @keyframes slideInUp {
       from {
         opacity: 0;
         transform: translateY(30px);
       }
       to {
         opacity: 1;
         transform: translateY(0);
       }
     }
     .support-item {
       animation: slideInUp 0.5s ease-out forwards;
       opacity: 0;
     }
     .support-item:nth-child(1) { animation-delay: 0.1s; }
     .support-item:nth-child(2) { animation-delay: 0.2s; }
     .support-item:nth-child(3) { animation-delay: 0.3s; }
     ```

6. 合作伙伴和附属机构：
   - 动画：logo 依次淡入并放大。
   - 实现：使用 CSS animation，设置不同的延迟。
   - 代码示例：
     ```css
     @keyframes fadeInScale {
       from {
         opacity: 0;
         transform: scale(0.9);
       }
       to {
         opacity: 1;
         transform: scale(1);
       }
     }
     .partner-logo {
       animation: fadeInScale 0.5s ease-out forwards;
       opacity: 0;
     }
     .partner-logo:nth-child(1) { animation-delay: 0.1s; }
     .partner-logo:nth-child(2) { animation-delay: 0.2s; }
     .partner-logo:nth-child(3) { animation-delay: 0.3s; }
     ```

7. 用户评价：
   - 动画：评价卡片从右侧滑入。
   - 实现：使用 CSS transition 和 transform，配合 JavaScript 控制切换。
   - 代码示例：
     ```css
     .testimonial-card {
       transition: transform 0.5s ease-out, opacity 0.5s ease-out;
     }
     .testimonial-enter {
       transform: translateX(100%);
       opacity: 0;
     }
     .testimonial-enter-active,
     .testimonial-leave-active {
       transition: transform 0.5s ease-out, opacity 0.5s ease-out;
     }
     .testimonial-enter-to,
     .testimonial-leave {
       transform: translateX(0);
       opacity: 1;
     }
     .testimonial-leave-to {
       transform: translateX(-100%);
       opacity: 0;
     }
     ```

8. 行动召唤（CTA）：
   - 动画：整个区域淡入并放大。
   - 实现：使用 CSS animation。
   - 代码示例：
     ```css
     @keyframes fadeInScale {
       from {
         opacity: 0;
         transform: scale(0.95);
       }
       to {
         opacity: 1;
         transform: scale(1);
       }
     }
     .cta-section {
       animation: fadeInScale 0.7s ease-out forwards;
     }
     ```

实现注意事项：
1. 使用 Intersection Observer API 来检测元素进入视口，触发动画。
2. 考虑添加 `prefers-reduced-motion` 媒体查询，以照顾可能对动画敏感的用户。
3. 使用 CSS 变量来统一管理动画时间和缓动函数，便于全局调整。
4. 对于复杂的动画序列，考虑使用 GSAP 等高级动画库来实现更精细的控制。

通过这种设计思路和动画方案，我们可以创建一个视觉吸引力强、富有动感的 "Why Choose Us" 页面，有效地展示 FleetTurbo 的优势和特点，同时提供良好的用户体验。 -->
