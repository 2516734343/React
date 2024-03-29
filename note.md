[TOC]

# JSX

## 什么是 JSX

- Facebook 起草的 JS 扩展语法
- 本质是一个 JS 对象，会被 babel 编译，最终会被转换为 React.createElement
- 每个 JSX 表达式，有且仅有一个根节点
  - React.Fragment
- 每个 JSX 元素必须结束（XML 规范）

## 在 JSX 中嵌入表达式

- 在 JSX 中使用注释
- 将表达式作为内容的一部分
  - null、undefined、false 不会显示
  - 普通对象，不可以作为子元素
  - 可以放置 React 元素对象
- 将表达式作为元素属性
- 属性使用小驼峰命名法
- 防止注入攻击
  - 自动编码
  - dangerouslySetInnerHTML

## 元素的不可变性

- 虽然 JSX 元素是一个对象，但是该对象中的所有属性不可更改
- 如果确实需要更改元素的属性，需要重新创建 JSX 元素

# 组件和组件属性

组件：包含内容、样式和功能的 UI 单元

## 创建一个组件

**特别注意：组件的名称首字母必须大写**

1. 函数组件

返回一个 React 元素

2. 类组件

必须继承 React.Component

必须提供 render 函数，用于渲染组件

## 组件的属性

1. 对于函数组件，属性会作为一个对象的属性，传递给函数的参数
2. 对于类组件，属性会作为一个对象的属性，传递给构造函数的参数

注意：组件的属性，应该使用小驼峰命名法

**组件无法改变自身的属性**。

之前学习的 React 元素，本质上，就是一个组件（内置组件）

React 中的哲学：数据属于谁，谁才有权力改动

**React 中的数据，自顶而下流动**

# 组件状态

组件状态：组件可以自行维护的数据

组件状态仅在类组件中有效

状态（state），本质上是类组件的一个属性，是一个对象

**状态初始化**

**状态的变化**

不能直接改变状态：因为 React 无法监控到状态发生了变化

必须使用 this.setState({})改变状态

一旦调用了 this.setState，会导致当前组件重新渲染

**组件中的数据**

1. props：该数据是由组件的使用者传递的数据，所有权不属于组件自身，因此组件无法改变该数组
2. state：该数组是由组件自身创建的，所有权属于组件自身，因此组件有权改变该数据

# React 事件

在 React 中，组件的事件，本质上就是一个属性

按照之前 React 对组件的约定，由于事件本质上是一个属性，因此也需要使用小驼峰命名法

**如果没有特殊处理，在事件处理函数中，this 指向 undefined**

1. 使用 bind 函数，绑定 this
2. 使用箭头函数
3. react 中的事件是给 document 注册事件，几乎所有的元素事件处理，均在 document 的事件中处理，react 会按照虚拟 dom 树里的事件，完成事件调用。
   - 一些不冒泡的事件，是直接在元素上监听。
   - 一些 document 上没有的事件，直接在元素上监听。
4. react 事件里的事件参数`e`并非真实的 dom 事件参数，是 react 合成的一个对象，该对象类似于真实的 dom 事件参数。
   - stopPropagation,阻止的是虚拟 dom 中的事件冒泡。
   - 在 react 事件里获取真实的 dom 事件对象`e.nativeEvent`。
   - 为了提高执行效率，react 使用事件对象池来处理事件对象，

**注意事项：**

- 如果在真实的 dom 事件中，阻止了事件冒泡，则会导致 react 相应事件无法触发。
- 真实 dom 的事件会先于 react 事件。
- 通过 react 阻止事件冒泡，不能阻止真实 dom 的冒泡。
- 可以通过`e.nativeEvent.stopImmediatePropagation`阻止 document 上剩余真实事件的执行。
- 在 react 合成事件里，不能异步使用事件对象。如果一定要使用，需要调用`e.persist()`.

# 深入认识 setState

setState，它对状态的改变，**可能**是异步的

> 如果改变状态的代码处于某个 HTML 元素的事件中，则其是异步的，否则是同步

如果遇到某个事件中，需要同步调用多次，需要使用函数的方式得到最新状态

最佳实践：

1. 把所有的 setState 当作是异步的
2. 永远不要信任 setState 调用之后的状态
3. 如果要使用改变之后的状态，需要使用回调函数（setState 的第二个参数）
4. 如果新的状态要根据之前的状态进行运算，使用函数的方式改变状态（setState 的第一个函数）

