/*
 * @Author: zhaohongyun1@jd.com
 * @Date: 2019-10-10 15:07:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-02-24 18:04:32
 */
/**
 * @description: 获取元素在页面距离顶部的偏移量
 * @param {element} 元素节点
 * @return:  Number
 */
export const getElementTop: (element: HTMLDivElement) => number = (element: HTMLDivElement) => {
  // 获取 element 元素距离父元素的 offsetTop 像素;
  // console.log(element);
  if (!element) return 200;
  let actualTop = element.offsetTop;
  let current = element.offsetParent;
  // console.log(element, actualTop, current);
  // 判断当前元素是都循环到 HTML 根元素了
  while (current !== null) {
    // offsetTop 循环相加
    actualTop += (current as HTMLDivElement).offsetTop;
    // 当 current 为 HTML 根元素是， current.offsetParent 的值为 null
    current = (current as HTMLDivElement).offsetParent;
    // console.log(element, actualTop, current);
  }
  // console.log(actualTop);
  return actualTop;
};
// 写cookies

export function setCookie(name: string, value: any) {
  const Days = 30;
  const exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${escape(value)};expires=${exp.toUTCString()}`;
}
// 读取cookies
export function getCookie(cname: string) {
  const name = `${cname}=`;
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
  }
  return '';
}
// 删除cookies
export function delCookie(name: string) {
  const exp = new Date();
  exp.setTime(exp.getTime() - 1);
  const cval = getCookie(name);
  if (cval != null) document.cookie = `${name}=${cval};expires=${exp.toUTCString()}`;
}

// 事件触发函数
export function triggerEvent(el: Element | Window, type: string) {
  if ('createEvent' in document) {
    // modern browsers, IE9+
    const e = document.createEvent('HTMLEvents');
    e.initEvent(type, false, true);
    el.dispatchEvent(e);
  }
}

/**
 * @description: 生成唯一的id
 * @param {number} length 长度
 * @return:
 */

export const genID = (): string => {
  const id = `${Math.random()}-${Date.now()}`;
  console.log(id, 'id---');
  return id;
};

/**
 * @description: 给数据加一个模拟的id，在刚刚获取数据或者新建一条数据的时候
 * @param {type}
 * @return:
 */
export const addId = (data: any[]): any[] => {
  return data.map(item => {
    return { ...item, id: item.id || genID() };
  });
};

/*
 * @param: hex { string} 例如:"#23ff45"
 * @param: opacity  { string || number } 透明度
 * @return: { string } rgba格式
 */
export function hexToRgba(hex: string, opacity: number) {
  return (
    'rgba(' +
    parseInt('0x' + hex.slice(1, 3)) +
    ',' +
    parseInt('0x' + hex.slice(3, 5)) +
    ',' +
    parseInt('0x' + hex.slice(5, 7)) +
    ',' +
    opacity +
    ')'
  );
}

export function getMinInteger(min: number) {
  if (min.toString().includes('.')) {
    return Math.floor(min * 1000) / 1000;
  }
  const data = min.toString().split('');
  const dataLen = data.length;
  switch (dataLen) {
    case 1:
      return 0;
    case 2:
    case 3:
      return min - 5;
    case 4:
      return Math.round(Number(data[0] + data[1] + '00'));
    case 5:
      return Math.round(Number(data[0] + data[1] + data[2] + '00'));
    case 6:
      return Math.round(Number(data[0] + data[1] + data[2] + data[3] + '0'));
    default:
      return min;
  }
}
export function getMaxInteger(max: number) {
  if (max.toString().includes('.')) {
    return Math.ceil(max * 1000) / 1000;
  }
  const data = max.toString().split('');
  const dataLen = data.length;
  switch (dataLen) {
    case 1:
      return 10;
    case 2:
    case 3:
      return max + 2;
    case 4:
      return Math.round(Number(data[0] + data[1] + '00') + 100);
    case 5:
      return Math.round(Number(data[0] + data[1] + data[2] + '00') + 100);
    case 6:
      return Math.round(Number(data[0] + data[1] + data[2] + '00') + 100);
    default:
      return max;
  }
}

export const formdataNumber = (n: number | string | null | undefined) => {
  if (n === null || n === undefined) return null;
  if (typeof n === 'number') return n.toLocaleString();
  return Number(n).toLocaleString();
};

// ECharts 使用的颜色
export const colors = [
  '#12CCFF',
  '#FA5AAD',
  '#5470c6',
  '#91cc75',
  '#fac858',
  '#ee6666',
  '#73c0de',
  '#3ba272',
  '#fc8452',
  '#9a60b4',
  '#ea7ccc',
];

export const calDate = () => {
  let base = +new Date();
  const oneDay = 24 * 3600 * 1000;
  const date = [];
  for (let i = 0; i < 7; i++) {
    const now = new Date((base -= oneDay));
    date.unshift([now.getMonth() + 1, now.getDate()].join('/'));
  }
  return date;
};

export const unitDeal = (num: number, unit: string) => {
  let resNum = num;
  let resUnit = unit;
  if (num >= 10000) {
    resNum = num / 10000;
    resUnit = `万${unit}`;
  }
  return {
    num: resNum,
    unit: resUnit,
  };
};

export const getUrlParams = (url: string) => {
  // 定义一个 parse url.search 的方法
  function parse(url: string) {
    const obj: Record<string, string> = {};
    url.replace(/([^?&=]+)=([^&]+)/g, (_: any, k: string | number, v: any) => {
      console.log();
      if (v.includes('#')) {
        v = v.split('#').shift();
      }
      return (obj[k] = v);
    });
    return obj;
  }
  return parse(url);
};
