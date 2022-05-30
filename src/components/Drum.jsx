import { useEffect, useState } from "react";

function Drum(props) {
	const [playing, setPlaying] = useState(false);
	const play = () => {
		setPlaying(true);

		new Audio(props.sound).play();

		setTimeout(() => {
			setPlaying(false);
		}, 150);
	};

	function handlePlay() {
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === props.letter.toLowerCase()) {
				play();
			}
		});
		return document.removeEventListener('keydown', handlePlay)
    }
    

	useEffect(() => {
		handlePlay()
	});

	return (
		<div className={`drum ${playing ? "playing" : ""}`} onClick={play}>
			<div className="key">{props.letter}</div>
		</div>
	);
}

export default Drum;
