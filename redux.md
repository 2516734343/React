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
6. 为了方便利用 action 创建函数来分发（触发）action，redux 提供了一个函数`bindActionCreators`，该函数用于增强 action 创建函数的功能，使它不仅可以创建 action，并且创建后会自动完成分发。
