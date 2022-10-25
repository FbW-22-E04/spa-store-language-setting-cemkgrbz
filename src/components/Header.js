import { useContext } from "react";
import { Context } from "../Context";

const LanguageChooser = () => {
  const [language, setLanguage] = useContext(Context);

  return (
    <div className="text-center mt-28 mb-[12rem]" >
        <p className="font-bold ">Please select your language:</p>
        <div className="m-auto mt-4">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="DE">🇩🇪German</option>
            <option value="US">🇺🇸English</option>
            <option value="TR">🇹🇷Turkish</option>
            <option value="IR">🇮🇷Persian</option>
            <option value="FR">🇫🇷French</option>
            <option value="SP">🇪🇸Spanish</option>
            <option value="DU">🇳🇱Dutch</option>
          </select>
        </div>
    </div>
  )
}

export default LanguageChooser