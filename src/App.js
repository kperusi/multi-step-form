// import logo from './logo.svg';
import "./App.css";
import Bg from "./components/bg/Bg";
import { StepContext } from "./context/StepContext";
import { BrowserRouter } from "react-router-dom";
import { PageData } from "./components/PageData";
import { useEffect, useReducer, useState } from "react";

const initialValue = {
  firstStep: "",
  secondStep: "",
  thirdStep: "",
  forthStep: "",
  wrapDisplay: "",
};
const inputInitials = {
  name: "",
  email: "",
  phoneNumber: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "step1":
      return {
        firstStep: "checked",
        secondStep: "",
        thirdStep: "",
        forthStep: "",
      };

    case "step2":
      return {
        firstStep: "",
        secondStep: "checked",
        thirdStep: "",
        forthStep: "",
      };
    case "step3":
      return {
        firstStep: "",
        secondStep: "",
        thirdStep: "checked",
        forthStep: "",
      };
    case "step4":
      return {
        firstStep: "",
        secondStep: "",
        thirdStep: "",
        forthStep: "checked",
      };
    case "wrapdisplay":
      return {
        wrapDisplay: "wrap-display",
      };
    default:
      return state;
  }
};

const inputReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        name: action.payload,
        email: state.email,
        phoneNumber: state.phoneNumber,
      };

    case "email":
      return {
        name: state.name,
        email: action.payload2,
        phoneNumber: state.phoneNumber,
      };
    case "phoneNumber":
      return {
        name: state.name,
        email: state.email,
        phoneNumber: action.payload3,
      };
    default:
      return state;
  }
};

export default function App() {
  const [check, setChecked] = useState(false);
  const [next, setNext] = useState(0);
  const [buttonText, setButtonText] = useState("Next Step");
  const [display, setDisplay] = useState("display");
  const [steps, dispatch] = useReducer(reducer, initialValue);
  const [inputs, inputDispatch] = useReducer(inputReducer, inputInitials);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPhoneNumberEmpty, setIsPhoneNumberEmpty] = useState(false);
  const [isEmptyClass, setIsEmptyClass] = useState('');
  const [emailEmptyClass, setEmailEmptyClass] = useState('');
  const [phoneNumberEmptyClass, setPhoneNumberEmptyClass] = useState('');



  const checkHandler = (e) => {
    setChecked(e.target.checked);
  };

  const nextHandler = (e) => {
    e.preventDefault();
    if (next < 4) {
      setNext(next + 1);
    }
    if (next === 2) {
      setButtonText("Confirm");
    }
   
    if (inputs.name === "") {
      setIsNameEmpty(true);
      setIsEmptyClass(`empty`);
      setNext(0);
    }
    if(inputs.email===''){
      setIsEmailEmpty(true);
      setEmailEmptyClass(`empty`);
      setNext(0)
    }
    if(inputs.phoneNumber===''){
      setIsPhoneNumberEmpty(true)
      setPhoneNumberEmptyClass('empty')
      setNext(0)
    }
  };

  const backHandler = (e) => {
    e.preventDefault();

    if (next !== 0) {
      setNext(next - 1);
    }
    if (next === 1) {
      setDisplay("display");
    }
  };
  const nameHandler = (e) => {
    inputDispatch({ type: "name", payload: e.target.value });
    setIsNameEmpty(false)
    setIsEmptyClass('')
  };

  const emailHandler = (e) => {
    inputDispatch({ type: "email", payload2: e.target.value });
    setIsEmailEmpty(false)
    setEmailEmptyClass('')
  };

  const phoneNumberHandler = (e) => {
    inputDispatch({ type: "phoneNumber", payload3: e.target.value });
    setIsPhoneNumberEmpty(false)
    setPhoneNumberEmptyClass('')
  };

  useEffect(() => {
    if (next === 0) {
    
      dispatch({ type: "step1" });
    }
    if (next === 1) {
      dispatch({ type: "step2" });
    }
    if (next === 2) {
      dispatch({ type: "step3" });
    }
    if (next === 3) {
      dispatch({ type: "step4" });
    }
    if (next < 3) {
      setButtonText("Next Step");
    }
    if (next === 4) {
      dispatch({ type: "wrapdisplay" });
    }
    if (next > 0) {
      setDisplay("");
    }
  }, [next]);

  console.log(next);
  console.log("this is name", inputs.name);

  let pageList = PageData.slice(next, next + 1).map((component, index) => (
    <div key={index}>{<component.name name="them" />}</div>
  ));

  return (
    <div className="App">
      <BrowserRouter>
        <StepContext.Provider
          value={{
            steps: steps,
            check: check,
            checkHandler: checkHandler,
            nameHandler: nameHandler,
            name: inputs.name,
            emailHandler: emailHandler,
            email: inputs.email,
            phoneNumberHandler: phoneNumberHandler,
            phoneNumber: inputs.phoneNumber,
            isNameEmpty: isNameEmpty,
            isEmailEmpty:isEmailEmpty,
            isPhoneNumberEmpty:isPhoneNumberEmpty,
            isEmptyClass:isEmptyClass,
            emailEmptyClass:emailEmptyClass,
            phoneNumberEmptyClass:phoneNumberEmptyClass,
          }}
        >
          <Bg />
          <div className="main">
            {pageList}
            <div className={`btn-wrap ${steps.wrapDisplay} `}>
              <button
                className={`btn btn-back ${display} `}
                onClick={backHandler}
              >
                Go Back
              </button>
              <button
                className={`btn btn-next ${steps.wrapDisplay}`}
                onClick={nextHandler}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </StepContext.Provider>
      </BrowserRouter>
    </div>
  );
}

// export default App;
