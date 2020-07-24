const store = window.localStorage;

class localStore {
  /**
   * 设置数据: 如果value 是 object 会调用 JSON.stringify 自动转换为字符串
   */
  public static set(key: string, value: any) {
    if (!store) {
      return;
    }
    // 备份一份
    let v = value;
    try {
      if (typeof value === 'object') {
        v = JSON.stringify(v);
      }
      store.setItem(key, v);
    } catch (error) {
      // do...
    }
  }

  /**
   * 直接获取 --- 原始数据
   */
  public static get (key: string) {
    if (!store) {
      return;
    }
    return store.getItem(key);
  }

  /**
   * 获取的同时转换为JSON
   */
  public static getJson (key: string) {
    if (!store) {
      return;
    }
    const data = store.getItem(key);
    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        // do...
      }
    }
    return null;
  }

  /**
   * 删除本地存储
   */
  public static remove(key: string) {
    if (!store) {
      return;
    }

    try {
      store.removeItem(key);
    } catch (error) {
      // do...
    }
  }
}

export default localStore;