React 会对异步的 setState 进行优化，将多次 setState 进行合并（将多次状态改变完成后，再统一对 state 进行改变，然后触发 render）

# 生命周期

生命周期：组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。React 在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行。

**生命周期仅存在于类组件中，函数组件每次调用都是重新运行函数，旧的组件即刻被销毁**

## 旧版生命周期

React < 16.0.0

1. constructor
   1. 同一个组件对象只会创建一次
   2. 不能在第一次挂载到页面之前，调用 setState，为了避免问题，构造函数中严禁使用 setState
2. componentWillMount
   1. 正常情况下，和构造函数一样，它只会运行一次
   2. 可以使用 setState，但是为了避免 bug，不允许使用，因为在某些特殊情况下，该函数可能被调用多次
3. **render**
   1. 返回一个虚拟 DOM，会被挂载到虚拟 DOM 树中，最终渲染到页面的真实 DOM 中
   2. render 可能不只运行一次，只要需要重新渲染，就会重新运行
   3. 严禁使用 setState，因为可能会导致无限递归渲染
4. **componentDidMount**
   1. 只会执行一次
   2. 可以使用 setState
   3. 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
5. 组件进入活跃状态
6. componentWillReceiveProps
   1. 即将接收新的属性值
   2. 参数为新的属性对象
   3. 该函数可能会导致一些 bug，所以不推荐使用
7. **shouldComponentUpdate**
   1. 指示 React 是否要重新渲染该组件，通过返回 true 和 false 来指定
   2. 默认情况下，会直接返回 true
8. componentWillUpdate
   1. 组件即将被重新渲染
9. componentDidUpdate
   1. 往往在该函数中使用 dom 操作，改变元素
10. **componentWillUnmount**
    1. 通常在该函数中销毁一些组件依赖的资源，比如计时器

## 新版生命周期

React >= 16.0.0

React 官方认为，某个数据的来源必须是单一的

1. getDerivedStateFromProps
   1. 通过参数可以获取新的属性和状态
   2. 该函数是静态的
   3. 该函数的返回值会覆盖掉组件状态
   4. 该函数几乎是没有什么用
2. getSnapshotBeforeUpdate
   1. 真实的 DOM 构建完成，但还未实际渲染到页面中。
   2. 在该函数中，通常用于实现一些附加的 dom 操作
   3. 该函数的返回值，会作为 componentDidUpdate 的第三个参数

# 传递元素内容

内置组件：div、h1、p

```html
<div>asdfafasfafasdfasdf</div>
```

如果给自定义组件传递元素内容，则 React 会将元素内容作为 children 属性传递过去。

# 表单

受控组件和非受控组件

受控组件：组件的使用者，有能力完全控制该组件的行为和内容。通常情况下，受控组件往往没有自身的状态，其内容完全收到属性的控制。

非受控组件：组件的使用者，没有能力控制该组件的行为和内容，组件的行为和内容完全自行控制。

**表单组件，默认情况下是非受控组件，一旦设置了表单组件的 value 属性，则其变为受控组件(单选和多选框需要设置 checked)**

# 属性默认值 和 类型检查

## 属性默认值

通过一个静态属性`defaultProps`告知 react 属性默认值

## 属性类型检查

使用库：`prop-types`

对组件使用静态属性`propTypes`告知 react 如何检查属性

```js

PropTypes.any：//任意类型
PropTypes.array：//数组类型
PropTypes.bool：//布尔类型
PropTypes.func：//函数类型
PropTypes.number：//数字类型
PropTypes.object：//对象类型
PropTypes.string：//字符串类型
PropTypes.symbol：//符号类型

PropTypes.node：//任何可以被渲染的内容，字符串、数字、React元素
PropTypes.element：//react元素
PropTypes.elementType：//react元素类型
PropTypes.instanceOf(构造函数)：//必须是指定构造函数的实例
PropTypes.oneOf([xxx, xxx])：//枚举
PropTypes.oneOfType([xxx, xxx]);  //属性类型必须是数组中的其中一个
PropTypes.arrayOf(PropTypes.XXX)：//必须是某一类型组成的数组
PropTypes.objectOf(PropTypes.XXX)：//对象由某一类型的值组成
PropTypes.shape(对象): //属性必须是对象，并且满足指定的对象要求
PropTypes.exact({...})：//对象必须精确匹配传递的数据

//自定义属性检查，如果有错误，返回错误对象即可
属性: function(props, propName, componentName) {
   //...
}
```

