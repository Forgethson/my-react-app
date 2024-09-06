// 项目根组件
// App -> index.js -> public/index.html(root)

const message = 'this is message'

const list = [
  { id: 1001, name: 'Vue' },
  { id: 1002, name: 'React' },
  { id: 1003, name: 'Angular' }
]

const flag = true
const loading = true

function getAge() {
  return 18
}

// 在JSX中可以通过大括号语法{} 识别JavaScript中的表达式，比如常见的变量、函数调用、方法调用等等

const type = 3  // 0|1|3

function getArticleJSX() {
  if (type === 0) {
    return <div>无图模式模版</div>
  } else if (type === 1) {
    return <div>单图模式模版</div>
  } else if (type === 3) {
    return <div>三图模式模版</div>
  }
}

// 箭头函数，用法类似于匿名函数
const clickHandlerName = 'jack222'

const clickHandler = (e) => {
  console.log('button按钮点击了', e)
}

const clickHandler2 = (name) => {
  console.log('button按钮点击了', name)
}

const clickHandler3 = (name, e) => {
  console.log('button按钮点击了', name, e)
}

// 1. 定义组件
function MyButton() {
  return <button>click me</button>
}


function App() {
  // 状态管理
  const [count, setCount] = React.useState(0)

  return (
    // JSX(JavaScript + HTML)
    <div className="App">
      <h1>JSX基础</h1>
      <div>
        <h2>字符串识别</h2>
        {'this is str'}

        <h2>变量识别</h2>
        {message}

        <h2>函数调用 渲染为函数的返回值</h2>
        {getAge()}

        {/* 在JSX中可以使用原生js种的map方法 实现列表渲染 */}

        <h2>列表渲染</h2>
        {/* 注意，渲染对象需要加JSON.stringify，key是React内部的标识，也可以不加 */}
        <ul>
          {list.map(item => <li key={item.id}>{JSON.stringify(item)}</li>)}
        </ul>
        <ul>
          {list.map(item => <li key={item.id}>{item.name}</li>)}
        </ul>

        <h2>条件渲染</h2>
        {flag && <span>this is span      --     </span>}
        {loading ? <span>loading.....</span> : <span>not loading</span>}

        <h2>复杂条件渲染</h2>
        {getArticleJSX(type)}
      </div>

      <h1>React的事件绑定</h1>
      <div>
        <h2>使用事件参数e</h2>
        <button onClick={clickHandler}>click me</button>

        <h2>传递自定义参数</h2>
        这里如果不写成箭头函数相当于直接调用了clickHandler2(clickHandlerName)
        ，则会立刻执行（按下按钮）。
        <button onClick={() => clickHandler2(clickHandlerName)}>click me</button>

        <h2>同时传递事件对象和自定义参数</h2>
        <button onClick={(e) => clickHandler3(clickHandlerName, e)}>click me</button>
      </div>

      <h1>React组件基础使用</h1>
      <div>
        <h2>组件基础使用</h2>
        <MyButton></MyButton>
      </div>

      {/* useState 是一个 React Hook（函数）
      它允许我们向组件添加一个状态变量,从而控制影响组件的渲染结果
      和普通JS变量不同的是，状态变量一旦发生变化
      组件的视图UI也会跟着变化（数据驱动视图）
      */}
      <h1>组件状态管理-useState</h1>
      <div>
        <h2>组件基础使用</h2>
        <button onClick={() => setCount(count + 1)}>{count}</button>
      </div>


    </div>
  );
}

export default App;
