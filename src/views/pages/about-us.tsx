import Newsletter from "../components/common/Newsletter";
import Services from "../components/common/Services";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Hero from "../components/about/Hero";
import Details from "../components/about/details";

const AboutUs = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Details />
			<Services />
			<Newsletter />
			<Footer />
		</>
	);
};

export default AboutUs;
