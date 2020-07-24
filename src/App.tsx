import React from 'react';
import { Button } from 'antd';
import { setRetryTip } from './redux/saga/actions/common';
// 如果不用connect 高阶组件，就用下面这个hooks
// useSelector 获取全局状态的hooks
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const { retryTip } = useSelector((state: Iredux.IState) =>  state.common);
  const handleTestReduxClick = () => {
    dispatch({
      type: 'TRIGGER',
      payload: []
    })
  }
  console.log('这是啥 =>',  retryTip, );
  return (
    <div className="App">
      <Button onClick={handleTestReduxClick} type="primary">Hello world</Button>
    </div>
  );
}

export default App;
