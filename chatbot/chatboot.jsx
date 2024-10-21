import { useState, useEffect, useRef } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useRouter } from 'next/router';
import onlineSvg from "@/public/chat-icon/assets/icons/online.svg";
import FeatureList from "./FeatureList";
import Enquirychat from "./Enquirychat";
import ChatApi from "./ChatApi";
import ErrorMsg from "./ErrorMsg";


function ChatBoot() {


  const [message, setMessage] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showChatscreen, setShowChatscreen] = useState(false)
  const [showChatApi, setShowChatApi] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isChatLoginPresent, setIsChatLoginPresent] = useState(false);
  const [userChatLive, setuserChatLive] = useState(false)
  const router = useRouter();
  const [isTyping , setTyping] = useState(false)
  const [colorSettings, setColorSettings] = useState(null);

  const submitInput = useRef(null)



  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'https://cloudxperte.crm-api.wifiattendance.com:3016/api/GetColorSettingsByDomain?domain=https://www.officecaller.com';

    // Fetch the data from the API
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setColorSettings(data);
        localStorage.setItem("ColorTheme",JSON.stringify(data));
      })
      .catch((error) => {
        setError(error);
       alert("Theme API Error")
      });
  }, []);


  const handleClick = () => {
    setIsClicked(!isClicked);
  };



  useEffect(()=>{

      let chatTrue = localStorage.getItem("ChatTrue");
      if (chatTrue == 'true') {
        setuserChatLive(true);
      }
  },[userChatLive])

  const [visible, setVisible] = useState(false);
  const [searchValue, setMessageValue] = useState("");

  const sendMessage = () => {
    if (searchValue.length > 0) {
      setMessage([
        ...message,
        {
          message: searchValue,
          type: "message",
        },
      ]);

      setMessageValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // setTyping(true)
      // alert("Test");
      event.preventDefault();
      if (searchValue) {
        if (!showForm && !showChatApi) {

          if (localStorage.getItem("chatLogin")) {
            setShowChatApi(true);
          } else {
            setShowForm(true);
            setMessageValue("");
          }

        }

        if (showChatApi) {
          if (submitInput.current) {
            submitInput.current.click();

            setMessageValue("");
          }
        }
      }
      else {
        setErrorMsg(true)
      }
    }

  };
  const islogin = false
  if (typeof window !== 'undefined') {
    localStorage.getItem("chatLogin");
  }
  useEffect(() => {

    if (islogin) {
      setIsChatLoginPresent(true);
    }
    else {
      setIsChatLoginPresent(false);
    }
  }, [islogin])

  const [showHeader, setShowHeader] = useState(true);
  const [showRegisterScreen, setRegisterScreen] = useState(false);
  const [hideFooter, setHideFooter] = useState(false);

  // sub plans

  const ChatAgentRef = useRef();

  const footer = () => {
    return (
      <>
        {showHeader && !showRegisterScreen ? (

          <>
            {errorMsg && <ErrorMsg />}
            
            {isTyping && <>
                <div className="loader-container">
                  <div className="loadertime"></div></div>
            
            </>}


            <div className="input-container d-flex" style={{marginBottom:"30px", height:"42px", border: `1px solid ${colorSettings?.data?.primary_background_color}` }}>
              <InputText
                v-model="value2"
                placeholder="Type Your Message"
                onKeyPress={handleKeyPress}
                variant="filled"
                className="rounded-pill input_placeholder"
                value={searchValue}
                onChange={(e) => {
                  setMessageValue(e.target.value);
                  if (e.target.value) {
                    setErrorMsg(false)
                  }
                }}
              />
               
              {/* <img
                src={sendIcon.src}
                alt=""
                onClick={() => {
                  if (searchValue) {
                    if (!showForm && !showChatApi) {
                      if (localStorage.getItem("chatLogin")) {
                        setShowChatApi(true);
                        
                      } else {
                        setShowForm(true);
                      }
                    }

                    if (showChatApi) {
                      if (submitInput.current) {
                        submitInput.current.click();

                        setMessageValue("");
                      }
                    }
                  }

                  else {
                    setErrorMsg(true)
                  }
                }}
                className="icon lock-icon rounded-circle"
              /> */}

  <i
     className="fas fa-paper-plane"
    onClick={() => {
    if (searchValue) {
      if (!showForm && !showChatApi) {
        if (localStorage.getItem("chatLogin")) {
          setShowChatApi(true);
        } else {
          setShowForm(true);
        }
      }

      if (showChatApi) {
        if (submitInput.current) {
          submitInput.current.click();
          setMessageValue("");
        }
      }
    } else {
      setErrorMsg(true);
    }
  }}
  style={{
    fontSize: '20px',   
    color: colorSettings?.data?.primary_background_color,   
    cursor: 'pointer',  
    borderRadius: '50%', 
    padding: '10px',    
    backgroundColor:'#fff', 
    marginRight:'15px'
  }}
></i>
                
            </div>
          </>

        ) : (
          <></>
        )}
      </>
    );
  };

  const handlePage = () => {
    setVisible(false);
    setShowHeader(true);
    setRegisterScreen(false);
  };

  const showPlansListScreen = (plansType) => {
    setShowHeader(false);
  };

  const handleGotoRegisterScreen = () => {
    setShowHeader(true);
    setRegisterScreen(true);
  };



  useEffect(() => {
    // Check if 'chatLogin' key is present in local storage
    const chatLogin = localStorage.getItem('chatLogin');
    if (chatLogin) {
        setIsChatLoginPresent(true);
    } else {
      setIsChatLoginPresent(false);
    }
  }, []);

  const endConversation = () => {
    localStorage.clear();
    // localStorage.setItem("ChatTrue" , false)
    setShowChatApi(false);
    setShowChatscreen(false);
    setShowForm(false);
    setIsChatLoginPresent(false)
    router.reload();



  };

  return (
    <>
      <Dialog
        visible={visible}
        position="bottom-right"
        className="dialog"
        onHide={() => setVisible(false)}
        footer={footer}
        draggable={false}
        resizable={false}
      >
        {showHeader || showRegisterScreen ? (
          <>
            {showHeader && (
              <div className="head service-container" style={{backgroundColor: colorSettings?.data?.primary_background_color}}>

                <div className="d-flex align-items-center justify-content-between text-white icons-collections">
                  <div className=" row">
                    <div className="col-auto">
                      <img
                        className="chat-head-icon"
                        src={colorSettings?.data?.website_logo}
                        alt=""
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="col one_promise-col">
                      <h6 className="head-title">{colorSettings?.data?.domain_name}</h6>
                      <div className="head-online">
                        Online
                        <img
                          className="online-icon"
                          src={onlineSvg.src}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex">

                      
                      <div className="col-md-12 d-flex ml-2 chat-bot-toggel-btn" style={{ marginTop: "-7px", marginLeft: "10px" }}>
                        <div className="dropdown">
                          <button className="btn btn-top-chat 
                                            dropdown-toggle" 
                                            type="button" data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                            style={{color:colorSettings?.data?.primary_text_color}}
                                            >
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" 
                               onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = colorSettings?.data?.primary_background_color , e.currentTarget.style.color = '#fff'}}
                               onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#fff' ,e.currentTarget.style.color ="#000" }}
                              onClick={() => {
                                handlePage();
                                setShowChatApi(false);
                                setShowChatscreen(false);
                                setShowForm(false);
                              }} showHeader>
                                <img src="/chat-icon/assets/icons/clear-history.svg" alt="Minimize Chat" style={{ marginRight: "8px" }} />Minimize Chat
                              </a>
                            </li>
                            {isChatLoginPresent && (
                              <li>
                                <a className="dropdown-item" onClick={endConversation}
                                 onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = colorSettings?.data?.primary_background_color , e.currentTarget.style.color = '#fff'}}
                                 onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = '#fff' ,e.currentTarget.style.color ="#000" }}
                                >
                                  <img src="/chat-icon/assets/icons/end-chat.svg" alt="End Chat" style={{ marginRight: "8px" }} /> End Chat
                                </a>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="titleBar d-flex justify-content-around mx-auto ">
                    <div>
                      <p className="my-0">
                        <span className="make-bold">{colorSettings?.data?.welcome_message}</span>
                      </p>
                    
                    </div>
                  </div>
                </div>

              </div>
            )}

            <div
              className={
                showHeader
                  ? "msgBox service-container"
                  : "plansListBox service-container"
              }
            >

              {/* <div className="user-name">sagar : Chat Close</div> */}
              <div className="service-container screen2">

                { showForm &&
                  <Enquirychat setShowHeader={setShowForm} showChatScreen={setShowChatscreen} handleBack={() => setShowForm(false)} setShowChatApi={setShowChatApi} setIsChatLoginPresent={setIsChatLoginPresent} />
                }
                {
                  (showChatApi  || userChatLive)  && <ChatApi search={searchValue} forwardRef={submitInput}  setuserChatLive={setuserChatLive} isTyping={isTyping}  setTyping={setTyping}/>
                }

                {!showForm && !showChatApi && !userChatLive && <FeatureList />}

                

                


              </div>
            </div>
          </>
        ) : null}
      </Dialog>


      {/* chatbot icon */}
      <div className="chat-container">
        <div className="button-container">
          <img
             src={colorSettings?.data?.chat_bot_pop_logo}
            //src={ChatBotIcon.src}
            alt=""
            cursor={"pointer"}
            onClick={() => setVisible(true)}
            width={60}
          />
        </div>
      </div>
    </>
  );
}

export default ChatBoot;
