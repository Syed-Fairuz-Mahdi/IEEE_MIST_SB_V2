import { withBase } from '../utils/paths';

export interface Chapter {
	/** URL slug used at /chapters/<slug> */
	slug: string;
	code: string;
	/** Short code used on event frontmatter (`chapter` field) */
	shortName: string;
	fullName: string;
	/** Name split into lines for the home page card */
	nameLines: string[];
	/** Full-colour logo — used only by the home page "Specialized Chapters" section. */
	logo: string;
	/** White logo supplied by the branch — for use on dark backgrounds. */
	logoWhite: string;
	bg: string;
	/** Society brand colour, sampled from the official colour logo. Drives per-chapter theming. */
	accent: string;
	tagline: string;
	description: string;
	focusAreas: string[];
	established: string;
	chair: string;
	email: string;
}

export const chapters: Chapter[] = [
	{
		slug: 'eds',
		code: 'EDS',
		shortName: 'EDS',
		fullName: 'Electron Devices Society',
		nameLines: ['ELECTRON', 'DEVICES SOCIETY'],
		logo: withBase('images/home/logo-eds.png'),
		logoWhite: withBase('images/logos/logo-eds-white.png'),
		bg: '#e9fdff',
		accent: '#00629b', // IEEE blue, sampled #006090/#0060a8
		tagline: 'Advancing semiconductor and electron device technology.',
		description:
			'Placeholder — a short paragraph describing the IEEE MIST Electron Devices Society Student Branch Chapter, its purpose, and what members can expect.',
		focusAreas: ['Semiconductor Devices', 'VLSI Design', 'Nanotechnology', 'Device Modelling'],
		established: '2023',
		chair: 'Hafsa Khan',
		email: 'eds@ieeemist.org',
	},
	{
		slug: 'aps',
		code: 'APS',
		shortName: 'APS',
		fullName: 'Antennas and Propagation Society',
		nameLines: ['ANTENNAS AND', 'PROPAGATION', 'SOCIETY'],
		logo: withBase('images/home/logo-aps.png'),
		logoWhite: withBase('images/logos/logo-aps-white.png'),
		bg: 'rgba(102, 123, 255, 0.06)',
		accent: '#2a8a94', // AP-S teal, per the chapter page's real Figma export (bg/text overrides)
		tagline: 'Exploring antennas, wave propagation, and wireless systems.',
		description:
			'Placeholder — a short paragraph describing the IEEE MIST Antennas and Propagation Society Student Branch Chapter, its purpose, and what members can expect.',
		focusAreas: ['Antenna Design', 'RF Engineering', 'Wave Propagation', 'Wireless Systems'],
		established: '2023',
		chair: 'Md. Mehedi Hasan Bhuiyan',
		email: 'aps@ieeemist.org',
	},
	{
		slug: 'wie',
		code: 'WIE',
		shortName: 'WIE',
		fullName: 'Women in Engineering',
		nameLines: ['WOMEN IN', 'ENGINEERING'],
		logo: withBase('images/home/logo-wie.png'),
		logoWhite: withBase('images/logos/logo-wie-white.png'),
		bg: 'rgba(237, 230, 238, 0.4)',
		accent: '#702082', // IEEE WIE purple, sampled #781878
		tagline: 'Inspiring, engaging, and advancing women in engineering.',
		description:
			'Placeholder — a short paragraph describing the IEEE MIST Women in Engineering Affinity Group, its purpose, and what members can expect.',
		focusAreas: ['Mentorship', 'Leadership Development', 'STEM Outreach', 'Networking'],
		established: '2022',
		chair: 'Sarah Zahin',
		email: 'wie@ieeemist.org',
	},
	{
		slug: 'mtt-s',
		code: 'MTT-S',
		shortName: 'MTT-S',
		fullName: 'Microwave Theory and Technology Society',
		nameLines: ['MICROWAVE', 'THEORY AND', 'TECHNOLOGY', 'SOCIETY'],
		logo: withBase('images/home/logo-mtts.png'),
		logoWhite: withBase('images/logos/logo-mtts-white.png'),
		bg: 'rgba(215, 212, 232, 0.4)',
		accent: '#00558f', // MTT-S blue, sampled #004890/#006090
		tagline: 'Microwave theory, techniques, and high-frequency applications.',
		description:
			'Placeholder — a short paragraph describing the IEEE MIST Microwave Theory and Technology Society Student Branch Chapter, its purpose, and what members can expect.',
		focusAreas: ['Microwave Circuits', 'Radar Systems', 'Millimeter Wave', 'Measurement'],
		established: '2023',
		chair: 'Md. Nazmul Islam Zisan',
		email: 'mtts@ieeemist.org',
	},
	{
		slug: 'sps',
		code: 'SPS',
		shortName: 'SPS',
		fullName: 'Signal Processing Society',
		nameLines: ['SIGNAL', 'PROCESSING', 'SOCIETY'],
		logo: withBase('images/home/logo-sps.png'),
		logoWhite: withBase('images/logos/logo-sps-white.png'),
		bg: 'rgba(202, 234, 211, 0.4)',
		accent: '#2e7d32', // SPS green, per the chapter page's real Figma export (hero gradient stop)
		tagline: 'Signal, image, and information processing for a smarter world.',
		description:
			'Placeholder — a short paragraph describing the IEEE MIST Signal Processing Society Student Branch Chapter, its purpose, and what members can expect.',
		focusAreas: ['Machine Learning', 'Image Processing', 'Speech & Audio', 'Biomedical Signals'],
		established: '2023',
		chair: 'Mahdia Binte Maksud',
		email: 'sps@ieeemist.org',
	},
	{
		slug: 'npss',
		code: 'NPSS',
		shortName: 'NPSS',
		fullName: 'Nuclear and Plasma Sciences Society',
		nameLines: ['NUCLEAR AND', 'PLASMA SCIENCES', 'SOCIETY'],
		logo: withBase('images/home/logo-npss.png'),
		logoWhite: withBase('images/logos/logo-npss-white.png'),
		bg: 'rgba(121, 40, 55, 0.08)',
		accent: '#792837', // NPSS maroon, from the official logo background
		tagline: 'Placeholder — a one-line tagline for this chapter.',
		description:
			'Placeholder — a short paragraph describing the IEEE MIST Nuclear and Plasma Sciences Society Student Branch Chapter, its purpose, and what members can expect.',
		focusAreas: [],
		established: '',
		chair: 'Sadia Noushin Promi',
		email: '',
	},
	{
		slug: 'embs',
		code: 'EMBS',
		shortName: 'EMBS',
		fullName: 'Engineering in Medicine and Biology Society',
		nameLines: ['ENGINEERING IN', 'MEDICINE AND', 'BIOLOGY SOCIETY'],
		logo: withBase('images/home/logo-embs.png'),
		logoWhite: withBase('images/logos/logo-embs-white.png'),
		bg: 'rgba(120, 42, 128, 0.08)',
		accent: '#782a80', // EMBS purple, sampled from the official colour logo
		tagline: 'Placeholder — a one-line tagline for this chapter.',
		description:
			'Our Student Chapter at MIST provides a platform for students to explore biomedical engineering through technical learning, research, innovation, professional development, and collaboration, while connecting them with the wider IEEE EMBS community.',
		focusAreas: [],
		established: '',
		chair: 'Parsa Nusaiba Shafi',
		email: '',
	},
];

export function getChapter(slug: string): Chapter | undefined {
	return chapters.find((chapter) => chapter.slug === slug);
}
