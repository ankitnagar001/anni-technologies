'use client';

import React from 'react';

export const TechIcon = ({ name, className = 'w-7 h-7' }) => {
  const norm = (name || '').toLowerCase();

  // Next.js
  if (norm.includes('next')) {
    return (
      <svg className={className} viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="90" cy="90" r="90" fill="currentColor" className="text-gray-900 dark:text-white" />
        <path d="M149.508 157.438L69.1415 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.137 149.508 157.438Z" fill="white" className="dark:fill-gray-900" />
        <rect x="115" y="54" width="12" height="72" fill="white" className="dark:fill-gray-900" />
      </svg>
    );
  }

  // React / React Native
  if (norm.includes('react')) {
    return (
      <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // TypeScript
  if (norm.includes('typescript') || norm === 'ts') {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3178C6" d="M0 0h128v128H0z"/>
        <path fill="#fff" d="M68.84 89.1c1.8 3.1 4.5 5.7 8.1 7.7s7.9 3 13 3c4.5 0 8.4-.9 11.7-2.6s5.9-4.2 7.7-7.4c1.8-3.2 2.7-7.1 2.7-11.5 0-4.1-.9-7.6-2.7-10.4s-4.3-5.2-7.5-7.1c-3.2-1.9-7.3-3.7-12.2-5.4-3.6-1.3-6.5-2.6-8.6-3.8s-3.7-2.7-4.7-4.3-1.6-3.7-1.6-6.1c0-2.6.7-4.8 2.2-6.6s3.5-3.2 6-4.2c2.5-1 5.3-1.5 8.4-1.5 3.3 0 6.3.6 8.9 1.7s4.8 2.8 6.5 4.9 2.8 4.6 3.4 7.4l11.4-4.8c-1.1-4.4-3.2-8.3-6.2-11.6s-6.9-5.9-11.7-7.7-10.1-2.7-16-2.7c-5.7 0-10.8 1-15.3 3.1s-8.1 5.1-10.6 9-3.8 8.7-3.8 14.3c0 4.7 1 8.8 3 12.1s4.8 6 8.3 8.1c3.5 2.1 7.7 3.9 12.6 5.5 4 .1 7.2 2.7 9.5 4.1s4 3.1 5 5 1.5 4.2 1.5 7.1c0 3-.9 5.6-2.6 7.7s-4.2 3.8-7.3 4.9-6.6 1.7-10.4 1.7c-4.4 0-8.4-.8-12-2.5s-6.5-4-8.7-7-3.4-6.6-3.8-10.8L68.84 89.1zM11.7 44.5h52.8v10.7H41.5V115H28.8V55.2H11.7V44.5z"/>
      </svg>
    );
  }

  // Tailwind CSS
  if (norm.includes('tailwind')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
      </svg>
    );
  }

  // Vue.js
  if (norm.includes('vue') || norm.includes('nuxt')) {
    return (
      <svg className={className} viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
        <path d="M161.096.001l-30.225 52.351L100.647.001H-.005l130.877 226.688L261.749.001z" fill="#41B883"/>
        <path d="M161.096.001l-30.225 52.351L100.647.001H52.846l77.996 135.097.03-.051 78.026-135.046z" fill="#34495E"/>
      </svg>
    );
  }

  // Node.js
  if (norm.includes('node')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#539E43" d="M64 8.7L12 38.7v60l52 30 52-30v-60L64 8.7zm0 18.5l36.5 21-13.6 7.8-22.9-13.2v42.5l-15.5-9V35.1l-22.9 13.2L12 40.5 64 27.2zm36.5 62.5L64 110.8V68.3l15.5 9v31.4l21-12.1v-6.9z"/>
      </svg>
    );
  }

  // Python
  if (norm.includes('python') || norm.includes('fastapi')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3776AB" d="M63.5 4.5c-29.2 0-27.4 12.6-27.4 12.6l.03 13.1h27.9v3.9H25.4S4.5 31.7 4.5 63.8c0 32.1 18.3 31 18.3 31h10.9v-15.4s-.6-18.3 18-18.3h27.7s17.1.3 17.1-16.7V21.2S100.3 4.5 63.5 4.5zM48.8 14.1c3.8 0 6.8 3.1 6.8 6.8s-3.1 6.8-6.8 6.8-6.8-3.1-6.8-6.8 3.1-6.8 6.8-6.8z"/>
        <path fill="#FFD43B" d="M64.5 123.5c29.2 0 27.4-12.6 27.4-12.6l-.03-13.1H64v-3.9h38.6s20.9 2.4 20.9-29.7c0-32.1-18.3-31-18.3-31H114.3v15.4s.6 18.3-18 18.3H68.6s-17.1-.3-17.1 16.7v23.2s-3.8 16.7 33 16.7zm14.7-9.6c-3.8 0-6.8-3.1-6.8-6.8s3.1-6.8 6.8-6.8 6.8 3.1 6.8 6.8-3.1 6.8-6.8 6.8z"/>
      </svg>
    );
  }

  // Go / Golang
  if (norm.includes('go') || norm.includes('golang')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#00ADD8" d="M12.9 57.5c-3.7 0-6.7 3-6.7 6.7s3 6.7 6.7 6.7h45.4v-13.4H12.9zm84.4-13.4c-14.8 0-26.8 12-26.8 26.8s12 26.8 26.8 26.8c10.4 0 19.5-6 23.9-14.7h-23.9V70.8h37.2c.4-2.2.7-4.4.7-6.7 0-14.9-12.1-26.9-27-26.9z"/>
      </svg>
    );
  }

  // NestJS
  if (norm.includes('nest')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#E0234E" d="M72.2 10.5C53.3 22.8 45.4 39.4 45.4 39.4s-14.7-5.5-24 5.9c-8.9 10.9-5.1 24.5-5.1 24.5S6.6 77.2 4.3 91.2c-2.4 15 7.5 27.5 21.6 28.3 18.2 1 30.5-12.9 30.5-12.9s14.8 9.9 32.8 4.2c16-5.1 21.2-18.7 21.2-18.7s10.3-4.2 13.3-15.6c3.4-12.8-5.3-24.1-5.3-24.1s3.7-18.1-7.1-28.9c-10.8-10.7-27.1-13-27.1-13s.2-4.8-12-0.5z"/>
      </svg>
    );
  }

  // Flutter
  if (norm.includes('flutter')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#02569B" d="M78.6 4.5L18.4 64.7l18.8 18.8L116.2 4.5H78.6z"/>
        <path fill="#0175C2" d="M78.6 64.7L46.6 96.7l18.8 18.8 13.2-13.2 37.6-37.6H78.6z"/>
        <path fill="#29B6F6" d="M65.4 115.5l13.2 13.2h37.6l-25.4-25.4-13.2 13.2-12.2-1z"/>
      </svg>
    );
  }

  // Swift
  if (norm.includes('swift')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F05138" d="M117.8 74.8C108.6 93.3 90.7 106.8 69.4 110.8c3.3-4.7 6.4-10.3 8.3-16.7 1.3-4.3 1.9-8.7 1.7-13-.1-.5-.4-.7-.8-.4-6.8 4.7-14.7 7.7-23.2 8.7 6.3-5.7 11.2-12.7 14.2-20.7 1.5-4.1 2.2-8.3 2-12.5-.1-.5-.4-.7-.8-.4-7.4 5.3-16 8.7-25.3 9.8 4.2-4.5 7.6-9.8 9.9-15.6 1.2-3.1 1.9-6.3 2-9.6.1-.5-.3-.7-.7-.4C38.3 46.2 24.5 59.8 17.5 76.5 12 61.5 14.8 43.6 24.6 30.5c.3-.4.1-.9-.3-.8-9.4 1.8-17.7 7.2-23.5 14.7 8.3-17.5 23.3-30.8 41.5-36.8.6-.2.8.5.3.8-8.2 5.5-14.8 13.1-19.1 22.1 18.8-15.1 43.6-21.7 67.8-17.7 20.8 3.5 38.6 15.6 48.7 33.7.3.5-.1 1.1-.6.9-6.9-3.2-14.5-4.8-22.3-4.5 10.3 5 18.6 13 23.9 22.8.3.5-.1 1.1-.6.9-7.3-3.2-15.2-4.5-23.1-3.8 8.4 5.2 15 12.6 18.9 21.5.3.6-.1 1.2-.6.9-8.4-4.5-17.8-6.6-27.4-6.3 5.3 4.2 9.7 9.5 12.8 15.6.3.6-.1 1.2-.6.9-8.5-5.2-18.2-8.1-28.2-8.4 3.7 4 6.7 8.7 8.8 13.8.3.7-.2 1.3-.8 1z"/>
      </svg>
    );
  }

  // Kotlin
  if (norm.includes('kotlin')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="kg" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C757BC"/>
            <stop offset="50%" stopColor="#D04E85"/>
            <stop offset="100%" stopColor="#E26D45"/>
          </linearGradient>
        </defs>
        <path fill="url(#kg)" d="M128 0H0v128h128L64 64z"/>
      </svg>
    );
  }

  // MongoDB
  if (norm.includes('mongo')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#47A248" d="M64 4.5S50.5 32.5 50.5 68.3c0 28.5 13.5 44.8 13.5 55.2 0-10.4 13.5-26.7 13.5-55.2C77.5 32.5 64 4.5 64 4.5z"/>
        <path fill="#499D4A" d="M64 4.5v119c-.8 0-1.7-.1-2.5-.2-8.3-4.8-11-20.2-11-55C50.5 32.5 64 4.5 64 4.5z"/>
        <path fill="#A6E3A1" d="M64 4.5v119c.8 0 1.7-.1 2.5-.2 8.3-4.8 11-20.2 11-55C77.5 32.5 64 4.5 64 4.5z"/>
      </svg>
    );
  }

  // PostgreSQL
  if (norm.includes('postgres')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#336791" d="M64 8C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8zm19.8 91.5c-4.4 2.1-9.3 3.3-14.4 3.5v-8.8c3.2-.2 6.3-.9 9.1-2.2l5.3 7.5zm-33.8 0l5.3-7.5c2.8 1.3 5.9 2 9.1 2.2v8.8c-5.1-.2-10-1.4-14.4-3.5zm39.1-13.4c-4.1 3.2-9 5.4-14.3 6.4V83c2.7-.6 5.3-1.8 7.5-3.4l6.8 6.5zm-44.4 0l6.8-6.5c2.2 1.6 4.8 2.8 7.5 3.4v9.5c-5.3-1-10.2-3.2-14.3-6.4z"/>
      </svg>
    );
  }

  // Redis
  if (norm.includes('redis')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#DC382D" d="M64 12.8L12.8 38.4l51.2 25.6 51.2-25.6L64 12.8z"/>
        <path fill="#A41E11" d="M12.8 45.9v35.8L64 107.3V71.5L12.8 45.9z"/>
        <path fill="#C62828" d="M115.2 45.9L64 71.5v35.8l51.2-25.6V45.9z"/>
      </svg>
    );
  }

  // Supabase
  if (norm.includes('supabase')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#3ECF8E" d="M69.6 122.9c-2.4 3.1-7.6 1.4-7.6-2.6V74.8h48.3c4.1 0 6.3 4.9 3.6 7.9L69.6 122.9z"/>
        <path fill="#249361" d="M58.4 5.1c2.4-3.1 7.6-1.4 7.6 2.6v45.5H17.7c-4.1 0-6.3-4.9-3.6-7.9L58.4 5.1z"/>
      </svg>
    );
  }

  // AWS Cloud
  if (norm.includes('aws')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#FF9900" d="M98.6 86.4c-12.7 8.3-30.8 12.7-49.8 12.7-18.4 0-35.3-4.5-47.5-12.2-.9-.6-1-1.8-.2-2.5.8-.8 2.1-.8 3-.2 11.4 7.2 27.2 11.4 44.7 11.4 17.8 0 34.6-4.2 46.5-12 .9-.6 2.2-.4 2.8.5.5.8.4 1.8-.5 2.3z"/>
        <path fill="#232F3E" className="dark:fill-white" d="M41.8 48.7c0-6.7 4.8-10.7 12.7-10.7 4.8 0 9.2 1.3 12.3 3.1l-2.6 6.3c-2.2-1.3-5.2-2.2-8.3-2.2-3.8 0-6 1.8-6 4.7 0 7.3 22 2.6 22 17.7 0 8.3-6.6 13.5-16.1 13.5-5.9 0-11.2-1.8-14.7-4.2l2.7-6.5c3 2 7.3 3.5 11.3 3.5 4.6 0 7.8-2 7.8-5.3-.1-8.3-21.1-3.6-21.1-19.9z"/>
      </svg>
    );
  }

  // Docker
  if (norm.includes('docker') || norm.includes('k8s') || norm.includes('kubernetes')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#2496ED" d="M123.6 57.6c-1.4-.9-8.4-5.5-19.4-4.2-1.3-7.5-6.8-12.5-7.3-12.9l-3.3 3.6c.4.4 5.3 4.8 5.6 12.6-4.9 2.7-11.7 4.1-18.4 4.1H3.4c-.6 2.3-.9 4.7-.9 7.2 0 13.2 4.4 25.1 16.3 33.2C32.1 110.6 48.2 114 65.5 114c27.1 0 50.8-11.7 61.2-35.8 4.6-1.5 11.8-5.3 14.3-15.5l-4-1.2c-1.8 7.3-6.9 10.4-13.4 11.1zM58.7 34.2h12.5v12.5H58.7zm-15.6 0h12.5v12.5H43.1zm-15.6 0H40v12.5H27.5zM58.7 18.6h12.5v12.5H58.7zm-15.6 0h12.5v12.5H43.1z"/>
      </svg>
    );
  }

  // Vercel / Cloudflare
  if (norm.includes('vercel') || norm.includes('cloudflare')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#F38020" d="M96.3 78.4c-.3-1.6-.2-3.2.3-4.7 1.2-3.8 4.3-6.6 8.2-7.3.9-.2 1.8-.2 2.7-.1 1.7.2 3.3.9 4.6 2 .4-.5.8-1.1 1.1-1.7 1.8-3.4 1.8-7.5-.1-10.9-1.8-3.4-5.1-5.7-8.9-6.3-1.4-.2-2.8-.2-4.2.1-1.9.4-3.7 1.3-5.2 2.6-2.6-7.8-8.9-13.8-17-16.1-4.2-1.2-8.6-1.3-12.9-.3-8.6 2-15.7 7.9-19.3 15.9-2-.8-4.2-1.2-6.4-1-6.1.5-11.4 4.5-13.6 10.3-.9 2.4-1.2 5-.8 7.5.5 2.8 1.9 5.3 4.1 7.2-2.5 1.1-4.5 3-5.7 5.5-1.7 3.5-1.7 7.7 0 11.2 1.7 3.5 4.8 6 8.5 7.1 1.9.5 3.8.6 5.8.3h58.8c3.8 0 7.4-1.5 10.1-4.2 2.7-2.7 4.2-6.3 4.2-10.1 0-3.3-1.1-6.5-3.3-9-2.1-2.4-5.1-3.9-8.3-4.2-.8-.1-1.5 0-2.3.1-.7.2-1.3.5-1.9.9z"/>
      </svg>
    );
  }

  // GitHub Actions
  if (norm.includes('git')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
      </svg>
    );
  }

  // OpenAI / AI / Claude
  if (norm.includes('openai') || norm.includes('claude') || norm.includes('ai') || norm.includes('llm')) {
    return (
      <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M116.3 53.6c-1.3-9.5-7.8-17.5-16.8-20.7-2.1-7.7-7.4-14.1-14.6-17.6-10.4-5.1-22.9-3.7-32 3.4-4.8-2.6-10.4-3.7-16-3.1-11.7 1.2-21.5 9.8-24.3 21.2-7.5 3.3-13.1 9.9-15.2 18-3 11.3-.4 23.4 7 32.3 1.3 9.5 7.8 17.5 16.8 20.7 2.1 7.7 7.4 14.1 14.6 17.6 5.6 2.7 11.8 3.8 18 3.1 5.3-.6 10.4-2.8 14.7-6.2 4.8 2.6 10.4 3.7 16 3.1 11.7-1.2 21.5-9.8 24.3-21.2 7.5-3.3 13.1-9.9 15.2-18 2.9-11.3.3-23.4-7.1-32.3z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round"/>
        <path d="M64 42v44M42 53l44 22M42 75l44-22" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
      </svg>
    );
  }

  // LangChain / LlamaIndex
  if (norm.includes('langchain') || norm.includes('llama')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
      </svg>
    );
  }

  // PyTorch
  if (norm.includes('pytorch')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="#EE4C2C" d="M72.5 16.1l-6.8 6.8 8.6 8.6 6.8-6.8-8.6-8.6zm-17 17l-34 34c-11.3 11.3-11.3 29.7 0 41 11.3 11.3 29.7 11.3 41 0l34-34-41-41zm27.2 47.6c-3.8 0-6.8-3-6.8-6.8s3-6.8 6.8-6.8 6.8 3 6.8 6.8-3 6.8-6.8 6.8z"/>
      </svg>
    );
  }

  // Pinecone / ChromaDB / Vector
  if (norm.includes('pinecone') || norm.includes('chroma') || norm.includes('vector')) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.2l6 3.8v7.9l-6 3.8-6-3.8V8l6-3.8z" fill="#059669"/>
        <path d="M12 6L7 9.2v5.6l5 3.2 5-3.2V9.2L12 6z" fill="#34D399"/>
      </svg>
    );
  }

  // Unity / Game
  if (norm.includes('unity') || norm.includes('game') || norm.includes('unreal')) {
    return (
      <svg className={className} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M64 12.8L16.5 40.2v54.9L64 122.5l47.5-27.4V40.2L64 12.8zm27.8 71.9l-13.9 8-13.9-8v-16l13.9-8 13.9 8v16zm-41.7 0l-13.9-8v-16l13.9-8 13.9 8v16l-13.9 8zm13.9-40.1l-13.9-8 13.9-8 13.9 8-13.9 8z"/>
      </svg>
    );
  }

  // Default Code Icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};
