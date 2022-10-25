import { useContext } from "react";
import { Context } from "../Context";

const WelcomeMessage = () => {

    const [language] = useContext(Context);

    const messages = {
        DE: "Hallo Welt!",
        US: "Hello World!",
        TR: "Selam Dünya!",
        IR: "سلام دنیا!",
        FR: "Bonjour le monde!",
        SP: "Hola Mundo!",
        DU: "Hallo Wereld!"
    };
    return (
        <div className="text-center text-8xl font-black">
            <h3>{messages[language]}</h3>
        </div>
    )
}

export default WelcomeMessage