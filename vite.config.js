import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default {
  plugins: [react(), svgr({ include: "**/*.svg?react" }), "@svgr/plugin-svgo", "@svgr/plugin-jsx"],
  usePolling: true,
  svgoConfig: {
    floatPrecision: 7,
  },
};
