import React, { useState } from 'react'
import PropTypes, { element } from 'prop-types'

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
        // var textBox = document.getElementById('textbox');
        // textBox.select();
        // textBox.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(Text);
        props.showAlert('Copied to Clipboard!', 'success')
        // document.getSelection().removeAllRanges();
    }
    let characters = Text.length
    let words = Text.split(/\s+/).filter((element) => { return element.length !== 0 }).length
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
                <button className="btn btn-dark mx-2 my-2" onClick={HandleUpClick} disabled={Text.length === 0}>
                    Convert to UpperCase
                </button>
                <button className="btn btn-dark mx-2 my-2" onClick={HandleLowClick} disabled={Text.length === 0}>
                    Convert to LowerCase
                </button>
                <button className="btn btn-dark mx-2 my-2" onClick={HandleClearText} disabled={Text.length === 0}>
                    Clear Text
                </button>
                <button className="btn btn-dark mx-2 my-2" onClick={StyleText} disabled={Text.length === 0}>
                    Bold
                </button>
                <button className="btn btn-dark mx-2 my-2" onClick={ItalicText} disabled={Text.length === 0}>
                    Italic
                </button>
                <button className="btn btn-dark mx-2 my-2" onClick={HandleCopy} disabled={Text.length === 0}>
                    Copy Text
                </button>
            </div>
            <div className="container2 my-3" style={{ color: props.Theme === 'dark' ? 'white' : 'black' }}>
                <h2><strong>Your Text Summary</strong></h2>
                <p>
                    {characters} Characters and {words} Words
                </p>
                <p>{words * 0.008} minutes read</p>
                <h2><strong>Preview</strong></h2>
                <p>
                    {isBold ? (
                        <b>{isItalic ? <i>{Text}</i> : Text}</b>
                    ) : isItalic ? (
                        <i>{Text}</i>
                    ) : (
                        Text.length > 0 ? Text : "Nothing to preview!"
                    )}
                </p>
            </div>
        </>
    )
}
TextForm.PropTypes = {
    rows: PropTypes.number.isRequired,
}