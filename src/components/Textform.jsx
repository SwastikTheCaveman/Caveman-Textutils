import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [Text, setText] = useState('')
    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)

    const OnChange = (event) => {
        setText(event.target.value)
    }
    const HandleUpClick = () => {
        let newText = Text.toUpperCase()
        setText(newText)
        props.showAlert('Converted to UpperCase!', 'success')
    }
    const HandleLowClick = () => {
        let newText = Text.toLowerCase()
        setText(newText)
        props.showAlert('Converted to LowerCase!', 'success')
    }
    const HandleClearText = () => {
        let newText = ''
        setText(newText)
        props.showAlert('Text Cleared!', 'success')
    }
    const StyleText = () => {
        setIsBold(!isBold)
        props.showAlert(isBold ? 'Bold style removed!' : 'Bold style applied!', 'success')
    }
    const ItalicText = () => {
        setIsItalic(!isItalic)
        props.showAlert(isItalic ? 'Italic style removed!' : 'Italic style applied!', 'success')
    }
    const HandleCopy = () => {
        var textBox = document.getElementById('textbox')
        textBox.select()
        textBox.setSelectionRange(0, 99999) // For mobile devices
        navigator.clipboard.writeText(textBox.value)
        props.showAlert('Copied to Clipboard!', 'success')
    }
    let characters = Text.length
    let words = Text.split(' ').length
    return (
        <>
            <div className="container" style={{ color: props.Theme === 'dark' ? 'white' : 'black' }}>
                <h1>{props.Heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={Text}
                        onChange={OnChange}
                        id="textbox"
                        rows={props.Rows}
                        style={{
                            fontWeight: isBold ? 'bold' : 'normal',
                            fontStyle: isItalic ? 'italic' : 'normal',
                            backgroundColor: props.Theme === 'dark' ? '#343a40' : 'white',
                            color: props.Theme === 'dark' ? 'white' : 'black'
                        }}
                    ></textarea>
                </div>
                <button className="btn btn-dark mx-2" onClick={HandleUpClick}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-dark mx-2" onClick={HandleLowClick}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-dark mx-2" onClick={HandleClearText}>
                    Clear Text
                </button>
                <button className="btn btn-dark mx-2" onClick={StyleText}>
                    Bold
                </button>
                <button className="btn btn-dark mx-2" onClick={ItalicText}>
                    Italic
                </button>
                <button className="btn btn-dark mx-2" onClick={HandleCopy}>
                    Copy Text
                </button>
            </div>
            <div className="container2 my-3" style={{ color: props.Theme === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>
                    {characters} Characters and {words} Words
                </p>
                <p>{words * 0.008} minutes read</p>
                <h2>Preview</h2>
                <p>
                    {isBold ? (
                        <b>{isItalic ? <i>{Text}</i> : Text}</b>
                    ) : isItalic ? (
                        <i>{Text}</i>
                    ) : (
                        Text.length > 0 ? Text : "Enter text in the box to preview"
                    )}
                </p>
            </div>
        </>
    )
}
TextForm.PropTypes = {
    rows: PropTypes.number.isRequired,
}