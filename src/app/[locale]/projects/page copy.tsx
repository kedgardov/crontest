export default function Projects(){
    return (
    <div className="about-container">
        {/* Background V shapes */}
        <div className="fixed top-0 left-0 -z-10 w-full h-dvh bg-highlight/60 [clip-path:polygon(25%_0,0%_10%,100%_70%,100%_90%,75%_0,50%_0%)] xl:[clip-path:polygon(25%_0,0%_25%,50%_100%,100%_25%,75%_0,50%_60%)] transition-all ease-in-out duration-500"></div>

        {/*Actual coponent*/}
        <div className="about-section">
            <div className="border-3 aspect-squar h-3/5 justify-center bg-gray-400/100  border-orange-600/50">
            </div>
            <div className="h-fit w-full p-2">
                <h2 className="text-2xl text-highlight font-bold tracking-widest">SKILLS</h2>
                <p className="uppercase text-white font-semibold">Technologies:</p>
                <p className="text-white/65">Next.js, FastAPI, FlighPHP, MySQL, Docker, GIT, Cronjobs</p>
                <p className="uppercase text-white font-semibold">Languages:</p>
                <p className="text-white/65">Spanish, Engish, Typescript, Python, PHP, Go, Bash, SQL</p>
            </div>
        </div>
        <div className="about-section hidden">
            <div className="h-fit p-1">
            <h2 className="text-2xl text-highlight font-bold tracking-widest">PASSIONS</h2>
            <p className="text-white/65">Basketball, Hiking, Mountain Biking, Chess, Math Challenges, Black Coffee</p>
            </div>
            <div className="border-3 aspect-squar h-3/5 justify-center bg-gray-400/100  border-orange-600/50">
            </div>
        </div>
        <div className="about-section">
            <div className="border-3 aspect-squar h-3/5 justify-center bg-gray-400/100  border-orange-600/50">
            </div>
            <div className="h-fit p-2">
            <h2 className="text-2xl text-highlight font-bold tracking-widest">EDUCATION</h2>
                <p className="uppercase text-white font-semibold">College</p>
                <p className="text-white/65">- UACH - Chihuahua</p>
                <p className="text-white/65">- NMSU - New Mexico</p>
                <p className="uppercase text-white font-semibold">Degrees</p>
                <p className="text-white/65">- Aerospace Engieneering</p>
                <p className="text-white/65">- Mechanical Engineneering</p>
            </div>
        </div>

    </div>
    );
}