import React from "react";

// function App() {
//     return (
//         <div>类组件和函数组件</div>
//     )
// }

// 类组件
// 类组件的setState会自动合并第一层属性，但不会自动合并第二层
// class ClassState extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             n: 0,
//             m: 0,
//             user: {
//                 name: "Sherry",
//                 age: 18
//             }
//         };
//     }

    // addN 和 addM 任一更新时，另一属性不会被置空
    // 在button中搭配onClick={() => { this.addN() }}使用
    // addN() {
    //     this.setState(state => {
    //         return {
    //             n: state.n + 1
    //         }
    //     })
    // }

    // addN()=>{}方法简写，此方法可以在button中直接写onClick={this.addN}
    // 是最常用的方法
//     addN = () => {
//         this.setState(state => {
//             return {
//                 n: state.n + 1
//             }
//         })
//     }
//
//     addM() {
//         this.setState(state => {
//             return {
//                 m: state.m + 1
//             }
//         })
//     }
//
//     changeUser() {
//         this.setState({
//             user: {
//                 // 保存之前的数据，以免更新时，age被置空
//                 ...this.state.user,
//                 name: "123"
//             }
//         })
//     }
//
//     render() {
//         return (
//             <div className="state">
//                 class方法：
//                 {this.state.n} &nbsp;
//                 {/* 搭配addN(){}方式使用 */}
//                 {/* <button onClick={() => { this.addN() }}>n+1</button> */}
//
//                 {/* 搭配addN = () =>{函数内容}使用 */}
//                 <button onClick={this.addN}>n+1</button>
//
//                 &nbsp;&nbsp;&nbsp;&nbsp;
//                 {this.state.m} &nbsp;
//                 <button onClick={() => { this.addM() }}>m+1</button>
//                 <div className="usermessage">
//                     <div>
//                         用户姓名：{this.state.user.name}
//                         &nbsp;&nbsp;&nbsp;&nbsp;
//                         用户年龄：{this.state.user.age}
//                     </div>
//                     <button onClick={() => { this.changeUser() }}>更新信息</button>
//                 </div>
//             </div >
//         )
//     }
// }


// 函数组件
// 函数组件的setX不会进行合并
const ArrayState = () => {
    const [n, setN] = React.useState(0);
    const [m, setM] = React.useState(0)
    return (
        <div className="ArrayState">
            array方法：
            {n}&nbsp;
            <button onClick={() => {
                setN(n + 1)
            }}>n+1</button>

            &nbsp;&nbsp;&nbsp;&nbsp;

            {m}&nbsp;
            <button onClick={() => {
                setM(m + 1)
            }}>m+1</button>
        </div>
    )
}

export default ArrayState