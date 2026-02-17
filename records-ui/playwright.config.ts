import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173,
		reuseExistingServer: true
	},
	projects: [
		{
			name: 'chromium',
			use: {
				...devices['Desktop Chrome']
			}
		},
		{
			name: 'Desktop Edge',
			use: {
				...devices['Desktop Edge']
			}
		},
		{
			name: 'Mobile Chrome',
			use: {
				...devices['Pixel 7']
			}
		},
		{
			name: 'Common Tablet',
			use: {
				...devices['iPad Pro 11 landscape']
			}
		}
	],
	testDir: 'e2e'
});
