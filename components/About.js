import React from "react";

function About() {
	return (
		<div className="w-11/12 mx-auto mt-32 text-violet-500 p-1">
			<div>
				<h1 className="text-xl sm:text-2xl font-medium">
					<span className="border-b-4 border-amber-400  ">What is Pomodoro
					Technique?</span>
				</h1>
				<p className="mt-5 tracking-wide opacity-70 text-lg">
					The Pomodoro Technique is created by Francesco Cirillo for a more
					productive way to work and study. The technique uses a timer to break
					down work into intervals, traditionally 25 minutes in length,
					separated by short breaks. Each interval is known as a pomodoro, from
					the Italian word for 'tomato', after the tomato-shaped kitchen timer
					that Cirillo used as a university student.
				</p>
			</div>
		</div>
	);
}

export default About;