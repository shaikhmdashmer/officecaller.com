import React, { useState, useRef, useEffect } from "react";
import ImageList from "./ImageList";

function FeatureList() {
  const [active, setActive] = useState(
    localStorage.getItem("ActivePlan") || ""
  );
  const scrollContainerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [colorSettings, setColorSettings] = useState(null);


  useEffect(()=>{
   const ThemeData = JSON.parse(localStorage.getItem("ColorTheme"));
   console.log("Theme-data" , ThemeData)
   setColorSettings(ThemeData)
  },[])
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2;
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  //sagar

  const [moduleFeatures, setModuleFeatures] = useState([]);
  const [error, setError] = useState(null);
  const [getInnerModul, setInnerModule] = useState([]);
  const [getActiveName, setActiveName] = useState("");

 
  useEffect(() => {
    const selected_domain_id = 25;
    const selected_category_id = 73;
    // https://admin.officecaller.com/api/modules_features/?domain_id=25&category_id=73
    // https://admin.officecaller.com/api/admin_panel_modules_features/?domain_id=${selected_domain_id}&category_id=${selected_category_id}
    const fetchModuleFeatures = async () => {
      try {
        const response = await fetch(
          `https://admin.officecaller.com/api/modules_features/?domain_id=25&category_id=73`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const features = data?.modules_features || [];
        const tempData = features.map((data, index) => {
          const newKey = data.module
            ? data.module
                .replaceAll(" ", "_")
                .replaceAll("&", "a")
                .replaceAll("-", "b")
            : "";

          console.log(newKey);
          return {
            ...data,
            icon: ImageList[newKey],
          };
        });
        console.log(tempData);
        setModuleFeatures(tempData);
      } catch (err) {
        setError(err.message);
        setModuleFeatures([]);
      } finally {
        // alert("problem")
      }
    };

    fetchModuleFeatures();
  }, []);

  const test = (moduleName) => {
    const basic_features =
      moduleFeatures.find((it) => it.module === moduleName)?.basic_features ||
      [];
    const advanced_features =
      moduleFeatures.find((it) => it.module === moduleName)
        ?.advanced_features || [];
    const innerModule = [...basic_features, ...advanced_features];
    setInnerModule(innerModule);
  };






  return (
    <div>
      <div
        className="d-flex service-container mobile"
        style={{ marginTop: "70px" }}
      >
        <div className="scroll-container" ref={scrollContainerRef}>
          <div className="plansCardBox">
          
      { moduleFeatures.map((i, index) => (
          <div
            key={index}
            className={"text-center plansCard mt-2"}
            style={active === i.module ? { backgroundColor: colorSettings?.data?.primary_background_color, color: "white" }: null}
            onClick={() => {
              setActiveName(i.module);
              setActive(i.module);
              test(i.module);
              //  alert(i.module)
            }}
          >
            {console.log("Name-->", i)}

            <img src={`${i?.icon?.default?.src}`} alt={i.module} />
            <h6
              className="serviceTitle small_font_size"
              style={active === i.module ? { color: "white" } : null}
            >
              {i.module}
            </h6>
          </div>
        ))
      }
    
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-2">
        {getActiveName ? (
          <span className="message small_font_size message-cmt"
          style={{backgroundColor: colorSettings?.data?.primary_background_color , color:colorSettings?.data?.secondary_text_color}}
          >
            {getActiveName}
          </span>
        ) : (
          <span></span>
        )}
      </div>

      <div className="d-flex gy-2 justify-content-between service-container slide-from-right">
        <div className="vt-scroll-container">
          <div className="data-list">
            <ul>
              {getInnerModul?.map((i, index) => (
                <li key={index}>{i.feature}</li>
              ))}
            </ul>
           
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureList;
