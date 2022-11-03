import React from "react";

function Meme() {
  const [memeImage, setImage] = React.useState({
    topText: "",
    bottomText: "",
    imageUrl: "",
  });

  const [allMemeImages, setAllMemeImages] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemeImages(data.data.memes));
  }, []);

  console.log(memeImage.topText, memeImage.bottomText);
  function getText(event) {
    const { name, value } = event.target;
    setImage((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function generateMeme(e) {
    e.preventDefault();
    const index = Math.floor(Math.random() * allMemeImages.length);

    setImage((prevImage) => {
      return {
        ...prevImage,
        imageUrl: allMemeImages[index].url,
      };
    });
  }

  return (
    <div className="meme-form">
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="input-field"
          name="topText"
          value={memeImage.topText}
          onChange={getText}
        ></input>
        <input
          type="text"
          placeholder="Bottom text"
          className="input-field"
          name="bottomText"
          value={memeImage.bottomText}
          onChange={getText}
        ></input>

        <button onClick={generateMeme}>Get a new meme image</button>
      </form>
      <div className="meme">
        {memeImage.imageUrl && (
          <h2 className="meme-text top">{memeImage.topText}</h2>
        )}
        {memeImage.imageUrl && (
          <h2 className="meme-text bottom">{memeImage.bottomText}</h2>
        )}
        <img
          src={memeImage.imageUrl}
          className="meme-image"
          alt=""
          onError={(e) => (e.target.style.display = "none")}
          onLoad={(e) => (e.target.style.display = "")}
        ></img>
      </div>
    </div>
  );
}

export default Meme;
