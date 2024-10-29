---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Olares"
  text: "Let people own their data again"
  actions:
    - theme: brand
      text: What is Olares?
      link: /overview/introduction/what-is-olares
    - theme: alt
      text: Get Started
      link: /overview/introduction/
    - theme: alt
      text: Github
      link: https://github.com/beclab/olares
features:
  - icon: 📝
    title: Self-Hosted
    details: A protocol-based, permissionless application ecosystem
  - icon: 📝
    title: Security
    details: Enterprise-grade security solution that works out of the box
  - icon: 📝
    title: Collaboration
    details: Self-hosted your productivity platform for team collaboration
  - icon: 📝
    title: Local AI
    details: Redefines the Personalized AI assistant
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
