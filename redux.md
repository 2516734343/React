# Action

1. action 是一个 plain-object（平面对象）
   1. 它的**proto**指向 Object.prototype
2. 通常，使用 payload 属性表示附加数据（没有强制要求）
3. action 中必须有 type 属性，该属性用于描述操作的类型
   1. 但是，没有对 type 的类型做出要求
4. 在大型项目，由于操作类型非常多，为了避免硬编码（hard code），会将 action 的类型存放到一个或一些单独的文件中(样板代码)。
5. 为了方面传递 action，通常会使用 action 创建函数(action creator)来创建 action
   1. action 创建函数应为无副作用的纯函数
      1. 不能以任何形式改动参数
      2. 不可以有异步
      3. 不可以对外部环境中的数据造成影响
6. 为了方便利用 action 创建函数来分发（触发）action，redux 提供了一个函数`bindActionCreators`，该函数用于增强 action 创建函数的功能，使它不仅可以创建 action，并且创建后会自动完成分发。如果传递的第一个参数是函数，则返回一个直接自动分发 action 的函数。第一个参数是对象时，要遍历对象，将对象里的每一个 action 自动分发增强并返回。

# Reducer

Reducer 是用于改变数据的函数

1. 一个数据仓库，有且仅有一个 reducer，并且通常情况下，一个工程只有一个仓库，因此，一个系统，只有一个 reducer
2. 为了方便管理，通常会将 reducer 放到单独的文件中。
3. reducer 被调用的时机
   1. 通过 store.dispatch，分发了一个 action，此时，会调用 reducer
   2. 当创建一个 store 的时候，会调用一次 reducer
      1. 可以利用这一点，用 reducer 初始化状态
      2. 创建仓库时，不传递任何默认状态
      3. 将 reducer 的参数 state 设置一个默认值
4. reducer 内部通常使用 switch 来判断 type 值
5. **reducer 必须是一个没有副作用的纯函数**
   1. 为什么需要纯函数
      1. 纯函数有利于测试和调式
      2. 有利于还原数据
      3. 有利于将来和 react 结合时的优化
   2. 具体要求
      1. 不能改变参数，因此若要让状态变化，必须得到一个新的状态
      2. 不能有异步
      3. 不能对外部环境造成影响
6. 由于在大中型项目中，操作比较复杂，数据结构也比较复杂，因此，需要对 reducer 进行细分。
   1. redux 提供了方法，可以帮助我们更加方便的合并 reducer
   2. combineReducers: 合并 reducer，得到一个新的 reducer，该新的 reducer 管理一个对象，该对象中的每一个属性交给对应的 reducer 管理。

# Store

Store：用于保存数据

通过 createStore 方法创建的对象。

该对象的成员：

- dispatch：分发一个 action
- getState：得到仓库中当前的状态
- replaceReducer：替换掉当前的 reducer
- subscribe：注册一个监听器，监听器是一个无参函数，该分发一个 action 之后，会运行注册的监听器。该函数会返回一个函数，用于取消监听

# Redux 中间件（Middleware）

中间件：类似于插件，可以在不影响原本功能、并且不改动原本代码的基础上，对其功能进行增强。在 Redux 中，中间件主要用于增强 dispatch 函数。

**实现 Redux 中间件的基本原理，是更改仓库中的 dispatch 函数。**

Redux 中间件书写：

- 中间件本身是一个函数，该函数接收一个 store 参数，表示创建的仓库，该仓库并非一个完整的仓库对象，仅包含 getState，dispatch。该函数运行的时间，是在仓库创建之后运行。
  - 由于创建仓库后需要自动运行设置的中间件函数，因此，需要在创建仓库时，告诉仓库有哪些中间件
  - 需要调用 applyMiddleware 函数，将函数的返回结果作为 createStore 的第二或第三个参数。
- **中间件函数必须返回一个 dispatch 创建函数**

- applyMiddleware 函数，用于记录有哪些中间件，它会返回一个函数
  - 该函数用于记录创建仓库的方法，然后又返回一个函数

### 利用中间件进行副作用处理

#### 1. redux-thunk

thunk 允许 action 是一个带有副作用的函数，当 action 是一个函数被分发时，thunk 会阻止 action 继续向后移交。

thunk 会向函数中传递三个参数：

