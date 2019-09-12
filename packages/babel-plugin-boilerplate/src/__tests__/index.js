import path from 'path'
import pluginTester from 'babel-plugin-tester'
import plugin from '../index.ts'

pluginTester({
  plugin,
  fixtures: path.join(__dirname, 'fixtures'),
  babelOptions: {filename: __filename},
})
