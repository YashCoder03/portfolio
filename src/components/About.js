import { Link } from 'react-router-dom';
import Title from './Title';
import profilePicture from '../assets/images/about-img.png';

const About = ({ showMore = false }) => {
	return (
		<section className="section about">
			<div className="section-center about-center">
				<article className="about-img" data-border="yes">
					<img
						className="hero-photo"
						src={profilePicture}
						alt="Yash Deshmukh profile"
					/>
				</article>
				<article className="about-info">
					<Title title="about" className="about-title" />
					<p>
						I am a Full Stack developer in Rockwell Automation with a keen interest in technology. Beside
						challenging myself, I love learning new technologies and languages.
					</p>
					<p>
						Starting as a full-time software developer, I have worked with JAVA,
						SQL, Mern Stack and Spring-Boot. I am currently working in Rockwell Automation 
						specializes in back-end development, algorithms, and data structure.
					</p>
					{showMore && (
						<Link className="btn" to="/about/">
							learn more
						</Link>
					)}
				</article>
			</div>
		</section>
	);
};

export default About;