- dispatch：来自于 store.dispatch

- getState：来自于 store.getState

- extra：来自于用户设置的额外参数

#### 2. redux-promise

如果 action 是一个 promise，则会等待 promise 完成，将完成的结果作为 action 触发，如果 action 不是一个 promise，则判断其 payload 是否是一个 promise，如果是，等待 promise 完成，然后将得到的结果作为 payload 的值触发。

#### 3. redux-saga

# react-redux

- React: 组件化的 UI 界面处理方案
- React-Router: 根据地址匹配路由，最终渲染不同的组件
- Redux：处理数据以及数据变化的方案（主要用于处理共享数据）

> 如果一个组件，仅用于渲染一个 UI 界面，而没有状态（通常是一个函数组件），该组件叫做**展示组件**
> 如果一个组件，仅用于提供数据，没有任何属于自己的 UI 界面，则该组件叫做**容器组件**，容器组件纯粹是为了给其他组件提供数据。

react-redux 库：链接 redux 和 react

- Provider 组件：没有任何 UI 界面，该组件的作用，是将 redux 的仓库放到一个上下文中。
- connect：高阶组件， 用于链接仓库和组件的
  - 细节一：如果对返回的容器组件加上额外的属性，则这些属性会直接传递到展示组件
  - 第一个参数：mapStateToProps:
    - 参数 1：整个仓库的状态
    - 参数 2：使用者传递的属性对象
  - 第二个参数：
    - 情况 1：传递一个函数 mapDispatchToProps
      - 参数 1：dispatch 函数
      - 参数 2：使用者传递的属性对象
      - 函数返回的对象会作为属性传递到展示组件中（作为事件处理函数存在）
    - 情况 2：传递一个对象，对象的每个属性是一个 action 创建函数，当事件触发时，会自动的 dispatch 函数返回的 action
  - 细节二：如果不传递第二个参数，通过 connect 连接的组件，会自动得到一个属性：dispatch，使得组件有能力自行触发 action，但是，不推荐这样做,不能把展示组件和数据仓库耦合在一起。

> 1. chrome 插件：redux-devtools
> 2. 使用 npm 安装第三方库：redux-devtools-extension

## react-redux 其他 api

> 详情参考：https://react-redux.js.org/api

### connect

- mergeProps: 一个函数
  - 参数 1：stateProps，该参数的值来自于 mapStateToProps 返回的值
  - 参数 2：dispatchProps，该参数的值来自于 mapDispatchToProps 返回的值
  - 参数 3：ownProps，来自于组件使用者传递的属性
  - 返回值：一个对象，该对象的属性最终会被传递到包装的组件中。
- options：配置对象

### connectAdvanced

该函数和 connect 一样，也是用于连接 React 组件和 Redux 仓库的，只不过它的配置比 connect 少一些

该函数需要传递两个参数：

- selectorFactory
  - 参数 1：dispatch
  - 参数 2：factoryOptions，配置
  - 返回：函数
    - 参数 1：state
    - 参数 2：ownProps
    - 返回的是一个对象：该对象的属性最终，会成为包装的组件的属性
- connectOptions

### createProvider

createProvider(字符串 key)：通过一个唯一的 key 值创建一个 Provider 组件。

```js
var Provider1 = createProvider("p1");
var Provider2 = createProvider("p2");
```

# redux 和 router 的结合（connected-react-router）

用于将 redux 和 react-router 进行结合

本质上，router 中的某些数据可能会跟数据仓库中的数据进行联动

该组件会将下面的路由数据和仓库保持同步

1. action：它不是 redux 的 action，它表示当前路由跳转的方式（PUSH、POP、REPLACE）
2. location：它记录了当前的地址信息

该库中的内容：

## connectRouter

这是一个函数，调用它，会返回一个用于管理仓库中路由信息的 reducer，该函数需要传递一个参数，参数是一个 history 对象。该对象，可以使用第三方库 history 得到。

## routerMiddleware

该函数会返回一个 redux 中间件，用于拦截一些特殊的 action

## ConnectedRouter

这是一个组件，用于向上下文提供一个 history 对象和其他的路由信息（与 react-router 提供的信息一致）

之所以需要新制作一个组件，是因为该库必须保证整个过程使用的是同一个 history 对象

## 一些 action 创建函数

- push
- replace
