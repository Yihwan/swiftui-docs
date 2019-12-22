export default {
  title: 'SwiftUI Docs',
  description: "An unofficial guide to Apple's SwiftUI.",
  ignore: ['README.md'],
  menu: [
    'Start Here',
    {
      name: 'Elements',
      menu: ['Introduction'],
    },
    {
      name: 'Layout',
      menu: ['Introduction', 'VStack & HStack'],
    },
    {
      name: 'Form & Inputs',
      menu: ['Introduction'],
    },
  ], 
  themeConfig: {
    showDarkModeSwitch: false,
    styles: {
      h1: {
        my: 4,
      },
    }
  },
}