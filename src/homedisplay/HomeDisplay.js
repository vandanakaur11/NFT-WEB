const HomeDisplay = () => {
    return (
        <div>
            <div className="home-display">
                <div className="home-content">
                    <h1 style={{ fontSize: "50px", color: "#9e1b32" }}>YOUR WAY TO NFT</h1>
                    <h4 style={{ fontFamily: "cursive", fontWeight: "lighter" }}>Get Into NFT And Experience New Areas</h4>
                    <div
                        className="homedisplay-btn"
                        style={{
                            border: "2px solid #9e1b32",
                            width: "25%",
                            textAlign: "center",
                            padding: "15px",
                            borderTopRightRadius: "15px",
                            borderBottomLeftRadius: "15px",
                            fontFamily: "monospace",
                            fontSize: "16px",
                        }}
                    >
                        Enter
                    </div>
                </div>
                {/* <div style={{ width: "30vw", textAlign: "center", height: "15vh" }}>
                    <img
                        className="image"
                        src="https://cdn1.vectorstock.com/i/thumb-large/10/45/red-stamp-and-icon-bitcoin-vector-33331045.jpg"
                        style={{
                            height: "20vh",
                            borderRadius: "40%",
                            width: "14vw",
                            boxShadow: " 2px 2px 15px #9e1b32",
                            border: "2px solid #9e1b32",
                        }}
                    />
                </div> */}
                <i
                    className="fab fa-bitcoin fa-9x"
                    id="image"
                    style={{ height: "10vh", width: "30vw", textAlign: "center", color: "#9e1b32" }}
                ></i>
            </div>
        </div>
    );
};

export default HomeDisplay;
