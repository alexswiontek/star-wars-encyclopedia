const ParticleOptions = {
		particles: {
				number: {
						value: 160,
						density: {
								enable: true,
								value_area: 800
						}
				},
				color: {
						value: "#ffffff"
				},
				shape: {
						type: "circle",
						stroke: {
								width: 0,
								color: "#000000"
						},
						polygon: {
								nb_sides: 5
						}
				},
				opacity: {
						value: 1,
						random: true,
						anim: {
								enable: true,
								speed: 1,
								opacity_min: 0,
								sync: false
						}
				},
				size: {
						value: 3,
						random: true,
						anim: {
								enable: false,
								speed: 4,
								size_min: 0.3,
								sync: false
						}
				},
				line_linked: {
            enable: false,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1
				},
				move: {
						enable: true,
						speed: 2,
						direction: "none",
						random: true,
						straight: false,
						out_mode: "out",
						bounce: false,
						attract: {
								enable: false,
								rotateX: 600,
								rotateY: 600
						}
				}
		},
		interactivity: {
				detect_on: "window",
				events: {
						onhover: {
								enable: true,
								mode: "bubble"
						},
						onclick: {
								enable: true,
								mode: "repulse"
						},
						resize: true
				},
				modes: {
						grab: {
								distance: 400,
								line_linked: {
										opacity: 1
								}
						},
						bubble: {
								distance: 215.7842157842158,
								size: 20,
								duration: 1.918081918081918,
								opacity: 0.06393606393606394,
								speed: 3
						},
						repulse: {
								distance: 200,
								duration: 0.4
						},
						push: {
								particles_nb: 4
						},
						remove: {
								particles_nb: 2
						}
				}
		}
};

export default ParticleOptions;
