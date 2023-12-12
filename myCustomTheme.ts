
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'myCustomTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "6px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #ff7800 
		"--color-primary-50": "255 235 217", // #ffebd9
		"--color-primary-100": "255 228 204", // #ffe4cc
		"--color-primary-200": "255 221 191", // #ffddbf
		"--color-primary-300": "255 201 153", // #ffc999
		"--color-primary-400": "255 161 77", // #ffa14d
		"--color-primary-500": "255 120 0", // #ff7800
		"--color-primary-600": "230 108 0", // #e66c00
		"--color-primary-700": "191 90 0", // #bf5a00
		"--color-primary-800": "153 72 0", // #994800
		"--color-primary-900": "125 59 0", // #7d3b00
		// secondary | #1c71d8 
		"--color-secondary-50": "221 234 249", // #ddeaf9
		"--color-secondary-100": "210 227 247", // #d2e3f7
		"--color-secondary-200": "198 220 245", // #c6dcf5
		"--color-secondary-300": "164 198 239", // #a4c6ef
		"--color-secondary-400": "96 156 228", // #609ce4
		"--color-secondary-500": "28 113 216", // #1c71d8
		"--color-secondary-600": "25 102 194", // #1966c2
		"--color-secondary-700": "21 85 162", // #1555a2
		"--color-secondary-800": "17 68 130", // #114482
		"--color-secondary-900": "14 55 106", // #0e376a
		// tertiary | #e5a50a 
		"--color-tertiary-50": "251 242 218", // #fbf2da
		"--color-tertiary-100": "250 237 206", // #faedce
		"--color-tertiary-200": "249 233 194", // #f9e9c2
		"--color-tertiary-300": "245 219 157", // #f5db9d
		"--color-tertiary-400": "237 192 84", // #edc054
		"--color-tertiary-500": "229 165 10", // #e5a50a
		"--color-tertiary-600": "206 149 9", // #ce9509
		"--color-tertiary-700": "172 124 8", // #ac7c08
		"--color-tertiary-800": "137 99 6", // #896306
		"--color-tertiary-900": "112 81 5", // #705105
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #f6d32d 
		"--color-warning-50": "254 248 224", // #fef8e0
		"--color-warning-100": "253 246 213", // #fdf6d5
		"--color-warning-200": "253 244 203", // #fdf4cb
		"--color-warning-300": "251 237 171", // #fbedab
		"--color-warning-400": "249 224 108", // #f9e06c
		"--color-warning-500": "246 211 45", // #f6d32d
		"--color-warning-600": "221 190 41", // #ddbe29
		"--color-warning-700": "185 158 34", // #b99e22
		"--color-warning-800": "148 127 27", // #947f1b
		"--color-warning-900": "121 103 22", // #796716
		// error | #e01b24 
		"--color-error-50": "250 221 222", // #faddde
		"--color-error-100": "249 209 211", // #f9d1d3
		"--color-error-200": "247 198 200", // #f7c6c8
		"--color-error-300": "243 164 167", // #f3a4a7
		"--color-error-400": "233 95 102", // #e95f66
		"--color-error-500": "224 27 36", // #e01b24
		"--color-error-600": "202 24 32", // #ca1820
		"--color-error-700": "168 20 27", // #a8141b
		"--color-error-800": "134 16 22", // #861016
		"--color-error-900": "110 13 18", // #6e0d12
		// surface | #5e5c64 
		"--color-surface-50": "231 231 232", // #e7e7e8
		"--color-surface-100": "223 222 224", // #dfdee0
		"--color-surface-200": "215 214 216", // #d7d6d8
		"--color-surface-300": "191 190 193", // #bfbec1
		"--color-surface-400": "142 141 147", // #8e8d93
		"--color-surface-500": "94 92 100", // #5e5c64
		"--color-surface-600": "85 83 90", // #55535a
		"--color-surface-700": "71 69 75", // #47454b
		"--color-surface-800": "56 55 60", // #38373c
		"--color-surface-900": "46 45 49", // #2e2d31
		
	}
}