# hqw-util

工具来简化代码

- [hqw-util](#hqw-util)
  - [安装](#安装)
  - [API](#api)
    - [weather](#weather)
    - [request](#request)
    - [color](#color)
  - [版本日志](#版本日志)

## 安装

``` bash
yarn add hqw-util
```

## API

### weather

| 属性 | Description |
| --- | --- |
| url | 默认设置的天气接口地址 |

--------------------------------------------------------

| 方法 | 参数类型 | 默认参数 | 返回值类型 | 说明 |
| --- | --- |---| --- | --- |
| getWeather( `[url]` ) | string | url | promise | 获取当前城市的天气状况 |

例子：

``` javascript
import {
  getWeather
} from 'hqw-util/lib/weather';
import React, {
  Component
} from 'react';

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city: '',
    };
  }

  componentDidMount() {
    getWeather().then((res) => {
      this.setState({
        city: res.city
      })
    })
  }

  render() {
    const {
      city
    } = this.state;
    return <div > {
      `当前的城市是：${city}`
    } < /div>;
  }
}

export default Weather;
```

### request

返回umi-request 详情见[umi-request](https://github.com/umijs/umi-request/blob/HEAD/README_zh-CN.md)

### color

| 方法 | 参数类型 | 默认参数 | 返回值类型 | 说明 |
| --- | --- | --- | --- | --- |
| getSunColor() | 空 | 空 | string | 获取一个明亮的颜色 |
| getRandomColor( `[num]` ) | number 空：随机颜色 1：深色 2：浅色 | 空 | string | 获取一个随机颜色 |

例子：

``` javascript
import {
  getSunColor
} from 'hqw-util/lib/color';
import {
  Tag
} from 'antd';
import React from 'react';

function Colors() {
  return <Tag color = {
    getSunColor()
  } > color < /Tag>;
}

export default Colors;
```

## 版本日志

* `1.0.0`  创建模型 weather color
* `1.0.1`  添加接口说明
* `1.0.2`  添加接口说明
* `2.0.0`  使用es6输出
* `2.0.2`  添加git入口开源