# HOC 高阶组件

HOF：Higher-Order Function, 高阶函数，以函数作为参数，并返回一个函数
HOC: Higher-Order Component, 高阶组件，以组件作为参数，并返回一个组件

通常，可以利用 HOC 实现横切关注点。

> 举例：20 个组件，每个组件在创建组件和销毁组件时，需要作日志记录
> 20 个组件，它们需要显示一些内容，得到的数据结构完全一致

**注意**

1. 不要在 render 中使用高阶组件
2. 不要在高阶组件内部更改传入的组件

# ref

reference: 引用

场景：希望直接使用 dom 元素中的某个方法，或者希望直接使用自定义组件中的某个方法

1. ref 作用于内置的 html 组件，得到的将是真实的 dom 对象
2. ref 作用于类组件，得到的将是类的实例
3. ref 不能作用于函数组件

ref 不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移出

目前，ref 推荐使用对象或者是函数

**对象**

通过 React.createRef 函数创建

**函数**

函数的调用时间：

1. componentDidMount 的时候会调用该函数
   1. 在 componentDidMount 事件中可以使用 ref
2. 如果 ref 的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在 componentDidUpdate 之前
   1. 旧的函数被调用时，传递 null
   2. 新的函数被调用时，传递对象
3. 如果 ref 所在的组件被卸载，会调用函数

**谨慎使用 ref**

能够使用属性和状态进行控制，就不要使用 ref。

1. 调用真实的 DOM 对象中的方法
2. 某个时候需要调用类组件的方法

# Ref 转发

forwardRef

forwardRef 方法：

1. 参数，传递的是函数组件，不能是类组件，并且，函数组件需要有第二个参数来得到 ref
2. 返回值，返回一个新的组件

# Context

上下文：Context，表示做某一些事情的环境

React 中的上下文特点：

1. 当某个组件创建了上下文后，上下文中的数据，会被所有后代组件共享
2. 如果某个组件依赖了上下文，会导致该组件不再纯粹（外部数据仅来源于属性 props）
3. 一般情况下，用于第三方组件（通用组件）

## 旧的 API

**创建上下文**

只有类组件才可以创建上下文

1. 给类组件书写静态属性 childContextTypes，使用该属性对上下文中的数据类型进行约束
2. 添加实例方法 getChildContext，该方法返回的对象，即为上下文中的数据，该数据必须满足类型约束，该方法会在每次 render 之后运行。

**使用上下文中的数据**

要求：如果要使用上下文中的数据，组件必须有一个静态属性 contextTypes，该属性描述了需要获取的上下文中的数据类型

1. 可以在组件的构造函数中，通过第二个参数，获取上下文数据
2. **从组件的 context 属性中获取**
3. 在函数组件中，通过第二个参数，获取上下文数据

**上下文的数据变化**

上下文中的数据不可以直接变化，最终都是通过状态改变

在上下文中加入一个处理函数，可以用于后代组件更改上下文的数据

## 新版 API

旧版 API 存在严重的效率问题，并且容易导致滥用

**创建上下文**

上下文是一个独立于组件的对象，该对象通过 React.createContext(默认值)创建

返回的是一个包含两个属性的对象

1. Provider 属性：生产者。一个组件，该组件会创建一个上下文，该组件有一个 value 属性，通过该属性，可以为其数据赋值
   1. 同一个 Provider，不要用到多个组件中，如果需要在其他组件中使用该数据，应该考虑将数据提升到更高的层次
2. Consumer 属性：后续讲解

**使用上下文中的数据**

1. 在类组件中，直接使用 this.context 获取上下文数据
   1. 要求：必须拥有静态属性 contextType , 应赋值为创建的上下文对象
2. 在函数组件中，需要使用 Consumer 来获取上下文数据
   1. Consumer 是一个组件
   2. 它的子节点，是一个函数（它的 props.children 需要传递一个函数）

**注意细节**

如果，上下文提供者（Context.Provider）中的 value 属性发生变化(Object.is 比较)，会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否有优化（无论 shouldComponentUpdate 函数返回什么结果）

# render props

有时候，某些组件的各种功能及其处理逻辑几乎完全相同，只是显示的界面不一样，建议下面的方式认选其一来解决重复代码的问题（横切关注点）

