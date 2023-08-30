import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { createGlobalStyle, styled } from "styled-components";

// const TestDiv = styled.div`
//     position: relative;
//     top: 50px;
//     left: 50px;
//     display: flex;
//     border: 5px black solid;
//     height: 300px;
//     width: 1000px;
//     flex-flow: row wrap;
//     justify-content: space-between;
//     align-items: center;
// `;

// const JoinModalDialog = styled.dialog`
//     background-color: #ccc;
//     /* z-index:0; */
//     border: 5px dotted red;
//     border-radius: 0.5rem;
//     width: 250px;
//     height: 200px;
//     display: flex;
//     position: relative;
//     justify-content: center;
//     flex-flow: column wrap;
//     align-content: space-evenly;
// `;

const ModalLabel = styled.label`
    display: inline-block;
    width: 70px;
    text-align: center;
`;

const DIV = styled.div`
    display: ${(props) => (props.visible === "true" ? "flex" : "none")};
    position: fixed;
    bottom: 45%;
    left: 42%;
    width: 500px;
    height: 200px;
    background: #ccc;
    border: black 1px;
    border-radius: 0.5rem;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const CONFIG = createGlobalStyle`
    * :not(#modal) {
        background-color: blue;
    }
`;

const Modal = () => {
    const [modalStatus, setModalStatus] = useState("false");
    const [account, setAccount] = useState({
        id: "",
        pw: "",
    });
    // useEffect(() => {
    //     setModalStatus(window.confirm("ㅇㅇㅇㅇ").toString());
    // }, []);
    useEffect(() => console.log(account), [account]);

    return (
        <>
            <button onClick={()=>setModalStatus("true")}>회원가입</button>
            <DIV visible={modalStatus} id="modal">
                <div>
                    <ModalLabel htmlFor="idInput">아이디</ModalLabel>
                    <input
                        type="text"
                        name="id"
                        id="idInput"
                        value={account.id}
                        placeholder="아이디를 입력해주세요"
                        onInput={(e) => {
                            setAccount({
                                ...account,
                                [e.target.name]: e.target.value,
                            });
                        }}
                    />
                </div>
                <div>
                    <ModalLabel htmlFor="pwInput">비밀번호</ModalLabel>
                    <input
                        type="password"
                        name="pw"
                        id="pwInput"
                        value={account.pw}
                        placeholder="비밀번호를 입력해주세요"
                        onInput={(e) => {
                            setAccount({
                                ...account,
                                [e.target.name]: e.target.value,
                            });
                        }}
                    />
                </div>
                <button>가입</button>
                <button
                    style={{
                        position: "absolute",
                        top: 5,
                        right: 5,
                        textAlign: "center",
                    }}
                    onClick={() => {
                        setAccount({ id: "", pw: "" });
                        setModalStatus("fasle");
                    }}
                >
                    X
                </button>
            </DIV>
        </>
    );
    // const [account, setAccount] = useState({
    //     id: "",
    //     pw: "",
    // });

    // const dialogRef = useRef(null);

    // const onSignBtn = () => {
    //     dialogRef.current.showModal();
    // };
    // const onExitBtn = () => {
    //     dialogRef.current.close();
    //     setAccount({
    //         id: "",
    //         pw: "",
    //     });
    // };

    // // useEffect(onExitBtn, []);

    // return (
    //     <TestDiv>
    //         <button onClick={onSignBtn}>회원가입</button>
    //         <JoinModalDialog id="joinModalDialog" ref={dialogRef}>
    //             <button
    //                 style={{
    //                     position: "absolute",
    //                     top: "0px",
    //                     right: "0px",
    //                 }}
    //                 onClick={onExitBtn}
    //             >
    //                 X
    //             </button>
    //             <div>
    //                 <ModalLabel htmlFor="idInput">아이디</ModalLabel>
    //                 <input
    //                     type="text"
    //                     name="id"
    //                     id="idInput"
    //                     placeholder="id"
    //                     value={account.id}
    //                     onInput={(e) =>
    //                         setAccount({
    //                             ...account,
    //                             [e.target.name]: e.target.value,
    //                         })
    //                     }
    //                 />
    //             </div>
    //             <div>
    //                 <ModalLabel htmlFor="pwInput">비밀번호</ModalLabel>
    //                 <input
    //                     type="password"
    //                     name="pw"
    //                     id="pwInput"
    //                     placeholder="pw"
    //                     value={account.pw}
    //                     onInput={(e) =>
    //                         setAccount({
    //                             ...account,
    //                             [e.target.name]: e.target.value,
    //                         })
    //                     }
    //                 />
    //             </div>
    //         </JoinModalDialog>
    //     </TestDiv>
    // );
};
export default Modal;
