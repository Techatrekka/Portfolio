/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortfolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortfolioData[]}
 */
export const portfolioData = [
	{
		imgSrc: '/Portfolio/img/clos_logo.png',
		title: 'Clois',
		skills: ['Flutter', 'JavaScript'],
		descripcion:
			'Project’s focus is on providing a platform similar in concept to audible, focusing on audiobooks and native Irish Folklore Stories',
		demoURL: '',
		repoURL: 'https://github.com/Techatrekka/clos',
		anim: 'fade-right',
	},
	{
		imgSrc: '/Portfolio/img/PortfolioImage.png',
		title: 'Portfolio',
		skills: [
			'JavaScript',
			'React',
			'Astro',
			'CSS',
			'Bootstrap',
			'Tailwind',
		],
		descripcion:
			'Portfolio website built with Astro, React and Tailwind, showcasing my projects and skills',
		demoURL: 'https://techatrekka.github.io/Portfolio/',
		repoURL: 'https://github.com/Techatrekka/Portfolio',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/Portfolio/img/SpaceBean.png',
		title: 'Space Bean',
		skills: ['Python'],
		descripcion:
			'Developed an application that could render an asteroid from an stl file and its subsequent light curve. The application allowed the user to manipulate the asteroid and the light source, showing in real time how the light curve was affected by this',
		demoURL:
			'https://2021.spaceappschallenge.org/challenges/statements/when-light-curves-throw-us-curve-balls/teams/space-bean-hunters/project',
		repoURL: 'https://github.com/Techatrekka/SpaceBean',
		anim: 'fade-left',
	},
	{
		imgSrc: '/Portfolio/img/paperPreview.png',
		title: 'mHealth Use in Healthcare Facilities: ',
		skills: [],
		descripcion:
			'Raising Awareness in Data Protection, Privacy and Safety, by analyzing the attitudes of healthcare professionals towards mHealth and the risks they perceive from using it',
		demoURL:
			'https://www.researchgate.net/publication/358839296_mHealth_Use_in_Healthcare_Facilities_Raising_Awareness_in_Data_Protection_Privacy_and_Safety',
		repoURL:
			'https://www.researchgate.net/publication/358839296_mHealth_Use_in_Healthcare_Facilities_Raising_Awareness_in_Data_Protection_Privacy_and_Safety',
		anim: 'fade-left',
	},
	{
		imgSrc: '/Portfolio/img/Whack-a-Mole.png',
		title: 'VR Whack-a-Mole',
		skills: ['Dotnet', 'CSharp', 'Godot'],
		descripcion:
			'A VR game developed in Godot using C# and Dotnet, where the player has to hit moles that pop up from holes',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/Portfolio/img/ReinforcementLearning.png',
		title: 'Learning to play Atari using Deep Reinforcement Learning',
		skills: ['Latex'],
		descripcion:
			'Dissertation on Reinforcement Learning, going through my process of developing a double DQN agent to play Atari games, and the results I got from it',
		demoURL: 'https://www.overleaf.com/read/gjkmwzhtwswv#3726e5',
		repoURL: '',
		anim: 'fade-right',
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	Java: 'skill-icons:java-light',
	Python: 'skill-icons:python-light',
	Flutter: 'skill-icons:flutter-light',
	Latex: 'skill-icons:latex-light',
	FSharp: 'devicon:fsharp',
	CSharp: 'devicon:csharp',
	Dotnet: 'skill-icons:dotnet',
	Godot: 'skill-icons:godot-dark',
};

export const getPortfolioData = portfolioData.map((item) => {
	return {
		// All previous content of the item is placed
		...item,
		// The skills are replaced with the corresponding icons
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