1. render props
   1. 某个组件，需要某个属性
   2. 该属性是一个函数，函数的返回值用于渲染
   3. 函数的参数会传递为需要的数据
   4. 注意纯组件的属性（尽量避免每次传递的 render props 的地址不一致）
   5. 通常该属性的名字叫做 render
2. HOC

# React Router

1. 根据不同的页面地址，展示不同的组件。（核心）
2. 完成无刷新的地址切换。

---

## 两种模式

路由：根据不同的页面地址，展示不同的组件

url 地址组成

例：https://www.react.com:443/news/1-2-1.html?a=1&b=2#abcdefg

1. 协议名(schema)：https
2. 主机名(host)：www.react.com
   1. ip 地址
   2. 预设值：localhost
   3. 域名
   4. 局域网中电脑名称
3. 端口号(port)：443
   1. 如果协议是 http，端口号是 80，则可以省略端口号
   2. 如果协议是 https，端口号是 443，则可以省略端口号
4. 路径(path)：/news/1-2-1.html
5. 地址参数(search、query)：?a=1&b=2
   1. 附带的数据
   2. 格式：属性名=属性值&属性名=属性值....
6. 哈希(hash、锚点)
   1. 附带的数据

### Hash Router 哈希路由

根据 url 地址中的哈希值来确定显示的组件

> 原因：hash 的变化，不会导致页面刷新
> 这种模式的兼容性最好

### Borswer History Router 浏览器历史记录路由

HTML5 出现后，新增了 History Api，从此以后，浏览器拥有了改变路径而不刷新页面的方式

History 表示浏览器的历史记录，它使用栈的方式存储。

1. history.length：获取栈中数据量
2. history.pushState：向当前历史记录栈中加入一条新的记录
   1. 参数 1：附加的数据，自定义的数据，可以是任何类型
   2. 参数 2：页面标题，目前大部分浏览器不支持
   3. 参数 3：新的地址
3. history.replaceState：将当前指针指向的历史记录，替换为某个记录
   1. 参数 1：附加的数据，自定义的数据，可以是任何类型
   2. 参数 2：页面标题，目前大部分浏览器不支持
   3. 参数 3：新的地址

根据页面的路径决定渲染哪个组件

---

## 路由组件

React-Router 为我们提供了两个重要组件

### Router 组件

它本身不做任何展示，仅提供路由模式配置，另外，该组件会产生一个上下文，上下文中会提供一些实用的对象和方法，供其他相关组件使用

1. HashRouter：该组件，使用 hash 模式匹配
2. BrowserRouter：该组件，使用 BrowserHistory 模式匹配

通常情况下，Router 组件只有一个，将该组件包裹整个页面

### Route 组件

根据不同的地址，展示不同的组件

重要属性：

1. path：匹配的路径
   1. 默认情况下，不区分大小写，可以设置 sensitive 属性为 true，来区分大小写
   2. 默认情况下，只匹配初始目录，如果要精确匹配，配置 exact 属性为 true
   3. 如果不写 path，则会匹配任意路径
2. component：匹配成功后要显示的组件
3. children：
   1. 传递 React 元素，无论是否匹配，一定会显示 children，并且会忽略 component 属性
   2. 传递一个函数，该函数有多个参数，这些参数来自于上下文，该函数返回 react 元素，则一定会显示返回的元素，并且忽略 component 属性

Route 组件可以写到任意的地方，只要保证它是 Router 组件的后代元素

### Switch 组件

写到 Switch 组件中的 Route 组件，当匹配到第一个 Route 后，会立即停止匹配

由于 Switch 组件会循环所有子元素，然后让每个子元素去完成匹配，若匹配到，则渲染对应的组件，然后停止循环。因此，不能在 Switch 的子元素中使用除 Route 外的其他组件。

---

## 路由信息

Router 组件会创建一个上下文，并且，向上下文中注入一些信息

该上下文对开发者是隐藏的，Route 组件若匹配到了地址，则会将这些上下文中的信息作为属性传入对应的组件

### history

它并不是 window.history 对象，我们利用该对象无刷新跳转地址

**为什么没有直接使用 history 对象**

1. React-Router 中有两种模式：Hash、History，如果直接使用 window.history，只能支持一种模式
2. 当使用 windows.history.pushState 方法时，没有办法收到任何通知，将导致 React 无法知晓地址发生了变化，结果导致无法重新渲染组件

