const page_meta = {
	titlePrefix: '',
	titleSuffix: ' - Yash Deshmukh',
	twitterUser: 'Yash Deshmukh',
	pages: [
		{
			id: 'home',
			title: 'Home',
			description:
				"I am a developer with a keen interest in technology, who doesn't fear computers rather fear the lack of them.",
			paths: ['/', ''],
			image: 'home.png',
			type: 'website',
		},
		{
			id: 'about',
			title: 'About Me',
			description: 'Learn more about Yash',
			paths: ['/about', '/about/'],
			type: 'website',
		},
		{
			id: 'projects',
			title: 'Projects',
			description: 'Projects developed by Yash.',
			paths: ['/projects', '/projects/'],
			type: 'website',
		},
		{
			id: 'contact',
			title: 'Contact',
			description: 'Contact details of Yash.',
			paths: ['/contact', '/contact/'],
			type: 'website',
		},
	],
};

export default page_meta;
