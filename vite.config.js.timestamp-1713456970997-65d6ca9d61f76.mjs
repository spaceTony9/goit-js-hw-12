// vite.config.js
import { defineConfig } from "file:///Users/antonbilokon/Documents/GitHub/goit-js-hw-12/node_modules/vite/dist/node/index.js";
import glob from "file:///Users/antonbilokon/Documents/GitHub/goit-js-hw-12/node_modules/glob/glob.js";
import injectHTML from "file:///Users/antonbilokon/Documents/GitHub/goit-js-hw-12/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///Users/antonbilokon/Documents/GitHub/goit-js-hw-12/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js"
        }
      },
      outDir: "../dist"
    },
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])],
    optimizeDeps: {
      exclude: ["fsevents"]
      // Excluding 'fsevents' from dependency optimization
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYW50b25iaWxva29uL0RvY3VtZW50cy9HaXRIdWIvZ29pdC1qcy1ody0xMlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FudG9uYmlsb2tvbi9Eb2N1bWVudHMvR2l0SHViL2dvaXQtanMtaHctMTIvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FudG9uYmlsb2tvbi9Eb2N1bWVudHMvR2l0SHViL2dvaXQtanMtaHctMTIvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xuaW1wb3J0IEZ1bGxSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tZnVsbC1yZWxvYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICBbY29tbWFuZCA9PT0gJ3NlcnZlJyA/ICdnbG9iYWwnIDogJ19nbG9iYWwnXToge30sXG4gICAgfSxcbiAgICByb290OiAnc3JjJyxcbiAgICBidWlsZDoge1xuICAgICAgc291cmNlbWFwOiB0cnVlLFxuXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGlucHV0OiBnbG9iLnN5bmMoJy4vc3JjLyouaHRtbCcpLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdjb21tb25IZWxwZXJzLmpzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtpbmplY3RIVE1MKCksIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qKi5odG1sJ10pXSxcbiAgICBvcHRpbWl6ZURlcHM6IHtcbiAgICAgIGV4Y2x1ZGU6IFsnZnNldmVudHMnXSAvLyBFeGNsdWRpbmcgJ2ZzZXZlbnRzJyBmcm9tIGRlcGVuZGVuY3kgb3B0aW1pemF0aW9uXG4gICAgfSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3VSxTQUFTLG9CQUFvQjtBQUNyVyxPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFFdkIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxRQUFRLE1BQU07QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sQ0FBQyxZQUFZLFVBQVUsV0FBVyxTQUFTLEdBQUcsQ0FBQztBQUFBLElBQ2pEO0FBQUEsSUFDQSxNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxXQUFXO0FBQUEsTUFFWCxlQUFlO0FBQUEsUUFDYixPQUFPLEtBQUssS0FBSyxjQUFjO0FBQUEsUUFDL0IsUUFBUTtBQUFBLFVBQ04sYUFBYSxJQUFJO0FBQ2YsZ0JBQUksR0FBRyxTQUFTLGNBQWMsR0FBRztBQUMvQixxQkFBTztBQUFBLFlBQ1Q7QUFBQSxVQUNGO0FBQUEsVUFDQSxnQkFBZ0I7QUFBQSxRQUNsQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQSxTQUFTLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQUEsSUFDeEQsY0FBYztBQUFBLE1BQ1osU0FBUyxDQUFDLFVBQVU7QUFBQTtBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
