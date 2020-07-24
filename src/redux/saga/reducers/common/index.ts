// 公共的reducer数据, 比如超时提示，和公共的数据接口之类
import { setRetryTip } from '../../actions/common';

export const initialeState = {
  retryTip: false
}

export default ( state = initialeState, action: Iredux.ActionParams  ) => {
  switch (action.type) {
    // TRIGGER ===> 发起请求的时候
    // SUCCESS ===> 发起请求成功的时候
    // FAILURE ===> 发起请求失败的时候
    // FULFILL ===> 发起请求完成的时候
    // REQUEST ===> 一般不再这里使用

    case 'TRIGGER': {
      return {
        ...state,
        retryTip: true
      }
    }
  };

  return state;
}