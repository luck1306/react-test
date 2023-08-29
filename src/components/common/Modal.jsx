import { useRef, useState } from "react";
import { styled } from "styled-components";

const TestDiv = styled.div`
    position: relative;
    top: 50px;
    left: 50px;
    display: flex;
    border: 5px black solid;
    height: 300px;
    width: 1000px;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
`;

const JoinModalDialog = styled.dialog`
    background-color: #ccc;
    z-index: 1;
    border: 5px dotted red;
    /* border-radius: 0.5rem; */
    width: 250px;
    height: 200px;
    /* width: 100%; */
    display: flex;
    position: relative;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
`;

const ModalLabel = styled.label`
    display: inline-block;
    width: 70px;
    text-align: center;
`;

const Modal = () => {
    const [account, setAccount] = useState({
        id: "",
        pw: "",
    });

    //   useEffect(() => {
    //     console.log(account);
    //   }, [account]);

    const dialogRef = useRef(null);

    const onSignBtn = () => {
        dialogRef.current.showModal();
    };
    const onExitBtn = () => {
        dialogRef.current.close();
        setAccount({
            id: "",
            pw: "",
        });
    };

    return (
        <TestDiv>
            <button onClick={onSignBtn}>회원가입</button>
            <JoinModalDialog id="joinModalDialog" ref={dialogRef}>
                <button
                    style={{
                        position: "absolute",
                        top: "0px",
                        right: "0px",
                    }}
                    onClick={onExitBtn}
                >
                    X
                </button>
                <div>
                    <ModalLabel htmlFor="idInput">아이디</ModalLabel>
                    <input
                        type="text"
                        name="id"
                        id="idInput"
                        placeholder="id"
                        value={account.id}
                        onInput={(e) =>
                            setAccount({
                                ...account,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <ModalLabel htmlFor="pwInput">비밀번호</ModalLabel>
                    <input
                        type="password"
                        name="pw"
                        id="pwInput"
                        placeholder="pw"
                        value={account.pw}
                        onInput={(e) =>
                            setAccount({
                                ...account,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                </div>
            </JoinModalDialog>
        </TestDiv>
    );
};
export default Modal;
