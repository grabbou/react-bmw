/**
 * React BMW package, consists of a renderer and components
 */

import UIManager from './UIManager';

export { default as HMIState } from './HMIState';

export {default as Container} from './components/Container';
export {default as Text} from './components/Text';
export {default as State} from './components/State';

export const render = UIManager.runApplication;
