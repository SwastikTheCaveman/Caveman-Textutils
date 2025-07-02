import React, { useState } from 'react'

export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",
    // })
    let myStyle = {
        color: props.theme === 'dark' ? 'white' : '#343a40',
        backgroundColor: props.theme === 'dark' ? '#343a40' : 'white'
    }
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const toggleTheme = () => {
        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
            })
            setBtnText("Enable Light Mode")
        } else {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
            })
            setBtnText("Enable Dark Mode")
        }
    }


    return (
        <div className="container" style={myStyle}>
            <h2 className='my-4'><b>About This Tool</b></h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Text Analyzer and Modifier</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This is a powerful text analyzer and modifier.</strong> It allows you to convert text to uppercase or lowercase, clear the text, and even copy it to the clipboard. The tool is designed to enhance your text editing experience with ease of use and efficiency. You can also apply styles like bold and italic to your text, making it versatile for various applications.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free and Open Source</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This tool is 100% free and open-source.</strong> It is built with React and is available for anyone to use and contribute to. The source code is accessible on GitHub, allowing developers to modify and enhance the tool as per their needs. This commitment to openness ensures that the tool remains accessible and adaptable for a wide range of users.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>All devices supported</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This tool is supported across all devices.</strong> It has been designed to work well on desktop, tablet, and mobile devices, making it accessible and user-friendly for a wide range of users.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
