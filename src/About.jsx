import animatedLogo from "./data/color-hunt-logo-animation.gif"
function About() {
    return (
        <div className="page">
            <div className="contentPage aboutPage">
                <div className="center">
                    <img src={animatedLogo} className="animatedLogo" />
                    <h1 className="title">Color Hunt</h1>
                    <p>Color Hunt is an open collection of beautiful color palettes, created by Gal Shir. Color Hunt started as a personal small project built to share trendy color combinations between a group of designer friends. The collection scaled up and now being used daily as a handy resources by thousands of people all over the world. Color Hunt was created with the goal of celebrating the beauty of colors, and to serve as a go-to resource for color inspiration.</p>
                    <div className="title">Who creates the color palettes?</div>
                    <p>You, the users, are the ones who create the palettes using Color Hunt’s palette creator. The collection is open, and everyone can create and submit their own color combination. That’s how we keep Color Hunt diverse, colorful, social and inspiring. Each palette is a public property and not owned by a specific creator, nor by Color Hunt.</p>
                    <div className="title">Which palettes get featured?</div>
                    <p>Color Hunt is open, but is also curated. It means that all the palettes are hand-picked by Color Hunt’s curators. Each submission of a color palette is being reviewed to make sure it fits the collection’s goals. Each day, the very best submission is being picked up and will be visible on the homepage in the day after.</p>
                    <div className="title">Made by Gal Shir</div>
                    <p>Color Hunt was founded by Gal Shir, designer and artist from Tel Aviv who is passioned about colors. Gal runs Color Hunt since 2015 with the goal of sharing that passion with the world, and provide a handy resource for designers and artists.</p>
                    <div className="title">Partnerships/sponsorships</div>
                    <p>Reach out to hello@galshir.com</p>
                </div>
            </div>
        </div>
    )
}
export default About;