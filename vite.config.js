import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tarin_ticket_booking_app_front_end/',
  plugins: [react()],
})
