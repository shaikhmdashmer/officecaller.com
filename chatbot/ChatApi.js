import React, { useEffect, useRef, useState } from "react";

export default function ChatApi({ search, forwardRef, setuserChatLive, isTyping, setTyping }) {

    const [visibleButtons, setVisibleButtons] = useState([false, false, false]);
    const [chatHistory, setChatHistory] = useState([]);
    const [response, setResponse] = useState(null);
    const [time, setTime] = useState('10:30:24 PM');
    const divRef = useRef(null);
    const scrollRef = useRef(null);
    const userMsgRef = useRef([]);
    const [newMessageIndex, setNewMessageIndex] = useState(null);
    const [showScrollDown, setShowScrollDown] = useState(false);
    const [getMobileNo, setMobileNo] = useState(false);
    const [getIntent, setIntent] = useState([]);
    const [defaultIntent ,setDefaultIntent] = useState()
    const [colorSettings, setColorSettings] = useState(null);
    


  useEffect(()=>{
   const ThemeData = JSON.parse(localStorage.getItem("ColorTheme"));
   setColorSettings(ThemeData)
  },[])

   
   
   
    useEffect(() => {

        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight;
        }
        if (chatHistory.length > 0) {
            localStorage.setItem("chatHistory", JSON.stringify(chatHistory))
        }
        localStorage.setItem("ChatTrue", true);
        // console.log(chatHistory)
    }, [chatHistory]);




    useEffect(() => {
        if (userMsgRef.current.length > 0) {
            const lastMsg = userMsgRef.current[userMsgRef.current.length - 1];
            if (lastMsg) {
                lastMsg.classList.add('fade-in');
            }
        }
    }, [chatHistory]);


    useEffect(() => {
        const chatHistory = localStorage.getItem("chatHistory");
        if (chatHistory) {
            setChatHistory(JSON.parse(chatHistory));
            localStorage.setItem("ChatTrue", true);
            setuserChatLive(true);
        }

        const userMobileNo = localStorage.getItem("UserMobile");
        setMobileNo(userMobileNo)



    }, [])


    useEffect(() => {
        const handleScroll = () => {
            if (divRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = divRef.current;
                setShowScrollDown(scrollTop + clientHeight < scrollHeight);
            }
        };

        const chatContainer = divRef.current;
        chatContainer.addEventListener('scroll', handleScroll);

        return () => {
            chatContainer.removeEventListener('scroll', handleScroll);
        };
    }, [chatHistory]);


    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [chatHistory, getIntent]);