- push：将某个新的地址入栈（历史记录栈）
  - 参数 1：新的地址
  - 参数 2：可选，附带的状态数据
- replace：将某个新的地址替换掉当前栈中的地址
- go: 与 window.history 一致
- forward: 与 window.history 一致
- back: 与 window.history 一致

### location

与 history.location 完全一致，是同一个对象，但是，与 window.location 不同

location 对象中记录了当前地址的相关信息

我们通常使用第三方库`query-string`，用于解析地址栏中的数据

### match

该对象中保存了，路由匹配的相关信息

- isExact：事实上，当前的路径和路由配置的路径是否是精确匹配的
- params：获取路径规则中对应的数据

实际上，在书写 Route 组件的 path 属性时，可以书写一个`string pattern`（字符串正则）

react-router 使用了第三方库：Path-to-RegExp，该库的作用是，将一个字符串正则转换成一个真正的正则表达式。

**向某个页面传递数据的方式：**

1. 使用 state：在 push 页面时，加入 state
2. **利用 search：把数据填写到地址栏中的？后**
3. 利用 hash：把数据填写到 hash 后
4. **params：把数据填写到路径中**

### 非路由组件获取路由信息

某些组件，并没有直接放到 Route 中，而是嵌套在其他普通组件中，因此，它的 props 中没有路由信息，如果这些组件需要获取到路由信息，可以使用下面两种方式：

1. 将路由信息从父组件一层一层传递到子组件
2. 使用 react-router 提供的高阶组件 withRouter，包装要使用的组件，该高阶组件会返回一个新组件，新组件将向提供的组件注入路由信息。

---

## 其他组件

### Link

生成一个无刷新跳转的 a 元素

- to
  - 字符串：跳转的目标地址
  - 对象：
    - pathname：url 路径
    - search
    - hash
    - state：附加的状态信息
- replace：bool，表示是否是替换当前地址，默认是 false
- innerRef：可以将内部的 a 元素的 ref 附着在传递的对象或函数参数上
  - 函数
  - ref 对象

### NavLink

是一种特殊的 Link，Link 组件具备的功能，它都有

它具备的额外功能是：根据当前地址和链接地址，来决定该链接的样式

- activeClassName: 匹配时使用的类名
- activeStyle: 匹配时使用的内联样式
- exact: 是否精确匹配
- sensitive：匹配时是否区分大小写
- strict：是否严格匹配最后一个斜杠

### Redirect

重定向组件，当加载到该组件时，会自动跳转（无刷新）到另外一个地址

- to：跳转的地址
  - 字符串
  - 对象
- push: 默认为 false，表示跳转使用替换的方式，设置为 true 后，则使用 push 的方式跳转
- from：当匹配到 from 地址规则时才进行跳转
- exact: 是否精确匹配 from
- sensitive：from 匹配时是否区分大小写
- strict：from 是否严格匹配最后一个斜杠

---

## 导航守卫

导航守卫：当离开一个页面，进入另一个页面时，触发的事件

history 对象

- listen: 添加一个监听器，监听地址的变化，当地址发生变化时，会调用传递的函数
  - 参数：函数，运行时间点：发生在即将跳转到新页面时
    - 参数 1：location 对象，记录当前的地址信息
    - 参数 2：action，一个字符串，表示进入该地址的方式
      - POP：出栈
        - 通过点击浏览器后退、前进
        - 调用 history.go
        - 调用 history.goBack
        - 调用 history.goForward
      - PUSH：入栈
        - history.push
      - REPLACE：替换
        - history.replace
  - 返回结果：函数，可以调用该函数取消监听
- block：设置一个阻塞，并同时设置阻塞消息，当页面发生跳转时，会进入阻塞，并将阻塞消息传递到路由根组件的 getUserConfirmation 方法。
  - 返回一个回调函数，用于取消阻塞器

路由根组件

- getUserConfirmation
  - 参数：函数
    - 参数 1：阻塞消息
      - 字符串消息
      - 函数，函数的返回结果是一个字符串，用于表示阻塞消息
        - 参数 1：location 对象
        - 参数 2：action 值
    - 参数 2：回调函数，调用该函数并传递 true，则表示进入到新页面，否则，不做任何操作

---

## 常见应用

- 路由切换动画
  - 第三方动画库：react-transition-group
  - CSSTransition：用于为内部的 DOM 元素添加类样式，通过 in 属性决定内部的 DOM 处于退出还是进入阶段。
