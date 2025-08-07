import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Text cleared!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/[ ]+/).join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const wordCount = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;
  const charCount = text.length;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="mb-4 text-center">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={!text}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={!text}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={!text}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          disabled={!text}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={!text}
          className="btn btn-primary mx-1 my-1"
          onClick={handleExtraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h3>Your text summary</h3>
        <p>
          {wordCount} words and {charCount} characters
        </p>
        <p>{(0.008 * wordCount).toFixed(2)} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
    </>
  );
}