useEffect(()=>{
    function DefaultIntent() {
        const data = {
            "intent": "default",
            "domain":"https://www.officecaller.com"
        };


        fetch('https://cloudxperte.crm-api.wifiattendance.com:3016/api/GetQuestionByIntent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setDefaultIntent(data.data)
                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    DefaultIntent()
},[])


    function IntentFunction(intent) {
        const data = {
            "intent": intent,
            "domain":"https://www.officecaller.com"
        };


        fetch('https://cloudxperte.crm-api.wifiattendance.com:3016/api/GetQuestionByIntent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setIntent(data.data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    const handlePostRequest = async (search) => {
        setIntent([]);
        setTyping(true)

       // Capture current time
    const currentTime = new Date().toLocaleTimeString(); // This will give you the current time in 'hh:mm:ss AM/PM' format
    setTime(currentTime);

        const url = "https://chatbot-api.cloudxperte.com/webhooks/rest/webhook";
        const data = {
            sender: getMobileNo,
            message: search,
            // message: search+" "+"vehicletracking.qa",
        };



        try {
            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setTyping(false)
                localStorage.setItem("ChatTrue", true)
                setuserChatLive(true);
                const jsonResponse = await res.json();
                setChatHistory([...chatHistory, { systemRes: jsonResponse, useRes: search ,timestamp: currentTime }])
                const intent = jsonResponse[0].custom.intent;
                IntentFunction(intent)

            } else {
                console.error("Error:", res.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const renderResponse = () => {
        if (!response) return null;

        return response.map((res, index) => {
            if (res.custom && res.custom.type === "array") {
                return (
                    <div key={index}>
                        <ul>
                            {res.custom.data.map((item, i) => (
                                <li key={i}>{convertToClickableLinks(item)}</li>
                            ))}
                        </ul>
                    </div>
                );
            }

            else if (res.custom && res.custom.type === "string") {
                return (
                    <div key={index}>
                        {/* <p>{res?.custom?.data ? res?.custom?.data : "No data available"}</p> */}
                        <p>{convertToClickableLinks(res?.custom?.data)}</p>
                    </div>
                );
            }

            else {
                return (
                    <div key={index}>
                        {/* <p>{res.text ? res?.text : "No data available"}</p> */}
                        <p>{convertToClickableLinks(res?.text)}</p>
                    </div>
                );
            }
        });
    };



    function handleQuestionClick(e) {
        const text = e.target.textContent;
        handlePostRequest(text);
    }
    const [showTest, setShowTest] = useState(false);



    // Utility function to convert URLs to clickable links
const convertToClickableLinks = (text) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.split(urlPattern).map((part, index) => {
        if (urlPattern.test(part)) {
            return <a key={index} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
        }
        return part;
    });
};

    return (
        <>
            <div className="chat-api-design">
                <div className="container h-100 hide-scrollbar "
                    onScroll={(e) => {
                        // console.log(divRef.current.scrollTop , divRef.current.scrollHeight)
                        if (e.target.scrollTop === e.target.scrollHeight) {
                            setShowTest(false)
                        } else {
                            setShowTest(true);
                        }
                    }}
                    ref={divRef} style={{ overflowY: "scroll", maxHeight: 570, paddingBottom: "30px", scrollbarWidth: 0 }}  >



                    <div className="randam-quation">
                        <div className="text-center d-flex">
                            <img src={`${colorSettings?.data?.bot_logo}`} alt="" width="20" height='20' style={{marginTop:'10px'}} />
                            <p>How can I help you today?</p>
                        </div>
                        <span> Please use the navigation options below or feel free to ask me any questions regarding vehicle tracking software.</span>
                       {
                        defaultIntent?.map((item)=>(
                            <>
                               <button type="button" 
                                     className="btn btn-outline-danger"
                                     onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = colorSettings?.data?.primary_background_color , e.currentTarget.style.color = '#fff'}}
                                     onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#fff' ,e.currentTarget.style.color ="#000" }} 
                                     onClick={handleQuestionClick}>{item?.question}</button>
                              </>
                        ))
                       }
                    </div>



                    {chatHistory.map((item, index) => {
                        return (
                            <>
                                <div key={index} ref={el => userMsgRef.current[index] = el} className={`user-msg-container ${index === newMessageIndex ? 'fade-in' : ''}`}>
                                    <div className="user-msg">
                                        <div className="frontend-msg" style={{backgroundColor:colorSettings?.data?.user_message_bg_color , color: colorSettings?.data?.user_message_text_color}}>
                                            {/* {item.useRes} */}
                                            {convertToClickableLinks(item.useRes)}
                                        </div>
                                    </div>

                                    <div className="chat-bot-container">
                                        <div className="chat-btn-name">{colorSettings?.data?.bot_name} : {item.timestamp}</div>
                                        <div className="backend-response d-flex">
                                            <img src={`${colorSettings?.data?.bot_logo}`} 
                                            alt="" 
                                            width="20" />
                                            <div className="backend-msg" style={{backgroundColor: colorSettings?.data?.bot_message_bg_color , color:colorSettings?.data?.bot_message_text_color  }}>
                                                <div>
                                                    {
                                                        item.systemRes.map((res, index) => {
                                                            if (res.custom?.type === 'array') {
                                                                return (
                                                                    <div key={index}>
                                                                        <ul>
                                                                            {res.custom.data.map((item, i) => (
                                                                                <li key={i}>{convertToClickableLinks(item)}</li>
                                                                                
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                )
                                                            }

                                                            else if (res?.custom?.type === "string") {
                                                                return (
                                                                    <div key={index}>
                                                                        {/* <p>{res?.custom?.data ? res?.custom?.data : "No data available"}</p> */}
                                                                        <p>{convertToClickableLinks(res?.custom?.data)}</p>
                                                                    </div>
                                                                )
                                                            }

                                                            else {
                                                                return (
                                                                    <div key={index}>
                                                                        {/* <p>{res?.text ? res?.text : "No data available"}</p> */}
                                                                        <p>{convertToClickableLinks(res?.text )}</p>
                                                                    </div>)
                                                            }
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>


                                       


                                        <div className="inntent-quation">
                                            {index === chatHistory.length - 1 && chatHistory.map((chat, index) => (
                                                <div key={index}>
                                                    {index === chatHistory.length - 1 &&
                                                        getIntent.map((item, idx) => (
                                                            <div key={idx} ref={scrollRef}>
                                                                <p className="suggest" 
                                                                onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = colorSettings?.data?.primary_background_color , e.currentTarget.style.color = '#fff'}}
                                                                onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#fff' ,e.currentTarget.style.color ="#000" }} 
                                                                   style={{border: '1px solid #FC7700'}}
                                                                   onClick={handleQuestionClick}>{item?.question}</p>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            ))}
                                        </div>


                                    </div>
                                </div>

                            </>

                        );
                    })}


                    <button hidden ref={forwardRef} onClick={() => handlePostRequest(search)}>
                        Send Request
                    </button>
                </div>


                {showScrollDown && (
                    <div className="scroll-down-postion">
                        <div className="scroll-down-container" style={{backgroundColor: colorSettings?.data?.primary_background_color}} >
                            <button
                                onClick={() => { divRef.current.scrollTop = divRef.current.scrollHeight; }}
                                style={{
                                    backgroundColor: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    height: '30px',
                                    width: '30px'
                                }}
                            >
                                <i className="fas fa-chevron-down"></i>
                            </button>
                        </div>
                    </div>
                )}


            </div>
        </>
    );
}
