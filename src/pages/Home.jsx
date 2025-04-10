export default function Home() {
    return (
        <>
        {/*Banner*/}
        <section className="text-center mt-20">
            <h1 className="text-4xl font-bold">Johnson Zhao</h1>
            <h2 className="mt-4 text-lg">Senior Full Stack Developer</h2>
        </section>

        {/*Content*/}
        <section id="one" class="wrapper style1">
				<div class="inner">
					<article class="feature left">
						<span class="image"><img src="./images/2019nerc.jpg" alt="2019 NERC"/></span>
						<div class="content">
							<h2>About Me</h2>
							<p>Full Stack Developer, Senior Consultant at Booz Allen Hamilton. 
								Bachelor's Degree in Computer Engineering. 
								Experience in Electrical Engineering, Software Engineering, Systems Administration, and Full Stack Development. 
							</p>
							<ul class="actions">
								<li>
									<a href="about.html" class="button alt">More</a>
								</li>
							</ul>
						</div>
					</article>
					<article class="feature right">
						<span class="image"><img src="./images/gaming1.jpg" alt="2018 Rutgers Tournament" /></span>
						<div class="content">
							<h2>Gaming</h2>
							<p>Competitive Experience in League of Legends, Fortnite, Apex Legends, Teamfight Tactics, and Valorant</p>
							<ul class="actions">
								<li>
									<a href="gaming.html" class="button alt">More</a>
								</li>
							</ul>
						</div>
					</article>
					<article class="feature left">
						<span class="image"><img src="./images/vball2.jpg" alt="Philly Mini 2024" /></span>
						<div class="content">
							<h2>Sports</h2>
							<p>Competitive Experience in Basketball and Volleyball</p>
							<ul class="actions">
								<li>
									<a href="sports.html" class="button alt">More</a>
								</li>
							</ul>
						</div>
					</article>
					<article class="feature right">
							<span class="image"><img src=".//images/watch1.JPG" alt="Selfie through Watch" /></span>
							<div class="content">
								<h2>Portfolio</h2>
								<p>Photograghs for SASE and Intro to Photography Class.</p>
								<ul class="actions">
									<li>
										<a href="portfolio.html" class="button alt">More</a>
									</li>
								</ul>
							</div>
						</article>
				</div>
			</section>
            </>
    )
}
