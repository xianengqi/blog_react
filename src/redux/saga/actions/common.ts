import { createRoutine, promisifyRoutine } from 'redux-saga-routines';
import extendRoutine from '../extendRoutine';
import { NAME_SPACE } from '../../../constants/name-space/index';

// 超时提示
export const setRetryTip = createRoutine(`${NAME_SPACE.COMMON}`);
