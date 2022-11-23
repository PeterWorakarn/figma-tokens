const StyleDictionaryModule = require('style-dictionary')
const { makeSdTailwindConfig } = require('sd-tailwindcss-transformer')

const sdConfig = makeSdTailwindConfig({
  type: 'all',
  buildPath:'./',
  // isVariables: true,
})

// sdConfig.platforms['css'] = {
//   transformGroup: 'css',
//   buildPath: './styles/',
//   files: [
//     {
//       destination: 'tailwind.css',
//       format: 'css/variables',
//       options: {
//         outputReferences: true
//       }
//     }
//   ]
// }

const StyleDictionary = StyleDictionaryModule.extend(sdConfig)
StyleDictionary.buildAllPlatforms()