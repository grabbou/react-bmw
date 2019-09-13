/**
 * React BMW
 *
 * Sheer development pleasure
 */

import UIManager from './native/UIManager';

export { default as render } from './renderer/Renderer';

export const runApplication = UIManager.runApplication;

/**
 * Public components
 */
export { default as Scene } from './components/Scene';
export { default as Button } from './components/Button';
export { default as Body } from './components/Body';
export { default as Text } from './components/Text';
export {
  default as Navigator,
  Route as NavigatorRoute,
} from './components/Navigator';