- 滚动条复位
  - 高阶组件
  - 使用 useEffect
  - 使用自定义的导航守卫

# HOOK

> hook 增强了函数组件的功能。相比于类组件，没有生命周期，不用声明 this 指向。

## useState

- 用法
  接收一个参数，参数表示状态的默认值。
  返回一个数组，数组的第一个元素是状态，第二个元素是更改状态的函数。

- 注意的细节：
  1. useState 最好写在函数的起始位置。
  2. useState 严禁出现在代码块里(判断、循环)，否则当更新时再次调用 useState 就会赋值错乱。
  3. useState 返回的函数，引用不变(为了节约内存空间）
  4. 如果使用函数改变数据，若数据和之前的数据完全相等(Object.is())，不会导致重新渲染。
  5. 使用函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换。
  6. 如果要实现强制刷新：
  - 类组件：使用 forceUpdate 函数。
  - 函数组件： 使用一个空对象的 useState
  7. 如果某些状态之间没有必然的联系，应该化为不同的状态，不要合并成一个状态。
  8. 和类组件的状态一样，函数组件中改变状态可能是异步的(dom 事件)，多个状态变化会合并以提高效率，此时不能信任以前的状态，如果要用之前的状态，应该使用回调。`setCount(precount => precount + 1)`

## useEffect

1. 副作用函数运行的时间点，是在页面完成渲染后，因此副作用函数的执行是异步的，不会阻塞浏览器。

   - 在类组件中，在 componentDidMount 和 componentDidUpdate 中，更改了真实的 dom，但是用户还没有看到 UI 更新。同步的。
   - 在函数组件中，**useEffect 是在更改了真实 dom 并且 用户已经看到了 UI 更新**，异步的。

2. 在一个函数组件中，可以使用多个 useEffect。但不要放在代码块中(判断、循环)。
3. useEffect 中的副作用函数可以有返回值，返回值必须是一个函数。该函数叫做“清理函数”，该函数运行时间点，在运行副作用函数之前。首次渲染组件不会运行。
4. useEffect 接受第二个参数，是一个数组，记录该副作用的依赖数据，当组件重新渲染后，当依赖数据和上次不一样时，才会执行副作用。如果数据不变，则副作用函数只在第一个渲染运行，清理函数只在卸载时运行。
5. 副作用函数中，如果使用了函数上下文中的变量，由于闭包的影响，会导致副作用函数中的变量不会实时变化。
6. 副作用函数在每次注册时，会覆盖掉之前的副作用函数，因此，尽量保持副作用函数稳定。否则控制起来很复杂。

## 自定义 Hook

> 将一些常用的，跨越多个组件的 hook 功能，抽离出去形成一个函数，改函数就是自定义 hook.

- 高阶组件解决逻辑复用问题，会使得组件结构层次变深，难以区分开真实组件。
- render props 复用一个值为函数的 props 解决代码共享，主要解决数据一样，渲染不一样的问题。

## useContext

## useCallback

固定一个函数的引用地址。第一个参数是一个函数，第二个函数是依赖。依赖项没有发生变化，就可以用这个。
`useCallback(fn, deps)` 相当于 `useMemo(() => fn, deps)`。

## useMemo

用于保持一些比较稳定的数据。通常用于性能优化。
如果 react 元素本身的引用没有发生变化，不会重新渲染。

## useRef

- 一个参数：默认值
- 每次渲染都返回一个固定的对象。`{current: val}`

## useImperativeHandle

- 返回的值是 current 的值

```javascript
useImperativeHandle(
  ref,
  () => {
    // 返回的值是current的值
    return {
      method() {
        console.log("test method");
      },
    };
  },
  []
);
```

- 如果不给依赖项，则每次函数运行都会调用该方法。如果使用了依赖项，第一次调用后，会尽享缓存，只有依赖项发生变化的时候，才会调用。

## useLayoutEffect

**浏览器完成了 dom 改动，但是浏览器还没渲染，即用户还没看到页面更新。和 componentDidMount 和 componentDidUpdate 类似。操作真实的 dom 用这个。**
尽可能使用标准的 useEffect 以避免阻塞视觉更新。

## useDebugValue

用于将自定义 hook(通用性比较高的) 的关联数据显示到调试栏。

# build your own react

[build your own react](https://pomb.us/build-your-own-react/)

# 学习总结疑问
