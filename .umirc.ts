import { defineConfig } from 'umi';

export default defineConfig({
  title:"Tangerine",
  favicon: '/favicon.png',
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    // {path:'/',component:'@/layouts',routes:[{ path: '/', component: '@/pages/index' },]},
    { path: '/', component: '@/pages/index' }
    
  ],
  fastRefresh: {},
});
