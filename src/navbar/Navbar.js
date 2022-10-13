const Navbar = () => {
    return (
        <div>
            <div
                style={{
                    // backgroundColor: "#0b0a1b",
                    width: "100%",
                    // height: "10vh",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                }}
                className="navbar"
            >
                <div style={{ color: "white", fontSize: "30px", fontFamily: "fantasy", width: "20vw" }}>NFT LoGo</div>
                <div style={{ display: "flex", width: "35vw", height: "3vh", justifyContent: "space-evenly" }}>
                    <div className="nav-option">About</div>
                    <div className="nav-option">Claim</div>
                    <div className="nav-option">Vote</div>
                    <div className="nav-option">Detail</div>
                </div>
                <div
                    style={{
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        // border: "1px solid green",
                        width: "25vw",
                        justifyContent: "space-around",
                    }}
                >
                    <i className="fab fa-twitter fa-2x" id="nav-icon"></i>
                    <i className="fas fa-gamepad fa-2x" id="nav-icon"></i>
                    <i className="fab fa-bitcoin fa-2x" id="nav-icon"></i>
                    <div
                        className="nav-btn"
                        style={{
                            color: "white",
                            fontFamily: "monospace",
                            fontSize: "15px",
                            padding: "15px",
                            border: "2px solid #9e1b32",
                            borderRadius: "5px",
                        }}
                    >
                        Connect Wallet
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
