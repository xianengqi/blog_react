// 用于扩展 redux-saga-routines 的基本参数

import { createAction } from 'redux-actions';
// redux-saga-routines 定义的ts类型文件，
import { Routine, ActionCreatorFunction } from 'redux-saga-routines';

type Key = string;

type ExtendRoutineReturn<T extends Key, A extends Key> = Routine
  & { [key in T]: string }
  & { [key in A]: ActionCreatorFunction };

const createActionCreator = (
  {type, typePrefix}: {type: string, typePrefix: string}
) => createAction(`${typePrefix}/${type}`);

export default function extendRoutine<T extends Key, A extends Key>(
  routine: any,
  types: {
    type: T;
    action: A;
  }[],
): ExtendRoutineReturn<T, A> {

  // 逻辑的处理
  const typePrefix = routine.toString().replace(/\/([^/]+)\/?$/, '');
  const newRoutine = routine;

  types.forEach(({type, action}) => {
    const actionCreators = createActionCreator({ type, typePrefix });

    newRoutine[action] = actionCreators;
    newRoutine[type] = actionCreators.toString();
  });

  return newRoutine;
}