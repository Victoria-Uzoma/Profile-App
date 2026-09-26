function About() {
    return (
        <section className="page-section">
            <div className="page-header">
                <p className="eyebrow">ABOUT ME</p>

                <h1>More Than Just <span>Code.</span></h1>
                <p>A deeper look at who, What I do and Why I keep learning</p>
            </div>
            <div className="about-grid">
                <div className="about-main">
                    <h2>My Story</h2>

                    <p>I'm Victoria Uzoma, a developer and creative who enjoys understanding how digital product works from the interface to the backend</p>
                    <p>My journey has taken me through frontend development, backend development and graphic design. Each area has helped me understand technology from a different perspective.</p>
                    <p>I enjoy learning by building. Instead of only studying concepts, I like turning what I learned into small projects that I can understand, explain and improve.</p>
                </div>

                <aside className="about-side">
                    <div className="info-box">
                        <span>FOCUS</span>
                        <strong>Web Development</strong>
                    </div>
                    <div className="info-box">
                        <span>INTEREST</span>
                        <strong>Technology . Design . Learning</strong>
                    </div>
                    <div className="info-box">
                        <span>APPROACH</span>
                        <strong>Learn . Build . Improve</strong>
                    </div>
                </aside>
            </div>
        </section>
    );
}

export default About